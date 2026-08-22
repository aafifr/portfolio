import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { User } from 'lucide-react';
import { testimonials } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  // Repeat sequence for continuous loop
  const list = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  const [isHovered, setIsHovered] = useState(false);
  const baseX = useMotionValue(0);
  const currentSpeed = useRef(0.45);
  const targetSpeed = useRef(0.45);

  useEffect(() => {
    targetSpeed.current = isHovered ? 0.08 : 0.45;
  }, [isHovered]);

  useAnimationFrame(() => {
    currentSpeed.current += (targetSpeed.current - currentSpeed.current) * 0.05;
    let nextX = baseX.get() - currentSpeed.current;

    // Single set width (4 cards * (420px + 24px) = 1776px)
    const singleSetWidth = testimonials.length * 444;
    if (nextX <= -singleSetWidth) {
      nextX += singleSetWidth;
    }

    baseX.set(nextX);
  });

  return (
    <section className="pt-10 pb-[130px] bg-white overflow-hidden w-full select-none">
      {/* Header Container aligned to 1200px max-width */}
      <div className="max-w-[1200px] mx-auto w-full px-6 sm:px-12 mb-12">
        <span className="font-mono text-[11.5px] text-[#8E95A2] font-medium tracking-[0.18em] uppercase block">
          (06) TESTIMONIALS
        </span>
      </div>

      {/* Clean Full-Bleed Carousel Track (No Gradient Overlays, Clean Edge-to-Edge) */}
      <div
        className="w-full overflow-hidden cursor-default"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          style={{ x: baseX }}
          className="flex gap-6 w-max will-change-transform pl-6"
        >
          {list.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[360px] sm:w-[420px] h-[280px] shrink-0 p-[36px] sm:p-[40px] rounded-3xl bg-white border border-[#E5E7EB] hover:border-neutral-300 transition-colors flex flex-col justify-between"
            >
              {/* Quote Text */}
              <p className="text-[16px] sm:text-[17.5px] font-medium text-[#111111] leading-[1.45] tracking-[-0.02em] font-sans">
                {item.quote}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4">
                {item.avatar ? (
                  <img
                    src={item.avatar}
                    alt={item.author}
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover object-top border border-[#E2E8F0] shrink-0"
                  />
                ) : (
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-[#64748B]" />
                  </div>
                )}
                <div>
                  <h4 className="text-[14px] sm:text-[14.5px] font-medium text-[#111111] font-sans">
                    {item.author}
                  </h4>
                  <p className="text-[12px] sm:text-[12.5px] text-[#8E95A2] font-normal font-sans">
                    {item.role} · {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
