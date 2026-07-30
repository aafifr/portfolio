"use client"

import * as React from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Navbar } from "@/components/sections/Navbar"
import { FooterBar } from "@/components/sections/ContactFooter"

const projectDetailsData: Record<string, {
  title: string
  category: string
  date: string
  description: string
  coverImage: string
  ideationHeading: string
  ideationBody: string
  gallery: [string, string]
  productionHeading: string
  productionBody: string
}> = {
  "orbit-saas-brand-experience": {
    title: "Orbit - SaaS Brand Experience",
    category: "Branding",
    date: "Feb 1st – Mar 10th",
    description: "Orbit was created as a brand identity project focused on crafting bold and cohesive visual assets across digital and physical touchpoints.",
    coverImage: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1200&q=80",
    ideationHeading: "Petronex was imagined as a visual system that brings consistency and impact to modern brand communication.",
    ideationBody: "The goal was to design a strong and flexible identity that works across multiple mediums, from logos to large-scale billboards. The concept focused on clarity, bold typography, and a balanced visual language to ensure strong brand recognition.",
    gallery: [
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    ],
    productionHeading: "The design approach for Astra combined bold visuals with a structured and scalable system.",
    productionBody: "A cohesive set of brand assets was developed, including logo variations, color systems, and layout guidelines. Each element was designed to maintain consistency across print and digital formats, ensuring adaptability for campaigns and real-world applications.",
  },
  "nova-brand-identity": {
    title: "Nova™ Brand Identity",
    category: "Food & Beverage",
    date: "Mar 15th – Apr 20th",
    description: "Nova™ brand identity represents a modern culinary approach with striking minimalist packaging and distinctive visual assets.",
    coverImage: "https://images.unsplash.com/photo-1636690513351-0af1763f6237?auto=format&fit=crop&w=1200&q=80",
    ideationHeading: "Creating a distinct visual imprint for artisan F&B products.",
    ideationBody: "We established a brand strategy that connects with eco-conscious consumers through tactile print materials and clean digital aesthetics.",
    gallery: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    ],
    productionHeading: "Execution across sustainable packaging and digital storefronts.",
    productionBody: "Every touchpoint was crafted to deliver a sense of quality and care, building lasting consumer loyalty.",
  },
  "finova-finance-app": {
    title: "Finova Finance App",
    category: "FinTech / Personal Finance",
    date: "Jan 10th – Feb 28th",
    description: "Finova simplifies wealth tracking and smart investing through a clean, intuitive mobile dashboard.",
    coverImage: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1200&q=80",
    ideationHeading: "Designing complex financial workflows with delightful simplicity.",
    ideationBody: "Users need clear visual hierarchy when managing money. We streamlined onboarding and transaction insights into frictionless screens.",
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    ],
    productionHeading: "High-performance component library for rapid scaling.",
    productionBody: "A comprehensive design system enabled dev teams to ship updates faster while preserving accessibility standards.",
  },
  "lunex-website-redesign": {
    title: "Lunex Website Redesign",
    category: "Technology",
    date: "Apr 1st – May 10th",
    description: "A complete visual and structural overhaul for Lunex, elevating brand perception and digital conversion rates.",
    coverImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    ideationHeading: "Reframing Lunex as a market leader in Next-Gen cloud solutions.",
    ideationBody: "We simplified technical messaging through interactive product demos and dark-mode aesthetic storytelling.",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    ],
    productionHeading: "Optimized for conversion speed and mobile responsiveness.",
    productionBody: "Improved load times and strategic CTAs resulted in a 42% increase in demo requests.",
  },
  "lumina-brand-design": {
    title: "Lumina - Brand Design",
    category: "Technology / SaaS",
    date: "May 5th – Jun 12th",
    description: "Crafting a luminous and adaptive identity system for an AI-powered creative platform.",
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    ideationHeading: "Harmonizing human creativity with artificial intelligence.",
    ideationBody: "Dynamic gradient patterns and responsive typography reflect the fluid nature of AI creation.",
    gallery: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80",
    ],
    productionHeading: "Scalable brand guidelines across web, marketing, and product UI.",
    productionBody: "Comprehensive brand kit ensuring unified visual identity across global channels.",
  },
  "ohio-branding": {
    title: "Ohio™ Branding",
    category: "Branding",
    date: "Jun 1st – Jul 15th",
    description: "A heritage-inspired brand system blending classic craftsmanship with contemporary design.",
    coverImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    ideationHeading: "Honoring legacy while appealing to modern design enthusiasts.",
    ideationBody: "Custom typography and rich monochromatic palettes evoke timeless sophistication.",
    gallery: [
      "https://images.unsplash.com/photo-1636690513351-0af1763f6237?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80",
    ],
    productionHeading: "Bespoke print collateral and digital style guide.",
    productionBody: "Exquisite print finishing coupled with a responsive web design system.",
  },
}

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = (params?.slug as string) || "orbit-saas-brand-experience"
  
  // Fallback to Orbit if slug not found
  const project = projectDetailsData[slug] || projectDetailsData["orbit-saas-brand-experience"]

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
            {/* Meta row */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-[12px] sm:text-[13px] font-medium text-[#6B7280] mb-2"
            >
              {project.category} &nbsp;·&nbsp; {project.date}
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-[24px] sm:text-[30px] font-semibold text-[#0A0A0A] tracking-tight leading-tight mb-3"
            >
              {project.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[14px] sm:text-[15px] text-[#6B7280] max-w-[620px] mb-6 leading-relaxed"
            >
              {project.description}
            </motion.p>

            {/* Preview Project Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mb-8 sm:mb-10"
            >
              <button className="h-10 px-5 bg-white border border-[#E5E7EB] text-[#0A0A0A] text-[13px] font-medium rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-[#F9FAFB] transition-all cursor-pointer inline-flex items-center justify-center">
                Preview Project
              </button>
            </motion.div>

            {/* Cover Image */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="aspect-[16/10] sm:aspect-[16/9] rounded-[16px] overflow-hidden mb-10 sm:mb-12 bg-[#F3F4F6]"
            >
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Ideation & Conceptual Section */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mb-10 sm:mb-12"
            >
              <p className="text-[12px] sm:text-[13px] font-medium text-[#6B7280] mb-2">Ideation & Conceptual</p>
              <h2 className="text-[18px] sm:text-[22px] font-semibold text-[#0A0A0A] tracking-tight leading-snug mb-3">
                {project.ideationHeading}
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#6B7280] leading-relaxed">
                {project.ideationBody}
              </p>
            </motion.div>

            {/* 2-Column Gallery Grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12"
            >
              <div className="aspect-[4/3] rounded-[16px] overflow-hidden bg-[#F3F4F6]">
                <img
                  src={project.gallery[0]}
                  alt={`${project.title} Gallery 1`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-[16px] overflow-hidden bg-[#F3F4F6]">
                <img
                  src={project.gallery[1]}
                  alt={`${project.title} Gallery 2`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Production & Execution Section */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-[12px] sm:text-[13px] font-medium text-[#6B7280] mb-2">Production & Execution</p>
              <h2 className="text-[18px] sm:text-[22px] font-semibold text-[#0A0A0A] tracking-tight leading-snug mb-3">
                {project.productionHeading}
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#6B7280] leading-relaxed">
                {project.productionBody}
              </p>
            </motion.div>
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
