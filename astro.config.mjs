import { defineConfig } from 'astro/config';

// Static site. Deploys as-is to Vercel, Netlify, Cloudflare Pages or GitHub Pages.
export default defineConfig({
  site: 'https://fongypongy.github.io', // change to your own domain if you buy one
  build: { format: 'directory', assets: 'assets' },
});
