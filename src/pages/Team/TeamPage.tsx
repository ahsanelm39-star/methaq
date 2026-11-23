import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Users, Shield, CheckCircle2, ArrowUpLeft } from 'lucide-react';
import { SEOHead } from '../../components/ui/SEOHead';
import { TEAM_MEMBERS } from '../../data/team';
import { Button } from '../../components/ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './TeamPage.css';

interface TeamPageProps {
  onOpenConsultation: () => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onOpenConsultation }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  useScrollReveal({ containerRef: pageRef, animateHero: true });

  return (
    <div className="team-page-root" ref={pageRef}>
      <SEOHead
        title="فريق العمل"
        description="تعرف على الكفاءات الاستشارية والقانونية في مِيثاق — نخبة متخصصة في حوكمة الشركات، التقاضي المتقدم، العقود، والملكية الفكرية."
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="page-breadcrumbs">
            <Link to="/">الرئيسية</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">فريق العمل</span>
          </div>

          <div className="page-hero-badge">
            <Users size={16} />
            <span>الخبرات والكفاءات القانونية</span>
          </div>

          <h1 className="page-hero-title">
            رؤى متكاملة وتخصصات قانونية يقودها نخبة من المستشارين
          </h1>

          <p className="page-hero-lead">
            تتطلب الممارسة القانونية المعاصرة فهمًا متعدد الأبعاد؛ لذلك تستند جودة مخرجات مِيثاق إلى تكامل الخبرات التخصصية، ودقة التحليل الفقهي والنظامي، والإشراف المباشر على كافة القضايا والاستشارات.
          </p>
        </div>
      </section>

      {/* Team Disclosure Banner */}
      <section className="team-disclosure-section">
        <div className="container">
          <div className="team-disclosure-banner">
            <Shield size={18} className="disclosure-icon" />
            <p>
              <strong>إشعار الشفافية:</strong> مِيثاق نموذج رقمي تجريبي مستقل أُنشئ لأغراض العرض التوضيحي، وكافة الشخصيات والأسماء والصفات الواردة في هذا القسم هي نماذج افتراضية صُممت لتمثيل نموذج حوكمة المكاتب القانونية الكبرى.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="page-section team-grid-section">
        <div className="container">
          <div className="team-members-grid">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="team-member-card mithaq-card">
                <div className="member-card-top">
                  {member.imageUrl ? (
                    <div className="member-photo-frame">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="member-photo"
                        loading="lazy"
                        width="400"
                        height="480"
                      />
                      <div className="member-photo-overlay" />
                      <div className="member-photo-monogram" aria-hidden="true">
                        <span>{member.initials}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="member-avatar-monogram" aria-hidden="true">
                      <span>{member.initials}</span>
                    </div>
                  )}
                  <div className="member-status-badge">
                    <span>مستشار رئيسي</span>
                  </div>
                </div>

                <div className="member-card-info">
                  <h2 className="member-name">{member.name}</h2>
                  <span className="member-role">{member.role}</span>
                  <p className="member-spec">{member.specialization}</p>
                  <p className="member-bio">{member.bio}</p>

                  <div className="member-focus-areas">
                    <span className="focus-heading">مجالات التركيز الرئيسية:</span>
                    <div className="focus-tags">
                      {member.focusAreas.map((tag, idx) => (
                        <span key={idx} className="focus-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="member-credentials">
                    <span className="credentials-heading">أبرز مجالات الخبرة الاستشارية:</span>
                    <ul className="credentials-list">
                      {member.credentialsOverview.map((item, idx) => (
                        <li key={idx} className="credential-item">
                          <CheckCircle2 size={14} className="cred-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section team-cta-section">
        <div className="container text-center">
          <h2 className="section-title">هل ترغب في توجيه استفسارك لمستشار في مجال معين؟</h2>
          <p className="section-lead" style={{ marginInline: 'auto', marginBottom: '2rem' }}>
            يمكنكم حجز جلسة استشارية وتحديد التخصص المطلوب لتوجيه الملف للفريق المعني مباشرة.
          </p>
          <Button variant="primary" size="lg" onClick={onOpenConsultation}>
            <span>طلب استشارة مع الفريق</span>
            <ArrowUpLeft size={18} />
          </Button>
        </div>
      </section>
    </div>
  );
};
