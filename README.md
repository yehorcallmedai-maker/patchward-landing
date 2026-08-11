# patchward-landing

The standalone Patchward product site (`patchward.dev`), spun out from the
shared `callmedai.com` agency page per the 2026-08-11 brand architecture
decision. Built against `patchward_lookbook_v1_2026-08-11.md` (v2) and
`patchward_brand_build_doc_v1_2026-08-11.md` (v2, 11 logged decisions).

## Stack

- **Astro 7** (pinned 2026-08-11 after independently verifying the version —
  6.x was stale advice; 7 has been stable since 2026-06-22). Static output.
- **Content layer**: `src/content.config.ts` + `src/data/facts.yaml` — the
  canonical claims ledger. Every dated fact on the site is pulled from here,
  not hand-typed per page. See `/facts` and `/limits`.
- **Deploy target**: Cloudflare Pages (the domain's already on Cloudflare,
  and Cloudflare now owns Astro itself as of its January 2026 acquisition —
  first-party golden path, not just a cost decision).

## Getting started

```bash
npm install
npm run dev
```

## What's here

- `src/styles/tokens.css` — the v2 lookbook's computed design tokens
  (light + dark canvas, both AA-verified against their own canvas — the
  light-mode and dark-mode palettes are genuinely different sets, not the
  same values reused; see the lookbook §4 for the contrast math).
- `src/layouts/Layout.astro` — shared shell: fonts, header, footer, the
  light/dark toggle.
- `src/pages/index.astro` — the landing page.
- `src/pages/facts.astro` — the rendered claims ledger.
- `src/pages/limits.astro` — the honesty page (lookbook §10 / D10).
- `src/data/facts.yaml` — edit numbers here, not in page templates.

## Not yet built

Everything in the lookbook's curiosity layer beyond `/facts` and `/limits`:
`/how-it-works`, `/verification`, `/data-boundary`, `/examples`; the
PR-body template as a generated artifact (lookbook §10); the CLI-output
chapter (§11); the release-QA pre-flight scan (§12.4) as an actual CI job;
the ~1.2s Gate-3 motion sequence (§7) — Remotion evaluation pending.

## Standing rules for this repo

- All `git init` / `add` / `commit` / `push` and the Cloudflare Pages
  connect are done by hand, not from an agent sandbox — same rule as the
  Patchward tool repo, for the same reason (H20 in that repo's memory).
- `.gitattributes` and `.gitignore` are committed from the first commit —
  the Patchward repo learned this the hard way (CRLF phantom-diffs); this
  repo is born knowing it.
- Every number that appears on a page must trace to `src/data/facts.yaml`.
  If you're tempted to type a number directly into a `.astro` file, add it
  to the ledger instead and pull it in.
