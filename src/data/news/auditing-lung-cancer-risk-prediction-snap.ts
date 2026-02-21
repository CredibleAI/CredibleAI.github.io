import { Article } from "@/types/article";

export const auditingLungCancerRiskPredictionSnap: Article = {
  id: "auditing-lung-cancer-risk-prediction-snap",
  title: "Auditing Lung Cancer Risk Prediction Models with Generative Explanations",
  subtitle: "feb 2026",
  description:
    "CCAI researchers Bartłomiej Sobieski and Jakub Grzywaczewski co-authored work on S(H)NAP, an explanation framework for lung cancer risk prediction that uses generative interventional attributions to move from correlation toward causal verification.",
  heroImage: {
    src: "/images/news/lung-1.jpeg",
    alt: "Auditing lung cancer risk prediction with S(H)NAP",
  },
  author: "CCAI Team",
  category: "Research",
  publishedDate: "2026-02-01",
  paperUrl: "https://arxiv.org/abs/2602.02560",
  content: [
    {
      id: "intro",
      type: "paragraph",
      text: "At the Centre for Credible AI, we develop methods in explainable artificial intelligence (XAI) that support both model auditing and scientific discovery, with the long-term goal of improving the safety and reliability of AI systems in high-stakes domains such as medicine.",
    },
    {
      id: "share",
      type: "paragraph",
      text: "We are pleased to share research on the interpretability and reliability of deep learning models for lung cancer risk prediction, co-authored by two researchers from our Centre, Bartłomiej Sobieski and Jakub Grzywaczewski.",
    },
    {
      id: "context",
      type: "paragraph",
      text: "Lung cancer is the leading cause of cancer-related death worldwide, driving the development of automated screening tools such as Sybil, created by Regina Barzilay's group at the MIT Jameel Clinic to predict lung cancer risk from imaging data.",
    },
    {
      id: "risks",
      type: "paragraph",
      text: "Despite strong performance, deploying such models carries serious risks: missing high-risk patients is unacceptable, reliance on clinically irrelevant cues must be avoided, and correlation-based validation does not explain how predictions are made.",
    },
    {
      id: "snap-heading",
      type: "heading",
      level: 2,
      text: "S(H)NAP: An Explanation Framework for Lung Cancer Risk",
    },
    {
      id: "snap-content",
      type: "paragraph",
      text: "This work introduces S(H)NAP, an explanation framework tailored to lung cancer risk prediction. It uses generative interventional attributions—combining diffusion bridge modeling, game-theoretic explainability, and medical expertise—to move from correlation toward causal verification of model behavior.",
    },
    {
      id: "results",
      type: "paragraph",
      text: "Results show the model often aligns with radiologists in distinguishing malignant from benign nodules, but also reveal critical failure modes, including sensitivity to artifacts and radial bias. The study underscores the need for rigorous, domain-specific auditing of clinical AI systems, as general-purpose explanation methods may miss important risks.",
    },
    {
      id: "team",
      type: "paragraph",
      text: "The work was carried out by a multidisciplinary team including Jakub Grzywaczewski, Bartłomiej Sobieski, Karol Dobiczek, Mateusz Wójcik, Tomasz Bartczak, Patryk Szatkowski, Przemysław Bombiński, Matthew Tivnan, and Przemysław Biecek.",
    },
    {
      id: "paper-link",
      type: "paragraph",
      text: "The paper is available here: https://arxiv.org/abs/2602.02560",
    },
  ],
  gallery: [
    {
      id: "snap-2",
      thumbnailSrc: "/images/news/lung-2.png",
      fullSrc: "/images/news/lung-2.png",
      alt: "S(H)NAP lung cancer risk prediction research",
    },
  ],
};
