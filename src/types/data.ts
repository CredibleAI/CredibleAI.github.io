// Base structure for all content items
export interface BaseContentItem {
  id: string;
  title: string;
  subtitle: string; // Date or other subtitle
  description: string;
  imageUrl: string;
  imageAlt: string;
}

// Project-specific interface
export interface ProjectData extends BaseContentItem {
  // Projects can have additional fields if needed
  category?: string;
  tags?: string[];
}

// Opportunity-specific interface (for join-us positions)
export interface OpportunityData extends BaseContentItem {
  // Join-us positions can have additional fields if needed
  type?: string; // e.g., "PhD", "Postdoc", "Internship"
  deadline?: string;
  location?: string;
}
