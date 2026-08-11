# Running the Patchward brand research — step by step

## Step 1 — Run the pinned prompt across 4 independent models

Open `patchward_brand_research_prompt_v1_2026-08-11.md` and copy the **entire contents**
byte-for-byte into each of 4 different models. Use a **fresh chat/context for each** — no
shared history, no letting one model see another's answer. Independence is the whole point;
skip this and the synthesis step downstream becomes theatre.

Suggested panel (mix families per the synthesis skill's provenance rule — don't use four
variants of the same base model):
- Claude (Opus or Sonnet)
- GPT-5 class model
- Gemini 2.5/3 class model
- One more from a different family (Grok, Llama-derived, DeepSeek, etc.)

If you only have reliable access to 3, that's the skill's stated minimum — 4 is better, 3 is
the floor. Below 3, it's a comparison, not a synthesis.

## Step 2 — Save each output with this exact naming pattern

```
patchward_brand_research_claude_2026-08-11.md
patchward_brand_research_gpt_2026-08-11.md
patchward_brand_research_gemini_2026-08-11.md
patchward_brand_research_[fourth]_2026-08-11.md
```

Paste the model's full raw answer into each file, unedited. Don't summarize or clean up —
the synthesis pass needs to see exactly what each model said, including where it hedged or
skipped a section.

## Step 3 — Bring all 4 files back to this chat

Drop them in (or point me to where you saved them) and say "synthesize these." I'll run the
tiering pass per the synthesis skill: section by section, agreement counted only where it's
genuinely independent, conflicts surfaced rather than averaged, and a numbered "open
decisions" list for anything that's actually your call.

## Step 4 — You answer the open decisions

The synthesis will hand back a build document with a Decisions section (things 3-4 models
agreed on — treated as settled) and an Open Decisions section (real disagreements, each with
both sides' reasoning). You answer the open ones; I log the answers into the build doc's
Decision log so they don't get relitigated later.

## Step 5 — Lookbook and build

Once the build doc is locked, it drives the actual lookbook (logo, type, colour, motion,
voice) and then the real patchward.dev site plus the PR-body template. Remotion or any other
execution tooling gets evaluated at this point, against the locked spec — not before.

---

## Separately, this week, regardless of the redesign timeline

The current callmedai.com has a live, customer-facing overclaim (Gate 3 "must pass — never
pushed," false on the hosted path) — already found and already drafted for correction in
`patchward_site_copy_check_2026-08-11.md` from earlier this session. That fix doesn't need
to wait for the redesign; it's wrong today and the redesign is weeks out.

Also worth knowing before the site build, not urgent: the one real Patchward PR inspected
this session (`checkdmarc#261`) is still branded "RepoMend" in its body and branch name, live
on a third-party public repo. Can't be edited retroactively (PR is closed), but worth adding
a pre-flight check to whatever generates future PR bodies/branch names so it doesn't recur
under the new patchward.dev brand.
