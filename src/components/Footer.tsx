import Link from "next/link";
import Logo from "./Logo";
import { FooterSection, SocialLink } from "@/types";

interface FooterProps {
  spotlightLinks: { label: string; href: string }[];
  socialLinks: SocialLink[];
  partners: string[];
  legalLinks: { label: string; href: string }[];
}

export default function Footer({
  spotlightLinks,
  socialLinks,
  partners,
  legalLinks,
}: FooterProps) {
  return (
    <footer className="border-t border-[#a3a3a3] bg-white">
      <div className="mx-auto flex max-w-[1440px] gap-20 px-[120px] py-20">
        {/* Left Column - Logo and Copyright */}
        <div className="flex flex-col gap-20 pb-0 pt-1">
          <Logo className="h-[89px] w-[414px]" />
          <div className="font-mono text-base font-normal uppercase leading-[1.1] text-[#001f33]">
            <p className="mb-0">Centre for Credible Artificial Intelligence</p>
            <p className="mb-0">Warsaw University of Technology</p>
            <p>©2025 All rights reserved.</p>
          </div>
        </div>

        {/* Spotlight Column */}
        <div className="flex flex-col gap-7">
          <p className="font-sans text-lg font-semibold leading-none tracking-[0.18px] text-[#001f33]">
            Spotlight
          </p>
          <div className="flex flex-col gap-4 font-mono text-base font-normal uppercase leading-[1.1] text-[#001f33]">
            {spotlightLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Follow Us Column */}
        <div className="flex flex-col gap-7">
          <p className="font-sans text-lg font-semibold leading-none tracking-[0.18px] text-[#001f33]">
            Follow us
          </p>
          <div className="flex flex-col gap-4 font-mono text-base font-normal uppercase leading-[1.1] text-[#001f33]">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.platform}
              </Link>
            ))}
          </div>
        </div>

        {/* Partners and Legal Column */}
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-7">
            <p className="font-sans text-lg font-semibold leading-none tracking-[0.18px] text-[#001f33]">
              Partners
            </p>
            <div className="flex flex-col gap-4 font-mono text-base font-normal uppercase leading-[1.1] text-[#001f33]">
              {partners.map((partner, index) => (
                <p key={index}>{partner}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <p className="font-sans text-lg font-semibold leading-none tracking-[0.18px] text-[#001f33]">
              Legal
            </p>
            <div className="flex flex-col gap-4 font-mono text-base font-normal uppercase leading-[1.1] text-[#001f33]">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

