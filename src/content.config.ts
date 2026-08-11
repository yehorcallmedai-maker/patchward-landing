import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

// Astro 7 content layer. Verified 2026-08-11 against the official v7
// migration guide (docs.astro.build/en/guides/upgrade-to/v7/) that
// nothing here changed between Astro 6 and 7 — v7's breaking changes
// are Vite 8, the Rust compiler's stricter HTML parsing, and the
// Saetteri Markdown pipeline; the content.config.ts + astro/zod +
// Content Layer loader model is unchanged.
const facts = defineCollection({
  loader: file('src/data/facts.yaml'),
  schema: z.object({
    value: z.string(),
    verified: z.coerce.date(),
    source: z.string(),
  }),
});

export const collections = { facts };
