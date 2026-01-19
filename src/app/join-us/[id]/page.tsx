import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { opportunities } from "@/data/opportunities";
import { navigationItems } from "@/constants/navigation";

export async function generateStaticParams() {
  return opportunities.map((opportunity) => ({
    id: opportunity.id,
  }));
}

interface OpportunityPageProps {
  params: Promise<{ id: string }>;
}

export default async function OpportunityPage({
  params,
}: OpportunityPageProps) {
  const { id } = await params;
  const opportunity = opportunities.find((o) => o.id === id);

  if (!opportunity) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/join-us" />

      <div className="pt-20">
        <div className="px-6 md:px-[120px] py-6">
          <Link
            href="/join-us"
            className="inline-flex items-center gap-2 font-mono text-sm font-normal text-[#001f33] uppercase hover:opacity-80 transition-opacity"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="rotate-180"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Positions
          </Link>
        </div>

        <Section className="py-12 md:py-20">
          <div className="flex flex-col gap-8 md:gap-12 items-start max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-4 md:gap-[19px] items-start leading-[1.1] text-[#001f33] w-full">
              <p className="font-mono text-base md:text-lg font-normal uppercase">
                {opportunity.subtitle}
              </p>
              <h1 className="font-sans text-3xl md:text-[48px] font-normal leading-[1.1] tracking-[-0.96px]">
                {opportunity.title}
              </h1>
              <p className="font-sans text-base md:text-xl font-normal leading-[1.4] tracking-[-0.2px] max-w-[800px]">
                {opportunity.description}
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-10 w-full">
              <div className="flex flex-col gap-6 w-full md:w-2/3">
                {opportunity.detailedDescription && (
                  <p className="font-sans text-base md:text-lg font-normal leading-[1.6] tracking-[-0.16px] text-[#001f33]">
                    {opportunity.detailedDescription}
                  </p>
                )}

                {opportunity.responsibilities && opportunity.responsibilities.length > 0 && (
                  <div className="flex flex-col gap-3">
                    <h2 className="font-sans text-xl md:text-2xl font-normal leading-[1.2] tracking-[-0.4px] text-[#001f33]">
                      Responsibilities
                    </h2>
                    <ul className="list-disc pl-5 space-y-2">
                      {opportunity.responsibilities.map((item, index) => (
                        <li
                          key={index}
                          className="font-sans text-base md:text-lg font-normal leading-[1.6] text-[#001f33]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {opportunity.requirements && opportunity.requirements.length > 0 && (
                  <div className="flex flex-col gap-3">
                    <h2 className="font-sans text-xl md:text-2xl font-normal leading-[1.2] tracking-[-0.4px] text-[#001f33]">
                      Requirements
                    </h2>
                    <ul className="list-disc pl-5 space-y-2">
                      {opportunity.requirements.map((item, index) => (
                        <li
                          key={index}
                          className="font-sans text-base md:text-lg font-normal leading-[1.6] text-[#001f33]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {opportunity.benefits && opportunity.benefits.length > 0 && (
                  <div className="flex flex-col gap-3">
                    <h2 className="font-sans text-xl md:text-2xl font-normal leading-[1.2] tracking-[-0.4px] text-[#001f33]">
                      Benefits
                    </h2>
                    <ul className="list-disc pl-5 space-y-2">
                      {opportunity.benefits.map((item, index) => (
                        <li
                          key={index}
                          className="font-sans text-base md:text-lg font-normal leading-[1.6] text-[#001f33]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-6 w-full md:w-1/3">
                {opportunity.imageUrl && (
                  <div className="relative w-full h-[260px] md:h-[280px]">
                    <Image
                      src={opportunity.imageUrl}
                      alt={opportunity.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="border border-[#a3a3a3] p-5 flex flex-col gap-3">
                  <h2 className="font-sans text-lg md:text-xl font-normal leading-[1.2] tracking-[-0.2px] text-[#001f33]">
                    Position details
                  </h2>
                  <div className="flex flex-col gap-2 font-sans text-sm md:text-base text-[#001f33]">
                    {opportunity.organization && (
                      <p className="font-semibold">{opportunity.organization}</p>
                    )}
                    {opportunity.type && <p>Type: {opportunity.type}</p>}
                    {opportunity.referenceNumber && (
                      <p>Reference: {opportunity.referenceNumber}</p>
                    )}
                    {opportunity.employmentType && (
                      <p>Employment type: {opportunity.employmentType}</p>
                    )}
                    {opportunity.workload && <p>Workload: {opportunity.workload}</p>}
                    {opportunity.contractType && (
                      <p>Contract type: {opportunity.contractType}</p>
                    )}
                    {opportunity.location && <p>Location: {opportunity.location}</p>}
                    {opportunity.salaryRange && (
                      <p>Salary range: {opportunity.salaryRange}</p>
                    )}
                    {opportunity.startDate && (
                      <p>Start date: {opportunity.startDate}</p>
                    )}
                    {opportunity.deadline && <p>Deadline: {opportunity.deadline}</p>}
                    {opportunity.contactEmail && (
                      <p>Contact: {opportunity.contactEmail}</p>
                    )}
                  </div>

                  <div className="mt-2 flex flex-col gap-2">
                    <Link
                      href="/contact"
                      className="bg-[#001f33] text-white px-6 py-3 font-mono text-xs md:text-sm font-normal text-center hover:bg-opacity-90 transition-colors inline-block"
                    >
                      Contact us about this position
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <div className="px-6 md:px-[120px] py-6 border-t border-[#a3a3a3]">
          <Link
            href="/join-us"
            className="inline-flex items-center gap-2 font-mono text-sm font-normal text-[#001f33] uppercase hover:opacity-80 transition-opacity"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="rotate-180"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Positions
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
