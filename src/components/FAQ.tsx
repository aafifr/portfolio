import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faqs } from '../data/portfolioData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-10 pb-[130px] px-6 sm:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-[80px]">
        {/* Left Column: Tag & Heading (Exactly 360px on desktop) */}
        <div className="w-full lg:w-[360px] shrink-0">
          <span className="font-mono text-[11.5px] text-[#8E95A2] font-medium tracking-[0.18em] uppercase block mb-3">
            (07) FAQ
          </span>
          <h2 className="text-3xl sm:text-[38px] lg:text-[40px] font-medium tracking-[-0.035em] text-[#111111] leading-[1.15] font-sans">
            Frequently asked.
          </h2>
        </div>

        {/* Right Column: FAQ Accordion List (Exactly 760px on desktop, padding 26px 0px) */}
        <div className="w-full lg:w-[760px] divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.id} className="transition-colors">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-[26px] flex items-center justify-between text-left group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-[17px] sm:text-[18px] font-medium text-[#111111] group-hover:text-[#2563EB] transition-colors pr-6 font-sans">
                    {faq.question}
                  </span>

                  <div className="shrink-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="text-[#111111] group-hover:text-[#2563EB]"
                    >
                      <Plus className="w-5 h-5 stroke-[1.75]" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#52525B] text-[15px] sm:text-[15.5px] leading-[1.65] font-normal pb-[26px] font-sans pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
