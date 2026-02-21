import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { navigationItems } from "@/constants/navigation";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/projects" />
      <div className="pt-20 flex flex-col items-center justify-center min-h-[60vh] gap-8">
        <h1 className="font-sans text-[48px] font-normal text-[#001f33]">
          Project Not Found
        </h1>
        <p className="font-sans text-lg text-[#001f33]">
          The project you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/projects"
          className="bg-[#001f33] text-white px-6 py-3 font-mono text-sm hover:bg-opacity-90 transition-colors"
        >
          Back to Projects
        </Link>
      </div>
      <Footer />
    </div>
  );
}

