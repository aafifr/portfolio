"use client"

import * as React from "react"
import { motion } from "framer-motion"

import Link from "next/link"

const projects = [
  {
    slug: "orbit-saas-brand-experience",
    title: "Orbit – SaaS Brand Experience",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "nova-brand-identity",
    title: "Nova™ Brand Identity",
    category: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1636690513351-0af1763f6237?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "finova-finance-app",
    title: "Finova Finance App",
    category: "FinTech / Personal Finance",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "lunex-website-redesign",
    title: "Lunex Website Redesign",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
  },
]

export function Portfolio() {
  return (
    <section id="projects" className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-transparent px-7 sm:px-[46px] pt-8 sm:pt-[36px] pb-8 sm:pb-[44px]"
      >
        {/* Section Header */}
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
            {"Case Studies & Projects".split(" ").map((word, i) => (
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
          <p className="text-[13px] sm:text-[14px] text-[#6B7280]">A selection of projects showcasing strategy, design thinking, and measurable impact.</p>
        </div>

        {/* 2x2 Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-8">
          {projects.map((project, i) => (
            <Link key={i} href={`/projects/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="aspect-[4/3] rounded-[12px] overflow-hidden mb-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[12px] sm:text-[13px] font-medium text-[#6B7280] mb-0.5">{project.category}</p>
                  <p className="text-[15px] sm:text-[16px] font-semibold text-[#0A0A0A] tracking-tight">{project.title}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* See All button */}
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="h-11 px-6 bg-white border border-[#E5E7EB] text-[#0A0A0A] text-[14px] font-medium rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-[#F9FAFB] transition-colors cursor-pointer">
              See All Projects
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
