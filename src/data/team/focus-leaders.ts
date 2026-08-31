import { FocusLeader } from "@/types/team";

// The `focusArea` names are the ones the Centre settled on. The
// `focusDescription` texts follow the two-sentence shape used by
// `teamDescription` in leaders.ts, and are drafts until each leader supplies
// their own copy.
//
// Keep `tags` free of the term already used as `focusArea`, so the keywords
// add information rather than repeating the focus.
export const focusLeaders: FocusLeader[] = [
  {
    id: "agata-wijata",
    name: "Dr. Agata Wijata",
    imageUrl: "/images/team/agata-wijata.png",
    imageAlt: "Dr. Agata Wijata",
    tags: ["hyperspectral imaging", "computer vision", "interpretability"],
    focusArea: "Earth Observation & Space AI",
    focusDescription:
      "We focus on AI running on board satellites, under hard limits on power and downlink. Our goal is analysis dependable enough to act on.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/agata-wijata-17766594",
      googleScholar: "https://scholar.google.com/citations?user=xweuhWMAAAAJ&hl=pl",
    },
  },
  {
    id: "bartek-sobieski",
    name: "Bartek Sobieski",
    imageUrl: "/images/team/sobieski.webp",
    imageAlt: "Bartek Sobieski",
    tags: ["diffusion models", "attributions", "medical imaging"],
    focusArea: "Generative Interpretability of Vision Models",
    focusDescription:
      "We focus on explaining vision models by generating interventions rather than correlations. Our goal is explanation that holds up under audit.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/bartłomiej-sobieski/",
      googleScholar: "https://scholar.google.com/citations?user=ZDCPqL8AAAAJ&hl=en",
      twitter: "https://x.com/sobieskibj_bj",
      email: "b.sobieski@uw.edu.pl",
    },
  },
  {
    id: "vladimir-zaigrajew",
    name: "Vladimir Zaigrajew",
    imageUrl: "/images/team/zaigrajew.webp",
    imageAlt: "Vladimir Zaigrajew",
    tags: ["representation learning", "concept discovery"],
    focusArea: "Mechanistic Interpretability of Vision-Language Models",
    focusDescription:
      "We focus on the internal structure of vision-language models. Our goal is to explain not what they attend to, but how they decide.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/vladimirzaigrajew/",
      googleScholar: "https://scholar.google.com/citations?user=7XKIBvgAAAAJ&hl=en",
      email: "vladimir.zaigrajew.dokt@pw.edu.pl",
    },
  },
  {
    id: "kamil-ksiazek",
    name: "Dr. Kamil Książek",
    imageUrl: "/images/team/ksiazek.webp",
    imageAlt: "Dr. Kamil Książek",
    tags: ["meta learning", "continual learning", "biomedical AI"],
    focusArea: "Foundations of Vision & Multimodal Models",
    focusDescription:
      "We focus on how vision and multimodal models build and retain representations. Our goal is foundations that hold once the data shifts.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kamil-ksi%C4%85%C5%BCek-6a7098191/",
      googleScholar: "https://scholar.google.com/citations?user=i0N4lY8AAAAJ&hl=pl",
    },
  },
];
