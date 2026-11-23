import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Video,
  Building,
} from 'lucide-react';
import { SEOHead } from '../../components/ui/SEOHead';
import { PRACTICE_AREAS } from '../../data/services';
import { Button } from '../../components/ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ConsultationPage.css';

export const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    practiceArea: 'corporate-and-business',
    urgency: 'normal',
    preferredMethod: 'in_person',
    matterSummary: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const pageRef = useRef<HTMLDivElement>(null);
  useScrollReveal({ containerRef: pageRef, animateHero: true });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'يرجى إدخال الاسم الكريم';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'يرجى إدخال بريد إلكتروني صحيح لتأكيد الموعد';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'يرجى إدخال رقم الهاتف للتنسيق الإجرائي';
    }
    if (!formData.matterSummary.trim() || formData.matterSummary.length < 15) {
      newErrors.matterSummary = 'يرجى كتابة نبذة موجزة عن موضوع الاستشارة (15 حرفًا على الأقل)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Locally simulated successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 900);
  };

  return (
    <div className="consultation-page-root" ref={pageRef}>
      <SEOHead
        title="طلب استشارة قانونية"
        description="حجز جلسة استشارة قانونية أولية مع مستشاري مِيثاق، استعراض الوقائع، وتحديد المسار الإجرائي الأمثل."
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-breadcrumbs">
            <Link to="/">الرئيسية</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">طلب استشارة</span>
          </div>

          <div className="page-hero-badge">
            <Calendar size={16} />
            <span>جلسات المشورة والتأطير</span>
          </div>

          <h1 className="page-hero-title">
            طلب جلسة استشارة أولية لدراسة مسألتكم
          </h1>

          <p className="page-hero-lead">
            تبدأ المعالجة القانونية الصحيحة بتأطير الوقائع وفحص الوثائق الأساسية. نتيح لعملائنا عقد جلسات استشارية متخصصة حضوريًا أو عبر الاتصال المرئي المشفر مسبق التنسيق.
          </p>
        </div>
      </section>

      {/* Main Intake Form Section */}
      <section className="page-section consultation-form-section">
        <div className="container container-narrow">
          {/* Demo Notice */}
          <div className="consult-demo-notice-card mithaq-card">
            <ShieldCheck size={20} className="demo-notice-icon" />
            <div className="demo-notice-text">
              <strong>إشعار نموذج المحاكاة التجريبية:</strong>
              <p>
                هذا النموذج مصمم لأغراض استعراض تجربة الاستخدام التفاعلية لموقع مِيثاق. البيانات المدخلة لا يتم إرسالها إلى أي خوادم خارجية أو جهة حقيقية، ولا تشكل أي التزام تعاقدي.
              </p>
            </div>
          </div>

          <div className="consult-form-card mithaq-card">
            {submittedSuccess ? (
              <div className="consult-success-panel">
                <div className="success-badge-icon">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="success-heading">تم تسجيل طلب الاستشارة بنجاح (محاكاة تفاعلية)</h2>
                <p className="success-desc">
                  شكرًا لكم. في بيئة العمل الحقيقية، يقوم المنسق القانوني بمراجعة النبذة وتأكيد موعد الجلسة الاستشارية ومطابقة تضارب المصالح مسبقًا.
                </p>
                <div className="success-summary-box">
                  <div className="summary-row">
                    <span>مقدم الطلب:</span>
                    <strong>{formData.fullName}</strong>
                  </div>
                  <div className="summary-row">
                    <span>المجال القانوني:</span>
                    <strong>
                      {PRACTICE_AREAS.find((p) => p.slug === formData.practiceArea)?.title ||
                        formData.practiceArea}
                    </strong>
                  </div>
                  <div className="summary-row">
                    <span>نوع الجلسة:</span>
                    <strong>
                      {formData.preferredMethod === 'in_person'
                        ? 'حضورية في المقر'
                        : 'اتصال مرئي مشفر'}
                    </strong>
                  </div>
                </div>

                <button
                  type="button"
                  className="reset-consult-btn"
                  onClick={() => {
                    setSubmittedSuccess(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      practiceArea: 'corporate-and-business',
                      urgency: 'normal',
                      preferredMethod: 'in_person',
                      matterSummary: '',
                    });
                  }}
                >
                  تقديم طلب استشارة جديد
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="consult-form-element" noValidate>
                <div className="consult-form-header">
                  <h3 className="form-title">بيانات طالب الاستشارة وطبيعة المسألة</h3>
                  <p className="form-subtitle">
                    يرجى تزويدنا بالمعلومات الأساسية لتوجيه الطلب للمستشار المختص
                  </p>
                </div>

                <div className="form-group">
                  <label htmlFor="consultName" className="form-label">
                    الاسم الكامل <span className="req">*</span>
                  </label>
                  <input
                    id="consultName"
                    type="text"
                    className={`form-input ${errors.fullName ? 'error' : ''}`}
                    placeholder="الاسم الثلاثي أو اسم الكيان التجاري"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                  {errors.fullName && (
                    <span className="form-error-msg">{errors.fullName}</span>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="consultEmail" className="form-label">
                      البريد الإلكتروني <span className="req">*</span>
                    </label>
                    <input
                      id="consultEmail"
                      type="email"
                      dir="ltr"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="example@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <span className="form-error-msg">{errors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="consultPhone" className="form-label">
                      رقم الهاتف / الواتساب <span className="req">*</span>
                    </label>
                    <input
                      id="consultPhone"
                      type="tel"
                      dir="ltr"
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      placeholder="+966 ..."
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                    {errors.phone && (
                      <span className="form-error-msg">{errors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="consultPractice" className="form-label">
                      المجال القانوني محل الاستشارة
                    </label>
                    <select
                      id="consultPractice"
                      className="form-select"
                      value={formData.practiceArea}
                      onChange={(e) =>
                        setFormData({ ...formData, practiceArea: e.target.value })
                      }
                    >
                      {PRACTICE_AREAS.map((area) => (
                        <option key={area.id} value={area.slug}>
                          {area.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="consultUrgency" className="form-label">
                      درجة الأهمية الزمنية
                    </label>
                    <select
                      id="consultUrgency"
                      className="form-select"
                      value={formData.urgency}
                      onChange={(e) =>
                        setFormData({ ...formData, urgency: e.target.value })
                      }
                    >
                      <option value="normal">عادية (خلال 3 إلى 5 أيام عمل)</option>
                      <option value="urgent">عاجلة (خلال 24 إلى 48 ساعة)</option>
                      <option value="deadline">مرتبطة بمهلة قضائية أو عقدية محددة</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">طريقة انعقاد الجلسة المفضلة</label>
                  <div className="session-method-options">
                    <label
                      className={`method-radio-card ${
                        formData.preferredMethod === 'in_person' ? 'selected' : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredMethod"
                        value="in_person"
                        checked={formData.preferredMethod === 'in_person'}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredMethod: e.target.value })
                        }
                        style={{ display: 'none' }}
                      />
                      <Building size={20} className="method-icon" />
                      <div>
                        <strong>حضوريًا في المقر</strong>
                        <span>جلسة عمل وتداول المستندات شخصيًا</span>
                      </div>
                    </label>

                    <label
                      className={`method-radio-card ${
                        formData.preferredMethod === 'video_call' ? 'selected' : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredMethod"
                        value="video_call"
                        checked={formData.preferredMethod === 'video_call'}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredMethod: e.target.value })
                        }
                        style={{ display: 'none' }}
                      />
                      <Video size={20} className="method-icon" />
                      <div>
                        <strong>اتصال مرئي مشفر</strong>
                        <span>عبر منصة مرئية آمنة للشركات والمستثمرين</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="matterSummary" className="form-label">
                    نبذة عن موضوع الاستشارة والوقائع <span className="req">*</span>
                  </label>
                  <textarea
                    id="matterSummary"
                    rows={5}
                    className={`form-textarea ${errors.matterSummary ? 'error' : ''}`}
                    placeholder="يرجى تلخيص الوقائع الأساسية، الأطراف المعنية، والهدف المطلوب من الاستشارة..."
                    value={formData.matterSummary}
                    onChange={(e) =>
                      setFormData({ ...formData, matterSummary: e.target.value })
                    }
                  />
                  {errors.matterSummary && (
                    <span className="form-error-msg">{errors.matterSummary}</span>
                  )}
                </div>

                <div className="form-submit-block">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>جارٍ معالجة الطلب...</span>
                    ) : (
                      <span>تأكيد طلب موعد الاستشارة</span>
                    )}
                  </Button>
                </div>

                <p className="form-footer-privacy-note">
                  <Lock size={14} />
                  <span>تخضع كافة البيانات لفحص تضارب المصالح المسبق وبروتوكول السرية الائتمانية.</span>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
