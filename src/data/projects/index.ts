import { towardsEvaluatingExplanationsVisionTransformers } from "./towards-evaluating-explanations-vision-transformers";
import { mascotsModelAgnosticSymbolicCounterfactual } from "./mascots-model-agnostic-symbolic-counterfactual";
import { srfamapMappingIntegratedGradients } from "./srfamap-mapping-integrated-gradients";
import { explainingSimilarityVisionLanguageEncoders } from "./explaining-similarity-vision-language-encoders";
import { ProjectData } from "@/types/data";

export const projects: ProjectData[] = [
  towardsEvaluatingExplanationsVisionTransformers,
  mascotsModelAgnosticSymbolicCounterfactual,
  srfamapMappingIntegratedGradients,
  explainingSimilarityVisionLanguageEncoders,
];

// Export individual projects for direct imports if needed
export {
  towardsEvaluatingExplanationsVisionTransformers,
  mascotsModelAgnosticSymbolicCounterfactual,
  srfamapMappingIntegratedGradients,
  explainingSimilarityVisionLanguageEncoders,
};
