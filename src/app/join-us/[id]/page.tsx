import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
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

export default async function OpportunityPage({ params }: OpportunityPageProps) {
  const { id } = await params;
  const opportunity = opportunities.find((o) => o.id === id);

  if (!opportunity) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/join-us" />

      <div className="pt-20">
        <Section className="py-12 md:py-20">
          <div className="flex flex-col gap-6 items-start max-w-[800px] mx-auto text-[#001f33]">
            <p className="font-mono text-base md:text-lg font-normal uppercase">
              {opportunity.subtitle}
            </p>
            <h1 className="font-sans text-3xl md:text-[48px] font-normal leading-[1.1] tracking-[-0.96px]">
              {opportunity.title}
            </h1>
            <p className="font-sans text-base md:text-xl font-normal leading-[1.4] tracking-[-0.2px]">
              {opportunity.description}
            </p>
            <div className="mt-6 flex gap-4 flex-wrap font-mono text-xs md:text-sm">
              {opportunity.location && <span>📍 {opportunity.location}</span>}
              {opportunity.deadline && <span>⏰ Deadline: {opportunity.deadline}</span>}
            </div>
            <Link
              href="/contact"
              className="mt-8 bg-[#001f33] text-white px-6 py-3 font-mono text-xs md:text-sm font-normal hover:bg-opacity-90 transition-colors inline-block"
            >
              Contact us about this position
            </Link>
            <Link
              href="/join-us"
              className="mt-4 inline-flex items-center gap-2 font-mono text-xs md:text-sm font-normal text-[#001f33] uppercase hover:opacity-80 transition-opacity"
            >
              <span className="inline-block rotate-180">➜</span>
              Back to positions
            </Link>
          </div>
        </Section>
      </div>

      <Footer />
    </div>
  );
}

