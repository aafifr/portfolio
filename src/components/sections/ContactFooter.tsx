"use client"

import * as React from "react"
import { motion } from "framer-motion"

import { ChevronDown } from "lucide-react"

export function ContactFooter() {
  return (
    <section id="contact" className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-transparent px-7 sm:px-[46px] py-8 sm:py-[46px]"
      >
        {/* Header */}
        <div className="mb-7 sm:mb-8">
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
            {"Let's bring your idea to life".split(" ").map((word, i) => (
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
          <p className="text-[13px] sm:text-[14px] text-[#6B7280]">
            I'm always open to new opportunities, collaborations, and creative conversations. Feel free to reach out to discuss your project.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-2.5 sm:gap-3" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <input
              type="text"
              placeholder="Full Name*"
              className="h-12 sm:h-13 px-5 rounded-[16px] border-none bg-white text-[14px] text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-[#0A0A0A]"
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="h-12 sm:h-13 px-5 rounded-[16px] border-none bg-white text-[14px] text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-[#0A0A0A]"
            />
          </div>

          <div className="relative">
            <select className="w-full h-12 sm:h-13 px-5 rounded-[16px] border-none bg-white text-[14px] text-[#0A0A0A] appearance-none focus:outline-none focus:ring-1 focus:ring-[#0A0A0A] cursor-pointer">
              <option value="">Budget</option>
              <option value="<5k">&lt; $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k+">$10,000+</option>
            </select>
            <ChevronDown className="w-4 h-4 text-[#6B7280] absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <textarea
            placeholder="Tell me about your project"
            rows={4}
            className="p-5 rounded-[16px] border-none bg-white text-[14px] text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-[#0A0A0A] resize-none"
          />

          <button
            type="submit"
            className="w-full h-12 sm:h-13 bg-[#0A0A0A] text-white text-[14px] font-medium rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.12)] hover:bg-[#222] transition-colors mt-1 sm:mt-2 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  )
}

export function FooterBar() {
  return (
    <footer className="w-full mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 px-3 sm:px-4 pb-6">
      <p className="text-[12px] sm:text-[13px] text-[#6B7280]">Copyright © 2026 Afif Ramadhan.</p>
      <div className="flex items-center gap-5 sm:gap-6">
        <a href="#" className="text-[12px] sm:text-[13px] text-[#6B7280] hover:text-[#0A0A0A] transition-colors">Privacy Policy</a>
        <a href="#" className="text-[12px] sm:text-[13px] text-[#6B7280] hover:text-[#0A0A0A] transition-colors">Terms of Service</a>
        <a href="#" className="text-[12px] sm:text-[13px] text-[#6B7280] hover:text-[#0A0A0A] transition-colors">404</a>
      </div>
    </footer>
  )
}
