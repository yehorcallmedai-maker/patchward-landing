# Patchward — Brand Lookbook v2

**Source:** `patchward_brand_build_doc_v1_2026-08-11.md`, v2, all 9 decisions logged and confirmed by Yehor 2026-08-11.
**Status:** Every chapter below traces to a logged decision or an echo-free panel convergence — the traceability table is at the end. Nothing here is a new creative choice; this document operationalizes what was already decided.
**v1 → v2 change (2026-08-11):** accent and link tokens now carry computed, AA-clean dark-mode values (Section 4.3) — v1 shipped these unverified and flagged the gap; independent recompute confirmed both failed AA-normal on dark and supplied the fix. All state-color contrast values (Section 4.2) were independently re-verified this pass and matched to the hundredth — unchanged.

---

## 1. Cover & Positioning

**Positioning statement:** Patchward is the local-first security agent that runs five real scanners on your Python repo and opens one verified fix PR at a time — and tells you exactly which checks it ran, every time, including when it couldn't run them.

**Tagline:** "Security fixes that show their work." *(Decision 6.)*

**Brand should feel:** Rigorous · Candid · Local (on-prem, in-your-control)
**Brand must avoid:** Magical / autonomous-genius · Playful / irreverent · Enterprise-buzzword-heavy

**The one rule that governs every other rule in this document** (build doc, Synthesist's note 4): *the verification receipt is the hero visual. Every decorative element must justify itself by explaining scope, state, provenance, or data flow — or it gets cut.* When any chapter below is ambiguous, resolve it against this sentence, not against taste.

---

## 2. Logo

**Motif:** Bracket-derived. *(Decision D1, 4/4 echo-free.)* The conceptual anchor is "patch" + "ward" — a bounded, guarded region — expressed as opposing or nested monospace brackets `[ ]`, tying directly to Gate 2's diff-bounds check ("the edit stays within the authorised lines").

**Hard constraint — no gate-count semantics in the permanent mark** *(Decision 5).* Do not encode "three gates" as three ticks, three brackets, or any countable unit in the logo. Reasoning carried forward from the build doc: three ticks read as three *guaranteed successes* — the exact overclaim being retired — and any device that bakes in today's gate count outlives today's gate behavior. The mark says *bounded / verified*, not *how many checks ran this quarter*.

**Banned:** shield, padlock, bug, medical cross, sparkle, robot head, freestanding checkmark. *(D2, 3/4.)* Every one of those collapses Patchward into a category cliché — shield/padlock into generic-security, robot/sparkle into generic-AI.

**Construction notes:**
- Wordmark: lowercase `patchward`, set in the display mono face (Chapter 3). Not all-caps — the brand voice is candid, not shouting.
- Standalone mark (favicon, app icon, small-space use): the bracket motif alone must survive at 16px, single color, no gradient. If a proposed mark fails at 16px, it fails — don't ship a mark that only works large.
- Clearspace: minimum one bracket-width on all sides, measured in the mark's own stroke units, not a fixed pixel value.
- Never ship a mark, PR, branch, or asset carrying "RepoMend" or "Symbiote." This is not stylistic — it is the naming-consistency defect found live on `checkdmarc#261` (Section 9 below has the enforcement mechanism).

---

## 3. Typography

**Pairing: JetBrains Mono (evidence) + Inter (prose).** *(MEDIUM option, adopted — the only pairing two legs named identically, and the only one carrying a verified license note: JetBrains' own FAQ explicitly permits logo use.)* Both are SIL OFL, free for commercial use, self-hostable — do not make a third-party font request part of a security product's first paint.

**Body typeface: proportional sans (Inter), not serif.** *(Decision 4.)* The dissenting serif proposal (typographic "warmth") was rejected — Patchward's warmth comes from honesty of voice, not softened type.

**Assignment rule** *(D5, 4/4 echo-free): mono is reserved for anything a machine produced or a reviewer can verify* — commands, gate rows, scanner IDs, file paths, diffs, numeric facts, status tokens. Everything else — headlines, explanatory prose, the limits page — is Inter.

| Role | Face | Desktop | Mobile |
| --- | --- | --- | --- |
| Hero | Inter, 700 | 64/68 | 44/48 |
| H2 | Inter, 700 | 40/44 | 32/36 |
| H3 | Inter, 600 | 24/30 | 22/28 |
| Body lead | Inter, 400 | 20/30 | 18/28 |
| Body | Inter, 400 | 17/27 | 16/25 |
| Evidence / UI / code | JetBrains Mono, 500 (600 for status tokens) | 14/21 | 13/20 |

Enable tabular numerals on JetBrains Mono wherever gate tables or test counts appear — numeric columns must align.

---

## 4. Colour & Status

**Canvas: light-primary, dark variant available.** *(Decision 1.)* Rationale on record: two independently web-grounded panel legs reached light after real competitor-color research (the category is blue/dark-saturated — Snyk `#145DEB`, Sentry purple/lime, Aqua blue, Trivy teal — so light is genuinely open territory), and the dark variant preserves family resemblance to CallMed AI's existing dark terminal identity without conceding the primary.

**Accent: rust-oxide.** *(Decision 2, Leg B's system.)* Used for the primary CTA and brand registration mark only — **never** for pass/fail/skip state. Mixing brand color into status meaning is exactly the kind of ambiguity D3 exists to prevent.

### 4.1 Base tokens

| Token | Light mode | Dark mode |
| --- | --- | --- |
| Canvas | `#F4F1E8` (warm field, not pure white) | `#111318` (near-black, never `#000000` — D4, 4/4 echo-free) |
| Primary text | `#111318` | `#E6EDF3` |
| Secondary text | `#5C5850` *(derived, verify optically)* | `#8B949E` |
| Hairline / rule | `#D7D3C9` | `#212836` |
| Accent (CTA, brand) | `#B33A20` | `#DE6147` *(computed, not the light-mode value — see 4.3)* |
| Link / focus | `#285ED0` | `#5F89E0` *(computed, not the light-mode value — see 4.3)* |

### 4.2 Status tokens — computed, not assumed

Decision 3 delegated the exact hexes to "highest-contrast candidate wins, evaluated per state." That was computed directly (WCAG 2.1 formula, real luminance math, not estimated) against both canvas modes. **The result is a genuine, load-bearing finding: the same hex set does not win on both canvases.** Ship two palettes.

**Light mode — against `#F4F1E8`:**

| State | Hex | Contrast ratio | WCAG AA (normal text, 4.5:1) |
| --- | --- | --- | --- |
| PASS | `#0A7455` | **5.11:1** | ✅ pass |
| SKIPPED | `#8A5C00` | **5.15:1** | ✅ pass |
| FAIL | `#B42318` | **5.82:1** | ✅ pass |

Every other candidate proposed by any panel leg **failed AA-normal-text on this canvas** (best runner-up, PASS-green `#1F9D57`, cleared only AA-large at 3.09:1). This is not the accent leg's color winning by favoritism — it's the only complete state set that clears the bar on the winning canvas.

**Dark mode — against `#111318`:**

| State | Hex | Contrast ratio | WCAG AA (normal text, 4.5:1) |
| --- | --- | --- | --- |
| PASS | `#10B981` | **7.33:1** | ✅ pass |
| SKIPPED | `#F59E0B` | **8.65:1** | ✅ pass |
| FAIL | `#EF4444` | **4.94:1** | ✅ pass |

**The light-mode state hexes do not carry over to dark mode** — `#0A7455` drops to 3.22:1 (AA-large only) and `#8A5C00` drops to 3.20:1 (AA-large only) against `#111318`. Reusing one palette across both modes, which is the default instinct, would silently ship an accessibility regression in dark mode. Use the dark-mode set above instead.

### 4.3 Accent & link on dark — computed 2026-08-11, closing the gap v1 flagged as unverified

v1 shipped the light-mode accent (`#B33A20`) and link (`#285ED0`) values unchanged into dark mode and flagged them explicitly as unverified. Computed: both fail AA-normal against `#111318` — accent **3.13:1**, link **3.19:1**, both below the 4.5:1 floor. This would have shipped as a real regression (fine as large CTA buttons, too low-contrast as small link text) had it gone unchecked.

**Fix — same-hue lightness tint, swept to find the crossing point rather than picked by eye, chosen with margin above the bare threshold rather than sitting on the edge:**

| Token | Light mode | Dark mode | Contrast on `#111318` |
| --- | --- | --- | --- |
| Accent (CTA, brand) | `#B33A20` (5.25:1 on Field) | **`#DE6147`** | **5.23:1** ✅ |
| Link / focus | `#285ED0` (5.16:1 on Field) | **`#5F89E0`** | **5.43:1** ✅ |

Both dark-mode values sit at the same hue as their light-mode counterparts (same brand color, lightened), not a different color substituted for contrast's sake.

**The semantic rule, unchanged from the panel and now doubly load-bearing given real customer usage (build doc Decision 9): PASS is green, SKIPPED is amber, FAIL is red — and status is never colour alone.** *(Synthesist's note 1, promoted to requirement.)* Every status must carry word + icon + colour together — this is a WCAG requirement for colour-blind readers, not a style preference, and it also means status survives being copy-pasted as plain text out of a PR body, where colour is stripped entirely.

**Green is reserved for PASS. Never use it decoratively or as the brand accent** — doing so would quietly imply every gate always passes, which is the exact claim under correction.

---

## 5. Grid & Spacing

- Base unit: 8px.
- Section rhythm: 80–96px between major landing sections; 24–32px inside explanatory groups.
- Prose measure: ~720px max-width. *(MEDIUM, 3/4 — held here as the working default; tune optically once a real page exists.)*
- Evidence blocks (gate tables, scanner rows) use aligned columns and 1px hairline rules, not floating cards or drop shadows — the ledger reads as *constructed*, not decorated.
- Left-aligned, document-like margins throughout. Whitespace signals rigor, not luxury.

---

## 6. Diagram Language

**Hard constraint, non-negotiable: Gate 3 is drawn with two exits, everywhere it appears** *(Decision D7, 4/4)* — in the pipeline diagram, the hero animation, and the PR template. One exit reproduces the exact overclaim the whole redesign exists to fix.

- Five scanners (Semgrep, Bandit, pip-audit, Trivy, ESLint) render as parallel input lanes merging into one SARIF-normalization point.
- Gates render as a sequential ledger, not a decorative pipeline graphic: Gate 1 (rescan) → Gate 2 (diff-bounds) → Gate 3, branching to **PASS** or **SKIPPED — disclosed**, both states drawn as equally legitimate, equally weighted outcomes. Never draw SKIPPED smaller, greyed out, or apologetic relative to PASS.
- Diagrams use solid 1–2px paths and hard registration snaps, no glow, no gradient fills, no drop shadows — consistent with D6's motion constraint applied to static graphics too.
- The data-boundary diagram (local scanners vs. the two Anthropic-calling stages) must explicitly label the crossing point where repository content leaves the sandbox — this is D11's requirement made visual, not just textual.

---

## 7. Motion

**Duration and behavior: ~1.2s, runs once, holds final readable state.** *(Decision 8, Leg B.)* Explicitly rejected: a 12–18s ambient loop (self-contradicted the proposing leg's own restraint principle) and an under-4s spec looser than necessary given the no-decoration constraint below.

**Constraint, unchanged from the panel and echo-free (D6, 4/4):** motion demonstrates state, it does not simulate technicality. Banned by name: glow-pulses, particle effects, matrix rain, scanning beams, parallax code, fake terminal typing, ambient background blurs, bouncing or scale-bounce type.

**Sequence:**
1. Five scanner lanes register in a staggered sequence, ~120ms apart, hard easing (`cubic-bezier(0.2,0,0,1)` — no soft/bouncy ease).
2. Findings merge into one lane (SARIF normalization).
3. Gates 1 and 2 snap to PASS in sequence.
4. Gate 3 resolves to either PASS or SKIPPED — **build both variants**, and show the SKIPPED variant in rotation, not only on request. Hiding it would itself be a small version of the overclaim.
5. Total runtime holds under 1.2s; the diagram holds its final state — it does not loop or reset.

**Accessibility requirement, promoted from note, not optional** *(Synthesist's note 2):* under `prefers-reduced-motion`, skip the sequence entirely and render the final gate-receipt state immediately, with no information loss. This must be implemented before launch, not treated as a later enhancement.

---

## 8. Voice & Tone

**Ordering rule** *(Decision 7):* lead with the invariant, then present gate states as designed — **at the page and section level.** The always-true claim ("bounded draft PRs with recorded verification") opens; the gate-state mechanics follow as the *how*, not as a defensive preamble. Leading with caveats everywhere produces "caveat soup" — sounding unsure of your own value.

**Scoped exception, carried forward exactly as decided:** this ordering governs page-level and section-level copy. It does **not** override the Gate-3 disclosure block's own internal structure (Section 9 below), which correctly states the literal status first *within that one block* — a reviewer scanning a PR needs the state before the narrative.

**Present-tense accuracy, per Decision 9:** pilots are CLI-delivered against the customer's own environment today. Gate 3 executes in the normal case; SKIPPED is the honest, real, but comparatively rare edge case — not the headline experience. Write it as: *designed-in and always disclosed when it happens*, not *frequently happening*. Re-verify this framing if/when the hosted path lands a real installation — this is a present-tense fact about how the product is used, not a permanent architectural truth.

**Voice rule:** claim → mechanism → evidence → limit. Prefer verbs and named artifacts over adjectives — "Gate 2 passed," not "safely verified." "Draft PR," not "autonomous remediation delivered." Confidence comes from specificity, not volume.

**Banned words/phrases:** autonomous-magic, effortless, guaranteed, revolutionary, groundbreaking, AI-powered synergy.

**Problem-statement line:** "AI can produce a plausible patch around an unsafe import, dependency, or exception path in seconds. Plausible is not verified."

---

## 9. The Gate-3 Disclosure Block (PR-body first-class surface)

This is the single most delicate piece of copy in the system, and it is fixed structure, not freehand:

**Structure** *(Decision D8, 4/4 on structure):*
1. The literal state — `SKIPPED` / `not run` — first.
2. The reason — no test runner in the hosted environment.
3. What *was* verified — Gates 1 and 2, named explicitly.
4. A reviewer action — "run your suite before merging."

**Canonical wording** *(build doc, ground-truth-compliant, present-tense-corrected per Decision 9):*

> **Gate 3 (test suite):** SKIPPED — no test runner was available in this environment, so this fix was not validated against your tests. Gates 1 and 2 passed: the flagged rule no longer fires, and the change stays inside the authorised lines. Run your suite before merging.

No apology, no hedge, no exclamation. States the fact, quantifies what was verified, hands the reviewer a next action.

**When Gate 3 runs (the normal case per Decision 9), state it with equal weight, not as a throwaway:**

> **Gate 3 (test suite):** PASS — your test suite ran and passed. All three gates verified.

---

## 10. PR-Body Template (first-class brand surface)

**Fixed section order, every gate on its own row, every row present every time** *(Decision D13):*

1. **Title convention:** `fix: <plain description> (<tool> <rule-id>)`
2. **Outcome line** — scanner/rule, affected `file:line`, the bounded intent of the fix.
3. **Finding** — what fired and why it matters in this repository.
4. **Change** — the exact behavioral change, including what was deliberately *not* changed.
5. **Verification receipt** — Gate 1, Gate 2, Gate 3 as three separate rows, Section 9's block for Gate 3 specifically.
6. **Reviewer notes** — residual uncertainty, repository convention to check, the smallest useful reviewer question.
7. **Provenance / sign-off:** "Generated and verified by Patchward — local-first security agent." Canonical `patchward.dev` link. Do not invent a run identifier the system doesn't actually expose.

**Branch naming convention:** `patchward/fix-<finding-id>` — this already matches current code (`fix_worktree.py`). **Enforcement, not aspiration:** a pre-flight forbidden-token scan blocks any generated branch, commit, or PR body containing `repomend` or `symbiote` (case-insensitive) before it reaches a real repository. This is the direct fix for the live defect found on `checkdmarc#261`.

---

## 11. CLI / Terminal Output

*(Leg C's single-model contribution — the only leg to treat the CLI as a brand surface; adopted as a real gap the other three legs left uncovered.)*

- Status badges in terminal output use the same word+icon+colour rule as the web (Section 4) — colour alone must never be the only signal, since many terminals and CI logs strip ANSI colour entirely.
- Progress/status lines use the mono face's tabular numerals for any count (files scanned, findings, gate results) so columns stay aligned in a monospace terminal.
- Credential scrubbing is visually confirmed in CLI output, not just asserted in docs — when a credential-shaped value is scrubbed from local logs, show a visible placeholder (`[scrubbed]`) rather than silently omitting the line, so the user can see the scrubbing happened.

---

## 12. Governance

*(Leg B's single-model contribution, promoted to required lookbook content per the build doc — direct structural fix for the claims-drift failure mode this project has hit repeatedly: the "371 tests" staleness, the RepoMend branding leak, the mpfb2 dead link, and now the Gate-3 delivery-path miscalibration this same session caught and corrected.)*

### 12.1 Truth contract
One canonical, dated claims file drives HTML copy, markdown mirrors, PR templates, and CLI output. No claim ships to more than one surface by hand-copying — generate from the shared source where practical.

### 12.2 Proof taxonomy
Outcome labels are literal, never optimistic: `merged` / `maintainer follow-up shipped` / `closed — superseded` / `open`. `checkdmarc#261` is `closed — superseded` (verified directly against the PR: "Closed with unmerged commits"), never `merged`. This is not a style rule — a wrong label here is the exact overclaim class this whole document exists to prevent.

### 12.3 `/facts` — dated claims ledger
A single page, human- and agent-quotable, listing: current CLI command, scanner list, the Anthropic data boundary (D11's wording), gate semantics, pilot delivery mechanism (Decision 9, kept current — re-check when the hosted path ships its first install), and the dated test count. Every dated fact carries an expiry prompt so it cannot silently go stale the way "371 tests / 89%" did.

### 12.4 Release QA — pre-flight, before any generated PR reaches a real repository
- Forbidden-name scan: `repomend`, `symbiote` (case-insensitive) in branch name, commit message, PR title, PR body.
- Required-gate-row check: all three gate rows present, every time, no silent omission.
- Dated-fact staleness check against `/facts`.
- Contrast spot-check against the palette in Section 4 whenever a new status color is introduced — **swept tokens are status (PASS/SKIPPED/FAIL) and brand (accent, link) alike, both modes, not status colors only.** v1 checked status and missed accent/link on dark until the v2 pass (Section 4.3); the QA step now names both categories explicitly so that gap can't recur.

**A generated PR does not ship until it passes this pre-flight.** This is not a nice-to-have appended at the end — build doc Risk 3 named this the highest-consequence failure mode: a polished new brand shipping while the artifacts underneath still lie is a worse outcome than today's plain site.

---

## Traceability appendix

| Lookbook section | Traces to |
| --- | --- |
| 1. Positioning, tagline | Build doc B, Decision 6 |
| 2. Logo | D1, D2, Decision 5 |
| 3. Typography | D5, MEDIUM pairing option, Decision 4 |
| 4. Colour | Decision 1, Decision 2, Decision 3 (computed this session), D3, D4 |
| 5. Grid | MEDIUM option (720px), panel consensus on 8px base |
| 6. Diagrams | D7 |
| 7. Motion | Decision 8, D6, Synthesist's note 2 |
| 8. Voice | Decision 7, Decision 9 |
| 9. Gate-3 block | D8, Decision 9 |
| 10. PR template | D13, D9 (naming) |
| 11. CLI chapter | Leg C single-model option |
| 12. Governance | Leg B single-model option, Risk 3 |

Nothing in this document originates outside the logged build doc. Where a section cites a MEDIUM or single-model source rather than a HIGH decision, that's stated plainly above — those are the panel's best available answer, not settled consensus, and are the right places to revisit first if something doesn't hold up once real pages get built.
