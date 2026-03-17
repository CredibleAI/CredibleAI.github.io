import { OpportunityData } from "@/types/data";
import { postdocExplainableAi } from "./postdoc-explainable-ai";
import { ccaiAssistantProfessor } from "./ccai-assistants-professor"

export const opportunities: OpportunityData[] = [
  postdocExplainableAi,
  ccaiAssistantProfessor
];

export const hasOpportunities = opportunities.length > 0;

export { postdocExplainableAi };
