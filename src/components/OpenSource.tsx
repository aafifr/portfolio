import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowUpRight } from 'lucide-react';
import { GitHubLogo } from './BrandLogos';

interface RepoItem {
  id: string;
  name: string;
  stars: string;
  description: string;
  tag: string;
  githubUrl: string;
  demoUrl: string;
}

export const OpenSource: React.FC = () => {
  const repos: RepoItem[] = [
    {
      id: "lumen",
      name: "Lumen",
      stars: "1,240",
      description: "A tiny theme-aware syntax highlighter for the web.",
      tag: "TYPESCRIPT",
      githubUrl: "https://github.com/aafifr",
      demoUrl: "https://demo.com",
    },
    {
      id: "usethrottle",
      name: "useThrottle",
      stars: "860",
      description: "A dependency-free React hook for throttled values.",
      tag: "REACT",
      githubUrl: "https://github.com/aafifr",
      demoUrl: "https://demo.com",
    },
    {
      id: "pico-router",
      name: "Pico Router",
      stars: "2,100",
      description: "A 1kb client-side router with zero config.",
      tag: "JAVASCRIPT",
      githubUrl: "https://github.com/aafifr",
      demoUrl: "https://demo.com",
    },
    {
      id: "inkwell",
      name: "Inkwell",
      stars: "540",
      description: "Markdown to beautiful PDF, from the command line.",
      tag: "GO",
      githubUrl: "https://github.com/aafifr",
      demoUrl: "https://demo.com",
    },
    {
      id: "cron-studio",
      name: "Cron Studio",
      stars: "1,730",
      description: "A visual editor and validator for cron expressions.",
      tag: "NEXT.JS",
      githubUrl: "https://github.com/aafifr",
      demoUrl: "https://demo.com",
    },
    {
      id: "palette-cli",
      name: "Palette CLI",
      stars: "690",
      description: "Generate accessible color scales from a single hex.",
      tag: "NODE.JS",
      githubUrl: "https://github.com/aafifr",
      demoUrl: "https://demo.com",
    },
  ];

  return (
    <section id="opensource" className="pt-10 pb-[130px] px-6 sm:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Section Tag & Heading */}
        <div className="mb-14 sm:mb-16">
          <span className="font-mono text-[11.5px] text-[#8E95A2] font-medium tracking-[0.18em] uppercase block mb-3">
            (06) ON THE SIDE
          </span>
          <h2 className="text-3xl sm:text-[38px] lg:text-[40px] font-medium tracking-[-0.035em] text-[#111111] leading-[1.15] font-sans">
            Open-source experiments & tools.
          </h2>
        </div>

        {/* 2-Column Grid of 590px Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {repos.map((repo, idx) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
              className="p-[26px] rounded-2xl bg-white border border-[#E5E7EB] hover:border-neutral-300 transition-colors flex flex-col justify-between h-full space-y-5 group"
            >
              {/* Header: Title + Yellow Star Count */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <h3 className="text-[19px] sm:text-[20px] font-medium text-[#111111] tracking-tight font-sans">
                    {repo.name}
                  </h3>

                  {/* Yellow / Amber Star Icon */}
                  <div className="flex items-center gap-1.5 text-[13px] font-mono text-[#8E95A2]">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{repo.stars}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[14.5px] sm:text-[15px] text-[#52525B] leading-[1.6] font-normal font-sans mb-4">
                  {repo.description}
                </p>

                {/* Tech / Language Tag */}
                <span className="inline-flex px-3 py-1 rounded-full bg-[#FAFAFA] border border-[#E5E7EB] text-[10.5px] font-mono tracking-[0.14em] uppercase text-[#64748B] font-medium">
                  {repo.tag}
                </span>
              </div>

              {/* Bottom Divider & Action Links */}
              <div className="pt-4 border-t border-[#F1F5F9] flex items-center gap-6">
                <a
                  href={repo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111111] hover:text-[#2563EB] transition-colors"
                >
                  <GitHubLogo className="w-3.5 h-3.5 fill-current" />
                  <span>GitHub</span>
                </a>

                <a
                  href={repo.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111111] hover:text-[#2563EB] transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
