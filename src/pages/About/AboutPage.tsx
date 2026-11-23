import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Compass,
  Target,
  Scale,
  Lock,
  FileCheck2,
  ArrowUpLeft,
  Users,
} from 'lucide-react';
import { SEOHead } from '../../components/ui/SEOHead';
import { INSTITUTIONAL_INFO } from '../../data/navigation';
import { Button } from '../../components/ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './AboutPage.css';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  useScrollReveal({ containerRef: pageRef, animateHero: true });

  return (
    <div className="about-page-root" ref={pageRef}>
      <SEOHead
        title="عن مِيثاق"
        description="تعرف على صرح مِيثاق للمحاماة والاستشارات القانونية، رؤيتنا، رسالتنا، وفلسفتنا المؤسسية القائمة على الدقة والشفافية وصناعة الحصانة الاستباقية."
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-breadcrumbs">
            <Link to="/">الرئيسية</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">عن مِيثاق</span>
          </div>

          <div className="page-hero-badge">
            <ShieldCheck size={16} />
            <span>الهوية والنهج المؤسسي</span>
          </div>

          <h1 className="page-hero-title">
            صرح قانوني يُعنى بصناعة الأمان القانوني وبناء المواقف الراسخة
          </h1>

          <p className="page-hero-lead">
            في مِيثاق، ننطلق من قناعة حاسمة بأن الممارسة القانونية الرصينة تتطلب أكثر من حفظ النصوص النظامية؛ إنها فن فحص التفاصيل الخفية، واستشراف التبعات التشغيلية والمالية، وصياغة حلول وقائية تضمن للكيانات التجارية استدامة قراراتها بأمان تام.
          </p>
        </div>
      </section>

      {/* Section 1: Institutional Narrative & Philosophy */}
      <section className="page-section about-narrative-section">
        <div className="container">
          <div className="about-narrative-grid">
            <div className="about-narrative-content">
              <div className="section-badge">
                <span>الفلسفة المهنية</span>
              </div>
              <h2 className="section-title">القانون يبدأ من فهم التفاصيل</h2>
              <div className="about-text-blocks">
                <p>
                  تأسست مِيثاق لتكون نموذجًا مهنيًا متقدمًا يتجاوز النمط التقليدي للمحاماة القائم على رد الفعل المتأخر عند وقوع النزاع. نتبنى مفهوم "الحصانة الاستباقية"، حيث نوجه كامل طاقتنا الفكرية والتحليلية لتحصين المعاملات والعقود قبل الشروع فيها.
                </p>
                <p>
                  إن فهم البيئة المحيطة بنشاط العميل، ودراسة أهدافه التجارية، والاطلاع الدقيق على المستندات، يمثل حجر الزاوية في بناء أي رأي قانوني استشاري أو موقف ترافعي. ومن هنا نعتبر أن الفاصلة والكلمة الواحدة في الصياغة قد تصنع فارقًا جوهريًا في تحديد نطاق الالتزام وحماية رأس المال.
                </p>
              </div>

              <div className="about-demo-box">
                <span className="demo-tag">إشعار العرض التجريبي</span>
                <p>
                  {INSTITUTIONAL_INFO.disclaimer}
                </p>
              </div>
            </div>

            <div className="about-narrative-cards">
              <div className="about-vision-card mithaq-card">
                <div className="card-icon-wrap">
                  <Compass size={28} className="gold-icon" />
                </div>
                <h3 className="card-title">رؤيتنا المؤسسية</h3>
                <p className="card-desc">
                  أن نكون المرجع القانوني الاستراتيجي الأكثر موثوقية لقطاع الأعمال والمستثمرين، من خلال تقديم معايير مهنية استثنائية تجمع بين رصانة الفقه وعصرية الحلول.
                </p>
              </div>

              <div className="about-mission-card mithaq-card">
                <div className="card-icon-wrap">
                  <Target size={28} className="gold-icon" />
                </div>
                <h3 className="card-title">رسالتنا المهنية</h3>
                <p className="card-desc">
                  تمكين عملائنا من اتخاذ قراراتهم الاستثمارية والتشغيلية بثقة تامة، عبر تقديم استشارات وقائية دقيقة، وتوفير تمثيل قضائي مؤصل يصون الحقوق ويحقق العدالة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Values & Commitments */}
      <section className="page-section about-values-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge">
              <span>المحددات الجوهرية</span>
            </div>
            <h2 className="section-title">معايير تحكم بوصلتنا في كل ملف</h2>
            <p className="section-lead">
              خمس ركائز أخلاقية وإجرائية نلتزم بها أمام كل موكل لضمان أعلى مستويات الأمانة والنزاهة المؤسسية.
            </p>
          </div>

          <div className="about-pillars-grid">
            <div className="about-pillar-item mithaq-card">
              <div className="pillar-top">
                <span className="pillar-index">01</span>
                <Users size={22} className="pillar-icon" />
              </div>
              <h3 className="pillar-name">استيعاب ظروف كل عميل</h3>
              <p className="pillar-text">
                دراسة البيئة التشغيلية والتجارية المحيطة بالقضية، وعدم الاكتفاء بالحلول المعلبة لضمان ملاءمة الرأي القانوني لواقع الموكل.
              </p>
            </div>

            <div className="about-pillar-item mithaq-card">
              <div className="pillar-top">
                <span className="pillar-index">02</span>
                <FileCheck2 size={22} className="pillar-icon" />
              </div>
              <h3 className="pillar-name">التحليل النظامي الدقيق</h3>
              <p className="pillar-text">
                فحص مجهري للوثائق والعقود ومقارنتها بالسوابق والمبادئ القضائية المستقرة لتحديد المركز القانوني بدقة بالغة.
              </p>
            </div>

            <div className="about-pillar-item mithaq-card">
              <div className="pillar-top">
                <span className="pillar-index">03</span>
                <Scale size={22} className="pillar-icon" />
              </div>
              <h3 className="pillar-name">الشفافية والمكاشفة</h3>
              <p className="pillar-text">
                بيان الاحتمالات والمخاطر ونسب النجاح بنزاهة وتجرد تام، لتمكين متخذ القرار من بناء خطواته على أرضية ثابتة دون تضليل.
              </p>
            </div>

            <div className="about-pillar-item mithaq-card">
              <div className="pillar-top">
                <span className="pillar-index">04</span>
                <Lock size={22} className="pillar-icon" />
              </div>
              <h3 className="pillar-name">السرية وحفظ البيانات</h3>
              <p className="pillar-text">
                تطبيق بروتوكولات حماية وتشفير صارمة للمعلومات والمستندات تضمن خصوصية ائتمانية كاملة لكافة معاملات الموكلين.
              </p>
            </div>

            <div className="about-pillar-item mithaq-card">
              <div className="pillar-top">
                <span className="pillar-index">05</span>
                <ShieldCheck size={22} className="pillar-icon" />
              </div>
              <h3 className="pillar-name">المسؤولية الأخلاقية</h3>
              <p className="pillar-text">
                استشعار أمانة الوكالة القضائية والالتزام الصارم بقواعد السلوك المهني والنزاهة الإجرائية في مباشرة كافة الأعمال.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Comparative Philosophy Table */}
      <section className="page-section about-comparison-section">
        <div className="container">
          <div className="comparison-card mithaq-card">
            <div className="comparison-header">
              <div className="section-badge">
                <span>التحول في المفهوم القانوني</span>
              </div>
              <h2 className="comparison-title">
                من رد الفعل اللحظي إلى الحصانة الاستراتيجية
              </h2>
              <p className="comparison-lead">
                كيف يعيد نهج مِيثاق تعريف دور المحامي من مجرد معالج للأزمات إلى شريك استراتيجي يصنع الأمان.
              </p>
            </div>

            <div className="comparison-grid">
              <div className="comparison-col comparison-traditional">
                <span className="col-tag">المقاربة التقليدية الشائعة</span>
                <ul className="comparison-list">
                  <li>الانتظار حتى نشوء النزاع القضائي والتعامل برد الفعل الدفاعي.</li>
                  <li>الاكتفاء بنصوص العقود العامة دون فهم السياق التجاري الفعلي.</li>
                  <li>تكاليف تقاضٍ غير متوقعة واستنزاف لموارد المنشأة المالية والزمنية.</li>
                  <li>غموض مسار القضية وانعدام المتابعة الدورية الشفافة مع الموكل.</li>
                </ul>
              </div>

              <div className="comparison-col comparison-meethaq">
                <span className="col-tag gold">نهج مِيثاق المؤسسي</span>
                <ul className="comparison-list">
                  <li>بناء دروع وقائية تعاقدية تفحص الاحتمالات وتتفادى النزاع مسبقًا.</li>
                  <li>مواءمة استراتيجية متكاملة بين المتطلبات النظامية وأهداف النمو.</li>
                  <li>وضوح تام للأتعاب والمسارات دون أي رسوم أو مفاجآت خفية.</li>
                  <li>إحاطة دورية فورية وتقارير متابعة موثقة عقب كل إجراء قضائي.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section about-cta-section">
        <div className="container">
          <div className="about-cta-card">
            <h2 className="section-title">هل ترغب في مناقشة مسألتك القانونية مع فريقنا؟</h2>
            <p className="section-lead">
              فريق مِيثاق يرحب بالتواصل معكم لتقييم الاحتياجات وتوضيح مسارات العمل المناسبة.
            </p>
            <div className="about-cta-buttons">
              <Button variant="primary" size="lg" onClick={onOpenConsultation}>
                <span>طلب استشارة أولية</span>
                <ArrowUpLeft size={18} />
              </Button>
              <Link to="/approach" className="about-approach-link">
                <span>تعرف على منهجية العمل</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
