import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  GitCommit,
  CheckCircle2,
  ArrowUpLeft,
  Search,
  FileCheck,
  Compass,
  Briefcase,
  BellRing,
  Award,
} from 'lucide-react';
import { SEOHead } from '../../components/ui/SEOHead';
import { Button } from '../../components/ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ApproachPage.css';

interface ApproachPageProps {
  onOpenConsultation: () => void;
}

const APPROACH_STEPS = [
  {
    step: '01',
    title: 'الاستماع الواعي وتأطير المسألة',
    lead: 'حصر الوقائع الجوهرية والتعرف على الأبعاد التشغيلية للملف.',
    desc: 'تبدأ كل مهمة قانونية بجلسة استماع متأنية تجمع بين المحامي المختص والعميل، لحصر الوقائع بدقة، وتحديد أهداف الموكل، والوقوف على أصل النزاع أو متطلبات الاستشارة، مع فرز النقاط المؤثرة نظاميًا عن التفاصيل الثانوية.',
    deliverables: [
      'محضر جلسة استيعاب الوقائع المعتمد',
      'تحديد النطاق الأولي للتكليف القانوني',
      'قائمة المستندات والوثائق الإلزامية المطلوبة',
    ],
    icon: <Search size={24} />,
  },
  {
    step: '02',
    title: 'الفحص المجهري والتدقيق الوثائقي',
    lead: 'مضاهاة المستندات بالأطر النظامية والسوابق القضائية المستقرة.',
    desc: 'دراسة متقاطعة لكافة العقود والمراسلات والإشعارات المؤرخة. لا نكتفي بالفحص الظاهري للنصوص، بل نقوم بمضاهاة كل التزام بالسوابق القضائية وأحدث التعديلات التشريعية لتقييم قوة المركز القانوني واكتشاف أي ثغرات كامنة.',
    deliverables: [
      'مذكرة تقييم المخاطر والموقف النظامي الأولي',
      'تحليل متقاطع للبنود التعاقدية محل النزاع',
      'تقرير السوابق والقرارات القضائية المقارنة',
    ],
    icon: <FileCheck size={24} />,
  },
  {
    step: '03',
    title: 'تقييم الخيارات وبناء التصور الاستراتيجي',
    lead: 'عرض البدائل الإجرائية والمفاضلة بين المسار الودي والمسار القضائي.',
    desc: 'نضع أمام صاحب القرار تحليلاً موضوعيًا للخيارات المتاحة (التفاوض الودي، الوساطة والتحكيم، أو مباشرة التقاضي)، مع بيان احتمالات كل مسار، والمدد الزمنية المتوقعة، والتكاليف الإجرائية دون أي تهوين أو وعود غير واقعية.',
    deliverables: [
      'خارطة طريق إجرائية مفصلة للمسار المختار',
      'تقدير زمني ومالي شفاف لمراحل العمل',
      'اتفاقية نطاق التكليف القانوني المحددة',
    ],
    icon: <Compass size={24} />,
  },
  {
    step: '04',
    title: 'الصياغة المحكمة والتنفيذ المنضبط',
    lead: 'إعداد اللوائح والمذكرات وإدارة المفاوضات بأعلى المعايير.',
    desc: 'مباشرة العمل المتفق عليه بانضباط زمني وفكري صارم؛ سواء كان صياغة اتفاقيات تجارية متوازنة، أو إعداد مذكرات جوابية ولوائح اعتراضية محكمة أمام المحاكم المختصة، مع استيفاء كافة المتطلبات الشكلية والموضوعية.',
    deliverables: [
      'نسخ مسودات العقود أو اللوائح القضائية المعتمدة',
      'إيداع المذكرات وقيد الدعاوى ضمن المهل النظامية',
      'حضور الجلسات القضائية والتفاوضية وفق الخطة',
    ],
    icon: <Briefcase size={24} />,
  },
  {
    step: '05',
    title: 'المتابعة المستمرة والإحاطة الدورية',
    lead: 'إبقاء الموكل شريكًا في الصورة لحظة بلحظة عقب كل إجراء.',
    desc: 'نعتمد بروتوكول تواصل شفاف يزود العميل بإشعار فوري وملخص دوري عقب كل جلسة قضائية أو جولة تفاوضية أو صدور قرار نظامي، متضمنًا ما تم، والخطوات التالية، والتوصيات المقترحة دون انقطاع.',
    deliverables: [
      'إشعارات فورية بنتائج الجلسات والإجراءات',
      'تقارير دورية شهرية عن تطورات ومسار الملف',
      'تحديث استراتيجية العمل وفق المستجدات الواقعية',
    ],
    icon: <BellRing size={24} />,
  },
  {
    step: '06',
    title: 'إتمام التكليف وحصانة المكتسبات',
    lead: 'تنفيذ الأحكام، تسليم المخرجات النهائية، وحماية النتائج المستدامة.',
    desc: 'لا ينتهي دورنا بصدور الحكم القضائي أو توقيع العقد، بل نتابع إجراءات تنفيذ السندات واستيفاء الحقوق المالية أو النظامية، مع تسليم الملفات موثقة وإسداء التوصيات الوقائية لمنع تكرار أي نزاع مماثل مستقبلاً.',
    deliverables: [
      'متابعة قيد طلبات التنفيذ واستيفاء السندات',
      'محضر الإغلاق الرسمي للملف وتسليم الأصول',
      'دليل إرشادي وقائي للمنشأة لصيانة المكتسبات',
    ],
    icon: <Award size={24} />,
  },
];

export const ApproachPage: React.FC<ApproachPageProps> = ({ onOpenConsultation }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  useScrollReveal({ containerRef: pageRef, animateHero: true });

  return (
    <div className="approach-page-root" ref={pageRef}>
      <SEOHead
        title="منهجية العمل"
        description="تعرف على منهجية العمل القانونية في مِيثاق — مسار منضبط من 6 مراحل يضمن الفهم المعمق، التحليل الدقيق، الشفافية والمتابعة المستمرة."
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-breadcrumbs">
            <Link to="/">الرئيسية</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">منهجية العمل</span>
          </div>

          <div className="page-hero-badge">
            <GitCommit size={16} />
            <span>الانضباط المنهجي والإجرائي</span>
          </div>

          <h1 className="page-hero-title">
            منهجية عمل منضبطة تحول تعقيد الأنظمة إلى مسارات واضحة
          </h1>

          <p className="page-hero-lead">
            لا مجال للعشوائية في العمل القانوني الرصين. نعتمد في مِيثاق إطار عمل متسلسل من ست مراحل يضمن فحص الوقائع، ومكاشفة الموكل بالخيارات، ومباشرة الإجراءات بانضباط، مع إحاطة دورية مستمرة.
          </p>
        </div>
      </section>

      {/* Steps Timeline Section */}
      <section className="page-section approach-timeline-section">
        <div className="container">
          <div className="approach-steps-wrapper methodology-steps-list">
            {APPROACH_STEPS.map((item, idx) => (
              <div key={item.step} className="approach-step-card mithaq-card">
                <div className="step-aside">
                  <div className="step-number-badge">{item.step}</div>
                  <div className="step-icon-box">{item.icon}</div>
                  {idx < APPROACH_STEPS.length - 1 && <div className="step-connector-line" />}
                </div>

                <div className="step-content">
                  <h2 className="step-title">{item.title}</h2>
                  <p className="step-lead">{item.lead}</p>
                  <p className="step-desc">{item.desc}</p>

                  <div className="step-deliverables-box">
                    <h4 className="deliverables-heading">المخرجات والالتزامات في هذه المرحلة:</h4>
                    <div className="deliverables-list">
                      {item.deliverables.map((d, dIdx) => (
                        <div key={dIdx} className="deliverable-item">
                          <CheckCircle2 size={16} className="deliv-icon" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Banner */}
      <section className="page-section approach-commitments-section">
        <div className="container">
          <div className="approach-commitments-card mithaq-card">
            <h2 className="commitments-title">ضمانات التجربة المهنية في مِيثاق</h2>
            <div className="commitments-grid">
              <div className="commitment-col">
                <h4 className="commitment-heading">الوضوح المالي والتعاقدي</h4>
                <p className="commitment-text">
                  تحديد دقيق لكافة الأتعاب ومراحل استحقاقها ضمن اتفاقية التكليف، دون أي رسوم إضافية خفية.
                </p>
              </div>

              <div className="commitment-col">
                <h4 className="commitment-heading">سرية المعلومات</h4>
                <p className="commitment-text">
                  قنوات رقمية مشفرة لتبادل المذكرات والوثائق وفحص استباقي لمنع أي شبهة لتضارب المصالح.
                </p>
              </div>

              <div className="commitment-col">
                <h4 className="commitment-heading">الاحترام الصارم للمهل</h4>
                <p className="commitment-text">
                  نظام رقمي لمتابعة المواعيد النظامية والمدد الإجرائية لضمان قيد كافة اللوائح في وقتها المحدد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section approach-cta-section">
        <div className="container text-center">
          <h2 className="section-title">هل ترغب في بدء أولى خطوات معالجة ملفك؟</h2>
          <p className="section-lead" style={{ marginInline: 'auto', marginBottom: '2rem' }}>
            احجز جلسة استماع وتأطير أولية مع مستشارينا لمناقشة وقائع مسألتك بكل شفافية.
          </p>
          <Button variant="primary" size="lg" onClick={onOpenConsultation}>
            <span>طلب جلسة استماع أولية</span>
            <ArrowUpLeft size={18} />
          </Button>
        </div>
      </section>
    </div>
  );
};
