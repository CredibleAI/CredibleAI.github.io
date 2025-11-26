import { Article } from "@/types/article";
import { towardsEvaluatingExplanationsVisionTransformersArticle } from "./towards-evaluating-explanations-vision-transformers";

// Import other articles as they are created
// import { mascotsArticle } from "./mascots-model-agnostic-symbolic-counterfactual";
// import { srfamapArticle } from "./srfamap-mapping-integrated-gradients";
// import { explainingSimilarityArticle } from "./explaining-similarity-vision-language-encoders";

const articles: Article[] = [
  towardsEvaluatingExplanationsVisionTransformersArticle,
  // Add other articles here
];

export function getArticleById(id: string): Article | undefined {
  return articles.find((article) => article.id === id);
}

export function getAllArticles(): Article[] {
  return articles;
}

// Export individual articles for direct imports if needed
export { towardsEvaluatingExplanationsVisionTransformersArticle };

