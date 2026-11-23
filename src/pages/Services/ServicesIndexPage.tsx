import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  FileText,
  Scale,
  Building2,
  Users,
  ShieldCheck,
  ArrowLeft,
  ArrowUpLeft,
  CheckCircle,
} from 'lucide-react';
import { SEOHead } from '../../components/ui/SEOHead';
import { PRACTICE_AREAS } from '../../data/services';
import { Button } from '../../components/ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ServicesIndexPage.css';

interface ServicesIndexPageProps {
  onOpenConsultation: () => void;
}

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Briefcase':
      return <Briefcase size={26} />;
    case 'FileText':
      return <FileText size={26} />;
    case 'Scale':
      return <Scale size={26} />;
    case 'Building2':
      return <Building2 size={26} />;
    case 'Users':
      return <Users size={26} />;
    case 'ShieldCheck':
      return <ShieldCheck size={26} />;
    default:
      return <Scale size={26} />;
  }
};

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({
  onOpenConsultation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const pageRef = useRef<HTMLDivElement>(null);
  useScrollReveal({ containerRef: pageRef, animateHero: true });

  const filteredServices =
    activeCategory === 'all'
      ? PRACTICE_AREAS
      : PRACTICE_AREAS.filter((s) => s.id === activeCategory);

  return (
    <div className="services-index-page" ref={pageRef}>
      <SEOHead
        title="الخدمات والمجالات القانونية"
        description="دليل الممارسة القانونية لمِيثاق — منظومة متكاملة من الخدمات المتخصصة لقطاع الأعمال والشركات والأفراد."
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-breadcrumbs">
            <Link to="/">الرئيسية</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">الخدمات القانونية</span>
          </div>

          <div className="page-hero-badge">
            <Briefcase size={16} />
            <span>منظومة متكاملة من التخصصات</span>
          </div>

          <h1 className="page-hero-title">
            حلول قانونية واستشارية تغطي كامل دورة حياة الأعمال
          </h1>

          <p className="page-hero-lead">
            نقدم حزمة من مجالات الممارسة القانونية المترابطة التي تحمي المنشآت والشركاء والأصول في مختلف المحطات: بدءًا من التأسيس والصياغة التعاقدية، وصولاً إلى التمثيل القضائي وحماية الابتكارات التقنية.
          </p>
        </div>
      </section>

      {/* Services Directory Section */}
      <section className="page-section">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="services-filter-bar">
            <button
              type="button"
              className={`filter-pill ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              كافة التخصصات (6)
            </button>
            {PRACTICE_AREAS.map((area) => (
              <button
                key={area.id}
                type="button"
                className={`filter-pill ${activeCategory === area.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(area.id)}
              >
                {area.title}
              </button>
            ))}
          </div>

          {/* Detailed Services Grid */}
          <div className="services-directory-grid">
            {filteredServices.map((service) => (
              <div key={service.id} className="service-directory-card mithaq-card">
                {service.imageUrl && (
                  <div className="dir-card-image-wrap">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="dir-card-image"
                      loading="lazy"
                      width="600"
                      height="240"
                    />
                    <div className="dir-card-image-overlay" />
                    <span className="dir-card-num-badge">{service.number}</span>
                  </div>
                )}
                <div className="dir-card-header">
                  <div className="dir-icon-wrap">
                    {getServiceIcon(service.icon)}
                  </div>
                  {!service.imageUrl && <span className="dir-num">{service.number}</span>}
                </div>

                <div className="dir-card-body">
                  <h2 className="dir-title">
                    <Link to={`/services/${service.slug}`}>{service.title}</Link>
                  </h2>
                  <p className="dir-subtitle">{service.subtitle}</p>
                  <p className="dir-desc">{service.fullDesc}</p>

                  <div className="dir-subservices-block">
                    <h4 className="dir-subservices-heading">أبرز المسارات الفرعية:</h4>
                    <div className="dir-subservices-list">
                      {service.subServices.map((sub, idx) => (
                        <div key={idx} className="dir-sub-item">
                          <CheckCircle size={15} className="sub-icon" />
                          <div>
                            <strong className="sub-title">{sub.title}: </strong>
                            <span className="sub-text">{sub.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="dir-card-footer">
                  <Link to={`/services/${service.slug}`} className="dir-view-btn">
                    <span>عرض التفاصيل الكاملة والمخاطر المعالجة</span>
                    <ArrowLeft size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="page-section services-cta-section">
        <div className="container">
          <div className="services-cta-card mithaq-card">
            <div className="services-cta-content">
              <h2 className="cta-heading">هل تبحث عن مشورة متخصصة في مسألة محددة؟</h2>
              <p className="cta-desc">
                يسعدنا مناقشة احتياجات منشأتكم وتحديد المسار القانوني الأنسب في جلسة استشارية أولية.
              </p>
            </div>
            <Button variant="primary" size="lg" onClick={onOpenConsultation}>
              <span>طلب استشارة الآن</span>
              <ArrowUpLeft size={18} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
