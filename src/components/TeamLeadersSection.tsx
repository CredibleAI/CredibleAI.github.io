import Image from "next/image";
import { TeamLeader } from "@/types/team";
import Button from "./Button";
import TeamLeaderCard from "./TeamLeaderCard";

interface TeamLeadersSectionProps {
  leaders: TeamLeader[];
}

export default function TeamLeadersSection({
  leaders,
}: TeamLeadersSectionProps) {
  return (
    <div className="flex flex-col gap-[80px] items-start w-full">
      <div className="flex flex-col gap-[10px] items-start leading-[1.1] pl-0 pr-0 md:pr-[204px] w-full">
        <p className="font-mono text-base font-normal tracking-[0.32px] uppercase text-[#001f33]">
          our team
        </p>
        <p className="font-sans text-[36px] md:text-[48px] font-normal leading-[1.1] tracking-[-0.72px] md:tracking-[-0.96px] text-[#001f33]">
          An interdisciplinary group of researchers
        </p>
      </div>
      <div className="flex flex-col gap-[30px] items-center w-full">
        {leaders.map((leader, index) => (
          <TeamLeaderCard
            key={leader.id}
            leader={leader}
            showBorder={index > 0}
          />
        ))}
        <Button href="/about" variant="primary" className="px-8 py-5 text-base tracking-[0.32px] uppercase">
          see full team
          <Image
            src="/images/icons/arrow-icon.svg"
            alt=""
            width={10}
            height={10}
            className="shrink-0"
          />
        </Button>
      </div>
    </div>
  );
}

