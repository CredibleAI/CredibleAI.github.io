import { phdPositionExplainableAiMedical } from "./phd-position-explainable-ai-medical";
import { postdocResearcherVisionLanguageExplainability } from "./postdoc-researcher-vision-language-explainability";
import { internshipResearchAssistant } from "./internship-research-assistant";
import { postdocComputerVision } from "./postdoc-computer-vision";
import { OpportunityData } from "@/types/data";

export const opportunities: OpportunityData[] = [
  phdPositionExplainableAiMedical,
  postdocResearcherVisionLanguageExplainability,
  postdocComputerVision,
  internshipResearchAssistant,
];

// Export individual opportunities for direct imports if needed
export {
  phdPositionExplainableAiMedical,
  postdocResearcherVisionLanguageExplainability,
  postdocComputerVision,
  internshipResearchAssistant,
};
