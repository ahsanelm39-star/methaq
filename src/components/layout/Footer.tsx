import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin, Clock, ShieldCheck, Scale, Phone } from 'lucide-react';
import {
  FOOTER_PRACTICE_LINKS,
  FOOTER_INSTITUTIONAL_LINKS,
  INSTITUTIONAL_INFO,
} from '../../data/navigation';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-top-accent" aria-hidden="true" />

      <div className="container footer-container">
        {/* Main Columns Grid */}
        <div className="footer-grid">
          {/* Col 1: Brand & Philosophy */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-header">
              <div className="footer-logo-symbol" aria-hidden="true">
                <Scale size={28} className="footer-scale-icon" />
              </div>
              <div className="footer-brand-titles">
                <span className="footer-brand-name">{INSTITUTIONAL_INFO.name}</span>
                <span className="footer-brand-subtitle">{INSTITUTIONAL_INFO.subtitle}</span>
              </div>
            </div>

            <p className="footer-brand-desc">{INSTITUTIONAL_INFO.description}</p>

            <div className="footer-demo-badge">
              <ShieldCheck size={18} className="trust-icon" />
              <span>{INSTITUTIONAL_INFO.disclaimer}</span>
            </div>
          </div>

          {/* Col 2: Institutional Pages */}
          <div className="footer-col">
            <h4 className="footer-col-title">عن الصرح القانوني</h4>
            <ul className="footer-links-list">
              {FOOTER_INSTITUTIONAL_LINKS.map((link) => (
                <li key={link.href} className="footer-link-item">
                  <Link to={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Practice Areas */}
          <div className="footer-col">
            <h4 className="footer-col-title">مجالات الممارسة</h4>
            <ul className="footer-links-list">
              {FOOTER_PRACTICE_LINKS.map((link) => (
                <li key={link.href} className="footer-link-item">
                  <Link to={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Engagement */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-col-title">التواصل والاستشارات</h4>
            <div className="footer-contact-details">
              <div className="footer-contact-row">
                <MapPin size={18} className="contact-icon" />
                <span className="contact-text">{INSTITUTIONAL_INFO.address}</span>
              </div>

              <div className="footer-contact-row">
                <Phone size={18} className="contact-icon" />
                <span className="contact-text" dir="ltr">{INSTITUTIONAL_INFO.phone}</span>
              </div>

              <div className="footer-contact-row">
                <Mail size={18} className="contact-icon" />
                <a href={`mailto:${INSTITUTIONAL_INFO.email}`} className="contact-link" dir="ltr">
                  {INSTITUTIONAL_INFO.email}
                </a>
              </div>

              <div className="footer-contact-row">
                <Clock size={18} className="contact-icon" />
                <span className="contact-text">{INSTITUTIONAL_INFO.workingHours}</span>
              </div>
            </div>

            <div className="footer-cta-box">
              <Link to="/consultation" className="footer-consult-btn">
                حجز موعد استشارة
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="footer-disclaimer-card">
          <p className="disclaimer-text">
            <strong>إشعار قانوني وتثقيفي:</strong> المحتوى المنشور عبر هذا الموقع مخصص للأغراض التعريفية والتثقيفية العامة، ولا يشكل مشورة أو تكليفًا قانونيًا ملزمًا. مِيثاق مشروع نموذج رقمي متكامل مستقل أُنشئ لأغراض العرض التوضيحي، والبيانات والتفاصيل الواردة فيه افتراضية.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">{INSTITUTIONAL_INFO.copyright}</p>
          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="العودة لأعلى الصفحة"
          >
            <span>العودة للأعلى</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
