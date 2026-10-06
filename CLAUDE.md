# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start TinaCMS + Next.js dev server (http://localhost:3000)
npm run build      # Build for production (tinacms build --skip-cloud-checks && next build)
npm run start      # Serve production build
npm run lint       # ESLint
npm run sass       # Watch/compile SCSS (public/assets/scss/main.scss → public/assets/css/main.css)
```

No test suite is configured.

## Architecture

**Next.js 16 App Router** site with **TinaCMS** as the headless CMS. All page content is editable via the Tina admin UI at `/admin` in development.

### Content layers

| Source | Format | Purpose |
|---|---|---|
| `content/global/settings.json` | JSON | Nav links, footer, blog settings |
| `content/global/regions.json` | JSON | Country/region cards shown on homepage |
| `content/pages/*.json` | JSON | Per-page content (homepage, how-it-works, data-resources, terms) |
| `posts/*.md` | Markdown | Blog posts with frontmatter |

The TinaCMS schema in [tina/config.js](tina/config.js) defines every editable field for all collections above. Changes to page content should go through those JSON files, not hardcoded in components.

### App Router pages

Each page in `app/` corresponds to a route. Pages load their content from the matching JSON file in `content/pages/` (not from TinaCMS's GraphQL client at runtime — the JSON files are read directly or imported). Blog posts are parsed from `posts/*.md` via `lib/posts.js`.

### Component structure

- `components/sections/` — Full-width page sections (Hero, Stats, Regions, etc.). Each section receives its content as props from the parent page.
- `components/elements/` — Reusable UI pieces.
- `components/layout/` — Header, Footer, and wrappers.
- `components/content/regions.js` — Renders the regions list from `content/global/regions.json`.

### Styling

Bootstrap-based SCSS theme. The compiled CSS lives at `public/assets/css/main.css`; the source is `public/assets/scss/main.scss`. During development, run `npm run sass` in a separate terminal if you're editing styles. The build does **not** auto-compile SCSS.

### Key constants

[lib/constants.js](lib/constants.js) — external country app URLs (`EXTERNAL_LINKS`), GA tracking ID, site URL. Update country dashboard links here.

### TinaCMS

- Branch-aware: uses `NEXT_PUBLIC_TINA_BRANCH` / Vercel's `NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF` to target the correct content branch.
- Requires `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN` env vars for cloud sync. Local dev works without them (set to empty strings).
- Media uploads land in `public/uploads/`.

### Environment variables

```
NEXT_PUBLIC_SITE_URL          # Full site URL (e.g. https://peskas.show)
NEXT_PUBLIC_TINA_CLIENT_ID    # TinaCMS cloud client ID
TINA_TOKEN                    # TinaCMS cloud token
```

Copy `.env.example` to `.env.local` to get started locally.


