import { Article } from "@/types/article";
import { newCallForPapersImageRecognitionMedical } from "./new-call-for-papers-image-recognition-medical";

const newsArticles: Article[] = [
  newCallForPapersImageRecognitionMedical,
];

export function getNewsArticleById(id: string): Article | undefined {
  return newsArticles.find((article) => article.id === id);
}

export function getAllNewsArticles(): Article[] {
  return newsArticles;
}

export { newCallForPapersImageRecognitionMedical };

