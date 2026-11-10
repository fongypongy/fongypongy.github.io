# Tristan Fong · portfolio

Astro static site. Warm neo-brutalism, sticky work files, a camcorder that follows your cursor.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## Swap a photo

Every photo, video, link and line of text lives in **`src/data/site.ts`**.

1. Drop the new image into `public/media/<folder>/` (JPG, ideally under 1800px wide).
2. In `src/data/site.ts`, change the `src: '/media/...'` path, and update its `alt` text.

Overwriting a file with the same name works too; then you don't need to touch the code.

Where things are:

| What | In `site.ts` |
|---|---|
| Lead story, sidebar boxes | `lead`, `editorBox`, `frontStat`, `nowScreening` |
| Headshot in the red circle | `person.portrait` |
| The three main stories, "In brief" | `stories`, `briefs` |
| About me: portrait, essay, fact file | `about` |
| "In pictures" photo strip | `gallery` (empty `src` shows a "photo to come" frame) |
| Education timeline | `timeline` (clips by track, markers by date) |
| Screenings (YouTube links + hover stills) | `screenings` (empty `href` shows "soon") |
| Clippings / appointments / classified ad | `press`, `experience`, `classified` |
| Case study pages | `cases` (blocks: text, image, pair, stats, list, callout, video, demo) |

## Still to fill in

- `person.resume`: add a résumé PDF to `public/` (one **without** your phone number) and set the path; the button appears automatically.
- `tapes`: HR Recognition Day YouTube link.
- `cases` → `dp-architects`: ABBA Arena images and your role.
- `cases` → `1d-car`: the brief, your role and the result.
- `cases` → `daidalus` → TEAM: confirm credits.
- `public/media/me/portrait-placeholder.jpg`: replace with a proper portrait.
- `astro.config.mjs` → `site`: your real domain.

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages (`.github/workflows/deploy.yml`).
One-time setup: repo **Settings → Pages → Source: GitHub Actions**.

It also works on Vercel, Netlify or Cloudflare Pages: build command `npm run build`, output folder `dist`.

`npm run build:relative` makes every link relative, for hosting in a sub-folder.
