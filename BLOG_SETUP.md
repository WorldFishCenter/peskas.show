# Blog Integration Guide

The blog is now integrated into the Peskas website using the template's built-in components. All blog posts are stored locally in the `posts/` directory.

## Quick Start

### To Copy Existing Posts from GitHub

1. **Copy Markdown Files:**
   - Go to https://github.com/WorldFishCenter/peskas-blog/tree/master/content/posts
   - Copy all `.md` files to the `posts/` directory in this project

2. **Copy Images:**
   - Go to https://github.com/WorldFishCenter/peskas-blog/tree/master/static/img
   - Copy all images to `public/assets/imgs/page/blog/` directory
   - Update image paths in the frontmatter if needed (change paths to `/assets/imgs/page/blog/filename.jpg`)

### To Add a New Post

1. Create a new `.md` file in the `posts/` directory
2. Add frontmatter at the top:

```markdown
---
title: "Your Post Title"
date: "2024-01-15T00:00:00+00:00"
draft: false
description: "A brief description"
tags:
  - tag1
  - tag2
coverImage: "/assets/imgs/page/blog/your-image.jpg"
---

Your content here...
```

3. Add your cover image to `public/assets/imgs/page/blog/`
4. Write your content in Markdown

## File Structure

```
posts/
  ├── README.md (instructions)
  ├── example-post.md (example)
  └── your-posts.md (your actual posts)

public/assets/imgs/page/blog/
  └── your-images.jpg (blog images)
```

## Pages

- `/blog` - Blog listing page (uses template's `card-grid-style-4` component)
- `/blog/[slug]` - Individual blog post page

## Navigation

The blog link in the header and sidebar now points to `/blog` instead of the external site.

## Frontmatter Fields

- `title` (required): Post title
- `date` (required): ISO date string
- `description` (optional): Short description for listings
- `tags` (optional): Array of tags
- `draft` (optional): Set to `true` to hide from listings
- `coverImage` (optional): Path to cover image

## Notes

- Posts are automatically sorted by date (newest first)
- Draft posts (`draft: true`) are hidden from listings
- All template styling is preserved - no custom CSS needed
- Markdown content is rendered with proper styling


