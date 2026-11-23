import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock } from 'lucide-react';
import { SEOHead } from '../../components/ui/SEOHead';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './PrivacyPage.css';

export const PrivacyPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  useScrollReveal({ containerRef: pageRef, animateHero: true });

  return (
    <div className="privacy-page-root" ref={pageRef}>
      <SEOHead
        title="سياسة الخصوصية والاستخدام"
        description="إشعار الخصوصية والاستخدام لموقع مِيثاق، بيان الطبيعة التجريبية المستقلة للمشروع وضوابط التعامل مع البيانات."
      />

      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-breadcrumbs">
            <Link to="/">الرئيسية</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">سياسة الخصوصية والاستخدام</span>
          </div>

          <div className="page-hero-badge">
            <Shield size={16} />
            <span>الشفافية وحماية البيانات</span>
          </div>

          <h1 className="page-hero-title">
            إشعار الخصوصية وضوابط استخدام المنصة التجريبية
          </h1>

          <p className="page-hero-lead">
            نلتزم بأعلى معايير الشفافية والمكاشفة مع كافة زوار المنصة. يوضح هذا الإشعار طبيعة الموقع، الغرض منه، وسياسة عدم جمع أو معالجة البيانات الشخصية.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container container-narrow">
          <div className="privacy-card mithaq-card">
            <div className="privacy-section-block">
              <h2 className="privacy-heading">1. طبيعة المشروع وهدف العرض</h2>
              <p>
                مِيثاق (MITHAQ) هو نموذج رقمي تفاعلي متكامل مستقل أُنشئ لأغراض العرض وتطوير النماذج الأولية للمواقع المؤسسية الفاخرة لقطاع المحاماة والاستشارات القانونية.
              </p>
              <p>
                كافة الأسماء والشخصيات، والصفات، وأرقام الاتصال، والملفات التعريفية الواردة عبر صفحات الموقع هي نماذج افتراضية لأغراض المحاكاة التصميمية والبرمجية، ولا تمثل كيانًا تجاريًا حقيقيًا قائمًا أو مكتب محاماة يقدم خدمات حية على أرض الواقع.
              </p>
            </div>

            <div className="privacy-section-block">
              <h2 className="privacy-heading">2. البيانات المدخلة في النماذج التجريبية</h2>
              <p>
                تحتوي المنصة على نماذج تفاعلية مثل "طلب استشارة" و"نموذج التواصل". صُممت هذه النماذج لتعمل ضمن محاكاة برمجية محلية (Client-Side Simulation) فقط.
              </p>
              <ul className="privacy-bullets">
                <li>لا يتم إرسال أو تخزين أي بيانات مدخلة في قواعد بيانات خارجية أو أنظمة CRM حقيقية.</li>
                <li>لا يتم تتبع المستخدمين أو بيع أي بيانات لأطراف ثالثة.</li>
                <li>ينصح المستخدمون بعدم إدخال أي أسرار تجارية حقيقية أو بيانات قضائية حساسة داخل النماذج التوضيحية.</li>
              </ul>
            </div>

            <div className="privacy-section-block">
              <h2 className="privacy-heading">3. الملكية الفكرية وحقوق المحتوى</h2>
              <p>
                كافة النصوص التحليلية والمقالات القانونية المنشورة في قسم "الرؤى والمقالات" كُتبت خصيصًا لتوفير محتوى عربي أصيل ورصين يدعم الجودة المعرفية للمشروع. يمنع نسخ أو استنساخ التصاميم أو الهوية البصرية لأغراض تجارية مضللة دون إذن مسبق.
              </p>
            </div>

            <div className="privacy-section-block">
              <h2 className="privacy-heading">4. إخلاء المسؤولية القانونية</h2>
              <p>
                المعلومات الواردة على هذه المنصة مخصصة للأغراض التعريفية والتثقيفية العامة، ولا تشكل استشارة قانونية مخصصة أو تكليفًا وكيلاً بموكل. للحصول على مشورة ملزمة في أي نزاع واقعي، يجب مراجعة محامٍ مرخص معتمد في دائرتكم القضائية المعنية.
              </p>
            </div>

            <div className="privacy-notice-box">
              <Lock size={20} className="notice-icon" />
              <p>
                آخر تحديث: نوفمبر 2026 — مِيثاق للمحاماة والاستشارات القانونية (مشروع معرض أعمال رقمي مستقل).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
