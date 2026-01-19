import { OpportunityData } from "@/types/data";
import { samplePhdPosition } from "./sample-phd-position";

export const opportunities: OpportunityData[] = [
  samplePhdPosition,
];

export const hasOpportunities = opportunities.length > 0;

export { samplePhdPosition };
