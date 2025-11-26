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

// News-specific interface
export interface NewsData extends BaseContentItem {
  // News can have additional fields if needed
  author?: string;
  category?: string;
}

// Opportunity-specific interface
export interface OpportunityData extends BaseContentItem {
  // Opportunities can have additional fields if needed
  type?: string; // e.g., "PhD", "Postdoc", "Internship"
  deadline?: string;
  location?: string;
}

