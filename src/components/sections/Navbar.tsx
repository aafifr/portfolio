"use client"

import * as React from "react"
import { motion } from "framer-motion"

const socialIcons = [
  {
    label: "X",
    href: "#",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Dribbble",
    href: "#",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12zm7.92 5.292a10.136 10.136 0 012.133 5.955c-.314-.063-3.426-.694-6.563-.3-.073-.18-.144-.36-.22-.54-.197-.48-.413-.96-.633-1.427 3.472-1.42 5.05-3.44 5.283-3.688zM12 2.148c2.495 0 4.793.89 6.57 2.356-.196.22-1.617 2.085-4.977 3.353-1.557-2.86-3.283-5.218-3.559-5.586A10.1 10.1 0 0112 2.148zM8.31 2.87c.267.352 1.965 2.703 3.54 5.503-4.467 1.186-8.41 1.162-8.833 1.155A10.15 10.15 0 018.31 2.87zM1.915 12.013v-.26c.41.009 5.017.07 9.773-1.353.274.535.535 1.078.78 1.622-.123.035-.248.074-.37.113-4.92 1.587-7.53 5.925-7.734 6.27A10.103 10.103 0 011.915 12.013zm10.085 9.846a10.105 10.105 0 01-6.285-2.189c.157-.316 2.14-4.122 7.54-6.006.022-.008.044-.013.065-.02a45.793 45.793 0 011.907 6.773 10.118 10.118 0 01-3.227.442zm5.1-1.52a47.53 47.53 0 00-1.832-6.497c2.985-.479 5.597.31 5.908.4a10.162 10.162 0 01-4.077 6.097z"/>
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "#",
    icon: (
      <svg width="15" height="11" viewBox="0 0 24 16" fill="currentColor">
        <path d="M7.443 0c.826 0 1.573.063 2.241.196.668.13 1.24.356 1.715.676.475.32.842.74 1.1 1.265.255.52.383 1.156.383 1.9 0 .816-.184 1.493-.553 2.038-.37.545-.91.998-1.62 1.363.974.28 1.706.77 2.196 1.474.49.7.735 1.548.735 2.543 0 .816-.156 1.52-.47 2.107-.313.588-.738 1.07-1.275 1.44-.537.37-1.15.642-1.84.814-.69.172-1.4.258-2.13.258H0V0h7.443zm-.365 5.952c.63 0 1.144-.153 1.54-.46.395-.305.592-.77.592-1.393 0-.354-.063-.646-.19-.876-.126-.23-.3-.415-.52-.555-.22-.14-.473-.237-.762-.29-.289-.053-.594-.08-.914-.08H2.83v3.654h4.248zm.219 6.216c.356 0 .69-.036 1-.11.31-.073.578-.19.806-.352.227-.16.408-.373.54-.637.134-.264.2-.587.2-.97 0-.77-.214-1.333-.642-1.69-.43-.355-1.003-.534-1.72-.534H2.83v4.293h4.467zM20.37 3.17h-5.84v1.53h5.84V3.17zm1.627 10.1c-.257.37-.583.666-.978.886-.394.22-.838.37-1.33.45-.494.08-.996.12-1.507.12-.617 0-1.197-.09-1.742-.27-.544-.18-1.022-.448-1.43-.806-.41-.357-.735-.808-.97-1.354-.237-.545-.355-1.177-.355-1.898 0-.7.115-1.323.348-1.872.23-.55.55-1.012.96-1.388.41-.374.89-.66 1.44-.856.55-.197 1.145-.296 1.786-.296.688 0 1.29.12 1.805.36.514.24.94.576 1.277 1.005.336.43.58.94.73 1.53.15.59.205 1.23.163 1.92h-5.644c.044.74.28 1.3.706 1.68.427.38.977.57 1.65.57.46 0 .856-.1 1.188-.306.332-.204.556-.49.675-.858h1.947c-.123.52-.36.99-.72 1.383zm-2.04-5.08c-.34-.346-.85-.52-1.526-.52-.44 0-.81.074-1.11.22-.3.147-.547.33-.74.55-.193.22-.33.455-.414.71-.083.253-.13.5-.14.74h4.483c-.07-.73-.315-1.355-.553-1.7z"/>
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
          {[
            { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63z"/></svg>, label: "Twitter" },
            { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, label: "LinkedIn" },
            { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12zm7.92 5.292a10.136 10.136 0 012.133 5.955c-.314-.063-3.426-.694-6.563-.3-.073-.18-.144-.36-.22-.54-.197-.48-.413-.96-.633-1.427 3.472-1.42 5.05-3.44 5.283-3.688zM12 2.148c2.495 0 4.793.89 6.57 2.356-.196.22-1.617 2.085-4.977 3.353-1.557-2.86-3.283-5.218-3.559-5.586A10.1 10.1 0 0112 2.148zM8.31 2.87c.267.352 1.965 2.703 3.54 5.503-4.467 1.186-8.41 1.162-8.833 1.155A10.15 10.15 0 018.31 2.87zM1.915 12.013v-.26c.41.009 5.017.07 9.773-1.353.274.535.535 1.078.78 1.622-.123.035-.248.074-.37.113-4.92 1.587-7.53 5.925-7.734 6.27A10.103 10.103 0 011.915 12.013zm10.085 9.846a10.105 10.105 0 01-6.285-2.189c.157-.316 2.14-4.122 7.54-6.006.022-.008.044-.013.065-.02a45.793 45.793 0 011.907 6.773 10.118 10.118 0 01-3.227.442zm5.1-1.52a47.53 47.53 0 00-1.832-6.497c2.985-.479 5.597.31 5.908.4a10.162 10.162 0 01-4.077 6.097z"/></svg>, label: "Dribbble" },
            { icon: <span className="font-serif text-[15px] font-bold">Bē</span>, label: "Behance" },
          ].map((social, i) => (
            <a
              key={i}
              href="#"
              aria-label={social.label}
              className="w-9 h-9 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#4B5563] hover:text-[#0A0A0A] hover:border-[#D1D5DB] hover:bg-[#F9FAFB] transition-all bg-white"
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
              className="text-[15px] font-medium text-[#0A0A0A] py-2 px-3 rounded-xl hover:bg-white/60 transition-colors"
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  )
}
