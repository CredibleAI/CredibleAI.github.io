import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import ArticleBuilder from "@/components/ArticleBuilder";
import Image from "next/image";
import { notFound } from "next/navigation";
import { opportunities } from "@/data/opportunities";
import { getOpportunityArticleById } from "@/data/opportunity-articles";

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

interface OpportunityDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function OpportunityDetailPage({
  params,
}: OpportunityDetailPageProps) {
  const { id } = await params;
  const opportunity = opportunities.find((o) => o.id === id);
  const article = getOpportunityArticleById(id);

  if (!opportunity) {
    notFound();
  }

  const formatDeadline = (deadline?: string) => {
    if (!deadline) return "Rolling basis";
    try {
      const date = new Date(deadline);
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return deadline;
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/opportunities" />

      {/* Main Content */}
      <div className="pt-20">
        {/* Hero Section */}
        <Section className="py-20">
          <div className="flex flex-col gap-12 items-start max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-[19px] items-start leading-[1.1] text-[#001f33] w-full">
              <div className="flex gap-4 items-center flex-wrap">
                {opportunity.type && (
                  <div className="bg-[#001f33] flex gap-[10px] items-center justify-center px-[5px] py-[3px]">
                    <p className="font-mono text-sm font-normal leading-[1.1] text-white uppercase">
                      {opportunity.type}
                    </p>
                  </div>
                )}
                {opportunity.location && (
                  <p className="font-mono text-sm font-normal text-[#001f33]">
                    📍 {opportunity.location}
                  </p>
                )}
              </div>
              <h1 className="font-sans text-[48px] font-normal leading-[1.1] tracking-[-0.96px]">
                {opportunity.title}
              </h1>
              {opportunity.description && (
                <p className="font-sans text-xl font-normal leading-[1.4] tracking-[-0.2px]">
                  {opportunity.description}
                </p>
              )}
            </div>

            {/* Key Information */}
            <div className="flex flex-col gap-4 p-6 border border-[#a3a3a3] bg-gray-50 w-full">
              <div className="flex flex-col gap-2">
                <p className="font-mono text-sm font-normal uppercase text-[#001f33]">
                  Application Deadline
                </p>
                <p className="font-sans text-lg font-normal text-[#001f33]">
                  {formatDeadline(opportunity.deadline)}
                </p>
              </div>
              {opportunity.location && (
                <div className="flex flex-col gap-2">
                  <p className="font-mono text-sm font-normal uppercase text-[#001f33]">
                    Location
                  </p>
                  <p className="font-sans text-lg font-normal text-[#001f33]">
                    {opportunity.location}
                  </p>
                </div>
              )}
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-[500px]">
              <Image
                src={opportunity.imageUrl}
                alt={opportunity.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Section>

        {/* Article Content */}
        {article && (
          <Section className="pb-20">
            <div className="max-w-[800px] mx-auto">
              <ArticleBuilder blocks={article.content} />
            </div>
          </Section>
        )}

        {/* Application CTA */}
        <Section className="pb-20">
          <div className="bg-[#001f33] px-[120px] py-16 max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-6 items-start text-white">
              <h2 className="font-sans text-[36px] font-normal leading-[1.1] tracking-[-0.72px]">
                Ready to Apply?
              </h2>
              <p className="font-sans text-lg font-normal leading-[1.4] tracking-[-0.18px] max-w-[600px]">
                If you're interested in this position, please send your
                application including CV, cover letter, and relevant documents to
                our recruitment team.
              </p>
              <a
                href="/contact"
                className="bg-white text-[#001f33] px-6 py-3 font-mono text-sm font-normal hover:bg-opacity-90 transition-colors inline-block"
              >
                Apply Now
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

