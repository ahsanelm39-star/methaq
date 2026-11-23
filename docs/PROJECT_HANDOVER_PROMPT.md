# MITHAQ — PROJECT HANDOVER & CONTINUATION PROMPT
## Verified Project Recovery, Safe Continuation, and Completion

**Purpose:** Transfer an ongoing MITHAQ implementation from one AI development agent to another when the previous agent reaches a usage limit, context limit, or session boundary.

**Published reference website:** https://methaq1.vercel.app/  
**Approved styling direction:** Ordinary, maintainable CSS — not Tailwind CSS.  
**Approved content constraint:** Exactly three substantive Arabic sample articles.  
**Primary objective:** Continue from the verified state of the existing project and complete it according to the latest approved MITHAQ Master Prompt.

---

# 0. HOW TO USE THIS HANDOVER PROMPT

This document is a continuation instruction, not a replacement for the latest approved MITHAQ Master Prompt. Use both documents together.

- The **MITHAQ Master Prompt** defines the intended final product, including its brand, information architecture, content, visual direction, technical requirements, and quality standards.
- This **Handover Prompt** defines how to recover the existing implementation, verify previous work, and continue safely without restarting or repeating completed tasks.

Use the latest approved version of `docs/ANTIGRAVITY_MASTER_PROMPT.md` as the product specification. Do not follow superseded requirements merely because they remain in old notes, comments, dependency configurations, or earlier AI-generated documentation.

When instructions conflict, follow the latest explicit user-approved project decisions and the latest Master Prompt. Treat `docs/IMPLEMENTATION_STATUS.md` as a progress record that must be verified, not as unquestionable truth. Treat source code and Git history as evidence of what exists, not as permission to preserve work that conflicts with approved requirements.

If the latest Master Prompt is unavailable, inspect the project documentation and any Master Prompt supplied with this handover. Do not invent missing requirements or make major architectural changes based on assumptions. Perform safe inspection and report the missing source of truth.

You are taking over an existing software development project that was previously being implemented by another AI development agent.

Your responsibility is to **continue the existing implementation from its actual current state**, not restart the project, rebuild it, or repeat completed work.

The project is MITHAQ, a sophisticated Arabic institutional website concept for a premium law firm.

The previous development agent may have completed some phases, partially completed others, or stopped in the middle of an implementation task due to context or usage limitations.

You must recover the project state accurately and continue from the exact point where the previous work stopped.

---

# 1. MOST IMPORTANT RULE: CONTINUATION, NOT RESTART

This is an existing project with potentially substantial completed work.

You are NOT authorized to treat it as a new project.

Do not:

- Rebuild the website from scratch.
- Replace existing working components without justification.
- Recreate pages that already exist and work.
- Repeat completed styling work or migrations without first verifying the current implementation.
- Replace an existing functioning routing system.
- Reinstall dependencies that are already correctly installed.
- Recreate the existing design system unnecessarily.
- Delete existing assets because you prefer another implementation.
- Replace established working Three.js scenes without a strong technical reason.
- Rewrite the entire application simply because you prefer a different architecture.
- Remove previous work to simplify your implementation.
- Reset Git history or discard existing changes.
- Run destructive Git commands.
- Overwrite existing documentation without reviewing it.

**Your primary objective is to preserve valid existing work and finish what remains.**

## Mandatory exception: re-evaluate the homepage

The existing homepage is not approved for preservation as-is. Its current structure, section order, content, hierarchy, and visual composition must be re-evaluated against the role of a strong institutional homepage. Keep only material that genuinely serves that role; rewrite or redesign what needs improvement; move useful material to the correct internal page; and remove material that has no meaningful role in the final information architecture.

Do not interpret the continuation rule as permission to leave the old homepage unchanged merely because it technically works. Reuse suitable components and assets where appropriate, but make the homepage decisions required by the latest Master Prompt. Document each section-level decision in `docs/HOMEPAGE_CONTENT_AUDIT.md`.

Any modification must be justified by an actual requirement, discovered defect, or measurable improvement.

---

# 2. RECOVER THE PREVIOUS AGENT'S WORK AND PROJECT CONTEXT

Before modifying any source files, inspect the current project thoroughly.

Start with the documentation directory.

The previous implementation instructions and latest approved scope require the following files to be maintained:

1. `docs/ANTIGRAVITY_MASTER_PROMPT.md`
2. `docs/IMPLEMENTATION_STATUS.md`
3. `docs/DEPENDENCY_DECISIONS.md`
4. `docs/ASSET_SOURCES.md`
5. `docs/HOMEPAGE_CONTENT_AUDIT.md`

Also maintain `README.md`. When practical, preserve this handover prompt in `docs/PROJECT_HANDOVER_PROMPT.md` for future continuation sessions.

Read all available documents carefully.

In particular:

### A. ANTIGRAVITY_MASTER_PROMPT.md

This contains the original project requirements and approved direction.

Use it as the primary specification for the intended final product.

Do not reinterpret or replace its objectives.

### B. IMPLEMENTATION_STATUS.md

This should contain information about:

- Completed implementation phases.
- Partially completed tasks.
- Remaining tasks.
- Existing technical decisions.
- Important modified files.
- Known defects.
- Testing results.
- The previous agent's stopping point.
- Recommended next actions.

Use this document to understand the previous agent's progress.

However, do not blindly trust its completion claims.

Verify them against the actual source code and the working application.

### C. DEPENDENCY_DECISIONS.md

Review the libraries previously evaluated, installed, or rejected.

Do not introduce duplicate libraries or repeat dependency evaluations unnecessarily.

### D. ASSET_SOURCES.md

Review the visual assets, image sources, licensing notes, and previously selected resources.

Preserve useful assets.

## Important fallback

If any of these documents do not exist, do not assume that the entire project has not been implemented.

Inspect the current codebase and recover the actual state from:

- Source files.
- Git history and current changes.
- package.json.
- Existing routes.
- Existing pages.
- Existing components.
- Existing assets.
- Existing styles.
- Existing configuration.
- The deployed application if accessible.

Missing documentation is not permission to rebuild the project.

Create or repair the missing documentation based on verifiable project facts, then continue.

---

# 3. TARGET WEBSITE AND SOURCE-OF-TRUTH RULES

**Published website:** https://methaq1.vercel.app/

This is the exact MITHAQ website being transformed. Inspect it page by page as the reference for the currently deployed visual and content experience, including its navigation, content, layout, responsive behavior, and interactions. Do not treat it as a generic inspiration link.

Use the local repository as the source of truth for code, dependencies, files, and implementation history. Use the published website to compare the currently deployed experience with the local project. Use the latest Master Prompt to determine what the final product must satisfy.

If the deployed site and local project differ, document the differences before choosing a safe implementation path. Do not silently discard work from either source. Do not attempt to edit the live website through its public URL. Do not deploy or overwrite production unless explicitly authorized.

If the local repository is unavailable, do not claim that code changes have been made. State the limitation and complete only the inspection or analysis that can be performed reliably.

---

# 4. INSPECT THE ACTUAL PROJECT STATE

Perform a complete but non-destructive audit.

Inspect:

- Current Git branch.
- Git status.
- Uncommitted modifications.
- Existing changes and recent commits.
- Directory structure.
- package.json.
- Package lockfile.
- Installed dependencies.
- Vite configuration.
- React and TypeScript configuration.
- Existing styling integration and any legacy Tailwind configuration or usage, if present.
- Router implementation.
- Existing layouts.
- Existing pages.
- Existing reusable components.
- Existing data models.
- Existing CSS architecture and any legacy utility-class usage, if present.
- Three.js scenes.
- GSAP animations.
- Existing page transitions.
- Image assets and font files.
- SEO configuration.
- Vercel configuration.
- README.
- Documentation and status files.

Do not discard or overwrite uncommitted changes.

Do not reset Git or remove files without first understanding their purpose.

Identify what has actually been implemented, what works, what is incomplete, and what is broken.

---

# 5. ESTABLISH A VERIFIED PROJECT HANDOFF

Before proceeding, establish a clear distinction between:

### COMPLETED

Features that exist in the codebase and have been verified to work.

### PARTIALLY COMPLETED

Features that have been implemented but still need development, refinement, or testing.

### NOT STARTED

Requirements that have not yet been implemented.

### BROKEN OR REGRESSED

Features that previously worked or appear implemented but currently contain errors or incomplete behavior.

### UNVERIFIED

Features that exist but have not been tested adequately.

Do not classify a feature as complete merely because a component or route exists.

For each important item, verify its actual behavior.

Update `docs/IMPLEMENTATION_STATUS.md` with the recovered project state.

If useful, record the handoff findings in a dedicated section titled:

`PROJECT HANDOVER — NEW AGENT`

Include:

- Actual current project state.
- Last verified implementation phase.
- Current technical architecture.
- Current working features.
- Incomplete work.
- Discovered defects.
- Tests that have actually been performed.
- The exact next implementation task.

Keep existing historical progress information where useful.

Do not erase previous progress records.

---

# 6. UNDERSTAND THE FINAL PRODUCT

The project identity and approved direction remain unchanged.

MITHAQ is intended to become a premium, Arabic-only, RTL, multi-page institutional website for a sophisticated fictional law firm.

The final website must demonstrate professional capabilities in:

- Advanced Front-End Development.
- React and TypeScript.
- Ordinary, maintainable CSS.
- UI/UX Design.
- Corporate Website Architecture.
- Arabic Digital Experiences.
- Three.js.
- GSAP.
- Responsive Design.
- Performance Optimization.
- SEO.
- Accessibility.

The original brand identity must remain recognizable.

Preserve:

- MITHAQ branding.
- Existing logo.
- Deep navy foundation.
- Gold accents.
- Premium editorial and architectural direction.
- Meaningful existing visual assets.
- Useful existing 3D scenes and interactions.

The site must not become a generic legal template.

The primary objective is a complete digital institutional presence, not a landing page.

## Expected website architecture

Use the latest approved MITHAQ Master Prompt as the full source of truth.

The intended website architecture includes:

- Home.
- About MITHAQ.
- Legal Services.
- Individual Legal Practice pages.
- Legal Approach.
- Our Team.
- Legal Insights.
- Individual Article pages.
- Contact.
- Consultation.
- FAQ.
- Privacy.
- Not Found.

The approved initial legal practice areas are:

1. Corporate & Business Law.
2. Contracts & Agreements.
3. Litigation & Dispute Resolution.
4. Real Estate & Construction.
5. Employment & Labor.
6. Intellectual Property & Technology.

Do not recreate any of these pages if they already exist and work.

Complete missing pages and improve incomplete ones.

Maintain meaningful relationships between services, articles, and institutional content.

### Article-count requirement

The final Legal Insights section must contain **exactly three substantive Arabic sample articles**. Do not create additional placeholder, draft, duplicate, hidden, or demo articles. Do not leave more or fewer than three articles in the final content dataset, routes, or sitemap.

### Homepage requirement

The homepage must be re-evaluated and re-architected according to its institutional purpose. It must not be retained unchanged simply because it already exists or works. Keep, rewrite, redesign, relocate, or remove each existing section based on whether it supports the homepage or belongs on another page. Record these decisions in `docs/HOMEPAGE_CONTENT_AUDIT.md`.

---

# 7. PRESERVE THE APPROVED TECHNICAL DIRECTION

The intended technology foundation is:

- React 19.
- TypeScript.
- Vite.
- Ordinary, maintainable CSS.
- React Router or an already established equivalent.
- Three.js.
- GSAP.
- Lucide React where adopted.
- Other carefully selected dependencies only when justified.

The inherited project may contain a legacy Tailwind migration from an earlier instruction set. Treat it as inherited implementation to be assessed against the current approved CSS direction. Verify the actual implementation before changing anything.

### Ordinary CSS — mandatory approved direction

The final styling system must use ordinary, maintainable CSS. Do not install, configure, migrate to, or introduce Tailwind CSS or another utility-first styling framework. Do not add Tailwind plugins such as `@tailwindcss/typography`.

Use the existing CSS architecture where it is sound. Prefer a coherent system of CSS custom properties/design tokens, global foundations, scoped component styles, page-level stylesheets, responsive media queries, and CSS Modules only where they provide a clear maintainability benefit. Avoid monolithic stylesheets, duplicated declarations, fragile selectors, excessive `!important`, and unnecessary inline styling.

If the inherited project already contains Tailwind utilities or configuration from an earlier implementation, do not preserve them automatically. First assess the extent of their use, then plan a controlled, incremental conversion to ordinary CSS. Keep the project buildable during the conversion, verify each batch, and remove Tailwind dependencies/configuration only after all required usages have been safely removed. Document remaining legacy usage and progress in `docs/IMPLEMENTATION_STATUS.md`.

If the project already uses ordinary CSS correctly, preserve it and do not perform a needless styling rewrite.

### Three.js and GSAP

Preserve existing valuable scenes.

Improve incomplete functionality and discovered performance problems.

Do not replace working scenes simply because a different visual approach is available.

Avoid duplicate animation libraries.

Continue using the existing animation architecture unless there is a documented technical reason to change it.

### External dependencies

Review the current dependency tree and `docs/DEPENDENCY_DECISIONS.md`.

Do not reinstall existing packages unnecessarily.

Do not introduce packages that duplicate installed functionality.

Every new dependency must justify its cost.

---

# 8. CONTINUE USING THE LATEST MASTER SPECIFICATION

The latest approved MITHAQ Master Prompt contains the detailed requirements for:

- Visual identity.
- Arabic content.
- Legal terminology.
- Individual service pages.
- Article writing.
- Photography and imagery.
- Arabic typography.
- RTL layout.
- Mobile-first design.
- Desktop and mobile animation differences.
- Three.js optimization.
- GSAP.
- Branded page transitions.
- Ordinary CSS architecture and styling conventions.
- Code quality.
- SEO.
- Accessibility.
- Performance.
- README.
- Deployment.
- Testing.

You must read and follow the latest approved specification, including the homepage re-architecture, exactly three articles, and ordinary-CSS requirements.

Do not reduce the scope merely because another model is taking over.

If the previous agent made legitimate improvements or architectural decisions that are consistent with the latest approved objectives, preserve them.

The actual implemented project state takes precedence when determining what needs to be done, while the latest approved Master Prompt remains the source of truth for the final objectives.

If a previous implementation contradicts the original requirements, evaluate the issue and correct it carefully without damaging unrelated working functionality.

---

# 9. IMPLEMENTATION STRATEGY: RESUME FROM THE FIRST INCOMPLETE TASK

After the audit, do not spend the remaining context repeatedly describing what the project should become.

Start completing the actual remaining work.

Follow this sequence:

### Step 1 — Critical defects

Fix existing broken functionality, compilation errors, routing failures, and missing dependencies that prevent continued development.

### Step 2 — Incomplete architecture

Complete only the architectural tasks that remain unfinished.

Examples:

- Missing routes.
- Missing shared layouts.
- Incomplete data models.
- Incorrect route handling.
- Duplicated components.
- Incomplete page templates.

### Step 3 — Missing pages and content

Create only the missing pages.

Refine existing pages where they are incomplete or inconsistent.

Follow the original Arabic content strategy and legal-domain requirements.

### Step 4 — Visual and interaction development

Continue unfinished UI improvements, illustrations, selected animations, and branded transitions.

Preserve useful existing visual work.

### Step 5 — Mobile optimization

Inspect all existing pages on mobile.

Fix the actual discovered problems.

Do not redesign working mobile layouts unnecessarily.

### Step 6 — Performance and accessibility

Continue unfinished optimization tasks.

Measure actual results rather than assuming that the presence of optimization code proves good performance.

### Step 7 — Documentation and delivery

Update the README and project status.

Verify production readiness.

**The exact execution order must be adjusted to the actual project state. Do not execute a phase again simply because it appears in this list.**

---

# 10. WORK IN CONTROLLED IMPLEMENTATION BATCHES

Do not modify the entire project simultaneously.

Work in logical implementation batches.

For each batch:

1. Identify the exact unfinished task.
2. Inspect its related files.
3. Understand dependencies and component relationships.
4. Implement the required changes.
5. Run relevant checks.
6. Test the affected functionality.
7. Fix discovered regressions.
8. Record the results.
9. Update `docs/IMPLEMENTATION_STATUS.md`.

Avoid unnecessary modifications to unrelated files.

Preserve functional behavior unless the requirements explicitly require a change.

When refactoring is necessary, do it incrementally and verify the result.

Do not leave partially implemented features without recording their state.

---

# 11. MOBILE-FIRST VERIFICATION

Mobile is a critical part of this project.

Inspect existing mobile behavior before changing it.

Verify:

- RTL alignment.
- Arabic typography.
- Responsive headings.
- Navigation.
- Dropdown menus.
- Cards and lists.
- Images.
- Three.js fallbacks.
- GSAP behavior.
- Forms.
- Modals.
- Page transitions.
- Footer.
- Touch interactions.
- Scroll performance.
- Horizontal overflow.

Test at representative viewport sizes, including:

- 360px.
- 375px.
- 390px.
- 430px.
- 768px.
- 1024px.
- 1366px.
- 1440px.

Do not treat mobile as a scaled-down desktop.

However, do not replace existing mobile compositions unless actual inspection identifies a problem or the original design specification requires improvement.

---

# 12. TESTING: ESTABLISH A BASELINE, THEN VERIFY THE ENTIRE WEBSITE

Start by establishing the current build status.

Use the existing package manager and scripts.

Run appropriate checks:

- TypeScript.
- Lint.
- Production build.
- Automated tests, where available.

If the baseline already has errors:

1. Record them.
2. Determine whether they predate your changes.
3. Fix issues relevant to the current implementation.
4. Avoid attributing pre-existing defects to your own work.

After the remaining implementation is complete, verify the complete site.

Test every important route, including nested pages.

Test:

- Direct URL access.
- Page refresh.
- Internal navigation.
- Browser Back and Forward.
- Page transitions.
- Mobile navigation.
- Forms.
- Modals.
- Buttons and links.
- Article navigation.
- Service navigation.
- Responsive layouts.
- Browser console.
- Network failures.
- Production build.

Do not claim successful tests without performing them.

If a required visual or browser test is unavailable, document the limitation explicitly.

---

# 13. PROTECT THE FICTIONAL PROJECT'S CREDIBILITY

MITHAQ remains a fictional portfolio concept.

Maintain its convincing institutional presentation.

Never introduce unsupported claims about:

- Real lawyers.
- Legal registrations.
- Licenses.
- Actual office locations.
- Client relationships.
- Awards.
- Case outcomes.
- Years of institutional operation.
- Guaranteed legal results.

Use the appropriate fictional-project disclosure.

The website must remain independent from the developer's personal identity.

Do not add fabricated contact information or functional external integrations.

Preserve the demo nature of consultation and contact forms.

---

# 14. DOCUMENTATION AND SESSION CONTINUITY

The documentation is a critical handover mechanism between development agents.

Maintain the following files:

- `docs/ANTIGRAVITY_MASTER_PROMPT.md`
- `docs/IMPLEMENTATION_STATUS.md`
- `docs/DEPENDENCY_DECISIONS.md`
- `docs/ASSET_SOURCES.md`
- `docs/HOMEPAGE_CONTENT_AUDIT.md`
- `README.md`

If they already exist, update them rather than recreating them from scratch.

After every significant implementation batch:

- Mark completed tasks.
- Identify partially completed tasks.
- Add newly discovered issues.
- Record actual test results.
- List important modified files.
- Identify the exact next task.

Before stopping for any reason, leave a clear continuation record.

The next model must be able to understand the current state without repeating the entire audit or recreating previous work.

---

# 15. ABSOLUTE RESTRICTIONS

The following actions are prohibited unless a specific, documented technical necessity requires them:

- Installing, configuring, or using Tailwind CSS or another utility-first styling framework.
- Leaving inherited Tailwind styling in place without evaluating it against the approved plain-CSS requirement.
- Creating more or fewer than three final sample articles.
- Preserving the old homepage without the required content and structure re-evaluation.

- Restarting the application from scratch.
- Replacing the project framework.
- Rewriting all existing components.
- Removing existing visual identity.
- Deleting functional 3D scenes.
- Repeating completed styling work or preserving a legacy styling approach that conflicts with the approved CSS direction.
- Replacing the router without justification.
- Installing duplicate dependencies.
- Replacing useful local image assets.
- Resetting Git history.
- Discarding user modifications.
- Deploying to production without authorization.
- Claiming unperformed tests succeeded.
- Leaving broken functionality undocumented.

**Preservation of verified existing work is more important than personal implementation preferences.**

---

# 16. FIRST RESPONSE AND EXECUTION EXPECTATIONS

Begin by inspecting the current project and its documentation.

Do not immediately start modifying source code before understanding the project's state.

Your initial internal recovery process must establish:

1. What the previous agent completed.
2. What remains incomplete.
3. What currently works.
4. What is broken.
5. What must be fixed first.
6. Where implementation should resume.

Once the current state is understood:

- Update the implementation status.
- Resume the highest-priority incomplete task.
- Continue implementation without unnecessarily waiting for approval.
- Test changes as you make them.
- Preserve existing progress.
- Keep documentation updated.

Do not end your work after producing an audit or another plan.

The deliverable is a completed, verified continuation of the existing project.

---

# 17. FINAL HANDOVER REPORT

When the remaining project work is finished, provide:

1. The exact state inherited from the previous agent.
2. What was already complete and verified before you took over.
3. What was partially complete, broken, or unverified.
4. What you completed during this continuation.
5. What you repaired or refactored, and why.
6. Homepage audit outcome: sections retained, rewritten, relocated, and removed.
7. Confirmation that exactly three substantive Arabic sample articles remain.
8. CSS architecture status and confirmation that the approved direction is ordinary CSS, not Tailwind.
9. Which existing files you modified.
10. Which new files you created.
11. Which dependencies you added, removed, or rejected and why.
12. Tests actually performed and their results.
13. Actual production build result.
14. Actual mobile and responsive verification results.
15. Actual performance measurements, where available.
16. Known limitations or unverified requirements.
17. Remaining work, if any.
18. Confirmation that the Master Prompt, implementation status, homepage audit, asset sources, dependency decisions, and README are current.

Clearly distinguish inherited work from work performed during this continuation session.

Do not claim that the project is fully production-ready if critical requirements remain unverified or incomplete.

---

# FINAL COMMAND

You are not starting MITHAQ.

You are taking responsibility for an ongoing implementation.

Respect the previous agent's work.

Understand the existing code.

Preserve what is working.

Repair what is broken.

Complete what is unfinished.

Improve what genuinely needs improvement.

Do not repeat completed work.

Do not rebuild the project.

**Resume development from the actual current state and bring MITHAQ to the final quality defined by the latest approved MITHAQ Master Prompt.**