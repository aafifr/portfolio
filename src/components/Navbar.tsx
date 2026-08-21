import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact?: () => void;
  currentView?: 'home' | 'projects' | 'contact';
  onNavigateHome?: (targetSectionId?: string) => void;
  onNavigateProjects?: () => void;
  onNavigateContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenContact,
  currentView = 'home',
  onNavigateHome,
  onNavigateProjects,
  onNavigateContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', sectionId: 'about' },
    { name: 'Experience', href: '#experience', sectionId: 'experience' },
    { name: 'Projects', href: '#projects', sectionId: 'projects' },
    { name: 'Credentials', href: '#credentials', sectionId: 'credentials' },
    { name: 'Blog', href: '#opensource', sectionId: 'opensource' },
    { name: 'Contact', href: '/contact', sectionId: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: { name: string; href: string; sectionId: string }) => {
    if (link.name === 'Contact') {
      e.preventDefault();
      if (currentView === 'contact') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (onNavigateContact) {
        onNavigateContact();
      }
      setMobileMenuOpen(false);
      return;
    }

    if (link.name === 'Projects' && onNavigateProjects) {
      if (currentView === 'projects') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      // handled
    }

    if (currentView !== 'home') {
      e.preventDefault();
      if (onNavigateHome) {
        onNavigateHome(link.sectionId);
      }
      setMobileMenuOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (currentView !== 'home' && onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b border-[#E5E7EB] px-6 sm:px-8 md:px-12 h-[68px] md:h-[92px] flex items-center justify-center ${
          mobileMenuOpen ? 'bg-white' : 'bg-[#FAFAFA]/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between">
          {/* Brand / Logo - Slim Medium Style Matching Hero Heading */}
          <a
            href="#"
            onClick={handleLogoClick}
            className="text-[#111111] font-medium text-[17px] sm:text-[18px] tracking-[-0.03em] hover:opacity-80 transition-opacity font-sans"
          >
            {personalInfo.name}
          </a>

          {/* Desktop Navigation Links & CTA */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-7 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`text-[14px] font-normal transition-colors font-sans ${
                    (currentView === 'projects' && link.name === 'Projects') ||
                    (currentView === 'contact' && link.name === 'Contact')
                      ? 'text-[#111111] font-medium'
                      : 'text-[#64748B] hover:text-[#000000]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Let's Talk CTA Button */}
            <button
              onClick={() => {
                if (onNavigateContact) {
                  onNavigateContact();
                } else if (onOpenContact) {
                  onOpenContact();
                }
              }}
              className="group inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full text-[13.5px] font-medium text-white bg-[#111111] hover:bg-[#2563EB] active:scale-97 transition-colors duration-200 cursor-pointer ml-1 font-sans"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-900 hover:bg-neutral-100 active:scale-95 transition-all cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu (Solid Background) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="md:hidden absolute top-[68px] left-0 right-0 bg-white border-b border-[#E5E7EB] px-6 py-6 shadow-xl z-50"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleLinkClick(e, link);
                    }}
                    className={`px-3.5 py-2.5 rounded-xl text-[15px] font-medium transition-colors ${
                      (currentView === 'projects' && link.name === 'Projects') ||
                      (currentView === 'contact' && link.name === 'Contact')
                        ? 'bg-neutral-100 text-neutral-950 font-semibold'
                        : 'text-neutral-800 hover:bg-neutral-50 hover:text-neutral-950'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}

                <div className="pt-4 mt-2 border-t border-[#F1F5F9]">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onNavigateContact) {
                        onNavigateContact();
                      } else if (onOpenContact) {
                        onOpenContact();
                      }
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#111111] hover:bg-[#2563EB] text-white text-[13.5px] font-medium active:scale-98 transition-colors"
                  >
                    <span>Let's Talk</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Dimmed Backdrop Overlay Outside of Mobile Menu Popup */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden fixed inset-0 top-[68px] bg-black/40 backdrop-blur-[2px] z-40 cursor-pointer"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};
