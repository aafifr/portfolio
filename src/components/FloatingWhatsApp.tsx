import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { WhatsAppLogo } from './BrandLogos';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isWaHovered, setIsWaHovered] = useState(false);
  const [isScrollHovered, setIsScrollHovered] = useState(false);

  const phoneNumber = '6285121597870';
  const defaultMessage = 'Halo Afif, saya tertarik untuk diskusi proyek atau kolaborasi dengan Anda.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex flex-col items-center gap-3 select-none">
      
      {/* Scroll to Top Button (Appears on scroll) */}
      <AnimatePresence>
        {showScrollTop && (
          <div className="relative flex items-center">
            {/* Tooltip on Hover */}
            <AnimatePresence>
              {isScrollHovered && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-[calc(100%+12px)] bg-[#111111] text-white px-3 py-1.5 rounded-xl text-[11.5px] font-sans font-medium whitespace-nowrap shadow-xl border border-white/10 pointer-events-none"
                >
                  <span>Back to top</span>
                  <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#111111] rotate-45 border-r border-t border-white/10" />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="button"
              onClick={scrollToTop}
              onMouseEnter={() => setIsScrollHovered(true)}
              onMouseLeave={() => setIsScrollHovered(false)}
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Scroll back to top"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#111111] text-[#111111] hover:text-white border border-[#E5E7EB] hover:border-[#111111] flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-xl transition-all duration-200 cursor-pointer group"
            >
              <ArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 transform group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Action Button (Clean without indicator dot) */}
      <div className="relative flex items-center">
        {/* Tooltip on Hover */}
        <AnimatePresence>
          {isWaHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-[calc(100%+12px)] bg-[#111111] text-white px-3.5 py-2 rounded-xl text-[12px] sm:text-[12.5px] font-sans font-medium whitespace-nowrap shadow-xl border border-white/10 pointer-events-none"
            >
              <span>Chat on WhatsApp</span>
              <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#111111] rotate-45 border-r border-t border-white/10" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setIsWaHovered(true)}
          onMouseLeave={() => setIsWaHovered(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          aria-label="Chat on WhatsApp with Afif Ramadhan"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.38)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.55)] transition-shadow duration-300 group cursor-pointer"
        >
          <WhatsAppLogo className="w-7 h-7 sm:w-7.5 sm:h-7.5 fill-current transform group-hover:rotate-6 transition-transform duration-300" />
        </motion.a>
      </div>

    </div>
  );
};

// Also export as FloatingWhatsApp for backwards compatibility
export const FloatingWhatsApp = FloatingActions;
