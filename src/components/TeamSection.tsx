import TeamMemberCard from "./TeamMember";
import { TeamSection as TeamSectionType } from "@/types/team";

interface TeamSectionProps {
  section: TeamSectionType;
  isWrapped?: boolean;
}

export default function TeamSection({ section, isWrapped = false }: TeamSectionProps) {
  return (
    <div className="flex flex-col gap-[30px] items-start w-full">
      <p className="font-mono text-lg font-normal leading-[1.1] text-[#001f33] uppercase w-full">
        {section.title}
      </p>
      <div
        className={`flex items-center w-full ${
          isWrapped
            ? "flex-wrap content-center gap-x-6 gap-y-[60px]"
            : "gap-6"
        }`}
      >
        {section.members.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}

