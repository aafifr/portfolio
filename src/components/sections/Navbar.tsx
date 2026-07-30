"use client"

import * as React from "react"
import { motion } from "framer-motion"

const socialIcons = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/afifrmdhn/",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aafif.r",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/aafifr",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
]

import { usePathname, useRouter } from "next/navigation"

export function Navbar() {
  const [time, setTime] = React.useState("10:11:00 AM")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()
  const router = useRouter()

  React.useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" }))
    }
    update()
    const t = setInterval(update, 1000)
    return () => clearInterval(t)
  }, [])

  const handleNavClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault()
    const id = link.toLowerCase()
    setIsMobileMenuOpen(false)

    if (pathname !== "/") {
      if (id === "home") {
        router.push("/")
      } else {
        router.push(`/#${id}`)
      }
      return
    }

    // On home page, smooth scroll
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -75
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full">
      <nav className="w-full flex items-center justify-between px-4 sm:px-6 py-[15px] bg-[#F3F4F6]/85 backdrop-blur-md rounded-[22px]">
        {/* Left: Time & Location */}
        <div className="flex items-center gap-1.5 text-[12px] sm:text-[13px] min-w-[150px]">
          <span className="font-medium text-[#0A0A0A] tracking-tight">{time}</span>
          <span className="text-[12px] sm:text-[13px] text-[#6B7280]">Indonesia</span>
        </div>

        {/* Center: Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-5">
          {["Home", "About", "Projects", "Services", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, link)}
              className="group relative overflow-hidden text-[14px] font-medium text-[#374151] cursor-pointer py-0.5"
            >
              <span className="block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[130%]">
                {link}
              </span>
              <span className="absolute left-0 top-0.5 block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[130%] group-hover:translate-y-0 text-[#0A0A0A]">
                {link}
              </span>
            </a>
          ))}
        </div>

        {/* Right: Social (Desktop) */}
        <div className="hidden md:flex items-center justify-end gap-2 min-w-[150px]">
          {socialIcons.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-9 h-9 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#4B5563] hover:text-[#0A0A0A] hover:border-[#D1D5DB] hover:bg-[#F9FAFB] transition-all bg-white cursor-pointer"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 text-[#0A0A0A] flex flex-col gap-1.5 items-end justify-center cursor-pointer"
        >
          <span className={`w-6 h-[2px] bg-current rounded-full transition-transform duration-200 ${isMobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`w-6 h-[2px] bg-current rounded-full transition-opacity duration-200 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-[2px] bg-current rounded-full transition-transform duration-200 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-[calc(100%+8px)] left-0 right-0 bg-[#F3F4F6]/95 backdrop-blur-lg rounded-[20px] p-5 shadow-lg border border-white/50 flex flex-col gap-3 z-50"
        >
          {["Home", "About", "Projects", "Services", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, link)}
              className="text-[15px] font-medium text-[#0A0A0A] py-2 px-3 rounded-xl hover:bg-white/60 transition-colors text-center"
            >
              {link}
            </a>
          ))}

          {/* Mobile Social Links (Centered) */}
          <div className="pt-3 mt-1 border-t border-[#E5E7EB]/80 flex items-center justify-center gap-3">
            {socialIcons.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#4B5563] hover:text-[#0A0A0A] hover:border-[#D1D5DB] hover:bg-white transition-all bg-white/80"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
