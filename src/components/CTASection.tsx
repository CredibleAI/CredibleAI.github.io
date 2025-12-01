import Button from "./Button";
import Image from "next/image";

export default function CTASection() {
  return (
    <div className="relative h-[760px] w-full overflow-hidden ">
      {/* Background Video - rotated */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute h-[1440px] w-[760px] -rotate-90 origin-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/Hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Content */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 md:px-[14px] py-10 flex flex-col gap-10 items-center w-[90%] max-w-[792px] z-10">
        <div className="flex flex-col gap-[10px] items-center leading-[1.1] text-center w-full">
          <p className="font-mono text-base font-normal tracking-[0.32px] uppercase text-[#001f33]">
            join us
          </p>
          <p className="font-sans text-3xl md:text-4xl lg:text-[48px] font-normal leading-[1.1] tracking-[-0.96px] text-[#001f33]">
            Want to be part of our team?
          </p>
        </div>
        <Button
          href="/join-us"
          variant="primary"
          className="px-6 md:px-8 py-4 md:py-5 text-sm md:text-base tracking-[0.32px] uppercase"
        >
          see our open positions
          <Image
            src="/images/icons/arrow-icon.svg"
            alt=""
            width={10}
            height={10}
            className="shrink-0"
          />
        </Button>
      </div>
    </div>
  );
}

