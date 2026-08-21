import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Award, Trophy, ChevronDown } from 'lucide-react';
import { InstagramLogo } from './BrandLogos';
import { certifications, awards } from '../data/portfolioData';

export const CredentialsSection: React.FC = () => {
  // Default open first item in each column as visual affordance
  const [expandedCerts, setExpandedCerts] = useState<Record<string, boolean>>({
    'cert-bnsp-web': true,
  });
  const [expandedAwards, setExpandedAwards] = useState<Record<string, boolean>>({
    'award-poster-uny': true,
  });

  const toggleCert = (id: string) => {
    setExpandedCerts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleAward = (id: string) => {
    setExpandedAwards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="credentials" className="py-[100px] sm:py-[120px] px-6 sm:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto w-full">
        
        {/* Section Tag & Heading */}
        <div className="mb-14 sm:mb-16">
          <span className="font-mono text-[11.5px] text-[#8E95A2] font-medium tracking-[0.18em] uppercase block mb-3">
            (05) CREDENTIALS & RECOGNITION
          </span>
          <h2 className="text-3xl sm:text-[38px] lg:text-[40px] font-medium tracking-[-0.035em] text-[#111111] leading-[1.15] font-sans">
            Verified standards & creative honors.
          </h2>
          <p className="text-[16px] sm:text-[17px] text-[#64748B] font-normal font-sans leading-[1.65] max-w-[620px] mt-3">
            A balanced record of national professional competencies, pre-university software engineering immersion, and design competition accolades.
          </p>
        </div>

        {/* 2-Column Equal-Rhythm Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Certifications & Immersion (6 cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            {/* Column Header with subtle indicator */}
            <div className="pb-3 border-b border-[#E5E7EB] flex items-center justify-between">
              <span className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-[#8E95A2] font-semibold">
                (A) CERTIFICATIONS & IMMERSION
              </span>
              <span className="font-mono text-[11.5px] text-[#8E95A2]">
                {certifications.length} CREDENTIALS
              </span>
            </div>

            {/* List of Certifications (Expandable Cards) */}
            <div className="space-y-5">
              {certifications.map((cert, idx) => {
                const isExpanded = !!expandedCerts[cert.id];

                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E7EB] hover:border-neutral-400 transition-all flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-3">
                      {/* Header: Index, Badge & Period */}
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11.5px] text-[#8E95A2] font-semibold">
                            0{idx + 1}
                          </span>
                          <span className="text-[#CBD5E1]">•</span>
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[#111111] font-semibold">
                            {cert.type === 'certification' ? 'BNSP • NATIONAL LICENSE' : 'RESIDENTIAL IT PROGRAM'}
                          </span>
                        </div>

                        <span className="font-mono text-[12px] text-[#8E95A2]">
                          {cert.period}
                        </span>
                      </div>

                      {/* Title & Issuer (Clickable to toggle expand) */}
                      <div
                        onClick={() => toggleCert(cert.id)}
                        className="cursor-pointer select-none group/title"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="text-[18px] sm:text-[19px] font-medium text-[#111111] tracking-tight font-sans group-hover/title:text-blue-600 transition-colors">
                              {cert.title}
                            </h3>
                            <p className="text-[13.5px] text-[#64748B] font-sans mt-0.5">
                              {cert.issuer}
                            </p>
                            {cert.credentialId && (
                              <div className="text-[11.5px] font-mono text-[#94A3B8] mt-1">
                                {cert.credentialId}
                              </div>
                            )}
                          </div>

                          {/* Subtle Expand Indicator Icon */}
                          <button
                            type="button"
                            aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                            className="p-1.5 rounded-full hover:bg-neutral-100 text-[#8E95A2] hover:text-[#111111] transition-all shrink-0 mt-0.5"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${
                                isExpanded ? 'rotate-180 text-[#111111]' : ''
                              }`}
                            />
                          </button>
                        </div>
                      </div>

                      {/* Expandable Content: Description & Scope Line */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            key="content"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden space-y-3 pt-1 border-t border-[#F8F9FA]"
                          >
                            <p className="text-[14px] text-[#52525B] leading-[1.65] font-sans">
                              {cert.description}
                            </p>

                            {cert.skills && (
                              <div className="text-[12px] font-mono text-[#8E95A2] tracking-wide pt-0.5">
                                {cert.skills.join(' · ')}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Bottom Action Link (Always Visible) */}
                    {cert.certificateUrl && (
                      <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                        <a
                          href={cert.certificateUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#111111] hover:text-[#2563EB] transition-colors group/link"
                        >
                          <Award className="w-3.5 h-3.5 text-[#64748B] group-hover/link:text-[#2563EB] transition-colors" />
                          <span>View Certificate Document</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover/link:text-[#2563EB] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                        </a>

                        <button
                          type="button"
                          onClick={() => toggleCert(cert.id)}
                          className="text-[11.5px] font-mono text-[#8E95A2] hover:text-[#111111] transition-colors cursor-pointer"
                        >
                          {isExpanded ? 'Hide scope' : 'Show scope'}
                        </button>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Honors & Competitions (6 cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            {/* Column Header with subtle indicator */}
            <div className="pb-3 border-b border-[#E5E7EB] flex items-center justify-between">
              <span className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-[#8E95A2] font-semibold">
                (B) HONORS & COMPETITIONS
              </span>
              <span className="font-mono text-[11.5px] text-[#8E95A2]">
                {awards.length} HONORS
              </span>
            </div>

            {/* List of Awards (Expandable Cards) */}
            <div className="space-y-5">
              {awards.map((award, idx) => {
                const isExpanded = !!expandedAwards[award.id];

                return (
                  <motion.div
                    key={award.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E7EB] hover:border-neutral-400 transition-all flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-3">
                      {/* Header: Index, Badge & Year */}
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11.5px] text-[#8E95A2] font-semibold">
                            0{idx + 1}
                          </span>
                          <span className="text-[#CBD5E1]">•</span>
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[#111111] font-semibold">
                            {award.badge.toUpperCase()}
                          </span>
                        </div>

                        <span className="font-mono text-[12px] text-[#8E95A2]">
                          {award.year}
                        </span>
                      </div>

                      {/* Title & Event (Clickable to toggle expand) */}
                      <div
                        onClick={() => toggleAward(award.id)}
                        className="cursor-pointer select-none group/title"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="text-[18px] sm:text-[19px] font-medium text-[#111111] tracking-tight font-sans group-hover/title:text-blue-600 transition-colors">
                              {award.title}
                            </h3>
                            <p className="text-[13.5px] text-[#64748B] font-sans mt-0.5">
                              {award.event} • {award.issuer}
                            </p>
                          </div>

                          {/* Subtle Expand Indicator Icon */}
                          <button
                            type="button"
                            aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                            className="p-1.5 rounded-full hover:bg-neutral-100 text-[#8E95A2] hover:text-[#111111] transition-all shrink-0 mt-0.5"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${
                                isExpanded ? 'rotate-180 text-[#111111]' : ''
                              }`}
                            />
                          </button>
                        </div>
                      </div>

                      {/* Expandable Content: Description & Scope Line */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            key="content"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden space-y-3 pt-1 border-t border-[#F8F9FA]"
                          >
                            <p className="text-[14px] text-[#52525B] leading-[1.65] font-sans">
                              {award.description}
                            </p>

                            {award.skills && (
                              <div className="text-[12px] font-mono text-[#8E95A2] tracking-wide pt-0.5">
                                {award.skills.join(' · ')}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Bottom Action Links (Always Visible) */}
                    <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        {award.certificateUrl && (
                          <a
                            href={award.certificateUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#111111] hover:text-[#2563EB] transition-colors group/link"
                          >
                            <Trophy className="w-3.5 h-3.5 text-[#64748B] group-hover/link:text-[#2563EB] transition-colors" />
                            <span>View Certificate</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover/link:text-[#2563EB] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                          </a>
                        )}

                        {award.artworkUrl && (
                          <a
                            href={award.artworkUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#111111] hover:text-[#E1306C] transition-colors group/link"
                          >
                            <InstagramLogo className="w-3.5 h-3.5 text-[#E1306C]" />
                            <span>{award.artworkButtonText || "View Artwork"}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover/link:text-[#E1306C] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                          </a>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleAward(award.id)}
                        className="text-[11.5px] font-mono text-[#8E95A2] hover:text-[#111111] transition-colors cursor-pointer"
                      >
                        {isExpanded ? 'Hide scope' : 'Show scope'}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
