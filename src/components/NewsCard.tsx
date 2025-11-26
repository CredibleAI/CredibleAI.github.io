import Image from "next/image";
import { NewsData } from "@/types/data";

interface NewsCardProps {
  news: NewsData;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <div className="flex gap-6 border-b border-[#a3a3a3] px-[120px] py-10">
      <div className="flex flex-1 flex-col gap-10 text-[#001f33]">
        <div className="flex flex-col gap-[19px] leading-[1.1]">
          <p className="font-mono text-lg font-normal uppercase">
            {news.subtitle}
          </p>
          <h3 className="font-sans text-[36px] font-normal leading-[1.1] tracking-[-0.72px]">
            {news.title}
          </h3>
        </div>
        <p className="font-sans text-lg font-normal leading-[1.4] tracking-[-0.18px]">
          {news.description}
        </p>
        {news.author && (
          <p className="font-mono text-sm font-normal text-[#001f33]">
            By {news.author}
          </p>
        )}
      </div>
      <div className="relative h-[332px] w-[589px] shrink-0">
        <Image
          src={news.imageUrl}
          alt={news.imageAlt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

