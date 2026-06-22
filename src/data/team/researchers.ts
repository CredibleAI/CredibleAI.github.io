import { TeamMember } from "@/types/team";

function getResearcherRank(name: string): number {
  if (/^prof\./i.test(name)) return 0;
  if (/^dr\./i.test(name)) return 1;
  return 2;
}

function getSurname(name: string): string {
  const withoutTitle = name.replace(/^(Prof\.|Dr\.|prof\.)\s+/i, "").trim();
  const parts = withoutTitle.split(/\s+/);
  return parts[parts.length - 1] ?? withoutTitle;
}

function compareResearchers(a: TeamMember, b: TeamMember): number {
  const rankDiff = getResearcherRank(a.name) - getResearcherRank(b.name);
  if (rankDiff !== 0) return rankDiff;
  return getSurname(a.name).localeCompare(getSurname(b.name), "pl");
}

const researchersUnsorted: TeamMember[] = [
  {
    id: "jacek-tabor",
    name: "Prof. Jacek Tabor",
    imageUrl: "/images/team/tabor.webp",
    imageAlt: "Prof. Jacek Tabor",
    tags: ["generative models", "interpretability", "biomedical applications"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/jacek-tabor-56b23b68/",
      website: "https://jacek-tabor.u.matinf.uj.edu.pl",
      email: "mailto:jacek.tabor@uj.edu.pl",
      googleScholar: "https://scholar.google.com/citations?user=zSKYziUAAAAJ&hl=en",
    },
  },
  {
    id: "jacek-rogala",
    name: "Dr. Jacek Rogala",
    imageUrl: "/images/team/rogala.webp",
    imageAlt: "Dr. Jacek Rogala",
    tags: ["biomedical applications"],
    socialLinks: {
      email: "mailto:rogala.jacek@gmail.com",
      googleScholar: "https://scholar.google.pl/citations?user=nhHy0lUAAAAJ&hl=pl",
    },
  },
  {
    id: "inez-okulska",
    name: "Dr. Inez Okulska",
    imageUrl: "/images/team/okulska.webp",
    imageAlt: "Dr. Inez Okulska",
    tags: ["agentic AI", "LLM", "NLP", "semantics", "linguistics"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/inezokulska/",
      twitter: "https://x.com/InezOkulska",
      googleScholar: "https://scholar.google.com/citations?hl=pl&user=wKQ-ZfQAAAAJ",
    },
  },
  {
    id: "bartosz-naskreci",
    name: "Dr. Bartosz Naskręcki",
    imageUrl: "/images/team/naskrecki.webp",
    imageAlt: "Dr. Bartosz Naskręcki",
    tags: ["generative models", "interpretability", "formal methods in mathematics and programming"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/bartosz-naskręcki-60222593",
      website: "https://bnaskrecki.faculty.wmi.amu.edu.pl/",
      email: "mailto:nasqret@gmail.com",
      twitter: "https://x.com/nasqret",
      googleScholar: "https://scholar.google.com/citations?user=CdSaCfYAAAAJ&hl=pl",
    },
  },
  {
    id: "kamil-ksiazek",
    name: "Dr. Kamil Książek",
    imageUrl: "/images/team/ksiazek.webp",
    imageAlt: "Dr. Kamil Książek",
    tags: ["biomedical AI", "meta learning", "continual learning", "computer vision"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kamil-ksi%C4%85%C5%BCek-6a7098191/",
      googleScholar: "https://scholar.google.com/citations?user=i0N4lY8AAAAJ&hl=pl",
    },
  },
  {
    id: "maciej-szymkowski",
    name: "Dr. Maciej Szymkowski",
    imageUrl: "/images/team/maciej-szymkowski.png",
    imageAlt: "Dr. Maciej Szymkowski",
    tags: ["Biomedical AI", "Medical Applications", "Computer Vision", "Interpretability"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/maciej-szymkowski-ph-d-75481a228/",
      email: "mailto:maciej.szymkowski@pw.edu.pl",
      googleScholar: "https://scholar.google.com/citations?user=PIMu5SsAAAAJ&hl=pl",
    },
  },
  {
    id: "agata-wijata",
    name: "Dr. Agata Wijata",
    imageUrl: "/images/team/agata-wijata.png",
    imageAlt: "Dr. Agata Wijata",
    tags: ["biomedical AI", "medical applications", "computer vision", "interpretability"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/agata-wijata-17766594",
      googleScholar: "https://scholar.google.com/citations?user=xweuhWMAAAAJ&hl=pl",
    },
  },
  {
    id: "hubert-baniecki",
    name: "Hubert Baniecki",
    imageUrl: "/images/team/baniecki.webp",
    imageAlt: "Hubert Baniecki",
    tags: ["interpretability", "tbd"],
    socialLinks: {
      website: "https://hbaniecki.com",
      email: "mailto:h.baniecki@uw.edu.pl",
      googleScholar: "https://scholar.google.com/citations?user=H72DRC0AAAAJ",
    },
  },
  {
    id: "vladimir-zaigrajew",
    name: "Vladimir Zaigrajew",
    imageUrl: "/images/team/zaigrajew.webp",
    imageAlt: "Vladimir Zaigrajew",
    tags: ["representation learning", "interpretability", "mechanistic interpretability"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/vladimirzaigrajew/",
      email: "mailto:vladimir.zaigrajew.dokt@pw.edu.pl",
      googleScholar: "https://scholar.google.com/citations?user=7XKIBvgAAAAJ&hl=en",
    },
  },
  {
    id: "bartek-sobieski",
    name: "Bartek Sobieski",
    imageUrl: "/images/team/sobieski.webp",
    imageAlt: "Bartek Sobieski",
    tags: ["generative models", "interpretability"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/bartłomiej-sobieski/",
      email: "mailto:b.sobieski@uw.edu.pl",
      twitter: "https://x.com/sobieskibj_bj",
      googleScholar: "https://scholar.google.com/citations?user=ZDCPqL8AAAAJ&hl=en",
    },
  },
  {
    id: "bartek-kochanski",
    name: "Bartek Kochański",
    imageUrl: "/images/team/kochanski.webp",
    imageAlt: "Bartek Kochański",
    tags: ["computer-aided diagnosis", "biomarkers", "AI in radiology", "research commercialization"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/bkochanski/",
      email: "mailto:bartosz.kochanski.dokt@pw.edu.pl",
      googleScholar: "https://scholar.google.com/citations?hl=en&user=Z2WIOZwAAAAJ",
    },
  },
  {
    id: "pawel-struski",
    name: "Paweł Struski",
    imageUrl: "/images/team/struski.webp",
    imageAlt: "Paweł Struski",
    tags: ["economics", "LLMs", "agentic AI"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/pawel-struski-aa089b9b/",
      website: "https://pawel-struski.github.io/",
      email: "p.struski@uw.edu.pl",
    },
  },
  {
    id: "jan-piotrowski",
    name: "Jan Piotrowski",
    imageUrl: "/images/team/piotrowski.webp",
    imageAlt: "Jan Piotrowski",
    tags: ["NLP", "LLM", "mechanistic interpretability", "agentic AI"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/jan-piotrowski-23553719b/",
      website: "https://jfpio.github.io/",
      email: "mailto:jan.piotrowski@pw.edu.pl",
      twitter: "https://twitter.com/jfpio98",
      googleScholar: "https://scholar.google.com/citations?user=ddRdNlIAAAAJ",
    },
  },
  {
    id: "dawid-pludowski",
    name: "Dawid Płudowski",
    imageUrl: "/images/team/pludowski.webp",
    imageAlt: "Dawid Płudowski",
    tags: ["mechanistic interpretability", "time series"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dawid-płudowski-2a2303256/",
      email: "mailto:dawid.pludowski@gmail.com",
      googleScholar: "https://scholar.google.com/citations?user=HewSBiIAAAAJ&hl=pl",
    },
  },
  {
    id: "agata-kaczmarek",
    name: "Agata Kaczmarek",
    imageUrl: "/images/team/kaczmarek.webp",
    imageAlt: "Agata Kaczmarek",
    tags: [],
    socialLinks: {},
  },
  {
    id: "michal-wlodarczyk",
    name: "Michał Włodarczyk",
    imageUrl: "/images/team/wlodarczyk.webp",
    imageAlt: "Michał Włodarczyk",
    tags: ["neural fields", "computer vision", "robotics"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/michal-jan-wlodarczyk",
      website: "https://mwlodarzc.github.io",
      email: "mailto:mwlodarzc@gmail.com",
      googleScholar: "https://scholar.google.com/citations?user=tJZaT_4AAAAJ",
    },
  },
  {
    id: "pawel-gelar",
    name: "Paweł Gelar",
    imageUrl: "/images/team/gelar.webp",
    imageAlt: "Paweł Gelar",
    tags: ["computer vision", "mechanistic interpretability"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/pawel-gelar/",
      email: "mailto:pawel.gelar@gmail.com",
    },
  },
  {
    id: "jakub-grzywaczewski",
    name: "Jakub Grzywaczewski",
    imageUrl: "/images/team/grzywaczewski.webp",
    imageAlt: "Jakub Grzywaczewski",
    tags: ["generative models", "attributions"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/jakub-grzywaczewski-5b6801236/",
      email: "mailto:jakubzgrzywaczewski@gmail.com",
    },
  },
  {
    id: "jakub-rymarski",
    name: "Jakub Rymarski",
    imageUrl: "/images/team/rymarski.webp",
    imageAlt: "Jakub Rymarski",
    tags: ["generative models", "biomedical applications"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/jakub-rymarski/",
      email: "mailto:jakub.rymarski.stud@pw.edu.pl",
    },
  },
  {
    id: "suszynski",
    name: "Piotr Suszyński",
    imageUrl: "/images/team/suszynski.webp",
    imageAlt: "Piotr Suszyński",
    tags: ["bioinformatics", "genetic association testing", "XAI"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/piotrsuszynski",
      email: "mailto:piotr.suszynski.dokt@pw.edu.pl",
    },
  },
  {
    id: "swiechowski",
    name: "Dr. Maciej Świechowski",
    imageUrl: "/images/team/swiechowski.webp",
    imageAlt: "Dr. Maciej Świechowski",
    tags: [
      "DECISION-MAKING AI",
      "COMPUTATIONAL INTELLIGENCE",
      "MEDICAL APPLICATIONS",
      "AI IN INDUSTRY",
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/maciej-%C5%9Bwiechowski-6053a21ab/",
      googleScholar: "https://scholar.google.pl/citations?user=VR1gtbMAAAAJ&hl=en",
      researchGate: "https://www.researchgate.net/profile/Maciej-Swiechowski",
      email: "maciej.swiechowski@pw.edu.pl",
      website: "https://www.cyberiada.eu/",
    },
  },
];

export const researchers = [...researchersUnsorted].sort(compareResearchers);
