import Image from "next/image";
import Link from "next/link";
import { TeamMember } from "@/types/team";

interface AlumniListProps {
  members: TeamMember[];
}

type SocialKey = keyof NonNullable<TeamMember["socialLinks"]>;

/**
 * Same icon set and order as the team cards, so alumni contacts look the same
 * as everyone else's. ResearchGate reuses the website icon, matching
 * `TeamMember.tsx`.
 */
const SOCIAL_ICONS: {
  key: SocialKey;
  label: string;
  icon: string;
  mailto?: boolean;
}[] = [
  { key: "linkedin", label: "LinkedIn", icon: "/images/icons/linkedin-icon.svg" },
  { key: "googleScholar", label: "Google Scholar", icon: "/images/icons/google-scholar-icon.svg" },
  { key: "researchGate", label: "ResearchGate", icon: "/images/icons/website-icon.svg" },
  { key: "twitter", label: "Twitter", icon: "/images/icons/twitter-icon.svg" },
  { key: "email", label: "Email", icon: "/images/icons/email-icon.svg", mailto: true },
  { key: "website", label: "Website", icon: "/images/icons/website-icon.svg" },
];

/**
 * Alumni render as a compact multi-column list rather than photo cards. The
 * group only grows, portraits are not available for everyone, and a grid would
 * come to dominate the page. Columns keep it roughly a quarter the height of a
 * one-row-per-person list while staying scannable.
 */
export default function AlumniList({ members }: AlumniListProps) {
  return (
    <div className="w-full mt-[30px] columns-1 sm:columns-2 lg:columns-4 gap-x-10">
      {members.map((member) => (
        <div
          key={member.id}
          className="break-inside-avoid flex flex-col gap-1 py-2"
        >
          <p className="font-sans text-base font-normal leading-[1.3] tracking-[-0.16px] text-[#001f33]">
            {member.name}
          </p>

          {member.alumniNote && (
            <p className="font-mono text-xs font-normal leading-[1.2] text-[#001f33]/55">
              {member.alumniNote}
            </p>
          )}

          {member.socialLinks && (
            <div className="flex gap-2 items-center">
              {SOCIAL_ICONS.map(({ key, label, icon, mailto }) => {
                const value = member.socialLinks?.[key];
                if (!value || value.trim() === "") return null;
                return (
                  <Link
                    key={key}
                    href={mailto ? `mailto:${value}` : value}
                    {...(mailto
                      ? {}
                      : { target: "_blank", rel: "noopener noreferrer" })}
                    className="w-4 h-4 relative shrink-0"
                  >
                    <span className="sr-only">{label}</span>
                    <Image
                      src={icon}
                      alt={label}
                      fill
                      className="object-contain"
                    />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
