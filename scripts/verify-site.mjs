// Release gate: exercises a deployed (or locally previewed) site the way a
// visitor would, and exits non-zero on any failure.
//
//   npm run verify                       -> https://www.3dark.de
//   npm run verify -- http://localhost:4302   (after: npm run build && npm run preview -- --port 4302)
//
// Why it exists: vercel.json rewrites every unknown path to index.html, so a
// missing image still answers "200 OK". A deploy once shipped with every image
// stripped out and all status-code checks passed. This script therefore judges
// assets by content-type, and looks at the rendered page in headless Chrome.
import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, '..');
const SHOT = join(HERE, 'shot.mjs');
const TMP = mkdtempSync(join(tmpdir(), 'verify-3dark-'));
const base = (process.argv[2] || 'https://www.3dark.de').replace(/\/$/, '');
console.log('verifying ' + base);
const fails = []; const ok = (m) => console.log('  ok   ' + m); const bad = (m) => { fails.push(m); console.log('  FAIL ' + m); };

// 1. every /images|/media path referenced in src must be served with a real media type
const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(`${d}/${e.name}`) : [`${d}/${e.name}`]);
const refs = new Set();
for (const f of walk(`${REPO}/src`).concat(`${REPO}/index.html`)) for (const m of readFileSync(f, 'utf8').matchAll(/["'`(](\/(?:images|media)\/[^"'`)\s]+\.(?:webp|png|jpg|jpeg|mp4|svg))/g)) refs.add(m[1]);
refs.add('/logo-3dark.png'); refs.add('/favicon.png'); refs.add('/sitemap.xml'); refs.add('/robots.txt');
console.log(`\n[assets] ${refs.size} referenced paths`);
for (const p of [...refs].sort()) {
  let res; for (let i = 0; i < 4 && !res; i++) { try { res = await fetch(base + p, { method: 'GET', headers: { range: 'bytes=0-2047' } }); } catch { await new Promise((r) => setTimeout(r, 1500)); } }
  if (!res) { bad(`${p} unreachable`); continue; }
  const ct = res.headers.get('content-type') || ''; const want = /\.(webp|png|jpg|jpeg|svg)$/.test(p) ? 'image/' : p.endsWith('.mp4') ? 'video/' : p.endsWith('.xml') ? 'xml' : 'text/plain';
  (res.status < 400 && ct.includes(want)) ? ok(`${p}  ${ct}`) : bad(`${p} -> HTTP ${res.status} ${ct} (SPA fallback? wanted ${want})`);
}

// 2. page-level behaviour, via headless Chrome
const run = (extra) => { for (let i = 0; i < 3; i++) { try { return JSON.parse(execFileSync('node', [SHOT, ...extra], { encoding: 'utf8', maxBuffer: 1 << 26 })); } catch (e) { if (i === 2) throw e; } } };
const PAGE_EVAL = `(async()=>{
  await document.fonts.ready;
  const tp=[...new Set(performance.getEntriesByType('resource').filter(r=>!r.name.startsWith(location.origin)).map(r=>new URL(r.name).host))];
  const blocked=[]; for(const box of document.querySelectorAll('#projects .aspect-video, #showreel .aspect-video')){box.scrollIntoView({block:'center',behavior:'instant'}); await new Promise(r=>setTimeout(r,500)); const r=box.getBoundingClientRect(); const el=document.elementFromPoint(r.left+r.width/2,r.top+r.height/2); if(!el||el===box) blocked.push(box.closest('section').id);}
  const imgs=[...document.images].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.getAttribute('src'));
  return {thirdParty:tp, blockedMedia:blocked, brokenImages:imgs, iframes:document.querySelectorAll('iframe').length,
    h1Font:getComputedStyle(document.querySelector('h1')).fontFamily, rajdhani:document.fonts.check('600 40px Rajdhani'), dmSans:document.fonts.check('400 16px "DM Sans Variable"'), mono:document.fonts.check('400 12px "Space Mono"'),
    heroVideo:(()=>{const v=document.querySelector('video'); return v?{src:v.currentSrc.replace(location.origin,''),poster:!!v.poster,readyState:v.readyState}:null})(),
    canonical:document.querySelector('link[rel=canonical]')?.href, honeypotVisible:(()=>{const h=document.querySelector('input[name=hp_x7]'); if(!h) return 'missing'; const r=h.getBoundingClientRect(); return r.left>-1000&&r.width>1;})()};
})()`;
console.log('\n[homepage, consent declined]');
const home = run(['--url', base + '/', '--out', join(TMP, 'home.png'), '--consent', 'declined', '--wait', '3500', '--eval', PAGE_EVAL]);
const e = home.eval || {};
home.consoleErrors.length ? bad('console errors: ' + home.consoleErrors.join(' | ')) : ok('no console errors');
home.exceptions.length ? bad('exceptions: ' + home.exceptions.join(' | ')) : ok('no exceptions');
home.badStatus.length ? bad('HTTP >= 400: ' + JSON.stringify(home.badStatus)) : ok('no failed HTTP responses');
home.htmlClass === 'light' ? ok('default theme is light') : bad('default theme class = ' + home.htmlClass);
(e.thirdParty || ['?']).length === 0 ? ok('zero third-party hosts contacted before consent/click') : bad('third-party hosts on load: ' + e.thirdParty);
(e.blockedMedia || ['?']).length === 0 ? ok('all media boxes are clickable') : bad('click-blocked media in: ' + e.blockedMedia);
(e.brokenImages || ['?']).length === 0 ? ok('no broken <img>') : bad('broken images: ' + e.brokenImages);
e.iframes === 0 ? ok('no iframes mounted before a click') : bad(e.iframes + ' iframes on load');
(e.rajdhani && e.dmSans && e.mono) ? ok('fonts loaded: Rajdhani / DM Sans Variable / Space Mono  (h1 = ' + e.h1Font + ')') : bad('fonts missing: ' + JSON.stringify({ r: e.rajdhani, d: e.dmSans, m: e.mono }));
(e.heroVideo && e.heroVideo.src === '/media/hero-trailer.mp4' && e.heroVideo.poster && e.heroVideo.readyState >= 1) ? ok('hero video: 5 MB encode, poster, loading in view') : bad('hero video: ' + JSON.stringify(e.heroVideo));
e.canonical === 'https://www.3dark.de/' ? ok('canonical ok') : bad('canonical = ' + e.canonical);
e.honeypotVisible === false ? ok('honeypot present and invisible') : bad('honeypot: ' + e.honeypotVisible);
home.horizontalOverflow ? bad('horizontal overflow on desktop') : ok('no horizontal overflow (desktop)');

console.log('\n[click-to-load]');
const click = run(['--url', base + '/', '--out', join(TMP, 'click.png'), '--consent', 'declined', '--wait', '3000', '--eval', `(async()=>{const out={}; for(const id of ['showreel','projects']){const b=document.querySelector('#'+id+' .aspect-video button'); b.scrollIntoView({block:'center',behavior:'instant'}); await new Promise(r=>setTimeout(r,700)); const r=b.getBoundingClientRect(); document.elementFromPoint(r.left+r.width/2,r.top+r.height/2).click(); await new Promise(r=>setTimeout(r,1200)); out[id]=document.querySelector('#'+id+' iframe')?.src||null;} return out;})()`]);
for (const id of ['showreel', 'projects']) /youtube-nocookie\.com|storysplat/.test(click.eval?.[id] || '') ? ok(`${id}: real click mounts ${new URL(click.eval[id]).host}`) : bad(`${id}: click did not mount a player (${click.eval?.[id]})`);

for (const [label, extra] of [['mobile light', ['--mobile']], ['mobile dark', ['--mobile', '--theme', 'dark']], ['desktop dark DE', ['--theme', 'dark', '--lang', 'de']]]) {
  const r = run(['--url', base + '/', '--out', join(TMP, label.replace(/ /g, '-') + '.png'), '--consent', 'declined', '--wait', '3000', ...extra]);
  const problems = [...r.consoleErrors, ...r.exceptions, ...(r.horizontalOverflow ? ['horizontal overflow'] : []), ...r.badStatus.map((b) => `${b.status} ${b.url}`)];
  problems.length ? bad(`${label}: ${problems.join(' | ')}`) : ok(`${label}: clean (class="${r.htmlClass}" lang=${r.htmlLang})`);
}
console.log('\n[routes]');
for (const p of ['/who-its-for/industrial', '/who-its-for/producers', '/who-its-for/cultural', '/who-its-for/marketing', '/impressum', '/datenschutz']) {
  const r = run(['--url', base + p, '--out', join(TMP, 'route.png'), '--consent', 'declined', '--wait', '2500', '--eval', `({canonical:document.querySelector('link[rel=canonical]')?.href, robots:document.querySelector('meta[name=robots]')?.content||null, h1:document.querySelectorAll('h1').length})`]);
  const wantNoindex = /impressum|datenschutz/.test(p); const c = r.eval || {};
  const problems = [...r.consoleErrors, ...r.exceptions, ...(c.canonical !== 'https://www.3dark.de' + p ? ['canonical=' + c.canonical] : []), ...(wantNoindex !== Boolean(c.robots) ? ['robots=' + c.robots] : []), ...(c.h1 !== 1 ? [`${c.h1} h1s`] : [])];
  problems.length ? bad(`${p}: ${problems.join(' | ')}`) : ok(`${p}  (${r.title})`);
}

// ---------------------------------------------------------------------------
// Checks added after the 2026-09-21 audit: each one would have caught a real
// production defect that the checks above missed.
// ---------------------------------------------------------------------------

console.log('\n[contact API — mail-free liveness]');
// The form was dead for 7 months (module failed to load) and nothing noticed.
// None of these requests can send mail.
{
  const tryFetch = async (url, init) => { for (let i = 0; i < 4; i++) { try { return await fetch(url, init); } catch { await new Promise((r) => setTimeout(r, 1500)); } } return null; };
  const pre = await tryFetch(base + '/api/contact', { method: 'OPTIONS', headers: { Origin: 'https://www.3dark.de' } });
  pre && pre.status === 204 ? ok('OPTIONS /api/contact -> 204 (function loads)') : bad(`OPTIONS /api/contact -> ${pre ? pre.status : 'unreachable'}`);
  const get = await tryFetch(base + '/api/contact');
  const getJson = get && (get.headers.get('content-type') || '').includes('json');
  get && get.status === 405 && getJson ? ok('GET /api/contact -> 405 JSON') : bad(`GET /api/contact -> ${get ? get.status + ' ' + get.headers.get('content-type') : 'unreachable'}`);
  const foreign = await tryFetch(base + '/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://evil.example' }, body: '{}' });
  foreign && foreign.status === 403 ? ok('cross-site POST refused (403)') : bad(`cross-site POST -> ${foreign ? foreign.status : 'unreachable'}`);
  const invalid = await tryFetch(base + '/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://www.3dark.de' }, body: JSON.stringify({ name: 'x' }) });
  invalid && invalid.status === 400 ? ok('invalid POST -> 400 (validation runs, no mail sent)') : bad(`invalid POST -> ${invalid ? invalid.status : 'unreachable'}`);
}

console.log('\n[mobile menu]');
// The menu's close animation used to cancel the scroll: links went nowhere.
{
  const r = run(['--url', base + '/', '--out', join(TMP, 'menu.png'), '--mobile', '--wait', '2500', '--eval', `(async()=>{const sleep=ms=>new Promise(r=>setTimeout(r,ms)); const hit=(el)=>{const r=el.getBoundingClientRect(); document.elementFromPoint(r.left+r.width/2,r.top+r.height/2).click();}; hit(document.querySelector('button[aria-expanded]')); await sleep(450); const bg=getComputedStyle(document.querySelector('header')).backgroundColor; hit([...document.querySelectorAll('header nav a')].find(a=>a.getAttribute('href')==='#contact'&&a.offsetParent)); await sleep(2500); return {bg, top:Math.round(document.querySelector('#contact').getBoundingClientRect().top)};})()`]);
  const m = r.eval || {};
  Math.abs((m.top ?? 9999) - 64) <= 16 ? ok(`menu 'Contact' lands on #contact (top ${m.top}px)`) : bad(`menu 'Contact' did not scroll (section top ${m.top}px)`);
  /rgba?\(\d+, \d+, \d+(, 0\.9\d*)?\)$/.test(m.bg || '') && !/, 0\)$/.test(m.bg) ? ok('open menu has a solid background') : bad(`open menu background: ${m.bg}`);
}

console.log('\n[storage blocked]');
// An unguarded localStorage call once left the homepage completely blank.
{
  const r = run(['--url', base + '/', '--out', join(TMP, 'nostorage.png'), '--block-storage', '--wait', '2500', '--eval', `({children:document.getElementById('root').children.length, text:document.body.innerText.length})`]);
  (r.eval?.children > 0 && r.eval?.text > 1000 && !r.exceptions.length) ? ok(`renders with storage blocked (${r.eval.text} chars)`) : bad(`blank or failing with storage blocked: ${JSON.stringify(r.eval)} ${r.exceptions.join(' | ')}`);
}

console.log('\n[malformed URL hash]');
// decodeURIComponent on "#%E2%80" once threw and took the whole site down.
{
  const r = run(['--url', base + '/#%E2%80', '--out', join(TMP, 'badhash.png'), '--wait', '2500', '--eval', `({sections:document.querySelectorAll('main section').length})`]);
  (r.eval?.sections > 3 && !r.exceptions.length) ? ok(`/#%E2%80 renders the site (${r.eval.sections} sections)`) : bad(`malformed hash: ${JSON.stringify(r.eval)} ${r.exceptions.join(' | ')}`);
}

console.log('\n[poster tap]');
// A tap anywhere on a video poster must start it (not just on the small pill).
{
  const r = run(['--url', base + '/', '--out', join(TMP, 'postertap.png'), '--mobile', '--wait', '2500', '--eval', `(async()=>{const box=document.querySelector('#showreel .aspect-video'); box.scrollIntoView({block:'center',behavior:'instant'}); await new Promise(r=>setTimeout(r,800)); const b=box.getBoundingClientRect(); document.elementFromPoint(b.left+b.width*0.2,b.top+b.height*0.8).click(); await new Promise(r=>setTimeout(r,1200)); return !!document.querySelector('#showreel iframe');})()`]);
  r.eval === true ? ok('tapping the poster away from the button starts the film') : bad('poster tap outside the play pill did nothing');
}

console.log('\n[raw HTML heads — what crawlers and link previews see]');
{
  const want = { '/': { canonical: '/' }, '/who-its-for/industrial': { canonical: '/who-its-for/industrial' }, '/who-its-for/cultural': { canonical: '/who-its-for/cultural' }, '/impressum': { canonical: '/impressum', noindex: true }, '/datenschutz': { canonical: '/datenschutz', noindex: true } };
  for (const [p, w] of Object.entries(want)) {
    let html = null; for (let i = 0; i < 4 && html === null; i++) { try { html = await (await fetch(base + p)).text(); } catch { await new Promise((r) => setTimeout(r, 1500)); } }
    const canon = (html || '').match(/<link rel="canonical" href="([^"]+)"/)?.[1] || '';
    const noindex = /<meta name="robots" content="noindex/.test(html || '');
    const okCanon = canon === 'https://www.3dark.de' + w.canonical;
    (okCanon && noindex === Boolean(w.noindex)) ? ok(`${p}  canonical ${w.canonical}${w.noindex ? ' + noindex' : ''}`) : bad(`${p}: canonical=${canon} noindex=${noindex}`);
  }
}

console.log('\n[share image]');
{
  let html = ''; for (let i = 0; i < 4 && !html; i++) { try { html = await (await fetch(base + '/')).text(); } catch { await new Promise((r) => setTimeout(r, 1500)); } }
  const og = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
  const w = html.match(/og:image:width" content="(\d+)"/)?.[1], h = html.match(/og:image:height" content="(\d+)"/)?.[1];
  let res = null; if (og) for (let i = 0; i < 4 && !res; i++) { try { res = await fetch(og.replace('https://www.3dark.de', base)); } catch { await new Promise((r) => setTimeout(r, 1500)); } }
  const bytes = res ? (await res.arrayBuffer()).byteLength : 0;
  const type = res?.headers.get('content-type') || '';
  (type.startsWith('image/') && bytes > 0 && bytes <= 300_000 && w === '1200' && h === '630') ? ok(`og:image ${w}x${h}, ${Math.round(bytes / 1024)} KB, ${type}`) : bad(`og:image ${og} ${w}x${h} ${bytes} bytes ${type}`);
}

console.log('\n[source lint]');
{
  // Tailwind silently drops opacity modifiers outside its scale (e.g. /98):
  // the class never exists, and nothing warns. That hid the mobile menu's
  // background. Allowed: 0,5,10,...,100 and arbitrary values like /[0.98].
  const bad98 = [];
  for (const f of walk(join(REPO, 'src')).filter((f) => /\.(tsx?|css)$/.test(f))) {
    for (const m of readFileSync(f, 'utf8').matchAll(/\b(?:bg|text|border|from|via|to|ring|fill|stroke|decoration|divide|outline|shadow|placeholder|caret|accent)-[a-z-]+\/(\d{1,3})\b/g)) {
      const n = Number(m[1]); if (n % 5 !== 0 || n > 100) bad98.push(`${f.replace(REPO + '/', '')}: ${m[0]}`);
    }
  }
  bad98.length ? bad(`opacity modifiers Tailwind will not generate: ${bad98.join(', ')}`) : ok('no out-of-scale Tailwind opacity modifiers');
}

console.log('\nscreenshots: ' + TMP);
console.log(fails.length ? `\n${fails.length} FAILURE(S)` : '\nALL CHECKS PASSED'); process.exit(fails.length ? 1 : 0);
