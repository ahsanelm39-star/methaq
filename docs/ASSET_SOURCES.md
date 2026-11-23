# MITHAQ — Visual Asset Sources & Licensing Register

In accordance with Section 8 ("Images and visual assets") and Section 24 of the Master Prompt, this document registers all visual assets, icons, typography, and procedural visual systems utilized in the project.

## 1. Typography
- **Primary Typefaces:**
  - **Alexandria (الأسكندرية):** Used for headlines, titles, and high-impact editorial statements. Modern geometric sans-serif tailored for contemporary Arabic institutional identities. Loaded via Google Fonts under SIL Open Font License (OFL).
  - **IBM Plex Sans Arabic:** Used for body text, legal articles, data tables, and interface controls. Highly legible, neutral, and engineered specifically for complex Arabic reading at text sizes. Loaded via Google Fonts under SIL Open Font License (OFL).

## 2. Iconography
- **Icon Library:** `lucide-react` (ISC License).
- **Style:** Uniform 1.5px–2px stroke width, geometric line art, consistently sized at 18px–24px.
- **Icons Selected:**
  - `Briefcase` — Corporate & Business Law
  - `FileText` — Contracts & Agreements
  - `Scale` — Litigation & Dispute Resolution
  - `Building2` — Real Estate & Construction
  - `Users` — Employment & Labor
  - `ShieldCheck` — Intellectual Property & Technology
  - `CheckCircle2`, `ArrowLeft`, `ArrowRight`, `Clock`, `Calendar`, `ChevronDown`, `ChevronUp`, `Menu`, `X`, `ExternalLink`, `Mail`, `Phone`, `MapPin` — Interface & Navigation.

## 3. 3D Procedural Scenes (Three.js)
- **Engine:** Three.js (MIT License).
- **Asset Nature:** 100% procedurally generated geometries and materials (no heavy external binary `.gltf` or `.obj` downloads required).
  - **Basalt & Graphite Monolith:** Procedural extruded box and beveled cylinder geometry with custom PBR materials simulating dark slate and brushed bronze (`#C8A86B`).
  - **Orbital Gold Rings:** Procedural torus and curved line geometries representing legal structure and balance.
  - **Particle Dust & Lighting:** Ambient and directional spotlights with ACESFilmic tone mapping.

## 4. Imagery & Visual Textures
- **Visual Foundation:** Procedural CSS background grids and atmospheric radial vignettes.
- **Hero Graphic & Badges:** Vector SVGs and high-resolution local assets stored in `src/assets/`.
- **Fictional Entity Disclaimer:** All team depictions and institutional assets are illustrative portfolio demonstrations created specifically for MITHAQ showcase.
