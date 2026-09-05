import { directors } from "./directors";
import { administration } from "./administration";
import { leaders } from "./leaders";
import { commercialization } from "./broker";
import { focusLeaders } from "./focus-leaders";
import { researchers } from "./researchers";
import { supporters } from "./supporters";
import { compareByTitleThenSurname } from "./sorting";
import { TeamMember, TeamSection } from "@/types/team";

// Affiliation and status default to "core" and "active" when omitted, so an
// entry that says nothing about either keeps its existing behaviour.
const isActive = (m: TeamMember) => (m.status ?? "active") === "active";
const isAlumni = (m: TeamMember) => m.status === "alumni";
const isCore = (m: TeamMember) => (m.affiliation ?? "core") === "core";

const focusLeaderIds = new Set(focusLeaders.map((m) => m.id));

/**
 * One roster in, three display groups out. To move somebody, edit their
 * `affiliation` or `status` where they already are; do not move the entry
 * between files, which is how people end up rendered twice.
 *
 * Focus leaders are dropped here rather than deleted from `researchers.ts`, so
 * their entry stays the single source for name, photo and links, and a person
 * appears exactly once on the page.
 */
export const coreResearchers = researchers.filter(
  (m) => isActive(m) && isCore(m) && !focusLeaderIds.has(m.id),
);

/**
 * External collaborators, including interns. The section heading already says
 * these people are not core researchers, so their cards carry no extra marker.
 */
export const collaborators = researchers.filter(
  (m) => isActive(m) && !isCore(m),
);

/**
 * Past people, from any group and whether they were core or external. Sorted
 * with the same comparator as the researchers, since concatenating the source
 * groups would otherwise leave them in an arbitrary order.
 */
export const alumni = [...researchers, ...administration, ...supporters]
  .filter(isAlumni)
  .sort(compareByTitleThenSurname);

export const teamSections: TeamSection[] = [
  {
    title: "directors",
    members: directors,
  },
  {
    title: "administration",
    members: administration.filter(isActive),
  },
  {
    title: "leaders",
    members: leaders,
  },
  {
    title: "commercialization managers",
    members: commercialization,
  },
  {
    title: "focus leaders",
    members: focusLeaders,
  },
  {
    title: "researchers",
    members: coreResearchers,
  },
  {
    title: "collaborators",
    members: collaborators,
  },
  {
    title: "alumni",
    members: alumni,
  },
  {
    title: "supporters",
    members: supporters.filter(isActive),
  },
];

export {
  directors,
  administration,
  leaders,
  commercialization,
  focusLeaders,
  researchers,
  supporters,
};
