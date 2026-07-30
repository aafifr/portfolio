"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const ROLES = [
  "Fullstack Developer",
  "AI Engineer"
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="home" className="mx-[2px] mb-[2px] bg-white rounded-[20px] px-7 sm:px-[46px] py-8 sm:py-[46px] flex flex-col relative">

      {/* Row 1: Avatar + Name (left) | Badge (right) */}
      <div className="flex flex-col-reverse sm:flex-row sm:items-start justify-between gap-5 sm:gap-0 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4"
        >
          {/* Large avatar */}
          <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] rounded-full overflow-hidden flex-shrink-0 bg-[#F3F4F6]">
            <img
              src="/images/profil.webp"
              alt="Afif Ramadhan"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-[18px] sm:text-[20px] font-medium text-[#0A0A0A] leading-snug">Afif Ramadhan</p>
            <div className="h-[22px] overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-[13px] sm:text-[14px] text-[#6B7280] m-0"
                >
                  {ROLES[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="self-end -mt-3 -mr-2 mb-2 sm:mb-0 sm:mt-0 sm:mr-0 sm:self-auto sm:ml-auto z-10"
        >
          <div className="flex items-center gap-2 bg-[#DCFCE7] px-3 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A] animate-pulse" />
            <span className="text-[12px] font-medium text-[#15803D]">Open for 2 new projects</span>
          </div>
        </motion.div>
      </div>

      {/* Headline */}
      <motion.h1
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.28,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="text-[22px] sm:text-[26px] leading-[1.3] font-normal text-[#0A0A0A] tracking-[-0.01em] mb-3 max-w-[640px]"
      >
        {"I design premium, high-converting digital experiences that drive growth.".split(" ").map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: {
                opacity: 0,
                y: 10,
                filter: "blur(8px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* Sub-headline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="text-[15px] text-[#6B7280] max-w-[640px] mb-6 leading-[1.65]"
      >
        Helping brands grow through thoughtful design and user experiences that drive engagement, build trust, and deliver results.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 w-full"
      >
        <button className="w-full sm:w-auto h-11 px-6 bg-[#0A0A0A] text-white text-[14px] font-medium rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.12)] hover:bg-[#222] transition-colors cursor-pointer">
          Book a Free Call
        </button>
        <Link href="/projects" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto h-11 px-6 bg-white border border-[#E5E7EB] text-[#0A0A0A] text-[14px] font-medium rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-[#F9FAFB] transition-colors cursor-pointer">
            See my Projects
          </button>
        </Link>
      </motion.div>

      {/* Trusted brands section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.26, ease: "easeOut" }}
        className="pt-8"
      >
        <p className="text-[13px] sm:text-[14px] font-medium text-[#0A0A0A] mb-8">Trusted by 30+ Brands including</p>

        {/* Marquee Container */}
        <div className="flex overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-14 min-w-full shrink-0 animate-marquee group-hover:[animation-play-state:paused] items-center pr-14">
            {[...brandLogos, ...brandLogos, ...brandLogos].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Brand ${i}`}
                className="h-[20px] w-auto object-contain transition-all duration-300"
              />
            ))}
          </div>
          {/* Duplicate for seamless looping */}
          <div className="flex gap-14 min-w-full shrink-0 animate-marquee group-hover:[animation-play-state:paused] items-center pr-14" aria-hidden="true">
            {[...brandLogos, ...brandLogos, ...brandLogos].map((src, i) => (
              <img
                key={`dup-${i}`}
                src={src}
                alt={`Brand ${i}`}
                className="h-[20px] w-auto object-contain transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

const brandLogos = [
  "/images/brand/7UhEcaxStqztFHHomPw9pqYe8g.svg",
  "/images/brand/8NrLPk21bJ2L0m29zi8PJX8Beg.svg",
  "/images/brand/9BeUJivlQJcASJ9lLlJQ6mTqQMg.svg",
  "/images/brand/LeTOmBM2aYFMPojXJGfZ0dypD0.svg",
  "/images/brand/xnUYigrrz9ZgZ3gUP9mpCgZvcD0.svg",
];
