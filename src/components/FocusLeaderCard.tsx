"use client";

import Image from "next/image";
import Link from "next/link";
import { FocusLeader } from "@/types/team";
import { useState } from "react";

interface FocusLeaderCardProps {
  leader: FocusLeader;
  showBorder?: boolean;
}

const SOCIAL_ICONS: {
  key: keyof NonNullable<FocusLeader["socialLinks"]>;
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

export default function FocusLeaderCard({ leader, showBorder = false }: FocusLeaderCardProps) {
  const [imageError, setImageError] = useState(false);
  const isUnannounced = leader.isUnannounced;

  return (
    <div
      className={`flex gap-5 md:gap-8 items-start w-full ${
        showBorder ? "border-t border-[#a3a3a3] pt-6 md:pt-8" : ""
      }`}
    >
      {/* Portrait, same 204px / 3:4 geometry as the researcher cards */}
      <div className="shrink-0 w-[140px] sm:w-[170px] md:w-[204px]">
        {isUnannounced || !leader.imageUrl ? (
          <div className="aspect-[3/4] w-full bg-[#f5f5f5] flex items-center justify-center">
            <span className="text-[100px] font-sans text-[#a3a3a3] select-none leading-none">
              ?
            </span>
          </div>
        ) : imageError ? (
          <div className="aspect-[3/4] w-full bg-[#f5f5f5] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-24 h-24 text-[#a3a3a3]"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
          </div>
        ) : (
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={leader.imageUrl}
              alt={leader.imageAlt}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 items-start min-w-0 flex-1">
        {/* Same type as the name on TeamLeaderCard */}
        <p
          className={`font-sans text-xl font-normal leading-[1.2] tracking-[-0.2px] ${
            isUnannounced ? "text-[#a3a3a3] italic" : "text-[#001f33]"
          }`}
        >
          {leader.name}
        </p>

        {/* The focus is set as a heading, not a chip, so it does not read as
            just another keyword. Keywords stay as filled chips below. */}
        <div className="flex flex-col gap-1 items-start w-full mt-1">
          <p className="font-mono text-xs md:text-sm font-normal leading-[1.1] tracking-[0.32px] text-[#001f33]/60">
            Focus
          </p>
          <p className="font-sans text-xl font-normal leading-[1.2] tracking-[-0.2px] text-[#001f33]">
            {leader.focusArea}
          </p>
          <p className="font-sans text-base md:text-lg font-normal leading-[1.6] tracking-[-0.16px] text-[#001f33] mt-1">
            {leader.focusDescription}
          </p>
        </div>

        {!isUnannounced && leader.tags.length > 0 && (
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
        )}

        {!isUnannounced && leader.socialLinks && (
          <div className="flex gap-3 items-center">
            {SOCIAL_ICONS.map(({ key, label, icon, mailto }) => {
              const value = leader.socialLinks?.[key];
              if (!value || value.trim() === "") return null;
              return (
                <Link
                  key={key}
                  href={mailto ? `mailto:${value}` : value}
                  {...(mailto ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className="w-5 h-5 relative shrink-0"
                >
                  <span className="sr-only">{label}</span>
                  <Image src={icon} alt={label} fill className="object-contain" />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
