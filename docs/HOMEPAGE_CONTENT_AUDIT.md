# MITHAQ — Homepage Content Audit & Structural Re-Architecture

## 1. Executive Summary & Objective
The legacy MITHAQ homepage was a monolithic single-page application where every institutional section, practice area, methodology step, team member, FAQ, and contact block was stacked sequentially into a single endless scroll.
In accordance with the Master Prompt (Section 6-A), the homepage must be transformed from an exhaustive directory into a focused, prestigious institutional entry point that establishes MITHAQ's authority, communicates core value, and directs visitors to dedicated multi-page destinations.

## 2. Audit Classification of Legacy Sections

| # | Existing Section | Decision | Action & Destination | Strategic Rationale |
|---|---|---|---|---|
| 01 | **Header & Navigation** | **Rewrite for Multi-Page** | Shared Layout Header (`/`, `/about`, `/services`, `/approach`, `/team`, `/insights`, `/contact`, `/consultation`) | Legacy header used hash anchors (`#about`, `#services`). Must become a multi-page institutional navigation with active route highlights, consultation CTA button, and accessible mobile drawer. |
| 02 | **Hero Section + 3D Scene** | **Redesign for Home** | Retained on Home (`/`) | Hero with 3D basalt/gold architectural monolith immediately establishes institutional identity, prestige, and tagline ("حين تكون التفاصيل فارقة، تبدأ قوة الموقف"). Refined with direct CTAs to Services and Consultation. |
| 03 | **Positioning ("الفلسفة والنهج المؤسسي")** | **Rewrite & Condense for Home** | Concise excerpt on Home; full strategic depth moved to `/about` | On Home, a concise high-impact statement on institutional foresight and proactive immunity creates narrative rhythm. The extensive 4-pillar breakdown belongs on the About page. |
| 04 | **About Firm Profile ("عن مِيثاق")** | **Move to `/about`** | Dedicated page `/about` | Extensive institutional history, vision, mission, and 5-point philosophy deserve a dedicated editorial layout rather than cluttering the homepage. |
| 05 | **Practice Areas ("مجالات الممارسة")** | **Redesign on Home + Move Full Directory to `/services`** | Curated 6-card interactive showcase on Home linking to `/services` and individual service routes | On Home, a prestigious preview highlighting core competencies (Corporate, Contracts, Litigation, Real Estate, Labor, IP) guides visitors to the newly created dedicated service pages. |
| 06 | **Why Choose Us ("الفرق يبدأ من طريقة التفكير")** | **Rewrite for Home** | Integrated on Home as core institutional pillars | 4 core principles (Analytical Precision, Clear Communication, Confidentiality, Strategic Vision) provide trust-building proof points for prospective clients visiting Home. |
| 07 | **Working Methodology ("منهجية العمل")** | **Move to `/approach`** | Dedicated page `/approach` (منهجية العمل) | A 6-step deep legal engagement process requires dedicated breathing room, deliverables breakdown, and interactive visual progression on its own page. |
| 08 | **Legal Team ("فريق العمل")** | **Move to `/team`** | Dedicated page `/team` | Detailed legal partner biographies and specialization areas belong on the dedicated Team page with responsible demonstration disclosures. Removing it from Home keeps the homepage focused. |
| 09 | **Institutional Values ("قيم راسخة")** | **Move to `/about`** | Dedicated page `/about` | Institutional ethics, fiduciary duty, and code of conduct strengthen the institutional About page narrative. |
| 10 | **Legal Insights ("الرؤى والمقالات")** | **Curated Preview on Home (Exactly 3 Articles) + Dedicated `/insights` Hub** | Editorial showcase of the 3 substantive articles on Home, linking to full articles `/insights/:slug` | In compliance with the strict limit of exactly three substantive articles, Home features an editorial grid of the 3 articles. Full reading view is provided at dedicated routes `/insights/:slug` with no modal dependency. |
| 11 | **FAQ ("الأسئلة الشائعة")** | **Move to `/faq`** | Dedicated page `/faq` (الأسئلة الشائعة) | An exhaustive 7-item Q&A accordion clutters the homepage; relocating to a dedicated `/faq` page creates a better user experience for prospective clients researching engagement details. |
| 12 | **Final Conversion CTA** | **Redesign for Home** | Streamlined on Home | High-conversion institutional banner guiding users to the dedicated `/consultation` form and `/contact` page. |
| 13 | **Contact Section** | **Move to `/contact` & `/consultation`** | Dedicated pages `/contact` and `/consultation` | Complete contact channels, office location details, and multi-field legal intake forms belong on dedicated pages rather than embedded at the bottom of the home scroll. |
| 14 | **Footer** | **Redesign for Multi-Page** | Shared Layout Footer | Updated with comprehensive multi-page sitemap links, legal disclaimer, demo disclosure, and working hours. |
| 15 | **Article Modal** | **Remove & Replace** | Replaced by dedicated routes `/insights/:slug` | Reading legal articles inside a modal window is poor for SEO, URL sharing, and reading comfort. Replaced with full-page editorial article layouts. |
| 16 | **Consultation Modal** | **Retain as Quick-Action + Dedicated `/consultation` Page** | Available globally via header button + full page at `/consultation` | Allows immediate consultation booking from any page while offering a comprehensive dedicated intake experience at `/consultation`. |

## 3. Revised Homepage Architecture
The new homepage follows a deliberate institutional narrative arc:
1. **Hero:** Brand identity, 3D architectural monument, key positioning, primary CTAs ("طلب استشارة", "استكشف خدماتنا").
2. **Institutional Introduction:** Concise statement of MITHAQ's philosophy and foresight.
3. **Practice Areas Preview:** Selective, high-prestige presentation of the 6 core legal disciplines with direct links to individual pages.
4. **Institutional Pillars (Why MITHAQ):** Core differentiators (Analytical precision, strategic foresight, strict confidentiality).
5. **Insights Showcase:** Editorial feature of the exactly 3 substantive legal articles.
6. **Conversion CTA:** Invitation to formal consultation with clear fictional demonstration notice.
