import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, ChevronUp, ArrowUpLeft } from 'lucide-react';
import { SEOHead } from '../../components/ui/SEOHead';
import { FAQS, FAQ_CATEGORIES } from '../../data/faqs';
import { Button } from '../../components/ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './FAQPage.css';

interface FAQPageProps {
  onOpenConsultation: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
  });

  const pageRef = useRef<HTMLDivElement>(null);
  useScrollReveal({ containerRef: pageRef, animateHero: true });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs =
    activeCategory === 'all'
      ? FAQS
      : FAQS.filter((f) => f.category === activeCategory);

  return (
    <div className="faq-page-root" ref={pageRef}>
      <SEOHead
        title="الأسئلة الشائعة"
        description="إجابات وافية وشاملة حول آليات التكليف، سرية المعلومات، إدارة القضايا، وأتعاب الخدمات في مِيثاق."
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-breadcrumbs">
            <Link to="/">الرئيسية</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">الأسئلة الشائعة</span>
          </div>

          <div className="page-hero-badge">
            <HelpCircle size={16} />
            <span>الشفافية والتوضيح المسبق</span>
          </div>

          <h1 className="page-hero-title">
            إجابات وافية على كافة ما يشغلكم حول التكليف والتمثيل القانوني
          </h1>

          <p className="page-hero-lead">
            نؤمن بأن الوضوح هو أساس العلاقة الائتمانية الناجحة. نلخص هنا أبرز التساؤلات المتكررة حول آليات التعاقد، وبروتوكولات السرية وحفظ البيانات، ومنهجية المتابعة القضائية.
          </p>
        </div>
      </section>

      {/* Category Pills & FAQ List */}
      <section className="page-section">
        <div className="container container-narrow">
          <div className="faq-filter-pills">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="faq-accordion-list">
            {filteredFaqs.map((faq) => {
              const isOpen = !!openItems[faq.id];
              return (
                <div key={faq.id} className={`faq-full-item mithaq-card ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-toggle-btn"
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.question}</span>
                    {isOpen ? <ChevronUp size={22} className="faq-arrow" /> : <ChevronDown size={22} className="faq-arrow" />}
                  </button>

                  {isOpen && (
                    <div className="faq-body-panel">
                      <p className="faq-ans-text">{faq.answer}</p>
                      {faq.keyHighlight && (
                        <div className="faq-highlight-tag">
                          <span>نقطة جوهرية: </span>
                          <strong>{faq.keyHighlight}</strong>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="page-section faq-cta-section">
        <div className="container text-center">
          <h2 className="section-title">هل لديك استفسار محدد لم تجد إجابته هنا؟</h2>
          <p className="section-lead" style={{ marginInline: 'auto', marginBottom: '2rem' }}>
            فريق مِيثاق يرحب بالإجابة على كافة تساؤلاتكم القانونية والإجرائية.
          </p>
          <Button variant="primary" size="lg" onClick={onOpenConsultation}>
            <span>طرح استفسار مباشر</span>
            <ArrowUpLeft size={18} />
          </Button>
        </div>
      </section>
    </div>
  );
};
