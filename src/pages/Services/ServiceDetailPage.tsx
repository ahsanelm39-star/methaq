import React, { useState, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Briefcase,
  FileText,
  Scale,
  Building2,
  Users,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  ArrowUpLeft,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  FileSearch,
} from 'lucide-react';
import { SEOHead } from '../../components/ui/SEOHead';
import { PRACTICE_AREAS } from '../../data/services';
import { ARTICLES } from '../../data/articles';
import { Button } from '../../components/ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ServiceDetailPage.css';

interface ServiceDetailPageProps {
  onOpenConsultation: () => void;
}

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Briefcase':
      return <Briefcase size={28} />;
    case 'FileText':
      return <FileText size={28} />;
    case 'Scale':
      return <Scale size={28} />;
    case 'Building2':
      return <Building2 size={28} />;
    case 'Users':
      return <Users size={28} />;
    case 'ShieldCheck':
      return <ShieldCheck size={28} />;
    default:
      return <Scale size={28} />;
  }
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  onOpenConsultation,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const service = PRACTICE_AREAS.find((s) => s.slug === slug);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const pageRef = useRef<HTMLDivElement>(null);
  useScrollReveal({ containerRef: pageRef, animateHero: true });

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find related services
  const relatedServices = PRACTICE_AREAS.filter((s) =>
    service.relatedServiceSlugs.includes(s.slug)
  );

  // Find related articles
  const relatedArticles = ARTICLES.filter((a) =>
    service.relatedArticleSlugs.includes(a.slug)
  );

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="service-detail-page" ref={pageRef}>
      <SEOHead
        title={service.title}
        description={service.shortDesc}
      />

      {/* 1. SPECIALIZED HERO */}
      <section className="page-hero service-hero">
        <div className="container page-hero-inner">
          <div className="page-breadcrumbs">
            <Link to="/">الرئيسية</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/services">الخدمات القانونية</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{service.title}</span>
          </div>

          <div className="service-hero-header">
            <div className="service-hero-icon-wrap">
              {getServiceIcon(service.icon)}
            </div>
            <span className="service-hero-num">{service.number}</span>
          </div>

          <h1 className="page-hero-title">{service.title}</h1>
          <p className="service-hero-sub">{service.subtitle}</p>
          <p className="page-hero-lead">{service.heroExcerpt}</p>

          <div className="service-hero-actions">
            <Button variant="primary" size="lg" onClick={onOpenConsultation}>
              <span>طلب استشارة في {service.title}</span>
              <ArrowUpLeft size={18} />
            </Button>
            <Link to="/consultation" className="service-hero-form-link">
              <span>الانتقال لنموذج التكليف المفصل</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION & FULL CONTEXT */}
      <section className="page-section service-intro-section">
        <div className="container container-narrow">
          {service.imageUrl && (
            <div className="service-detail-feature-image-wrap mithaq-card">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="service-detail-feature-image"
                loading="eager"
                width="900"
                height="380"
              />
              <div className="service-detail-feature-image-overlay" />
            </div>
          )}
          <div className="section-badge">
            <span>التأطير العام للممارسة</span>
          </div>
          <h2 className="section-title">فهم المسائل والأبعاد القانونية</h2>
          <div className="service-full-desc-card mithaq-card">
            <p className="service-full-desc">{service.fullDesc}</p>
          </div>
        </div>
      </section>

      {/* 3. CHALLENGES & LEGAL RISKS ADDRESSED */}
      <section className="page-section service-challenges-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge">
              <span>المخاطر والتحديات المعالجة</span>
            </div>
            <h2 className="section-title">مخاطر استباقية نتصدى لها لحماية مركزكم</h2>
            <p className="section-lead">
              تحديد مواطن الضعف ونقاط الاحتكاك القانوني الشائعة في هذا المجال قبل أن تتطور إلى خسائر أو نزاعات.
            </p>
          </div>

          <div className="challenges-grid">
            {service.challengesAddressed.map((challenge, idx) => (
              <div key={idx} className="challenge-card mithaq-card">
                <div className="challenge-icon-box">
                  <AlertTriangle size={20} className="warning-icon" />
                </div>
                <h3 className="challenge-title">{challenge.title}</h3>
                <p className="challenge-desc">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DETAILED SCOPE OF SUBSERVICES */}
      <section className="page-section service-scope-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span>نطاق العمل التفصيلي</span>
            </div>
            <h2 className="section-title">المسارات الإجرائية والاستشارية المشمولة</h2>
            <p className="section-lead">
              نغطي كافة الجوانب التعاقدية والتنظيمية والميدانية المرتبطة باختصاص {service.title}.
            </p>
          </div>

          <div className="subservices-grid">
            {service.subServices.map((sub, idx) => (
              <div key={idx} className="subservice-card mithaq-card">
                <div className="subservice-header">
                  <span className="subservice-idx">0{idx + 1}</span>
                  <h3 className="subservice-title">{sub.title}</h3>
                </div>
                <p className="subservice-desc">{sub.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INSTITUTIONAL APPROACH */}
      <section className="page-section service-approach-section">
        <div className="container">
          <div className="approach-banner mithaq-card">
            <div className="approach-badge">
              <FileSearch size={16} />
              <span>منهجية مِيثاق في هذا الاختصاص</span>
            </div>
            <h2 className="approach-title">كيف يدير فريقنا ملفات {service.title}؟</h2>
            <p className="approach-text">{service.institutionalApproach}</p>
          </div>
        </div>
      </section>

      {/* 6. PROFESSIONAL CONSIDERATIONS */}
      <section className="page-section service-considerations-section">
        <div className="container container-narrow">
          <div className="section-header">
            <div className="section-badge">
              <span>اعتبارات مهنية هامة</span>
            </div>
            <h2 className="section-title">نصائح وإرشادات وقائية قبل اتخاذ القرار</h2>
          </div>

          <div className="considerations-list">
            {service.professionalConsiderations.map((item, idx) => (
              <div key={idx} className="consideration-item mithaq-card">
                <CheckCircle2 size={20} className="check-icon" />
                <p className="consideration-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RELATED LEGAL ARTICLES */}
      {relatedArticles.length > 0 && (
        <section className="page-section service-articles-section">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">
                <span>مقالات ذات صلة</span>
              </div>
              <h2 className="section-title">رؤى تحليلية مرتبطة بهذا الاختصاص</h2>
            </div>

            <div className="related-articles-grid">
              {relatedArticles.map((article) => (
                <div key={article.id} className="related-article-card mithaq-card">
                  <span className="related-article-cat">{article.category}</span>
                  <h3 className="related-article-title">
                    <Link to={`/insights/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="related-article-summary">{article.summary}</p>
                  <Link to={`/insights/${article.slug}`} className="read-more-link">
                    <span>قراءة التحليل كاملاً</span>
                    <ArrowLeft size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. PRACTICE-SPECIFIC FAQ */}
      {service.faqs.length > 0 && (
        <section className="page-section service-faq-section">
          <div className="container container-narrow">
            <div className="section-header text-center">
              <div className="section-badge">
                <span>إيضاحات شائعة</span>
              </div>
              <h2 className="section-title">الأسئلة الشائعة حول {service.title}</h2>
            </div>

            <div className="service-faq-accordion">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className={`faq-accordion-item mithaq-card ${isOpen ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-text">{faq.question}</span>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {isOpen && (
                      <div className="faq-answer-panel">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 9. RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section className="page-section service-related-section">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">
                <span>تخصصات مكملة</span>
              </div>
              <h2 className="section-title">مجالات ممارسة ذات صلة</h2>
            </div>

            <div className="related-services-grid">
              {relatedServices.map((rel) => (
                <div key={rel.id} className="related-service-card mithaq-card">
                  <span className="related-service-num">{rel.number}</span>
                  <h3 className="related-service-title">
                    <Link to={`/services/${rel.slug}`}>{rel.title}</Link>
                  </h3>
                  <p className="related-service-sub">{rel.subtitle}</p>
                  <Link to={`/services/${rel.slug}`} className="service-sub-link">
                    <span>عرض التفاصيل</span>
                    <ArrowLeft size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. DEDICATED CONSULTATION CTA */}
      <section className="page-section service-bottom-cta">
        <div className="container text-center">
          <div className="service-cta-inner mithaq-card">
            <h2 className="cta-title">هل لديك استفسار أو قضية تتعلق بـ {service.title}؟</h2>
            <p className="cta-lead">
              فريقنا القانوني المتخصص جاهز لدراسة الوقائع وتزويدكم بالرأي النظامي الأمثل.
            </p>
            <div className="service-cta-actions">
              <Button variant="primary" size="lg" onClick={onOpenConsultation}>
                <span>طلب استشارة الآن</span>
                <ArrowUpLeft size={18} />
              </Button>
              <Link to="/contact" className="service-contact-btn">
                <span>قنوات التواصل الرسمية</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
