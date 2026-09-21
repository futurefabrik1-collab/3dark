#!/usr/bin/env node
// Zero-dependency page inspector: drives headless Chrome over the DevTools
// protocol (Node >= 22 global WebSocket). Takes a screenshot and reports
// console errors, failed requests and bad HTTP statuses as JSON on stdout.
//
//   node shot.mjs --url URL --out file.png
//        [--width 1440] [--height 900] [--mobile]        viewport (mobile = 390x844 @3x, touch)
//        [--full]                                         capture the whole page (viewport is
//                                                         stretched to page height first so
//                                                         in-view animations all fire)
//        [--selector "#contact"]                          clip the shot to one element
//        [--theme light|dark] [--lang en|de]              pre-seed the site's localStorage keys
//        [--consent declined|accepted]                    hide the cookie banner
//        [--block-storage]                                make localStorage throw, like a browser
//                                                         set to block site data
//        [--wait 2500]                                    settle time in ms after load
//        [--eval "js expression"]                         evaluate in page, result -> "eval" field
//
// Each run uses its own throwaway Chrome profile, so parallel runs are safe.
import { spawn } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const argv = process.argv.slice(2);
const opt = (name, def) => { const i = argv.indexOf(`--${name}`); return i === -1 ? def : (argv[i + 1]?.startsWith('--') || argv[i + 1] === undefined ? true : argv[i + 1]); };
const url = opt('url'); const out = opt('out');
if (!url || !out) { console.error('usage: node shot.mjs --url URL --out file.png [options]'); process.exit(2); }
const mobile = opt('mobile', false) === true;
const width = Number(opt('width', mobile ? 390 : 1440));
const height = Number(opt('height', mobile ? 844 : 900));
const full = opt('full', false) === true;
const selector = opt('selector', null);
const theme = opt('theme', null); const lang = opt('lang', null); const consent = opt('consent', null);
const wait = Number(opt('wait', 2500));
const blockStorage = opt('block-storage', false) === true;
const evalExpr = opt('eval', null);

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const profile = mkdtempSync(join(tmpdir(), 'shot-'));
const chrome = spawn(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', '--no-default-browser-check',
  '--remote-debugging-port=0', `--user-data-dir=${profile}`, '--autoplay-policy=no-user-gesture-required', 'about:blank'], { stdio: ['ignore', 'ignore', 'pipe'] });

const cleanup = () => { try { chrome.kill('SIGKILL'); } catch {} try { rmSync(profile, { recursive: true, force: true }); } catch {} };
const timer = setTimeout(() => { console.log(JSON.stringify({ error: 'timeout after 90s' })); cleanup(); process.exit(1); }, 90000);

const wsUrl = await new Promise((resolve, reject) => {
  let buf = '';
  chrome.stderr.on('data', (d) => { buf += d; const m = buf.match(/DevTools listening on (ws:\/\/\S+)/); if (m) resolve(m[1]); });
  chrome.on('exit', () => reject(new Error('chrome exited before devtools came up')));
});

const ws = new WebSocket(wsUrl);
await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
let nextId = 1; const pending = new Map(); const listeners = [];
ws.onmessage = (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) { const { resolve, reject } = pending.get(msg.id); pending.delete(msg.id); msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result); }
  else if (msg.method) listeners.forEach((l) => l(msg));
};
const send = (method, params = {}, sessionId) => new Promise((resolve, reject) => { const id = nextId++; pending.set(id, { resolve, reject }); ws.send(JSON.stringify({ id, method, params, sessionId })); });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
const S = (m, p) => send(m, p, sessionId);

const report = { url, consoleErrors: [], consoleWarnings: [], exceptions: [], failedRequests: [], badStatus: [] };
const reqUrls = new Map();
listeners.push((msg) => {
  if (msg.sessionId !== sessionId) return;
  const p = msg.params;
  if (msg.method === 'Runtime.consoleAPICalled' && (p.type === 'error' || p.type === 'warning')) {
    const text = p.args.map((a) => a.value ?? a.description ?? '').join(' ').slice(0, 400);
    (p.type === 'error' ? report.consoleErrors : report.consoleWarnings).push(text);
  }
  if (msg.method === 'Runtime.exceptionThrown') report.exceptions.push((p.exceptionDetails.exception?.description || p.exceptionDetails.text || '').slice(0, 400));
  if (msg.method === 'Log.entryAdded' && p.entry.level === 'error') report.consoleErrors.push(`[${p.entry.source}] ${p.entry.text} ${p.entry.url || ''}`.slice(0, 400));
  if (msg.method === 'Network.requestWillBeSent') reqUrls.set(p.requestId, p.request.url);
  if (msg.method === 'Network.loadingFailed' && !p.canceled) report.failedRequests.push({ url: (reqUrls.get(p.requestId) || '').slice(0, 200), error: p.errorText });
  if (msg.method === 'Network.responseReceived' && p.response.status >= 400) report.badStatus.push({ url: p.response.url.slice(0, 200), status: p.response.status });
});

await S('Page.enable'); await S('Runtime.enable'); await S('Log.enable'); await S('Network.enable');
await S('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: mobile ? 3 : 1, mobile });
if (mobile) await S('Emulation.setTouchEmulationEnabled', { enabled: true });
const seed = [];
if (theme) seed.push(`localStorage.setItem('3dark-theme', ${JSON.stringify(theme)})`);
if (lang) seed.push(`localStorage.setItem('3dark-lang', ${JSON.stringify(lang)})`);
if (consent) seed.push(`localStorage.setItem('cookieConsent', ${JSON.stringify(consent)})`);
if (seed.length) await S('Page.addScriptToEvaluateOnNewDocument', { source: `try{${seed.join(';')}}catch(e){}` });
if (blockStorage) await S('Page.addScriptToEvaluateOnNewDocument', { source: `Object.defineProperty(window,'localStorage',{configurable:true,get(){throw new DOMException('Access is denied for this document.','SecurityError')}})` });

const loaded = new Promise((r) => listeners.push((m) => { if (m.sessionId === sessionId && m.method === 'Page.loadEventFired') r(); }));
await S('Page.navigate', { url });
await Promise.race([loaded, sleep(30000)]);
await sleep(wait);

if (full) {
  const { cssContentSize } = await S('Page.getLayoutMetrics');
  const pageH = Math.min(Math.ceil(cssContentSize.height), 16000);
  await S('Emulation.setDeviceMetricsOverride', { width, height: pageH, deviceScaleFactor: mobile ? 2 : 1, mobile });
  await sleep(Math.max(1800, wait));
  report.pageHeight = pageH;
}

let clip;
if (selector) {
  const { result } = await S('Runtime.evaluate', { expression: `(()=>{const e=document.querySelector(${JSON.stringify(selector)}); if(!e) return null; e.scrollIntoView({block:'start',behavior:'instant'}); const r=e.getBoundingClientRect(); return JSON.stringify({x:r.left+scrollX,y:r.top+scrollY,width:r.width,height:Math.min(r.height,6000)});})()`, returnByValue: true });
  if (!result.value) report.selectorError = `selector not found: ${selector}`;
  else { await sleep(1500); clip = { ...JSON.parse(result.value), scale: 1 }; }
}

if (evalExpr) {
  try { const { result, exceptionDetails } = await S('Runtime.evaluate', { expression: evalExpr, returnByValue: true, awaitPromise: true }); report.eval = exceptionDetails ? { error: exceptionDetails.text } : result.value; }
  catch (e) { report.eval = { error: String(e) }; }
}

const { result: meta } = await S('Runtime.evaluate', { expression: `JSON.stringify({title:document.title, htmlClass:document.documentElement.className, htmlLang:document.documentElement.lang, scrollWidth:document.documentElement.scrollWidth, clientWidth:document.documentElement.clientWidth})`, returnByValue: true });
Object.assign(report, JSON.parse(meta.value));
report.horizontalOverflow = report.scrollWidth > report.clientWidth + 1;

const shot = await S('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, ...(clip ? { clip } : {}) });
writeFileSync(out, Buffer.from(shot.data, 'base64'));
report.out = out;
console.log(JSON.stringify(report, null, 1));
clearTimeout(timer); ws.close(); cleanup(); process.exit(0);
