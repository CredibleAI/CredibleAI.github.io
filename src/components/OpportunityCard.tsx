import Image from "next/image";
import Link from "next/link";
import { OpportunityData } from "@/types/data";

interface OpportunityCardProps {
  opportunity: OpportunityData;
}

export default function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const formatDeadline = (deadline?: string) => {
    if (!deadline) return null;
    try {
      const date = new Date(deadline);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return deadline;
    }
  };

  return (
    <Link
      href={`/opportunities/${opportunity.id}`}
      className="flex gap-6 border-b border-[#a3a3a3] px-[120px] py-10 hover:bg-gray-50 transition-colors group"
    >
      <div className="flex flex-1 flex-col gap-6 text-[#001f33]">
        <div className="flex flex-col gap-[19px] leading-[1.1]">
          <div className="flex gap-4 items-center flex-wrap">
            {opportunity.type && (
              <div className="bg-[#001f33] flex gap-[10px] items-center justify-center px-[5px] py-[3px]">
                <p className="font-mono text-sm font-normal leading-[1.1] text-white uppercase">
                  {opportunity.type}
                </p>
              </div>
            )}
            {opportunity.location && (
              <p className="font-mono text-sm font-normal text-[#001f33]">
                📍 {opportunity.location}
              </p>
            )}
            {opportunity.deadline && (
              <p className="font-mono text-sm font-normal text-[#001f33]">
                ⏰ Deadline: {formatDeadline(opportunity.deadline)}
              </p>
            )}
          </div>
          <h3 className="font-sans text-[36px] font-normal leading-[1.1] tracking-[-0.72px] group-hover:text-opacity-80 transition-colors">
            {opportunity.title}
          </h3>
        </div>
        <p className="font-sans text-lg font-normal leading-[1.4] tracking-[-0.18px]">
          {opportunity.description}
        </p>
        <div className="flex items-center gap-2 font-mono text-sm font-normal text-[#001f33]">
          <span>Learn more</span>
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>
      </div>
      <div className="relative h-[332px] w-[589px] shrink-0">
        <Image
          src={opportunity.imageUrl}
          alt={opportunity.imageAlt}
          fill
          className="object-cover"
        />
      </div>
    </Link>
  );
}

