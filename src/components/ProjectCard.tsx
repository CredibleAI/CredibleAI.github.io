import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex gap-6 border-b border-[#a3a3a3] px-[120px] py-10">
      <div className="flex flex-1 flex-col gap-10 text-[#001f33]">
        <div className="flex flex-col gap-[19px] leading-[1.1]">
          <p className="font-mono text-lg font-normal uppercase">
            {project.date}
          </p>
          <h3 className="font-sans text-[36px] font-normal leading-[1.1] tracking-[-0.72px]">
            {project.title}
          </h3>
        </div>
        <p className="font-sans text-lg font-normal leading-[1.4] tracking-[-0.18px]">
          {project.description}
        </p>
      </div>
      <div className="relative h-[332px] w-[589px] shrink-0">
        <Image
          src={project.imageUrl}
          alt={project.imageAlt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

