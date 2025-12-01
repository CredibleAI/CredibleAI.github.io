import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import ArticleBuilder from "@/components/ArticleBuilder";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { getArticleById } from "@/data/articles";

import { navigationItems } from "@/constants/navigation";

interface ProjectArticlePageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectArticlePage({
  params,
}: ProjectArticlePageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  const article = getArticleById(id);

  if (!project || !article) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/projects" />

      {/* Main Content */}
      <div className="pt-20">
        {/* Hero Section */}
        <Section className="py-20">
          <div className="flex flex-col gap-12 items-start max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-[19px] items-start leading-[1.1] text-[#001f33] w-full">
              <p className="font-mono text-lg font-normal uppercase">
                {article.subtitle}
              </p>
              <h1 className="font-sans text-[48px] font-normal leading-[1.1] tracking-[-0.96px]">
                {article.title}
              </h1>
              {article.description && (
                <p className="font-sans text-xl font-normal leading-[1.4] tracking-[-0.2px]">
                  {article.description}
                </p>
              )}
            </div>

            {/* Meta Information */}
            <div className="flex gap-4 items-center flex-wrap">
              {article.category && (
                <div className="bg-[#001f33] flex gap-[10px] items-center justify-center px-[5px] py-[3px]">
                  <p className="font-mono text-sm font-normal leading-[1.1] text-white">
                    {article.category}
                  </p>
                </div>
              )}
              {article.tags &&
                article.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-[#001f33] flex gap-[10px] items-center justify-center px-[5px] py-[3px]"
                  >
                    <p className="font-mono text-sm font-normal leading-[1.1] text-white">
                      {tag}
                    </p>
                  </div>
                ))}
              {article.author && (
                <p className="font-mono text-sm font-normal text-[#001f33]">
                  By {article.author}
                </p>
              )}
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-[500px]">
              <Image
                src={article.heroImage.src}
                alt={article.heroImage.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Section>

        {/* Article Content */}
        <Section className="pb-20">
          <div className="max-w-[800px] mx-auto">
            <ArticleBuilder blocks={article.content} />
          </div>
        </Section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

