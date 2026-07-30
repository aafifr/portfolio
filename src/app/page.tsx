import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutStats } from "@/components/sections/AboutStats";
import { Portfolio } from "@/components/sections/Portfolio";
import { ServicesProcess } from "@/components/sections/ServicesProcess";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { ContactFooter, FooterBar } from "@/components/sections/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center pt-4 sm:pt-[16px] pb-4 sm:pb-6 px-4">
      {/* Sticky Navbar */}
      <div className="sticky top-4 sm:top-[16px] z-50 w-full max-w-[760px]">
        <Navbar />
      </div>

      {/* Hero section */}
      <div className="w-full max-w-[760px] bg-[#F3F4F6] rounded-[22px] mb-4 -mt-[50px] pt-[50px]">
        <div className="pt-[2px]">
          <Hero />
        </div>
      </div>

      {/* Content sections — each is wrapped in a grey card */}
      <div className="w-full max-w-[760px] flex flex-col gap-4">
        {/* About & Portfolio (Connected) */}
        <div className="w-full bg-[#F3F4F6] rounded-[22px] p-[2px] flex flex-col">
          <AboutStats />
          <Portfolio />
        </div>
        <div className="w-full bg-[#F3F4F6] rounded-[22px] p-[2px]">
          <ServicesProcess />
        </div>
        <div className="w-full bg-[#F3F4F6] rounded-[22px] p-[2px]">
          <Testimonials />
        </div>
        <div className="w-full bg-[#F3F4F6] rounded-[22px] p-[2px]">
          <Pricing />
        </div>
        <div className="w-full bg-[#F3F4F6] rounded-[22px] p-[2px]">
          <FAQ />
        </div>
        <div className="w-full bg-[#F3F4F6] rounded-[22px] p-[2px]">
          <ContactFooter />
        </div>
        <FooterBar />
      </div>
    </main>
  );
}
