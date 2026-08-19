---
name: session-strategy-synthesis
description: Industrial-grade session-start strategy synthesis for any ongoing project. Verifies the project's real state with a two-pass hard check, then synthesizes a strategy at three nested zoom levels (project horizon → session goal → next concrete step) and updates a persistent project memory so every session starts sharper than the last. Use this at the start of any working session on a project — whenever the user says "let's continue the project", "where were we", "plan this session", "synthesize a strategy", "what should we do today", opens a project folder to resume work, or asks for a verified status before starting. Also use when the user wants the project's memory/strategy file created, audited, or updated.
---

# Session Strategy Synthesis

Turn the start of every working session into a verified, compounding advantage. Most session plans fail for one of two reasons: they trust stale beliefs about the project's state, or they plan at only one altitude (either grand vision with no next step, or a task list with no direction). This skill fixes both — verify first, then plan at three nested scales, then record what was learned so the next session's plan is more accurate.

The core loop: **Ground → Verify → Synthesize → Commit → Learn.**

## The project memory

Each project carries its memory in a `.strategy/` folder at the project root:

- `.strategy/STRATEGY.md` — human-readable memory: mission, current beliefs about state, active heuristics, failed-approaches ledger, session log, calibration record.

The full format with all sections is in `references/memory-format.md` — read it before creating or rewriting a memory file. The memory is a set of *claims to be verified*, never a source of truth. That distinction is what lets the system learn: every session measures how far the memory drifted from reality.

**Bootstrap (no `.strategy/` exists):** don't fabricate history. Scan the project (README, file tree, git log if present, TODOs), ask the user 2-3 targeted questions about mission and success criteria if unclear, then create `STRATEGY.md` from the template with the Calibration section starting empty. Mark clearly inferred vs. user-confirmed facts.

## Phase 1 — Ground: read the memory, extract claims

Read `.strategy/STRATEGY.md` and pull out every checkable claim in "Current state" and "Open threads" — e.g. "tests pass", "chapter 3 drafted", "API deployed", "invoice sent". List them explicitly. These are hypotheses, not facts.

## Phase 2 — Verify: the two-pass hard check

Every claim gets two independent checks before it may inform the plan. One check catches stale memory; the second catches a stale or misleading first check.

**Pass 1 — direct observation.** Verify each claim against the actual project via fresh reads: open the files, list the directories, read the actual content. Never rely on conversation memory or the memory file itself as evidence.

**Pass 2 — independent method.** Re-verify the claims that matter for today's plan using a *different* mechanism than Pass 1:

- Code: if Pass 1 read the source, Pass 2 runs the tests/build, or diffs git state against the last session log entry.
- Documents: if Pass 1 checked the file exists, Pass 2 reads its actual content against what memory says it contains (word count, sections present, version).
- External state (deployments, sent emails, published pages): if Pass 1 checked a local record, Pass 2 checks the live artifact where possible; if it can't be checked, mark the claim UNVERIFIED — never silently trust it.

Record each claim's verdict: **CONFIRMED / DRIFTED (memory wrong — note actual state) / UNVERIFIED**. Only CONFIRMED facts and corrected DRIFTED facts feed the synthesis. UNVERIFIED items either become the session's first task or are planned around, explicitly.

Why two passes matter: a single check tends to confirm what it expects to find. The second, method-independent pass is what makes the verification hard rather than ceremonial — it's the difference between "I looked" and "I tested".

## Phase 3 — Synthesize: three nested zoom levels

Apply the same analysis pattern at three scales, each constrained by the level above. This is the fractal structure: identical shape (goal → obstacles → highest-leverage move → success check), different magnification.

**L1 · Horizon (the project).** What is this project ultimately for, is that still true, and what is the single biggest obstacle between current verified state and done? Update if the verified state changed the picture.

**L2 · Session (today).** Given L1's biggest obstacle and the verified state: what one outcome, achievable this session, most reduces that obstacle? State it as a testable result ("draft of section 4 complete and self-consistent", "auth bug reproduced and fixed with regression test"), never as an activity ("work on the app").

**L3 · Step (the next 30 minutes).** The first concrete action toward L2, precise enough to start immediately — file to open, command to run, paragraph to write.

Then check alignment upward: does L3 provably advance L2, and L2 provably advance L1? If a link is broken, the plan is decoration — fix the chain before presenting it. Consult the Heuristics and Failed approaches sections of memory here: don't propose a move the ledger already shows failing, unless conditions have verifiably changed (and say so).

## Phase 4 — Commit: the strategy brief

Present the result in this exact structure:

```
# Session Strategy — <project> — <date>

## Verified state
| Claim from memory | Pass 1 | Pass 2 | Verdict |

## Drift report
<what memory got wrong, or "no drift">

## Strategy
**L1 Horizon:** <one paragraph — goal, biggest obstacle>
**L2 Session goal:** <one testable outcome>
**L3 First step:** <one immediate action>

## Risks & unknowns
<UNVERIFIED items and how the plan handles them>
```

Keep it to one page. A strategy that doesn't fit on a page hasn't been synthesized yet.

## Phase 5 — Learn: update the memory

After the brief is accepted (and again at session end if the session continues), update `.strategy/STRATEGY.md`:

1. **Correct** "Current state" to the verified reality.
2. **Log** the session: date, drift found, L2 goal, outcome if known.
3. **Score calibration**: claims confirmed / total claims checked. Append to the Calibration record. A falling score means the project's memory habits are bad — sessions are ending without recording changes — and the skill should say so and tighten what it writes.
4. **Evolve heuristics.** This is where the system actually learns:
   - A move that worked in ≥2 sessions → promote to Heuristics with its evidence.
   - A heuristic that failed when applied → demote it with a note on why.
   - An approach that failed → add to Failed approaches with the condition under which it might be retried.

Heuristics must be earned by logged evidence, never invented to sound wise. Over sessions this makes the synthesis measurably more precise: fewer drifted claims, faster verification (check what historically drifts), and plans that skip already-burned paths.

## Judgment notes

- Scale the rigor to the stakes: a hobby writing project doesn't need git forensics, but it still gets both passes — they're just lighter.
- If the user gives a session goal upfront, don't override it; verify state, then slot their goal into L2 and check its alignment with L1. Flag conflicts honestly.
- Never edit `.strategy/` to make history look better; the ledger's value is its honesty.
