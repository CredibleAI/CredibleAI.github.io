import { TeamMember } from "@/types/team";

export const directors: TeamMember[] = [
  {
    id: "przemyslaw-biecek",
    name: "prof. Przemysław Biecek",
    imageUrl: "/images/team/biecek.webp",
    imageAlt: "prof. Przemysław Biecek",
    tags: ["XAI", "LLM", "analytics"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/pbiecek/",
      googleScholar: "https://scholar.google.pl/citations?user=Af0O75cAAAAJ&hl=en",
      twitter: "https://x.com/PrzeBiec",
      email: "mailto:przemyslaw.biecek@pw.edu.pl",
      website: "http://biecek.pl/",
    },
  },
  {
    id: "director-2",
    name: "To be announced",
    imageUrl: "",
    imageAlt: "To be announced",
    tags: [],
    isUnannounced: true,
  },
  {
    id: "director-3",
    name: "To be announced",
    imageUrl: "",
    imageAlt: "To be announced",
    tags: [],
    isUnannounced: true,
  },
];
