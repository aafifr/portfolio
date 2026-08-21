import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';

interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: "sofia",
      quote: "Thoughtful, fast, and genuinely kind to collaborate with. The kind of partner who makes the work better and the process calmer.",
      name: "Sofia Lindqvist",
      role: "Design Lead",
      company: "Atlas",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: "mara",
      quote: "One of the rare engineers who can hold the whole product in their head — the architecture, the pixels, and the business. Everything shipped felt inevitable.",
      name: "Mara Vance",
      role: "VP of Product",
      company: "Helio",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: "daniel",
      quote: "He turned a tangled legacy front end into something our whole team is proud to work in. Performance and polish, without the drama.",
      name: "Daniel Okoro",
      role: "CTO",
      company: "Drift",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: "elena",
      quote: "An extraordinary talent who brings precision engineering and thoughtful aesthetic sensibility to everything he builds.",
      name: "Elena Rostova",
      role: "Founder",
      company: "Studio Veloce",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    },
  ];

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
          (07) TESTIMONIALS
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
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-neutral-100 shrink-0"
                />
                <div>
                  <h4 className="text-[14px] sm:text-[14.5px] font-medium text-[#111111] font-sans">
                    {item.name}
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
