import { OpportunityData } from "@/types/data";
import { assistantProfessorCcai2026R213 } from "./assistant-professor-ccai-2026-r2-13";
import { assistantProfessorCcai2026R211 } from "./assistant-professor-ccai-2026-r2-11";
import { juniorResearcherCcai2026R112 } from "./junior-researcher-ccai-2026-r1-12";
import { juniorResearcherCcai2026R18 } from "./junior-researcher-ccai-2026-r1-8";
import { juniorResearcherCcai2026R110 } from "./junior-researcher-ccai-2026-r1-10";

export const opportunities: OpportunityData[] = [
  assistantProfessorCcai2026R213,
  assistantProfessorCcai2026R211,
  juniorResearcherCcai2026R112,
  juniorResearcherCcai2026R110,
  juniorResearcherCcai2026R18,
];

export const hasOpportunities = opportunities.length > 0;

export {
  assistantProfessorCcai2026R213,
  assistantProfessorCcai2026R211,
  juniorResearcherCcai2026R112,
  juniorResearcherCcai2026R18,
  juniorResearcherCcai2026R110,
};
