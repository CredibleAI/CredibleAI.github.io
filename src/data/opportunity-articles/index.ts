import { Article } from "@/types/article";
import { phdPositionExplainableAiMedicalArticle } from "./phd-position-explainable-ai-medical";

// Import other opportunity articles as they are created
// import { postdocResearcherVisionLanguageArticle } from "./postdoc-researcher-vision-language-explainability";
// import { postdocComputerVisionArticle } from "./postdoc-computer-vision";
// import { internshipResearchAssistantArticle } from "./internship-research-assistant";

const opportunityArticles: Article[] = [
  phdPositionExplainableAiMedicalArticle,
  // Add other articles here
];

export function getOpportunityArticleById(id: string): Article | undefined {
  return opportunityArticles.find((article) => article.id === id);
}

export function getAllOpportunityArticles(): Article[] {
  return opportunityArticles;
}

// Export individual articles for direct imports if needed
export { phdPositionExplainableAiMedicalArticle };

