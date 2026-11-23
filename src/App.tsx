import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { PageTransition } from './components/layout/PageTransition';
import { ConsultationModal } from './components/ui/ConsultationModal';

// Route-level code splitting via React.lazy
const HomePage = lazy(() =>
  import('./pages/Home/HomePage').then((m) => ({ default: m.HomePage }))
);
const AboutPage = lazy(() =>
  import('./pages/About/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const ServicesIndexPage = lazy(() =>
  import('./pages/Services/ServicesIndexPage').then((m) => ({
    default: m.ServicesIndexPage,
  }))
);
const ServiceDetailPage = lazy(() =>
  import('./pages/Services/ServiceDetailPage').then((m) => ({
    default: m.ServiceDetailPage,
  }))
);
const ApproachPage = lazy(() =>
  import('./pages/Approach/ApproachPage').then((m) => ({
    default: m.ApproachPage,
  }))
);
const TeamPage = lazy(() =>
  import('./pages/Team/TeamPage').then((m) => ({ default: m.TeamPage }))
);
const InsightsIndexPage = lazy(() =>
  import('./pages/Insights/InsightsIndexPage').then((m) => ({
    default: m.InsightsIndexPage,
  }))
);
const ArticleDetailPage = lazy(() =>
  import('./pages/Insights/ArticleDetailPage').then((m) => ({
    default: m.ArticleDetailPage,
  }))
);
const ContactPage = lazy(() =>
  import('./pages/Contact/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const ConsultationPage = lazy(() =>
  import('./pages/Consultation/ConsultationPage').then((m) => ({
    default: m.ConsultationPage,
  }))
);
const FAQPage = lazy(() =>
  import('./pages/FAQ/FAQPage').then((m) => ({ default: m.FAQPage }))
);
const PrivacyPage = lazy(() =>
  import('./pages/Privacy/PrivacyPage').then((m) => ({ default: m.PrivacyPage }))
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFound/NotFoundPage').then((m) => ({
    default: m.NotFoundPage,
  }))
);

// Fallback skeleton loader during route transitions
const PageLoadingFallback: React.FC = () => (
  <div
    style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '1rem',
      color: 'var(--text-muted)',
    }}
    aria-label="جارٍ تحميل الصفحة..."
  >
    <div
      style={{
        width: '40px',
        height: '40px',
        border: '2px solid rgba(195, 164, 111, 0.2)',
        borderTopColor: 'var(--accent-secondary)',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }}
    />
    <span style={{ fontSize: '0.85rem' }}>مِيثاق للمحاماة والاستشارات...</span>
    <style>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export const App: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => setIsConsultationOpen(true);
  const handleCloseConsultation = () => setIsConsultationOpen(false);

  return (
    <Router>
      <div className="app-root">
        {/* Scroll restoration on route change */}
        <ScrollToTop />

        {/* Branded page transition overlay */}
        <PageTransition />

        {/* Persistent Institutional Header */}
        <Header onOpenConsultation={handleOpenConsultation} />

        {/* Main Content Area with Route Splitting */}
        <main id="main-content">
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              {/* Home */}
              <Route
                path="/"
                element={<HomePage onOpenConsultation={handleOpenConsultation} />}
              />

              {/* About */}
              <Route
                path="/about"
                element={<AboutPage onOpenConsultation={handleOpenConsultation} />}
              />

              {/* Services Directory */}
              <Route
                path="/services"
                element={
                  <ServicesIndexPage onOpenConsultation={handleOpenConsultation} />
                }
              />

              {/* Individual Service Detail Pages */}
              <Route
                path="/services/:slug"
                element={
                  <ServiceDetailPage onOpenConsultation={handleOpenConsultation} />
                }
              />

              {/* Working Methodology */}
              <Route
                path="/approach"
                element={<ApproachPage onOpenConsultation={handleOpenConsultation} />}
              />

              {/* Legal Team */}
              <Route
                path="/team"
                element={<TeamPage onOpenConsultation={handleOpenConsultation} />}
              />

              {/* Legal Insights Hub */}
              <Route
                path="/insights"
                element={
                  <InsightsIndexPage onOpenConsultation={handleOpenConsultation} />
                }
              />

              {/* Individual Article Reading Pages */}
              <Route
                path="/insights/:slug"
                element={
                  <ArticleDetailPage onOpenConsultation={handleOpenConsultation} />
                }
              />

              {/* Contact Page */}
              <Route
                path="/contact"
                element={<ContactPage onOpenConsultation={handleOpenConsultation} />}
              />

              {/* Consultation Intake Page */}
              <Route path="/consultation" element={<ConsultationPage />} />

              {/* FAQ Page */}
              <Route
                path="/faq"
                element={<FAQPage onOpenConsultation={handleOpenConsultation} />}
              />

              {/* Privacy Policy */}
              <Route path="/privacy" element={<PrivacyPage />} />

              {/* 404 Not Found Catch-All */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Persistent Footer */}
        <Footer />

        {/* Global Quick Consultation Modal */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={handleCloseConsultation}
        />
      </div>
    </Router>
  );
};

export default App;
