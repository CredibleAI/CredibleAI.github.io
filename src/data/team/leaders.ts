import { TeamLeader } from "@/types/team";

export const leaders: TeamLeader[] = [
  {
    id: "przemyslaw-biecek",
    name: "Prof. Przemysław Biecek",
    title: "Director",
    imageUrl: "/images/team/biecek.webp",
    imageAlt: "Prof. Przemysław Biecek",
    tags: ["XAI", "LLM", "ANALYTICS"],
    description:
      "Prof. Przemysław Biecek is a model scientist specializing in interactive exploration and analysis of artificial intelligence. He leads research at the intersection of computational statistics and computer science, developing models and tools for model red-teaming, auditing, and validation-oriented eXplainable AI",
    teamName: "RED-XAI: Verification, exploration and control",
    teamDescription:
      "We focus on developing innovative methods and tools to improve the explainability, reliability, and controllability of multimodal AI systems. Our goal is to challenge the status quo in the formal analysis, exploration, and testing of foundation models that integrate diverse data types—including text, images, and structured data.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/pbiecek/",
      googleScholar: "https://scholar.google.pl/citations?user=Af0O75cAAAAJ&hl=en",
      twitter: "https://x.com/PrzeBiec",
      email: "mailto:przemyslaw.biecek@pw.edu.pl",
      website: "http://biecek.pl/",
    },
  },
  {
    id: "blue-xai-leader",
    name: "To be announced",
    title: "",
    imageUrl: "",
    imageAlt: "To be announced",
    tags: [],
    description: "More information about this team leader will be available soon.",
    teamName: "BLUE-XAI: Human-centered explainable AI",
    teamDescription:
      "We focus on assessing the trustworthiness and societal impact of large language models (LLMs) and other AI systems in human-facing applications. Our goal is to advance human-centered XAI by developing methods to evaluate user trust, define ethical requirements, and design interactions that foster transparency, accountability, and cognitive alignment between intelligent systems and their users.",
    isUnannounced: true,
  },
  {
    id: "bio-xai-leader",
    name: "To be announced",
    title: "",
    imageUrl: "",
    imageAlt: "To be announced",
    tags: [],
    description: "More information about this team leader will be available soon.",
    teamName: "BIO-XAI: Explainable AI for Life Sciences",
    teamDescription:
      "We focus on developing explainable AI methods tailored to the needs of life sciences, with particular emphasis on genomics and molecular modeling. Our goal is to unlock new scientific insights by combining structural genomics, generative AI, and explainable machine learning, enabling biologically grounded analysis of high-dimensional data.",
    isUnannounced: true,
  },
  {
    id: "phys-xai-leader",
    name: "To be announced",
    title: "",
    imageUrl: "",
    imageAlt: "To be announced",
    tags: [],
    description: "More information about this team leader will be available soon.",
    teamName: "PHYS-XAI: Physics-aligned explainable AI",
    teamDescription:
      "We focus on developing AI systems whose behavior is reliable, and consistent with known physical laws. Our goal is to advance physics-aligned XAI by creating methods that assess whether model predictions respect fundamental principles—such as symmetry constraints or system dynamics—ensuring that AI remains grounded in the structure of the real world, especially in scientific and engineering applications.",
    isUnannounced: true,
  },
];
