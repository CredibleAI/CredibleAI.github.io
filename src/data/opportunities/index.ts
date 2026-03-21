import { OpportunityData } from "@/types/data";
import { assistantProfessorCcai20260306Primary } from "./assistant-professor-ccai-2026-03-06-primary";
import { assistantProfessorCcai20260320Primary } from "./assistant-professor-ccai-2026-03-20-primary";
import { assistantProfessorCcai2026R25TwoHalfTime } from "./assistant-professor-ccai-2026-r2-5-two-half-time";
import { juniorResearcherCcai2026R14 } from "./junior-researcher-ccai-2026-r1-4";
import { juniorResearcherCcai2026R16 } from "./junior-researcher-ccai-2026-r1-6";
import { postdocExplainableAi } from "./postdoc-explainable-ai";
import { ccaiAssistantProfessor } from "./ccai-assistants-professor"

export const opportunities: OpportunityData[] = [
  assistantProfessorCcai2026R25TwoHalfTime,
  assistantProfessorCcai20260320Primary,
  assistantProfessorCcai20260306Primary,
  juniorResearcherCcai2026R14,
  juniorResearcherCcai2026R16,
  postdocExplainableAi,
  ccaiAssistantProfessor
];

export const hasOpportunities = opportunities.length > 0;

export {
  assistantProfessorCcai20260306Primary,
  assistantProfessorCcai20260320Primary,
  assistantProfessorCcai2026R25TwoHalfTime,
  juniorResearcherCcai2026R14,
  juniorResearcherCcai2026R16,
};
export { postdocExplainableAi };
