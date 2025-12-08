import { directors } from "./directors";
import { administration } from "./administration";
import { leaders } from "./leaders";
import { researchers } from "./researchers";
import { supporters } from "./supporters";
import { TeamSection } from "@/types/team";

export const teamSections: TeamSection[] = [
  {
    title: "directors",
    members: directors,
  },
  {
    title: "administration",
    members: administration,
  },
  {
    title: "leaders",
    members: leaders,
  },
  {
    title: "researchers",
    members: researchers,
  },
  {
    title: "supporters",
    members: supporters,
  },
];

export { directors, administration, leaders, researchers, supporters };

