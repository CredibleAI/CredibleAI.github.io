import { Article } from "@/types/article";

export const iclr2026CcaiHcaiCollaboration: Article = {
  id: "iclr-2026-ccai-hcai-collaboration",
  title: "CCAI Collaboration with HCAI Accepted to ICLR 2026 in Rio de Janeiro, Brazil",
  subtitle: "jan 2026",
  description:
    "A joint research collaboration between the Centre for Credible AI and the Human Centred AI Lab (HCAI) at the University of Technology Sydney has resulted in a paper accepted to ICLR 2026.",
  heroImage: {
    src: "/images/news/iclr.jpg",
    alt: "ICLR 2026 – CCAI and HCAI collaboration accepted",
  },
  author: "CCAI Team",
  category: "Research",
  publishedDate: "2026-01-01",
  paperUrl: "https://openreview.net/forum?id=FF14TqjU3e",
  content: [
    {
      id: "intro",
      type: "paragraph",
      text: "We are pleased to share that a joint research collaboration between the Centre for Credible AI and the Human Centred AI Lab (HCAI) at the University of Technology Sydney, led by Jianlong Zhou, has resulted in a paper accepted to ICLR 2026 – The Fourteenth International Conference on Learning Representations, which will take place in Rio de Janeiro, Brazil.",
    },
    {
      id: "problem",
      type: "paragraph",
      text: "The paper addresses a fundamental problem in the evaluation of attribution methods. Many widely used evaluation metrics rely on perturbation techniques, such as naive feature masking, which can produce out-of-distribution samples and distort model behavior, leading to unreliable conclusions about explanation quality.",
    },
    {
      id: "solution-heading",
      type: "heading",
      level: 2,
      text: "Proposed Evaluation Framework",
    },
    {
      id: "solution-intro",
      type: "paragraph",
      text: "To address this issue, the authors propose a new evaluation framework that:",
    },
    {
      id: "solution-list",
      type: "list",
      items: [
        "uses diffusion models to reconstruct masked regions so that evaluation samples remain in-distribution,",
        "ensures that reconstructed regions do not introduce new evidence affecting the model's prediction, and",
        "enforces hard constraints on features that must remain unchanged during evaluation.",
      ],
      ordered: false,
    },
    {
      id: "authors",
      type: "paragraph",
      text: "The work was co-authored by Bartłomiej Sobieski and Przemysław Biecek in collaboration with researchers from the HCAI team.",
    },
    {
      id: "paper-link",
      type: "paragraph",
      text: "The paper is available here: https://openreview.net/forum?id=FF14TqjU3e",
    },
  ],
};
