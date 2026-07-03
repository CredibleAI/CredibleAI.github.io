import { OpportunityData } from "@/types/data";
import { juniorResearcherCcai2026R18 } from "./junior-researcher-ccai-2026-r1-8";
import { juniorResearcherCcai2026R110 } from "./junior-researcher-ccai-2026-r1-10";

export const opportunities: OpportunityData[] = [
  juniorResearcherCcai2026R110,
  juniorResearcherCcai2026R18,
];

export const hasOpportunities = opportunities.length > 0;

export { juniorResearcherCcai2026R18, juniorResearcherCcai2026R110 };
