import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { news } from "@/data/news";

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

export default function NewsPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/news" />
      
      {/* Main Content */}
      <div className="pt-20">
        {/* Header Section */}
        <Section className="py-20">
          <div className="flex flex-col gap-[19px] items-start leading-[1.1] text-[#001f33] w-full">
            <p className="font-mono text-lg font-normal uppercase">
              news
            </p>
            <p className="font-sans text-[48px] font-normal leading-[1.1] tracking-[-0.96px]">
              Latest updates from CCAI
            </p>
          </div>
        </Section>

        {/* News List */}
        <div className="flex flex-col">
          {news.map((newsItem) => (
            <NewsCard key={newsItem.id} news={newsItem} />
          ))}
        </div>
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

