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

// A focus leader owns one research domain and describes it in a single line.
export interface FocusLeader {
  id: string;
  name: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  /** The domain this person leads, one per leader, e.g. "Medical Imaging". */
  focusArea: string;
  /** One-line summary of what the focus is about. */
  focusDescription: string;
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

/**
 * Somebody who moves research out of the Centre and into companies. The section
 * gives one person the full column width, so the shape carries a lead paragraph
 * and a short breakdown of the job, which a card cannot hold. Written as an
 * array from the start, since this will not stay a section of one.
 */
export interface BrokerProfile {
  id: string;
  name: string;
  imageUrl: string;
  imageAlt: string;
  role: string;
  /** What this person does, in the third person, as on a team leader card. */
  description: string;
  /** One line, where a leader card carries the name of the research team. */
  missionTitle: string;
  /** What the role is for, which is the Centre's reason to have it at all. */
  mission: string;
  tags: string[];
  socialLinks?: {
    linkedin?: string;
    googleScholar?: string;
    researchGate?: string;
    twitter?: string;
    email?: string;
    website?: string;
  };
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
