import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

// Smooth counting animation component from 0 to target
const MetricCounter: React.FC<{
  target?: number;
  suffix?: string;
  isSymbol?: boolean;
  symbol?: string;
}> = ({ target = 0, suffix = '', isSymbol = false, symbol = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, {
    damping: 24,
    stiffness: 70,
  });

  useEffect(() => {
    if (inView && !isSymbol) {
      motionVal.set(target);
    }
  }, [inView, motionVal, target, isSymbol]);

  useEffect(() => {
    if (isSymbol) return;
    return springVal.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
  }, [springVal, suffix, isSymbol]);

  if (isSymbol) {
    return (
      <motion.span
        ref={ref}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="inline-block"
      >
        {symbol}
      </motion.span>
    );
  }

  return <span ref={ref}>0{suffix}</span>;
};

export const About: React.FC = () => {
  const stats = [
    { target: 4, suffix: '+', label: "YEARS OF JOURNEY" },
    { target: 6, suffix: '+', label: "PRODUCTION APPS" },
    { target: 100, suffix: '%', label: "DETAIL OBSESSED" },
    { isSymbol: true, symbol: '∞', label: "GLASSES OF MILK" },
  ];

  return (
    <section id="about" className="py-[120px] px-6 sm:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Top Section: Tag, Hook Headline (3-line wrap), and Right-hand Paragraphs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-24">
          {/* Left Column: Expanded Width for Crisp 3-Line Headline */}
          <div className="lg:col-span-7 space-y-4">
            {/* Exact Tag: (01) ABOUT */}
            <span className="font-mono text-[11.5px] text-[#8E95A2] font-medium tracking-[0.18em] uppercase block">
              (01) ABOUT
            </span>

            {/* 3-Line Headline matching reference */}
            <h2 className="text-3xl sm:text-[38px] lg:text-[40px] font-medium tracking-[-0.035em] text-[#111111] leading-[1.16] font-sans max-w-[580px]">
              A visual-minded full-stack engineer obsessed with clean aesthetics, solid architecture, and user experience.
            </h2>
          </div>

          {/* Right Column: Narrative paragraphs */}
          <div className="lg:col-span-5 space-y-6 text-[#52525B] text-[15px] sm:text-[16px] leading-[1.65] font-normal font-sans pt-1 lg:pt-8">
            <p>
              For the past four years, I've engineered end-to-end web applications with a perfectionist's eye for detail. Grounded in rigorous software development and an academic foundation in Information Systems, I care deeply about the whole craft: database schemas, API contracts, responsive layouts, and fluid micro-interactions.
            </p>
            <p>
              My work sits right at the intersection of full-stack engineering, modern UI design, and intelligent automations. I view AI not as a shortcut, but as a superpower to make web applications faster, smarter, and genuinely delightful to use.
            </p>
          </div>
        </div>

        {/* 4-Column Stats Grid with Animated Metric Counter */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-[#E5E7EB]">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className={`pt-[28px] px-[24px] pb-[16px] flex flex-col justify-between ${
                idx !== stats.length - 1 ? 'lg:border-r border-[#E5E7EB]' : ''
              } ${idx === 0 || idx === 2 ? 'border-r sm:border-r' : ''} ${
                idx >= 2 ? 'border-t lg:border-t-0 border-[#E5E7EB]' : ''
              }`}
            >
              <div className="text-4xl sm:text-[52px] lg:text-[56px] font-medium tracking-[-0.03em] text-[#111111] font-sans leading-none mb-3.5">
                <MetricCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  isSymbol={stat.isSymbol}
                  symbol={stat.symbol}
                />
              </div>
              <div className="text-[11px] font-mono text-[#8E95A2] tracking-[0.2em] uppercase font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
