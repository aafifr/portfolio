"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useInView, MotionValue } from "framer-motion"
import { Mail, Phone, Download } from "lucide-react"

const stats = [
  { value: "$60M+", label: "Client Funding Raised" },
  { value: "35+", label: "Startups Supported" },
  { value: "12+", label: "Years of Experience" },
  { value: "95%", label: "Client Satisfaction Rate" },
]

function AnimatedCounter({ value }: { value: string }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-30px" })
  const [displayValue, setDisplayValue] = React.useState(0)

  const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/)
  const prefix = match ? match[1] : ""
  const target = match ? parseInt(match[2], 10) : 0
  const suffix = match ? match[3] : ""

  React.useEffect(() => {
    if (!isInView || target === 0) return

    let start = 0
    const duration = 1600
    const startTime = performance.now()

    const updateCounter = (currentTime: number) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentVal = Math.floor(easeOut * target)

      setDisplayValue(currentVal)

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        setDisplayValue(target)
      }
    }

    requestAnimationFrame(updateCounter)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {prefix}
      {isInView ? displayValue : 0}
      {suffix}
    </span>
  )
}

const highlightedText = "creating scalable experiences that improve retention, conversions, and business growth."

function Character({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const color = useTransform(progress, range, ["#9CA3AF", "#0A0A0A"])
  return <motion.span style={{ color }}>{children}</motion.span>
}

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const characters = children.split("")
  const amount = range[1] - range[0]
  const step = amount / characters.length

  return (
    <span className="inline-block whitespace-nowrap mr-[0.25em]">
      {characters.map((char, i) => {
        const start = range[0] + step * i
        const end = range[0] + step * (i + 1)
        return (
          <Character key={i} progress={progress} range={[start, end]}>
            {char}
          </Character>
        )
      })}
    </span>
  )
}

export function AboutStats() {
  const bioRef = React.useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: bioRef,
    offset: ["start 0.85", "end 0.45"],
  })

  const words = highlightedText.split(" ")

  return (
    <section id="about" className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-white rounded-[19px] px-7 sm:px-[46px] py-9 sm:py-[46px]"
      >
        {/* Label */}
        <p className="text-[13px] sm:text-[14px] text-[#6B7280] mb-4 sm:mb-5">About my self.</p>

        {/* Bio */}
        <p ref={bioRef} className="text-[16px] sm:text-[17px] leading-[1.65] text-[#0A0A0A] mb-7 sm:mb-8 max-w-[620px]">
          Hey, I'm Afif Ramadhan — a strategy-driven product designer{" "}
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </p>

        {/* Contact row */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10 sm:mb-11">
          <a href="mailto:contact@afif.com" className="flex items-center gap-2 text-[13px] sm:text-[14px] font-medium text-[#0A0A0A] hover:text-[#6B7280] transition-colors">
            <Mail className="w-4 h-4" />
            contact@afif.com
          </a>
          <span className="text-[#D1D5DB] hidden sm:block">•</span>
          <a href="tel:+12325458700" className="flex items-center gap-2 text-[13px] sm:text-[14px] font-medium text-[#0A0A0A] hover:text-[#6B7280] transition-colors">
            <Phone className="w-4 h-4" />
            +(123) 254 587 00
          </a>
          <span className="text-[#D1D5DB] hidden sm:block">•</span>
          <a href="#" className="flex items-center gap-2 text-[13px] sm:text-[14px] font-medium text-[#0A0A0A] hover:text-[#6B7280] transition-colors">
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[24px] sm:text-[28px] font-medium text-[#0A0A0A] tracking-tight leading-none mb-1.5">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="text-[12px] sm:text-[13px] text-[#6B7280] leading-tight">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
