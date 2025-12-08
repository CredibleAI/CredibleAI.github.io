"use client";

import Link from "next/link";
import Logo from "./Logo";
import { NavigationItem } from "@/types";
import { useState, useEffect } from "react";
import { socialLinks } from "@/constants/navigation";

interface NavbarProps {
  items: NavigationItem[];
  activeItem?: string;
}

// Hamburger menu icon
function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke="#001f33"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Close icon (X)
function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Right arrow icon
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 15L12.5 10L7.5 5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar({ items, activeItem }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-[0.5px] border-[#a3a3a3] bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between pl-5 pr-0 md:px-5 lg:px-[120px] py-0 h-[48px] md:h-[64px]">
          <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
            <Logo className="h-[20px] md:h-[22.527px]" variant="default" variantMobile="short" />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center h-full">
            {items.map((item, index) => {
              const isActive = activeItem === item.href;
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex h-full items-center gap-2 px-5 font-mono text-[14px] font-normal leading-[1.1] text-[#001f33] uppercase transition-colors hover:bg-gray-50 ${
                    isActive ? "border-b-[5px] border-b-[#001f33]" : "border-b-[5px] border-b-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden flex items-center justify-center w-[48px] h-[48px] bg-white"
            aria-label="Open menu"
          >
            <HamburgerIcon />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#001f33] flex flex-col">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-5 py-5 h-[48px] border-b border-[rgba(255,255,255,0.2)] flex-shrink-0">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Logo className="h-[20px]" variant="white" variantMobile="short" />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-[48px] h-[48px] p-0"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-8 px-5 pt-[99px] pb-8 border-b border-[rgba(255,255,255,0.2)] flex-shrink-0">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-mono text-[20px] font-normal leading-[1.1] text-white uppercase tracking-[-0.8px] hover:opacity-80 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social Links - positioned at bottom */}
          <div className="flex flex-col gap-4 px-5 pb-[32px] mt-auto">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-0.5 font-mono text-base font-normal leading-[1.1] text-white tracking-[-0.64px] hover:opacity-80 transition-opacity"
              >
                {link.platform}
                <ArrowRightIcon className="ml-0.5" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

