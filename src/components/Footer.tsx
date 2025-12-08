import Link from "next/link";
import Logo from "./Logo";
import {
  spotlightLinks,
  socialLinks,
  partners,
  legalLinks,
} from "@/constants/navigation";

export default function Footer() {
  return (
    <footer className="border-t-[0.5px] border-[#a3a3a3] bg-white">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col gap-10 px-5 py-10">
        {/* Logo and Copyright */}
        <div className="flex flex-col gap-4 pb-0 pt-1">
          <Logo className="h-[40px] w-[185.715px]" />
          <div className="font-mono text-xs font-normal leading-[1.1] text-[#001f33]">
            <p className="mb-0">Centre for Credible Artificial Intelligence</p>
            <p className="mb-0">Warsaw University of Technology</p>
            <p>©2025 All rights reserved.</p>
          </div>
        </div>

        {/* Spotlight and Follow Us */}
        <div className="flex gap-10 items-start w-full">
          {/* Spotlight Column */}
          <div className="flex flex-col flex-1 gap-7">
            <p className="font-sans text-base font-semibold leading-[1.1] tracking-[-0.16px] text-[#001f33]">
              Spotlight
            </p>
            <div className="flex flex-col gap-4 font-mono text-sm font-normal leading-[1.1] text-[#001f33]">
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
          <div className="flex flex-col flex-1 gap-7">
            <p className="font-sans text-base font-semibold leading-[1.1] tracking-[-0.16px] text-[#001f33]">
              Follow us
            </p>
            <div className="flex flex-col gap-4 font-mono text-sm font-normal leading-[1.1] text-[#001f33]">
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
        </div>

        {/* Partners Section */}
        <div className="flex flex-col gap-7">
          <p className="font-sans text-base font-semibold leading-[1.1] tracking-[-0.16px] text-[#001f33]">
            Partners
          </p>
          <div className="flex flex-col gap-4 font-mono text-sm font-normal leading-[1.1] text-[#001f33]">
            {partners.map((partner, index) => (
              <p key={index}>{partner}</p>
            ))}
          </div>
        </div>

        {/* Legal Section */}
        <div className="flex flex-col gap-7">
          <p className="font-sans text-base font-semibold leading-[1.1] tracking-[-0.16px] text-[#001f33]">
            Legal
          </p>
          <div className="flex flex-col gap-4 font-mono text-sm font-normal leading-[1.1] text-[#001f33]">
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

      {/* Desktop Layout */}
      <div className="hidden md:flex mx-auto max-w-[1440px] gap-10 lg:gap-20 px-5 lg:px-[120px] py-10 lg:py-20 flex-wrap lg:flex-nowrap">
        {/* Left Column - Logo and Copyright */}
        <div className="flex flex-col gap-20 pb-0 pt-1 shrink-0">
          <Logo className="h-[89px]" />
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
          <div className="flex flex-col gap-4 font-mono text-sm font-normal uppercase leading-[1.1] text-[#001f33]">
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
          <div className="flex flex-col gap-4 font-mono text-sm font-normal uppercase leading-[1.1] text-[#001f33]">
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
            <div className="flex flex-col gap-4 font-mono text-sm font-normal uppercase leading-[1.1] text-[#001f33]">
              {partners.map((partner, index) => (
                <p key={index}>{partner}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <p className="font-sans text-lg font-semibold leading-none tracking-[0.18px] text-[#001f33]">
              Legal
            </p>
            <div className="flex flex-col gap-4 font-mono text-sm font-normal uppercase leading-[1.1] text-[#001f33]">
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

