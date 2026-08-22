import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { About } from './components/About';
import { TechStackSection } from './components/TechStackSection';
import { ExperienceSection } from './components/Experience';
import { FeaturedProjects } from './components/FeaturedProjects';
import { AllProjectsPage } from './components/AllProjectsPage';
import { ContactPage } from './components/ContactPage';
import { CredentialsSection } from './components/CredentialsSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'projects' | 'contact'>(() => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/projects' || window.location.hash === '#projects-archive') {
        return 'projects';
      }
      if (window.location.pathname === '/contact' || window.location.hash === '#contact') {
        return 'contact';
      }
    }
    return 'home';
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Keep navigation in sync with browser URL history without page reload
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/projects' || hash === '#projects-archive') {
        setCurrentView('projects');
      } else if (path === '/contact' || hash === '#contact') {
        setCurrentView('contact');
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToProjects = () => {
    window.history.pushState(null, '', '/projects');
    setCurrentView('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToContact = () => {
    window.history.pushState(null, '', '/contact');
    setCurrentView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    window.history.pushState(null, '', '/');
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] antialiased selection:bg-neutral-900 selection:text-white font-sans">
      {/* Sticky Global Navigation Bar */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        currentView={currentView}
        onNavigateHome={navigateToHome}
        onNavigateProjects={navigateToProjects}
        onNavigateContact={navigateToContact}
      />

      <main>
        {currentView === 'projects' ? (
          <AllProjectsPage onBackToHome={navigateToHome} />
        ) : currentView === 'contact' ? (
          <ContactPage onBackToHome={navigateToHome} />
        ) : (
          <>
            {/* Hero Section */}
            <Hero onOpenContact={() => setIsContactOpen(true)} />

            {/* Marquee Bar: Tech Stack & Cloud Infrastructure */}
            <TechMarquee />

            {/* Section (01) Narrative & Stats */}
            <About />

            {/* Section (02) Stack Tools */}
            <TechStackSection />

            {/* Section (03) Experience Timeline */}
            <ExperienceSection />

            {/* Section (04) Featured Projects Showcase */}
            <FeaturedProjects onViewAllProjects={navigateToProjects} />

            {/* Section (05) Credentials & Recognition */}
            <CredentialsSection />

            {/* Section (06) Testimonials */}
            <Testimonials />

            {/* Section (07) FAQ Accordion */}
            <FAQ />
          </>
        )}
      </main>

      {/* Dark Footer */}
      <Footer onOpenContact={navigateToContact} />

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Floating Action Buttons (Scroll to top + WhatsApp) */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
