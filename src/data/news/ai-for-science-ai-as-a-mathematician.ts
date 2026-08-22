import { Article } from "@/types/article";

export const aiForScienceAiAsAMathematician: Article = {
  id: "ai-for-science-ai-as-a-mathematician",
  title: "AI for Science: AI as a Mathematician",
  subtitle: "may 22, 2026",
  description:
    "Przemek Chojecki and Bartosz Naskręcki led an AI for Science session at the Centre on formal proofs, proof assistants, and the role of AI systems in mathematical practice.",
  heroImage: {
    src: "/images/news/ai-for-science-poster.jpg",
    alt: "AI for Science poster: AI as a Mathematician, 22 May, Rektorska 4, with Przemek Chojecki and Bartosz Naskręcki",
  },
  author: "CCAI Team",
  category: "Announcements",
  tags: [
    "AI for Science",
    "mathematics",
    "formal methods",
    "proof assistants",
    "Lean",
  ],
  publishedDate: "2026-05-22",
  kind: "announcement",
  content: [
    {
      id: "intro",
      type: "paragraph",
      text: "On 22 May 2026, the Centre for Credible AI hosted AI as a Mathematician, a session in the AI for Science series, at Rektorska 4 in Warsaw. The session was led by Przemek Chojecki of ulam.ai and Bartosz Naskręcki of Adam Mickiewicz University in Poznań and the Centre for Credible AI.",
    },
    {
      id: "proof-heading",
      type: "heading",
      level: 2,
      text: "What Is a Mathematical Proof?",
    },
    {
      id: "proof-content",
      type: "paragraph",
      text: "The first part of the session traced how mathematics arrived at the modern notion of a formal proof, a typed term whose type matches the theorem statement and whose every step is checked by a kernel. Euclid's proof of the infinitude of primes served as the worked example, and the history was divided into three eras of formality.",
    },
    {
      id: "proof-eras",
      type: "list",
      items: [
        "Before 1900, a proof is a convincing chain of reasoning, evaluated by the community.",
        "From 1900 to 2000, Hilbert's program, Gödel, Church, and AUTOMATH (de Bruijn, 1968).",
        "From 2000 onwards, interactive proof assistants such as Coq, Isabelle, and Lean 4 with Mathlib.",
      ],
      ordered: false,
    },
    {
      id: "workflows-heading",
      type: "heading",
      level: 2,
      text: "Mathematics, AI and Formal Proof Workflows",
    },
    {
      id: "workflows-content",
      type: "paragraph",
      text: "The second part looked at how machine learning, formal proof systems and frontier reasoning are converging on the same problem, with Stanford's 2026 symposium framing AI and formal methods as twin revolutions reshaping mathematical practice. The speakers closed with a case study of a hybrid human and machine workflow, in which 36 of 36 paper primitives were sealed across 134 git commits, with six tools cooperating and one person responsible for scope and sign-off.",
    },
    {
      id: "questions-heading",
      type: "heading",
      level: 2,
      text: "Questions from the Discussion",
    },
    {
      id: "questions-intro",
      type: "paragraph",
      text: "Most of the session was given over to discussion. Recurring questions included:",
    },
    {
      id: "questions-list",
      type: "list",
      items: [
        "Will mathematicians focus mainly on proposing hypotheses and conjectures, with verification delegated to AI systems?",
        "If an AI-generated proof is formally correct, does understanding it still matter?",
        "Will the role of the mathematician shift from constructing proofs towards interpreting and validating reasoning produced by AI?",
        "Can AI models generate genuinely new mathematical theories?",
        "What is mathematics in the era of advanced AI systems, and do proofs that remain inaccessible to human comprehension provide limited scientific value?",
      ],
      ordered: false,
    },
    {
      id: "closing",
      type: "paragraph",
      text: "Our thanks to Przemek Chojecki and Bartosz Naskręcki for leading the session, and to everyone who took part in the discussion. The next AI for Science meeting is in preparation.",
    },
  ],
  gallery: [
    {
      id: "ai-for-science-1",
      thumbnailSrc: "/images/news/ai-for-science-1.jpg",
      fullSrc: "/images/news/ai-for-science-1.jpg",
      alt: "Przemek Chojecki presenting to the audience at the AI for Science session",
    },
    {
      id: "ai-for-science-2",
      thumbnailSrc: "/images/news/ai-for-science-2.jpg",
      fullSrc: "/images/news/ai-for-science-2.jpg",
      alt: "Bartosz Naskręcki speaking on what counts as a mathematical proof",
    },
    {
      id: "ai-for-science-3",
      thumbnailSrc: "/images/news/ai-for-science-3.jpg",
      fullSrc: "/images/news/ai-for-science-3.jpg",
      alt: "Przemek Chojecki at the whiteboard during the AI for Science session",
    },
    {
      id: "ai-for-science-4",
      thumbnailSrc: "/images/news/ai-for-science-4.jpg",
      fullSrc: "/images/news/ai-for-science-4.jpg",
      alt: "The seminar room at Rektorska 4 during the AI for Science session",
    },
  ],
};
