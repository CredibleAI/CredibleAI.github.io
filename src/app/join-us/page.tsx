import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import { navigationItems } from "@/constants/navigation";

export default function JoinUsPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/join-us" />

      {/* Main Content */}
      <div className="pt-20">
        {/* Header Section */}
        <Section className="py-20 md:py-32">
          <div className="flex flex-col gap-8 items-center text-center max-w-[800px] mx-auto">
            <p className="font-mono text-base md:text-lg font-normal uppercase text-[#001f33]">
              join us
            </p>
            <h1 className="font-sans text-3xl md:text-[48px] font-normal leading-[1.1] tracking-[-0.96px] text-[#001f33]">
              Positions Opening Shortly
            </h1>
            <p className="font-sans text-base md:text-xl font-normal leading-[1.4] tracking-[-0.2px] text-[#001f33]/70">
              We are preparing exciting opportunities for passionate researchers,
              students, and professionals to join our mission of making AI
              understandable, verifiable, and controllable.
            </p>
            <p className="font-sans text-base md:text-lg font-normal leading-[1.4] text-[#001f33]/70">
              Check back soon for open positions.
            </p>
            <a
              href="/contact"
              className="mt-4 bg-[#001f33] text-white px-8 py-4 font-mono text-xs md:text-sm font-normal hover:bg-[#001f33]/90 transition-colors inline-block"
            >
              Contact Us
            </a>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

/* =============================================================================
   ORIGINAL CODE - UNCOMMENT TO RESTORE FULL FUNCTIONALITY
   =============================================================================

"use client";

import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import OpportunityCard from "@/components/OpportunityCard";
import { opportunities } from "@/data/opportunities";
import { useState, useMemo } from "react";
import { navigationItems } from "@/constants/navigation";

export default function JoinUsPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Get unique opportunity types
  const opportunityTypes = useMemo(() => {
    const types = new Set<string>();
    opportunities.forEach((opp) => {
      if (opp.type) types.add(opp.type);
    });
    return Array.from(types).sort();
  }, []);

  // Filter opportunities
  const filteredOpportunities = useMemo(() => {
    if (!selectedType) return opportunities;
    return opportunities.filter((opp) => opp.type === selectedType);
  }, [selectedType]);

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/join-us" />

      <div className="pt-20">
        <Section className="py-12 md:py-20">
          <div className="flex flex-col gap-8 md:gap-12 items-start max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-4 md:gap-[19px] items-start leading-[1.1] text-[#001f33] w-full">
              <p className="font-mono text-base md:text-lg font-normal uppercase">
                join us
              </p>
              <h1 className="font-sans text-3xl md:text-[48px] font-normal leading-[1.1] tracking-[-0.96px]">
                Join Our Team
              </h1>
              <p className="font-sans text-base md:text-xl font-normal leading-[1.4] tracking-[-0.2px] max-w-[800px]">
                We are looking for passionate researchers, students, and
                professionals to join our mission of making AI understandable,
                verifiable, and controllable. Explore our open positions and
                opportunities.
              </p>
            </div>

            {opportunityTypes.length > 0 && (
              <div className="flex gap-3 md:gap-4 items-center flex-wrap">
                <button
                  onClick={() => setSelectedType(null)}
                  className={`px-4 md:px-6 py-2 md:py-3 font-mono text-xs md:text-sm font-normal border transition-colors ${
                    selectedType === null
                      ? "bg-[#001f33] text-white border-[#001f33]"
                      : "bg-white text-[#001f33] border-[#001f33] hover:bg-gray-50"
                  }`}
                >
                  All Positions
                </button>
                {opportunityTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 md:px-6 py-2 md:py-3 font-mono text-xs md:text-sm font-normal border transition-colors ${
                      selectedType === type
                        ? "bg-[#001f33] text-white border-[#001f33]"
                        : "bg-white text-[#001f33] border-[#001f33] hover:bg-gray-50"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>
        </Section>

        {filteredOpportunities.length > 0 ? (
          <div className="flex flex-col">
            {filteredOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        ) : (
          <Section className="py-12 md:py-20">
            <div className="text-center">
              <p className="font-sans text-base md:text-xl font-normal text-[#001f33]">
                No positions found in this category.
              </p>
            </div>
          </Section>
        )}

        <Section className="py-12 md:py-20">
          <div className="bg-[#001f33] px-6 md:px-[120px] py-10 md:py-16 max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-4 md:gap-6 items-start text-white">
              <h2 className="font-sans text-2xl md:text-[36px] font-normal leading-[1.1] tracking-[-0.72px]">
                Don't see a position that fits?
              </h2>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.4] tracking-[-0.18px] max-w-[600px]">
                We're always interested in hearing from exceptional candidates.
                If you're passionate about explainable AI and want to contribute
                to our mission, feel free to reach out.
              </p>
              <a
                href="/contact"
                className="bg-white text-[#001f33] px-6 py-3 font-mono text-xs md:text-sm font-normal hover:bg-opacity-90 transition-colors inline-block"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </Section>
      </div>

      <Footer />
    </div>
  );
}

============================================================================= */
