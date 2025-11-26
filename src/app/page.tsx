import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import WordWithSquare from "@/components/WordWithSquare";
import WordWithSquareAfter from "@/components/WordWithSquareAfter";
import Image from "next/image";
import { projects } from "@/data/projects";

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

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/" />
      
      {/* Hero Section */}
      <div className="pt-20">
        <Hero />
      </div>

      {/* Partner Logos Section */}
      <Section className="flex items-center justify-center py-7">
        <div className="relative h-[91px] w-full max-w-[984px]">
          <Image
            src="/images/partner-logos.jpg"
            alt="Partner and sponsor logos"
            fill
            className="object-contain"
          />
        </div>
      </Section>

      {/* About CCAI Section */}
      <Section className="py-20">
        <div className="flex flex-col gap-[19px] leading-[1.1] text-[#001f33]">
          <p className="font-mono text-lg font-normal uppercase">about ccai</p>
          <div className="font-sans text-[48px] font-normal leading-[1.1] tracking-[-0.96px]">
            <p className="mb-0">
              In a world dominated by algorithms that operate as "black boxes"
              — so complex that even their creators cannot fully explain how or
              why they make certain decisions — the Centre for Credible AI
              (CCAI) was created. A centre that is not afraid to challenge
              existing paradigms, with a clear mission:
            </p>
            <p>
              to make artificial intelligence truly{" "}
              <WordWithSquare>understandable</WordWithSquare>
              , <WordWithSquare>verifiable</WordWithSquare>, and{" "}
              <WordWithSquare>controllable</WordWithSquare>.
            </p>
          </div>
        </div>
      </Section>

      {/* What We Do Section */}
      <Section className="py-20">
        <div className="flex flex-col gap-[19px] leading-[1.1] text-[#001f33]">
          <p className="font-mono text-lg font-normal uppercase">what we do</p>
          <p className="font-sans text-[48px] font-normal leading-[1.1] tracking-[-0.96px]">
            We specialize in Explainable Artificial Intelligence (XAI) — a
            field that asks questions where most others are already satisfied
            with the answers. We are not just interested in building bigger
            or faster models. <br />
            We care about whether they can be understood and improved. Because
            understanding is the foundation of trust — and trust is essential
            for <WordWithSquareAfter>progress</WordWithSquareAfter>
          </p>
        </div>
      </Section>

      {/* Our Projects Section */}
      <Section className="py-20">
        <div className="flex flex-col gap-[19px] leading-[1.1] text-[#001f33]">
          <p className="font-mono text-lg font-normal uppercase">our projects</p>
          <p className="font-sans text-[48px] font-normal leading-[1.1] tracking-[-0.96px]">
            Check out our latest projects
          </p>
        </div>
      </Section>

      {/* Projects List */}
      <div className="flex flex-col">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard
            key={project.id}
            project={{
              id: project.id,
              date: project.subtitle,
              title: project.title,
              description: project.description,
              imageUrl: project.imageUrl,
              imageAlt: project.imageAlt,
            }}
          />
        ))}
        <div className="flex justify-center py-10">
          <Button href="/projects" variant="primary">
            go to projects page
          </Button>
        </div>
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
