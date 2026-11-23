import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger once globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealOptions {
  /** Custom trigger element or container selector */
  containerRef?: React.RefObject<HTMLElement | null>;
  /** Whether to trigger hero immediate load animation */
  animateHero?: boolean;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const localRef = useRef<HTMLDivElement>(null);
  const rootRef = options.containerRef || localRef;

  useEffect(() => {
    const rootEl = rootRef.current;
    if (!rootEl) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Instantly make all reveal targets visible
      const elements = rootEl.querySelectorAll(
        '.reveal-on-scroll, .stagger-card, .section-header, .page-hero-inner, .home-hero-content'
      );
      elements.forEach((el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      });
      return;
    }

    const isMobile = window.innerWidth < 768;
    const yOffset = isMobile ? 18 : 32;
    const staggerTime = isMobile ? 0.08 : 0.12;
    const duration = isMobile ? 0.55 : 0.75;

    // GSAP context ensures all triggers and tweens are cleanly disposed on unmount
    const ctx = gsap.context(() => {
      // 1. Hero Load Entrance Animation (fires immediately on mount)
      if (options.animateHero !== false) {
        const heroBadge = rootEl.querySelector('.home-hero-badge, .page-hero-badge');
        const heroTitle = rootEl.querySelector('.home-hero-headline, .page-hero-title');
        const heroLead = rootEl.querySelector('.home-hero-lead, .page-hero-lead');
        const heroActions = rootEl.querySelector('.home-hero-actions, .page-hero-actions');
        const heroTrust = rootEl.querySelector('.home-hero-trust-indicators, .page-breadcrumbs');

        const heroTimeline = gsap.timeline({
          defaults: { ease: 'power3.out', duration },
        });

        if (heroBadge) {
          heroTimeline.fromTo(
            heroBadge,
            { opacity: 0, y: -12, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.5, clearProps: 'transform' }
          );
        }

        if (heroTitle) {
          heroTimeline.fromTo(
            heroTitle,
            { opacity: 0, y: yOffset },
            { opacity: 1, y: 0, duration: duration * 1.1, clearProps: 'transform' },
            heroBadge ? '-=0.3' : 0
          );
        }

        if (heroLead) {
          heroTimeline.fromTo(
            heroLead,
            { opacity: 0, y: yOffset * 0.7 },
            { opacity: 1, y: 0, duration, clearProps: 'transform' },
            '-=0.4'
          );
        }

        if (heroActions) {
          heroTimeline.fromTo(
            heroActions,
            { opacity: 0, y: yOffset * 0.5 },
            { opacity: 1, y: 0, duration: 0.5, clearProps: 'transform' },
            '-=0.35'
          );
        }

        if (heroTrust) {
          heroTimeline.fromTo(
            heroTrust,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.45, clearProps: 'transform' },
            '-=0.3'
          );
        }
      }

      // 2. Section Headers Entrance on Scroll
      const sectionHeaders = rootEl.querySelectorAll('.section-header');
      sectionHeaders.forEach((header) => {
        gsap.fromTo(
          header,
          { opacity: 0, y: yOffset },
          {
            opacity: 1,
            y: 0,
            duration,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: header,
              start: 'top 88%',
              once: true,
            },
            clearProps: 'transform',
          }
        );
      });

      // 3. Staggered Card Grids on Scroll (Services, Team, Pillars, Insights, FAQs, Steps)
      const gridContainers = rootEl.querySelectorAll(
        '.home-services-grid, .services-directory-grid, .home-pillars-grid, .about-pillars-grid, .team-members-grid, .home-insights-grid, .remaining-articles-grid, .challenges-grid, .methodology-steps-list, .faq-accordion'
      );

      gridContainers.forEach((grid) => {
        const cards = grid.children;
        if (!cards.length) return;

        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: yOffset,
            scale: isMobile ? 1 : 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration,
            stagger: staggerTime,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: grid,
              start: 'top 86%',
              once: true,
            },
            clearProps: 'transform',
          }
        );
      });

      // 4. Comparison Columns (About Page)
      const comparisonCols = rootEl.querySelectorAll('.comparison-col');
      if (comparisonCols.length >= 2) {
        gsap.fromTo(
          comparisonCols[0],
          { opacity: 0, x: isMobile ? 0 : 25, y: isMobile ? yOffset : 0 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: comparisonCols[0],
              start: 'top 85%',
              once: true,
            },
            clearProps: 'transform',
          }
        );
        gsap.fromTo(
          comparisonCols[1],
          { opacity: 0, x: isMobile ? 0 : -25, y: isMobile ? yOffset : 0 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: comparisonCols[1],
              start: 'top 85%',
              once: true,
            },
            clearProps: 'transform',
          }
        );
      }

      // 5. Featured Article Card / Major Cards
      const featureCards = rootEl.querySelectorAll(
        '.featured-article-card, .home-intro-card, .about-cta-card, .home-cta-card, .service-detail-feature-image-wrap, .article-detail-image-wrap'
      );
      featureCards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: yOffset, scale: isMobile ? 1 : 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: duration * 1.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              once: true,
            },
            clearProps: 'transform',
          }
        );
      });

      // 6. Generic Reveal Elements (.reveal-on-scroll)
      const revealItems = rootEl.querySelectorAll('.reveal-on-scroll');
      revealItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: yOffset },
          {
            opacity: 1,
            y: 0,
            duration,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 88%',
              once: true,
            },
            clearProps: 'transform',
          }
        );
      });
    }, rootRef);

    // Refresh ScrollTrigger after a short delay so dynamically measured DOM heights settle
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert(); // clean up all GSAP animations and triggers
    };
  }, [options.animateHero, rootRef]);

  return rootRef;
};
