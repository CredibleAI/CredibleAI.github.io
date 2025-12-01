import TeamMemberCard from "./TeamMember";
import TeamLeaderCard from "./TeamLeaderCard";
import { TeamSection as TeamSectionType, TeamLeader } from "@/types/team";

interface TeamSectionProps {
  section: TeamSectionType;
  isWrapped?: boolean;
  isLeaders?: boolean;
}

export default function TeamSection({ section, isWrapped = false, isLeaders = false }: TeamSectionProps) {
  // Format section title for display
  const formatTitle = (title: string) => {
    if (title === "leaders") return "Team Leaders";
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  return (
    <div className="flex flex-col gap-0 items-start w-full">
      <p className="font-sans text-2xl md:text-[48px] font-normal leading-[1.4] md:leading-[1.1] tracking-[-0.24px] md:tracking-[-0.96px] text-[#001f33] w-full md:h-[53px] flex items-center">
        {formatTitle(section.title)}
      </p>
      {isLeaders ? (
        <div className="flex flex-col gap-[30px] items-center w-full mt-[30px]">
          {section.members.map((member, index) => (
            <TeamLeaderCard
              key={member.id}
              leader={member as TeamLeader}
              showBorder={index > 0}
            />
          ))}
        </div>
      ) : (
        <div
          className={`flex items-center w-full mt-[30px] ${
            isWrapped
              ? "flex-wrap content-start gap-x-6 gap-y-[60px]"
              : "gap-6"
          }`}
        >
          {section.members.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      )}
    </div>
  );
}

