import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import ProjectCardData from "@/components/ProjectCardData";
import { projects } from "@/data/projects";
import { navigationItems } from "@/constants/navigation";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/projects" />
      
      {/* Main Content */}
      <div className="pt-20">
        {/* Header Section */}
        <Section className="py-20">
          <div className="flex flex-col gap-[19px] items-start leading-[1.1] text-[#001f33] w-full">
            <p className="font-mono text-lg font-normal uppercase">
              our projects
            </p>
            <p className="font-sans text-[48px] font-normal leading-[1.1] tracking-[-0.96px]">
              Check out our latest projects
            </p>
          </div>
        </Section>

        {/* Projects List */}
        <div className="flex flex-col">
          {projects.map((project) => (
            <ProjectCardData key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

