import { defineConfig } from 'astro/config';

// Patchward landing — static output. Deploy target: Cloudflare Pages
// (decided 2026-08-11 — domain already on Cloudflare, and Cloudflare
// now owns the Astro project itself as of the January 2026 acquisition,
// so this is the first-party golden path, not just a cost decision).
export default defineConfig({
  site: 'https://patchward.dev',
  compressHTML: 'jsx', // Astro 7 default — explicit here so it survives a future default change
});
