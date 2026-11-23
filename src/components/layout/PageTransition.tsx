import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

export const PageTransition: React.FC = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const isFirstMount = useRef(true);
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    // Avoid triggering transition on initial first load
    if (isFirstMount.current) {
      isFirstMount.current = false;
      prevPathRef.current = location.pathname;
      return;
    }

    // If pathname didn't change (e.g. hash or search param change), don't trigger
    if (prevPathRef.current === location.pathname) {
      return;
    }

    prevPathRef.current = location.pathname;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const timerId = window.setTimeout(() => {
      setIsActive(true);
    }, 10);

    const closeTimer = window.setTimeout(() => {
      setIsActive(false);
    }, 450);

    return () => {
      clearTimeout(timerId);
      clearTimeout(closeTimer);
    };
  }, [location.pathname]);

  if (!isActive) return null;

  return (
    <div className={`mithaq-page-transition ${isActive ? 'active' : ''}`} aria-hidden="true">
      <div className="transition-curtain-top" />
      <div className="transition-curtain-bottom" />
      <div className="transition-content">
        <div className="transition-emblem-wrapper">
          <svg className="transition-emblem" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="8" width="48" height="48" rx="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
            <rect x="14" y="14" width="36" height="36" rx="2" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M22 42L32 18L42 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26 34H38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="32" cy="18" r="2.5" fill="currentColor" />
          </svg>
          <div className="transition-brand-name">مِيثاق</div>
          <div className="transition-tagline">المحاماة والاستشارات القانونية</div>
        </div>
        <div className="transition-gold-line" />
      </div>
    </div>
  );
};
