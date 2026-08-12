/** Where a person sits relative to the Centre. */
export type Affiliation = "core" | "external";

/** Whether a person is currently involved with the Centre. */
export type MemberStatus = "active" | "alumni";

export interface TeamMember {
  id: string;
  name: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  isUnannounced?: boolean;
  /**
   * Affiliation and status are deliberately independent: someone can be an
   * external collaborator who is still active, or a core researcher who has
   * moved on. Display sections are derived from the pair in
   * `src/data/team/index.ts`, so moving a person between sections is a
   * one-field edit rather than moving their entry between files.
   */
  affiliation?: Affiliation; // defaults to "core"
  status?: MemberStatus; // defaults to "active"
  /** Optional marker rendered on the card, e.g. "Intern", "Visiting". */
  role?: string;
  /** Alumni only: short note for the list, e.g. "2024-2025, now at UW". */
  alumniNote?: string;
  socialLinks?: {
    linkedin?: string;
    googleScholar?: string;
    researchGate?: string;
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
    researchGate?: string;
    twitter?: string;
    email?: string;
    website?: string;
  };
}
