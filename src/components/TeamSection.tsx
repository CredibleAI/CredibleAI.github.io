import TeamMemberCard from "./TeamMember";
import TeamLeaderCard from "./TeamLeaderCard";
import AlumniList from "./AlumniList";
import FocusLeaderCard from "./FocusLeaderCard";
import { TeamSection as TeamSectionType, TeamLeader, FocusLeader } from "@/types/team";

interface TeamSectionProps {
  section: TeamSectionType;
  isWrapped?: boolean;
  isLeaders?: boolean;
  isAlumni?: boolean;
  isFocusLeaders?: boolean;
}

export default function TeamSection({
  section,
  isWrapped = false,
  isLeaders = false,
  isAlumni = false,
  isFocusLeaders = false,
}: TeamSectionProps) {
  // Format section title for display
  const formatTitle = (title: string) => {
    if (title === "leaders") return "Team Leaders";
    if (title === "administration") return "Administration";
    if (title === "focus leaders") return "Focus Leaders";
    if (title === "collaborators") return "Collaborators";
    if (title === "alumni") return "Alumni";
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  return (
    <div className="flex flex-col gap-0 items-start w-full">
      <p className="font-sans text-[32px] md:text-[48px] font-normal leading-[1.2] md:leading-[1.1] tracking-[-0.32px] md:tracking-[-0.96px] text-[#001f33] w-full md:h-[53px] flex items-center">
        {formatTitle(section.title)}
      </p>
      {isAlumni ? (
        <AlumniList members={section.members} />
      ) : isLeaders ? (
        <div className="flex flex-col gap-[30px] items-center w-full mt-[30px]">
          {section.members.map((member, index) => (
            <TeamLeaderCard
              key={member.id}
              leader={member as TeamLeader}
              showBorder={index > 0}
            />
          ))}
        </div>
      ) : isFocusLeaders ? (
        <div className="flex flex-col gap-6 md:gap-8 items-start w-full mt-[30px]">
          {section.members.map((member, index) => (
            <FocusLeaderCard
              key={member.id}
              leader={member as unknown as FocusLeader}
              showBorder={index > 0}
            />
          ))}
        </div>
      ) : (
        <div
          className={`w-full mt-[30px] ${
            isWrapped
              ? "grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] max-lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-4 gap-x-10 gap-y-16"
              : "flex gap-6"
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
