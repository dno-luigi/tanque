# The Letter That Never Arrived

A public, single-page record of a case that has not ended: five years and eight months of
custody, a negative laboratory result that was never disclosed, and an exoneration notice
mailed to a family address instead of the facility holding the person it concerned.

Built with Vite + React. No backend, no database, no tracking. Everything is static and the
whole site is Cloudflare Pages–ready as-is.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static output in dist/
npm run preview  # preview the production build
```

## Edit the content

**Everything you may want to change is in [`src/content/site.js`](src/content/site.js).**
Nothing is hardcoded in the components: the hero copy, the timeline, the four facts, the
Heck gate, the phases, the subpoena table, the immunity panels, the archive cards, the
publishing standard, the dispatch text and the footer disclaimer all come from that file.

Before you publish:

1. Replace `site.contactEmail` — it is currently `record@example.com`.
2. Set `site.repoUrl` if you want the footer to link to the source.
3. Set `site.canonicalUrl` once the site has a permanent address (share buttons otherwise
   use the visitor's current URL, which is correct in almost every case).
4. Read the archive section. Any document you do **not** hold should stay `requested`,
   `demand` or `missing`. Do not upgrade a status until you have the certified copy.
5. Keep the disclaimer in `footer.disclaimer` as long as the site publishes contested facts.

## What to add as documents arrive

- Upload a PDF or scan into `public/records/` and link it from the relevant archive card.
- Add a short `href` field to the document object in `site.js` and render it as a link in
  `src/components/Archive.jsx`.
- Keep the file name neutral (case number, not a person's name) and add a one-line note on
  provenance and date received.

## Design notes

- Deep ink ground, bone type, a single amber light source. Serif display, mono case labels.
- Self-hosted fonts via Fontsource — no external font requests, works offline.
- Motion is `prefers-reduced-motion` aware; every reveal also renders without JavaScript
  animation.
- The site is one page with anchor navigation, so it needs no routing or redirect rules.

## Deploy to Cloudflare Pages

### Option A — connect the GitHub repo (recommended)

1. Push this repository to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo, then set:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. Every push to the default branch redeploys; pull requests get preview URLs.

### Option B — direct upload

```bash
npm run build
npx wrangler pages deploy dist --project-name the-letter
```

## A note on publishing

The site follows its own publishing standard on purpose: records before adjectives,
institutions rather than named individuals, allegations labelled as allegations, and
corrections made in public. Keep that discipline. It is what keeps an accountability
archive from becoming a liability of its own.
