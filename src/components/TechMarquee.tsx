import React, { useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import {
  ReactLogo,
  NextjsLogo,
  TypeScriptLogo,
  TailwindLogo,
  LaravelLogo,
  SupabaseLogo,
  PostgreSQLLogo,
  PrismaLogo,
  N8nLogo,
  VercelLogo,
  GitHubLogo,
  FigmaLogo,
  CloudflareLogo,
  NotionLogo,
  OpenAILogo,
} from './BrandLogos';

export const TechMarquee: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const currentSpeed = useRef(1.0); // baseline speed in px/frame
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const brandLogos = [
    { Component: NextjsLogo, name: "Next.js" },
    { Component: ReactLogo, name: "React" },
    { Component: TypeScriptLogo, name: "TypeScript" },
    { Component: TailwindLogo, name: "Tailwind CSS" },
    { Component: LaravelLogo, name: "Laravel" },
    { Component: SupabaseLogo, name: "Supabase" },
    { Component: PostgreSQLLogo, name: "PostgreSQL" },
    { Component: PrismaLogo, name: "Prisma" },
    { Component: N8nLogo, name: "n8n" },
    { Component: VercelLogo, name: "Vercel" },
    { Component: GitHubLogo, name: "GitHub" },
    { Component: FigmaLogo, name: "Figma" },
    { Component: CloudflareLogo, name: "Cloudflare" },
    { Component: NotionLogo, name: "Notion" },
    { Component: OpenAILogo, name: "OpenAI" },
  ];

  // Repeat sequence 4 times for seamless infinite wrap
  const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos];

  useAnimationFrame((_, delta) => {
    // Target speed: 0.25 when hovered (slow & gentle), 1.0 when normal
    const targetSpeed = isHovered ? 0.25 : 1.0;
    
    // Smooth lerp deceleration / acceleration (inertia physics)
    currentSpeed.current += (targetSpeed - currentSpeed.current) * 0.06;

    // Standardize across 60hz / 120hz / 144hz monitors
    const frameFactor = Math.min(delta / 16.667, 2.0);
    const moveBy = currentSpeed.current * frameFactor;

    let newX = x.get() - moveBy;

    if (contentRef.current) {
      // Half width of the 4 duplicated sets (2 sets)
      const halfWidth = contentRef.current.scrollWidth / 2;
      if (newX <= -halfWidth) {
        newX += halfWidth;
      }
    }

    x.set(newX);
  });

  return (
    <section className="w-full pt-10 pb-16 overflow-hidden select-none">
      {/* Subtle Section Label */}
      <div className="text-center mb-10">
        <span className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 font-semibold uppercase">
          POWERED BY MODERN TOOLS & CLOUD PLATFORMS
        </span>
      </div>

      {/* Marquee Track with Smooth Physics Controller */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full overflow-hidden cursor-default py-2"
      >

        {/* Physics-driven continuous translation */}
        <motion.div
          ref={contentRef}
          style={{ x }}
          className="flex items-center gap-14 sm:gap-20 w-max will-change-transform"
        >
          {duplicatedLogos.map((brand, index) => {
            const Logo = brand.Component;
            return (
              <div
                key={`${brand.name}-${index}`}
                className="text-neutral-400 hover:text-neutral-900 transition-colors duration-300 flex items-center justify-center cursor-default shrink-0"
                title={brand.name}
              >
                <Logo className="w-6 h-6 sm:w-7 sm:h-7 opacity-75 hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
