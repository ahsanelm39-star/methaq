import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpLeft, Shield, ChevronDown } from 'lucide-react';
import { MAIN_NAV_ITEMS, INSTITUTIONAL_INFO } from '../../data/navigation';
import { PRACTICE_AREAS } from '../../data/services';
import { Button } from '../ui/Button';
import './Header.css';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }

  // Handle body scroll locking and Escape key for mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (mobileMenuOpen) setMobileMenuOpen(false);
        if (servicesDropdownOpen) setServicesDropdownOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen, servicesDropdownOpen]);

  return (
    <>
      <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" aria-label="مِيثاق للمحاماة والاستشارات القانونية — الصفحة الرئيسية">
            <div className="logo-symbol" aria-hidden="true">
              <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="8"
                  stroke="url(#headerLogoGoldGrad)"
                  strokeWidth="1"
                  fill="#0D1420"
                />
                <path
                  d="M12 30V13C12 10.79 13.79 9 16 9H24C26.21 9 28 10.79 28 13V30"
                  stroke="url(#headerLogoGoldGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="20" cy="18" r="3.5" fill="url(#headerLogoGoldGrad)" />
                <path d="M12 25H28" stroke="url(#headerLogoGoldGrad)" strokeWidth="1.5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="headerLogoGoldGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F5E8CE" />
                    <stop offset="0.5" stopColor="#D0B783" />
                    <stop offset="1" stopColor="#8C6F38" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="brand-titles">
              <span className="brand-name">{INSTITUTIONAL_INFO.name}</span>
              <span className="brand-subtitle">{INSTITUTIONAL_INFO.subtitle}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="التنقل الرئيسي">
            <ul className="nav-list">
              {MAIN_NAV_ITEMS.map((item) => {
                if (item.id === 'services') {
                  return (
                    <li
                      key={item.id}
                      className="nav-item-has-dropdown"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          `nav-link ${isActive || location.pathname.startsWith('/services') ? 'active' : ''}`
                        }
                      >
                        <span>{item.label}</span>
                        <ChevronDown size={14} className="dropdown-caret" />
                      </NavLink>

                      {servicesDropdownOpen && (
                        <div className="services-nav-dropdown" role="menu">
                          <div className="dropdown-header">
                            <span className="dropdown-title">مجالات الممارسة القانونية</span>
                            <Link to="/services" className="dropdown-all-link">
                              عرض كافة الخدمات
                            </Link>
                          </div>
                          <div className="dropdown-grid">
                            {PRACTICE_AREAS.map((service) => (
                              <Link
                                key={service.id}
                                to={`/services/${service.slug}`}
                                className="dropdown-service-item"
                                role="menuitem"
                              >
                                <span className="dropdown-service-num">{service.number}</span>
                                <div className="dropdown-service-text">
                                  <span className="dropdown-service-name">{service.title}</span>
                                  <span className="dropdown-service-sub">{service.subtitle}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.id}>
                    <NavLink
                      to={item.href}
                      end={item.href === '/'}
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action Header Button */}
          <div className="header-actions">
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenConsultation}
              className="consultation-btn header-consult-btn"
              aria-label="طلب استشارة قانونية"
            >
              <span>طلب استشارة</span>
              <ArrowUpLeft size={16} aria-hidden="true" />
            </Button>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة الرئيسية'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-drawer-panel">
          <div className="mobile-drawer-header">
            <div className="brand-logo">
              <span className="brand-name">{INSTITUTIONAL_INFO.name}</span>
              <span className="brand-subtitle">{INSTITUTIONAL_INFO.subtitle}</span>
            </div>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="إغلاق القائمة"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="mobile-nav" aria-label="التنقل عبر الجوال">
            <ul className="mobile-nav-list">
              {MAIN_NAV_ITEMS.map((item) => (
                <li key={item.id} className="mobile-nav-item">
                  <NavLink
                    to={item.href}
                    end={item.href === '/'}
                    className={({ isActive }) =>
                      `mobile-nav-link ${isActive ? 'active' : ''}`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
              <li className="mobile-nav-item">
                <NavLink
                  to="/consultation"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>طلب استشارة (النموذج الكامل)</span>
                </NavLink>
              </li>
              <li className="mobile-nav-item">
                <NavLink
                  to="/faq"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>الأسئلة الشائعة</span>
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="mobile-drawer-footer">
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
            >
              <span>طلب استشارة سريعة</span>
              <ArrowUpLeft size={18} />
            </Button>
            <div className="mobile-drawer-disclosure">
              <Shield size={14} />
              <span>مِيثاق — نموذج رقمي تجريبي مستقل</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
