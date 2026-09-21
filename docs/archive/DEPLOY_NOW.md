# 🚀 Deploy Now - Step-by-Step Guide

## Prerequisites Checklist
- ✅ Repository: `futurefabrik1-collab/future-form-studio` (pushed to GitHub)
- ✅ Gmail App Password ready (same as design-discovery-hub)
- ✅ Vercel account (if you don't have one, sign up at vercel.com)

---

## Step 1: Import Project to Vercel

### 1.1 Go to Vercel Dashboard
🔗 https://vercel.com/new

### 1.2 Import Git Repository
1. Click **"Add New..."** → **"Project"**
2. Select **"Import Git Repository"**
3. If prompted, connect your GitHub account
4. Find and select: **`futurefabrik1-collab/future-form-studio`**
5. Click **"Import"**

### 1.3 Configure Project Settings
Vercel should auto-detect these settings from `vercel.json`:

| Setting | Value |
|---------|-------|
| **Framework Preset** | Vite |
| **Root Directory** | ./ |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

✅ If auto-detected, click **"Deploy"** - BUT WAIT! Add environment variables first!

---

## Step 2: Add Environment Variables (CRITICAL!)

### 2.1 Before Clicking Deploy
1. Expand **"Environment Variables"** section
2. Add the following variables:

### Variable 1: GMAIL_USER
- **Name**: `GMAIL_USER`
- **Value**: `futurefabrik1@gmail.com`
- **Environments**: Check all boxes (Production, Preview, Development)

### Variable 2: GMAIL_APP_PASSWORD
- **Name**: `GMAIL_APP_PASSWORD`
- **Value**: [Your 16-character Gmail app password - same as design-discovery-hub]
- **Environments**: Check all boxes (Production, Preview, Development)

### 2.2 Where to Find Gmail App Password
If you don't have it handy:
1. Check your password manager
2. Or check Vercel settings for `design-discovery-hub` project
3. Or generate a new one: https://myaccount.google.com/apppasswords

---

## Step 3: Deploy!

1. After adding environment variables, click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. You'll see a success screen with your live URL

### Expected Result:
- Build: ✅ Success
- Functions: ✅ `/api/contact` deployed
- Live URL: `https://future-form-studio.vercel.app` (or similar)

---

## Step 4: Test the Deployment

### 4.1 Visit Your Site
Click the generated URL (e.g., `https://future-form-studio-xxx.vercel.app`)

### 4.2 Check These Elements:
- ✅ 3DARK logo appears in browser tab (favicon)
- ✅ 3DARK logo displays in hero section
- ✅ Random entrance animations work
- ✅ Scroll ripple effect triggers when scrolling
- ✅ All sections load correctly

### 4.3 Test Contact Form
1. Scroll to contact section
2. Fill out form with test data
3. Submit
4. Check for:
   - ✅ Success toast notification
   - ✅ Email arrives at `futurefabrik1@gmail.com`

---

## Step 5: Add Custom Domain (3dark.de)

### 5.1 In Vercel Project Settings
1. Go to **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter: `3dark.de`
4. Click **"Add"**
5. Also add: `www.3dark.de`

### 5.2 Vercel Will Show DNS Records
You'll see something like:

**For 3dark.de:**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For www.3dark.de:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

### 5.3 Configure DNS in Strato
Follow detailed instructions in: `STRATO_DOMAIN_SETUP.md`

**Quick Steps:**
1. Login to Strato: https://www.strato.de/apps/CustomerLogin
2. Go to Domains → 3dark.de → DNS Settings
3. Delete old A record (217.160.0.244)
4. Add new records from Vercel
5. Save changes

### 5.4 Wait for DNS Propagation
- Usually: 5 minutes - 2 hours
- Check status: https://dnschecker.org (search for 3dark.de)

### 5.5 SSL Certificate
- Automatically issued by Vercel after DNS propagates
- Wait 5-10 minutes after DNS is verified

---

## Step 6: Verify Everything

### Final Checklist:
- [ ] Site deployed to Vercel
- [ ] Environment variables configured
- [ ] Contact form tested and working
- [ ] Email delivery confirmed
- [ ] Domain 3dark.de added in Vercel
- [ ] DNS updated in Strato
- [ ] DNS propagation complete (check dnschecker.org)
- [ ] SSL certificate issued (green padlock)
- [ ] Site accessible at https://3dark.de
- [ ] www.3dark.de redirects to 3dark.de

---

## 🆘 Troubleshooting

### Build Failed
- Check build logs in Vercel
- Ensure all dependencies are in `package.json`
- Try: `npm install && npm run build` locally first

### Contact Form Not Working
1. Check Functions tab in Vercel deployment
2. Verify environment variables are set correctly
3. Check `/api/contact` logs for errors
4. Ensure GMAIL_APP_PASSWORD has no spaces

### Domain Not Verifying
1. Wait 1-2 hours for DNS propagation
2. Use `dig 3dark.de` to check DNS
3. Ensure no conflicting records in Strato
4. Clear browser cache

### SSL Certificate Not Issuing
1. Wait 24 hours after DNS propagation
2. Check for CAA records blocking Let's Encrypt
3. Contact Vercel support if still failing

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **DNS Checker**: https://dnschecker.org
- **Dig Tool**: `dig 3dark.de` or `dig www.3dark.de`

---

## 🎉 Success!

Once complete, your site will be live at:
- ✅ https://3dark.de
- ✅ https://www.3dark.de (redirects)

**Features Live:**
- 3DARK branding and logo
- Contact form with email backend
- Random entrance animations
- Scroll ripple wave effect
- Responsive design
- SSL encryption

---

**Current Repository**: https://github.com/futurefabrik1-collab/future-form-studio
**Deployment Date**: February 9, 2026
