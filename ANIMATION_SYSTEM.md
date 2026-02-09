# Animation System Documentation

## Overview

This project uses a custom animation utility that provides gentle, randomized entrance animations for images, cards, iframes, and media blocks. Each element eases into position from a randomly different direction with smooth easing.

## Features

- ✅ **Random Directional Animations**: Elements enter from 8 possible directions (top, bottom, left, right, and diagonals)
- ✅ **Gentle Movement**: Only 5% movement for subtle, professional effect
- ✅ **Smooth Easing**: `easeInOut` for natural acceleration and deceleration
- ✅ **Easily Reversible**: Single toggle to enable/disable all random animations
- ✅ **Staggered Delays**: Support for custom delays to create sequential animations

## How to Use

### Import the Utility

```tsx
import { getRandomInViewAnimation, getRandomEntranceAnimation } from "@/utils/animations";
```

### For Elements with InView Detection

Use `getRandomInViewAnimation` when you want animations to trigger when elements enter viewport:

```tsx
<motion.div {...getRandomInViewAnimation(isInView, 0.2)}>
  {/* Your content */}
</motion.div>
```

**Parameters:**
- `isInView` (boolean): Whether the element is in viewport
- `delay` (number): Optional delay in seconds (default: 0)

### For Immediate Entrance Animations

Use `getRandomEntranceAnimation` for elements that animate on page load:

```tsx
<motion.div {...getRandomEntranceAnimation(0.6)}>
  {/* Your content */}
</motion.div>
```

**Parameters:**
- `delay` (number): Optional delay in seconds (default: 0)

## Examples from the Project

### Media Placeholders

```tsx
// AboutSection.tsx
<motion.div 
  {...getRandomInViewAnimation(isInView, 0.3)}
  className="media-placeholder aspect-video"
>
  {/* Media content */}
</motion.div>
```

### Cards with Staggered Animation

```tsx
// AboutSection.tsx - Benefit cards
{benefits.map((b, i) => (
  <motion.div
    key={b.title}
    {...getRandomInViewAnimation(isInView, 0.5 + 0.1 * i)}
    className="p-6 border"
  >
    {/* Card content */}
  </motion.div>
))}
```

### Project Media Items

```tsx
// ProjectsSection.tsx
<motion.div 
  {...getRandomInViewAnimation(isInView, 0.1 * Math.min(i, 6) + 0.2)}
  className="aspect-video media-placeholder"
>
  {/* Project media */}
</motion.div>
```

## Toggling Animations On/Off

### To Disable Random Animations

Open `src/utils/animations.ts` and change:

```typescript
export const ENABLE_RANDOM_ANIMATIONS = false;
```

When disabled, all animations fall back to simple fade-in effects (no directional movement).

### To Re-enable Random Animations

```typescript
export const ENABLE_RANDOM_ANIMATIONS = true;
```

## Animation Specifications

| Property | Value | Description |
|----------|-------|-------------|
| **Movement** | 5% | Percentage of element size |
| **Duration** | 0.8s | Animation duration |
| **Easing** | easeInOut | Smooth acceleration and deceleration |
| **Directions** | 8 total | top, bottom, left, right, top-left, top-right, bottom-left, bottom-right |
| **Opacity** | 0 → 1 | Fade in effect |

## Components Using Random Animations

- ✅ **HeroSection**: Main hero media placeholder
- ✅ **AboutSection**: Showreel placeholder + benefit cards (6 cards)
- ✅ **ProcessSection**: Full-width video placeholder
- ✅ **ProjectsSection**: Project media placeholders (multiple)
- ✅ **ContactSection**: Contact form card

## Reversibility

The animation system is **100% reversible**:

1. **Quick Toggle**: Change one boolean constant to disable/enable
2. **Fallback Behavior**: Automatically falls back to simple fade when disabled
3. **No Code Changes**: No need to modify component code
4. **Centralized Control**: All animation logic in one file

## File Structure

```
src/
  utils/
    animations.ts          # Animation utility functions
  components/
    HeroSection.tsx        # Uses getRandomEntranceAnimation
    AboutSection.tsx       # Uses getRandomInViewAnimation
    ProcessSection.tsx     # Uses getRandomInViewAnimation
    ProjectsSection.tsx    # Uses getRandomInViewAnimation
    ContactSection.tsx     # Uses getRandomInViewAnimation
```

## Technical Notes

- Uses **Framer Motion** for animations
- Directions are randomly selected on component mount
- Each element gets a different random direction
- Percentage-based movement ensures responsive behavior
- Works with all viewport sizes

## Performance

- Lightweight utility (< 100 lines of code)
- No external dependencies beyond Framer Motion
- Optimized for performance with `once: true` on InView detection
- Minimal re-renders

---

**To customize animations further**, edit the constants and functions in `src/utils/animations.ts`.
