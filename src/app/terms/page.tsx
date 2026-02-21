import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Link from "next/link";
import { navigationItems } from "@/constants/navigation";

export const metadata = {
  title: "Terms and Conditions | CCAI",
  description: "Terms and Conditions - Centre for Credible Artificial Intelligence",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} />

      <div className="pt-[64px] md:pt-[80px]">
        <Section className="py-20 md:py-32 lg:py-[180px]">
          <div className="flex flex-col gap-8 max-w-[800px] mx-auto text-[#001f33]">
            <h1 className="font-sans text-3xl md:text-[48px] font-normal leading-[1.1] tracking-[-0.96px]">
              Terms and Conditions
            </h1>
            <p className="font-sans text-base md:text-lg font-normal leading-[1.6]">
              This page is under preparation. For any questions regarding terms of use,
              please contact us at{" "}
              <Link href="/contact" className="underline hover:no-underline">
                Contact
              </Link>
              .
            </p>
            <p className="font-mono text-sm text-[#001f33]/70">
              ©2026 Centre for Credible Artificial Intelligence. All rights reserved.
            </p>
          </div>
        </Section>
      </div>

      <Footer />
    </div>
  );
}
