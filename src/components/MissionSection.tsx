import Image from "next/image";

export default function MissionSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-[126px] items-start lg:items-center w-full">
      {/* Illustration - appears first on mobile, second on desktop */}
      <div className="relative shrink-0 w-full lg:w-[384px] h-[120px] lg:h-[384px] order-1 lg:order-2">
        <div className="absolute left-0 lg:left-1/2 top-0 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-[120px] lg:w-[280px] h-[120px] lg:h-[280px]">
          <Image
            src="/images/icons/our-mission.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Content - appears second on mobile, first on desktop */}
      <div className="flex flex-col gap-6 lg:gap-[32px] items-start w-full lg:w-[690px] order-2 lg:order-1">
        <div className="flex flex-col gap-[10px] items-start leading-[1.1] w-full">
          <p className="font-mono text-base font-normal tracking-[0.32px] uppercase text-[#001f33]">
            our mission
          </p>
          <p className="font-sans text-[36px] font-normal leading-[1.1] tracking-[-0.72px] text-[#001f33]">
            Make AI truly verifiable, explainable, and controllable.
          </p>
        </div>
        <div className="font-sans text-base font-normal leading-[1.6] tracking-[-0.16px] text-[#001f33] w-full">
          <p className="mb-0">
            In a world dominated by algorithms that operate like "black boxes" — so complex that even their creators can't fully explain how or why
            they make decisions — the Centre for Credible AI (CCAI) was founded.
            This is a centre that isn't afraid to question prevailing paradigms,
            with a clear mission: to make artificial intelligence truly
            verifiable, explainable, and controllable.
          </p>
          <p>
            We specialize in Explainable Artificial Intelligence (XAI) — a
            field that keeps asking questions where most have already accepted
            the answers. We're not just interested in building bigger and faster
            models. We care about whether they can be understood and improved —
            because understanding is the foundation of trust, and trust is the
            prerequisite for progress.
          </p>
        </div>
      </div>
    </div>
  );
}

