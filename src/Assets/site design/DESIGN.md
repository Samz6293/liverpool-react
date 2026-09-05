---
name: Apex Scout
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#e4bdbc'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#ab8887'
  outline-variant: '#5b403f'
  surface-tint: '#ffb3b2'
  primary: '#ffb3b2'
  on-primary: '#680013'
  primary-container: '#ff525d'
  on-primary-container: '#5b000f'
  inverse-primary: '#bd0c2d'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#ca8100'
  on-tertiary-container: '#3e2400'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad9'
  primary-fixed-dim: '#ffb3b2'
  on-primary-fixed: '#410008'
  on-primary-fixed-variant: '#92001f'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  headline-hero:
    fontFamily: Anybody
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  headline-hero-mobile:
    fontFamily: Anybody
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Anybody
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Anybody
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Anybody
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  stat-display:
    fontFamily: Anybody
    fontSize: 44px
    fontWeight: '900'
    lineHeight: 48px
    letterSpacing: -0.02em
  label-data:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-badge:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter-xs: 0.25rem
  gutter-sm: 0.5rem
  gutter-md: 1rem
  gutter-lg: 1.5rem
  gutter-xl: 2rem
  margin-mobile: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2.5rem
---

## Brand & Style
The design system powers an elite, high-octane sports scouting and player intelligence platform tailored for sporting directors, performance analysts, agents, and tactical enthusiasts. It channels the visceral tension, speed, and precision of top-flight football under stadium floodlights into an ultra-dense, data-rich interface.

The design movement synthesizes **High-Contrast Bold Athletics** with **Tactical Glassmorphism**. Dark carbon and obsidian pitch surfaces recede into the backdrop, allowing high-voltage accents—striker crimson, pitch grass green, and gold prestige tiers—to burst forward like tactical telemetry overlays on a broadcast stream. The emotional posture is assertive, decisive, and authoritative, balancing rapid quantitative assessment with evocative cinematic player spotlights.

## Colors
The color architecture is calibrated for dark environments, delivering stark contrast and immediate visual priority:

- **Primary (`#FF4655` / `#E63946`):** Striker Crimson. Applied to primary CTAs, critical alerts, explosive radar vertices, attacking role designations, and active match live-state pulses.
- **Secondary (`#10B981`):** Pitch Green. Signals positive metrics, upward market value trajectories, match ratings > 7.5, high conversion rates, and confirmed contract statuses.
- **Tertiary (`#F59E0B`):** Prestige Gold. Reserved for standout individual honors, top percentiles (95th+), verified agency seals, and marquee transfer valuations.
- **Neutrals & Surfaces:**
  - `Surface Void (#0B0F17)`: Baseline root viewport background.
  - `Surface Deep (#131B26)`: Structural canvas cards, navigation panels, and container surfaces.
  - `Surface Elevated (#1C2636)`: Interactive cards, table rows, and popovers.
  - `Border Ghost (#2A374A)`: 1px separation lines maintaining sharp architectural integrity.
  - `Text High-Contrast (#F8FAFC)`: Primary labels and tabular data values.
  - `Text Muted (#94A3B8)`: Secondary metadata, timestamps, and statutory fields.

## Typography
The typographic hierarchy reflects athletic vigor and engineering rigor. **Anybody** provides muscular, angular impact for titles, kit numbers, and player names. **Space Grotesk** serves as a crisp, geometric interface body font that sustains clean legibility across densely packed analytical modules. **JetBrains Mono** locks in metric precision for technical telemetry, xG figures, contract values, coordinates, and market status stamps. Tabular numerals (`tnum`) must be enforced globally for all monetary and quantitative figures to prevent horizontal jitter during live matches.

## Layout & Spacing
The layout implements a 12-column adaptive fluid grid designed to balance wide visual hero sections (such as cutout player photography alongside biographical headers) with high-density data matrices:

- **Desktop (1280px+):** 12 columns, 24px gutters, 40px outer safe margin. Left-anchored 80px compressed rail for tactical navigation; 8-column primary scouting feed with 4-column real-time biometric and transfer radar rail.
- **Tablet (768px - 1279px):** 8 columns, 16px gutters, 24px margins. Biometrics and bio cards stack into unified multi-tab dashboards.
- **Mobile (<768px):** 4 columns, 12px gutters, 16px margins. Dense vertical card flows with horizontal swipe rails for performance tables and pitch heatmaps.

Rhythm adheres strictly to a 4px base increment, biased toward compact data presentation (8px and 12px internal card pads) to maximize vertical screen efficiency without sacrificing tap accuracy.

## Elevation & Depth
Depth is constructed through optical transmission rather than drop shadows. Surface layers stack from deep matte carbon to glass overlays:

- **Base Layer (L0):** Solid `#0B0F17` background with subtle atmospheric pitch lighting gradients (conical spotlight radial gradient at top right with 6% crimson/blue wash).
- **Surface Layer (L1):** `#131B26` with 0.85 opacity, backed by `backdrop-filter: blur(16px)` and a 1px solid `#1E293B` hairline border.
- **Elevated Interactive Layer (L2):** `#1C2636` with 0.90 opacity, hairline border `#2A374A`, and a soft directional cyan-crimson specular edge reflection (`box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.08)`).
- **Floating Overlays & Menus (L3):** `#182232` with high-defocus backdrop blur (`24px`), bordered by `#334155`, casting a diffuse dark ambient drop `0 16px 32px -8px rgba(0, 0, 0, 0.65)`.

## Shapes
The shape philosophy favors sharp, technical chamfers and compact corner radii (`roundedness: 1`). Buttons, badges, and cards employ a crisp 4px (`0.25rem`) standard radius, extending to 8px (`0.5rem`) for macro-containers. This chiseled geometry evokes tactical monitors, performance hardware, and aggressive sportswear aesthetics. Avoid pill-shaped curves except for compact numerical position labels and circular player cutout masks.

## Components

### Buttons & Actions
- **Primary Striker Action:** Filled with `#FF4655`, sharp 4px radius, white heavy-weight text, micro-glow `0 0 20px rgba(255, 70, 85, 0.35)` on hover.
- **Secondary Ghost:** 1px `#2A374A` border, transparent background, `#F8FAFC` label; transforms to `#1C2636` with white border on hover.
- **Tactical Icon Action:** 36x36px square with 1px hairline border, containing centered iconography in `#94A3B8`, brightening to `#FF4655` on interaction.

### Badges & Position Tags
- Monospaced, all-caps, ultra-compact (padding: 2px 6px).
- Position tags use role-coded tint palettes: Crimson for Forwards (`CF`, `LW`, `RW`), Pitch Green for Midfielders (`CM`, `CAM`, `CDM`), Royal Blue for Defenders (`CB`, `LB`, `RB`), and Amber for Goalkeepers (`GK`).
- Transfer Status Tags feature a dual-tone layout: a glowing status indicator dot (e.g., green for Active/Unlocked) adjacent to a monospaced currency figure (`£125m`).

### Metric Cards & Stat Blocks
- Frosted glass slate container with a discrete upper label (e.g., `GOALS PER 90`) in muted JetBrains Mono.
- Dominant numeric stat displayed in 44px bold **Anybody**, followed by a dynamic percentile delta pill (`+14% vs league avg`) color-coded in `#10B981` or `#FF4655`.
- Subtle 2px bottom border indicator reflecting the player’s dominant performance tier.

### Scouting Tables & Match Rows
- Striped alternating row backgrounds using `#131B26` and `#0F1622`.
- High-contrast tabular figures right-aligned with fixed monospaced widths.
- Pinned player profile column featuring micro-cutout avatar thumbnails and nationality flag icons.

### Form & Filter Inputs
- Minimalist inset boxes: `#0B0F17` interior with a 1px `#1E293B` rim.
- Focus state brings an immediate `#FF4655` border transition paired with a 2px offset halo.