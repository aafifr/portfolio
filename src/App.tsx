import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { About } from './components/About';
import { TechStackSection } from './components/TechStackSection';
import { ExperienceSection } from './components/Experience';
import { FeaturedProjects } from './components/FeaturedProjects';
import { OpenSource } from './components/OpenSource';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white flex flex-col font-sans">
      {/* Sticky Navigation */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* Tech Marquee Bar */}
        <TechMarquee />

        {/* Section (01) About & Stats */}
        <About />

        {/* Section (02) Stack Tools */}
        <TechStackSection />

        {/* Section (03) Experience Timeline */}
        <ExperienceSection />

        {/* Section (04) Featured Projects Showcase */}
        <FeaturedProjects />

        {/* Section (05) Open Source Tools & Repos */}
        <OpenSource />

        {/* Section (06) Testimonials */}
        <Testimonials />

        {/* Section (07) FAQ Accordion */}
        <FAQ />
      </main>

      {/* Dark Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;
