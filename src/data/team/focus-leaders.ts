import { FocusLeader } from "@/types/team";

// The `focusArea` names are the ones the Centre settled on.
//
// WARNING: every `focusDescription` below is lorem ipsum placeholder text and
// must not be deployed. Replace each one with copy from the leader, keeping
// the two-sentence shape used by `teamDescription` in leaders.ts and roughly
// the present length, which is what keeps the grid cells even.
//
// Keep `tags` free of the term already used as `focusArea`, so the keywords
// add information rather than repeating the focus.
export const focusLeaders: FocusLeader[] = [
  {
    id: "agata-wijata",
    name: "Dr. Agata Wijata",
    imageUrl: "/images/team/agata-wijata.png",
    imageAlt: "Dr. Agata Wijata",
    tags: ["earth observation", "satellite imagery", "hyperspectral data", "spatial analytics", "remote sensing"],
    focusArea: "Earth Observation & Space AI",
    focusDescription:
      "Developing trustworthy and transferable AI solutions for Earth observation, hyperspectral imaging, and multi-sensor spatial data analysis. Focusing on satellite remote sensing, environmental monitoring, and robust multimodal computer vision models for real-world impact.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/agata-wijata-17766594",
      googleScholar: "https://scholar.google.com/citations?user=xweuhWMAAAAJ&hl=pl",
    },
  },
  {
    id: "kamil-ksiazek",
    name: "Dr. Kamil Książek",
    imageUrl: "/images/team/ksiazek.webp",
    imageAlt: "Dr. Kamil Książek",
    tags: ["vision foundation models", "medical data", "multimodal systems", "object detection"],
    focusArea: "Foundations of Vision & Multimodal Models",
    focusDescription:
      "Making complex vision foundation models explainable and transparent. Transforming multimodal medical data across video, time series and tabular data into robust tools supporting clinical decisions. Leveraging object detection, pose estimation, and emotion recognition for deep behavioral and physical analysis.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kamil-ksi%C4%85%C5%BCek-6a7098191/",
      googleScholar: "https://scholar.google.com/citations?user=i0N4lY8AAAAJ&hl=pl",
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
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
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
      "Cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident. Sunt in culpa qui officia deserunt mollit anim id est.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/vladimirzaigrajew/",
      googleScholar: "https://scholar.google.com/citations?user=7XKIBvgAAAAJ&hl=en",
      email: "vladimir.zaigrajew.dokt@pw.edu.pl",
    },
  },
];
