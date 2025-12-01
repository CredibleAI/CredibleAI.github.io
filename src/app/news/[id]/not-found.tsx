import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { navigationItems } from "@/constants/navigation";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/news" />

      <div className="pt-[64px] flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h1 className="font-sans text-4xl md:text-6xl font-normal leading-[1.1] tracking-[-0.96px] text-[#001f33] mb-6">
          Article Not Found
        </h1>
        <p className="font-sans text-lg md:text-xl font-normal leading-[1.4] text-[#001f33] mb-8 text-center max-w-[600px]">
          The news article you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/news"
          className="bg-[#001f33] text-white px-8 py-4 font-mono text-sm font-normal leading-[1.1] uppercase hover:bg-opacity-90 transition-colors"
        >
          Back to News
        </Link>
      </div>

      <Footer />
    </div>
  );
}

