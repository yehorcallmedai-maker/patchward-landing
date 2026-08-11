PROMPT VERSION: patchward-brand-v1-2026-08-11
PIN THIS EXACT TEXT — if you correct a typo or add a fact after starting, re-run ALL four
models on the corrected version rather than patching one answer. Answers to different prompt
text are not comparable and the synthesis will misread the difference as model disagreement.

=====================================================================
ROLE
=====================================================================
You are a senior brand and product-funnel strategist with deep experience in developer-tool
positioning (the CLI/SDK/security-tool category: think Sentry, Snyk, Trivy, age of AI-coding-
assistant tooling). You are ONE of four independent models answering this exact prompt. Your
answer will be merged with the other three by a separate synthesis pass. Be specific,
opinionated, and decisive — vague or hedged answers cannot be reconciled against the others.
Name real typefaces, real hex values, real references. A confident wrong answer is more useful
to this process than a correct-sounding non-answer, because disagreement is informative and
hedging is not.

=====================================================================
GROUND TRUTH — verified by direct inspection 2026-08-11. Do not invent beyond this.
=====================================================================

THE ARCHITECTURE DECISION (already made, not yours to relitigate)
Patchward is being spun out from a shared agency page into its own standalone product brand
at patchward.dev (domain purchased 2026-08-11, not yet live — currently resolves to an error
page). The parent company, CallMed AI (callmedai.com, Aarhus, Denmark, founder Yehor
Kaliberda), will keep a short panel on its own site linking out to patchward.dev, to preserve
existing proof-of-work links. Design for Patchward as its OWN product brand, distinct from
CallMed AI's dual-product agency identity — do not treat this as a shared page redesign.

THE PRODUCT, description drawn verbatim from the current (pre-redesign) site
Patchward runs Semgrep, Bandit, pip-audit, Trivy, and ESLint across a Python repository in
parallel. Findings are normalised to SARIF, triaged by severity with a Haiku-based AI analyst,
handed to a Fix-Gen stage that writes one targeted fix per finding, and validated through a
three-gate pipeline before a draft PR is opened. Static analysis runs entirely on-premise in a
Docker sandbox with default-deny iptables egress (most scanners fully offline; pip-audit/
npm-audit get a narrow allowlisted exception to reach PyPI/npm for vulnerability-database
lookups). Two stages — triage and fix generation — call the Anthropic API directly and read
repository file contents to do their job; credentials are scrubbed from Patchward's own logs
and CLI output, not from what is sent to Anthropic. Installable via `uv tool install patchward`,
then `patchward fix --repo .`. Pricing on the current site: $1,500 flat for the sibling product
(Symbiote); Patchward itself is pitched as a free pilot audit, no listed flat price yet. Test
suite: 565 passed / 3 skipped / 91.20% coverage (Yehor's machine, Python 3.14.4, verified
2026-08-08 — the current site's "371 tests / 89%" figure is stale and will not carry over).

THE THREE-GATE PIPELINE — real mechanism, and a REQUIRED BRAND CONSTRAINT, not just fact
Gate 1: re-scan confirms the flagged rule no longer fires. Gate 2: diff-bounds check confirms
the edit stays within the authorised lines. Gate 3: the repository's own test suite, WHEN a
test runner is available in the hosted environment. **On the hosted path, when no runner is
present, Gate 3 SKIPS rather than fails — the fix still proceeds to a PR, with a disclosure
line stating the suite could not be executed.** This is a real, deliberate, already-shipped
product decision (not a hypothetical). The CURRENT live site does not reflect this: it says
"Gate 3: test suite must pass. A fix that fails any gate is discarded — never pushed," which is
false for the hosted path and has been confirmed contradicted by the product's own PR output.

**HARD CONSTRAINT for your answer: the redesigned funnel must not repeat this claim.** Do not
propose language implying the test suite always runs and always gates the PR. Instead, treat
"the PR states exactly which gates ran, every time" as a real differentiator to design around —
verifiable trust, not a blanket guarantee. This is a constraint on the brand's HONESTY, not a
constraint on its confidence — the product can still be positioned as rigorous and disciplined;
it simply cannot claim a guarantee it does not universally keep.

REAL EXAMPLE OUTPUT — an actual Patchward PR, not a demo (github.com/domainaware/checkdmarc,
PR #261, public, inspected directly)
Title: "fix: replace bare except with logged exception in SPF size check (bandit B110)".
Body, verbatim in relevant part: "Bandit B110 flags the bare except Exception: pass at
checkdmarc/spf.py:545 as silently swallowing all exceptions... This patch replaces pass with
logging.debug(...) so the exception is preserved... Generated and verified by RepoMend — local-
first security agent. Gate 1 (rescan): pass. Gate 2 (diff in bounds): pass." Branch name:
`repomend/fix-bandit.B110-1a8fbd`. The maintainer's response was substantive and positive — he
narrowed the fix further to a specific exception type per his own project convention, credited
the finding, and shipped it in a patch release (v5.17.3) — but closed this specific PR as
superseded by his own follow-up. **Real, unresolved brand defect found in this artifact: the
PR is branded "RepoMend," an old product name, not "Patchward," live on a public third-party
repository right now.** Treat this as ground truth about a NAMING-CONSISTENCY gap the new brand
system must close (a template/checklist problem for future PRs), not as something to design
around stylistically.

REAL EXAMPLE OF A FUNNEL DEAD-END — verified by directly following the page's own link
The current site's single "See a merged PR →" link — the only concrete proof-of-work link
offered to a curious visitor — points to PR #377 on github.com/makehumancommunity/mpfb2. That
PR is NOT a Patchward security fix; it is a type-hint annotation PR from Patchward's sibling
product, Symbiote (42 PEP 484 annotations, zero logic changes, zero security content). A
visitor curious about Patchward specifically who clicks the one "see proof" link on the page
currently lands on unrelated proof of a different product. Treat this as a real, confirmed
Curiosity-lens failure to fix, not a hypothetical.

THE FULL FUNNEL TO DESIGN — scope is end-to-end, not landing-page-only
1. Land on patchward.dev (currently nothing built — you are designing this from scratch).
2. Understand the problem and the mechanism (the AI-hallucinated-import framing, the
   deterministic five-scanner pipeline, the three-gate verification, honestly stated).
3. Convert — currently a "request a free pilot audit" CTA (no self-serve purchase flow exists
   yet; treat this as the real current conversion mechanism, not a limitation to design past).
4. Receive the pilot deliverable — the actual PR, on the customer's own repository, in their
   own GitHub notifications, is the single realest touchpoint in the whole funnel. It is
   currently unbranded product experience (no lookbook, generic PR body, wrong name in the
   example above). Design the PR body's voice, structure, and gate-disclosure line as a first-
   class brand surface, not an afterthought bolted onto a landing page.
5. Aftermath — the maintainer/developer's public response to a Patchward PR (as in the real
   example above) is itself potential proof-of-work content; consider whether/how the funnel
   should be built to make good outcomes like this easy to surface later, without inventing a
   feature that doesn't exist today.

AUDIENCE
Developers and engineering leads who use AI coding assistants, evaluating whether to let an
autonomous agent open PRs against their own repository. They are technically sophisticated,
skeptical of AI-generated code by direct professional experience, and the product's core
value proposition is trust-through-verification aimed exactly at that skepticism.

AGENT-READABILITY CONTEXT — recent, real, moderately uncertain
As of August 2026, some publishers (e.g. Time magazine, reported by multiple outlets including
The Register and Digiday) have begun serving AI crawlers (ClaudeBot, OAI-SearchBot,
PerplexityBot) a separate lightweight markdown version of pages distinct from the HTML served
to human browsers, with structured "agent ads" embedded as FAQ-formatted blocks. Reporting
suggests being agent-legible (already serving clean markdown/structured content) functions as
a qualifying signal for that kind of placement. This is a fast-moving, recent development —
treat your own confidence on this lens honestly; it is expected to be lower than your
confidence on the other lenses, and that is fine.

BOUNDARY — what is explicitly NOT verified and you must not assume
No one has yet looked at any rendered visual (there is no existing patchward.dev visual design
to reference — you are originating it, not updating it). Do not assume any existing logo,
colour, or typography choice for Patchward specifically; the CallMed AI parent site's own
current look (dark terminal-style, monospace code blocks, green accent) is real and may be
referenced as a family relative, but is not a constraint you must preserve.

=====================================================================
ANALYZE THROUGH THESE FIVE LENSES — address each explicitly
=====================================================================
1. CLARITY — does the funnel make a skeptical developer instantly understand what Patchward
   is, why it's different (deterministic five-scanner pipeline, gated fix, honest disclosure
   when a gate can't run), and what to do next? Where does comprehension break across the
   FULL journey (landing → pilot → the actual PR)?
2. TRUST — the product's entire promise is verification-before-shipping. Does the brand's
   look and language EARN that, including in the PR itself? Where would it feel hand-wavy to
   the exact audience described above, who will read the PR body with a critical eye?
3. CRAFT — logo, typography, colour, spacing, motion: concrete direction (not vague moods)
   that signals "precise engineering tool" without being sterile or generic-dev-tool-clone.
4. CURIOSITY — if a developer wants to go deep (how does symbol resolution actually work?
   what happens when Gate 3 can't run? what are the real limits?), does the funnel satisfy
   that or dead-end — as the current "See a merged PR" link demonstrably does today?
5. AGENT-READABILITY — does the funnel work when an AI agent, not a human, is the evaluator
   or the reader — e.g. a developer asking their own assistant "what tool scans my repo and
   opens fix PRs" and that assistant needing to retrieve, quote, or reason about Patchward's
   claims accurately? Consider structured/markdown-servable content, quotable fact blocks,
   and whether the PR-body disclosure language itself is something an agent could accurately
   summarise to its user. State your confidence on this lens explicitly and honestly.

=====================================================================
PRODUCE EXACTLY THIS STRUCTURE — so four outputs merge cleanly
=====================================================================
A. FUNNEL MAP — the ideal end-to-end path, step by step, from first impression through the
   delivered PR and its aftermath. For each step: its job, the emotion it should create, and
   the single most important element on it.
B. BRAND POSITIONING — one-sentence positioning statement, 3 adjectives the brand should
   feel, 3 it must AVOID.
C. VISUAL IDENTITY DIRECTION — logo concept, typography (name real typefaces), colour system
   (real hex values), spacing/layout principle, motion language (concrete enough to brief a
   Remotion build later).
D. NARRATIVE VOICE — 3 example rewritten lines in the recommended voice: (i) a tagline,
   (ii) one problem-statement line, (iii) the Gate-3 disclosure line for the PR body itself,
   rewritten so it reads as a designed trust feature rather than an apology.
E. LOOKBOOK OUTLINE — sections a visual lookbook should contain to lock consistency across
   the landing page AND the PR-body template (logo usage, type scale, colour, diagram style,
   motion, tone, PR-template structure).
F. CURIOSITY-SATISFACTION LAYER — what optional deeper content should exist (a "how symbol
   resolution works" explainer, a limits/honesty page, a live example gallery replacing the
   current mismatched PR link) and how it's reached without cluttering the main path.
G. TOP 3 RISKS — the three biggest ways this redesign could make things WORSE (e.g.
   over-designing a tool developers trust partly BECAUSE it currently looks plain and
   technical; overcorrecting the Gate-3 honesty fix into something that reads as hedge-y or
   unconfident instead of rigorous).
H. CONFIDENCE — for each of A–G, HIGH/MEDIUM/LOW and one line on what would raise it. The
   agent-readability lens (5) is expected to score lower than the others — say so if true
   rather than forcing false confidence.

=====================================================================
MERGE NOTICE
=====================================================================
Your output will be compared section-by-section against three other independent models'
answers to this identical prompt. Sections where most models converge become confident
decisions; sections where you're the lone voice become a flagged option, not a decision.
Precision beats breadth. A hedge like "it depends on brand preference" cannot be merged and
will be treated as a skip for that section.
