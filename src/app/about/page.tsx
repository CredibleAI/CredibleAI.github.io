import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import Image from "next/image";
import { teamSections } from "@/data/team";
import { navigationItems } from "@/constants/navigation";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/about" />
      
      {/* Main Content */}
      <div className="pt-20">
        <Section className="py-20 md:py-32 lg:py-[180px]">
          <div className="flex flex-col gap-[90px] md:gap-32 lg:gap-[180px] items-start max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0">
            {/* Header Section */}
            <div className="flex flex-col gap-0 items-start text-[#001f33] w-full">
              <p className="font-mono text-base md:text-lg font-normal uppercase mb-[10px] md:mb-[28px] tracking-[0.32px]">
                our team
              </p>
              <p className="font-sans text-4xl md:text-[48px] font-normal leading-[1.1] tracking-[-0.72px] md:tracking-[-0.96px]">
                We are an interdisciplinary team – because algorithmic
                knowledge without domain knowledge leads nowhere.
              </p>
            </div>

            {/* Team Sections */}
            <div className="flex flex-col gap-[80px] items-start w-full">
              {/* Team Leaders - First */}
              {teamSections
                .filter((section) => section.title === "leaders")
                .map((section) => (
                  <TeamSection
                    key={section.title}
                    section={section}
                    isLeaders={true}
                  />
                ))}
              
              {/* Directors - Second */}
              {teamSections
                .filter((section) => section.title === "directors")
                .map((section) => (
                  <TeamSection
                    key={section.title}
                    section={section}
                    isWrapped={true}
                  />
                ))}
              
              {/* Researchers - Third */}
              {teamSections
                .filter((section) => section.title === "researchers")
                .map((section) => (
                  <TeamSection
                    key={section.title}
                    section={section}
                    isWrapped={true}
                  />
                ))}
              
              {/* Administration - Fourth */}
              {teamSections
                .filter((section) => section.title === "administration")
                .map((section) => (
                  <TeamSection
                    key={section.title}
                    section={section}
                    isWrapped={true}
                  />
                ))}
            </div>

            {/* Partners Section */}
            <div className="flex flex-col gap-10 md:gap-20 items-start w-full">
              <div className="flex flex-col gap-[19px] items-start leading-[1.1] text-[#001f33] w-full">
                <p className="font-mono text-base md:text-lg font-normal uppercase">
                  our partners
                </p>
                <p className="font-sans text-4xl md:text-[48px] font-normal leading-[1.1] tracking-[-0.72px] md:tracking-[-0.48px]">
                  We build cross-institutional connections.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-[102px] items-start md:items-center w-full md:flex-wrap md:justify-between">
                <div className="relative h-[80px] md:h-[103.93px] w-[278.32px] md:w-full md:flex-1 md:min-w-[200px] md:max-w-[360.852px]">
                  <Image
                    src="/images/partners/partner-1.png"
                    alt="Partner logo 1"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div className="relative h-[45px] md:h-[44.023px] w-[263.5px] md:w-full md:flex-1 md:min-w-[200px] md:max-w-[258px]">
                  <Image
                    src="/images/partners/partner-2.png"
                    alt="Partner logo 2"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div className="relative h-[80px] md:h-[103.93px] w-[269.11px] md:w-full md:flex-1 md:min-w-[200px] md:max-w-[364.621px]">
                  <Image
                    src="/images/partners/partner-3.png"
                    alt="Partner logo 3"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

