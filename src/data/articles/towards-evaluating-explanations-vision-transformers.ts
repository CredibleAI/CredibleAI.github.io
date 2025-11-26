import { Article } from "@/types/article";

export const towardsEvaluatingExplanationsVisionTransformersArticle: Article = {
  id: "towards-evaluating-explanations-vision-transformers",
  title: "Towards Evaluating Explanations of Vision Transformers for Medical Imaging",
  subtitle: "sep 30, 2025",
  description:
    "A comprehensive study on evaluating explanation methods for Vision Transformers in medical imaging applications, focusing on interpretability and trustworthiness.",
  heroImage: {
    src: "/images/project-1.jpg",
    alt: "Medical imaging research",
  },
  author: "CCAI Research Team",
  category: "Medical AI",
  tags: ["XAI", "Vision Transformers", "Medical Imaging"],
  content: [
    {
      id: "intro-heading",
      type: "heading",
      level: 2,
      text: "Introduction",
    },
    {
      id: "intro-para-1",
      type: "paragraph",
      text: "Vision Transformers (ViTs) have shown remarkable performance in medical imaging tasks, but their black-box nature raises concerns about interpretability and trustworthiness. This research addresses the critical need for evaluating explanation methods specifically designed for Vision Transformers in medical applications.",
    },
    {
      id: "intro-para-2",
      type: "paragraph",
      text: "Our work focuses on developing comprehensive evaluation frameworks that assess the quality, faithfulness, and clinical relevance of explanations generated for Vision Transformer models used in medical diagnosis and treatment planning.",
    },
    {
      id: "methodology-heading",
      type: "heading",
      level: 2,
      text: "Methodology",
    },
    {
      id: "methodology-para",
      type: "paragraph",
      text: "We conducted extensive experiments comparing various explanation methods including attention-based approaches, gradient-based methods, and perturbation-based techniques. Our evaluation framework considers multiple dimensions:",
    },
    {
      id: "methodology-list",
      type: "list",
      items: [
        "Faithfulness to the model's decision process",
        "Clinical relevance and interpretability by medical professionals",
        "Robustness across different medical imaging modalities",
        "Computational efficiency for real-time applications",
      ],
    },
    {
      id: "results-heading",
      type: "heading",
      level: 2,
      text: "Results",
    },
    {
      id: "results-para",
      type: "paragraph",
      text: "Our findings reveal significant differences in explanation quality across methods. Attention-based explanations showed high clinical relevance but lower faithfulness scores, while gradient-based methods demonstrated better faithfulness but required additional processing for clinical interpretation.",
    },
    {
      id: "results-image",
      type: "image",
      src: "/images/project-1.jpg",
      alt: "Evaluation results visualization",
      caption: "Comparison of explanation methods across different evaluation metrics",
    },
    {
      id: "conclusion-heading",
      type: "heading",
      level: 2,
      text: "Conclusion",
    },
    {
      id: "conclusion-para",
      type: "paragraph",
      text: "This research provides a foundation for evaluating explanation methods in medical AI applications. Our framework enables researchers and practitioners to select appropriate explanation methods based on their specific requirements for faithfulness, interpretability, and clinical utility.",
    },
    {
      id: "quote",
      type: "quote",
      text: "Understanding how AI models make decisions is crucial for building trust in medical applications. Our evaluation framework helps bridge the gap between technical explanations and clinical understanding.",
      author: "Research Team Lead",
    },
  ],
};

