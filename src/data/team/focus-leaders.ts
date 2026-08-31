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
      "We focus on bringing AI on board satellites, analysing hyperspectral Earth observation data under hard limits on power, memory and downlink. Our goal is to make onboard analysis dependable enough to act on, from estimating soil and vegetation parameters to choosing which applications belong in orbit.",
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
      "We focus on explaining vision models by generating interventions rather than reading off correlations, asking what a model would predict had the image been different. Our goal is to turn explanation into evidence that holds up under audit, especially in medical imaging.",
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
      "We focus on the internal structure of vision-language models, recovering the concepts they encode and tracing how those concepts combine into a prediction. Our goal is to move interpretability from describing what a model attends to towards explaining how it decides.",
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
      "We focus on how vision and multimodal models build and retain their representations, including continual and meta learning methods that keep them stable as the data shifts. Our goal is to give applied work at the Centre foundations that do not quietly degrade once deployed.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kamil-ksi%C4%85%C5%BCek-6a7098191/",
      googleScholar: "https://scholar.google.com/citations?user=i0N4lY8AAAAJ&hl=pl",
    },
  },
];
