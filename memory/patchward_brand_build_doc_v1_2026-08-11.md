# Patchward — Brand Build Document (v1)

## Provenance

| Field | Value |
| --- | --- |
| Panel | 4 models, independent runs |
| Leg A | **Claude (Anthropic)** — self-declared web-grounded, live citations |
| Leg B | **GPT** — web-grounded, live citations incl. a 2026-08-11 update |
| Leg C | **Unlabeled prose leg** (presumed Gemini) — parametric, no citations |
| Leg D | **DeepSeek** — parametric, self-declared |
| Prompt version | `patchward-brand-v1-2026-08-11` (pinned, byte-identical across legs) |
| Date | 2026-08-11 |
| Tier thresholds (N=4) | HIGH = 3–4/4 · MEDIUM = 2/4 · OPTION = 1/4 |
| Denominator | All four legs substantively answered all sections A–H. No skips, no tier caps. |
| Ground truth verified by | Direct browser inspection of callmedai.com, mpfb2#377, checkdmarc#261; independent web search on the agent-ads claim |

### Two provenance warnings that affect how you should read this

**1. The synthesist is Claude, and one panel leg is Claude.** Per the synthesis skill's own rule, that is disclosed and treated with extra suspicion. Concretely: Leg A closes by asking to be tiered *above* "parametric-memory legs." I am declining that request in part — **Leg B is equally web-grounded with live citations**, so the evidence asymmetry is 2-vs-2 (A and B grounded; C and D parametric), not 1-vs-3 as Leg A implies. Where I have promoted a Leg A claim, it is because Leg B independently corroborated it, not on Leg A's say-so.

**2. Legs A and B are web-grounded; C and D are not.** This matters most in the agent-readability section, where the grounded legs carry real 2026 evidence and the parametric legs are reasoning from priors. It also produces a suspicious correlation flagged in Open Decision 1.

---

## ⚠️ Prompt-echo audit — read this before trusting any "unanimous" result

The skill requires checking whether convergence traces back to the prompt's own wording. It does, in three places, and I wrote the prompt, so this is a flaw in my own work reported against myself.

| Apparently unanimous result | Verdict |
| --- | --- |
| "The delivered PR is the primary brand surface" (4/4) | **ECHO.** The prompt instructed models to treat the PR as "a first-class brand surface." Demoted from evidence to *instruction followed correctly*. |
| "Gate 3 disclosure as a designed trust feature, not an apology" (4/4) | **ECHO.** Prompt language almost verbatim. Still the right call — but the panel did not independently discover it. |
| Risks #1 (over-design kills plainness) and #2 (honesty overcorrected into hedging), both 4/4 | **ECHO.** My prompt's section G literally offered both as worked examples. This is the most embarrassing one: the strongest-looking agreement in the panel was seeded by me. |
| The three named defects (mpfb2 link, RepoMend branding, stale test counts) | **ECHO.** All three were supplied as ground truth. Models naming them is comprehension, not discovery. |

**What survives as genuine, echo-free convergence** — never mentioned in the prompt, independently reached:

- The **bracket motif** for the logo (4/4)
- **Amber for a skipped gate, never red** (4/4)
- **Green reserved for pass only, never decorative** (4/4)
- **Never pure black** for the canvas (4/4)
- **Mono for evidence, proportional sans for prose** (4/4)
- **No glow, particles, matrix-rain, or pulsing shields** (4/4)
- A standalone **limits/honesty page** as a marketing asset (4/4)
- **No shield, padlock, robot, or sparkle** in the mark (3/4)
- Prose measure ~**720px** (3/4)

Those nine are the panel's real output. Everything in the echo table is still worth doing — it just isn't *evidence*.

---

## Decisions (HIGH confidence)

### D1 · The logo is bracket-derived — 4/4, echo-free
Every leg independently arrived at brackets as the core motif, with three of four explicitly tying it to Gate 2's diff-bounds ("the edit stays within the authorised lines"). Executions differ (offset diff-brackets forming an open square; opposing brackets framing a slash; three nested brackets; a bracketed check) but the *motif* is settled. **Do not brief a designer on anything else without a stated reason.**

### D2 · No shield, padlock, bug, robot, sparkle, or freestanding checkmark — 3/4
Named as category clichés that collapse Patchward into "generic security tool" or "generic AI tool."

### D3 · Semantic colour is locked to state, and only state — 4/4, echo-free
This is the panel's most useful concrete result and it directly serves the Gate-3 honesty constraint.

| State | Colour | Rule |
| --- | --- | --- |
| Gate PASS | Green | **Only** for pass states. Never the brand accent, never decorative — using pass-green as the brand colour would quietly imply every gate always passes. |
| Gate SKIPPED | **Amber** | Unanimous, and the sharpest finding in the panel. A disclosed skip is **not a failure**; red would frame honest disclosure as an error. |
| Gate FAIL | Red | True failure only. |

Candidate hexes differ (pass: `#1F9D57` / `#0A7455` / `#10B981` / `#4A9C8C`; amber: `#C77D12` / `#8A5C00` / `#F59E0B` / `#D4A06A`) — the *rule* is settled, the *values* are Open Decision 2.

### D4 · Never pure `#000000` — 4/4, echo-free
All four independently specified a near-black (`#0E0F13`, `#111318`, `#090A0F`, `#111318`) and two said so explicitly.

### D5 · Monospace for evidence, proportional sans for prose — 4/4, echo-free
Mono is reserved for things a machine produced or a reviewer can verify: commands, gate rows, scanner IDs, paths, diffs, numeric facts. Body copy is proportional. (Leg D's serif body face is the lone dissent — Open Decision 4.)

### D6 · Motion is mechanical and functional, never decorative — 4/4, echo-free
Banned by name across legs: glow-pulses, particle effects, matrix rain, scanning beams, parallax code, fake terminal typing, ambient background blurs. Motion demonstrates state; it does not simulate technicality.

### D7 · Gate 3 must be rendered with two exits, everywhere — 4/4
In the pipeline diagram, in the hero animation, and in the PR template: Gate 3 has a *ran* path and a *skipped-and-disclosed* path. Drawing one exit reproduces the exact overclaim being fixed.

### D8 · The Gate-3 disclosure line has a fixed four-part structure — 4/4 on structure
1. The literal state (`SKIPPED` / `not run`)
2. The reason (no test runner in the hosted environment)
3. What *was* verified (Gates 1 and 2, named)
4. A reviewer action ("run your suite before merging")

No apology, no hedge. Exact wording is Open Decision 6.

### D9 · Replace the mpfb2 link with a status-labelled example gallery — 4/4
And **label outcomes literally.** Leg B is explicit and correct: checkdmarc #261 must never be called "merged." *Ground-truth adjudication:* I inspected the PR directly — it reads "Closed with unmerged commits"; the maintainer closed it as superseded by his own #262 and shipped the narrowed fix in v5.17.3. Leg C's phrasing ("the maintainer accepted... and published version 5.17.3") drifts toward overclaim and is **resolved against**. Correct labels: `merged` / `maintainer follow-up shipped` / `closed — superseded` / `open`.

### D10 · A standalone limits/honesty page — 4/4, echo-free
All four independently proposed it as its own page and as a marketing asset rather than fine print. It must state: when Gate 3 skips; scanner scope; review responsibility; the corrected test figures (565/3/91.20% on Python 3.14.4, retiring "371 tests / 89%").

### D11 · The Anthropic data boundary must be stated precisely — 4/4
Every leg independently caught the same live accuracy issue: **credential scrubbing applies to Patchward's own logs and CLI output, not to what is sent to Anthropic.** Repository file contents reach the API during triage and fix generation. Say this plainly; do not let "local-first" imply "nothing leaves."

### D12 · Depth is opt-in via inline links, not a docs mega-menu — 4/4
Deep pages branch from the sentence that raises the question. The main path stays short.

### D13 · The PR-body template is a lookbook chapter, not an afterthought — 4/4
Fixed section order, every gate on its own row, every row present every time, plus a branch-naming convention (`patchward/…`) and a forbidden-token scan for `repomend`.

### D14 · Do NOT serve different content to AI crawlers — 3/4, and RESOLVED against the dissent
**This is the most consequential adjudication in the document.** Leg C recommends server-side content negotiation that detects AI crawler user-agents and serves them a separate markdown document. Legs A, B, and D reject bot-only content; Leg B states the rule as *"machine-legible, yes; machine-only claims, no."*

*Ground-truth adjudication (verified independently, not taken from any leg):* Perplexity has **blocked** Time's markdown agent ads and called them deceptive. Perplexity's chief communications officer Jesse Dwyer warned that publishers deploying "deceptive advertising like markdown ads" risk **a reputational downgrade in Perplexity's proprietary search index, including a hit to their trust score.**

For a product whose entire brand is honest disclosure, being flagged for cloaking would be uniquely destructive — it attacks the exact claim the brand is built on. **Leg C's recommendation is rejected on evidence, not preference.** Serve one set of facts to everyone; make that set cleanly parseable.

---

## Leading options (MEDIUM — 2/4)

- **JetBrains Mono + Inter** as the type pairing. The only pairing named identically by two legs (A, D); a third names JetBrains Mono as fallback. Competing: Instrument Sans + IBM Plex Mono (B), Geist Sans + Geist Mono (C — with Leg A flagging Geist as carrying "reads as a Vercel clone" risk).
- **"The new brand ships while the artifacts still lie"** as the third top risk (A, B — both web-grounded legs). A polished site launching while generated PRs still say RepoMend and stale counts stay live makes the failure *more* damaging than today's plain site.
- **8px spatial base** (A, C, D) versus 4px (B). Note this is 3/4 and arguably HIGH; held at MEDIUM because 4px and 8px systems are compatible, so the disagreement is thinner than it looks.

---

## Single-model options (attributed, explicitly not decisions)

- **Leg B — "Don't encode three passes in the permanent logo."** Three ticks mean three *gates*, not three guaranteed *successes*. Unusually sharp, and it directly contradicts Leg D's dashed-third-bracket idea (Open Decision 5).
- **Leg B — the governance chapters:** a *Truth contract* (allowed claims, dated facts), a *Proof taxonomy* (accurate outcome labels), *Agent-readable parity* (a CI test that fails if HTML and markdown facts diverge), and *Release QA* (forbidden-name scan, required-gate-row snapshot test). No other leg has a governance layer. Given that this project's recurring failure mode is exactly "claims drift from reality," this is the most valuable single-model contribution in the panel.
- **Leg B — `/facts`, a dated claims ledger** an agent or a human can quote safely, with dated-fact expiry. Directly prevents the "371 tests" class of staleness recurring.
- **Leg B — status must use word + icon + colour, never colour alone.** Not a style preference; a WCAG requirement. See Synthesist's note.
- **Leg C — a CLI/terminal output chapter in the lookbook.** The only leg to treat the CLI as a brand surface. Real gap in the others.
- **Leg D — the parent-brand relationship risk.** Copy CallMed AI's green and Patchward reads as a sub-product; ignore it entirely and the spin-out reads as abandoned. Proposed resolution: share the near-black canvas (family resemblance), shift the accent (distinct identity). Novel, unraised elsewhere, and directly relevant to a spin-out.
- **Leg B — the pre-flight run brief** (confirm repo, scope, scanner set, where AI is used, whether a runner is available, draft-PR delivery) before any repository work begins.
- **Leg D — Step 0, the SERP/social snippet** as a funnel step in its own right.
- **Leg C — an interactive payload inspector** showing the exact AST nodes sent to Anthropic. The most build-expensive idea in the panel; also the most direct answer to the data-boundary skeptic.

---

## Open decisions — your call, numbered

**1 · Light canvas or dark?** *(Clean 2–2 split. Cannot be averaged — there is no midpoint.)*
- **Light:** Leg A (`#FBFBFA` warm off-white) and Leg B (`#F4F1E8` warm field). Both argue it is *unusual* for a dev tool and therefore itself a differentiation and clarity signal.
- **Dark:** Leg C (`#090A0F`) and Leg D (`#111318`), arguing engineering-grade utility aesthetic and family resemblance to CallMed AI.
- **Flag worth weighing:** the two *web-grounded* legs both chose light, and Leg A's reasoning is explicitly that the category is blue/dark-dominated so light is open territory. That correlation may be real signal — or it may be that grounded legs did competitor research and both reacted the same way to the same finding, which is weaker evidence than two truly independent votes. I cannot separate those. Note that Leg A proposes a dark *variant* as a family nod, so light-primary-with-dark-mode is a live hybrid.

**2 · The brand accent colour.** *(4-way split, no convergence.)* Indigo-violet `#5B4BE0` (A) / rust-oxide `#B33A20` (B) / emerald + cyan (C) / muted teal `#4A9C8C` (D). Note a partly-false conflict: Leg C "STRICTLY BANS" purple as an AI cliché while Leg A recommends a saturated indigo — those are arguably different colours doing different jobs. Relevant verified fact from Leg A, corroborating: **Snyk's current primary is blue `#145DEB`, not purple** — so the "purple is taken" assumption is stale. Whatever you pick, D3 constrains it: the accent cannot be pass-green.

**3 · Exact hex values for pass / skipped / fail.** The *roles* are settled (D3); the values are four different sets. Needs a WCAG AA contrast pass against whichever canvas wins Decision 1, so this is downstream of 1.

**4 · Body typeface: sans or serif?** Three legs say proportional sans; Leg D uniquely proposes **Roboto Serif** for body prose, arguing "slightly academic warmth to counterbalance the coldness of the CLI." A genuine minority position with a stated rationale, not a slip.

**5 · Should the logo encode gate semantics?** Leg D wants the third bracket dashed/rotated to signal "Gate 3 may skip." Leg B says never bake gate-count semantics into a permanent mark. Both are principled; they cannot both hold.

**6 · The tagline.** All four are compliant with the honesty constraint; pick on taste and memorability.
- A: *"Five scanners. One verified fix at a time. It tells you what it checked."*
- B: *"Security fixes that show their work."* ← the only one under five words
- C: *"Deterministic static analysis. Local AI fix generation. Uncompromising gate verification."*
- D: *"Scanned five ways. Gated three times. Opened as a draft—never merged blind."*

**7 · Voice ordering — lead with the limit, or lead with the invariant?** Leg A's lookbook sets a "state the limit first" principle. Leg B's Risk 2 explicitly warns that leading with exceptions produces "caveat soup" and says to lead with the invariant (bounded draft PRs with recorded verification), *then* present PASS/FAIL/SKIPPED as designed states. This is the single most delicate copy decision in the system and both legs flagged it as such.

**8 · Motion length and looping.** Leg B: ~1.2s, runs once, holds final state. Leg D: <4s, no loop. Leg A: 12–18s, seamlessly loopable. Leg A is internally inconsistent here — it also specifies restrained one-shot state transitions — so treat its long loop as the weakest of the three.

---

## What the research could not answer

**Agent-readability (Lens 5) — LOW confidence, 3/4.** Legs A, B, and D all rated it lowest; only Leg C rated it MEDIUM, and Leg C is parametric and produced the one recommendation that was resolved against on evidence (D14). My pre-run prediction that this lens would return MEDIUM/LOW held.

The grounded legs brought real evidence that this is not merely uncertain but *actively poor*:
- SE Ranking's ~300,000-domain study found `llms.txt` on 10.13% of sites with **no statistically significant citation correlation** — removing it from their model *improved* accuracy. Only one of the 50 most AI-cited domains had the file.
- OtterlyAI logged **84 of 62,100 AI-bot visits (0.1%)** hitting `llms.txt` directly over 90 days.
- Google's John Mueller likened it to the discredited keywords meta tag; Google's own guidance says AI search features need no special AI files beyond standard crawlable content.

**Actionable read:** do the cheap, honest, structurally-sound things — server-rendered semantic HTML, stable headings, visible dated fact blocks, JSON-LD matching visible copy, allowing intended crawlers through robots.txt, and PR gate labels literal enough for an assistant to quote accurately. Add `llms.txt` and markdown mirrors only as near-zero-cost convenience. **Do not build brand differentiation on agent placement**, and do not serve bot-only content (D14).

**Raise confidence by:** running a fixed ~20-question retrieval benchmark across ChatGPT, Claude, Gemini and Perplexity before and after launch, scored for factual accuracy and citation choice, plus real crawler logs from patchward.dev showing which agents fetch what.

**Also unresolved by the panel, because it wasn't asked:** whether the pilot is delivered via the hosted path or the local CLI. That determines how often Gate 3 actually skips, which determines how prominent the disclosure needs to be. Worth settling before the copy is written.

---

## Synthesist's notes (zero models' worth of evidence — flagged, not tiered)

1. **Leg B's word+icon+colour rule is not optional.** It's presented as a single-model style point, but colour-only status encoding fails WCAG and breaks for colour-blind reviewers and in plain-text copies of a PR body. Treat as a requirement.
2. **`prefers-reduced-motion` appears in only one leg.** Same category — accessibility baseline, not a design preference.
3. **Decisions 1 → 3 are ordered.** Contrast ratios for the state colours can't be locked until the canvas is chosen.
4. **The strongest single argument in the panel is not in any decision above.** Leg B: the verification receipt *is* the hero visual, and every decorative element must justify itself by explaining scope, state, provenance, or data flow — otherwise it's cut. That's a single rule that would enforce most of D1–D6 automatically.

---

## Decision log

**v1 → v2, 2026-08-11. All 8 open decisions confirmed by Yehor, adopting the synthesist-recommended package in full.**

1. **Canvas: light-primary, dark variant available.** Rationale: two web-grounded legs (A, B) independently reached light after real competitor-color research (category is blue/dark-saturated), making it genuinely distinctive; the dark variant preserves CallMed AI family resemblance without conceding the primary. *Caveat on record: this was the one decision flagged as legitimately overridable on pure aesthetic conviction (dark IDEs, dark terminals, the parent's existing dark identity) — Yehor confirmed light anyway.*
2. **Accent colour: rust-oxide (Leg B's `#B33A20` family).** Rationale: most distinctive against the field (vs. Snyk blue, Sentry purple, Trivy teal); non-negotiable constraint carried forward: never pass-green (D3).
3. **State hexes: delegated to build phase.** Rule, not a value: highest-WCAG-AA-contrast candidate against the winning canvas (Decision 1) wins, evaluated per state (pass/skipped/fail) independently.
4. **Body typeface: proportional sans (3/4 majority).** Leg D's serif argument (typographic warmth) rejected as solving a problem the brand doesn't have — warmth comes from honesty of voice, not softened type.
5. **Logo: no gate-count semantics in the permanent mark.** Leg B's position adopted: three ticks would read as three guaranteed successes — the exact overclaim being retired — and a dashed third bracket would bake today's C2 behavior into a mark that outlives it. The mark says bounded/verified (brackets per D1), not a gate count.
6. **Tagline: Leg B — "Security fixes that show their work."** Shortest, most memorable, is the positioning statement in five words.
7. **Voice ordering: lead with the invariant, then present gate states as designed — at the page/section level.** Scoped explicitly: this governs landing copy and PR-body framing, not D8's own internal structure — the Gate-3 disclosure block itself still states the literal state first (D8's four-part order is unchanged and takes precedence within that one block).
8. **Motion: ~1.2s, run once, hold final state (Leg B).** Rejected Leg A's 12–18s loop as self-contradicting Leg A's own restraint principle; rejected Leg D's <4s as looser than necessary given D6.

**Also adopted, not numbered originally but confirmed alongside the 8:** Leg B's governance chapters (Truth contract, Proof taxonomy, `/facts` dated claims ledger, Release QA forbidden-name scan) promoted from single-model option to required lookbook content — direct structural fix for the claims-drift failure mode this project has hit repeatedly. Both Synthesist's notes (word+icon+colour, `prefers-reduced-motion`) promoted from note to requirement.

**9. Pilot-delivery mechanism: CLI, run personally by Yehor — RESOLVED 2026-08-11 by direct evidence, not inference.**
Three independent, Tier-0 findings, triangulating on the same answer:
- The live site's own "Request a Patchward pilot" CTA is a plain `mailto:yehor@callmedai.com?subject=Patchward%20pilot` link — no GitHub App install flow exists on the site today.
- The only real example PR (`checkdmarc#261`) was opened 2026-06-23 from a personal fork under Yehor's own GitHub account, crediting his pre-rename personal "RepoMend" repo — six weeks before the hosted webhook path could even push a PR with a working token (item 21 shipped 2026-08-05).
- Patchward's own project memory still frames "distance to first paying Marketplace install" as the open North Star as of its most recent logged session close — i.e., zero real GitHub App installations exist to date.

**Consequence for the two frequency-dependent copy spots:** the CLI-rare variant wins, not the hosted-frequent one. Gate 3 runs against the customer's own test suite on the delivery machine in the normal case; the disclosed-skip line is the honest edge case, not the defining experience — foreground it accurately (present, designed-in, not hidden) without over-weighting its frequency in the funnel's top-level real estate. Re-check this framing if/when the hosted path lands its first real installation — it is a present-tense fact, not a permanent one.

**10. Prototype copy claim, retroactively logged — 2026-08-11.** The hero prototype (`patchward_hero_prototype_v1_2026-08-11.html`) shipped a line not present in any logged decision: "the disclosed-skip path... will become common as the hosted path scales." This is a defensible forward-looking extension of Decision 9 (present-tense: CLI-delivered today, skip is the rare edge case) — but it entered a build artifact without being logged first, which is the exact drift pattern this document's closure discipline exists to catch. Logged now, not removed: the claim is reasonable (the hosted path is real infrastructure per D7, and the Marketplace north star will make skips common if it succeeds), but future copy should cite this entry rather than restate the claim freshly each time. Re-verify against real hosted-path usage once it has any.

**11. Status pills need the icon leg of word+icon+colour — v-bump, not a correction.** Synthesist's note 1 (requirement) specifies word + icon + colour for every status. The prototype shipped word + colour only. Not an AA failure — the word alone carries the meaning on a monochrome display — but the triad is incomplete. Fixed in the prototype: a check glyph for PASS, a dash for SKIPPED.

These 11 are now settled. A future synthesis on this subject inherits them as ground truth and does not reopen them without a stated new reason.
