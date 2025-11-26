export interface TeamMember {
  id: string;
  name: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
}

export interface TeamSection {
  title: string;
  members: TeamMember[];
}

