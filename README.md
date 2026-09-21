# 3DARK — www.3dark.de

Marketing site for 3DARK, the digital-twin / 3D-scanning service of Future Fabrik
(Burnett & Manhardt GbR, Leipzig). Vite + React + TypeScript + Tailwind, bilingual
EN/DE (client-side toggle), light theme by default, hosted on Vercel.

## Hosts

- **Canonical:** `https://www.3dark.de`. The apex `3dark.de` 308-redirects to www
  (`vercel.json` → `redirects`; the bare `/` needs its own rule).
- `3dark.com` is **not ours** (a third-party casino site).

## Develop

```bash
npm install
npm run dev          # http://localhost:4301
```

## Release — every time

```bash
npm run build                    # typecheck → vite build → per-route <head>s
vercel --prod                    # deploy (pushing main also deploys)
npm run verify                   # release gate against https://www.3dark.de
```

`npm run verify` (`scripts/verify-site.mjs`, headless Chrome, no dependencies) is
the definition of "the site works". It checks assets by **content-type** (the SPA
rewrite answers 200 for missing files), fonts, that nothing third-party loads
before a click, media clickability, the mobile menu, blocked storage, per-route
raw HTML heads, the share image, and that the contact API is alive — without
sending any mail. Run `npm run verify -- http://localhost:4302` against a local
`npm run preview -- --port 4302` (API and per-route heads only work on Vercel).

## Contact form

`api/contact.js` — Vercel function (ESM; `package.json` has `"type": "module"`),
pinned to Frankfurt (`"regions": ["fra1"]`). Sends via Gmail SMTP.

| env var | |
|---|---|
| `GMAIL_USER` | sending account |
| `GMAIL_APP_PASSWORD` | Gmail app password |
| `CONTACT_RECIPIENT` | optional; defaults to `GMAIL_USER` |

## Gotchas

- `.vercelignore` patterns **must be root-anchored** (`/images/`, not `images/`):
  an unanchored pattern once stripped `public/images/` from a deploy.
- Project media is keyed by the stable `id` in `translations.projectsList`, never
  by the display title.
- Privacy: no cookies, no analytics. Theme/language live in localStorage; YouTube
  and StorySplat only load after a click (`src/components/ConsentEmbed.tsx`).
  Keep `src/pages/Datenschutz.tsx` in sync with anything that changes this.
- Old notes are in `docs/archive/` and are historical, not current.
