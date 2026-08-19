import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#opensource' },
    { name: 'Contact', href: '#faq' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-[#FAFAFA]/75 backdrop-blur-md border-b border-[#E5E7EB] px-6 sm:px-12 py-[22px] h-[92px] flex items-center justify-center"
    >
      <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="text-[#000000] font-bold text-[17px] sm:text-[18px] tracking-tight hover:opacity-80 transition-opacity font-sans"
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
                className="text-[14px] font-normal text-[#64748B] hover:text-[#000000] transition-colors font-sans"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Let's Talk CTA Button (Turns Blue on Hover, No Shadow) */}
          <button
            onClick={onOpenContact}
            className="group inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full text-[13.5px] font-medium text-white bg-[#111111] hover:bg-[#2563EB] active:scale-97 transition-colors duration-200 cursor-pointer ml-1 font-sans"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-800 hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-[92px] left-0 right-0 bg-[#FAFAFA]/95 backdrop-blur-md border-b border-neutral-200 px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-base font-normal text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-neutral-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#000000] text-white text-xs font-medium shadow-md active:scale-98 transition-all"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
