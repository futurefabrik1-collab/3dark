# Deployment Guide - Future Form Studio

## 🚀 Deploy to Vercel

### Step 1: Import Project to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import the GitHub repository: `futurefabrik1-collab/future-form-studio`
4. Vercel will auto-detect it as a Vite project

### Step 2: Configure Project Settings

**Framework Preset:** Vite
**Build Command:** `npm run build`
**Output Directory:** `dist`
**Install Command:** `npm install`

These settings are already in `vercel.json`, so Vercel should auto-configure them.

### Step 3: Add Environment Variables

⚠️ **CRITICAL** - Add these environment variables in Vercel:

1. In your Vercel project, go to **Settings** → **Environment Variables**
2. Add the following variables:

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `GMAIL_USER` | `futurefabrik1@gmail.com` | Production, Preview, Development |
| `GMAIL_APP_PASSWORD` | [16-character app password] | Production, Preview, Development |

**To get the Gmail App Password:**
- If you already have one from `design-discovery-hub`, use the same one
- If not, follow the instructions in `ENV_VARIABLES_REQUIRED.md`

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 2-3 minutes)
3. Once deployed, you'll get a URL like: `https://future-form-studio.vercel.app`

### Step 5: Test the Contact Form

1. Visit your deployed website
2. Scroll to the contact section
3. Fill out the form with test data
4. Submit and verify:
   - ✅ Success toast appears
   - ✅ Email arrives at `futurefabrik1@gmail.com`

### Step 6: Custom Domain (Optional)

If you want to use a custom domain:

1. Go to **Settings** → **Domains**
2. Add your domain
3. Configure DNS records as instructed by Vercel

---

## 📋 Checklist

- [ ] Repository pushed to GitHub
- [ ] Project imported to Vercel
- [ ] Environment variables configured
- [ ] Initial deployment successful
- [ ] Contact form tested and working
- [ ] Email delivery confirmed
- [ ] Custom domain configured (if applicable)

---

## 🔧 Troubleshooting

### Contact form not sending emails

1. Check Vercel logs: **Deployments** → Click on deployment → **Functions** tab
2. Verify environment variables are set correctly
3. Check that `GMAIL_APP_PASSWORD` is a valid 16-character app password (no spaces)
4. Ensure Gmail account has 2FA enabled and app passwords generated

### Build failing

1. Check the build logs in Vercel
2. Verify `package.json` dependencies are correct
3. Try running `npm install && npm run build` locally first

### API route not found

1. Ensure `vercel.json` is in the root directory
2. Check that `api/contact.js` exists
3. Verify rewrites configuration in `vercel.json`

---

## 📚 Related Documentation

- [ENV_VARIABLES_REQUIRED.md](./ENV_VARIABLES_REQUIRED.md) - Environment variables setup
- [Vercel Documentation](https://vercel.com/docs)
- [Contact Form Setup](./README.md)

---

**Repository:** https://github.com/futurefabrik1-collab/future-form-studio
