import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { SEOHead } from '../../components/ui/SEOHead';
import { Button } from '../../components/ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './NotFoundPage.css';

export const NotFoundPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  useScrollReveal({ containerRef: pageRef, animateHero: false });

  return (
    <div className="notfound-page-root" ref={pageRef}>
      <SEOHead
        title="الصفحة غير موجودة (404)"
        description="عذرًا، الصفحة التي تبحث عنها غير متوفرة أو تم نقلها."
      />

      <div className="container notfound-container">
        <div className="notfound-card mithaq-card text-center">
          <div className="notfound-num gold-gradient-text">404</div>
          <h1 className="notfound-title">الصفحة المطلوبة غير موجودة</h1>
          <p className="notfound-desc">
            قد يكون الرابط الذي اتبعته غير صحيح أو تم تحديث مسار الصفحة ضمن الهيكلية المؤسسية الجديدة لموقع مِيثاق.
          </p>

          <div className="notfound-actions">
            <Link to="/">
              <Button variant="primary" size="lg">
                <Home size={18} />
                <span>العودة للصفحة الرئيسية</span>
              </Button>
            </Link>

            <Link to="/services" className="notfound-link">
              <span>استكشف الخدمات القانونية</span>
              <ArrowLeft size={16} />
            </Link>
          </div>

          <div className="notfound-quick-links">
            <span className="quick-links-title">روابط سريعة للمنصة:</span>
            <div className="quick-links-row">
              <Link to="/about">عن مِيثاق</Link>
              <span className="dot">•</span>
              <Link to="/approach">منهجية العمل</Link>
              <span className="dot">•</span>
              <Link to="/team">فريق العمل</Link>
              <span className="dot">•</span>
              <Link to="/insights">الرؤى والمقالات</Link>
              <span className="dot">•</span>
              <Link to="/contact">تواصل معنا</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
