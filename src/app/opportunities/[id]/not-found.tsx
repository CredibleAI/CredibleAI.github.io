import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/opportunities" />
      <div className="pt-20 flex flex-col items-center justify-center min-h-[60vh] gap-8">
        <h1 className="font-sans text-[48px] font-normal text-[#001f33]">
          Opportunity Not Found
        </h1>
        <p className="font-sans text-lg text-[#001f33]">
          The opportunity you're looking for doesn't exist.
        </p>
        <Link
          href="/opportunities"
          className="bg-[#001f33] text-white px-6 py-3 font-mono text-sm hover:bg-opacity-90 transition-colors"
        >
          Back to Opportunities
        </Link>
      </div>
      <Footer
        spotlightLinks={spotlightLinks}
        socialLinks={socialLinks}
        partners={partners}
        legalLinks={legalLinks}
      />
    </div>
  );
}

