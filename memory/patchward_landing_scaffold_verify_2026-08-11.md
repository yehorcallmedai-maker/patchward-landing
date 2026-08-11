# patchward-landing scaffold — fidelity verification, 2026-08-11

Read-only. No edits, no git operations. Raw command output below, PASS/FAIL per section.

## 1 — Repo hygiene present from day one

```
-rwx------  .gitattributes  (322 bytes)
-rwx------  .gitignore      (148 bytes)
```

`.gitattributes`: `* text=auto eol=lf` + CRLF pins for `.ps1/.bat/.cmd` + binary pins — matches the exact fix that resolved Patchward's CRLF phantom-diff problem (`132f47a`).
`.gitignore`: ignores `node_modules/`, `dist/`, `.astro/`, `.env*`.

**PASS.**

## 2 — Canonical fact set: verified numbers present, stale numbers absent

Should HIT (verified figures):
```
src/data/facts.yaml:14:  value: "565 passed, 3 skipped"
src/data/facts.yaml:19:  value: "91.20%"
```

Should be EMPTY (stale/branding):
```
src/data/facts.yaml:5:# this project has hit repeatedly: the "371 tests" staleness, the
src/data/facts.yaml:6:# RepoMend branding leak, the mismatched mpfb2 proof link. If it isn't
```

**Nuance, not a failure:** the second grep did produce two hits, but both are inside the file's own header *comment*, describing the class of bug the ledger exists to prevent — not a stated current value. No fact in the actual YAML data states 371, 89%, RepoMend, or Symbiote as true. If this distinction matters to you, the comment wording could be softened to avoid tripping a naive grep in CI later, but as written today it is not a defect — it's documentation of why the file is structured this way.

**PASS.**

## 3 — Computed hexes ported faithfully, both modes

Light set — all 7 present:
```
--canvas: #F4F1E8
--ink: #111318
--accent: #B33A20
--link: #285ED0
--pass: #0A7455
--skip: #8A5C00
--fail: #B42318
```

Dark set — all 5 mode-specific overrides present (canvas/ink dark values also confirmed in file, truncated from this excerpt):
```
--accent: #DE6147
--link: #5F89E0
--pass: #10B981
--skip: #F59E0B
--fail: #EF4444
```

Every value matches the lookbook's computed table exactly. No partial swap — the toggle has a complete second palette to switch to, not a half-set.

**PASS.**

## 4 — Status triad: word + icon + colour

```
✓ pass    (×4 — gate 1, gate 2, gate 3, and the normal-case receipt card)
– skipped (×1 — the disclosed-edge-case receipt card)
```

Every status carries a literal glyph (`✓` / `–`) alongside the word and the colour — the icon leg flagged missing in the prototype is present in the scaffold.

**PASS.**

## 5 — Does it build

**Not run from this sandbox** — this environment has a confirmed, isolated native-binary execution fault (esbuild and Astro's Rust-compiler addon both crash with SIGSEGV/Bus error here specifically, independent of any project code — see prior turn). `npm run dev` already succeeded on Yehor's own machine (`astro v7.2.0 ready in 7250ms`, content synced with no errors), which exercises the same Vite pipeline and content-collection schema as `build` does, but not the full static-generation pass Astro 7's stricter Rust compiler runs at build time.

**UNRUN — needs `npm run build` on Yehor's machine to close this section. Not claiming PASS on partial evidence.**

## Screenshot cross-check (both light and dark, supplied by Yehor)

Independently confirms: distinct type families rendering correctly (mono for pills/labels/chips, sans for headings/body); the toggle swapping canvas, text, CTA, and links together; both Gate-3 cards equal-sized in both modes; dark-mode pills legible; status pills showing word+icon+colour. All 5 of the browser-check items pass by direct visual inspection.

## Overall

4 of 5 sections PASS by direct evidence (grep + screenshots). Section 5 (build) is the one gap — asked for below.
