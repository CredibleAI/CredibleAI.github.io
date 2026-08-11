import { FocusLeader } from "@/types/team";

// The `focusDescription` texts below are placeholders written from each
// person's published work. They are to be replaced with copy supplied by the
// leaders themselves.
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
    focusArea: "Space and Earth Observation",
    focusDescription:
      "Bringing AI on board satellites, with work on hyperspectral Earth observation, objective selection of onboard applications, and estimation of soil and vegetation parameters from orbit.",
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
    tags: ["meta learning", "continual learning", "computer vision"],
    focusArea: "Biomedical AI",
    focusDescription:
      "Machine learning for biomedical data, including continual and meta learning approaches that keep models adaptable as clinical data shifts.",
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
    tags: ["interpretability", "medical imaging"],
    focusArea: "Generative Models",
    focusDescription:
      "Understanding and steering generative models, with an emphasis on interpretability methods that transfer to medical imaging.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/bartłomiej-sobieski/",
      googleScholar: "https://scholar.google.com/citations?user=ZDCPqL8AAAAJ&hl=en",
      twitter: "https://x.com/sobieskibj_bj",
      email: "b.sobieski@uw.edu.pl",
    },
  },
];
