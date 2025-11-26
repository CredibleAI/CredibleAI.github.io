import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "@/types/data";

interface ProjectCardDataProps {
  project: ProjectData;
}

export default function ProjectCardData({ project }: ProjectCardDataProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="flex gap-6 border-b border-[#a3a3a3] px-[120px] py-10 hover:bg-gray-50 transition-colors"
    >
      <div className="flex flex-1 flex-col gap-10 text-[#001f33]">
        <div className="flex flex-col gap-[19px] leading-[1.1]">
          <p className="font-mono text-lg font-normal uppercase">
            {project.subtitle}
          </p>
          <h3 className="font-sans text-[36px] font-normal leading-[1.1] tracking-[-0.72px]">
            {project.title}
          </h3>
        </div>
        <p className="font-sans text-lg font-normal leading-[1.4] tracking-[-0.18px]">
          {project.description}
        </p>
        {project.category && (
          <div className="flex gap-2 items-center flex-wrap">
            <div className="bg-[#001f33] flex gap-[10px] items-center justify-center px-[5px] py-[3px]">
              <p className="font-mono text-sm font-normal leading-[1.1] text-white">
                {project.category}
              </p>
            </div>
            {project.tags && project.tags.map((tag, index) => (
              <div
                key={index}
                className="bg-[#001f33] flex gap-[10px] items-center justify-center px-[5px] py-[3px]"
              >
                <p className="font-mono text-sm font-normal leading-[1.1] text-white">
                  {tag}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="relative h-[332px] w-[589px] shrink-0">
        <Image
          src={project.imageUrl}
          alt={project.imageAlt}
          fill
          className="object-cover"
        />
      </div>
    </Link>
  );
}

