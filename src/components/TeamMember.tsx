import Image from "next/image";
import Link from "next/link";
import { TeamMember } from "@/types/team";

interface TeamMemberProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberProps) {
  return (
    <div className="flex flex-col gap-[17px] items-start w-full sm:w-[282px]">
      <div className="relative h-[226px] w-[204px]">
        <Image
          src={member.imageUrl}
          alt={member.imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 items-start text-[#001f33] w-full sm:w-[282px]">
        <p className="font-sans text-xl font-normal leading-[1.2] tracking-[-0.2px]">
          {member.name}
        </p>
      </div>
      <div className="flex gap-1 items-center flex-wrap">
        {member.tags.map((tag, index) => (
          <div
            key={index}
            className="bg-[#001f33] flex gap-[10px] items-center justify-center px-[5px] py-[3px]"
          >
            <p className="font-mono text-sm font-normal leading-[1.1] text-white uppercase">
              {tag}
            </p>
          </div>
        ))}
      </div>
      {member.socialLinks && (
        <div className="flex gap-3 items-center">
          {member.socialLinks.linkedin && (
            <Link
              href={member.socialLinks.linkedin}
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
          {member.socialLinks.googleScholar && (
            <Link
              href={member.socialLinks.googleScholar}
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
          {member.socialLinks.twitter && (
            <Link
              href={member.socialLinks.twitter}
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
          {member.socialLinks.email && (
            <Link
              href={`mailto:${member.socialLinks.email}`}
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
          {member.socialLinks.website && (
            <Link
              href={member.socialLinks.website}
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
  );
}

