import { NavigationItem } from "@/types";

// All subpages should always be on navbar (except projects which is hidden)
export const navigationItems: NavigationItem[] = [
  { label: "TEAM", href: "/about" },
  { label: "NEWS", href: "/news" },
  { label: "JOIN US", href: "/join-us" },
  { label: "CONTACT", href: "/contact" },
];

// Footer links - shared across all pages (synced with navbar)
export const spotlightLinks = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Join Us", href: "/join-us" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { platform: "LinkedIn", href: "https://www.linkedin.com/company/106999413/admin/dashboard/" },
  { platform: "Twitter", href: "https://x.com/ccaiwut" },
];

export const partners = [
  "Warsaw University of Technology",
  "Foundation for Polish Science",
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms and Conditions", href: "/terms" },
];

