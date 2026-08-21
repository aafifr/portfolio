import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award } from 'lucide-react';

interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  logo: string;
  description: string;
  tech: string;
  certificateUrl?: string;
}

export const ExperienceSection: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: "exp-1",
      period: "Aug 2025 — Present",
      role: "Fullstack Developer Intern",
      company: "PT Cybersama Technology",
      companyUrl: "https://cybersama.com/",
      logo: "/images/cybersama-technology.png",
      description: "Enhanced and maintained KasPOS (a Laravel-based restaurant POS system), delivering custom feature requests and receipt printing workflows for production readiness. Also developed custom Odoo modules and managed Linux server infrastructure.",
      tech: "Laravel · PostgreSQL · Odoo · CyberPanel · Linux · Cloudflare",
      certificateUrl: "/certificates/sertifikat-cybersama.pdf",
    },
    {
      id: "exp-2",
      period: "Feb 2026 — Jul 2026",
      role: "AI Automation Developer",
      company: "Nurul Fikri Academy",
      companyUrl: "https://nfacademy.id/",
      logo: "/images/nurulfikri-academy.jpeg",
      description: "Developed end-to-end business process automations across HR, Finance, and Marketing using n8n and LLM APIs. Architected an autonomous AI CV Sorter and interview auto-scheduler pipeline integrating Gemini and Google Calendar.",
      tech: "n8n · Google Gemini AI · OpenAI API · Claude · JavaScript",
      certificateUrl: "/certificates/sertifikat-nfa-ai-automation.pdf",
    },
    {
      id: "exp-3",
      period: "Sep 2025 — Dec 2025",
      role: "Fullstack Web Developer",
      company: "Nurul Fikri Academy",
      companyUrl: "https://nfacademy.id/",
      logo: "/images/nurulfikri-academy.jpeg",
      description: "Built BookUMKM, a full-stack booking and reservation platform for Indonesian MSMEs. Handled full product lifecycle from Figma UI/UX prototyping to Laravel & Inertia.js API deployment.",
      tech: "React · Laravel · Inertia.js · Tailwind CSS · MySQL",
      certificateUrl: "/certificates/sertifikat-nfa-web-developer.pdf",
    },
  ];

  return (
    <section id="experience" className="py-[100px] sm:py-[120px] px-6 sm:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Section Tag & Heading */}
        <div className="mb-14 sm:mb-16">
          <span className="font-mono text-[11.5px] text-[#8E95A2] font-medium tracking-[0.18em] uppercase block mb-3">
            (03) EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-[38px] lg:text-[40px] font-medium tracking-[-0.035em] text-[#111111] leading-[1.15] font-sans">
            Where I’ve been building.
          </h2>
        </div>

        {/* Experience Rows with Option 1: Left Logo Badge & Linked Company Names */}
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="pt-8 sm:pt-10 pb-4 border-t border-[#E5E7EB] rounded-t-2xl grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
            >
              {/* Left Column: Company Logo (Circle, No Border) & Period */}
              <div className="lg:col-span-4 flex items-center gap-3">
                {exp.logo && (
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden shrink-0 bg-white">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <span className="text-[14.5px] text-[#8E95A2] font-normal font-sans">
                  {exp.period}
                </span>
              </div>

              {/* Right Column: Role, Company Link, Description, Tech & Certificate Button */}
              <div className="lg:col-span-8 flex flex-col space-y-3.5">
                {/* Role — Company (with subtle arrow icon & link hover) */}
                <h3 className="text-[19px] sm:text-[21px] font-medium text-[#111111] tracking-tight font-sans lg:text-right flex flex-wrap items-center lg:justify-end gap-x-2">
                  <span>{exp.role}</span>
                  <span className="text-[#8E95A2] font-normal">—</span>
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[#8E95A2] hover:text-[#111111] font-normal transition-colors group/link cursor-pointer"
                    >
                      <span className="group-hover/link:underline underline-offset-4 decoration-[#CBD5E1]">
                        {exp.company}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover/link:text-[#111111] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                    </a>
                  ) : (
                    <span className="text-[#8E95A2] font-normal">{exp.company}</span>
                  )}
                </h3>

                {/* Description */}
                <p className="text-[#52525B] text-[15px] sm:text-[15.5px] leading-[1.65] font-normal font-sans lg:text-right max-w-[560px] lg:ml-auto">
                  {exp.description}
                </p>

                {/* Tech Line: Darker text (#111111), font-medium, always right-aligned on desktop */}
                <div className="w-full flex justify-start lg:justify-end text-left lg:text-right pt-1">
                  <span className="text-[13px] sm:text-[13.5px] font-medium text-[#111111] font-sans tracking-tight">
                    {exp.tech}
                  </span>
                </div>

                {/* Certificate Action Button */}
                {exp.certificateUrl && (
                  <div className="w-full flex justify-start lg:justify-end pt-1">
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] sm:text-[12.5px] font-medium text-[#111111] bg-[#F8F9FA] hover:bg-[#111111] hover:text-white border border-[#E5E7EB] hover:border-[#111111] transition-all duration-200 group/cert shadow-xs active:scale-95 cursor-pointer"
                    >
                      <Award className="w-3.5 h-3.5 text-[#64748B] group-hover/cert:text-white transition-colors" />
                      <span>Certificate</span>
                      <ArrowUpRight className="w-3 h-3 text-[#94A3B8] group-hover/cert:text-white group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-all" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
