"use client";

import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import OpportunityCard from "@/components/OpportunityCard";
import { opportunities } from "@/data/opportunities";
import { useState, useMemo } from "react";

const navigationItems = [
  { label: "about", href: "/about" },
  { label: "news", href: "/news" },
  { label: "opportunities", href: "/opportunities" },
  { label: "projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const spotlightLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { platform: "LinkedIn", href: "#" },
  { platform: "Facebook", href: "#" },
  { platform: "Twitter", href: "#" },
  { platform: "YouTube", href: "#" },
];

const partners = [
  "Warsaw University of Technology",
  "Polish Science Foundation",
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms and Conditions", href: "/terms" },
];

export default function OpportunitiesPage() {
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
      <Navbar items={navigationItems} activeItem="/opportunities" />

      {/* Main Content */}
      <div className="pt-20">
        {/* Header Section */}
        <Section className="py-20">
          <div className="flex flex-col gap-12 items-start max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-[19px] items-start leading-[1.1] text-[#001f33] w-full">
              <p className="font-mono text-lg font-normal uppercase">
                opportunities
              </p>
              <h1 className="font-sans text-[48px] font-normal leading-[1.1] tracking-[-0.96px]">
                Join Our Team
              </h1>
              <p className="font-sans text-xl font-normal leading-[1.4] tracking-[-0.2px] max-w-[800px]">
                We are looking for passionate researchers, students, and
                professionals to join our mission of making AI understandable,
                verifiable, and controllable. Explore our open positions and
                opportunities.
              </p>
            </div>

            {/* Filter Section */}
            {opportunityTypes.length > 0 && (
              <div className="flex gap-4 items-center flex-wrap">
                <button
                  onClick={() => setSelectedType(null)}
                  className={`px-6 py-3 font-mono text-sm font-normal border transition-colors ${
                    selectedType === null
                      ? "bg-[#001f33] text-white border-[#001f33]"
                      : "bg-white text-[#001f33] border-[#001f33] hover:bg-gray-50"
                  }`}
                >
                  All Opportunities
                </button>
                {opportunityTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-6 py-3 font-mono text-sm font-normal border transition-colors ${
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

        {/* Opportunities List */}
        {filteredOpportunities.length > 0 ? (
          <div className="flex flex-col">
            {filteredOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        ) : (
          <Section className="py-20">
            <div className="text-center">
              <p className="font-sans text-xl font-normal text-[#001f33]">
                No opportunities found in this category.
              </p>
            </div>
          </Section>
        )}

        {/* Call to Action Section */}
        <Section className="py-20">
          <div className="bg-[#001f33] px-[120px] py-16 max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-6 items-start text-white">
              <h2 className="font-sans text-[36px] font-normal leading-[1.1] tracking-[-0.72px]">
                Don't see a position that fits?
              </h2>
              <p className="font-sans text-lg font-normal leading-[1.4] tracking-[-0.18px] max-w-[600px]">
                We're always interested in hearing from exceptional candidates.
                If you're passionate about explainable AI and want to contribute
                to our mission, feel free to reach out.
              </p>
              <a
                href="/contact"
                className="bg-white text-[#001f33] px-6 py-3 font-mono text-sm font-normal hover:bg-opacity-90 transition-colors inline-block"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <Footer
        spotlightLinks={spotlightLinks}
        socialLinks={socialLinks}
        partners={partners}
        legalLinks={legalLinks}
      />
    </div>
  );
}

