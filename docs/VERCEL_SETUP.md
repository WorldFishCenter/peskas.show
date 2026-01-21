# Vercel Deployment Setup Guide

This document provides quick reference for the Vercel configuration files and deployment setup.

## Configuration Files

### `vercel.json`
Main Vercel configuration file with:
- Build and install commands
- Security headers (XSS protection, content type options, etc.)
- Cache headers for static assets
- Framework detection (Next.js)

**Note**: For Next.js projects, Vercel auto-detects most settings. This file provides explicit configuration and security headers.

### `.vercelignore`
Files and directories to exclude from Vercel deployments:
- Development files (node_modules, .next, etc.)
- Documentation files
- IDE configurations
- Local environment files

### `next.config.js`
Next.js configuration optimized for Vercel:
- Image optimization settings
- Performance optimizations
- Security headers (poweredByHeader: false)
- Compiler optimizations

### `.env.example`
Template for environment variables. Copy to `.env.local` for local development.

## Quick Deployment Steps

1. **Connect Repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub/GitLab/Bitbucket repository
   - Vercel will auto-detect Next.js

2. **Configure Environment Variables**
   - In Vercel dashboard: Project Settings → Environment Variables
   - Add variables from `.env.example` or your Netlify configuration
   - Set for appropriate environments (Production, Preview, Development)

3. **Deploy**
   - Push to your main branch (auto-deploys)
   - Or manually deploy from Vercel dashboard
   - Monitor build logs in real-time

4. **Add Custom Domain**
   - Project Settings → Domains
   - Add your domain (e.g., peskas.show)
   - Follow DNS configuration instructions
   - SSL certificate auto-provisioned

## Security Headers

The `vercel.json` includes security headers:
- `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-XSS-Protection: 1; mode=block` - XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer information
- `Permissions-Policy` - Restricts browser features

## Caching Strategy

Static assets are cached for optimal performance:
- `/assets/*` - 1 year cache (immutable)
- `/_next/static/*` - 1 year cache (immutable)
- `/_next/image/*` - 1 year cache (immutable)

## Build Configuration

- **Framework**: Next.js (auto-detected)
- **Build Command**: `npm run build`
- **Install Command**: `npm install`
- **Node Version**: 20.x (from package.json engines)
- **Region**: `iad1` (US East - can be changed in vercel.json)

## Troubleshooting

### Build Fails
- Check Node version matches (20.x)
- Verify all dependencies in package.json
- Check build logs in Vercel dashboard

### Environment Variables Not Working
- Ensure variables are set for correct environment
- Variable names are case-sensitive
- Redeploy after adding variables

### Assets Not Loading
- Verify paths use absolute paths starting with `/`
- Check that files are in `public/` directory
- Ensure files aren't in `.vercelignore`

## Additional Resources

- [Vercel Next.js Documentation](https://vercel.com/docs/frameworks/nextjs)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [Vercel Custom Domains](https://vercel.com/docs/domains-and-aliases/domains)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
