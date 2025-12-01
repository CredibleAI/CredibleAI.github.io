import Image from "next/image";

export default function VisionSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-[126px] items-start lg:items-center w-full">
      {/* Illustration - appears first on mobile, first on desktop */}
      <div className="relative shrink-0 w-full lg:w-[384px] h-[120px] lg:h-[384px] order-1">
        <div className="absolute left-0 lg:left-1/2 top-0 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-[120px] lg:w-[280px] h-[120px] lg:h-[280px]">
          <Image
            src="/images/icons/our-vision.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Content - appears second on mobile, second on desktop */}
      <div className="flex flex-col gap-6 lg:gap-[32px] items-start w-full lg:w-[690px] order-2">
        <div className="flex flex-col gap-[10px] items-start leading-[1.1] w-full">
          <p className="font-mono text-base font-normal tracking-[0.32px] uppercase text-[#001f33]">
            our vision
          </p>
          <p className="font-sans text-[36px] font-normal leading-[1.1] tracking-[-0.72px] text-[#001f33]">
            Creating technology and culture for trustworthy and transparent AI
          </p>
        </div>
        <div className="font-sans text-base font-normal leading-[1.6] tracking-[-0.16px] text-[#001f33] w-full">
          <p className="mb-0">
            AI models are often trained on a single, static dataset and then
            deployed into a dynamic, unpredictable reality. They optimize a
            single value, but fail when the environment shifts. We do not accept
            this technological mediocrity. Our ambition is to expose the
            internal logic of such systems, highlight their limitations, and
            provide real tools for control. To us, explainability is not a
            "feature" — it's a means to improve models and a gateway to new
            scientific knowledge.
          </p>
          <p>
            Our specialization is in combining explainability and controlability
            of AI systems used in high-stakes, socially responsible domains —
            such as medicine, education, and bioinformatics. Where prediction
            alone isn't enough, and decisions must be grounded in knowledge that
            can be trusted.
          </p>
        </div>
      </div>
    </div>
  );
}

