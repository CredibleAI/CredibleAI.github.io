import { TeamMember } from "@/types/team";

/** Prof. first, then Dr., then everyone without an academic title. */
function getTitleRank(name: string): number {
  if (/^prof\./i.test(name)) return 0;
  if (/^dr\./i.test(name)) return 1;
  return 2;
}

function getSurname(name: string): string {
  const withoutTitle = name.replace(/^(Prof\.|Dr\.|prof\.)\s+/i, "").trim();
  const parts = withoutTitle.split(/\s+/);
  return parts[parts.length - 1] ?? withoutTitle;
}

/**
 * Shared ordering for every group that sorts itself: academic title rank
 * first, then surname under Polish collation so ą, ł, ś and friends land in
 * the right place. Used by researchers and alumni, which is why it lives here
 * rather than in either file.
 */
export function compareByTitleThenSurname(a: TeamMember, b: TeamMember): number {
  const rankDiff = getTitleRank(a.name) - getTitleRank(b.name);
  if (rankDiff !== 0) return rankDiff;
  return getSurname(a.name).localeCompare(getSurname(b.name), "pl");
}
