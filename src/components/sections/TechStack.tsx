"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function TechStack({ isEmbedded = false }: { isEmbedded?: boolean }) {
  return (
    <div className="w-full relative z-10 border-t border-[#F3F4F6] pt-6">
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-wrap gap-8 items-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 w-full justify-between">
          
          {/* React */}
          <div className="flex items-center gap-1.5 font-semibold text-[15px] text-[#0A0A0A]">
            <svg width="20" height="20" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
              <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
              <g stroke="#61dafb" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2"/>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
              </g>
            </svg>
            <span className="hidden sm:inline-block tracking-tight">React</span>
          </div>

          {/* Tailwind CSS */}
          <div className="flex items-center gap-1.5 font-semibold text-[15px] text-[#0A0A0A]">
            <svg width="20" height="20" viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M27 0C21.6 0 18 5.4 18 16.2C21.6 10.8 25.2 8.1 28.8 8.1C32.76 8.1 35.1384 10.6358 37.8286 13.5042C40.9419 16.8236 44.5028 20.625 54 20.625C48.6 20.625 45 15.225 45 4.425C41.4 9.825 37.8 12.525 34.2 12.525C30.24 12.525 27.8616 9.98918 25.1714 7.12081C22.0581 3.80136 18.4972 0 9 0V0Z" fill="#38B2AC"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M9 12.375C3.6 12.375 0 17.775 0 28.575C3.6 23.175 7.2 20.475 10.8 20.475C14.76 20.475 17.1384 23.0108 19.8286 25.8792C22.9419 29.1986 26.5028 33 36 33C30.6 33 27 27.6 27 16.8C23.4 22.2 19.8 24.9 16.2 24.9C12.24 24.9 9.86159 22.3642 7.17143 19.4958C4.05813 16.1764 0.497198 12.375 0 12.375V12.375Z" fill="#38B2AC"/>
            </svg>
            <span className="hidden sm:inline-block tracking-tight">Tailwind</span>
          </div>

          {/* Firebase */}
          <div className="flex items-center gap-1.5 font-semibold text-[15px] text-[#0A0A0A]">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.059 18.069L4.85 2.115a.519.519 0 01.815-.368l4.475 3.328-6.081 12.994z" fill="#FFA000"/>
              <path d="M11.666 9.38l-2.023-2.11a.488.488 0 00-.735.01L4.059 18.068l7.607-8.688z" fill="#F57C00"/>
              <path d="M12.067 10.742l1.621 1.696-6.685 10.426 5.064-5.353z" fill="#FFCA28"/>
              <path d="M16.942 22.864c.264.132.576.132.84 0l6.096-3.048-10.478-18.73a.48.48 0 00-.85.01L4.058 18.068l12.884 4.796z" fill="#FFA000"/>
            </svg>
            <span className="hidden sm:inline-block tracking-tight">Firebase</span>
          </div>

          {/* Vercel */}
          <div className="flex items-center gap-1.5 font-semibold text-[15px] text-[#0A0A0A]">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.25L23.25 21.75H.75L12 2.25Z" fill="currentColor"/>
            </svg>
            <span className="hidden sm:inline-block tracking-tight">Vercel</span>
          </div>

          {/* Next.js */}
          <div className="flex items-center gap-1.5 font-semibold text-[15px] text-[#0A0A0A]">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM10.5985 16.7119C10.5985 16.7119 16.4808 23.3642 16.4808 23.3642C17.6534 22.8225 18.7291 22.1009 19.6781 21.2335L11.5303 10.9701L10.5985 16.7119ZM13.8821 16.7562L8.75 10.2863V16.7119H7.15147V7.28806H8.56306L14.2882 14.5028V7.28806H15.8867V16.7562H13.8821Z" fill="currentColor"/>
            </svg>
            <span className="hidden sm:inline-block tracking-tight">Next.js</span>
          </div>

        </div>
      </div>
    </div>
  )
}
