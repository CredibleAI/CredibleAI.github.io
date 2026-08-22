import { Article } from "@/types/article";

export const icml2026CcaiSeoul: Article = {
  id: "icml-2026-ccai-seoul",
  title: "Two CCAI Papers Presented at ICML 2026 in Seoul",
  subtitle: "jul 11, 2026",
  description:
    "Hubert Baniecki, Bartłomiej Sobieski and Jakub Grzywaczewski from the Centre for Credible AI took part in the International Conference on Machine Learning (ICML 2026), held in Seoul, South Korea, where two papers co-authored at the Centre were presented.",
  heroImage: {
    src: "/images/news/icml-2026-1.jpg",
    alt: "Jakub Grzywaczewski and Bartłomiej Sobieski at their ICML 2026 poster in Seoul",
  },
  author: "CCAI Team",
  category: "Announcements",
  tags: ["ICML", "conference", "Seoul", "interpretability"],
  publishedDate: "2026-07-11",
  kind: "announcement",
  venue: "ICML 2026",
  content: [
    {
      id: "intro",
      type: "paragraph",
      text: "We are pleased to share that three members of the Centre for Credible AI, Hubert Baniecki, Bartłomiej Sobieski and Jakub Grzywaczewski, took part in the International Conference on Machine Learning (ICML 2026), held at the COEX convention centre in Seoul, South Korea, from July 6 to 11, 2026.",
    },
    {
      id: "context",
      type: "paragraph",
      text: "ICML is one of the leading international conferences in machine learning, bringing together researchers from academia and industry. Two papers co-authored at the Centre were presented during the poster sessions.",
    },
    {
      id: "sybil-heading",
      type: "heading",
      level: 2,
      text: "Auditing Sybil: Explaining Deep Lung Cancer Risk Prediction",
    },
    {
      id: "sybil-content",
      type: "paragraph",
      text: "Bartłomiej Sobieski and Jakub Grzywaczewski presented work on S(H)NAP, an auditing framework for Sybil, a deep learning model that predicts lung cancer risk from CT scans. The framework builds generative interventional attributions, using 3D diffusion bridge modeling to modify anatomical features and isolate the causal contribution of individual nodules to the risk score, with the results validated by expert radiologists. Sybil's decisions are decomposed into nodule main effects, pairwise interactions between nodules, and background.",
    },
    {
      id: "sybil-paper",
      type: "paragraph",
      text: "Paper: https://openreview.net/forum?id=6j88qckao7. We covered the preprint in February in [Auditing Lung Cancer Risk Prediction Models with Generative Explanations](/news/auditing-lung-cancer-risk-prediction-snap).",
    },
    {
      id: "survival-heading",
      type: "heading",
      level: 2,
      text: "Functional Decomposition and Shapley Interactions for Survival Models",
    },
    {
      id: "survival-content",
      type: "paragraph",
      text: "Hubert Baniecki co-authored a paper on interpreting machine learning survival models, together with Sophie Hanna Langbein, Fabian Fumagalli, Niklas Koenen, Marvin N. Wright and Julia Herbinger. Hazard and survival functions are natural targets in time-to-event prediction, but they are not additive, which limits standard additive explanation methods. The work introduces Survival Functional Decomposition (SurvFD), which separates higher-order effects into time-dependent and time-independent components, and SurvSHAP-IQ, which extends Shapley interactions to time-indexed functions.",
    },
    {
      id: "survival-paper",
      type: "paragraph",
      text: "Paper: https://openreview.net/forum?id=SldP4LGjdz",
    },
  ],
  gallery: [
    {
      id: "icml-2026-2",
      thumbnailSrc: "/images/news/icml-2026-2.jpg",
      fullSrc: "/images/news/icml-2026-2.jpg",
      alt: "The Auditing Sybil poster at ICML 2026",
    },
    {
      id: "icml-2026-3",
      thumbnailSrc: "/images/news/icml-2026-3.jpg",
      fullSrc: "/images/news/icml-2026-3.jpg",
      alt: "CCAI researchers at the ICML 2026 lettering in the COEX centre",
    },
    {
      id: "icml-2026-4",
      thumbnailSrc: "/images/news/icml-2026-4.jpg",
      fullSrc: "/images/news/icml-2026-4.jpg",
      alt: "CCAI researchers in the COEX centre during ICML 2026",
    },
    {
      id: "icml-2026-5",
      thumbnailSrc: "/images/news/icml-2026-5.jpg",
      fullSrc: "/images/news/icml-2026-5.jpg",
      alt: "CCAI researchers at the ICML 2026 photo wall in Seoul",
    },
  ],
};
