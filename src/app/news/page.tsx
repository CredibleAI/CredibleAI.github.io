import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { news } from "@/data/news";

import { navigationItems } from "@/constants/navigation";

export default function NewsPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/news" />
      
      {/* Main Content */}
      <div className="pt-[64px] md:pt-[80px]">
        {/* News List */}
        <div className="flex flex-col items-center">
          {news.map((newsItem) => (
            <NewsCard key={newsItem.id} news={newsItem} />
          ))}
          
          {/* Load More Button */}
          <button 
            className="bg-[#001f33] border border-[#a3a3a3] px-4 py-3 flex gap-2 items-center justify-center my-8 md:my-12 hover:bg-[#003d5c] transition-colors"
          >
            <p className="font-mono text-[14px] font-normal leading-[1.1] text-white text-center">
              LOAD MORE
            </p>
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

