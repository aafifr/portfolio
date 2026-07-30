"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/sections/Navbar"
import { FooterBar } from "@/components/sections/ContactFooter"

const allProjects = [
  {
    slug: "orbit-saas-brand-experience",
    title: "Orbit - SaaS Brand Experience",
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
  {
    slug: "lumina-brand-design",
    title: "Lumina - Brand Design",
    category: "Technology / SaaS",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "ohio-branding",
    title: "Ohio™ Branding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center pt-4 sm:pt-[16px] pb-4 sm:pb-6 px-4">
      {/* Sticky Navbar */}
      <div className="sticky top-4 sm:top-[16px] z-50 w-full max-w-[760px]">
        <Navbar />
      </div>

      {/* Main Content Card Container overlapping navbar */}
      <div className="w-full max-w-[760px] bg-[#F3F4F6] rounded-[22px] mb-4 -mt-[50px] pt-[50px]">
        <div className="p-[2px]">
          <div className="w-full bg-white rounded-[19px] px-7 sm:px-[46px] py-8 sm:py-[46px]">
            {/* 6 Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {allProjects.map((project, i) => (
                <Link key={i} href={`/projects/${project.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
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
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="w-full max-w-[760px]">
        <FooterBar />
      </div>
    </main>
  )
}
