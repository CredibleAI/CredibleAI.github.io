import Image from "next/image";
import Link from "next/link";
import { TeamLeader } from "@/types/team";

interface TeamLeaderCardProps {
  leader: TeamLeader;
  showBorder?: boolean;
}

export default function TeamLeaderCard({ leader, showBorder = false }: TeamLeaderCardProps) {
  return (
    <div
      className={`flex flex-col gap-6 items-start w-full ${
        showBorder ? "border-t border-[#a3a3a3] pt-10 md:pt-[40px]" : ""
      }`}
    >
      {/* Person Info & Description combined on mobile */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start w-full">
        {/* Left Column - Person Info */}
        <div className="flex flex-col gap-[17px] items-start w-full md:w-[282px] shrink-0">
          <div className="relative h-[226px] w-[204px]">
            <Image
              src={leader.imageUrl}
              alt={leader.imageAlt}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 items-start text-[#001f33] w-full">
            <p className="font-sans text-xl font-normal leading-[1.2] tracking-[-0.2px]">
              {leader.name}
            </p>
            <p className="font-mono text-base font-normal leading-[1.1] tracking-[-0.64px]">
              {leader.title}
            </p>
          </div>
          <div className="flex gap-1 items-center flex-wrap">
            {leader.tags.map((tag) => (
              <div
                key={tag}
                className="bg-[#001f33] px-[5px] py-[3px] flex items-center justify-center"
              >
                <p className="font-mono text-sm font-normal leading-[1.1] text-white uppercase">
                  {tag}
                </p>
              </div>
            ))}
          </div>
        {leader.socialLinks && (
          <div className="flex gap-3 items-center">
            {leader.socialLinks.linkedin && leader.socialLinks.linkedin.trim() !== "" && (
              <Link
                href={leader.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 relative shrink-0"
              >
                <span className="sr-only">LinkedIn</span>
                <Image
                  src="/images/icons/linkedin-icon.svg"
                  alt="LinkedIn"
                  fill
                  className="object-contain"
                />
              </Link>
            )}
            {leader.socialLinks.googleScholar && leader.socialLinks.googleScholar.trim() !== "" && (
              <Link
                href={leader.socialLinks.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 relative shrink-0"
              >
                <span className="sr-only">Google Scholar</span>
                <Image
                  src="/images/icons/google-scholar-icon.svg"
                  alt="Google Scholar"
                  fill
                  className="object-contain"
                />
              </Link>
            )}
            {leader.socialLinks.twitter && leader.socialLinks.twitter.trim() !== "" && (
              <Link
                href={leader.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 relative shrink-0"
              >
                <span className="sr-only">Twitter</span>
                <Image
                  src="/images/icons/twitter-icon.svg"
                  alt="Twitter"
                  fill
                  className="object-contain"
                />
              </Link>
            )}
            {leader.socialLinks.email && leader.socialLinks.email.trim() !== "" && (
              <Link
                href={`mailto:${leader.socialLinks.email}`}
                className="w-6 h-6 relative shrink-0"
              >
                <span className="sr-only">Email</span>
                <Image
                  src="/images/icons/email-icon.svg"
                  alt="Email"
                  fill
                  className="object-contain"
                />
              </Link>
            )}
            {leader.socialLinks.website && leader.socialLinks.website.trim() !== "" && (
              <Link
                href={leader.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 relative shrink-0"
              >
                <span className="sr-only">Website</span>
                <Image
                  src="/images/icons/website-icon.svg"
                  alt="Website"
                  fill
                  className="object-contain"
                />
              </Link>
            )}
          </div>
        )}
        </div>

        {/* Right Column - Description and Team Info */}
        <div className="flex flex-1 flex-col gap-8 items-start">
          <div className="flex flex-col gap-[10px] items-start w-full">
            <p className="font-sans text-base font-normal leading-[1.6] tracking-[-0.16px] text-[#001f33]">
              {leader.description}
            </p>
          </div>
          <div className="flex flex-col gap-[10px] items-start w-full">
            <div className="flex flex-col gap-[10px] items-start w-full">
              <div className="bg-[#001f33] px-[5px] py-[3px] flex items-center justify-center shrink-0">
                <p className="font-mono text-sm font-normal leading-[1.1] text-white uppercase">
                  TEAM
                </p>
              </div>
              <p className="font-sans text-xl font-normal leading-[1.2] tracking-[-0.2px] text-[#001f33]">
                {leader.teamName}
              </p>
            </div>
            <p className="font-sans text-base font-normal leading-[1.6] tracking-[-0.16px] text-[#001f33]">
              {leader.teamDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
