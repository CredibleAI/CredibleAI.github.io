import { OpportunityData } from "@/types/data";
import { assistantProfessorCcai20260306Primary } from "./assistant-professor-ccai-2026-03-06-primary";
import { assistantProfessorCcai20260320Primary } from "./assistant-professor-ccai-2026-03-20-primary";
import { assistantProfessorCcai2026R25TwoHalfTime } from "./assistant-professor-ccai-2026-r2-5-two-half-time";
import { juniorResearcherCcai2026R14 } from "./junior-researcher-ccai-2026-r1-4";
import { juniorResearcherCcai2026R16 } from "./junior-researcher-ccai-2026-r1-6";
import { juniorResearcherCcai2026R18 } from "./junior-researcher-ccai-2026-r1-8";
import { juniorResearcherCcai2026R09 } from "./junior-researcher-ccai-2026-r0-9";
import { knowledgeTransferBrokerCcai20267 } from "./knowledge-transfer-broker-ccai-2026-7";

export const opportunities: OpportunityData[] = [
  juniorResearcherCcai2026R09,
  juniorResearcherCcai2026R18,
  knowledgeTransferBrokerCcai20267,
  assistantProfessorCcai2026R25TwoHalfTime,
  assistantProfessorCcai20260320Primary,
  assistantProfessorCcai20260306Primary,
  juniorResearcherCcai2026R14,
  juniorResearcherCcai2026R16,
];

export const hasOpportunities = opportunities.length > 0;

export {
  assistantProfessorCcai20260306Primary,
  assistantProfessorCcai20260320Primary,
  assistantProfessorCcai2026R25TwoHalfTime,
  juniorResearcherCcai2026R14,
  juniorResearcherCcai2026R16,
  juniorResearcherCcai2026R18,
  juniorResearcherCcai2026R09,
  knowledgeTransferBrokerCcai20267,
};
