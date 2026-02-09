# Strato Domain Setup - 3dark.de → Vercel

## 🌐 Linking 3dark.de to Vercel

### Step 1: Add Domain in Vercel

1. Go to your Vercel project: **future-form-studio**
2. Navigate to **Settings** → **Domains**
3. Click **"Add Domain"**
4. Enter: `3dark.de`
5. Click **"Add"**
6. Also add: `www.3dark.de` (recommended for www redirect)

Vercel will show you the DNS records you need to configure.

---

### Step 2: Get DNS Records from Vercel

After adding the domain, Vercel will provide DNS configuration. You'll see something like:

**For apex domain (3dark.de):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21` (Vercel's IP)

**OR (recommended):**
- Type: `CNAME`
- Name: `@` or leave empty
- Value: `cname.vercel-dns.com`

**For www subdomain (www.3dark.de):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

---

### Step 3: Configure DNS in Strato

#### Login to Strato:
1. Go to https://www.strato.de/apps/CustomerLogin
2. Login with your credentials
3. Navigate to **"Domains"** → Select `3dark.de`

#### Configure DNS Records:

**Option A: Using CNAME (Recommended)**

1. In Strato DNS settings for `3dark.de`:
2. Remove any existing A records or redirects
3. Add these records:

| Type | Host/Name | Value/Target | TTL |
|------|-----------|--------------|-----|
| CNAME | @ or (leave empty) | `cname.vercel-dns.com` | 3600 |
| CNAME | www | `cname.vercel-dns.com` | 3600 |

**Option B: Using A Record**

If Strato doesn't allow CNAME for apex domain:

| Type | Host/Name | Value/Target | TTL |
|------|-----------|--------------|-----|
| A | @ or (leave empty) | `76.76.21.21` | 3600 |
| CNAME | www | `cname.vercel-dns.com` | 3600 |

---

### Step 4: Strato-Specific Instructions

#### Navigate to DNS Settings:
1. **Strato Dashboard** → **Package & Domains**
2. Click on **"3dark.de"**
3. Look for **"DNS Settings"** or **"Domain Verwaltung"**
4. Click **"Manage DNS"** or **"DNS-Einstellungen verwalten"**

#### Remove Old Settings:
- Delete any existing A records pointing to old IPs
- Remove any HTTP redirects
- Clear any subdomain forwards

#### Add New Records:
1. Click **"Add Record"** or **"Eintrag hinzufügen"**
2. Select record type: **CNAME** or **A**
3. Enter the values from Step 3
4. Save changes

---

### Step 5: Verify DNS Configuration

#### Check DNS Propagation:
Use these tools to verify DNS is configured correctly:

1. **DNS Checker**: https://dnschecker.org
   - Enter: `3dark.de`
   - Should show Vercel's CNAME or A record

2. **Command Line**:
   ```bash
   # Check A record
   dig 3dark.de
   
   # Check CNAME
   dig www.3dark.de
   
   # Or use nslookup
   nslookup 3dark.de
   nslookup www.3dark.de
   ```

---

### Step 6: SSL Certificate

Vercel automatically provisions SSL certificates:

1. After DNS propagation (can take 24-48 hours, usually faster)
2. Vercel will automatically issue a Let's Encrypt SSL certificate
3. Your site will be accessible via `https://3dark.de`

---

## ⏱️ Timeline

- **DNS Propagation**: 5 minutes - 48 hours (usually within 1-2 hours)
- **SSL Certificate**: Automatic after DNS propagates (5-10 minutes)

---

## 🔍 Troubleshooting

### Domain not verifying in Vercel

1. Wait 1-2 hours for DNS propagation
2. Check DNS records are correct using `dig` or dnschecker.org
3. Ensure no conflicting A or CNAME records exist in Strato
4. Clear browser cache and try again

### SSL Certificate not issuing

1. DNS must be fully propagated first
2. Remove any existing CAA records in Strato that might block Let's Encrypt
3. Wait up to 24 hours for automatic SSL provisioning

### "Domain already in use" error

1. Make sure the domain isn't already added to another Vercel project
2. Check if domain is still pointing to old hosting

### Strato won't save CNAME for apex domain

Some providers don't allow CNAME for root/apex domains:
- Use A record instead: `76.76.21.21`
- Or use Strato's "ALIAS" record if available

---

## 📋 Quick Checklist

- [ ] Deploy project to Vercel first
- [ ] Add `3dark.de` domain in Vercel
- [ ] Add `www.3dark.de` domain in Vercel
- [ ] Note down DNS records from Vercel
- [ ] Login to Strato
- [ ] Navigate to DNS settings for 3dark.de
- [ ] Remove old DNS records
- [ ] Add new CNAME/A records
- [ ] Save DNS changes
- [ ] Wait for DNS propagation (check with dnschecker.org)
- [ ] Verify SSL certificate issued
- [ ] Test website at https://3dark.de
- [ ] Test www redirect at https://www.3dark.de

---

## 🎯 Expected Result

✅ `https://3dark.de` → Your Vercel-deployed Future Form Studio
✅ `https://www.3dark.de` → Redirects to https://3dark.de
✅ SSL certificate active (green padlock in browser)
✅ Contact form working

---

## 📞 Support Links

- **Strato DNS Help**: https://www.strato.de/faq/domains/
- **Vercel Custom Domains**: https://vercel.com/docs/concepts/projects/domains
- **DNS Checker**: https://dnschecker.org
- **Vercel Support**: https://vercel.com/support

---

**Current Domain**: 3dark.de (Strato)
**Target**: Vercel deployment of future-form-studio
**Repository**: https://github.com/futurefabrik1-collab/future-form-studio
