#!/usr/bin/env node
// Post-build: give every route its own <head> in the served HTML.
//
// The site is an SPA, so every URL used to be answered with the same
// dist/index.html — whose head says it is the homepage (canonical "/",
// homepage title/description). Link previews (LinkedIn, WhatsApp, Slack…) and
// crawlers that do not run JavaScript therefore saw every landing page as the
// homepage, and Google got two conflicting canonicals. Seo.tsx fixes the head
// after JS runs; this fixes it before.
//
// Writes dist/<route>/index.html for each route, using the same strings the
// app uses (src/i18n/translations.ts, English = the default language).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { translations } from "../src/i18n/translations.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const SITE = "https://www.3dark.de";
const seo = translations.seo.en;

const ROUTES = [
  { path: "/who-its-for/industrial", ...seo.industrial },
  { path: "/who-its-for/producers", ...seo.producers },
  { path: "/who-its-for/cultural", ...seo.cultural },
  { path: "/who-its-for/marketing", ...seo.marketing },
  { path: "/impressum", ...seo.impressum, noindex: true },
  { path: "/datenschutz", ...seo.datenschutz, noindex: true },
];

const esc = (v) =>
  String(v).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Replace exactly one occurrence, or fail the build: a silent no-op here would
// ship wrong metadata without anyone noticing.
function swap(html, pattern, replacement, what) {
  const matches = html.match(new RegExp(pattern.source, pattern.flags.includes("g") ? pattern.flags : pattern.flags + "g"));
  if (!matches || matches.length !== 1) {
    throw new Error(`emit-route-heads: expected exactly one ${what} in dist/index.html, found ${matches ? matches.length : 0}`);
  }
  return html.replace(pattern, replacement);
}

const base = readFileSync(join(DIST, "index.html"), "utf8");

for (const r of ROUTES) {
  const url = SITE + r.path;
  let html = base;
  html = swap(html, /<title>[^<]*<\/title>/, `<title>${esc(r.title)}</title>`, "<title>");
  html = swap(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(r.description)}" />`, "meta description");
  html = swap(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`, "canonical");
  html = swap(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`, "og:url");
  html = swap(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${esc(r.title)}" />`, "og:title");
  html = swap(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${esc(r.description)}" />`, "og:description");
  html = swap(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${esc(r.title)}" />`, "twitter:title");
  html = swap(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${esc(r.description)}" />`, "twitter:description");
  if (r.noindex) {
    html = swap(html, /<\/head>/, `    <meta name="robots" content="noindex, follow" />\n  </head>`, "</head>");
  }

  const out = join(DIST, r.path.slice(1), "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log(`  head  ${r.path}${r.noindex ? "  (noindex)" : ""}`);
}
