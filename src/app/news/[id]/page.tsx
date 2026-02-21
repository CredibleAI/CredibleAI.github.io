import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleBuilder from "@/components/ArticleBuilder";
import Gallery from "@/components/Gallery";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsById, news } from "@/data/news";
import { navigationItems } from "@/constants/navigation";

export async function generateStaticParams() {
  return news.map((article) => ({
    id: article.id,
  }));
}

interface NewsArticlePageProps {
  params: Promise<{ id: string }>;
}

export default async function NewsArticlePage({
  params,
}: NewsArticlePageProps) {
  const { id } = await params;
  const article = getNewsById(id);

  if (!article) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/news" />

      {/* Main Content */}
      <div className="pt-[64px]">
        {/* Back Button - Top */}
        <div className="px-5 md:px-8 md:px-16 lg:px-[120px] py-6">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 font-mono text-sm font-normal text-[#001f33] uppercase hover:opacity-80 transition-opacity"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="rotate-180"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to News
          </Link>
        </div>

        {/* Mobile: Article Card */}
        <div className="md:hidden border-b border-[#a3a3a3] bg-white">
          <div className="flex flex-col gap-8 px-5 py-10">
            {/* Hero Image */}
            <div className="relative w-full aspect-[335/189]">
              <Image
                src={article.heroImage.src}
                alt={article.heroImage.alt}
                fill
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3">
              {/* Header */}
              <div className="flex flex-col gap-[10px] text-[#001f33]">
                <p className="font-mono text-base font-normal leading-[1.1] tracking-[0.32px] uppercase">
                  {article.subtitle}
                </p>
                <h1 className="font-sans text-xl font-normal leading-[1.2] tracking-[-0.2px]">
                  {article.title}
                </h1>
              </div>

              {/* Description */}
              {article.description && (
                <p className="font-sans text-base font-normal leading-[1.6] tracking-[-0.16px] text-[#001f33]">
                  {article.description}
                </p>
              )}

              {/* Read Publication Button */}
              {article.paperUrl ? (
                <a
                  href={article.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#001f33] flex gap-[10px] items-center justify-center w-fit pl-[5px] pr-[7px] py-[3px] hover:bg-opacity-90 transition-colors"
                >
                  <p className="font-mono text-sm font-normal leading-[1.1] text-white uppercase">
                    read publication
                  </p>
                  <Image
                    src="/images/icons/arrow-icon.svg"
                    alt=""
                    width={10}
                    height={10}
                    className="shrink-0"
                  />
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* Desktop: Header Section - Image above text on md/lg, side-by-side on xl */}
        <div className="hidden md:block border-b border-[#a3a3a3] px-5 lg:px-[120px] py-10">
          <div className="flex flex-col-reverse xl:flex-row gap-6 items-start max-w-[1440px] mx-auto">
            <div className="flex flex-col gap-[22px] items-start w-full xl:w-[588px]">
              <div className="flex flex-col gap-[10px] items-start leading-[1.1] text-[#001f33] w-full">
                <p className="font-mono text-base font-normal tracking-[0.32px] uppercase">
                  {article.subtitle}
                </p>
                <h1 className="font-sans text-2xl md:text-3xl lg:text-[36px] font-normal leading-[1.1] tracking-[-0.72px]">
                  {article.title}
                </h1>
              </div>
              {article.description && (
                <p className="font-sans text-lg font-normal leading-[1.6] text-[#001f33]">
                  {article.description}
                </p>
              )}
              {/* Read Publication Button */}
              {article.paperUrl ? (
                <a
                  href={article.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#001f33] flex gap-[10px] items-center justify-center pl-[5px] pr-[7px] py-[3px] hover:bg-opacity-90 transition-colors"
                >
                  <p className="font-mono text-base font-normal leading-[1.1] text-white tracking-[0.32px] uppercase">
                    read publication
                  </p>
                  <Image
                    src="/images/icons/arrow-icon.svg"
                    alt=""
                    width={10}
                    height={10}
                    className="shrink-0"
                  />
                </a>
              ) : null}
            </div>
            {/* Hero Image */}
            <div className="relative w-full xl:w-[589px] shrink-0 aspect-[16/9] xl:aspect-auto xl:h-[332px]">
              <Image
                src={article.heroImage.src}
                alt={article.heroImage.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="flex flex-col gap-12 items-center px-5 md:px-8 md:px-16 lg:px-[120px] py-8 md:py-20">
          <div className="max-w-[996px] w-full">
            <ArticleBuilder blocks={article.content} />
            
            {/* Gallery */}
            {article.gallery && article.gallery.length > 0 && (
              <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-[#a3a3a3]">
                <Gallery images={article.gallery} title="Photo Gallery" />
              </div>
            )}
          </div>
        </div>

        {/* Back Button - Bottom */}
        <div className="px-5 md:px-8 md:px-16 lg:px-[120px] py-6 border-t border-[#a3a3a3]">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 font-mono text-sm font-normal text-[#001f33] uppercase hover:opacity-80 transition-opacity"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="rotate-180"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to News
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
