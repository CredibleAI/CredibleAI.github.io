import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import { navigationItems } from "@/constants/navigation";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/contact" />

      {/* Main Content Section */}
      <div className="pt-20">
        <Section className="py-12 md:py-24 lg:py-[180px]">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[24px] items-start max-w-[1200px] mx-auto">
            {/* Left Column - Contact Information */}
            <div className="flex w-full lg:w-[384px] flex-col gap-8 text-[#001f33]">
              <div className="flex flex-col gap-[10px] leading-[1.1] whitespace-pre-wrap">
                <p className="font-mono text-[16px] font-normal tracking-[0.32px] uppercase">
                  contact
                </p>
                <p className="font-sans text-[48px] font-normal tracking-[-0.96px]">
                  Contact us
                </p>
              </div>
              <div className="font-sans text-[18px] font-normal leading-[1.6] whitespace-pre-wrap">
                <p className="mb-0">ccai@pw.edu.pl</p>
                <p className="mb-0">&nbsp;</p>
                <p className="mb-0">ul. Rektorska 4</p>
                <p>00-614 Warszawa</p>
              </div>
            </div>

            {/* Right Column - Map */}
            <div className="relative flex-1 w-full lg:w-auto">
              <div className="relative w-full max-w-[791px] h-[507px] overflow-hidden rounded-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.669085!2d21.016667!3d52.229676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a736ea5bd!2sRektorska%204%2C%2000-614%20Warszawa%2C%20Poland!5e0!3m2!1sen!2sus!4v1701468000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="CCAI location at ul. Rektorska 4, 00-614 Warszawa"
                />
              </div>
            </div>
          </div>
        </Section>
      </div>

      <Footer />
    </div>
  );
}

