"use client";

import Image from "next/image";
import Link from "next/link";
import { BrokerProfile } from "@/types/team";
import { useState } from "react";

interface BrokerCardProps {
  broker: BrokerProfile;
}

const SOCIAL_ICONS: {
  key: keyof NonNullable<BrokerProfile["socialLinks"]>;
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
 * The team leader template, with the second block saying what the role is for
 * rather than naming a research group.
 */
export default function BrokerCard({ broker }: BrokerCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start w-full">
      <div className="flex flex-col gap-[17px] items-start w-full md:w-[282px] shrink-0">
        {imageError ? (
          <div className="h-[280px] w-[204px] bg-[#f5f5f5] flex items-center justify-center">
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
          <div className="relative h-[280px] w-[204px]">
            <Image
              src={broker.imageUrl}
              alt={broker.imageAlt}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
          </div>
        )}

        <div className="flex flex-col gap-2 items-start text-[#001f33] w-full">
          <p className="font-sans text-xl font-normal leading-[1.2] tracking-[-0.2px]">
            {broker.name}
          </p>
          <p className="font-mono text-base font-normal leading-[1.1] tracking-[-0.64px]">
            {broker.role}
          </p>
        </div>

        {broker.tags.length > 0 && (
          <div className="flex gap-1 items-center flex-wrap">
            {broker.tags.map((tag) => (
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

        {broker.socialLinks && (
          <div className="flex gap-3 items-center">
            {SOCIAL_ICONS.map(({ key, label, icon, mailto }) => {
              const value = broker.socialLinks?.[key];
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

      <div className="flex flex-1 flex-col gap-8 items-start">
        <p className="font-sans text-xl font-normal leading-[1.6] tracking-[-0.2px] text-[#001f33]">
          {broker.description}
        </p>

        <div className="flex flex-col gap-[10px] items-start w-full">
          {/* Where a leader card says TEAM, so the two do not read as the same entry */}
          <div className="bg-[#001f33] px-[5px] py-[3px] flex items-center justify-center shrink-0">
            <p className="font-mono text-sm font-normal leading-[1.1] text-white uppercase">
              Mission
            </p>
          </div>
          <p className="font-sans text-xl font-normal leading-[1.2] tracking-[-0.2px] text-[#001f33]">
            {broker.missionTitle}
          </p>
          <p className="font-sans text-xl font-normal leading-[1.6] tracking-[-0.2px] text-[#001f33]">
            {broker.mission}
          </p>
        </div>
      </div>
    </div>
  );
}
