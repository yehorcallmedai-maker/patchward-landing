# Project Memory — patchward-landing

## Mission
Ship and maintain `patchward.dev` as Patchward's own dedicated product
site, spun out from the shared `callmedai.com` agency page, per the
2026-08-11 brand architecture decision. Every claim on the site traces to
`src/data/facts.yaml` — no page hand-types a number. (user-confirmed
architecture: standalone Astro site, sibling repo, fresh GitHub repo,
Cloudflare Pages deploy — confirmed 2026-08-11)

## Success criteria
1. ✅ `patchward.dev` resolves to the real site, not a placeholder. MET
   2026-08-11 — Cloudflare Pages Custom Domain "Active"/"SSL enabled",
   live-fetched content confirmed correct.
2. Every number stated anywhere on the site is pulled from
   `src/data/facts.yaml`, not hand-typed per page.
3. The full lookbook curiosity layer is built: `/`, `/facts`, `/limits`
   (done), plus `/how-it-works`, `/verification`, `/data-boundary`,
   `/examples` (not yet built).
4. Cloudflare Pages' own Git-integration auto-deploy works (currently
   deploys via manual `wrangler pages deploy` only).

## Current state
- [2026-08-11] Repo created, scaffolded, pushed. HEAD `fcc0af4` ("feat:
  initial patchward-landing scaffold"), working tree clean, confirmed via
  `git status` and `git log -1`. Astro 7.1.6 pinned (independently
  corrected from a stale "6.x current" guide-model claim, verified live
  against `docs.astro.build` before scaffolding — 7 has been stable since
  2026-06-22).
- [2026-08-11] Three pages live: `/` (landing), `/facts` (canonical
  ledger, renders all 8 entries), `/limits` (honesty page). All three
  confirmed rendering correctly via live browser fetch at Session 033
  (Patchward repo numbering) close.
- [2026-08-11] `patchward.dev` custom domain: Cloudflare Pages Custom
  Domain status "Active" / "SSL enabled" — confirmed via dashboard fresh
  at close, not inherited from earlier in the session. Deployed via
  manual `wrangler pages deploy` on Yehor's machine (`npm run dev` also
  independently confirmed working on his machine: `astro v7.2.0 ready`);
  this agent's own sandbox cannot run `npm run build`/`esbuild` — a
  confirmed, reproducible native-binary execution fault in this specific
  cloud sandbox, not a code defect (diagnosed 2026-08-11).
- [2026-08-11] Both light-mode and dark-mode design-token palettes are
  real WCAG-computed (not eyeballed) — `src/styles/tokens.css`. A
  dark-mode accent/link contrast gap was caught and fixed before shipping.
- [2026-08-11] `memory/` folder (this file included) created at the
  Patchward-repo session's close, seeded with the cited research
  artifacts (`patchward_brand_build_doc_v1_2026-08-11.md`,
  `patchward_lookbook_v1_2026-08-11.md` v2, the research prompt, the
  scaffold-fidelity verification, the hero prototype) — this repo's own
  README already cited the build-doc and lookbook filenames before this
  copy existed. **Not yet committed — Yehor's hands, same H20-equivalent
  rule as the Patchward tool repo (see this repo's own README).**

## Open threads
- Cloudflare Pages' own Git-integration auto-deploy is not wired up —
  currently manual `wrangler pages deploy` only. A separate, now-deleted
  stray Worker (different resource, same name) had a failing Git
  integration; that failure is moot now, not a signal this repo's own
  Pages Git integration would fail too. Worth setting up.
- Remaining lookbook pages not yet built: `/how-it-works`,
  `/verification`, `/data-boundary`, `/examples`; the PR-body-template
  generated artifact; the CLI-output chapter; the ~1.2s Gate-3 motion
  sequence (Remotion evaluation explicitly deferred).
- `npm run build` has never been verified from an agent sandbox (confirmed
  impossible in this specific cloud sandbox — native Node addon segfault).
  Every build/deploy claim so far rests on Yehor's own machine.

## Heuristics (earned)
<None promoted yet — this is the project's first logged session. See the
parent Patchward repo's `.strategy/STRATEGY.md` Session 033 update for two
new CANDIDATE heuristics discovered while building this site: (1)
Cloudflare Workers and Pages projects can share an identical name as
fully independent resources with independent Custom Domain ownership; (2)
a SaaS dashboard's in-session "success" state needs a fresh-reload
re-check before being trusted. Both apply here too if this project's
infra work continues.>

## Failed approaches (ledger)
- [2026-08-11] Reattaching `patchward.dev` directly to this Pages project
  while a same-named Worker still held the domain — the UI reported
  success but silently reverted on reload. Retry only after confirming no
  other same-named Cloudflare resource exists in the account.

## Session log
- [2026-08-11] Session 1 (numbered Session 033 in the parent Patchward
  repo's own log, since this project was spun out mid-session there).
  L2 goal: get `patchward.dev` visibly live and correct. Outcome: MET,
  Tier-0 verified at close (Active/SSL, live content, `/facts` rendering).

## Calibration record
- [2026-08-11] First session — no prior baseline. All close-time claims
  (domain status, live content, facts rendering, git state) independently
  confirmed; see the parent repo's Session 033 close notes for the full
  claim count and honest caveat about mid-session self-corrections.
