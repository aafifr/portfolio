import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-[140px] sm:pt-[150px] md:pt-[164px] pb-[110px] px-6 sm:px-12 overflow-hidden">
      {/* 1200px Max-Width Inner Container matching 1200 x 560px inspector spec */}
      <div className="max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row items-center lg:items-stretch lg:h-[560px] justify-between gap-10 lg:gap-[72px]">
        {/* Left Column: Exactly 688px width on desktop with vertical distribute */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-[688px] flex flex-col justify-between py-1 shrink-0"
        >
          {/* Top & Middle Content Container */}
          <div className="space-y-6">
            {/* Category Tag */}
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
              <span className="text-[11.5px] font-sans tracking-[0.18em] text-[#64748B] font-semibold uppercase">
                FULL STACK DEVELOPER
              </span>
            </div>

            {/* Main Headline: 470px width x ~253px height, 62px, Medium 500, #111111 */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-medium tracking-[-0.035em] text-[#111111] leading-[1.02] max-w-[470px] font-sans">
              Hi, I'm {personalInfo.shortName}. I build beautiful software that performs as well as it looks.
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-[16px] sm:text-[17px] text-[#64748B] leading-[1.65] max-w-[470px] font-normal font-sans pt-1">
              A visual-minded full-stack engineer with 4+ years crafting robust web applications, clean architectures, and pixel-perfect digital experiences.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-8 lg:pt-0 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#111111] hover:bg-[#2563EB] text-white text-[13.5px] font-medium tracking-tight active:scale-97 transition-colors duration-200 cursor-pointer group"
            >
              <span>View Projects</span>
              <ArrowDown className="w-3.5 h-3.5 text-neutral-300 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="/cv-afif-ramadhan.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-[#FAFAFA] text-[#111111] border border-[#E5E7EB] hover:border-neutral-300 text-[13.5px] font-medium tracking-tight active:scale-97 transition-colors duration-200 group"
            >
              <span>Download Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Exactly 440px width x 560px height clean profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full sm:w-[440px] lg:w-[440px] h-[480px] sm:h-[560px] lg:h-[560px] rounded-3xl overflow-hidden bg-[#E2EBE5] shrink-0"
        >
          <img
            src="/profile.jpg"
            alt={personalInfo.name}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
};
