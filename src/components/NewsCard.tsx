import Image from "next/image";
import Link from "next/link";
import { NewsData } from "@/types/data";

interface NewsCardProps {
  news: NewsData;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <Link
      href={`/news/${news.id}`}
      className="flex flex-col md:flex-row gap-6 border-b border-[#a3a3a3] px-5 md:px-8 lg:px-[120px] py-10 hover:bg-gray-50 transition-colors group bg-white"
    >
      {/* Mobile: Image first, Desktop: Content first */}
      <div className="block md:hidden relative w-full aspect-[589/332]">
        <Image
          src={news.imageUrl}
          alt={news.imageAlt}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-6 md:gap-10 text-[#001f33]">
        <div className="flex flex-col gap-[10px] md:gap-[19px] leading-[1.1]">
          <p className="font-mono text-base md:text-lg font-normal uppercase tracking-[0.32px] md:tracking-[0.36px]">
            {news.subtitle}
          </p>
          <h3 className="font-sans text-[20px] md:text-[36px] font-normal leading-[1.2] md:leading-[1.1] tracking-[-0.2px] md:tracking-[-0.72px] group-hover:text-opacity-80 transition-colors">
            {news.title}
          </h3>
        </div>
        <p className="font-sans text-base md:text-lg font-normal leading-[1.6] md:leading-[1.4] tracking-[-0.16px] md:tracking-[-0.18px]">
          {news.description}
        </p>
        {news.author && (
          <p className="font-mono text-sm font-normal text-[#001f33] hidden md:block">
            By {news.author}
          </p>
        )}
        {/* Read Publication Tag */}
        <div className="bg-[#001f33] flex gap-[10px] items-center justify-center px-[7px] py-[3px] self-start">
          <p className="font-mono text-[14px] font-normal leading-[1.1] text-white uppercase">
            READ PUBLICATION
          </p>
          <div className="w-[10px] h-[10px]">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 9L9 1M9 1H1M9 1V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Desktop: Image on right */}
      <div className="hidden md:block relative h-[332px] w-full md:w-[400px] lg:w-[589px] shrink-0">
        <Image
          src={news.imageUrl}
          alt={news.imageAlt}
          fill
          className="object-cover"
        />
      </div>
    </Link>
  );
}

