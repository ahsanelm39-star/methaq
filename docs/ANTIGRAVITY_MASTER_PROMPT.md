# MASTER PROMPT — MITHAQ
## Complete Corporate Website Transformation, Visual Enhancement & Engineering Upgrade

**Project:** MITHAQ — Premium Arabic Legal Website  
**Target Website:** https://methaq1.vercel.app/  
**Current Environment:** React 19, TypeScript, Vite, Three.js, GSAP, and the existing project CSS  
**Primary Language:** Arabic  
**Layout Direction:** RTL  
**Styling System:** Plain CSS (CSS3, CSS custom properties, and responsive media queries)  
**Development Tool:** Antigravity  
**Project Type:** Multi-page Corporate Website — Portfolio Showcase  
**Dependency Policy:** Third-party libraries are evaluated selectively and adopted only when they provide a justified improvement.

This document is the unified and authoritative source of project requirements. The explicit project-specific instructions in this document take precedence over any conflicting legacy instruction: the target website is the URL stated above; the Legal Insights section must contain exactly three substantive articles; the styling system must remain plain CSS with no Tailwind CSS migration or adoption; and the existing homepage must be critically re-evaluated and rebuilt around its proper role rather than preserved as-is. These changes do not reduce, replace, or weaken the established visual identity, art direction, UI/UX standards, responsive requirements, animation principles, Three.js/GSAP guidance, performance targets, accessibility requirements, or engineering quality standards retained throughout this prompt.

The published website is the visual and content reference for the current deployed experience. The accessible local project/repository is the source of truth for implementation. Inspect both where the available tools permit. The URL is not authorization to deploy, overwrite, or modify the live production deployment. Do not claim that the public URL has changed unless a deployment was explicitly authorized and verified.

All library, visual-enhancement, and performance-engineering instructions below are integrated into the relevant project sections. Candidate tools are not mandatory dependencies, and no visual enhancement overrides performance, accessibility, maintainability, truthful project disclosure, or the explicit project-specific requirements above.

---

# 1. YOUR ROLE AND MISSION

You are acting as a multidisciplinary senior digital product team consisting of:

- Senior Front-End Architect.
- Senior React & TypeScript Developer.
- Senior UI/UX Designer.
- Senior Digital Experience Designer.
- Legal Industry Website Specialist.
- Arabic UX and Content Specialist.
- Technical SEO Specialist.
- Web Performance Engineer.
- Accessibility Specialist.

Your responsibility is to transform the existing MITHAQ website from a single-page landing page into a complete, sophisticated, multi-page institutional website for a premium law firm.

This is not a simple visual redesign, nor is it a basic conversion from one page into several pages.

It is a comprehensive transformation of the website's:

1. Information architecture.
2. User experience.
3. Visual communication.
4. Arabic content and messaging.
5. Page structure.
6. Front-end architecture.
7. Styling system.
8. Responsive behavior.
9. Interactive experience.
10. Performance and accessibility.
11. SEO foundation.
12. Project documentation.

The final result must feel like the digital presence of an established, sophisticated legal institution.

The website must demonstrate excellent design judgment, advanced front-end engineering, content strategy, and attention to detail.

**Do not stop after analyzing the project or proposing a plan. You are expected to implement the complete transformation, verify it, and deliver a working, production-quality, deployment-ready portfolio build. The result must remain clearly disclosed as a fictional demonstration and must not imply that it is an operational law firm or that demo forms transmit real requests.**

Use professional judgment when making implementation decisions. Do not ask unnecessary questions. Inspect the existing project, understand its design and technical foundations, and make the best decisions based on the requirements below.

---

# 2. CRITICAL PROJECT CONTINUITY REQUIREMENT

Before modifying any existing project files, create the directory `docs` if it does not exist.

Save this entire master prompt, without omitting its requirements, in:

`docs/ANTIGRAVITY_MASTER_PROMPT.md`

This file must remain part of the project repository.

The purpose is to preserve the complete project requirements and decisions so that future AI models or development sessions can understand the original scope and continue the work without reconstructing the instructions.

Also create:

`docs/IMPLEMENTATION_STATUS.md`

This file must document:

- Original project objectives.
- Approved design direction.
- Confirmed website sitemap.
- Technical architecture decisions.
- Current implementation phase.
- Completed tasks.
- Pending tasks.
- Modified or newly created important files.
- Tests already performed and their actual results.
- Known issues or unresolved decisions.
- Exact next steps required to continue development.

Update this document after each major implementation phase.

If the task is interrupted because of context limits, execution limits, or tool availability, immediately record the exact stopping point, current state, pending work, and next steps in this file.

**Never leave the project in an undocumented intermediate state.**

---

# 3. TARGET WEBSITE, SOURCE OF TRUTH, AND SCOPE CONTROL

**Published website to inspect:** https://methaq1.vercel.app/

This is the exact MITHAQ website for which the transformation is being performed. Do not treat it as a generic inspiration link or substitute it with another website.

Before implementation, inspect the published experience page by page and compare it with the accessible local project. Review the actual visual output, content, page sections, navigation, responsive behavior, interactions, and available assets. Also inspect the local source code to understand how the current experience is implemented.

Apply the following source-of-truth rules:

1. Use the local project/repository as the source of truth for code changes, dependencies, files, and implementation history.
2. Use the published URL as the reference for the currently deployed visual and content experience.
3. If the deployed site and local project differ, identify the differences and document them before choosing a safe implementation path. Do not silently discard work from either source.
4. Do not attempt to edit the live website through its public URL. Make implementation changes in the available project workspace.
5. Do not deploy, overwrite, or replace the current production deployment unless deployment is explicitly authorized.
6. If the local project or required repository access is unavailable, do not pretend that the website has been fully modified. Record the limitation and complete only the work that can be performed reliably.

## Explicit scope decisions that must be followed

The following are non-negotiable and override any older or conflicting instruction elsewhere in the project materials:

- **Homepage:** The existing homepage is not approved for preservation as-is. It must be re-evaluated and re-architected based on the role of a strong institutional homepage. Keep only what genuinely serves that role, rewrite or redesign what needs improvement, move useful material to the correct internal page, and remove material that has no meaningful role anywhere in the new information architecture.
- **Articles:** Create exactly three substantive Arabic sample articles—no more and no fewer. Do not generate additional placeholder, draft, duplicate, or hidden articles.
- **Styling:** Use ordinary, maintainable CSS. Do not migrate to, install, configure, or use Tailwind CSS or another utility-first styling framework.
- **Visual direction:** Preserve the detailed brand, UI/UX, art direction, typography, Arabic/RTL, mobile, animation, Three.js, GSAP, visual asset, performance, and accessibility requirements in this prompt. These requirements are not to be simplified or weakened while applying the scope changes above.

---

# 4. FIRST: INSPECT THE EXISTING PROJECT

Before writing or changing code, thoroughly inspect the existing repository.

Review:

- Current directory structure.
- `package.json` and lockfile.
- React and TypeScript configuration.
- Vite configuration.
- Existing routing implementation, if present.
- All existing components.
- All current pages and sections.
- Global styles and component CSS files.
- Three.js scenes and rendering logic.
- GSAP animations and ScrollTrigger usage.
- Existing design tokens and color variables.
- Fonts and typography configuration.
- Images, icons, and other assets.
- Content and data files.
- Existing forms and interactive components.
- SEO implementation.
- Deployment configuration.
- Existing documentation.

Inspect the source code rather than relying only on component names or README descriptions.

Identify what is worth preserving, what requires refactoring, what should be replaced, and what is unnecessary.

Do not blindly delete existing components or rewrite working features without a technical or design justification.

Before making changes:

1. Inspect the current Git status.
2. Identify existing user changes.
3. Preserve the current project history and source assets.
4. Do not overwrite unrelated work.
5. Do not reset, clean, or delete existing files indiscriminately.

Prepare a short internal implementation plan, record the important architectural decisions in the project documentation, then proceed with execution.

---

# 5. PROJECT IDENTITY AND VISUAL DIRECTION

## Preserve MITHAQ's existing identity

The current visual identity must remain recognizable.

Preserve:

- MITHAQ brand name.
- Existing logo and emblem.
- Deep navy visual foundation.
- Gold accent identity.
- Existing sophisticated and architectural visual direction.
- Premium, dark, editorial aesthetic.
- Existing meaningful 3D visual concepts.

Do not replace the current identity with a generic law-firm template.

Do not introduce a completely different color palette or visual language.

However, preserving the identity does not mean freezing every existing design decision.

You are expected to improve the quality, consistency, refinement, and usability of the existing visual system.

## Design philosophy

The website should communicate:

- Institutional credibility.
- Legal expertise.
- Precision and attention to detail.
- Professional responsibility.
- Strategic thinking.
- Clarity.
- Confidence without exaggeration.
- Established organizational identity.

The website must feel carefully art-directed.

Avoid generic templates, repetitive card grids, excessive decorative elements, unnecessary gradients, and predictable section arrangements.

Every important section should have a distinct visual concept while remaining consistent with the overall brand.

Use visual rhythm: alternate layouts, controlled whitespace, editorial typography, selective imagery, structured content, and purposeful interactions.

The result must feel designed specifically for MITHAQ.

---

# 6. COMPLETE MULTI-PAGE INFORMATION ARCHITECTURE

This project must become a genuine multi-page institutional website.

Do not simply keep all existing sections and place them into different routes without reconsidering their purpose.

Build a coherent information architecture where each page has a clear objective, meaningful content, and a distinct user experience.

Use the following sitemap as the required foundation.

## A. Home — الصفحة الرئيسية

Route: `/`

The homepage must be redesigned and re-architected as a focused institutional entry point. **Do not preserve the current homepage as-is, do not copy its existing section order, and do not assume that its current sections belong on the homepage simply because they already exist.** The existing homepage is source material to assess—not a fixed design or structural template.

The homepage should establish MITHAQ's institutional identity, communicate its central value and legal capabilities, build confidence through clear and credible messaging, and guide visitors to the most relevant next action or internal page. It must not attempt to reproduce the entire website or function as a long directory of every available detail.

### Mandatory homepage content audit

Before building the new homepage, inspect every existing section and meaningful content unit on the published site and in the source code. Create `docs/HOMEPAGE_CONTENT_AUDIT.md` and classify each item using one of these decisions:

1. **Keep on Home:** It directly supports the homepage's purpose and is worth retaining, with refinement where needed.
2. **Rewrite or Redesign for Home:** The underlying idea is relevant, but its content, hierarchy, presentation, or interaction needs to be rebuilt.
3. **Move to an Internal Page:** The content is useful, but it belongs on a dedicated page such as About, Services, Approach, Team, Insights, Contact, or Consultation. Identify the destination route.
4. **Remove:** It is redundant, weak, misleading, irrelevant, purely decorative without a purpose, or has no meaningful place in the revised website. State the reason.

Record the decision and concise rationale for every existing homepage section. Do not move content blindly: first determine whether it adds value to the destination page and whether it needs rewriting. Do not preserve duplicate versions of the same message across multiple routes.

### Homepage composition

Do not follow a mandatory, pre-set sequence of sections. Derive the final homepage structure from the content audit, the brand strategy, visitor needs, and the complete sitemap. Use only the sections that genuinely strengthen the homepage. Potential content roles may include:

- A distinctive hero that immediately communicates MITHAQ's institutional identity and positioning.
- A concise institutional introduction, only if it adds something beyond the hero.
- A selective overview of the most relevant legal practice areas, linking to the full Services page.
- A clear expression of MITHAQ's professional approach or differentiating principles, without unsupported claims.
- A carefully chosen preview of the three Legal Insights articles, if it supports discovery.
- A focused consultation or contact call to action.

These are content roles, not a required section checklist. The agent must decide which roles are appropriate, how they should be composed, and in what order. Do not force a team preview, FAQ preview, methodology section, or any other block onto the homepage if it is better handled on its dedicated page.

The homepage must have a deliberate narrative and visual rhythm, a clear content hierarchy, and a purposeful primary CTA. Retain or reinterpret the existing 3D hero experience only if it contributes to the new homepage concept and meets the established performance and usability requirements. Do not keep an element merely because it already exists.

### Reuse, relocation, and removal rules

- Reuse existing content, components, visual assets, and interactions only when they serve the new page purpose and meet the quality bar.
- If a section is valuable on another route, adapt and relocate it rather than keeping a redundant homepage copy.
- If a section does not serve the homepage or any other page, remove it after checking dependencies and references.
- Before deleting a component, asset, style, or data module, verify whether another route or shared feature depends on it.
- Do not delete a useful component just because its original section is removed; refactor and reuse it where appropriate.
- Do not preserve weak, repetitive, or irrelevant content solely to retain the old page's length.

The final homepage must feel purpose-built for MITHAQ—not like the old landing page with a few sections moved around.

## B. About MITHAQ — عن ميثاق

Route: `/about`

Create a dedicated institutional page.

Include:

- Institutional introduction.
- Professional philosophy.
- Vision and mission.
- Core values.
- Approach to legal work.
- Professional standards.
- How the institution understands its role in supporting clients.
- A suitable visual narrative.

Do not simply repeat the homepage content.

Use a more editorial and institutional layout.

## C. Legal Services — الخدمات القانونية

Main route: `/services`

This must become a comprehensive practice-area directory.

The website should represent a well-rounded legal practice, not an institution that appears to specialize in only one narrow legal field.

At the same time, do not create an unrelated list of every legal discipline.

Build a coherent set of interconnected practice areas.

Use the following six practice areas as the initial content direction:

1. **قانون الشركات والأعمال**
   - تأسيس الشركات.
   - التنظيم والحوكمة.
   - المعاملات التجارية.
   - الهيكلة والاستشارات المؤسسية.

2. **العقود والاتفاقيات**
   - صياغة العقود.
   - مراجعة الاتفاقيات.
   - التفاوض التعاقدي.
   - تحديد المخاطر والالتزامات.

3. **التقاضي وتسوية المنازعات**
   - المنازعات التجارية والمدنية.
   - التمثيل القانوني.
   - إعداد المذكرات والطلبات.
   - التسوية الودية وإدارة النزاعات.

4. **العقارات والإنشاءات**
   - المعاملات العقارية.
   - عقود الإيجار والتطوير.
   - عقود المقاولات والإنشاءات.
   - المنازعات العقارية والتعاقدية.

5. **العمل والموارد البشرية**
   - علاقات العمل.
   - مراجعة العقود والسياسات الداخلية.
   - تنظيم الالتزامات المهنية.
   - المنازعات العمالية.

6. **الملكية الفكرية والتقنية**
   - حماية الحقوق الفكرية.
   - العلامات التجارية.
   - اتفاقيات الترخيص والاستخدام.
   - العقود المرتبطة بالخدمات والتقنيات الرقمية.

These areas must be presented as a connected legal service ecosystem.

Their relationship should be clear: supporting businesses, commercial relationships, assets, contractual obligations, people, and legal rights.

You may refine the descriptions and sub-services after inspecting the existing project and evaluating the content structure.

### Individual service pages

Each of the six practice areas must have its own dedicated page.

Suggested routes:

- `/services/corporate-and-business`
- `/services/contracts-and-agreements`
- `/services/litigation-and-disputes`
- `/services/real-estate-and-construction`
- `/services/employment-and-labor`
- `/services/intellectual-property-and-technology`

Use readable Arabic page titles even if route slugs are in English.

Each service detail page should contain genuinely differentiated content.

Recommended structure:

1. Specialized Hero.
2. Introduction to the Legal Practice.
3. Legal Needs and Challenges Addressed.
4. Detailed Scope of Services.
5. How MITHAQ Approaches This Practice.
6. Relevant Professional Considerations.
7. Related Practice Areas.
8. Related Legal Articles.
9. Relevant FAQ.
10. Dedicated Consultation CTA.

Do not copy the same paragraphs and replace the service name.

Each page must communicate a meaningful understanding of its legal discipline.

Create reusable page templates and typed content data rather than duplicating six nearly identical page components.

## D. Legal Approach — منهجية العمل

Route: `/approach`

Create a dedicated institutional page explaining how the organization approaches legal matters.

Include a logical process such as:

1. Understanding the matter.
2. Reviewing relevant documents and facts.
3. Assessing legal considerations and available options.
4. Developing an appropriate legal approach.
5. Executing the agreed work.
6. Following up and communicating developments.

The wording must remain accurate and must not promise specific outcomes.

Give this page a distinctive visual identity and a clear process-oriented presentation.

## E. Our Team — فريق العمل

Route: `/team`

Create a professional page introducing the legal team.

Each profile should use a consistent content model.

Potential fields:

- Name.
- Professional title.
- Practice areas.
- Professional introduction.
- Profile image.
- Selected areas of experience, if properly established within the fictional concept.

Individual profile pages may be created under `/team/:slug` only when there is enough meaningful content to justify them.

Do not invent real professional licenses, degrees, memberships, rankings, years of experience, case victories, or professional achievements.

Because this is an experimental portfolio project, any illustrative profiles must be clearly identifiable as fictional examples within the project documentation and appropriate website disclosure.

Do not associate synthetic or stock portraits with a real individual or imply that an actual lawyer is represented.

## F. Legal Insights — الرؤى والمقالات القانونية

Main route: `/insights`

This must be a proper editorial and knowledge section, not a few generic article cards.

Include:

- Editorial introduction.
- One featured selection chosen from the three approved sample articles.
- A refined article listing containing exactly three articles.
- Category labels only where they help users understand the article topics.
- Search or filtering only if it provides genuine value for a collection of this size; do not add unnecessary controls merely to imitate a large publication.
- Related topics and accurate publication metadata for the demo content.

The Insights index and all article links must reflect the same three-article source of truth. Do not display counts, categories, pagination, related links, or cards that imply the existence of additional articles.

Use only the editorial categories that genuinely match the three articles selected for publication. Do not display empty categories for practice areas that have no article in this three-article collection. The six legal practice areas remain part of the Services architecture; the Insights taxonomy should reflect the actual published articles, not imitate a larger publication.

Create separate article routes:

`/insights/:slug`

Every article page should have:

- Clear title.
- Short executive introduction.
- Publication date.
- Estimated reading time when calculated correctly.
- Well-structured Arabic content.
- Proper headings.
- Meaningful paragraphs.
- Lists or tables when useful.
- Related articles.
- Related legal service.
- A subtle consultation CTA.

Create **exactly three** substantive, original Arabic sample articles. This is a strict content limit, not a minimum. Do not create more than three articles anywhere in the project, including hidden routes, placeholder entries, draft cards, duplicate posts, or additional demo content.

Use three distinct topics that collectively demonstrate editorial depth and cover a representative range of MITHAQ’s practice areas. Suggested starting topics are:

1. أهمية مراجعة العقود التجارية قبل التوقيع.
2. الاعتبارات القانونية عند تأسيس الشركات وتنظيم العلاقة بين الشركاء.
3. حماية الملكية الفكرية في الأنشطة والخدمات الرقمية.

You may refine the titles and angles after reviewing the existing content, but the final published sample-article count must remain exactly three. Each article must have a distinct purpose and must not repeat the others with different wording.

Write original Arabic editorial content with real substance.

Do not use repetitive introductory paragraphs or artificially inflate article length.

Do not invent specific legal articles, deadlines, court rulings, regulatory requirements, or statutory quotations.

When mentioning applicable law or regulations, verify the information against authoritative official sources and ensure that the intended jurisdiction is clear.

The project brief does not specify a legal jurisdiction. Do not assume that MITHAQ operates under Egyptian, Saudi, UAE, or any other national law. Until a target jurisdiction is explicitly established, keep articles at the level of general legal awareness and do not invent or cite jurisdiction-specific statutes, deadlines, authorities, or legal procedures.

If a legal claim cannot be verified, keep the content at the level of general legal awareness rather than presenting it as an established legal rule.

Add a clear educational-content disclaimer to legal articles.

## G. Contact — تواصل معنا

Route: `/contact`

Create a professional institutional contact page.

Include:

- Contact introduction.
- Appropriate contact channels.
- Clearly identified illustrative contact information where necessary.
- Contact form.
- Consultation CTA.
- Optional location presentation only if the location is clearly disclosed as illustrative.

Do not fabricate a real office address or functioning phone number.

Do not include dead social links or fake contact destinations.

## H. Request a Consultation — طلب استشارة

Route: `/consultation`

Build a dedicated consultation experience.

The form may include:

- Full name.
- Contact method.
- Legal practice area.
- Brief description of the inquiry.
- Preferred communication method.

Use suitable form validation and accessible error messages.

Because this is a portfolio concept without a real backend, clearly explain that submitted information is not transmitted to a real law firm.

You may implement a locally simulated successful submission to demonstrate the UX, but never claim that a real consultation request has been delivered.

## I. Additional Institutional Pages

Create:

- `/faq` — Frequently Asked Questions.
- `/privacy` — Privacy Notice appropriate to the demo nature of the project.
- A professional 404 page.

The FAQ should contain relevant questions rather than generic filler.

The privacy page must not pretend that a nonexistent production data-processing system or real legal practice exists.

Avoid creating additional pages solely to increase the route count.

Every page must justify its existence.

---

# 7. PROFESSIONAL ARABIC CONTENT STRATEGY

This is one of the most critical project requirements.

The website must be Arabic-only from the visitor's perspective.

Do not treat Arabic content as translated English copy.

You must write Arabic content that sounds as though it was originally developed for a sophisticated Arabic-speaking legal institution.

## Tone of voice

Use a voice that is:

- Formal.
- Professional.
- Precise.
- Confident.
- Clear.
- Institutionally appropriate.
- Human and understandable.
- Persuasive without aggressive marketing.

Avoid:

- Generic marketing phrases.
- Overly emotional writing.
- Repetitive expressions.
- Artificially complicated Arabic.
- Excessive legal jargon.
- Empty promises.
- Unsupported claims.
- Repeated use of the same headline structure.
- Repeating the same benefits throughout the website.

## Content quality requirements

Every main page must have a content objective.

Every section must answer a specific visitor question.

Examples:

- What does the institution do?
- What types of legal matters can it assist with?
- How does it approach a legal matter?
- What distinguishes its professional approach?
- Which practice area is relevant to the visitor?
- What should the visitor expect when requesting an initial consultation?

Service pages must use specialized terminology appropriately.

Articles must provide useful knowledge, not merely advertise the services.

CTAs must be context-specific.

Use a consistent terminology system throughout the website.

Do not write all sections with identical language patterns.

Vary the visual and textual presentation where appropriate.

## Legal credibility and honesty

The website should feel like a credible institutional website, but this must never justify fabricating factual claims.

Do not invent:

- Official licenses.
- Professional registrations.
- Lawyer qualifications.
- Actual clients.
- Client testimonials.
- Successful case outcomes.
- Awards.
- Industry rankings.
- Years of operation.
- Confidentiality guarantees.
- Guaranteed legal outcomes.
- Government affiliations.
- Certifications.

Do not use claims such as "100% guaranteed results", "absolute legal immunity", or "unconditional confidentiality".

Use responsible professional language.

If the existing content contains unsupported claims, revise or remove them.

## Experimental project disclosure

MITHAQ is an independent fictional portfolio concept.

The public website must retain its convincing institutional appearance while clearly disclosing its experimental nature in appropriate locations.

Use a restrained, professionally designed disclosure.

Recommended locations:

- A subtle note in the footer.
- An appropriate project-context note on the About page.
- A note beside the demonstration consultation form.
- A relevant note on the team page if profiles are illustrative.

Suggested disclosure wording:

"مِيثاق نموذج رقمي تجريبي مستقل أُنشئ لأغراض العرض، والبيانات والأسماء والتفاصيل المؤسسية الواردة فيه افتراضية."

The disclosure must be noticeable enough to avoid misleading visitors but must not dominate the visual experience.

The firm's identity must remain separate from the website developer's personal identity.

Never introduce the developer's personal biography, contact information, or professional achievements into the fictional firm's public content.

---

# 8. UI/UX DESIGN AND ART DIRECTION

Do not build sections using a repetitive pattern of heading + paragraph + three cards.

Every important section must have a distinct visual concept.

Use design techniques such as:

- Editorial compositions.
- Asymmetric layouts.
- Controlled negative space.
- Distinctive section transitions.
- Layered visual depth.
- Typography-driven layouts.
- Carefully selected photography.
- Sophisticated iconography.
- Data-informed visual hierarchy.
- Subtle textures and graphical motifs.
- Meaningful 3D experiences.
- Refined hover and interaction states.

Create visual variety without compromising consistency.

Avoid unnecessary decoration.

Do not add a photograph simply because a section looks empty.

Visual elements must help explain, organize, reinforce, or enhance the information.

## Advanced visual quality and interaction direction

Explore the following techniques when they serve a clear design purpose:

- Refined entrance animations.
- Sophisticated typography interactions.
- Subtle image reveals.
- Layered visual compositions.
- Interactive service visualizations.
- Elegant navigation states.
- Sophisticated editorial article layouts.
- Carefully designed hover states.
- Custom SVG details.
- Architectural geometric elements.
- Subtle background textures.
- Refined page transitions.
- Meaningful depth and perspective.
- Carefully controlled parallax effects.
- Contextual transitions between content sections.

Do not apply every technique to every page or section. Select techniques according to the content, brand, and interaction needs. Avoid excessive animation, oversized decorative elements, unnecessary gradients, generic glassmorphism, and repetitive interaction patterns.

The visual experience must feel premium because of deliberate art direction and execution, not because it uses the largest number of effects or libraries.

## Images and visual assets

The website must not feel empty or lifeless.

Use images where they meaningfully improve the experience.

Priority locations:

1. Selected institutional imagery on the About page.
2. Editorial cover images for Legal Insights.
3. Professional illustrative portraits on the Team page.
4. A small number of meaningful visual assets on selected service pages.
5. The existing 3D compositions.

Do not place photos in every section.

Do not repeat generic gavel, scales of justice, courthouse, or legal-document stock images throughout the site.

Avoid cliché imagery.

Use visual assets that match the brand's architectural, editorial, and premium direction.

Use trusted image sources with suitable licensing or properly created synthetic visuals.

Download and host production assets locally rather than relying on unreliable third-party hotlinks.

Document external asset sources and licensing in:

`docs/ASSET_SOURCES.md`

## Image optimization

Performance is mandatory.

- Prefer AVIF or WebP where supported.
- Generate appropriately sized image variants.
- Use `srcset` and `sizes` when appropriate.
- Include explicit width and height or aspect ratios.
- Lazy-load below-the-fold images.
- Give above-the-fold LCP imagery appropriate priority.
- Avoid unnecessary high-resolution assets.
- Avoid layout shifts.
- Use suitable crops for mobile and desktop.
- Do not preload every image.
- Avoid huge background images on mobile.

Images must improve the visual quality without noticeably slowing the site.

## Iconography

Use a consistent icon system such as Lucide.

Icons must be:

- Relevant.
- Visually consistent.
- Sized correctly.
- Accessible.
- Used selectively.

Do not mix unrelated icon styles.

Do not use emoji as a replacement for professional interface icons.

---

# 9. ARABIC TYPOGRAPHY AND RTL QUALITY

The Arabic typographic system is extremely important.

Do not use arbitrary fonts or treat Arabic text as a simple right-aligned version of English text.

Study the visual identity and select a suitable professional Arabic typeface.

Recommended candidates include:

- IBM Plex Sans Arabic.
- Alexandria.
- Noto Sans Arabic.
- Noto Naskh Arabic for selected editorial applications.

Choose an appropriate primary family based on actual visual testing.

You may use a restrained secondary Arabic typeface for selected editorial headings, but do not create a fragmented typography system.

## Typography requirements

Create a complete responsive type scale.

Consider:

- Hero headings.
- Page titles.
- Section headings.
- Card titles.
- Body paragraphs.
- Supporting text.
- Captions.
- Metadata.
- Buttons.
- Form labels.

Use fluid typography with sensible responsive limits.

Avoid oversized Arabic headings that dominate the viewport.

Avoid excessively small mobile text.

Control:

- Font weight.
- Line height.
- Letter spacing.
- Paragraph width.
- Heading wrapping.
- Vertical rhythm.
- Contrast.
- Text hierarchy.

Use appropriate line heights for Arabic, especially for long-form articles.

A body line height around 1.7–1.9 may be a starting point, subject to visual testing.

Do not assign the same color, weight, and style to every text element.

Use controlled color variation for primary text, supporting text, metadata, and selected highlights.

Gold accents and gradients may be applied selectively to important typography, but readability always takes priority.

## RTL requirements

The website is exclusively Arabic.

Set the correct document language and direction.

Ensure:

- Correct RTL layout.
- Correct navigation alignment.
- Correct icon placement.
- Correct breadcrumb direction.
- Appropriate punctuation.
- Correct form-field behavior.
- Proper mixed Arabic and English text handling.
- Correct numerical presentation.
- Correct modal alignment.
- Consistent reading direction in all responsive states.

Do not simply apply `text-align: right` globally and assume that RTL is complete.

Test every page and interactive component.

---

# 10. MOBILE-FIRST EXPERIENCE — A TOP PRIORITY

Mobile experience is one of the most important requirements of this project.

Most prospective clients will access institutional websites from mobile devices.

Therefore, mobile must be designed deliberately, not treated as a compressed desktop layout.

Start with mobile layout decisions and progressively enhance the desktop experience.

## Mobile design requirements

Create intentional mobile compositions.

Review every page and section independently.

Adjust:

- Content hierarchy.
- Text alignment.
- Image placement.
- Section spacing.
- Navigation.
- Card layouts.
- CTA placement.
- Typography.
- 3D scenes.
- Scroll behavior.
- Interactive controls.
- Form layout.

Do not simply stack every desktop card vertically.

Where appropriate, rethink the composition completely for mobile.

## Mobile navigation

Build a professional, accessible navigation experience.

The mobile menu must include:

- Clear opening and closing behavior.
- Proper focus handling.
- Scroll locking when appropriate.
- Correct RTL alignment.
- Accessible labels.
- Touch-friendly controls.
- Nested service navigation when useful.
- Proper Escape-key behavior.

Do not let the menu hide important functionality.

## Mobile-specific interactions

Animations that look good on desktop may be unsuitable on mobile.

You are encouraged to create different animation behavior for mobile.

Examples:

- Shorter transitions.
- Reduced parallax.
- Simplified scene movement.
- Less expensive scroll animations.
- Smaller 3D compositions.
- Touch-based interactions instead of hover.
- Alternative mobile section entrances.
- Carefully timed fade and reveal effects.

The mobile website must still feel designed and animated, not stripped of all character.

Avoid:

- Heavy scroll scrubbing.
- Excessive pinning.
- Long animation delays.
- Hover-dependent interactions.
- Huge 3D rendering loads.
- Continuous decorative animations.
- Interactions that make scrolling difficult.

## Responsive animation strategy

Use different animation strategies for desktop and mobile when the interaction or rendering cost requires it. With the existing GSAP infrastructure, evaluate responsive animation management through `gsap.matchMedia()` or an equivalent supported approach.

Desktop may support carefully controlled scene movement, restrained parallax, advanced scroll-triggered timelines, and more elaborate perspective effects.

Mobile should favor shorter transitions, lower rendering cost, simplified scene behavior, touch-friendly interactions, minimal scroll manipulation, efficient entrance animations, reduced animation distances, and clear visual feedback.

All responsive animation setups must be cleaned up correctly when breakpoints change or components unmount. Always respect `prefers-reduced-motion`.

## Required viewport testing

At minimum, inspect:

- 360px.
- 375px.
- 390px.
- 430px.
- 768px.
- 1024px.
- 1366px.
- 1440px and above.

Check the real rendered layouts.

Do not assume responsive behavior works merely because CSS media queries or breakpoint rules exist; inspect the actual rendered layout at the required viewport sizes.

There must be no unintended horizontal overflow.

All buttons, forms, dropdowns, modals, routes, menus, and interactions must work on touch devices.

---

# 11. THREE.JS AND GSAP — PRESERVE AND IMPROVE

Three.js and GSAP are important parts of MITHAQ's identity.

Do not remove them simply to simplify the project.

Preserve the meaningful existing 3D experiences and enhance them where appropriate.

However, do not add 3D to every page.

Use advanced visual elements selectively.

Potential locations:

- Main homepage Hero.
- Practice Areas.
- Legal Approach / Methodology.
- Selected institutional visual moments.
- Branded page transition.

Each 3D scene must serve an identifiable design purpose.

## Visual refinement

Where a scene is retained or improved, evaluate its lighting, material properties, camera composition, geometry, shadows, reflections, movement, and transitions. Make visual changes deliberately and assess their rendering cost. Do not increase scene complexity merely to make it look more technically elaborate.

## Technical requirements

Review every existing Three.js implementation.

Improve:

- Renderer lifecycle.
- Animation loop management.
- IntersectionObserver logic.
- Resource cleanup.
- Material and geometry disposal.
- Texture management.
- Scene organization.
- Render resolution.
- Pixel ratio.
- Visibility handling.
- Performance on mobile.
- Error handling.
- WebGL fallback.

Do not leave unnecessary rendering loops active when scenes are outside the viewport.

Dynamically import heavy scenes and defer initialization until they are needed. Reuse assets where appropriate, and avoid initializing all 3D scenes during the initial page load.

Pause or suspend animations where appropriate.

Avoid multiple high-cost scenes rendering simultaneously.

Set sensible device pixel ratio limits.

Use optimized geometries, textures, and materials.

Implement lightweight fallbacks for devices without WebGL support.

Respect `prefers-reduced-motion`.

## GSAP requirements

Use GSAP intentionally.

Do not animate every element.

Avoid excessive delays and unnecessary movement.

Prefer smooth, restrained, well-timed animations.

Ensure all animations are cleaned up properly when components unmount or routes change.

Use GSAP context management where appropriate. Use responsive animation management such as `gsap.matchMedia()` when desktop and mobile require different motion behavior.

Animations must never interfere with reading, scrolling, forms, or navigation.

---

# 12. BRANDED PAGE TRANSITION / LOADING EXPERIENCE

Implement a distinctive branded transition that appears when navigating between internal pages.

This is an important part of the project's visual identity.

Do not implement an ordinary spinner.

Create a sophisticated MITHAQ transition experience.

## Design direction

The transition should:

- Use the existing logo or emblem.
- Use the established navy and gold identity.
- Feature subtle, refined animation.
- Feel institutional and premium.
- Create a short sense of anticipation.
- Be visually recognizable.
- Work beautifully on mobile and desktop.

Possible elements:

- Animated MITHAQ emblem.
- Refined gold line or geometric frame.
- Subtle movement or layered opacity.
- Small Arabic transition wording if appropriate.
- Sophisticated background treatment.

Avoid unnecessary visual complexity.

## Functional requirements

The branded transition must:

1. Appear only when navigating between internal routes.
2. Not appear on initial website loading unless explicitly necessary.
3. Work with browser Back and Forward navigation.
4. Avoid duplicate transitions for the same route.
5. Not interfere with external links or anchor navigation.
6. Restore appropriate scroll behavior.
7. Avoid leaving invisible overlays blocking interaction.
8. Respect reduced-motion preferences.
9. Avoid creating a noticeable delay in navigation.
10. Work consistently across desktop and mobile.

Target an elegant short transition, generally around 350–600ms depending on the design and implementation.

Do not introduce artificial waiting periods after a route is already ready.

The purpose is a polished visual transition, not a simulated slow loading process.

---

# 13. FRONT-END ARCHITECTURE AND CODE QUALITY

Improve the existing project architecture and code quality substantially.

Do not turn the project into an unnecessarily complicated enterprise system.

The architecture should be maintainable, understandable, strongly typed, and scalable.

## Routing

Implement a proper multi-page routing system using React Router or an equally justified existing solution.

Use:

- Shared application layout.
- Persistent site header and footer where appropriate.
- Dedicated page components.
- Reusable service templates.
- Reusable article templates.
- Structured route definitions.
- Proper 404 handling.
- Route-level code splitting where useful.
- Correct scroll restoration.
- Page transition management.

Nested routes and direct page refreshes must work correctly on the production deployment.

## Suggested folder organization

Use the following as an architectural reference, adapting it to the existing project where necessary:

```text
src/
├── app/
│   ├── App.tsx
│   ├── router.tsx
│   └── providers/
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── models/
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   ├── forms/
│   ├── feedback/
│   └── shared/
│
├── features/
│   ├── services/
│   ├── insights/
│   ├── team/
│   ├── consultation/
│   └── navigation/
│
├── layouts/
│   ├── MainLayout.tsx
│   └── ArticleLayout.tsx
│
├── pages/
│   ├── Home/
│   ├── About/
│   ├── Services/
│   ├── Approach/
│   ├── Team/
│   ├── Insights/
│   ├── Contact/
│   ├── Consultation/
│   ├── FAQ/
│   ├── Privacy/
│   └── NotFound/
│
├── data/
│   ├── navigation.ts
│   ├── services.ts
│   ├── team.ts
│   ├── articles.ts
│   └── faqs.ts
│
├── hooks/
├── lib/
├── types/
├── styles/
└── main.tsx
```

Do not create empty folders or unnecessary abstractions just to match this example.

Use the existing project conventions where they are sound.

## Component quality

Components should:

- Have one clear responsibility.
- Use explicit TypeScript types.
- Avoid unnecessary complexity.
- Be reusable where reuse is justified.
- Be accessible.
- Handle loading and error states where needed.
- Avoid giant files.
- Avoid duplicated styling and logic.

Avoid:

- `any` without a strong justification.
- Unnecessary state.
- Excessive prop drilling.
- Unnecessary dependency additions.
- Overly generic abstractions.
- Dead code.
- Unused dependencies.
- Repeated components with slightly different names.
- Large monolithic JSX files.
- Hardcoded content scattered throughout components.

Keep content in appropriate typed data modules.

Create reusable templates for services and articles.

Use stable keys and predictable data models.

Add error boundaries where they provide meaningful protection.

## External library discovery, evaluation, and dependency governance

Do not restrict the project to the dependencies already installed, but do not install a library simply because it is popular, visually impressive, or listed below. You are authorized to research and evaluate suitable external libraries when they solve a genuine project need.

Before adopting any dependency:

1. Inspect the current dependency tree and identify whether an installed package already provides the required capability.
2. Review the candidate's official documentation.
3. Verify compatibility with React 19, TypeScript, Vite, the project’s plain-CSS architecture, and the existing build configuration.
4. Evaluate package size, runtime overhead, maintenance activity, and license.
5. Consider whether a small native implementation would be more appropriate.
6. Determine whether the dependency or its expensive features can be loaded only when needed.
7. Record the reason for adoption or rejection in `docs/DEPENDENCY_DECISIONS.md`.

Prefer mature, maintained, lightweight, tree-shakable solutions. Use only the modules or primitives required. Do not introduce a large UI framework to obtain a small number of components. Do not create overlapping systems that duplicate capabilities already provided by the existing stack.

### Preferred candidates to evaluate

These are candidates for evaluation, not packages that must all be installed. Adopt each only when it provides a clear benefit and passes the compatibility and performance checks above.

**A. Lucide React — icon system**

Evaluate `lucide-react` as the primary icon package if the project does not already have a suitable, consistent icon system. Import individual icons rather than entire collections. Maintain consistent outline style, sizing, stroke width, accessibility, and use across navigation, practice areas, articles, and controls. Do not use icons as random decoration.

**B. Radix UI — accessible interaction primitives**

Evaluate only the specific Radix UI primitives needed for complex interactions such as dialogs, dropdown menus, accordions, popovers, select menus, and accessible navigation. Do not introduce a complete generic component system that conflicts with MITHAQ's design language. Style adopted primitives using the project’s plain CSS design tokens and component styles. Preserve full control over appearance, spacing, transitions, focus states, and responsive behavior.

**C. Native CSS — editorial content and component styling**

Prefer the existing plain-CSS architecture for article typography and component presentation. Build an intentional Arabic editorial style system using CSS variables, semantic selectors, suitable line lengths, fluid type sizing, carefully tuned line-height, heading rhythm, list and quote styling, table treatment, link states, and mobile rules. Do not add a typography framework solely to style the Insights section.

**D. Motion for React — optional component-level animation**

Evaluate Motion for React (the current Motion library) only when a specific React UI transition cannot be implemented cleanly with the existing GSAP infrastructure or native CSS. Possible uses include lightweight UI state transitions, presence transitions, and selected component-level interactions. Keep GSAP responsible for advanced timeline orchestration, complex section animations, and scroll-based experiences. Do not introduce a second animation system without a clear division of responsibility. Use bundle-size optimization techniques if adopted.

**E. Lenis — optional smooth scrolling**

Do not install Lenis automatically. Native browser scrolling remains the default unless smooth scrolling provides a clear, tested improvement. If Lenis is adopted, integrate it correctly with GSAP ScrollTrigger, avoid competing animation loops, clean up its lifecycle, respect reduced-motion preferences, and test touch scrolling, browser navigation, anchor links, fixed elements, and modals. Never sacrifice natural mobile scrolling for a decorative effect.

**F. Sharp — development-time image processing**

Evaluate Sharp as a development-time or asset-processing dependency when it materially helps generate optimized local image assets and responsive AVIF/WebP variants. Do not run image processing in the browser or add runtime image-processing overhead. The deployed site should serve optimized local assets.

### Additional specialized tools

You may investigate other focused solutions for typography, responsive images, accessible interactions, page transitions, SVG effects, image processing, layout, or animation utilities when an actual requirement justifies them. Apply the same compatibility, maintenance, license, bundle-size, and architectural evaluation. Never add a decorative dependency without a measurable or clearly demonstrable benefit.

### Dependency decision register

Create `docs/DEPENDENCY_DECISIONS.md`. For every adopted external dependency, record:

- Package name and installed version.
- Purpose and where it is used.
- Why it was selected and why an existing solution was insufficient.
- Bundle-size or runtime considerations.
- Loading strategy.
- Official documentation URL.
- License.
- Known limitations.

Also record the relevant candidates that were evaluated but intentionally rejected, with the reason for rejection. Keep this register current so future development sessions do not introduce unnecessary or duplicate dependencies.

---

# 14. PLAIN CSS STYLING ARCHITECTURE — NON-NEGOTIABLE

The project must use **ordinary, maintainable CSS** as its styling system. Do not migrate the project to Tailwind CSS. Do not install, configure, introduce, or use Tailwind CSS, `@tailwindcss/*` packages, utility-first CSS frameworks, or a replacement utility framework.

This is an explicit project requirement. Any legacy mention of Tailwind, utility classes, or Tailwind migration in existing project files must not be treated as permission to adopt that approach.

## CSS architecture requirements

Use standard `.css` files, CSS3, CSS custom properties, media queries, and well-structured selectors. Keep the styling architecture modular and maintainable without turning it into a single enormous stylesheet or creating a separate stylesheet for every trivial element. Adapt the exact file organization to the existing repository after inspecting it.

A suitable structure may include:

- `tokens.css` for brand colors, typography values, spacing scales, radii, shadows, layering, and other design tokens.
- `reset.css` or `base.css` for normalization, global defaults, and document-level behavior.
- `typography.css` for Arabic type rules and editorial reading styles.
- `layout.css` for shared containers, grids, wrappers, and page-level structural primitives.
- Component-level CSS files for shared interface elements.
- Page- or feature-level CSS files for distinctive page compositions.
- A small number of specialized CSS files for complex visual effects when justified.

This is a reference, not a requirement to create empty files or unnecessary layers. Follow existing sound conventions where possible.

## Design tokens and consistency

- Extract the actual MITHAQ colors, typography, spacing, borders, radii, shadows, and motion values from the existing identity and refined visual direction before defining or changing tokens.
- Centralize reusable values with CSS custom properties (for example, `:root` tokens and any justified theme scopes).
- Preserve the established deep navy foundation, gold accents, premium editorial character, architectural visual language, and all detailed art-direction requirements in this prompt.
- Use a consistent naming convention such as BEM or a similarly clear component-scoped convention. Avoid generic selectors that unintentionally affect unrelated routes.
- Keep responsive behavior in deliberate media queries and use `clamp()`, grid, flexbox, logical properties, and modern CSS features where appropriate and supported.
- Prefer logical properties such as `margin-inline`, `padding-inline`, `inset-inline`, and `text-align: start` where they improve RTL correctness and maintainability.

## Component and page styling

Use CSS to implement:

- Layout, grid, and flexbox.
- Spacing and sizing.
- Typography and hierarchy.
- Color, backgrounds, borders, and shadows.
- Responsive layouts.
- Hover, focus, active, disabled, and validation states.
- Transitions and ordinary interface animations.
- Complex brand treatments, masks, clipping, pseudo-elements, and layered compositions where appropriate.

Keep component styles scoped and predictable. Reuse shared tokens and patterns, but do not force visually distinct sections into the same generic component styling.

## CSS quality and maintainability

- Do not place all page and component styles into one monolithic CSS file.
- Do not create hundreds of tiny stylesheets without a clear reason.
- Avoid excessive selector specificity, deeply nested selectors, fragile DOM-dependent selectors, and widespread `!important`.
- Avoid arbitrary inline styles for ordinary layout and presentation. Use inline style values only when a genuinely dynamic value must be supplied at runtime and explain the reason in code where needed.
- Avoid duplicating the same declarations across components; extract shared variables or reusable classes when justified.
- Remove obsolete styles only after checking whether other pages, components, or states depend on them.
- Keep CSS readable, logically grouped, and easy for a future developer to maintain.
- Do not introduce CSS-in-JS or a new styling dependency unless a specific technical requirement justifies it and the dependency review approves it.

## Existing styling dependencies

Inspect the current project before changing dependencies. If Tailwind or another utility-first framework is already present, do not preserve it as the primary styling system. First identify every real usage and migrate those styles to plain CSS without changing the approved visual appearance or breaking responsive behavior. Remove the framework and its plugins only after confirming they are no longer required by the source code or build configuration, and update the lockfile safely. Do not remove packages or rewrite configuration blindly.

The finished project must have a coherent, CSS-first architecture with no Tailwind runtime, build integration, directives, utility-class dependency, or Tailwind plugin.

# 15. LOADING, ERROR, AND INTERACTION STATES

Every interactive element must have a defined behavior.

Review:

- Buttons.
- Navigation links.
- Dropdowns.
- Mobile menu.
- Service interactions.
- Article navigation.
- Consultation form.
- Contact form.
- Modals.
- FAQ accordions.
- Search and filtering.
- Page transitions.

Never leave a visual control without a working action.

Do not present a fake success state that suggests data was transmitted to a real business.

Forms must have:

- Proper labels.
- Validation.
- Clear errors.
- Focus states.
- Success feedback.
- Demo disclosure.
- Keyboard accessibility.

If there is no actual backend, make that limitation explicit.

---

# 16. SEO AND DISCOVERABILITY

Build a proper SEO foundation for an Arabic corporate website.

Each public route must have appropriate metadata.

Implement:

- Unique Arabic page titles.
- Unique meta descriptions.
- Correct canonical URLs.
- Open Graph metadata.
- Appropriate social sharing imagery.
- Sitemap.
- Robots configuration.
- Proper heading hierarchy.
- Descriptive internal links.
- Meaningful image alt text.
- Structured data only where factually justified.
- Semantic HTML.

Articles must have their own URLs and metadata.

Do not rely on rendering all content inside modal windows.

Do not create misleading structured data claiming that the fictional organization is an established licensed firm with real contact details.

For the demo, avoid publishing invented physical addresses, phone numbers, credentials, or ratings as factual business information.

The website should be structured so that it can later be adapted into a real firm's digital presence with verified information.

---

# 17. PERFORMANCE ENGINEERING

The site must feel fast and responsive.

A visually sophisticated website that loads slowly is not acceptable.

Pay particular attention to Three.js, animation, fonts, and images.

## Required improvements

- Lazy-load expensive scenes.
- Lazy-load below-the-fold assets.
- Split code where appropriate.
- Avoid loading all routes unnecessarily.
- Optimize image assets.
- Optimize fonts.
- Limit unnecessary JavaScript.
- Avoid unnecessary re-renders.
- Pause inactive animations.
- Dispose of WebGL resources.
- Prevent layout shifts.
- Avoid long main-thread tasks where possible.
- Avoid unnecessary third-party requests.
- Remove unused packages and assets when safe.

Use suitable loading strategies for large components.

Prioritize the initial visible content.

Do not make the first screen wait for unnecessary 3D or below-the-fold resources.

Measure performance rather than guessing.

Where testing tools are available, use Lighthouse or equivalent mobile performance auditing.

Treat Core Web Vitals and a high mobile Lighthouse score as meaningful quality targets.

Do not fabricate performance scores or claim measurements that were not performed.

## Performance-first dependency and bundle management

Measure the current production build before introducing substantial new dependencies whenever the project environment permits. Record a baseline, then compare it with the final build after implementation. Review:

- Initial JavaScript payload.
- Total JavaScript per route or route chunk.
- CSS payload.
- Largest image sizes.
- Route loading behavior.
- Number of network requests.
- Main-thread work.
- Rendering behavior.
- Mobile performance.

Apply the following practices:

**Bundle management**

- Use tree-shaking effectively and import only required modules.
- Use dynamic imports for expensive features.
- Use route-level code splitting where appropriate.
- Separate heavy Three.js scenes into suitable chunks.
- Avoid loading unnecessary GSAP plugins.
- Inspect the actual production bundle.
- Remove unused dependencies and avoid duplicated packages where safe.
- Do not substantially increase the initial JavaScript payload without a documented technical justification.

**Rendering optimization**

- Avoid unnecessary component re-renders.
- Use memoization only when it provides a measurable benefit.
- Keep animation calculations efficient.
- Avoid animations that trigger expensive layout work.
- Prefer `transform` and `opacity` for ordinary UI motion where appropriate.
- Avoid unnecessary scroll listeners.
- Clean up observers, event listeners, timers, animation instances, and rendering loops.

**Asset optimization**

- Use WebP and AVIF where appropriate.
- Generate responsive image variants and serve suitable sizes.
- Avoid oversized background images.
- Reserve image dimensions to prevent layout shifts.
- Lazy-load appropriate assets and prioritize only critical above-the-fold resources.
- Self-host appropriate font files when practical.
- Avoid unnecessary third-party runtime requests.

**Mobile-specific optimization**

- Reduce expensive animations on weaker devices.
- Use lower-cost 3D configurations where required.
- Avoid multiple simultaneously active scenes.
- Avoid excessive parallax.
- Reduce unnecessary JavaScript execution.
- Maintain smooth native scrolling and responsive controls.
- Preserve visual quality through considered alternative compositions rather than indiscriminately removing all effects.

## Performance budgets and measurement targets

Where the relevant field measurements are available, aim for the following Core Web Vitals good thresholds:

- LCP: 2.5 seconds or less.
- INP: 200 milliseconds or less.
- CLS: 0.1 or less.

Aim for a strong mobile Lighthouse Performance score, ideally 90 or above, where testing conditions make the result meaningful. These are targets, not guaranteed outcomes. Record the device, network, build, and testing conditions. If a target is missed, identify the largest bottleneck and prioritize evidence-based improvements. Never falsify measurements or introduce artificial delays to manipulate scores.

After significant dependency or visual changes, compare the production bundle and performance against the recorded baseline. Report actual measurements and any remaining gaps.

---

# 18. ACCESSIBILITY

Implement accessible behavior throughout the site.

Pay attention to:

- Semantic HTML.
- Proper heading hierarchy.
- Button versus link semantics.
- Accessible labels.
- Image alt text.
- Keyboard navigation.
- Focus indicators.
- Focus trapping in modals.
- Escape-key handling.
- Sufficient color contrast.
- Form error announcements.
- Reduced-motion preferences.
- Touch target sizes.
- Accessible menus and accordions.

Do not sacrifice accessibility for visual effects.

---

# 19. RESPONSIBLE PROJECT DISCLOSURE AND DATA

This is a fictional portfolio concept.

Maintain a realistic institutional presentation, but do not create deceptive representations.

Any invented company data, contact information, team profiles, legal credentials, testimonials, or business history must be treated appropriately as fictional demonstration content.

The project must not collect real visitor information.

Do not connect demo forms to third-party email services, CRM systems, or external endpoints without an explicitly configured and authorized backend.

Do not add secrets or real personal information to the repository.

Add an appropriate `.env.example` only if environment variables are actually required.

The project's public identity must remain independent of the developer's personal identity.

---

# 20. README AND PROJECT DOCUMENTATION

Replace the outdated README with a professional project README that reflects the new architecture and identity.

Write the README in clear, professional Arabic.

It should include:

1. Project overview.
2. MITHAQ concept and purpose.
3. Main website features.
4. Technology stack.
5. Architecture overview.
6. Complete sitemap.
7. Folder structure.
8. Installation instructions.
9. Development commands.
10. Build commands.
11. Testing instructions.
12. Asset and typography information.
13. Plain CSS architecture, design tokens, and responsive styling details.
14. Three.js and GSAP implementation overview.
15. SEO implementation.
16. Responsive design approach.
17. Deployment instructions for Vercel.
18. Required environment variables, if any.
19. Demo and fictional-content disclosure.
20. Known limitations, if any.

Update all old project references, URLs, repository names, and technology descriptions.

Do not leave references to an unrelated previous project.

Also retain the master prompt and implementation status documents required in Section 2. Create and maintain `docs/DEPENDENCY_DECISIONS.md` as specified in Section 12, including adopted and rejected library candidates.

---

# 21. DEPLOYMENT READINESS

The website must be ready for deployment to its existing hosting environment.

Do not deploy or overwrite the live production site automatically unless explicitly authorized.

Prepare the project for a clean Vercel deployment.

Verify:

- Correct build configuration.
- Correct SPA routing behavior.
- Direct access to nested routes.
- Page refresh on nested routes.
- Correct asset paths.
- No broken asset references.
- No development-only functionality.
- No leaked environment variables.
- No production console errors.
- Valid production build.

Add or adjust `vercel.json` only when necessary.

Do not introduce unnecessary deployment configuration that conflicts with Vercel's existing framework detection.

---

# 22. MANDATORY TESTING AND QUALITY ASSURANCE

Do not declare the project complete merely because the development server starts.

Perform actual testing.

## A. Build and code checks

Run the relevant available commands, including:

- TypeScript validation.
- Production build.
- Linting.
- Existing automated tests.

Use the project's actual package manager based on its lockfile.

Resolve all relevant errors.

Do not suppress errors simply to achieve a successful build.

## B. Route testing

Visit every route directly.

Test:

- Homepage.
- About.
- Services directory.
- All six service pages.
- Approach.
- Team.
- Insights directory.
- Each sample article.
- Contact.
- Consultation.
- FAQ.
- Privacy.
- 404.

Test both internal navigation and direct URL access.

Test refresh on nested routes.

## C. Interaction testing

Test:

- Desktop navigation.
- Mobile navigation.
- Dropdown menus.
- Route transitions.
- Back and Forward navigation.
- Forms and validation.
- FAQ interactions.
- Article navigation.
- Service navigation.
- Modals.
- CTA buttons.
- External links.
- Keyboard interaction.

## D. Responsive testing

Visually inspect the required viewport sizes.

Pay particular attention to:

- Arabic text wrapping.
- Heading overflow.
- Mobile menu.
- Section composition.
- Image cropping.
- Card dimensions.
- 3D scenes.
- Animation timing.
- Footer layout.
- Form controls.
- Horizontal scrolling.

## E. Browser and runtime testing

Where browser testing is available:

- Inspect the browser console.
- Inspect network failures.
- Look for missing assets.
- Check rendering issues.
- Check hydration or runtime errors if applicable.
- Inspect performance behavior.
- Verify page transitions.

Fix errors rather than merely reporting them.

## F. Verification after dependency integration

Whenever an external library is adopted:

1. Verify successful installation and a healthy dependency tree.
2. Run TypeScript validation, linting, and the production build.
3. Test every route affected by the integration.
4. Test the new interactive components, including keyboard and mobile touch behavior.
5. Inspect browser console errors and verify animation/resource cleanup.
6. Review the production bundle output.
7. Compare performance with the original baseline where measurements are available.
8. Update `docs/DEPENDENCY_DECISIONS.md` and the implementation status.

Do not leave partially integrated libraries, unused dependencies, or unverified interaction code. Do not report an improvement without testing it.

## G. Final quality requirements

The final site must have:

- No TypeScript build errors.
- No production build errors.
- No broken internal routes.
- No dead internal links.
- No missing images.
- No unusable mobile interactions.
- No obvious horizontal overflow.
- No deceptive success messages.
- No accidental blank pages.
- No unhandled runtime errors.
- No major unresolved accessibility problems.

If a test cannot be performed because the required tool or environment is unavailable, explicitly document that limitation. Never claim a test was passed when it was not performed.

---

# 23. IMPLEMENTATION WORKFLOW

Execute the work in the following phases. Each phase must end with a concrete verification checkpoint and an update to `docs/IMPLEMENTATION_STATUS.md`. Do not treat a phase as complete merely because its files have been created. Resolve material defects before proceeding. If the available execution context or tools prevent full completion, document the exact stopping point, verified results, unresolved issues, and the next actionable steps without claiming the whole project is finished.

## Phase 01 — Audit and Project Preservation

- Inspect the full project.
- Save this prompt to the required documentation path.
- Create the implementation status file.
- Inspect Git state.
- Review existing technical and visual foundations.
- Identify reusable elements and technical debt.

## Phase 02 — Architecture and Design System

- Confirm the complete sitemap.
- Define route architecture.
- Extract current brand tokens.
- Define Arabic typography.
- Establish the plain CSS architecture and reusable design tokens.
- Define shared layout and component conventions.
- Evaluate relevant third-party libraries against existing capabilities, compatibility, maintenance, license, and performance.
- Record adopted and rejected dependency decisions.

## Phase 03 — Plain CSS Architecture and Styling Foundation

- Confirm that the styling system uses ordinary CSS only.
- Establish or refine CSS custom properties and brand design tokens.
- Organize global, typography, shared component, and page-level styles into a maintainable structure.
- Migrate any legacy utility-framework styling to plain CSS only where present, preserving the approved visual appearance and responsive behavior.
- Remove obsolete framework configuration and dependencies only after verifying that they are unused.
- Consolidate duplicated or conflicting CSS without flattening the design into generic components.
- Verify that existing useful interactions and visual effects remain intact.

## Phase 04 — Multi-Page Implementation

Build the complete route structure.

Implement the homepage, institutional pages, service directory, individual service pages, team, articles, contact, consultation, FAQ, privacy, and 404.

Populate all pages with their actual content.

Do not leave placeholder text or empty sections.

## Phase 05 — Visual Experience

- Refine the brand system.
- Improve individual page compositions.
- Add carefully selected images and icons.
- Enhance selected 3D scenes.
- Improve GSAP interactions and responsive animation behavior.
- Refine retained Three.js scenes through deliberate lighting, materials, camera composition, and rendering optimization.
- Integrate only the external libraries that passed the dependency evaluation.
- Implement the branded page transition.

## Phase 06 — Mobile-First Optimization

Review and optimize every route on mobile.

Build appropriate mobile-specific layouts and motion behavior.

Do not rely on responsive CSS classes or media-query rules without visually inspecting the actual rendered layouts.

## Phase 07 — Technical Optimization

- Performance.
- SEO.
- Accessibility.
- Code quality.
- Asset optimization.
- Routing stability.
- Error handling.
- Production-bundle review and comparison with the recorded baseline.
- Core Web Vitals and mobile Lighthouse measurement where tooling is available.
- Dependency-tree cleanup and review.

## Phase 08 — Testing and Finalization

- Run build and validation.
- Test every route.
- Test every important interaction.
- Review mobile layouts.
- Fix discovered problems.
- Update README.
- Update the implementation log.
- Confirm deployment readiness.

Do not stop after completing only the first few phases.

The full scope is the requested deliverable.

---

# 24. DEFINITION OF DONE

The project is complete only when all of the following conditions are satisfied.

### Website and Design

- [ ] The website at the supplied target URL has been used as the deployed reference, and the accessible local project has been inspected as the implementation source.
- [ ] The website is a complete multi-page institutional experience.
- [ ] The original MITHAQ visual identity is preserved and refined.
- [ ] The homepage has been re-architected based on a documented content audit and is not a lightly rearranged copy of the old landing page.
- [ ] Existing homepage sections have been intentionally retained, rewritten, relocated, or removed with documented rationale.
- [ ] Every major service has a dedicated page.
- [ ] Institutional pages have differentiated content.
- [ ] The team page is implemented responsibly.
- [ ] Legal Insights includes individual article pages.
- [ ] Contact and consultation experiences are complete.
- [ ] Each important section has a considered visual identity.
- [ ] Images and icons are used selectively.
- [ ] The site does not look like a generic template.

### Arabic and Content

- [ ] All public website content is Arabic.
- [ ] Arabic typography is professional and responsive.
- [ ] RTL behavior is correct.
- [ ] The copy is specialized and coherent.
- [ ] Service descriptions are differentiated.
- [ ] Exactly three articles exist, each with substantive original Arabic content and a distinct editorial purpose.
- [ ] No unsupported legal or institutional claims remain.
- [ ] Demo disclosures are clear but visually restrained.

### Technical

- [ ] React and TypeScript architecture is clean.
- [ ] Plain CSS is the only primary styling system; no Tailwind CSS or utility-first styling framework is used.
- [ ] CSS custom properties and a maintainable stylesheet organization support the design system.
- [ ] Obsolete, duplicated, or unused CSS and styling dependencies have been removed safely.
- [ ] Routing works correctly.
- [ ] Page transitions work.
- [ ] Existing useful Three.js scenes are preserved and improved.
- [ ] GSAP animations work without interfering with interaction.
- [ ] Mobile interactions work.
- [ ] WebGL resources are handled correctly.
- [ ] SEO foundations are implemented.
- [ ] Accessibility has been checked.
- [ ] Performance has been measured where possible.
- [ ] Heavy features and routes use appropriate loading and code-splitting strategies.
- [ ] Adopted libraries are justified, compatible, and documented.
- [ ] Unnecessary or duplicate dependencies have been avoided or removed.
- [ ] Performance has been compared with the initial baseline where measurement is available.

### Documentation and Delivery

- [ ] `docs/ANTIGRAVITY_MASTER_PROMPT.md` contains the complete prompt.
- [ ] `docs/IMPLEMENTATION_STATUS.md` is updated.
- [ ] `docs/ASSET_SOURCES.md` documents external asset sources where applicable.
- [ ] `docs/HOMEPAGE_CONTENT_AUDIT.md` records the keep, rewrite, move, and remove decisions for the former homepage sections.
- [ ] `docs/DEPENDENCY_DECISIONS.md` records adopted and rejected dependencies.
- [ ] README reflects the new project.
- [ ] Production build succeeds.
- [ ] All routes have been tested.
- [ ] No known critical issue is left unresolved.
- [ ] The project is prepared for direct Vercel deployment.

---

# 25. FINAL REPORT REQUIREMENTS

After implementation, provide a professional completion report.

It must contain:

1. Summary of the transformation.
2. Final sitemap.
3. Summary of the homepage content audit, the sections retained or rebuilt, the material relocated to internal pages, and the material removed.
4. Major design improvements.
5. Technical architecture changes.
6. Plain CSS architecture, design-token, and styling implementation summary.
7. Three.js and GSAP improvements.
8. Mobile-specific improvements.
9. Content and SEO improvements, including confirmation that exactly three articles were created.
10. New assets and image sources.
11. Important files created or modified.
12. Tests actually performed.
13. Actual production build result.
14. Actual limitations, if any.
15. Remaining tasks, if any.
16. Dependency decisions, adopted libraries, and intentionally rejected candidates.
17. Actual production-bundle and performance comparison against the baseline, where measured.
18. Confirmation that the master prompt, implementation status, homepage content audit, asset sources, and dependency decision documents have been saved.

Do not claim perfection without evidence.

Be specific about what was tested, what passed, and what could not be verified.

---

# FINAL EXECUTION INSTRUCTION

Treat MITHAQ as a serious digital product, not a quick AI-generated website.

Use your strongest design, engineering, and content capabilities.

Do not optimize for the number of components, the amount of animation, or the volume of generated code.

Optimize for the quality of the final experience.

The final website should make a prospective client or hiring manager recognize that its developer understands how to create a complete institutional digital presence, not just assemble landing-page sections.

Maintain the original brand personality while raising the quality of every layer of the project.

**Inspect carefully. Architect thoughtfully. Write meaningful content. Design intentionally. Engineer cleanly. Test thoroughly. Document everything.**

## Final implementation priority order

When trade-offs are necessary, prioritize in this order:

1. Visual quality and institutional credibility.
2. Excellent mobile experience.
3. Fast loading and responsive interactions.
4. Accessible and reliable functionality.
5. Clean architecture and maintainability.
6. A controlled, justified dependency footprint.

Do not confuse visual complexity with quality. MITHAQ should feel sophisticated because of design decisions, composition, typography, interactions, and engineering—not because it contains the largest number of packages or animations. Use libraries as tools, not as substitutes for thoughtful design. Never sacrifice performance for decoration.

**Begin implementation now and complete the full project scope.**
