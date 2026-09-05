"use client";

import Image from "next/image";
import Link from "next/link";
import { FocusLeader } from "@/types/team";
import { useState } from "react";

interface FocusLeaderCardProps {
  leader: FocusLeader;
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

export default function FocusLeaderCard({ leader }: FocusLeaderCardProps) {
  const [imageError, setImageError] = useState(false);
  const isUnannounced = leader.isUnannounced;

  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-6 gap-y-3 items-start w-full">
      {/* Portrait, same 204px / 3:4 geometry as the researcher cards */}
      <div className="w-[140px] sm:w-[170px] md:w-[204px]">
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

      {/* Even 12px gaps from xl, which still sum to the 272px portrait: 24 + 12 + 44.8 + 12 + 7x25.6. */}
      <div className="flex flex-col gap-[7px] xl:gap-3 items-start min-w-0">
        {/* Same type as the name on TeamLeaderCard */}
        <p
          className={`font-sans text-xl font-normal leading-[1.2] tracking-[-0.2px] ${
            isUnannounced ? "text-[#a3a3a3] italic" : "text-[#001f33]"
          }`}
        >
          {leader.name}
        </p>

        {/* Mono uppercase, so the focus labels the person instead of reading as
            a second name at the same weight. */}
        <p className="font-mono text-sm md:text-base font-normal uppercase leading-[1.4] tracking-[0.3px] text-[#001f33] whitespace-pre-line">
          {leader.focusArea}
        </p>

        <p className="font-sans text-base font-normal leading-[1.6] tracking-[-0.16px] text-[#001f33] mt-[2px] xl:mt-0">
          {leader.focusDescription}
        </p>

      </div>

      {/* Keywords and links span both columns, so they close the card instead of trailing the note. */}
      {!isUnannounced && (
        <div className="col-span-2 flex flex-col gap-[9px] items-start">
          {leader.tags.length > 0 && (
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

          {leader.socialLinks && (
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
      )}
    </div>
  );
}
