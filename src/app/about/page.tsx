import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import Image from "next/image";
import { teamSections } from "@/data/team";

const navigationItems = [
  { label: "about", href: "/about" },
  { label: "news", href: "/news" },
  { label: "opportunities", href: "/opportunities" },
  { label: "projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const spotlightLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { platform: "LinkedIn", href: "#" },
  { platform: "Facebook", href: "#" },
  { platform: "Twitter", href: "#" },
  { platform: "YouTube", href: "#" },
];

const partners = [
  "Warsaw University of Technology",
  "Polish Science Foundation",
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms and Conditions", href: "/terms" },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/about" />
      
      {/* Main Content */}
      <div className="pt-20">
        <Section className="py-[180px]">
          <div className="flex flex-col gap-[180px] items-start max-w-[1200px] mx-auto">
            {/* Header Section */}
            <div className="flex flex-col gap-12 items-start text-[#001f33] w-full">
              <div className="flex flex-col gap-[19px] items-start leading-[1.1] w-full">
                <p className="font-mono text-lg font-normal uppercase">
                  our team
                </p>
                <p className="font-sans text-[48px] font-normal leading-[1.1] tracking-[-0.96px]">
                  We are an interdisciplinary team – because algorithmic
                  knowledge without domain knowledge leads nowhere.
                </p>
              </div>
              <div className="font-sans text-2xl font-normal leading-[1.4] tracking-[-0.24px] w-[606px]">
                <p className="mb-0">
                  CCAI consists of four research teams and around 20 scientists
                  – and this is just the beginning. Our ambitions are
                  international, and recruitment is open to bold minds from
                  around the world.
                </p>
                <p>
                  We are joined by experts in fields such as physics, chemistry,
                  psychology, and law – because algorithmic knowledge without
                  domain knowledge leads nowhere.
                </p>
              </div>
            </div>

            {/* Team Sections */}
            <div className="flex flex-col gap-20 items-start w-full">
              {teamSections.map((section, index) => (
                <TeamSection
                  key={section.title}
                  section={section}
                  isWrapped={index >= 2} // Leaders (index 2) and Researchers (index 3) use wrapped layout
                />
              ))}
            </div>

            {/* Partners Section */}
            <div className="flex flex-col gap-20 items-start w-full">
              <div className="flex flex-col gap-[19px] items-start leading-[1.1] text-[#001f33] w-full">
                <p className="font-mono text-lg font-normal uppercase">
                  our partners
                </p>
                <p className="font-sans text-[48px] font-normal leading-[1.1] tracking-[-0.48px]">
                  We build cross-institutional connections.
                </p>
              </div>
              <div className="flex gap-12 lg:gap-[102px] items-center w-full flex-wrap justify-between">
                <div className="relative h-[103.93px] w-full sm:w-auto sm:flex-1 sm:min-w-[200px] sm:max-w-[360.852px]">
                  <Image
                    src="/images/partners/partner-1.png"
                    alt="Partner logo 1"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-[44.023px] w-full sm:w-auto sm:flex-1 sm:min-w-[200px] sm:max-w-[258px]">
                  <Image
                    src="/images/partners/partner-2.png"
                    alt="Partner logo 2"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-[103.93px] w-full sm:w-auto sm:flex-1 sm:min-w-[200px] sm:max-w-[364.621px]">
                  <Image
                    src="/images/partners/partner-3.png"
                    alt="Partner logo 3"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <Footer
        spotlightLinks={spotlightLinks}
        socialLinks={socialLinks}
        partners={partners}
        legalLinks={legalLinks}
      />
    </div>
  );
}

