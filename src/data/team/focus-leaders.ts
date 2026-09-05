import { FocusLeader } from "@/types/team";

// The `focusArea` names are the ones the Centre settled on.
//
// Each `focusDescription` is the leader's own copy, trimmed only for length,
// which is what keeps the grid cells even.
//
// `tags` are the leader's own keywords and describe the whole research profile,
// not the focus area alone, so a keyword may echo the wording of `focusArea`.
//
// Two words carry a non-breaking hyphen (U+2011) so they are not split across
// lines. They look like ordinary hyphens and are easy to lose in an edit.
//
// A newline in `focusArea` holds it at two lines, which is what lets the 7th
// description line land on the bottom edge of the portrait.
export const focusLeaders: FocusLeader[] = [
  {
    id: "agata-wijata",
    name: "Dr. Agata M. Wijata",
    imageUrl: "/images/team/agata-wijata.png",
    imageAlt: "Dr. Agata M. Wijata",
    tags: ["earth observation", "satellite imagery", "hyperspectral data", "spatial analytics", "remote sensing", "onboard autonomy"],
    focusArea: "Earth Observation\nand Space AI",
    focusDescription:
      "Developing trustworthy and transferable AI solutions for Earth observation, hyperspectral imaging, and multi-sensor spatial data analysis. Focusing on satellite remote sensing, environmental monitoring, and robust multimodal computer vision models for real‑world impact.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/agata-wijata-17766594",
      googleScholar: "https://scholar.google.com/citations?user=xweuhWMAAAAJ&hl=pl",
      email: "agata.wijata@pw.edu.pl",
    },
  },
  {
    id: "kamil-ksiazek",
    name: "Dr. Kamil Książek",
    imageUrl: "/images/team/ksiazek.webp",
    imageAlt: "Dr. Kamil Książek",
    tags: ["vision foundation models", "medical data", "multimodal systems", "object detection", "model pruning", "digital biomarkers"],
    focusArea: "Foundations of Vision\nand Multimodal Models",
    focusDescription:
      "Making complex vision foundation models explainable. Transforming multimodal medical data across video, time series and tabular data into tools supporting clinical decisions. Leveraging object detection, pose estimation, and emotion recognition for deep behavioral and physical analysis.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kamil-ksi%C4%85%C5%BCek-6a7098191/",
      googleScholar: "https://scholar.google.com/citations?user=i0N4lY8AAAAJ&hl=pl",
      email: "kamil.ksiazek@pw.edu.pl",
    },
  },
  {
    id: "bartek-sobieski",
    name: "Bartek Sobieski",
    imageUrl: "/images/team/sobieski.webp",
    imageAlt: "Bartek Sobieski",
    tags: ["diffusion models", "synthetic data", "attributions", "causal audits", "medical imaging", "counterfactual explanations"],
    focusArea: "Generative Interpretability\nof Vision Models",
    focusDescription:
      "Approximate sampling from the true data distribution paves new ways for explaining complex black-box behaviors using synthetic in-distribution samples. Combining the recent advances in generative modeling with domain expertise allows for specialized, causal audits that reveal previously inaccessible insights.",
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
    tags: ["mechanistic interpretability", "representation learning", "concept-based explanations", "vision-language foundation models"],
    focusArea: "Mechanistic Interpretability\nof Vision-Language Models",
    focusDescription:
      "Uncovering hidden knowledge and decision‑making within deep learning models through concept-based explanations. Identifying human‑understandable concepts in internal representations reveals how vision-language foundation models learn and reason, keeping them aligned and safe.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/vladimirzaigrajew/",
      googleScholar: "https://scholar.google.com/citations?user=7XKIBvgAAAAJ&hl=en",
      email: "vladimir.zaigrajew.dokt@pw.edu.pl",
    },
  },
];
