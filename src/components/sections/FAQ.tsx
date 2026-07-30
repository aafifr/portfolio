"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I provide product design, UI/UX design, website design, design systems, Framer development, and end-to-end digital product design services.",
  },
  {
    question: "Do you design and develop websites?",
    answer: "Yes. I handle both the design and development process, creating high-converting websites using Framer and modern web technologies.",
  },
  {
    question: "Can you redesign an existing product or website?",
    answer: "Absolutely. I can audit your current experience, identify opportunities, and redesign it to improve usability, conversions, and visual appeal.",
  },
  {
    question: "Do you build websites in Framer?",
    answer: "Yes. I specialize in Framer development and create fast, responsive, and SEO-friendly websites that are easy to manage.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section id="faq" className="w-full">
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
            {"Frequently Asked Questions".split(" ").map((word, i) => (
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
          <p className="text-[13px] sm:text-[14px] text-[#6B7280]">Everything you need to know before we work together.</p>
        </div>

        {/* Accordion Cards */}
        <div className="flex flex-col gap-2 sm:gap-2.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="rounded-[16px] bg-white px-5 py-4 sm:px-6 sm:py-5 transition-all duration-200">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-[14px] sm:text-[15px] font-medium text-[#0A0A0A] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#6B7280] flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[13px] sm:text-[14px] text-[#6B7280] leading-relaxed pt-3 sm:pt-3.5 max-w-[620px]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
