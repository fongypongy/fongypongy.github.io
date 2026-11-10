import { defineConfig } from 'astro/config';

// Static site. Deploys as-is to Vercel, Netlify, Cloudflare Pages or GitHub Pages.
export default defineConfig({
  site: 'https://tristanfong.me', // change to your real domain once you have one
  build: { format: 'directory', assets: 'assets' },
});
