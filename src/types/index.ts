export interface NavigationItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  href: string;
}

