import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Who do you work with?',
      answer:
        'I partner with early-stage to growth-stage startups, product studios, and engineering teams looking for a seasoned full-stack engineer with strong product and design instincts.',
    },
    {
      id: 'faq-2',
      question: 'What technologies do you use?',
      answer:
        'My primary stack is TypeScript, React, Next.js, Node.js, Postgres, and Tailwind CSS. I also have deep experience with GraphQL, Go, Supabase, AWS, Docker, and Framer Motion.',
    },
    {
      id: 'faq-3',
      question: 'How long does a project take?',
      answer:
        'Timelines typically range from 2 to 8 weeks depending on scope. I work in focused sprints with transparent weekly milestones and continuous deployment.',
    },
    {
      id: 'faq-4',
      question: 'Do you work remotely?',
      answer:
        'Yes, I work 100% remotely with teams across US, European, and Asian time zones with dedicated overlap hours for synchronous syncs.',
    },
    {
      id: 'faq-5',
      question: 'Can you join an existing team?',
      answer:
        'Absolutely. I seamlessly integrate with established engineering teams, adopting your existing Git workflows, CI/CD pipelines, and design systems from day one.',
    },
  ];

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
