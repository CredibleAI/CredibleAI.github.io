export interface TeamMember {
  id: string;
  name: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  isUnannounced?: boolean;
  socialLinks?: {
    linkedin?: string;
    googleScholar?: string;
    twitter?: string;
    email?: string;
    website?: string;
  };
}

export interface TeamSection {
  title: string;
  members: TeamMember[];
}

// Extended interface for team leaders on home page
export interface TeamLeader {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  description: string;
  teamName: string;
  teamDescription: string;
  isUnannounced?: boolean;
  socialLinks?: {
    linkedin?: string;
    googleScholar?: string;
    twitter?: string;
    email?: string;
    website?: string;
  };
}
