import { Article } from "@/types/article";
import { grandOpeningCcai } from "./grand-opening-ccai";
import { neurips2025CcaiResearchers } from "./neurips-2025-ccai-researchers";
import { iclr2026CcaiHcaiCollaboration } from "./iclr-2026-ccai-hcai-collaboration";
import { auditingLungCancerRiskPredictionSnap } from "./auditing-lung-cancer-risk-prediction-snap";
import { ricaFellowships2026 } from "./rica-fellowships-2026";

export const news: Article[] = [
  ricaFellowships2026,
  auditingLungCancerRiskPredictionSnap,
  iclr2026CcaiHcaiCollaboration,
  neurips2025CcaiResearchers,
  grandOpeningCcai,
];

export function getNewsById(id: string): Article | undefined {
  return news.find((article) => article.id === id);
}

export { grandOpeningCcai, neurips2025CcaiResearchers, iclr2026CcaiHcaiCollaboration, auditingLungCancerRiskPredictionSnap, ricaFellowships2026 };
