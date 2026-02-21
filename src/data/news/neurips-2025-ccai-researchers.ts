import { Article } from "@/types/article";

export const neurips2025CcaiResearchers: Article = {
  id: "neurips-2025-ccai-researchers",
  title: "Two CCAI Researchers Presented Their Works at NeurIPS 2025 in San Diego",
  subtitle: "dec 7, 2025",
  description:
    "Bartłomiej Sobieski and Hubert Baniecki from the Centre for Credible AI presented their research at the Thirty-Ninth Annual Conference on Neural Information Processing Systems (NeurIPS 2025), held in San Diego, USA.",
  heroImage: {
    src: "/images/news/neurips1.jpeg",
    alt: "NeurIPS 2025 – CCAI researchers present at conference",
  },
  author: "CCAI Team",
  category: "Research",
  publishedDate: "2025-12-07",
  paperUrl: "https://openreview.net/forum?id=cipx3rwfWp",
  content: [
    {
      id: "intro",
      type: "paragraph",
      text: "We are pleased to share that two members of the Centre for Credible AI, Bartłomiej Sobieski and Hubert Baniecki, presented their research at the Thirty-Ninth Annual Conference on Neural Information Processing Systems (NeurIPS 2025), held in San Diego, USA, from December 2–7, 2025.",
    },
    {
      id: "neurips-context",
      type: "paragraph",
      text: "NeurIPS is one of the most influential international conferences in machine learning and artificial intelligence, bringing together researchers from academia and industry to present and discuss cutting-edge work. Both CCAI researchers presented their papers during poster sessions, contributing to discussions with the global research community.",
    },
    {
      id: "sobieski-heading",
      type: "heading",
      level: 2,
      text: "Bartłomiej Sobieski: System-Embedded Diffusion Bridge Models",
    },
    {
      id: "sobieski-content",
      type: "paragraph",
      text: "Bartłomiej Sobieski presented work on System-Embedded Diffusion Bridge Models, a method for solving inverse problems, where the goal is to recover signals from incomplete or noisy measurements. His research focuses on integrating knowledge of the measurement system directly into supervised diffusion bridge models by embedding the linear system into the coefficients of a matrix-valued stochastic differential equation. This approach improves performance across a range of linear inverse problems and shows strong robustness when the measurement system differs between training and real-world deployment.",
    },
    {
      id: "sobieski-paper",
      type: "paragraph",
      text: "Paper: https://openreview.net/forum?id=cipx3rwfWp",
    },
    {
      id: "baniecki-heading",
      type: "heading",
      level: 2,
      text: "Hubert Baniecki: Explaining Similarity in Vision-Language Encoders",
    },
    {
      id: "baniecki-content",
      type: "paragraph",
      text: "Hubert Baniecki presented a paper titled “Explaining Similarity in Vision-Language Encoders with Weighted Banzhaf Interactions.” His work addresses the challenge of explaining similarity scores produced by vision-language models trained with language-image pre-training. The proposed framework, FIxLIP, introduces second-order interaction explanations based on the weighted Banzhaf interaction index, enabling analysis of interactions between image regions and text tokens rather than only individual contributions. The method also extends standard evaluation metrics to interaction explanations and demonstrates improved explanatory power on benchmarks such as MS COCO and ImageNet-1k.",
    },
    {
      id: "baniecki-paper",
      type: "paragraph",
      text: "Paper: https://openreview.net/forum?id=on22Rx5A4F",
    },
  ],
  gallery: [
    {
      id: "neurips-2",
      thumbnailSrc: "/images/news/neurips-2.jpeg",
      fullSrc: "/images/news/neurips-2.jpeg",
      alt: "NeurIPS 2025 – CCAI researchers",
    },
  ],
};
