import { Article } from "@/types/article";

const BLOB_URL = process.env.NEXT_PUBLIC_BLOB_URL!;

export const grandOpeningCcai: Article = {
  id: "grand-opening-ccai",
  title: "Grand Opening of the Centre for Credible Artificial Intelligence",
  subtitle: "oct 7, 2025",
  description:
    "On 7 October 2025, the Centre for Credible Artificial Intelligence (CCAI) at the Warsaw University of Technology was officially inaugurated, gathering representatives of academia, industry, and public institutions.",
  heroImage: {
    src: `${BLOB_URL}/news/grand-opening-ccai/main.webp`,
    alt: "Grand Opening ceremony of the Centre for Credible Artificial Intelligence",
  },
  author: "CCAI Team",
  category: "Event",
  content: [
    {
      id: "intro",
      type: "paragraph",
      text: "On 7 October 2025, the Centre for Credible Artificial Intelligence (CCAI) at the Warsaw University of Technology was officially inaugurated. The opening ceremony gathered representatives of academia, industry, and public institutions, including strategic partners, friends of the University, and guests from Poland and abroad.",
    },
    {
      id: "keynotes-heading",
      type: "heading",
      level: 2,
      text: "Keynote Addresses",
    },
    {
      id: "keynotes-content",
      type: "paragraph",
      text: "The event featured keynote addresses delivered by distinguished speakers, including Prof. Krzysztof Pyrc (President of the Foundation for Polish Science), Prof. Mariusz Malinowski (Vice-Rector for Science at WUT), Prof. Wojciech Samek (representing the strategic partner Fraunhofer-Gesellschaft), and Prof. Przemysław Biecek, Director of CCAI.",
    },
    {
      id: "panel-heading",
      type: "heading",
      level: 2,
      text: "Panel Discussion",
    },
    {
      id: "panel-content",
      type: "paragraph",
      text: "The ceremony was followed by a panel discussion focusing on opportunities for innovation in credible, explainable, and controllable artificial intelligence from the perspective of academia, business, and public administration. Panelists included Borys Stokalski (President of the Polish Chamber of IT and Telecommunications), Prof. Zbigniew Brzózka (Head of the Department of Medical Biotechnology), and Pamela Krzypkowska (Director at the Ministry of Digital Affairs).",
    },
    {
      id: "closing-heading",
      type: "heading",
      level: 2,
      text: "A New Chapter Begins",
    },
    {
      id: "closing-content",
      type: "paragraph",
      text: "After the official programme, guests gathered at the new CCAI facilities for a symbolic cake cutting, followed by informal discussions and networking—opening a new chapter of collaboration between researchers, industry partners, and public institutions.",
    },
    {
      id: "conclusion",
      type: "quote",
      text: "Together, we aim to build a future in which artificial intelligence is credible, transparent, and truly trustworthy.",
    },
  ],
  gallery: [
    {
      id: "gallery-1",
      thumbnailSrc: `${BLOB_URL}/news/grand-opening-ccai/1.webp`,
      fullSrc: `${BLOB_URL}/news/grand-opening-ccai/1.webp`,
      alt: "Keynote speakers",
      caption: "Distinguished keynote speakers during their presentations",
    },
    {
      id: "gallery-2",
      thumbnailSrc: `${BLOB_URL}/news/grand-opening-ccai/2.webp`,
      fullSrc: `${BLOB_URL}/news/grand-opening-ccai/2.webp`,
      alt: "Panel discussion",
      caption: "Panel discussion on innovation in AI",
    },
    {
      id: "gallery-3",
      thumbnailSrc: `${BLOB_URL}/news/grand-opening-ccai/3.webp`,
      fullSrc: `${BLOB_URL}/news/grand-opening-ccai/3.webp`,
      alt: "Networking session",
      caption: "Informal discussions and networking at CCAI facilities",
    },
    {
      id: "gallery-4",
      thumbnailSrc: `${BLOB_URL}/news/grand-opening-ccai/4.webp`,
      fullSrc: `${BLOB_URL}/news/grand-opening-ccai/4.webp`,
      alt: "CCAI facilities",
      caption: "New CCAI facilities at Warsaw University of Technology",
    },
  ],
  publishedDate: "2025-10-07",
};
