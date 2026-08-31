import { FocusLeader } from "@/types/team";

// The `focusArea` names are the ones the Centre settled on. The
// `focusDescription` texts are still drafts written from each person's
// published work, to be replaced with copy supplied by the leaders themselves.
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
      "Bringing AI on board satellites, with work on hyperspectral Earth observation, objective selection of onboard applications, and estimation of soil and vegetation parameters from orbit.",
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
      "Explaining what vision models respond to by generating interventions rather than reading off correlations, with diffusion-based methods that carry over to medical imaging.",
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
      "Taking vision-language models apart at the level of their internal representations, to recover the concepts they encode and trace how those concepts drive a prediction.",
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
      "How vision and multimodal models learn and keep learning, including continual and meta learning approaches that hold representations together as the data shifts.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kamil-ksi%C4%85%C5%BCek-6a7098191/",
      googleScholar: "https://scholar.google.com/citations?user=i0N4lY8AAAAJ&hl=pl",
    },
  },
];
