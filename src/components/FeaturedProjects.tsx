import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { DeviceMockup } from './DeviceMockup';
import { projects } from '../data/portfolioData';

interface FeaturedProjectsProps {
  onViewAllProjects?: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onViewAllProjects }) => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="pt-10 pb-[130px] px-6 sm:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Section Tag & Heading */}
        <div className="mb-14 sm:mb-16">
          <span className="font-mono text-[11.5px] text-[#8E95A2] font-medium tracking-[0.18em] uppercase block mb-3">
            (04) SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-[38px] lg:text-[40px] font-medium tracking-[-0.035em] text-[#111111] leading-[1.15] font-sans">
            A few products I’m proud to have shipped.
          </h2>
        </div>

        {/* Project Cards Stack (Each card 1200 x 420px with 72px gap) */}
        <div className="space-y-16 sm:space-y-20">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="w-full flex flex-col lg:flex-row items-center lg:items-stretch lg:h-[420px] justify-between gap-8 lg:gap-[72px]"
            >
              {/* Left Column: Mockup Container (560 x 420px) */}
              <div className="w-full lg:w-[560px] h-[340px] sm:h-[400px] lg:h-[420px] rounded-3xl bg-[#FAFAFA] border border-[#F1F5F9] overflow-hidden flex items-center justify-center p-4 sm:p-6 shrink-0 group">
                <div className="w-full h-full flex items-center justify-center transform group-hover:scale-[1.02] transition-transform duration-500">
                  <DeviceMockup
                    type={project.mockupType}
                    image={project.image}
                    mobileImage={project.mobileImage}
                    url={project.liveUrl}
                  />
                </div>
              </div>

              {/* Right Column: Project Details Box (568 x ~263px) */}
              <div className="w-full lg:w-[568px] my-auto flex flex-col justify-center space-y-4">
                {/* Category Tag */}
                <span className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-[#8E95A2] font-semibold block">
                  {project.category}
                </span>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-[32px] lg:text-[36px] font-medium tracking-[-0.03em] text-[#111111] leading-tight font-sans">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#52525B] text-[15px] sm:text-[15.5px] leading-[1.65] font-normal font-sans max-w-[500px]">
                  {project.description}
                </p>

                {/* Dot-separated Tech Stack Line */}
                <div className="text-[12.5px] font-mono text-[#8E95A2] tracking-wide pt-0.5">
                  {project.tags.join(' · ')}
                </div>

                {/* Action Buttons: Visit Live + Read the Story */}
                <div className="flex items-center gap-3.5 pt-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#111111] hover:bg-[#2563EB] text-white text-[13.5px] font-medium tracking-tight active:scale-97 transition-colors duration-200 group"
                  >
                    <span>Visit Live</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {project.storyUrl && (
                    <a
                      href={project.storyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-white hover:bg-[#FAFAFA] text-[#111111] border border-[#E5E7EB] hover:border-neutral-300 text-[13.5px] font-medium tracking-tight active:scale-97 transition-colors duration-200 group"
                    >
                      <span>{project.secondaryButtonText || "Read the Story"}</span>
                      <BookOpen className="w-3.5 h-3.5 text-[#64748B]" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section: Explore All Projects CTA */}
        <div className="mt-20 pt-10 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-medium text-[#111111] font-sans tracking-tight">
              Looking for more experiments & production apps?
            </h3>
            <p className="text-[14.5px] text-[#64748B] font-sans mt-1">
              Browse the complete archive of B2B portals, SaaS platforms, and developer tooling.
            </p>
          </div>

          <button
            onClick={onViewAllProjects}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#111111] hover:bg-[#2563EB] text-white text-[13.5px] font-medium tracking-tight active:scale-97 transition-all duration-200 cursor-pointer group shrink-0 shadow-xs"
          >
            <span>Explore All Projects</span>
            <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-mono">
              {projects.length}
            </span>
            <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
