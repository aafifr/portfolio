import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  tech: string;
}

export const ExperienceSection: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: "exp-1",
      period: "2023 — Present",
      role: "Senior Software Engineer",
      company: "Helio",
      description: "Lead front-end for a real-time analytics platform — owning the design system, performance budget, and the team's engineering standards.",
      tech: "React · Next.js · TypeScript",
    },
    {
      id: "exp-2",
      period: "2021 — 2023",
      role: "Full-Stack Engineer",
      company: "Drift Finance",
      description: "Built core banking flows end to end, from Postgres schema to pixel, for a consumer fintech used by half a million people.",
      tech: "Node.js · GraphQL · AWS",
    },
    {
      id: "exp-3",
      period: "2019 — 2021",
      role: "Frontend Developer",
      company: "Studio Veloce",
      description: "Crafted bespoke digital products, high-conversion e-commerce platforms, and interactive brand websites for top-tier global clients.",
      tech: "Vue.js · Tailwind · Node.js",
    },
    {
      id: "exp-4",
      period: "2017 — 2019",
      role: "Junior Developer",
      company: "Alpha Labs",
      description: "Built responsive, accessible web interfaces and collaborated closely with designers to implement pixel-perfect design systems.",
      tech: "JavaScript · React · REST APIs",
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

        {/* Experience Rows (Border TOP only on each item, no side/bottom borders) */}
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
              {/* Left Column: Period */}
              <div className="lg:col-span-4">
                <span className="text-[14.5px] text-[#8E95A2] font-normal font-sans">
                  {exp.period}
                </span>
              </div>

              {/* Right Column: Role, Company, Description & Tech */}
              <div className="lg:col-span-8 flex flex-col lg:items-end lg:text-right space-y-3.5">
                {/* Role — Company */}
                <h3 className="text-[19px] sm:text-[21px] font-medium text-[#111111] tracking-tight font-sans">
                  <span>{exp.role}</span>
                  <span className="text-[#8E95A2] font-normal ml-2">— {exp.company}</span>
                </h3>

                {/* Description */}
                <p className="text-[#52525B] text-[15px] sm:text-[15.5px] leading-[1.65] font-normal font-sans max-w-[520px]">
                  {exp.description}
                </p>

                {/* Tech Line */}
                <div className="text-[13px] font-mono text-[#8E95A2] tracking-wide pt-1">
                  {exp.tech}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
