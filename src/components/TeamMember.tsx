"use client";

import Image from "next/image";
import Link from "next/link";
import { TeamMember } from "@/types/team";
import { useState } from "react";

interface TeamMemberProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberProps) {
  const [imageError, setImageError] = useState(false);
  const isHannaGozdz = member.id === "hanna-gozdz";
  const isUnannounced = member.isUnannounced;
  
  return (
    <div className="flex flex-col gap-[17px] items-start w-full max-w-[280px]">
      {isUnannounced ? (
        <div className="aspect-[3/4] w-full max-w-[204px] bg-[#f5f5f5] flex items-center justify-center">
          <span className="text-[100px] font-sans text-[#a3a3a3] select-none">?</span>
        </div>
      ) : imageError ? (
        <div className={`aspect-[3/4] w-full max-w-[204px] bg-[#f5f5f5] flex items-center justify-center transition-shadow duration-300 ${isHannaGozdz ? "hover:shadow-[0_0_40px_rgba(255,105,180,0.4)]" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 text-[#a3a3a3]">
            <circle cx="12" cy="8" r="4"/>
            <path d="M20 21a8 8 0 0 0-16 0"/>
          </svg>
        </div>
      ) : (
        <div 
          className={`relative aspect-[3/4] w-full max-w-[204px] transition-shadow duration-300 ${isHannaGozdz ? "hover:shadow-[0_0_40px_rgba(255,105,180,0.4)]" : ""}`}
        >
          <Image
            src={member.imageUrl}
            alt={member.imageAlt}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        </div>
      )}
      <div className="flex flex-col gap-2 items-start text-[#001f33] w-full">
        <p className={`font-sans text-xl font-normal leading-[1.2] tracking-[-0.2px] ${isUnannounced ? "text-[#a3a3a3] italic" : ""}`}>
          {member.name}
        </p>
      </div>
      {!isUnannounced && member.tags.length > 0 && (
        <div className="flex gap-1 items-center flex-wrap max-w-full">
          {member.tags.map((tag, index) => (
            <div
              key={index}
              className="bg-[#001f33] flex gap-[10px] items-center justify-center px-[5px] py-[3px] max-w-full"
            >
              <p className="font-mono text-sm font-normal leading-[1.1] text-white uppercase truncate">
                {tag}
              </p>
            </div>
          ))}
        </div>
      )}
      {!isUnannounced && member.socialLinks && (
        <div className="flex gap-3 items-center">
          {member.socialLinks.linkedin && member.socialLinks.linkedin.trim() !== "" && (
            <Link
              href={member.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5 relative shrink-0"
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
          {member.socialLinks.googleScholar && member.socialLinks.googleScholar.trim() !== "" && (
            <Link
              href={member.socialLinks.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5 relative shrink-0"
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
          {member.socialLinks.twitter && member.socialLinks.twitter.trim() !== "" && (
            <Link
              href={member.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5 relative shrink-0"
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
          {member.socialLinks.email && member.socialLinks.email.trim() !== "" && (
            <Link
              href={`mailto:${member.socialLinks.email}`}
              className="w-5 h-5 relative shrink-0"
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
          {member.socialLinks.website && member.socialLinks.website.trim() !== "" && (
            <Link
              href={member.socialLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5 relative shrink-0"
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
