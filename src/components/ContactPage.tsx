import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { WhatsAppLogo } from './BrandLogos';

interface ContactPageProps {
  onBackToHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBackToHome }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission / mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] pt-[120px] sm:pt-[140px] pb-[120px] px-6 sm:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        
        {/* Back to Home Button */}
        <div className="mb-10 sm:mb-14">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 text-[13.5px] sm:text-[14px] font-medium text-[#64748B] hover:text-[#111111] transition-colors py-2 px-3 -ml-3 rounded-full hover:bg-neutral-100/80 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* 2-Column Responsive Layout Matching Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Contact Info (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Tag */}
            <span className="font-mono text-[11.5px] text-[#2563EB] font-semibold tracking-[0.18em] uppercase block">
              CONTACT
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-medium tracking-[-0.035em] text-[#111111] leading-[1.1] font-sans">
              Let’s build something great together.
            </h1>

            {/* Sub-headline description */}
            <p className="text-[16px] sm:text-[17px] text-[#64748B] font-normal font-sans leading-[1.65] max-w-[480px]">
              Have a project in mind, a role to fill, or just want to say hello? Drop a message and I’ll get back to you within a couple of days.
            </p>

            {/* Direct Contact Links */}
            <div className="pt-4 space-y-3.5">
              {/* Email with Copy Action */}
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[16px] sm:text-[17px] font-medium text-[#111111] hover:text-[#2563EB] transition-colors font-sans underline underline-offset-4 decoration-[#CBD5E1]"
                >
                  {personalInfo.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-1.5 rounded-md hover:bg-neutral-100 text-[#8E95A2] hover:text-[#111111] transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* WhatsApp & Phone */}
              <div>
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[14.5px] text-[#52525B] hover:text-emerald-600 transition-colors font-sans"
                >
                  <WhatsAppLogo className="w-4 h-4 fill-emerald-500" />
                  <span>{personalInfo.phone}</span>
                </a>
              </div>

              {/* Location & Remote Availability */}
              <div className="pt-2">
                <span className="text-[14px] text-[#8E95A2] font-sans block">
                  Remote · Available worldwide
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card (6 cols) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="rounded-[28px] bg-white border border-[#E5E7EB] p-7 sm:p-9 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]"
            >
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-[#111111] font-sans">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-[14.5px] text-[#64748B] font-sans max-w-[320px]">
                    Thank you, <span className="font-semibold text-[#111111]">{name}</span>. I’ve received your inquiry and will reply to <span className="font-semibold text-[#111111]">{email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#111111] text-white text-[13px] font-medium hover:bg-[#2563EB] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-mono font-semibold tracking-wider text-[#8E95A2] uppercase">
                      NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] text-[14.5px] text-[#111111] placeholder:text-[#A1A1AA] focus:outline-none focus:bg-white focus:border-[#111111] transition-all font-sans"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-mono font-semibold tracking-wider text-[#8E95A2] uppercase">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] text-[14.5px] text-[#111111] placeholder:text-[#A1A1AA] focus:outline-none focus:bg-white focus:border-[#111111] transition-all font-sans"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-mono font-semibold tracking-wider text-[#8E95A2] uppercase">
                      MESSAGE
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] text-[14.5px] text-[#111111] placeholder:text-[#A1A1AA] focus:outline-none focus:bg-white focus:border-[#111111] transition-all font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button (Matching reference design) */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full bg-[#F4F4F5] hover:bg-[#111111] text-[#111111] hover:text-white text-[14px] font-medium tracking-tight active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-2xs group"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <ArrowRight className="w-4 h-4 text-[#8E95A2] group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};
