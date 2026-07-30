"use client"

import * as React from "react"
import { motion } from "framer-motion"

const services = [
  {
    id: "01",
    title: "Product & Interface Design Systems",
    tags: "UI Design, UX Design",
  },
  {
    id: "02",
    title: "Creative Direction & Visual Strategy",
    tags: "Visual Strategy, Design Planning",
  },
  {
    id: "03",
    title: "Branding Strategy for Growth and Scale",
    tags: "Positioning, Marketing Strategy",
  },
  {
    id: "04",
    title: "Website Design & Development Solutions",
    tags: "Responsive Websites, Landing Pages",
  },
]

export function ServicesProcess() {
  return (
    <section id="services" className="w-full">
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
            {"Services I Provide".split(" ").map((word, i) => (
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
          <p className="text-[13px] sm:text-[14px] text-[#6B7280]">Helping businesses build intuitive products that drive growth.</p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px]">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[20px] bg-white p-6 sm:p-7 flex flex-col justify-between min-h-[190px] sm:min-h-[210px]"
            >
              <span className="text-[36px] sm:text-[40px] font-light text-[#E5E7EB] leading-none mb-6 sm:mb-8">{service.id}</span>
              <div>
                <h3 className="text-[16px] sm:text-[18px] font-normal text-[#0A0A0A] leading-snug mb-2 max-w-[280px]">{service.title}</h3>
                <p className="text-[12px] sm:text-[13px] text-[#6B7280]">{service.tags}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
