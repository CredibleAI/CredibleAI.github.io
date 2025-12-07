import { Article } from "@/types/article";
import { grandOpeningCcai } from "./grand-opening-ccai";

export const news: Article[] = [
  grandOpeningCcai,
];

export function getNewsById(id: string): Article | undefined {
  return news.find((article) => article.id === id);
}

export { grandOpeningCcai };
