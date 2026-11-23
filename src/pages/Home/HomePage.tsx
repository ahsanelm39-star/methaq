import React, { Suspense, lazy, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpLeft,
  ArrowLeft,
  Briefcase,
  FileText,
  Scale,
  Building2,
  Users,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Shield,
} from 'lucide-react';
import { SEOHead } from '../../components/ui/SEOHead';
import { PRACTICE_AREAS } from '../../data/services';
import { ARTICLES } from '../../data/articles';
import { Button } from '../../components/ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './HomePage.css';

// Lazy-load the heavy 3D scene to keep initial chunk light
const Hero3DScene = lazy(() =>
  import('../../components/three/Hero3DScene').then((module) => ({
    default: module.Hero3DScene,
  }))
);

interface HomePageProps {
  onOpenConsultation: () => void;
}

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Briefcase':
      return <Briefcase size={22} />;
    case 'FileText':
      return <FileText size={22} />;
    case 'Scale':
      return <Scale size={22} />;
    case 'Building2':
      return <Building2 size={22} />;
    case 'Users':
      return <Users size={22} />;
    case 'ShieldCheck':
      return <ShieldCheck size={22} />;
    default:
      return <Scale size={22} />;
  }
};

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  useScrollReveal({ containerRef: pageRef, animateHero: true });

  return (
    <div className="home-page-root" ref={pageRef}>
      <SEOHead
        title="الرئيسية"
        description="مِيثاق للمحاماة والاستشارات القانونية — صرح قانوني واستشاري يقدم حلولاً وقائية وترافعية قائمة على الفحص المجهري للوقائع والتحليل النظامي الرصين."
      />

      {/* 1. HERO SECTION WITH 3D MONOLITH */}
      <section className="home-hero" id="home-hero">
        <div className="container home-hero-container">
          <div className="home-hero-content">
            <div className="home-hero-badge">
              <span className="badge-pulse" />
              <span>رؤية قانونية استباقية رفيعة المستوى</span>
            </div>

            <h1 className="home-hero-headline">
              حين تكون التفاصيل فارقة، <br />
              <span className="gold-gradient-text">تبدأ قوة الموقف.</span>
            </h1>

            <p className="home-hero-lead">
              مؤسسة قانونية واستشارية تقدم لقطاع الأعمال والمستثمرين حلولاً وقائية
              وترافعية، مبنية على التحليل الدقيق والفهم المؤسسي الشامل لحماية
              المصالح وصناعة الحصانة القانونية المستدامة.
            </p>

            <div className="home-hero-actions">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenConsultation}
                className="hero-primary-btn"
              >
                <span>طلب استشارة</span>
                <ArrowUpLeft size={18} />
              </Button>

              <Link to="/services" className="hero-secondary-link">
                <span>استكشف مجالات الممارسة</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="home-hero-trust-indicators">
              <div className="trust-indicator">
                <CheckCircle2 size={16} className="trust-icon" />
                <span>فحص مجهري للوقائع والوثائق</span>
              </div>
              <div className="trust-indicator">
                <CheckCircle2 size={16} className="trust-icon" />
                <span>حصانة تعاقدية وقائية استباقية</span>
              </div>
              <div className="trust-indicator">
                <CheckCircle2 size={16} className="trust-icon" />
                <span>بروتوكولات سرية وحفظ بيانات مشددة</span>
              </div>
            </div>
          </div>

          <div className="home-hero-visual" aria-hidden="true">
            <Suspense
              fallback={
                <div className="hero-3d-skeleton">
                  <div className="skeleton-monolith" />
                </div>
              }
            >
              <Hero3DScene />
            </Suspense>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL INTRODUCTION & PHILOSOPHY */}
      <section className="page-section home-intro-section">
        <div className="container">
          <div className="home-intro-card mithaq-card">
            <div className="home-intro-grid">
              <div className="home-intro-main">
                <div className="section-badge">
                  <span>الفلسفة المؤسسية</span>
                </div>
                <h2 className="home-intro-title">
                  القانون ليس مجرد معرفة بالنصوص، بل قدرة على قراءة التفاصيل وبناء المواقف.
                </h2>
                <p className="home-intro-text">
                  في بيئة أعمال تتسم بالتعقيد وسرعة التحول، لا يكفي الاكتفاء بالقراءة السطحية للأنظمة واللوائح؛ بل يستلزم الأمر إدراكًا استباقيًا للتبعات التشغيلية والمالية والاستراتيجية لكل قرار.
                </p>
                <Link to="/about" className="home-intro-cta">
                  <span>تعرف على نهج مِيثاق ورسالتنا المؤسسية</span>
                  <ArrowUpLeft size={16} />
                </Link>
              </div>

              <div className="home-intro-stats">
                <div className="stat-card">
                  <span className="stat-number number100">100%</span>
                  <span className="stat-label">مطابقة نظامية وفحص دقيق للوثائق</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">استباقي</span>
                  <span className="stat-label">تفادي النزاعات قبل نشوئها</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">مشددة</span>
                  <span className="stat-label">بروتوكولات سرية وحفظ بيانات</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRACTICE AREAS DIRECTORY PREVIEW */}
      <section className="page-section home-services-section">
        <div className="container">
          <div className="section-header services-section-header">
            <div>
              <div className="section-badge">
                <span>مجالات الممارسة القانونية</span>
              </div>
              <h2 className="section-title">خبرة قانونية تغطي متطلبات قطاع الأعمال</h2>
              <p className="section-lead">
                نقدم خدمات قانونية واستشارية متكاملة مصممة لحماية المصالح التجارية وصيانة حقوق الشركاء والأفراد وفق أعلى المعايير المهنية.
              </p>
            </div>
            <Link to="/services" className="services-all-btn">
              <span>دليل كافة الخدمات</span>
              <ArrowLeft size={16} />
            </Link>
          </div>

          <div className="home-services-grid">
            {PRACTICE_AREAS.map((service) => (
              <div key={service.id} className="home-service-card mithaq-card">
                {service.imageUrl && (
                  <div className="service-card-image-wrap">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="service-card-image"
                      loading="lazy"
                      width="400"
                      height="200"
                    />
                    <div className="service-card-image-overlay" />
                    <span className="service-card-badge-num">{service.number}</span>
                  </div>
                )}
                <div className="service-card-top">
                  <div className="service-icon-box">
                    {getServiceIcon(service.icon)}
                  </div>
                  {!service.imageUrl && <span className="service-number">{service.number}</span>}
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-sub">{service.subtitle}</p>
                <p className="service-card-desc">{service.shortDesc}</p>

                <div className="service-card-highlights">
                  {service.keyServices.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="service-highlight-item">
                      <span className="highlight-dot" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="service-card-footer">
                  <Link to={`/services/${service.slug}`} className="service-detail-link">
                    <span>استكشف النطاق الكامل للخدمة</span>
                    <ArrowLeft size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INSTITUTIONAL PILLARS / WHY MITHAQ */}
      <section className="page-section home-pillars-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge">
              <span>معايير التميز</span>
            </div>
            <h2 className="section-title">الفرق يبدأ من طريقة التفكير</h2>
            <p className="section-lead">
              لا تتشابه المسائل القانونية في تفاصيلها، لذلك نعتمد نهجًا يقوم على فحص كل حالة بصورة مستقلة وتوضيح البدائل بنزاهة وتجرد.
            </p>
          </div>

          <div className="home-pillars-grid">
            <div className="home-pillar-card mithaq-card">
              <div className="pillar-num">01</div>
              <h3 className="pillar-title">الدقة والتحليل المجهري</h3>
              <p className="pillar-desc">
                قراءة متأنية لكافة الوثائق والمستندات للوقوف على أدق الجزئيات المؤثرة في ترجيح كفة الموقف القانوني.
              </p>
            </div>

            <div className="home-pillar-card mithaq-card">
              <div className="pillar-num">02</div>
              <h3 className="pillar-title">الحصانة الوقائية الاستباقية</h3>
              <p className="pillar-desc">
                بناء أطر تعاقدية محكمة تفترض أسوأ السيناريوهات الواقعية لمعالجة الثغرات قبل أن تتحول إلى نزاع قضائي.
              </p>
            </div>

            <div className="home-pillar-card mithaq-card">
              <div className="pillar-num">03</div>
              <h3 className="pillar-title">الوضوح والمكاشفة المهنية</h3>
              <p className="pillar-desc">
                لغة مهنية مباشرة تطلع العميل على كافة الاحتمالات ونسب النجاح بصدق دون وعود مضللة أو تعقيد مصطنع.
              </p>
            </div>

            <div className="home-pillar-card mithaq-card">
              <div className="pillar-num">04</div>
              <h3 className="pillar-title">السرية والأمانة الائتمانية</h3>
              <p className="pillar-desc">
                بروتوكولات حفظ بيانات مشددة وفحص صارم لتضارب المصالح لضمان خصوصية مطلقة لمعاملات ومستندات الموكلين.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEGAL INSIGHTS SHOWCASE (EXACTLY 3 SUBSTANTIVE ARTICLES) */}
      <section className="page-section home-insights-section">
        <div className="container">
          <div className="section-header insights-section-header">
            <div>
              <div className="section-badge">
                <span>المعرفة القانونية</span>
              </div>
              <h2 className="section-title">رؤى ومقالات قانونية</h2>
              <p className="section-lead">
                إضاءات تحليلية متخصصة تهدف لنشر الوعي النظامي وتمكين مجالس الإدارات ورواد الأعمال من اتخاذ قرارات آمنة.
              </p>
            </div>
            <Link to="/insights" className="insights-all-link">
              <span>تصفح مركز الرؤى والمقالات</span>
              <ArrowLeft size={16} />
            </Link>
          </div>

          <div className="home-insights-grid">
            {ARTICLES.map((article) => (
              <article key={article.id} className="home-article-card mithaq-card">
                {article.imageUrl && (
                  <div className="article-card-image-wrap">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="article-card-image"
                      loading="lazy"
                      width="400"
                      height="220"
                    />
                    <div className="article-card-image-overlay" />
                    <span className="article-category-badge-floating">{article.category}</span>
                  </div>
                )}
                <div className="article-card-header">
                  {!article.imageUrl && <span className="article-category-badge">{article.category}</span>}
                  <div className="article-meta-time">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="article-card-title">
                  <Link to={`/insights/${article.slug}`}>{article.title}</Link>
                </h3>

                <p className="article-card-summary">{article.summary}</p>

                <div className="article-card-footer">
                  <span className="article-date">{article.date}</span>
                  <Link to={`/insights/${article.slug}`} className="article-read-btn">
                    <span>قراءة المقال كاملاً</span>
                    <ArrowLeft size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONVERSION CTA BANNER */}
      <section className="home-cta-section">
        <div className="container">
          <div className="home-cta-banner home-cta-card">
            <div className="cta-accent-glow" aria-hidden="true" />
            <div className="cta-content">
              <span className="cta-badge">المشورة المهنية المتخصصة</span>
              <h2 className="cta-title">
                لأن القرارات المصيرية تستحق رؤية قانونية واضحة
              </h2>
              <p className="cta-lead">
                سواء كنت تؤسس لكيان استثماري جديد، أو تحتاج لتدقيق عقود استراتيجية، أو تبحث عن رأي قانوني استباقي؛ فريق مِيثاق مستعد للاستماع ومرافقة خطواتك.
              </p>
              <div className="cta-btn-group">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onOpenConsultation}
                  className="cta-main-btn"
                >
                  <span>طلب جلسة استشارة أولية</span>
                  <ArrowUpLeft size={18} />
                </Button>
                <Link to="/contact" className="cta-contact-link">
                  <span>قنوات التواصل الرسمية</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="cta-demo-notice">
                <Shield size={14} />
                <span>مِيثاق نموذج رقمي تجريبي مستقل أُنشئ لأغراض العرض التوضيحي، والبيانات والتفاصيل الواردة فيه افتراضية.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
