"use client"

import * as React from "react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Wilium jonson",
    handle: "@jonsonwil",
    verified: true,
    text: "Working with Calib was a fantastic experience. His ability to transform complex ideas into intuitive user experiences helped us launch faster and with greater confidence.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Sarah Bennett",
    handle: "@bennettsrh",
    verified: true,
    text: "Calib brought clarity and structure to our product. His design process was thoughtful, collaborative, and focused on delivering measurable business results.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Michael Carter",
    handle: "@michaelcart",
    verified: true,
    text: "From strategy to execution, every detail was carefully considered. The final product exceeded our expectations and significantly improved our user engagement.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Emma Rodriguez",
    handle: "@rodriguez",
    verified: true,
    text: "A highly skilled designer who understands both user needs and business goals. The designs were clean, scalable, and had a real impact on our growth.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full">
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
            {"What Clients Are Saying".split(" ").map((word, i) => (
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
          <p className="text-[13px] sm:text-[14px] text-[#6B7280]">Insights from clients who trusted me to bring their ideas to life through design.</p>
        </div>

        {/* 2x2 Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px]">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[20px] bg-white p-6 sm:p-7 flex flex-col justify-between min-h-[190px]"
            >
              {/* Author row */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-dashed border-[#E5E7EB]">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-[14px] font-semibold text-[#0A0A0A]">{t.name}</p>
                      {t.verified && (
                        <svg className="w-3.5 h-3.5 text-[#3B82F6] fill-current" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      )}
                    </div>
                    <p className="text-[12px] text-[#6B7280]">{t.handle}</p>
                  </div>
                </div>
                {/* X logo */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#9CA3AF"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63z"/></svg>
              </div>
              <p className="text-[13px] sm:text-[14px] text-[#374151] leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
