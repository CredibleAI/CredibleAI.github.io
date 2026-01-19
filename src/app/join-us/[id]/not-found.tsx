import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { navigationItems } from "@/constants/navigation";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/join-us" />
      <div className="pt-20 flex flex-col items-center justify-center min-h-[60vh] gap-8 px-4">
        <h1 className="font-sans text-4xl md:text-6xl font-normal leading-[1.1] tracking-[-0.96px] text-[#001f33]">
          Position Not Found
        </h1>
        <p className="font-sans text-lg md:text-xl font-normal leading-[1.4] text-[#001f33] text-center max-w-[600px]">
          The position you are looking for does not exist or is no longer
          available.
        </p>
        <Link
          href="/join-us"
          className="bg-[#001f33] text-white px-8 py-4 font-mono text-sm font-normal leading-[1.1] uppercase hover:bg-opacity-90 transition-colors"
        >
          Back to Positions
        </Link>
      </div>
      <Footer />
    </div>
  );
}

