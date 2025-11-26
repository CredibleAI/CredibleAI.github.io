import Image from "next/image";
import { TeamMember } from "@/types/team";

interface TeamMemberProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberProps) {
  return (
    <div className="flex flex-col gap-[17px] items-start w-[282px]">
      <div className="aspect-[354/392.21484375] relative w-full">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#74bbc4] inset-0" />
          <Image
            src={member.imageUrl}
            alt={member.imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <p className="font-sans text-[20px] font-normal leading-[1.4] tracking-[-0.2px] text-[#001f33]">
        {member.name}
      </p>
      <div className="flex gap-[9px] items-center flex-wrap">
        {member.tags.map((tag, index) => (
          <div
            key={index}
            className="bg-[#001f33] flex gap-[10px] items-center justify-center px-[5px] py-[3px]"
          >
            <p className="font-mono text-sm font-normal leading-[1.1] text-white">
              {tag}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

