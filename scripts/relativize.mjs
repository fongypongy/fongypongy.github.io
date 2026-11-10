// Optional: rewrites root-relative URLs ("/media/…", "/_astro/…", "/work/…") in the built
// HTML/CSS into relative ones, so the site works from any sub-folder or a file preview.
// Not needed on Vercel / Netlify / Cloudflare. Run with: npm run build:relative
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative, dirname, posix } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

for (const file of walk(dist)) {
  if (!/\.(html|css)$/.test(file)) continue;
  const depth = relative(dist, dirname(file)).split(/[\\/]/).filter(Boolean).length;
  const up = depth ? '../'.repeat(depth) : './';
  let s = readFileSync(file, 'utf8');
  const fix = (url) => {
    if (!url.startsWith('/') || url.startsWith('//')) return url;
    const [path, hash = ''] = url.split('#');
    let p = path.slice(1);
    if (p === '' || p.endsWith('/')) p += 'index.html';
    return up + p + (hash ? '#' + hash : '');
  };
  s = s.replace(/(\s(?:href|src|poster|content)=")([^"]*)"/g, (m, a, u) => a + fix(u) + '"');
  s = s.replace(/url\((['"]?)(\/[^)'"]+)\1\)/g, (m, q, u) => `url(${q}${fix(u)}${q})`);
  // CSS files live in /_astro, so their urls are relative to that folder
  writeFileSync(file, s);
}
console.log('relativized', dist);
