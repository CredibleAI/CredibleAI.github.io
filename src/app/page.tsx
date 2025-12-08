import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Image from "next/image";
import MissionSection from "@/components/MissionSection";
import VisionSection from "@/components/VisionSection";
import ValuesSection from "@/components/ValuesSection";
import TeamLeadersSection from "@/components/TeamLeadersSection";
import PartnerSection from "@/components/PartnerSection";
import CTASection from "@/components/CTASection";
import { leaders } from "@/data/team";
import { navigationItems } from "@/constants/navigation";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/" />
      
      {/* Hero + Partner Logos - always fits viewport */}
      <div className="flex flex-col h-[100svh]">
        {/* Hero Section */}
        <div className="flex-1 pt-[48px] md:pt-[64px] min-h-0">
          <Hero />
        </div>

        {/* Partner Logos Section */}
        <div className="flex items-center justify-center py-3 md:py-4 bg-white z-10 relative shrink-0">
          <div className="relative h-[28px] md:h-[50px] w-full max-w-[600px] mx-auto px-4">
            <Image
              src="/images/partner-logos.jpg"
              alt="Partner and sponsor logos"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="mx-auto max-w-[1440px] px-5 md:px-5 lg:px-[120px] mt-[120px] md:mt-[180px]">
        <div className="flex flex-col gap-[120px] md:gap-[180px] items-start w-full max-w-[1200px] mx-auto">
          {/* Our Mission Section */}
          <MissionSection />

          {/* Our Vision Section */}
          <VisionSection />

          {/* Our Values Section */}
          <ValuesSection />

          {/* Our Team Section */}
          <TeamLeadersSection leaders={leaders} />

          {/* Who Supports Us Section */}
          <PartnerSection />
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-[120px] md:mt-[180px]">
        <CTASection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
