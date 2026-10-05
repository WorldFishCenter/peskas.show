# Peskas.show

Official website for Peskas™ - An open-source digital platform for small-scale fisheries.

## Tech Stack

- **Framework**: [Next.js 16.1.1](https://nextjs.org/) with App Router
- **React**: 19.0.0
- **Styling**: SCSS/CSS with Bootstrap-based theme
- **Content**: Markdown-based blog system
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js >= 20.9.0 (see `.nvmrc`)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration if needed.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
peskas.show/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog listing and individual posts
│   ├── data-resources/    # Data resources page
│   ├── how-it-works/      # How it works page
│   ├── layout.js          # Root layout
│   ├── page.js            # Homepage
│   ├── sitemap.js         # Dynamic sitemap generation
│   └── robots.js          # Robots.txt generation
├── components/            # React components
│   ├── elements/          # Reusable UI elements
│   ├── layout/            # Layout components (Header, Footer, etc.)
│   └── sections/          # Page sections
├── lib/                   # Utility functions
│   ├── posts.js           # Blog post utilities
│   └── constants.js       # Application constants
├── posts/                 # Markdown blog posts
├── public/                # Static assets
└── styles/                # Global styles
```

## Adding Blog Posts

1. Create a new `.md` file in the `posts/` directory
2. Add frontmatter with required fields:
   ```yaml
   ---
   title: "Your Post Title"
   author: "Author Name"
   date: "2024-01-01"
   draft: false
   description: "Post description"
   tags:
     - tag1
     - tag2
   coverImage: "/assets/imgs/page/blog/image.jpg"
   ---
   ```
3. Write your content below the frontmatter
4. Posts with `draft: true` will not appear in production

See `docs/BLOG_SETUP.md` for more details.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run sass` - Watch and compile SCSS (if needed)

## Deployment

This project is configured for deployment on Vercel. See `docs/VERCEL_SETUP.md` for deployment details.

### Environment Variables

Configure the following in your deployment platform:

- `NODE_ENV` - Set to `production` for production builds
- `NEXT_PUBLIC_SITE_URL` - Full URL of your site (e.g., `https://peskas.show`)

See `.env.example` for all available environment variables.

## Features

- ✅ Modern Next.js App Router architecture
- ✅ Server-side rendering (SSR) and static site generation (SSG)
- ✅ Markdown-based blog system
- ✅ SEO optimized (sitemap, robots.txt, metadata)
- ✅ Error boundaries for graceful error handling
- ✅ Responsive design
- ✅ Performance optimized

## Development

### Code Style

- ESLint is configured with Next.js recommended rules
- Prettier is configured for consistent code formatting
- Use 4-space indentation (as per Prettier config)

### Key Features

- **Error Boundaries**: Graceful error handling in production
- **Constants**: Centralized configuration in `lib/constants.js`
- **Type Safety**: JSDoc comments for better IDE support (TypeScript migration optional)

**AI-assisted work:** see [`CLAUDE.md`](CLAUDE.md).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Next.js App Router](https://nextjs.org/docs/app)

## License

See LICENSE file for details.
