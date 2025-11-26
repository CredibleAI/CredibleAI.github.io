// Article content block types
export type ArticleBlockType =
  | "heading"
  | "paragraph"
  | "image"
  | "list"
  | "quote"
  | "code"
  | "divider";

// Base block interface
export interface BaseArticleBlock {
  id: string;
  type: ArticleBlockType;
}

// Heading block
export interface HeadingBlock extends BaseArticleBlock {
  type: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
}

// Paragraph block
export interface ParagraphBlock extends BaseArticleBlock {
  type: "paragraph";
  text: string;
}

// Image block
export interface ImageBlock extends BaseArticleBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

// List block
export interface ListBlock extends BaseArticleBlock {
  type: "list";
  items: string[];
  ordered?: boolean;
}

// Quote block
export interface QuoteBlock extends BaseArticleBlock {
  type: "quote";
  text: string;
  author?: string;
}

// Code block
export interface CodeBlock extends BaseArticleBlock {
  type: "code";
  code: string;
  language?: string;
}

// Divider block
export interface DividerBlock extends BaseArticleBlock {
  type: "divider";
}

// Union type for all blocks
export type ArticleBlock =
  | HeadingBlock
  | ParagraphBlock
  | ImageBlock
  | ListBlock
  | QuoteBlock
  | CodeBlock
  | DividerBlock;

// Full article structure
export interface Article {
  id: string;
  title: string;
  subtitle: string; // Date
  description: string;
  heroImage: {
    src: string;
    alt: string;
  };
  author?: string;
  category?: string;
  tags?: string[];
  content: ArticleBlock[];
  publishedDate?: string;
  updatedDate?: string;
}

