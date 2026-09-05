import { OpportunityData } from "@/types/data";
import { assistantProfessorCcai2026R213 } from "./assistant-professor-ccai-2026-r2-13";
import { assistantProfessorCcai2026R211 } from "./assistant-professor-ccai-2026-r2-11";
import { juniorResearcherCcai2026R112 } from "./junior-researcher-ccai-2026-r1-12";
import { juniorResearcherCcai2026R18 } from "./junior-researcher-ccai-2026-r1-8";
import { juniorResearcherCcai2026R110 } from "./junior-researcher-ccai-2026-r1-10";

const registered: OpportunityData[] = [
  assistantProfessorCcai2026R213,
  assistantProfessorCcai2026R211,
  juniorResearcherCcai2026R112,
  juniorResearcherCcai2026R110,
  juniorResearcherCcai2026R18,
];

/** Days a position stays listed after its deadline has passed. */
const GRACE_DAYS = 14;

/**
 * A position without a deadline never expires, and one whose deadline does not
 * parse is kept rather than hidden, so a typo cannot silently unpublish a job.
 *
 * This runs at build time, not when somebody visits, because the site is a
 * static export. The scheduled rebuild in `.github/workflows/deploy.yml` is what
 * turns it into something that happens on its own.
 */
const isCurrent = (o: OpportunityData) => {
  if (!o.deadline) return true;
  const closes = Date.parse(`${o.deadline}T23:59:59Z`);
  if (Number.isNaN(closes)) return true;
  return Date.now() <= closes + GRACE_DAYS * 24 * 60 * 60 * 1000;
};

export const opportunities: OpportunityData[] = registered.filter(isCurrent);

export const hasOpportunities = opportunities.length > 0;

export {
  assistantProfessorCcai2026R213,
  assistantProfessorCcai2026R211,
  juniorResearcherCcai2026R112,
  juniorResearcherCcai2026R18,
  juniorResearcherCcai2026R110,
};
