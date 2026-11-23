# MITHAQ — External Dependency Decisions & Governance Register

In accordance with Section 13 ("External library discovery, evaluation, and dependency governance") and Section 14 ("Plain CSS styling architecture — non-negotiable"), this document logs all adopted and rejected third-party libraries.

## 1. Adopted Dependencies

### `react-router-dom` (^7.x / ^6.x)
- **Status:** Adopted
- **Purpose:** Client-side routing for the multi-page institutional website (`/`, `/about`, `/services`, `/services/:slug`, `/approach`, `/team`, `/insights`, `/insights/:slug`, `/contact`, `/consultation`, `/faq`, `/privacy`, and 404).
- **Justification:** Native browser routing in a Vite SPA requires robust URL synchronization, route-level code splitting (`React.lazy`), programmatic navigation, scroll restoration, and parameter parsing.
- **Loading Strategy:** Core router loaded at root; route components split dynamically with `React.lazy` and `Suspense`.
- **License:** MIT

### `lucide-react` (^1.70.0)
- **Status:** Adopted (Pre-installed)
- **Purpose:** Consistent, accessible icon system across navigation, service cards, contact channels, and editorial metadata.
- **Justification:** Provides clean, uniform geometric line icons matching MITHAQ's architectural aesthetic. Tree-shakable (only imported icons are included in bundle).
- **Loading Strategy:** Individual icon named imports (e.g., `import { Scale, ShieldCheck } from 'lucide-react'`).
- **License:** ISC

### `three` (^0.187.0) & `@types/three`
- **Status:** Adopted (Pre-installed)
- **Purpose:** Custom 3D procedural scenes (Hero architectural basalt/gold monolith, service nodes, values geometry).
- **Justification:** Central visual signature of MITHAQ's premium digital identity.
- **Optimization Strategy:** Strictly lazy-loaded, initialized with IntersectionObserver, paused when out of viewport, throttled DPR, and fully disposed on component unmount.
- **License:** MIT

### `gsap` (^3.15.1)
- **Status:** Adopted (Pre-installed)
- **Purpose:** Coordinated animation timelines, scroll reveals, and micro-interactions.
- **Justification:** Standard for high-performance timeline orchestration with `ScrollTrigger`.
- **Optimization Strategy:** Registered only where needed, managed with `gsap.matchMedia()` for mobile responsiveness, with full `ScrollTrigger.getAll().forEach(t => t.kill())` cleanup on route change.
- **License:** GreenSock Standard License

---

## 2. Evaluated and Intentionally Rejected Candidates

### `tailwindcss` / `@tailwindcss/*`
- **Status:** **REJECTED (Non-negotiable requirement)**
- **Reason:** The project brief strictly mandates plain, maintainable CSS3 with CSS custom properties. No utility-first CSS frameworks are permitted.

### `lenis` (Smooth Scrolling)
- **Status:** **REJECTED**
- **Reason:** Native browser scrolling provides optimal performance, accessibility, and reliability across mobile touch devices and assistive technology. Smooth scroll hijacking creates conflicts with mobile address bars, keyboard scrolling, and complex GSAP ScrollTrigger pinning.

### `framer-motion` / `motion`
- **Status:** **REJECTED**
- **Reason:** The project already utilizes GSAP for timeline orchestration and CSS transitions for micro-interactions. Adding a secondary animation runtime would duplicate 30–50 kB of JavaScript with no unique functional benefit.

### `radix-ui` (Full Primitives Bundle)
- **Status:** **REJECTED**
- **Reason:** The interactive primitives (modal dialogs, accordion FAQ items, mobile drawer navigation) are engineered natively using semantic HTML (`<dialog>`, `<details>`, ARIA attributes, keyboard traps) and scoped plain CSS. This avoids runtime bundle overhead while providing 100% control over styling and transitions.

### `@types/node` & development utilities
- **Status:** Maintained strictly as development dependencies.
