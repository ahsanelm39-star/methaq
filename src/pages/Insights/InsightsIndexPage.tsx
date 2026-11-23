import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Calendar, ArrowLeft, ArrowUpLeft, ShieldAlert } from 'lucide-react';
import { SEOHead } from '../../components/ui/SEOHead';
import { ARTICLES } from '../../data/articles';
import { Button } from '../../components/ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './InsightsIndexPage.css';

interface InsightsIndexPageProps {
  onOpenConsultation: () => void;
}

export const InsightsIndexPage: React.FC<InsightsIndexPageProps> = ({
  onOpenConsultation,
}) => {
  const featuredArticle = ARTICLES.find((a) => a.isFeatured) || ARTICLES[0];
  const otherArticles = ARTICLES.filter((a) => a.id !== featuredArticle.id);
  const pageRef = useRef<HTMLDivElement>(null);
  useScrollReveal({ containerRef: pageRef, animateHero: true });

  return (
    <div className="insights-index-page" ref={pageRef}>
      <SEOHead
        title="الرؤى والمقالات القانونية"
        description="دراسات ومقالات قانونية متخصصة من فريق مِيثاق، تغطي مراجعة العقود، تأسيس الشركات، وحماية الملكية الفكرية في البيئة الرقمية."
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-breadcrumbs">
            <Link to="/">الرئيسية</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">الرؤى والمقالات القانونية</span>
          </div>

          <div className="page-hero-badge">
            <BookOpen size={16} />
            <span>المعرفة القانونية التثقيفية</span>
          </div>

          <h1 className="page-hero-title">
            قراءات تحليلية تساعد على فهم الأبعاد النظامية واتخاذ قرارات واثقة
          </h1>

          <p className="page-hero-lead">
            الوعي القانوني الاستباقي يمثل خط الدفاع الأول لصيانة الحقوق وتفادي النزاعات. نقدم هنا باقة من المقالات المتخصصة التي تفكك المسائل التعاقدية والتأسيسية والتقنية بأسلوب رصين وميسر.
          </p>
        </div>
      </section>

      {/* Featured Editorial Article */}
      <section className="page-section featured-article-section">
        <div className="container">
          <div className="featured-article-card mithaq-card">
            {featuredArticle.imageUrl && (
              <div className="featured-card-image-wrap">
                <img
                  src={featuredArticle.imageUrl}
                  alt={featuredArticle.title}
                  className="featured-card-image"
                  loading="eager"
                  width="1100"
                  height="340"
                />
                <div className="featured-card-image-overlay" />
              </div>
            )}
            <div className="featured-card-badge">
              <span>المقال الافتتاحي المختار</span>
            </div>

            <div className="featured-card-grid">
              <div className="featured-card-info">
                <div className="article-meta-row">
                  <span className="article-category">{featuredArticle.category}</span>
                  <div className="meta-item">
                    <Clock size={14} />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={14} />
                    <span>{featuredArticle.date}</span>
                  </div>
                </div>

                <h2 className="featured-article-title">
                  <Link to={`/insights/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="featured-article-intro">
                  {featuredArticle.executiveIntro}
                </p>

                <div className="featured-card-actions">
                  <Link
                    to={`/insights/${featuredArticle.slug}`}
                    className="featured-read-btn"
                  >
                    <span>قراءة الدراسة كاملة</span>
                    <ArrowLeft size={16} />
                  </Link>
                </div>
              </div>

              <div className="featured-card-takeaways">
                <h4 className="takeaways-title">أبرز محاور المقال:</h4>
                <ul className="takeaways-list">
                  {featuredArticle.keyTakeaways.slice(0, 4).map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining Substantive Articles (Exactly 2 others) */}
      <section className="page-section remaining-articles-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span>مقالات متخصصة</span>
            </div>
            <h2 className="section-title">دراسات إضافية في ممارسات الأعمال</h2>
          </div>

          <div className="remaining-articles-grid">
            {otherArticles.map((article) => (
              <article key={article.id} className="article-item-card mithaq-card">
                {article.imageUrl && (
                  <div className="article-item-image-wrap">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="article-item-image"
                      loading="lazy"
                      width="500"
                      height="240"
                    />
                    <div className="article-item-image-overlay" />
                  </div>
                )}
                <div className="article-meta-row">
                  <span className="article-category">{article.category}</span>
                  <div className="meta-item">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                </div>

                <h3 className="article-item-title">
                  <Link to={`/insights/${article.slug}`}>{article.title}</Link>
                </h3>

                <p className="article-item-summary">{article.summary}</p>

                <div className="article-item-footer">
                  <Link to={`/insights/${article.slug}`} className="article-item-btn">
                    <span>قراءة المقال كاملاً</span>
                    <ArrowLeft size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Educational Content Disclaimer */}
          <div className="insights-disclaimer-box">
            <ShieldAlert size={20} className="disclaimer-icon" />
            <p>
              <strong>تنويه معرفي وتثقيفي:</strong> المقالات والدراسات المنشورة في هذا القسم مخصصة لنشر الثقافة القانونية والتوعية العامة في بيئة الأعمال، ولا تغني بأي حال عن طلب استشارة قانونية مخصصة للوقائع والظروف الخاصة بكل مسألة.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="page-section insights-cta-section">
        <div className="container text-center">
          <h2 className="section-title">هل ترغب في رأي قانوني استباقي في أحد هذه الموضوعات؟</h2>
          <p className="section-lead" style={{ marginInline: 'auto', marginBottom: '2rem' }}>
            فريق مِيثاق يرحب بدراسة عقودكم ومسائلكم التأسيسية وصياغة الحصانة المناسبة.
          </p>
          <Button variant="primary" size="lg" onClick={onOpenConsultation}>
            <span>طلب استشارة الآن</span>
            <ArrowUpLeft size={18} />
          </Button>
        </div>
      </section>
    </div>
  );
};
