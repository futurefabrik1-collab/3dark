# 3DARK Website - Latest Updates
**Date**: March 2, 2026
**Session**: Major Visual Redesign with Photorealistic Images

---

## 🎨 Summary of Changes

### 1. **New Showreel Section**
- Created dedicated `ShowreelSection.tsx` component
- Positioned near top of page (right after Hero section)
- Features art-installation.png background
- Full-width 21:9 video placeholder with play button
- Industrial grid overlay and neon borders

### 2. **Combined About & Work Section**
- Merged `HowWeWorkSection` and `AboutSection` into single `AboutWorkSection.tsx`
- Simplified to 2 concise paragraphs under "Was Wir Tun"
- Maintains "Wer Wir Sind" and "Warum Gaussian Splatting?" subsections
- Background: urban-tunnel.png at 10% opacity

### 3. **Photorealistic Service Images**
All 4 service cards now use photorealistic location photography:
- **Digitale Schatten Realer Orte**: Abandoned Berlin U-Bahn tunnel
- **Begehbare Erinnerungen**: Interior Berlin nightclub (daylight)
- **Film-Ready Dystopie**: Derelict warehouse with natural light
- **Archive des Vergessens**: East Berlin factory hall with decay

Images located in: `/public/images/service-*.png`

### 4. **Background Image Updates**
Increased opacity from 5% to **10%** across all sections:
- **WhoItsForSection**: warehouse-ruins.png
- **AboutWorkSection**: urban-tunnel.png + pattern-grid.png
- **ProcessSection**: virtual-production.png
- **ShowreelSection**: art-installation.png

### 5. **Image Swaps**
- **Hero Section**: Now uses `berlin-street.png` (was tech-viz.png)
- **Wer Wir Sind Section**: Now uses `art-installation.png` (was berlin-street.png)

---

## 📁 New Files Created
- `src/components/ShowreelSection.tsx`
- `src/components/AboutWorkSection.tsx`
- `public/images/service-urban-tunnel.png`
- `public/images/service-club-scan.png`
- `public/images/service-virtual-production.png`
- `public/images/service-warehouse-ruins.png`

## 📝 Modified Files
- `src/pages/Index.tsx` - Updated page structure
- `src/components/HeroSection.tsx` - Swapped image
- `src/components/ServicesSection.tsx` - Updated image paths
- `src/components/WhoItsForSection.tsx` - Added background
- `src/components/ProcessSection.tsx` - Added background, removed showreel
- `src/components/HowWeWorkSection.tsx` - Added background

---

## 🚀 Deployment Status
- ✅ **Git**: Committed and pushed to `origin/main`
- ✅ **Vercel Production**: https://www.3dark.de
- ✅ **Local Backup**: `/Users/markburnett/DevPro/3dark-backup-20260302-135322.tar.gz` (61MB)

---

## 🌐 Page Structure (Updated)
1. Hero Section
2. **Showreel Section** ⭐ NEW
3. Who It's For Section
4. **About & Work Section** ⭐ COMBINED
5. Services Section (with new photorealistic images)
6. Industries Section
7. Projects Section
8. Process Section
9. Contact Section

---

## 🎯 Design Philosophy
- **Photorealistic imagery**: Documentary-style location photography
- **Natural lighting**: No signature neon in photos (only UI elements)
- **Berlin underground aesthetic**: Authentic urban decay and nightlife
- **10% background opacity**: More visible atmospheric depth
- **Maintained**: Neon pink UI accents, industrial grid overlays, scanlines

---

## 📊 Build Stats
- CSS: 68.40 kB (gzipped: 11.84 kB)
- JS: 562.47 kB (gzipped: 175.26 kB)
- Note: Bundle size optimization recommended for future iteration

---

## 🔄 Git Commit
```
feat: major visual update with photorealistic images and section restructuring
Commit: 4c30cde
```

---

**Next Steps Suggested**:
- Bundle size optimization (currently 562KB, warning at 500KB)
- Consider lazy loading images
- Add more interactive elements to showreel section
- A/B test background opacity levels
