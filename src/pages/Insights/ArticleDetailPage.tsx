import React, { useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  ArrowUpLeft,
  ShieldAlert,
  Briefcase,
} from 'lucide-react';
import { SEOHead } from '../../components/ui/SEOHead';
import { ARTICLES } from '../../data/articles';
import { PRACTICE_AREAS } from '../../data/services';
import { Button } from '../../components/ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ArticleDetailPage.css';

interface ArticleDetailPageProps {
  onOpenConsultation: () => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  onOpenConsultation,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find((a) => a.slug === slug);
  const pageRef = useRef<HTMLElement>(null);
  useScrollReveal({ containerRef: pageRef, animateHero: true });

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  // Related legal service
  const relatedService = PRACTICE_AREAS.find(
    (s) => s.slug === article.relatedServiceSlug
  );

  // Other related articles (the remaining 2)
  const otherArticles = ARTICLES.filter((a) => a.slug !== article.slug);

  return (
    <article className="article-detail-page" ref={pageRef}>
      <SEOHead
        title={article.title}
        description={article.summary}
        ogType="article"
      />

      {/* Article Header */}
      <header className="article-hero-header">
        <div className="container container-narrow">
          <div className="page-breadcrumbs">
            <Link to="/">الرئيسية</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/insights">الرؤى والمقالات</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{article.category}</span>
          </div>

          <span className="article-category-badge">{article.category}</span>

          <h1 className="article-main-title">{article.title}</h1>

          <div className="article-meta-bar">
            <div className="article-meta-unit">
              <User size={15} />
              <span>{article.author}</span>
            </div>
            <div className="article-meta-unit">
              <Calendar size={15} />
              <span>{article.date}</span>
            </div>
            <div className="article-meta-unit">
              <Clock size={15} />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Article Body */}
      <div className="container container-narrow article-body-container">
        {article.imageUrl && (
          <div className="article-detail-image-wrap mithaq-card">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="article-detail-image"
              loading="eager"
              width="900"
              height="450"
            />
            <div className="article-detail-image-overlay" />
          </div>
        )}

        {/* Executive Summary Lead */}
        <div className="article-executive-lead mithaq-card">
          <span className="lead-tag">خلاصة تحليلية</span>
          <p>{article.executiveIntro}</p>
        </div>

        {/* Structured Editorial Content */}
        <div className="editorial-content">
          {article.sections.map((section, sIdx) => (
            <section key={sIdx} className="article-content-section">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="article-section-bullets">
                  {section.bulletPoints.map((bp, bpIdx) => (
                    <li key={bpIdx}>{bp}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Key Takeaways Box */}
        <div className="article-takeaways-card mithaq-card">
          <h3 className="takeaways-card-title">أبرز الوصايا والخلاصات العملية</h3>
          <ul className="takeaways-points">
            {article.keyTakeaways.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Educational Disclaimer */}
        <div className="editorial-disclaimer-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <ShieldAlert size={18} style={{ color: 'var(--accent-primary)' }} />
            <strong style={{ color: 'var(--text-primary)' }}>إخلاء مسؤولية قانونية وتعليمية:</strong>
          </div>
          <p>
            المعلومات والتحليلات الواردة في هذا المقال منشورة لأغراض التوعية العامة والمعرفة المؤسسية، ولا تنشئ علاقة موكل بمحامٍ، ولا تغني عن طلب الرأي القانوني المخصص لظروف وقائع كل قضية أو صفقة على حدة.
          </p>
        </div>

        {/* Related Service Link */}
        {relatedService && (
          <div className="article-related-service-card mithaq-card">
            <div className="related-service-icon">
              <Briefcase size={24} />
            </div>
            <div className="related-service-info">
              <span className="related-service-tag">الخدمة القانونية المرتبطة بهذا المقال</span>
              <h4 className="related-service-title">{relatedService.title}</h4>
              <p className="related-service-desc">{relatedService.shortDesc}</p>
            </div>
            <Link to={`/services/${relatedService.slug}`} className="related-service-btn">
              <span>استكشف الخدمة</span>
              <ArrowLeft size={16} />
            </Link>
          </div>
        )}

        {/* Related Articles Showcase (The remaining 2) */}
        <div className="article-other-insights">
          <h3 className="other-insights-title">مقالات ذات صلة في مركز الرؤى</h3>
          <div className="other-insights-grid">
            {otherArticles.map((other) => (
              <div key={other.id} className="other-insight-item mithaq-card">
                <span className="other-cat">{other.category}</span>
                <h4 className="other-title">
                  <Link to={`/insights/${other.slug}`}>{other.title}</Link>
                </h4>
                <Link to={`/insights/${other.slug}`} className="other-read-link">
                  <span>قراءة المقال</span>
                  <ArrowLeft size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Callout */}
        <div className="article-consult-callout mithaq-card text-center">
          <h3 className="callout-title">هل ترغب في تطبيق هذه المعايير لحماية منشأتك؟</h3>
          <p className="callout-desc">
            فريق مِيثاق يرحب بمراجعة مسودات عقودكم وتقديم الاستشارات الاستباقية الداعمة.
          </p>
          <Button variant="primary" size="md" onClick={onOpenConsultation}>
            <span>طلب استشارة قانونية</span>
            <ArrowUpLeft size={16} />
          </Button>
        </div>
      </div>
    </article>
  );
};
