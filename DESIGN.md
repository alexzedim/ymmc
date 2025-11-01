# YMMC Landing Page Design Documentation

This document describes the current design implementation of the YMMC landing page for easy restoration after experiments.

## Current Design Version
**Version:** 1.0 - Vibe Animation Background  
**Last Updated:** 2025-01-11  
**Commit Hash:** a2bee05

## Core Features

### 1. **Vibe Animation Background**
- **File:** `app/components/VibeBackground.tsx`
- **Worker Script:** `public/vibeAnimation.js`
- **Description:** Full-screen WebGL-based animated background with colorful, dynamic blobs
- **Settings:**
  - FPS: 60
  - Collection Hue: 280 (purple/pink spectrum)
  - Energy: 0.5 (medium animation intensity)
  - Mobile Size: 430px
  - Desktop Size: 650px
  - Mobile Scale: 0.4
  - Desktop Scale: 0.35

### 2. **Theme Switcher**
- **Location:** Bottom-right corner (fixed position)
- **Icon:** 🌞 (light mode) / 🌙 (dark mode)
- **Style:** Floating button with glass morphism (`bg-white/10 backdrop-blur-md`)
- **Functionality:** Toggles animation background between black and white

## Layout Structure

### **Header (Fixed)**
```
- Position: Fixed top, z-index 50
- Style: Glassmorphism (bg-white/10 dark:bg-black/10 backdrop-blur-md)
- Border: Subtle white/20 border-bottom
- Left: YMMC logo + v5.x chip
- Right: GitHub and Discord buttons
```

### **Hero Section**
```
- Title: Gradient text (purple → pink → blue)
  Font: 6xl, bold
  Text: "Yandex Music Mod Client"

- Subtitle: Medium weight, gray-800/gray-200
  Font: xl
  Text: "Enhance your Yandex Music experience..."

- CTA Buttons:
  1. Primary: "📥 Download Latest Build" 
     - Gradient purple to pink background
     - Links to YandexMusicModPatcher repo
  
  2. Secondary: "💝 Support Developer"
     - Warning color, flat variant
     - Links to Boosty donation page

- Warning Text: Small, gray-500/400
  "⚠️ This modification does NOT provide free access..."
```

### **Stats Section**
```
3 Cards in grid (1 col mobile, 3 cols desktop):
1. "514+ GitHub Stars" - Purple accent
2. "10K+ Downloads" - Pink accent
3. "15+ Features" - Blue accent

Style: Glass cards (bg-white/80 dark:bg-black/80 backdrop-blur-md)
```

### **Features Section**
```
Title: "✨ Features"
Grid: 1 col mobile, 2 cols tablet, 3 cols desktop

Features List (6 items):
1. 🎮 Discord Rich Presence
2. 🎛️ Remote Control
3. 📊 Last.FM Scrobbling
4. ⌨️ Global Hotkeys
5. 📂 Custom Cache
6. 💾 Download Tracks

Card Style:
- Glass morphism (bg-white/80 dark:bg-black/80)
- Hover: scale-105 transform
- Icon: 3xl emoji
- Title: lg, semibold, gray-900/white
- Description: gray-700/gray-300
```

### **Installation Section**
```
Card with 4 steps:
1. Download Official Yandex Music Client (chip: primary)
2. Download the Patcher (chip: primary)
3. Run patcher and click "Patch" (chip: primary)
4. Enjoy enhanced Yandex Music! (chip: success ✓)

Each step has:
- Numbered chip (left)
- Title + optional link
- Glass card style
```

### **Platform Support Section**
```
Title: "Platform Support"
3 Chips: ✅ Windows, ✅ macOS, ✅ Linux
Style: Large, flat variant
```

### **Footer**
```
Style: Glass (backdrop-blur-sm bg-white/5 dark:bg-black/5)
Border: white/20 top border
Content:
- Legal disclaimer (gray-800/gray-200)
- Links: Main Repository, Discord Community (gray-700/gray-300)
```

## Color Palette

### Gradients
- **Main Gradient:** `from-purple-600 via-pink-600 to-blue-600`
- **Background (unused):** `from-purple-50 via-pink-50 to-blue-50`

### Accent Colors
- **Purple:** `text-purple-600` (stats, features)
- **Pink:** `text-pink-600` (stats)
- **Blue:** `text-blue-600` (stats)

### Glass Morphism
- **Light Cards:** `bg-white/80 backdrop-blur-md border-white/20`
- **Dark Cards:** `bg-black/80 backdrop-blur-md border-white/20`
- **Header/Footer:** `bg-white/10 dark:bg-black/10 backdrop-blur-md`

### Text Colors
- **Headings:** `text-gray-900 dark:text-white`
- **Body:** `text-gray-700 dark:text-gray-300` or `text-gray-800 dark:text-gray-200`
- **Muted:** `text-gray-500 dark:text-gray-400`

## Typography

### Font Stack
- **Sans:** Geist (default Next.js font)
- **Mono:** Geist Mono (unused in current design)

### Font Sizes
- **Hero Title:** `text-6xl font-bold`
- **Section Titles:** `text-4xl font-bold`
- **Card Titles:** `text-3xl font-bold`
- **Feature Titles:** `text-lg font-semibold`
- **Body Text:** `text-xl` (hero), `text-base` (default)

## Responsive Breakpoints

### Grid Layouts
- **Stats:** 1 col → md:3 cols
- **Features:** 1 col → md:2 cols → lg:3 cols
- **Platform Chips:** Flex wrap

### Container
- **Max Width:** Auto (container class)
- **Padding:** `px-6`
- **Vertical Spacing:** `pt-32 pb-20` (main content)

## Key Files

```
app/
├── page.tsx                       # Main landing page component
├── layout.tsx                     # Root layout with metadata
├── providers.tsx                  # HeroUI provider wrapper
├── globals.css                    # Global styles
└── components/
    └── VibeBackground.tsx         # Vibe animation component

public/
├── vibeAnimation.js               # WebGL animation worker script
└── [other static assets]

vibeAnimation.js                   # Source animation script (root)
```

## Dependencies

### UI Components (HeroUI/NextUI)
- Button
- Card (CardBody, CardHeader)
- Chip
- Divider
- Link

### Animation
- Web Workers API
- OffscreenCanvas API
- WebGL

## Restoration Instructions

### To Restore This Design:

1. **Checkout Commit:**
   ```bash
   git checkout a2bee05
   ```

2. **Or Copy Key Files:**
   - `app/page.tsx`
   - `app/components/VibeBackground.tsx`
   - `public/vibeAnimation.js`

3. **Verify Dependencies:**
   ```bash
   pnpm install
   ```

4. **Run Development Server:**
   ```bash
   pnpm dev
   ```

## Known Limitations

1. **OffscreenCanvas Support:** Requires modern browsers (Chrome 69+, Firefox 105+, Safari 16.4+)
2. **WebGL Requirement:** Animation won't work without WebGL support
3. **Performance:** May impact performance on low-end devices
4. **Web Worker:** vibeAnimation.js must be in public directory

## Future Enhancement Ideas

- Add audio reactivity to vibe animation
- Implement smooth theme transition animations
- Add parallax scrolling effects
- Create animated feature showcases
- Add "like animation" trigger button
- Implement mobile-optimized layout adjustments
