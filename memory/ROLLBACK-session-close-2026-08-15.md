---
name: session-close
description: >-
  Industrial-grade session close-out for any project. Use whenever the user
  wants to wrap up, close out, or seal a working session — especially requests
  for "industrial" or "professional" rigor, double-checks, hard tests, a safety
  pass, or a handoff summary. Trigger on "close out the session", "wrap up",
  "let's call it a day", "confirm everything is safely closed", "session
  close", "seal this up", "prepare a handoff", or any request to verify today's
  work is actually saved and the next session can start cleanly — even without
  mentioning git or files. Verifies every close-out claim with a two-pass hard
  check, reconciles git state without assuming scope, judges the session at
  three nested zoom levels (project horizon → session goal → artifacts), and
  updates the persistent project memory (.strategy/STRATEGY.md) with scored
  calibration and earned heuristics — so it is the closing half of the
  session-strategy-synthesis loop and every close makes the next open sharper.
---

# Session Close

## Why this exists

"Wrap up the session" sounds like a formality, but the failure modes it guards against are real and expensive: work that quietly never made it to disk, a commit reported as done that never landed, a close-out summary that softens the one weak point that actually mattered, and — subtlest of all — a project memory that ends the session already wrong, so the *next* session starts by planning from fiction. None of these announce themselves; they look identical to a clean close until someone reopens the project.

The core discipline: **verify, don't report.** Every claim in the close-out ("committed", "clean", "done", "tests pass") must be backed by something checked *this pass*, with two independent checks for anything that matters.

This skill is the closing half of a loop. If the project has a `.strategy/STRATEGY.md` memory (created by session-strategy-synthesis or by this skill), the close writes exactly what the next session's open will read and verify — session outcome, corrected state, calibration score, earned heuristics. A close that skips the memory update silently sabotages the next open. If no memory exists, create one now from `references/memory-format.md` — closing is the natural moment to start it, because this is when the verified facts are freshest.

The loop: **Reconcile → Verify → Judge → Seal → Learn.**

## Phase 0 — Detect context and scope

Check whether the project runs under a formal contract/sign-off framework (a `CLAUDE.md`, "operating constitution", staged contracts, existing `*REPORT*`/`*CONTRACT*` docs). If so, read `references/formal-governance-format.md` and use its close-out structure instead of the generic one below. Either way, reuse existing conventions (close-out naming, `.gitignore` structure, documented prior incidents) before inventing new ones.

Then read `.strategy/STRATEGY.md` and extract: the session's L2 goal as planned at open (if recorded), the claims added or assumed during this session, and the current heuristics/ledger. These are what the close must verify and settle.

Scale rigor to the stakes: a non-git writing project gets no git ceremony, but it still gets both verification passes — they're just lighter (word counts, section presence, TODO scans instead of test suites and commit hashes).

## Phase 1 — Reconcile durable state (git, if the project uses it)

The step most prone to scope surprises. In this order:

1. **`git status` first**, before staging anything. The working tree is ground truth, not your memory of the session — it often contains earlier uncommitted work, files touched by something else, or scratch artifacts that must never be committed.
2. **Diff anything unexpected** and read the diff before staging it.
3. **Dry-run before staging any untracked directory** (`git add -n <path>`): git collapses a whole directory to one status line, and a nested venv, dependency clone, cache, or build output will get staged wholesale if you add blind. If the dry run lists junk, fix `.gitignore`, re-dry-run, confirm, then stage.
4. **Stage explicit paths, not wildcards**, unless the dry run just confirmed the whole tree is exactly what you expect.
5. **Commit with `git commit -F <msgfile>`, not inline `-m`** — shell quoting (PowerShell especially) mangles multi-line messages, and an inline commit can be reported as executed without landing. Delete the msgfile after; confirm the delete.
6. **Verify the landing**: read `git log -1 --stat` and a fresh `git status` yourself. A clean tree at the new hash closes this step; the word "committed" does not.
7. **Self-reference trap**: if you edit the close-out doc after committing it (common — the final hash goes in the doc), the committed copy is now stale. Land a small follow-up commit and re-verify.

## Phase 2 — Verify: the two-pass hard check

Take every claim the session produced — the L2 goal ("feature done", "chapter drafted"), memory entries added today, and every row that will appear in the gate table — and give each two independent checks:

**Pass 1 — direct read.** Re-read every file that changed this session through the file tool, not shell `cat`/`wc` — a shell running in a different mount can show a stale or truncated mirror of a file that is actually intact. If shell and file tool disagree, the file tool is authoritative; treat the shell view as a stale-mirror artifact to investigate, not as data loss.

**Pass 2 — independent method.** Re-verify by a different mechanism than Pass 1: run the tests/build rather than reading the code; check the rendered/exported artifact rather than the source; diff against the session-start state; recompute the word count against the goal's number. External claims ("published", "sent", "deployed") get checked against the live artifact where possible; where impossible, mark **UNVERIFIED** — an unverifiable claim goes in the close-out as an open item, never as a fact.

**Cross-consistency sweep.** Read the close-out materials together — memory file, notes, close-out draft, formal reports — hunting drift *between* them: a NOTES file that says "done" above a draft full of TODOs, a status field one document contradicts in its sibling. Each document can be internally consistent while the set lies. Verdict every claim: **CONFIRMED / DRIFTED (state the actual) / UNVERIFIED.**

Why two passes: a single check confirms what it expects to find. The second, method-independent pass is the difference between "I looked" and "I tested" — it is what makes the close industrial rather than ceremonial.

## Phase 3 — Judge: the session at three zoom levels

Same fractal pattern as the open, pointed backward:

**L3 · Artifacts.** What concretely exists now that didn't at open, per Phase 2's verdicts — files, commits, fixed defects. Only CONFIRMED items count.

**L2 · Session goal.** Was the goal set at open met, *as the testable outcome it was stated to be*? Verdict: MET / PARTIAL (state what's missing) / NOT MET / NO GOAL RECORDED. Judge against the recorded goal, not a retro-fitted easier one — moving the goalposts at close poisons calibration.

**L1 · Horizon.** Did this session actually reduce the project's biggest obstacle, or did it produce motion without progress? One honest paragraph. If the answer is "motion without progress" twice running, that pattern itself belongs in the memory's Open threads.

Check the chain: L3 evidence must support the L2 verdict, and the L2 verdict must justify the L1 assessment. A close-out that claims horizon progress unsupported by artifacts is decoration.

## Phase 4 — Seal: the close-out document

Write a dated close-out (`SESSION_CLOSE_<date>.md`, or the project's existing convention). Structure — adapt names to the project's voice, keep the substance:

```
# Session Close — <project> — <date>

## Gate status
| Claim | Pass 1 | Pass 2 | Verdict |

## Session judgment
**L3 Artifacts:** <verified deliverables>
**L2 Goal:** <recorded goal → MET / PARTIAL / NOT MET, evidence>
**L1 Horizon:** <what actually moved>

## Decisions made this close
<real choices made, not placeholders for pending ones>

## Weakest points, stated plainly
<the section most tempted toward softening — resist. Anything inferred rather
than confirmed, anything UNVERIFIED, recurring defect patterns, missing checks.>

## File manifest
<committed vs deliberately excluded, with reasons>

## Next-session opening prompt
<copy-pasteable block: verified-current state only (never "will be true once
X finishes") + the concrete first action. Begin the block with an explicit
instruction to open via the session-strategy-synthesis skill (or the project's
session-open skill) grounding in .strategy/STRATEGY.md — naming the skill makes
triggering deterministic in the cold session instead of inferred, and its
re-verification pass is wanted even though this prompt's claims were verified
at close: they can go stale between sessions.>
```

## Phase 5 — Learn: update the memory

This is what makes the system compound instead of merely repeat. In `.strategy/STRATEGY.md` (format in `references/memory-format.md`):

1. **Correct** Current state to Phase 2's verified reality — every entry checkable and dated, "making progress" banned.
2. **Log** the session: date, L2 verdict, drift found at close, outcome. An unlogged session is the leading cause of next-open calibration drops.
3. **Score calibration**: of the claims this session's records made, how many did the close confirm? Append the ratio. Below 0.7 twice running, add a memory-hygiene thread and tighten what gets written mid-session.
4. **Evolve heuristics** — earned, never invented: a move that worked in ≥2 logged sessions gets promoted with its evidence; a heuristic that failed today gets demoted with the reason; a dead end goes to Failed approaches with its retry condition. One session's lesson is a candidate, not a heuristic.
5. **Never launder history.** No rewriting old entries to look smarter; corrections are new dated entries. The ledger's value is that it can be trusted against the grain of how the session felt.

## Phase 6 — Final verification loop

Before declaring the session closed, re-check the close-out's own claims once more — especially anything a last-minute edit could have staled (Phase 1.7). Get one final authoritative status from the environment (git status, test run, fresh file reads — whatever is ground truth here) and read it. Any discrepancy: fix, then loop again. "Closed" is only reportable when the loop terminates clean; taking two or three passes is normal and is the point of a *double* check.

## Output

By the end: a landed, verified commit (if applicable); a close-out document with an honest weak-points section; `.strategy/STRATEGY.md` updated with correcte