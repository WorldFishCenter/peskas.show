# peskas.show (Peskas website)

The public Peskas website at peskas.org: what Peskas is, the blog of stories, and links to every Peskas portal. A Next.js App Router site with TinaCMS for editing content, deployed on Vercel. It reads no Peskas data at runtime: every figure on it is written into its content files.
Ecosystem context (other repos, data flow, cross-repo contracts): loaded by the `peskas` Claude Code plugin (repo `peskas-context`).

## Commands

- `npm install`, then `npm run dev`: TinaCMS wraps `next dev`, with the site on port 3000 and the editor at `/admin`. `npm run build` runs `tinacms build --skip-cloud-checks`, then `next build`.
- There are no tests. `npm run lint` fails: Next.js 16 removed `next lint`.
- `package-lock.json` is gitignored, so installs are not pinned.

## Architecture

- Pages are in `app/`: home, `blog` and `blog/[slug]`, `how-it-works`, `data-resources`, `page-terms`. Their text lives in `content/pages/*.json`, site settings and the country cards in `content/global/`. TinaCMS edits these files and `posts/`; `tina/config.js` holds its schema.
- The country cards and their portal links are `content/global/regions.json`, read by `app/page.js`. `data/regions.js` is an older copy that nothing imports.
- The app imports compiled CSS from `public/assets/css/` (`style.css`, `modal.css`, `swiper-custom.css`). `style.css` is built from `public/assets/scss/style.scss`.
- Env vars: `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN` (`.env.example`). `tinacms build` reads `.env`, not `.env.local`.
- `docs/` is gitignored and exists only on machines with a local copy. Its notes, `docs/CLAUDE.md` included, predate the App Router.

## Stories

One Markdown file per story in `posts/`. `lib/posts.js` reads the front matter; `components/sections/BlogPostClient.js` renders the body (react-markdown with raw HTML) after rewriting Hugo-style shortcodes. Start a new story from a recent one, such as `posts/peskas-api.md`.

- The site reads `title`, `date`, `author`, `description`, `tags`, `draft` and `cover` (Tina writes `coverImage`; both work). `ShowToc`, `TocOpen` and `mermaid` are Hugo leftovers the site ignores; existing posts keep them.
- Images go in `public/assets/imgs/page/blog/` and are written as `/img/<file>`, in `cover` and in the body alike; the site rewrites the path.
- In the body, an image is `![alt text](/img/<file>)` or `{{< figure src="/img/<file>" >}}`. The shortcode takes `src` only: any other attribute breaks the rewrite and the shortcode prints as text. A caption follows the image as `{{< rawhtml >}}<figcaption>…</figcaption>{{< /rawhtml >}}`.
- A diagram is `{{<mermaid>}} … {{</mermaid>}}`, opening with the same `%%{init: …}%%` line as the other posts.
- Write like the existing stories: plain, factual and measured, the reader a fisheries partner, funder or practitioner. Check each claim against the code or live data of the repo it describes, and use the public names from the Peskas ecosystem context.

## Gotchas

- `draft: true` only hides a post from the blog list: its page is still built and reachable at `/blog/<slug>`. Keep unfinished stories off the deployed branch.
- TinaCMS commits edits made in `/admin` straight to its branch (`NEXT_PUBLIC_TINA_BRANCH`, else the Vercel branch, else `main`). Pull before editing the same files locally.
- `npm run sass` watches `main.scss`, which does not exist. When you change `style.scss`, update `style.css` in the same change: the CSS is what ships.
- When a Peskas portal changes address, update its links in `content/global/regions.json`, `content/global/settings.json`, `content/pages/how-it-works.json`, the menus hard-coded in `components/layout/Header.js` and `Sidebar.js`, and the stories in `posts/`. Its screenshot on the home page is `public/assets/imgs/page/homepage1/<country>-dash.png`.
- `/public/admin` and `/tina/__generated__` are TinaCMS build output and stay out of git.
