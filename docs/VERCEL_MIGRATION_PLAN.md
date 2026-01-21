# Netlify to Vercel Migration Plan

## Overview
This document outlines the step-by-step plan to migrate the Peskas.show Next.js application from Netlify to Vercel deployment.

## Pre-Migration Checklist

### 1. Current State Assessment
- ✅ **Next.js Version**: 16.1.1 (compatible with Vercel)
- ✅ **Framework**: Next.js App Router
- ✅ **Build Script**: `next build` (standard, Vercel-compatible)
- ✅ **No Netlify-specific configs**: No `netlify.toml` or `_redirects` files found
- ✅ **Node Version**: >=20.9.0 (compatible with Vercel)

### 2. Information to Gather from Netlify
Before starting migration, document the following from your Netlify dashboard:

- [ ] **Environment Variables**: List all environment variables from Netlify dashboard
  - Location: Site settings → Environment variables
  - Export or screenshot all variables (including build-time and runtime)
  
- [ ] **Custom Domain Configuration**: 
  - Current domain(s) and subdomains
  - SSL certificate status
  - DNS records (CNAME, A records, etc.)
  
- [ ] **Build Settings**:
  - Build command (should be `npm run build`)
  - Publish directory (should be `.next` for Next.js)
  - Node version (currently >=20.9.0)
  
- [ ] **Redirects/Rewrites**:
  - Any custom redirect rules
  - SPA fallback rules
  - Headers configuration
  
- [ ] **Form Handling** (if any):
  - Netlify Forms configuration
  - Form submission endpoints
  
- [ ] **Functions/Serverless Functions** (if any):
  - Netlify Functions location and configuration
  - API endpoints
  
- [ ] **Deploy Hooks/Webhooks**:
  - Any external services that trigger Netlify builds
  - CI/CD integrations

## Migration Steps

### Phase 1: Vercel Account & Project Setup

#### Step 1.1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with GitHub/GitLab/Bitbucket
3. Ensure you have access to the repository

#### Step 1.2: Install Vercel CLI (Optional but Recommended)
```bash
npm i -g vercel
```

#### Step 1.3: Connect Repository to Vercel
1. In Vercel dashboard, click "Add New Project"
2. Import your GitHub/GitLab/Bitbucket repository
3. Vercel will auto-detect Next.js framework

### Phase 2: Configuration Setup

#### Step 2.1: Create `vercel.json` (if needed)
For most Next.js apps, Vercel auto-detects settings. However, if you need custom configuration:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "nodeVersion": "20.x"
}
```

**Note**: This file is typically NOT needed for standard Next.js apps. Only create if you need custom redirects, headers, or rewrites.

#### Step 2.2: Configure Build Settings in Vercel
1. Go to Project Settings → General
2. Verify:
   - Framework Preset: Next.js
   - Build Command: `npm run build` (or leave default)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (or leave default)
   - Node.js Version: 20.x (matches your `package.json` engines)

#### Step 2.3: Environment Variables Migration
1. In Vercel dashboard: Project Settings → Environment Variables
2. Add each environment variable from Netlify:
   - Copy variable name and value
   - Select environment(s): Production, Preview, Development
   - Add variable
3. **Important**: Verify all variables are added correctly
4. Common variables to check:
   - API keys
   - Database URLs
   - Third-party service credentials
   - Feature flags
   - Analytics IDs (if not hardcoded)

### Phase 3: Domain Configuration

#### Step 3.1: Add Domain in Vercel
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `peskas.show`)
3. Vercel will provide DNS configuration instructions

#### Step 3.2: Update DNS Records
1. Go to your domain registrar (where you manage DNS)
2. Update DNS records as instructed by Vercel:
   - **Option A (Recommended)**: Use Vercel's nameservers
   - **Option B**: Add CNAME record pointing to Vercel
   - **Option C**: Add A records (if using apex domain)
3. Wait for DNS propagation (can take up to 48 hours, usually < 1 hour)

#### Step 3.3: SSL Certificate
- Vercel automatically provisions SSL certificates via Let's Encrypt
- No manual configuration needed
- Certificate will be active once DNS is configured

### Phase 4: Redirects & Rewrites (if needed)

#### Step 4.1: Check for Redirects
If you had custom redirects in Netlify, add them to `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
      // Add more redirects as needed
    ]
  },
  async rewrites() {
    return [
      // Add rewrites if needed
    ]
  },
}

module.exports = nextConfig
```

#### Step 4.2: Headers Configuration (if needed)
If you had custom headers in Netlify, add to `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Custom-Header',
          value: 'custom-value',
        },
      ],
    },
  ]
}
```

### Phase 5: Testing & Verification

#### Step 5.1: Deploy to Vercel
1. Push your code to the connected repository
2. Vercel will automatically trigger a build
3. Monitor the build in Vercel dashboard

#### Step 5.2: Test Preview Deployment
1. Vercel creates preview deployments for each PR/branch
2. Test the preview URL to ensure everything works
3. Verify:
   - Pages load correctly
   - Images and assets load
   - Blog posts render correctly
   - Navigation works
   - Forms (if any) function properly
   - API routes (if any) work

#### Step 5.3: Test Production Deployment
1. Merge to main/master branch or manually deploy
2. Test production URL
3. Verify all functionality:
   - Homepage loads
   - Country tabs work
   - Blog listing and individual posts
   - External links (timor.peskas.org, blog.peskas.org)
   - Video modals
   - Newsletter integration
   - Google Analytics tracking

### Phase 6: Post-Migration Tasks

#### Step 6.1: Update External References
- [ ] Update any hardcoded URLs in code/docs
- [ ] Update CI/CD pipelines (if any)
- [ ] Update webhook URLs in external services
- [ ] Update documentation with new deployment URLs

#### Step 6.2: Monitor & Optimize
1. Monitor Vercel dashboard for:
   - Build times
   - Deployment success rates
   - Performance metrics
2. Set up Vercel Analytics (optional):
   - Project Settings → Analytics
   - Enable Web Analytics

#### Step 6.3: Clean Up Netlify
**⚠️ Only after confirming Vercel deployment is working:**
1. Keep Netlify site active for 1-2 weeks as backup
2. After verification period:
   - Cancel Netlify subscription (if paid)
   - Archive or delete Netlify site
   - Update DNS to remove Netlify records (if not already done)

## Vercel-Specific Features to Consider

### 1. Preview Deployments
- Every PR/branch gets a preview URL
- Great for testing before merging
- Share preview URLs with team

### 2. Edge Functions (Optional)
- If you need serverless functions, consider Vercel Edge Functions
- Better performance than traditional serverless functions
- Located in `app/api/` directory

### 3. Image Optimization
- Next.js Image component works seamlessly with Vercel
- Automatic image optimization
- No additional configuration needed

### 4. Analytics & Monitoring
- Vercel Analytics (optional paid feature)
- Real-time monitoring
- Performance insights

## Rollback Plan

If issues arise during migration:

1. **Immediate Rollback**:
   - Keep Netlify site active during migration
   - If critical issues, point DNS back to Netlify
   - DNS changes can take time, so keep Netlify running

2. **Gradual Migration**:
   - Use Vercel preview deployments first
   - Test thoroughly before switching production DNS
   - Consider using a subdomain for initial testing

3. **Parallel Running**:
   - Run both platforms in parallel initially
   - Use different domains/subdomains
   - Gradually migrate traffic

## Common Issues & Solutions

### Issue 1: Build Failures
- **Solution**: Check Node version matches (20.x)
- Verify all dependencies install correctly
- Check build logs in Vercel dashboard

### Issue 2: Environment Variables Not Working
- **Solution**: Ensure variables are set for correct environment (Production/Preview/Development)
- Verify variable names match exactly (case-sensitive)
- Redeploy after adding variables

### Issue 3: Static Assets Not Loading
- **Solution**: Verify paths in `public/` directory
- Check that asset paths use absolute paths starting with `/`
- Ensure SCSS compilation works (should be handled by Next.js)

### Issue 4: API Routes Not Working
- **Solution**: Verify API routes are in `app/api/` directory
- Check that routes export proper handlers
- Review Vercel function logs

### Issue 5: Slow Build Times
- **Solution**: Enable Vercel Build Cache
- Optimize dependencies
- Consider using Vercel's remote caching

## Timeline Estimate

- **Preparation**: 1-2 hours (gathering info, setting up account)
- **Configuration**: 1-2 hours (env vars, domain setup)
- **Testing**: 2-4 hours (thorough testing of all features)
- **DNS Propagation**: 1-48 hours (usually < 1 hour)
- **Monitoring Period**: 1-2 weeks (before fully decommissioning Netlify)

**Total Estimated Time**: 1-2 days for complete migration

## Success Criteria

Migration is successful when:
- ✅ All pages load correctly on Vercel
- ✅ All functionality works (blog, navigation, forms, etc.)
- ✅ Custom domain is active and SSL is working
- ✅ Environment variables are properly configured
- ✅ Builds complete successfully
- ✅ Performance is equal or better than Netlify
- ✅ No broken links or missing assets
- ✅ Google Analytics tracking works
- ✅ All external integrations function correctly

## Next Steps

1. Review this plan
2. Gather information from Netlify dashboard
3. Create Vercel account and connect repository
4. Follow migration steps in order
5. Test thoroughly before switching DNS
6. Monitor for 1-2 weeks before decommissioning Netlify

## Resources

- [Vercel Next.js Documentation](https://vercel.com/docs/frameworks/nextjs)
- [Vercel Deployment Guide](https://vercel.com/docs/deployments/overview)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [Vercel Custom Domains](https://vercel.com/docs/domains-and-aliases/domains)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
