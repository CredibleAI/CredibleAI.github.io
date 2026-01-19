import { OpportunityData } from "@/types/data";
import { postdocExplainableAi } from "./postdoc-explainable-ai";

export const opportunities: OpportunityData[] = [
  postdocExplainableAi,
];

export const hasOpportunities = opportunities.length > 0;

export { postdocExplainableAi };
