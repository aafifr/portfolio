"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, MessageSquare } from "lucide-react"

const templateMessages = [
  { label: "🚀 Buat website / app baru", text: "Halo Afif, saya ingin membuat website / aplikasi baru." },
  { label: "🎨 Konsultasi Desain UI/UX", text: "Halo Afif, saya ingin konsultasi mengenai desain UI/UX." },
  { label: "💼 Tanya estimasi harga & timeline", text: "Halo Afif, boleh minta informasi estimasi harga dan timeline proyek?" },
  { label: "💬 Chat Santai", text: "Halo Afif, salam kenal! Saya lihat portofolio Anda dan mau berdiskusi." },
]

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = React.useState(false)
  const phoneNumber = "6285121597870"

  const sendWhatsAppMessage = (customMsg?: string) => {
    const message = customMsg || "Halo Afif, saya tertarik mendiskusikan proyek dengan Anda."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Interactive Chat Popup Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-[310px] sm:w-[340px] bg-white rounded-[22px] shadow-[0_12px_40px_rgba(0,0,0,0.18)] border border-[#E5E7EB] overflow-hidden flex flex-col"
          >
            {/* Widget Header */}
            <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/20 border border-white/40 flex-shrink-0">
                  <img src="/images/profil.webp" alt="Afif Ramadhan" className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] border-2 border-[#075E54] rounded-full" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[14px] font-semibold leading-tight text-white">Afif Ramadhan</p>
                  <p className="text-[11px] text-white/80">Online · Membalas cepat</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body & Messages */}
            <div className="p-4 bg-[#F3F4F6] flex flex-col gap-3 max-h-[340px] overflow-y-auto">
              {/* Agent Greeting Bubble */}
              <div className="self-start max-w-[90%] bg-white p-3.5 rounded-2xl rounded-tl-xs shadow-xs text-[13px] text-[#0A0A0A] leading-relaxed border border-[#E5E7EB]/60">
                Halo! 👋 Ada yang bisa saya bantu dengan proyek web atau desain Anda? Silakan pilih opsi di bawah:
              </div>

              {/* Template Message Quick Reply Chips */}
              <div className="flex flex-col gap-2 pt-1">
                <p className="text-[11px] font-medium text-[#6B7280] uppercase tracking-wider px-1">Pilih Pesan Template:</p>
                {templateMessages.map((tpl, i) => (
                  <button
                    key={i}
                    onClick={() => sendWhatsAppMessage(tpl.text)}
                    className="w-full text-left bg-white hover:bg-[#DCFCE7] border border-[#E5E7EB] hover:border-[#25D366] text-[13px] font-medium text-[#0A0A0A] hover:text-[#15803D] px-3.5 py-2.5 rounded-xl transition-all duration-200 shadow-xs flex items-center justify-between group/chip cursor-pointer"
                  >
                    <span>{tpl.label}</span>
                    <Send className="w-3.5 h-3.5 opacity-0 group-hover/chip:opacity-100 transition-opacity text-[#25D366]" />
                  </button>
                ))}
              </div>
            </div>

            {/* Footer Direct Action */}
            <div className="p-3 bg-white border-t border-[#E5E7EB] flex items-center gap-2">
              <button
                onClick={() => sendWhatsAppMessage()}
                className="w-full h-10 bg-[#25D366] hover:bg-[#22c35e] text-white text-[13px] font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Kirim Pesan kustom</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle WhatsApp Chat"
        className="flex items-center gap-2.5 bg-[#25D366] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.6)] hover:bg-[#22c35e] transition-all duration-300 group cursor-pointer active:scale-95"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <>
            <svg
              className="w-6 h-6 fill-current flex-shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.928 0-3.816-.518-5.46-1.5l-.392-.233-4.06.842 1.085-3.957-.256-.407a10.158 10.158 0 0 1-1.558-5.385C1.81 5.582 6.39 1 12.05 1c2.738 0 5.313 1.068 7.247 3.007a10.2 10.2 0 0 1 3.001 7.243c0 5.669-4.58 10.593-10.247 10.593m0-18.453c-4.992 0-9.056 4.062-9.056 9.054 0 1.637.44 3.234 1.272 4.634l.199.335-.638 2.33 2.385-.626.326.193a9.006 9.006 0 0 0 4.512 1.218h.004c4.99 0 9.055-4.063 9.056-9.055 0-2.42-.942-4.694-2.656-6.41-1.713-1.713-3.987-2.653-6.404-2.653" />
            </svg>
            <span className="hidden sm:inline-block text-[13px] font-semibold tracking-wide pr-1">
              Chat on WhatsApp
            </span>
          </>
        )}

        {/* Pulse ping dot */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
          </span>
        )}
      </button>
    </div>
  )
}
