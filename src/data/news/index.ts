import { ccaiAnnouncesNewResearchInitiative } from "./ccai-announces-new-research-initiative";
import { ccaiResearchersPresentAtXaiConference } from "./ccai-researchers-present-at-xai-conference";
import { ccaiWinsBestPaperAward } from "./ccai-wins-best-paper-award";
import { newPhdStudentsJoinCcai } from "./new-phd-students-join-ccai";
import { NewsData } from "@/types/data";

export const news: NewsData[] = [
  ccaiAnnouncesNewResearchInitiative,
  ccaiResearchersPresentAtXaiConference,
  ccaiWinsBestPaperAward,
  newPhdStudentsJoinCcai,
];

// Export individual news items for direct imports if needed
export {
  ccaiAnnouncesNewResearchInitiative,
  ccaiResearchersPresentAtXaiConference,
  ccaiWinsBestPaperAward,
  newPhdStudentsJoinCcai,
};
