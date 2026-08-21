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
import { OpenSource } from './components/OpenSource';
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
    const handlePopState = () => {
      if (window.location.pathname === '/projects' || window.location.hash === '#projects-archive') {
        setCurrentView('projects');
      } else if (window.location.pathname === '/contact' || window.location.hash === '#contact') {
        setCurrentView('contact');
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToProjects = () => {
    setCurrentView('projects');
    if (window.location.pathname !== '/projects') {
      window.history.pushState({ view: 'projects' }, '', '/projects');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToContact = () => {
    setCurrentView('contact');
    if (window.location.pathname !== '/contact') {
      window.history.pushState({ view: 'contact' }, '', '/contact');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = (targetSectionId?: string) => {
    setCurrentView('home');
    if (window.location.pathname !== '/') {
      window.history.pushState({ view: 'home' }, '', '/');
    }
    if (targetSectionId) {
      setTimeout(() => {
        const el = document.getElementById(targetSectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white flex flex-col font-sans">
      {/* Sticky Navigation */}
      <Navbar
        currentView={currentView}
        onNavigateHome={navigateToHome}
        onNavigateProjects={navigateToProjects}
        onNavigateContact={navigateToContact}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {currentView === 'projects' ? (
          <AllProjectsPage onBackToHome={() => navigateToHome()} />
        ) : currentView === 'contact' ? (
          <ContactPage onBackToHome={() => navigateToHome()} />
        ) : (
          <>
            {/* Hero Section */}
            <Hero onOpenContact={navigateToContact} />

            {/* Tech Marquee Bar */}
            <TechMarquee />

            {/* Section (01) About & Stats */}
            <About />

            {/* Section (02) Stack Tools */}
            <TechStackSection />

            {/* Section (03) Experience Timeline */}
            <ExperienceSection />

            {/* Section (04) Featured Projects Showcase */}
            <FeaturedProjects onViewAllProjects={navigateToProjects} />

            {/* Section (05) Credentials & Recognition */}
            <CredentialsSection />

            {/* Section (06) Open Source Tools & Repos */}
            <OpenSource />

            {/* Section (07) Testimonials */}
            <Testimonials />

            {/* Section (08) FAQ Accordion */}
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
