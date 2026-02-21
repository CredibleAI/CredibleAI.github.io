"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { news } from "@/data/news";
import { navigationItems } from "@/constants/navigation";

const ITEMS_PER_PAGE = 5;

export default function NewsPage() {
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);

  const displayedNews = news.slice(0, displayCount);
  const hasMoreNews = displayCount < news.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + ITEMS_PER_PAGE, news.length));
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/news" />
      
      {/* Main Content */}
      <div className="pt-[64px] md:pt-[80px] min-h-[calc(100vh-200px)]">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-[120px]">
          <div className="flex flex-col items-center">
            {displayedNews.map((newsItem) => (
              <NewsCard key={newsItem.id} news={newsItem} />
            ))}
            {hasMoreNews && (
              <button
                onClick={handleLoadMore}
                className="bg-[#001f33] px-4 py-3 flex gap-2 items-center justify-center my-8 md:my-12 hover:bg-[#003355] transition-colors"
              >
                <p className="font-mono text-[14px] font-normal leading-[1.1] text-white text-center">
                  LOAD MORE
                </p>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
