import React from 'react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0E0E0E] text-white pt-[96px] pb-[40px] px-6 sm:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Top Content Row: Left Branding/Bio and Right Navigation/Social (1200 x 195.2px) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Name, Bio, Email, Timezone */}
          <div className="md:col-span-6 lg:col-span-7 space-y-4">
            <h3 className="text-[19px] sm:text-[20px] font-medium text-white tracking-[-0.03em] font-sans">
              {personalInfo.name}
            </h3>

            <p className="text-[14px] sm:text-[14.5px] text-[#8E95A2] leading-[1.65] font-normal font-sans max-w-[340px]">
              Full-stack developer building considered digital products for startups and teams worldwide.
            </p>

            <div className="pt-1">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-[14px] text-[#8E95A2] hover:text-white transition-colors inline-block font-sans"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="pt-2">
              <span className="font-mono text-[11px] text-[#64748B] tracking-[0.18em] uppercase font-medium block">
                REMOTE · GMT+7
              </span>
            </div>
          </div>

          {/* Right Column: Navigation & Social Sub-Columns */}
          <div className="md:col-span-6 lg:col-span-5 grid grid-cols-2 gap-8 sm:gap-12">
            {/* Navigation Column */}
            <div>
              <span className="font-mono text-[11px] text-[#8E95A2] font-semibold tracking-[0.18em] uppercase block mb-4">
                NAVIGATION
              </span>
              <ul className="space-y-3 text-[14px] text-[#8E95A2] font-sans">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#opensource" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Column */}
            <div>
              <span className="font-mono text-[11px] text-[#8E95A2] font-semibold tracking-[0.18em] uppercase block mb-4">
                SOCIAL
              </span>
              <ul className="space-y-3 text-[14px] text-[#8E95A2] font-sans">
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    X / Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar Divider (1200 x 46.2px, padding 28px 0px 0px) */}
        <div className="mt-16 sm:mt-20 pt-[28px] border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-[#64748B] font-sans">
          <div>
            © {currentYear} {personalInfo.shortName}. All rights reserved.
          </div>
          <div>
            Helping Small Startups Become Unstoppable.
          </div>
        </div>
      </div>
    </footer>
  );
};
