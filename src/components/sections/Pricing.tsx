"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const starterFeatures = [
  "Web, SaaS & mobile UI design",
  "Dedicated product designer support",
  "UX research & user flow planning",
  "Perfect for MVPs & startups",
  "Fast design iterations & feedback",
]

const growthFeatures = [
  "End-to-end product design strategy",
  "Senior designer + design system setup",
  "Advanced UX research & workshops",
  "Best for scaling products & apps",
  "Unlimited iterations during engagement",
]

export function Pricing() {
  return (
    <section id="pricing" className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-transparent px-7 sm:px-[46px] py-8 sm:py-[46px]"
      >
        {/* Header */}
        <div className="mb-7">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.1,
                },
              },
            }}
            className="text-[18px] sm:text-[20px] font-medium text-[#0A0A0A] mb-1.5"
          >
            {"Simple & Transparent Pricing".split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 8, filter: "blur(6px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <p className="text-[13px] sm:text-[14px] text-[#6B7280]">Clear pricing for startups, founders, and growing businesses.</p>
        </div>

        {/* 2 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
          {/* Starter */}
          <div className="rounded-[20px] bg-white p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-[18px] sm:text-[20px] font-medium text-[#0A0A0A] mb-1">Starter</h3>
              <p className="text-[13px] sm:text-[14px] text-[#6B7280] mb-6">Everything you need to get started.</p>
              
              <div className="flex items-baseline gap-1.5 mb-6">
                <span className="text-[32px] sm:text-[38px] font-medium text-[#0A0A0A] tracking-tight leading-none">$2,000</span>
                <span className="text-[13px] text-[#6B7280]">/ project</span>
              </div>

              <button className="w-full h-11 bg-[#0A0A0A] text-white text-[14px] font-medium rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.12)] hover:bg-[#222] transition-colors mb-7 cursor-pointer">
                Book a Call
              </button>

              <p className="text-[13px] font-normal text-[#6B7280] mb-4">What's included:</p>
              <ul className="flex flex-col gap-3">
                {starterFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#0A0A0A] flex-shrink-0" />
                    <span className="text-[13px] sm:text-[14px] text-[#0A0A0A] font-normal">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Growth - dark */}
          <div className="rounded-[20px] bg-[#0A0A0A] text-white p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-[18px] sm:text-[20px] font-medium text-white mb-1">Growth</h3>
              <p className="text-[13px] sm:text-[14px] text-[#9CA3AF] mb-6">Built for growing businesses.</p>
              
              <div className="flex items-baseline gap-1.5 mb-6">
                <span className="text-[32px] sm:text-[38px] font-medium text-white tracking-tight leading-none">$4,000</span>
                <span className="text-[13px] text-[#9CA3AF]">/ project</span>
              </div>

              <button className="w-full h-11 bg-white text-[#0A0A0A] text-[14px] font-medium rounded-xl shadow-[0_2px_8px_rgba(255,255,255,0.08)] hover:bg-[#F3F4F6] transition-colors mb-7 cursor-pointer">
                Book a Call
              </button>

              <p className="text-[13px] font-normal text-[#9CA3AF] mb-4">What's included:</p>
              <ul className="flex flex-col gap-3">
                {growthFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-[13px] sm:text-[14px] text-white font-normal">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
