import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  summary: string;
  details: string[];
  deliverables: string[];
}

export const ServicesSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const services: ServiceItem[] = [
    {
      id: 'fullstack-saas',
      num: '01',
      title: 'Full-Stack Web & SaaS Engineering',
      subtitle: 'Custom web software, multi-tenant dashboards & digital products',
      summary: 'End-to-end web engineering from database schema and backend API architecture to high-performance, responsive user interfaces.',
      details: [
        'Multi-tenant SaaS platforms with secure authentication and role management',
        'Offline-first web applications with IndexedDB and real-time WebSocket sync',
        'Modern RESTful APIs with clean database relations (PostgreSQL, MySQL, Supabase)',
      ],
      deliverables: ['Custom SaaS Platforms', 'Point-of-Sale (POS) Systems', 'Booking & Reservation Apps', 'Internal Admin Portals'],
    },
    {
      id: 'ai-automations',
      num: '02',
      title: 'AI Workflows & Process Automation',
      subtitle: 'Autonomous agents, n8n pipelines & 24/7 intelligent assistants',
      summary: 'Streamlining repetitive operations by connecting large language models (LLMs), n8n pipelines, and messaging channels into autonomous business engines.',
      details: [
        '24/7 AI customer support agents integrated directly into WhatsApp & Web',
        'Automated applicant resume parsing, scoring, and interview scheduling',
        'Cross-platform data synchronization between forms, spreadsheets, and databases',
      ],
      deliverables: ['WhatsApp AI Chatbots', 'n8n Workflow Automation', 'Auto Lead Ingestion', 'Instant Document & Invoice Sync'],
    },
    {
      id: 'management-systems',
      num: '03',
      title: 'Operational & Management Systems',
      subtitle: 'Digitizing organizational workflows, finances & resource ledgers',
      summary: 'Transforming fragile manual spreadsheets and paper records into secure, centralized web portals tailored to your specific organizational hierarchy.',
      details: [
        'Institutional and community management portals with financial ledger transparency',
        'Inventory stock tracking, member directories, and activity scheduling',
        'One-click data filtering with Excel and PDF reporting exports',
      ],
      deliverables: ['Institutional Portals', 'Inventory & Stock Systems', 'Financial Transparency Ledgers', 'Member Directories'],
    },
    {
      id: 'digital-portals',
      num: '04',
      title: 'Corporate Portals & High-Conversion Web',
      subtitle: 'Authoritative online presence, B2B catalogs & digital branding',
      summary: 'Crafting bespoke web experiences that establish immediate credibility, showcase product catalogs, and convert visitors with sub-second loading speed.',
      details: [
        'Corporate & agency company profiles with interactive inquiry routing',
        'B2B digital product catalogs with dynamic filtering and direct WhatsApp RFQ',
        'Structured search engine optimization (SEO) and social media card previews',
      ],
      deliverables: ['Corporate Company Profiles', 'B2B Product Catalogs', 'High-Converting Landing Pages', 'Tour & Agency Portals'],
    },
  ];

  return (
    <section id="services" className="py-[100px] sm:py-[120px] px-6 sm:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Left / Right Split Layout (Harmonized with About and FAQ sections) */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-[80px]">
          
          {/* Left Column: Fixed 360px width on desktop */}
          <div className="w-full lg:w-[360px] shrink-0 lg:sticky lg:top-[120px]">
            <span className="font-mono text-[11.5px] text-[#8E95A2] font-medium tracking-[0.18em] uppercase block mb-3">
              (03) SCOPE OF SERVICES
            </span>
            <h2 className="text-3xl sm:text-[38px] lg:text-[40px] font-medium tracking-[-0.035em] text-[#111111] leading-[1.15] font-sans mb-4">
              Solutions & capabilities.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#52525B] leading-[1.65] font-normal font-sans mb-8">
              Bespoke digital engineering across full-stack applications, intelligent AI automation pipelines, and robust operational platforms.
            </p>

            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] hover:bg-neutral-800 text-white text-[13px] font-medium transition-colors group"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white transition-transform" />
            </a>
          </div>

          {/* Right Column: 760px Editorial Minimalist List */}
          <div className="w-full lg:w-[760px] divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
            {services.map((service, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={service.id} className="py-6 sm:py-7 transition-colors">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-start justify-between text-left group gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className="font-mono text-[13px] text-[#8E95A2] pt-0.5 shrink-0 font-medium">
                        {service.num}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-[20px] font-medium text-[#111111] tracking-[-0.02em] font-sans group-hover:text-neutral-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-[13.5px] sm:text-[14px] text-[#8E95A2] font-normal font-sans mt-1">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#64748B] group-hover:border-neutral-400 transition-colors mt-0.5">
                      {isOpen ? <Minus className="w-4 h-4 text-[#111111]" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2 pl-[32px] sm:pl-[44px] pr-2">
                          <p className="text-[15px] sm:text-[16px] text-[#52525B] leading-[1.65] font-sans font-normal mb-5">
                            {service.summary}
                          </p>

                          {/* Key Capabilities */}
                          <div className="space-y-2.5 mb-6">
                            {service.details.map((detail, dIdx) => (
                              <div key={dIdx} className="flex items-start gap-3 text-[14px] sm:text-[14.5px] text-[#52525B] font-sans leading-[1.6]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#8E95A2] mt-2 shrink-0" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>

                          {/* Deliverables Badges */}
                          <div className="flex flex-wrap gap-2 pt-4 border-t border-[#F1F3F5]">
                            {service.deliverables.map((item, bIdx) => (
                              <span
                                key={bIdx}
                                className="text-[12px] sm:text-[12.5px] font-medium text-[#52525B] px-3 py-1 rounded-full bg-[#F8F9FA] border border-[#E5E7EB]"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
