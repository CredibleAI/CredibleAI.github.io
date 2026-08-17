import { Article } from "@/types/article";
import { grandOpeningCcai } from "./grand-opening-ccai";
import { neurips2025CcaiResearchers } from "./neurips-2025-ccai-researchers";
import { iclr2026CcaiHcaiCollaboration } from "./iclr-2026-ccai-hcai-collaboration";
import { auditingLungCancerRiskPredictionSnap } from "./auditing-lung-cancer-risk-prediction-snap";
import { ricaFellowships2026 } from "./rica-fellowships-2026";

const allNews: Article[] = [
  ricaFellowships2026,
  auditingLungCancerRiskPredictionSnap,
  iclr2026CcaiHcaiCollaboration,
  neurips2025CcaiResearchers,
  grandOpeningCcai,
];

/**
 * Sorted newest first by `publishedDate`, so adding an article anywhere in the
 * array above puts it in the right place. Entries without a date fall to the
 * end rather than silently jumping to the top.
 */
export const news: Article[] = [...allNews].sort((a, b) =>
  (b.publishedDate ?? "").localeCompare(a.publishedDate ?? ""),
);

/** Every category present in the data, for the filter chips. */
export const newsCategories: string[] = Array.from(
  new Set(news.map((article) => article.category).filter(Boolean) as string[]),
).sort();

export function getNewsById(id: string): Article | undefined {
  return news.find((article) => article.id === id);
}

export { grandOpeningCcai, neurips2025CcaiResearchers, iclr2026CcaiHcaiCollaboration, auditingLungCancerRiskPredictionSnap, ricaFellowships2026 };
