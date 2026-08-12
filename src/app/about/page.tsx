import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import Image from "next/image";
import { teamSections } from "@/data/team";
import { navigationItems } from "@/constants/navigation";

/**
 * Display order for the team page. Sections render in this order and hide
 * themselves when empty, so adding one is a single line here plus a matching
 * entry in `teamSections`. Note that `directors` is deliberately absent: it
 * exists in the data but has never been shown on the site.
 */
const SECTION_ORDER: { title: string; props: Record<string, boolean> }[] = [
  { title: "leaders", props: { isLeaders: true } },
  { title: "researchers", props: { isWrapped: true } },
  { title: "collaborators", props: { isWrapped: true } },
  { title: "administration", props: { isWrapped: true } },
  { title: "supporters", props: { isWrapped: true } },
  { title: "alumni", props: { isAlumni: true } },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/about" />
      
      {/* Main Content */}
      <div className="pt-[64px] md:pt-[80px]">
        <Section className="py-20 md:py-32 lg:py-[180px]">
            <div className="flex flex-col gap-[90px] md:gap-32 lg:gap-[180px] items-start max-w-[1200px] mx-auto">
            {/* Header Section */}
            <div className="flex flex-col gap-0 items-start text-[#001f33] w-full">
              <p className="font-mono text-base md:text-lg font-normal uppercase mb-[10px] md:mb-[28px] tracking-[0.32px]">
                our team
              </p>
              <p className="font-sans text-[28px] sm:text-4xl md:text-[48px] font-normal leading-[1.1] tracking-[-0.56px] sm:tracking-[-0.72px] md:tracking-[-0.96px]">
                We are an interdisciplinary team – because algorithmic
                knowledge without domain knowledge leads nowhere.
              </p>
            </div>

            {/* Team Sections */}
            <div className="flex flex-col gap-[80px] items-start w-full">
              {SECTION_ORDER.map(({ title, props }) => {
                const section = teamSections.find((s) => s.title === title);
                if (!section || section.members.length === 0) return null;
                return (
                  <TeamSection key={title} section={section} {...props} />
                );
              })}
            </div>

            {/* Partners Section */}
            <div className="flex flex-col gap-10 md:gap-20 items-start w-full">
              <div className="flex flex-col gap-[19px] items-start leading-[1.1] text-[#001f33] w-full">
                <p className="font-mono text-base md:text-lg font-normal uppercase">
                  our partners
                </p>
                <p className="font-sans text-[28px] sm:text-4xl md:text-[48px] font-normal leading-[1.1] tracking-[-0.56px] sm:tracking-[-0.72px] md:tracking-[-0.48px]">
                  We build cross-institutional connections.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-[102px] items-center justify-center w-full md:flex-wrap">
                <div className="relative h-[80px] md:h-[103.93px] w-[278.32px] md:w-full md:flex-1 md:min-w-[200px] md:max-w-[360.852px]">
                  <Image
                    src="/images/partners/partner-1.png"
                    alt="Partner logo 1"
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <div className="relative h-[80px] md:h-[103.93px] w-[263.5px] md:w-full md:flex-1 md:min-w-[200px] md:max-w-[258px]">
                  <Image
                    src="/images/partners/partner-2.png"
                    alt="Partner logo 2"
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <div className="relative h-[80px] md:h-[103.93px] w-[278.32px] md:w-full md:flex-1 md:min-w-[200px] md:max-w-[360.852px]">
                  <Image
                    src="/images/partners/partner-4.webp"
                    alt="KP Labs logo"
                    fill
                    className="object-contain object-center"
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

