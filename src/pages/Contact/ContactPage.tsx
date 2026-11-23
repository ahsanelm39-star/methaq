import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  Send,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';
import { SEOHead } from '../../components/ui/SEOHead';
import { INSTITUTIONAL_INFO } from '../../data/navigation';
import { Button } from '../../components/ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ContactPage.css';

interface ContactPageProps {
  onOpenConsultation?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const pageRef = useRef<HTMLDivElement>(null);
  useScrollReveal({ containerRef: pageRef, animateHero: true });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'يرجى كتابة الاسم الكريم';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'يرجى إدخال بريد إلكتروني صحيح';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'يرجى إدخال رقم الهاتف للتواصل';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'يرجى كتابة تفاصيل الاستفسار (10 أحرف على الأقل)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Locally simulated successful submission for demonstration
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 800);
  };

  return (
    <div className="contact-page-root" ref={pageRef}>
      <SEOHead
        title="تواصل معنا"
        description="تواصل مع صرح مِيثاق للمحاماة والاستشارات القانونية، قنوات الاتصال، أوقات العمل، ونموذج إرسال الاستفسارات."
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-breadcrumbs">
            <Link to="/">الرئيسية</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">تواصل معنا</span>
          </div>

          <div className="page-hero-badge">
            <MessageSquare size={16} />
            <span>قنوات التواصل المؤسسي</span>
          </div>

          <h1 className="page-hero-title">
            نرحب بالتواصل ومناقشة متطلباتكم القانونية
          </h1>

          <p className="page-hero-lead">
            يسعد فريق مِيثاق باستقبال استفسارات الشركات والمؤسسات والمستثمرين، وتقديم المشورة الأولية لتحديد أنسب مسارات التكليف والتمثيل القانوني.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="page-section contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Info Column */}
            <div className="contact-info-column">
              <div className="section-badge">
                <span>بيانات التواصل الرسمية</span>
              </div>
              <h2 className="contact-col-title">قنوات الاتصال والاستقبال</h2>
              <p className="contact-col-lead">
                يمكنكم التواصل عبر الهاتف أو البريد الإلكتروني أو حجز موعد لجلسة استشارة حضورية أو مرئية مشفرة.
              </p>

              <div className="contact-channels-list">
                <div className="contact-channel-item mithaq-card">
                  <div className="channel-icon-wrap">
                    <MapPin size={22} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">المقر الرئيسي</span>
                    <span className="channel-value">{INSTITUTIONAL_INFO.address}</span>
                  </div>
                </div>

                <div className="contact-channel-item mithaq-card">
                  <div className="channel-icon-wrap">
                    <Phone size={22} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">رقم الهاتف والتنسيق المباشر</span>
                    <span className="channel-value" dir="ltr">{INSTITUTIONAL_INFO.phone}</span>
                  </div>
                </div>

                <div className="contact-channel-item mithaq-card">
                  <div className="channel-icon-wrap">
                    <Mail size={22} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">البريد الإلكتروني المعتمد</span>
                    <a href={`mailto:${INSTITUTIONAL_INFO.email}`} className="channel-link" dir="ltr">
                      {INSTITUTIONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="contact-channel-item mithaq-card">
                  <div className="channel-icon-wrap">
                    <Clock size={22} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">ساعات العمل والاستقبال</span>
                    <span className="channel-value">{INSTITUTIONAL_INFO.workingHours}</span>
                    <span className="channel-sub">{INSTITUTIONAL_INFO.consultationNotice}</span>
                  </div>
                </div>
              </div>

              {/* Demo Notice */}
              <div className="contact-demo-disclaimer mithaq-card">
                <Shield size={18} className="demo-icon" />
                <p>
                  <strong>إشعار نموذج العرض:</strong> مِيثاق منصة عرض تجريبية مستقلة، وأرقام الاتصال والعناوين البريدية المعروضة هي بيانات افتراضية لأغراض المحاكاة والتصميم.
                </p>
              </div>
            </div>

            {/* Form Column */}
            <div className="contact-form-column">
              <div className="contact-form-card mithaq-card">
                <h3 className="form-card-title">إرسال استفسار مباشر</h3>
                <p className="form-card-desc">
                  يرجى تعبئة الحقول التالية وسيقوم المنسق القانوني بالرد عليكم عبر وسيلة الاتصال المفضلة.
                </p>

                {submittedSuccess ? (
                  <div className="contact-success-state">
                    <div className="success-icon-box">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="success-title">تم استلام استفساركم بنجاح (محاكاة تجريبية)</h4>
                    <p className="success-text">
                      شكرًا لتواصلكم مع مِيثاق. تم تسجيل طلبكم بنجاح ضمن بيئة المحاكاة المحلية للعرض التوضيحي.
                    </p>
                    <button
                      type="button"
                      className="reset-form-btn"
                      onClick={() => {
                        setSubmittedSuccess(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          inquiryType: 'general',
                          message: '',
                        });
                      }}
                    >
                      إرسال استفسار آخر
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form-inner" noValidate>
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">
                        الاسم الكامل <span className="req">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        className={`form-input ${errors.fullName ? 'error' : ''}`}
                        placeholder="أدخل اسمكم الكريم"
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
                        <label htmlFor="email" className="form-label">
                          البريد الإلكتروني <span className="req">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          dir="ltr"
                          className={`form-input ${errors.email ? 'error' : ''}`}
                          placeholder="example@domain.com"
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
                        <label htmlFor="phone" className="form-label">
                          رقم الهاتف <span className="req">*</span>
                        </label>
                        <input
                          id="phone"
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

                    <div className="form-group">
                      <label htmlFor="inquiryType" className="form-label">
                        مجال الاستفسار
                      </label>
                      <select
                        id="inquiryType"
                        className="form-select"
                        value={formData.inquiryType}
                        onChange={(e) =>
                          setFormData({ ...formData, inquiryType: e.target.value })
                        }
                      >
                        <option value="general">استفسار عام</option>
                        <option value="corporate">قانون الشركات وتأسيس الكيانات</option>
                        <option value="contracts">مراجعة وصياغة العقود</option>
                        <option value="litigation">التقاضي وتمثيل النزاعات</option>
                        <option value="realestate">العقارات والإنشاءات الهندسية</option>
                        <option value="labor">العمل واللوائح الداخلية</option>
                        <option value="ip">الملكية الفكرية والتقنية</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        تفاصيل المسألة أو الاستفسار <span className="req">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className={`form-textarea ${errors.message ? 'error' : ''}`}
                        placeholder="يرجى كتابة نبذة موجزة عن موضوع الاستفسار..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                      {errors.message && (
                        <span className="form-error-msg">{errors.message}</span>
                      )}
                    </div>

                    <div className="form-submit-row">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span>جارٍ الإرسال...</span>
                        ) : (
                          <>
                            <span>إرسال الاستفسار</span>
                            <Send size={16} />
                          </>
                        )}
                      </Button>
                    </div>

                    <p className="form-secure-note">
                      🔒 كافة البيانات المدخلة مشفرة وتخضع لسياسة خصوصية صارمة (محاكاة تجريبية).
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
