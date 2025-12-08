import Image from "next/image";

export default function ValuesSection() {
  return (
    <div className="flex flex-col gap-[60px] md:gap-[80px] items-start w-full">
      <div className="flex flex-col gap-[10px] items-start leading-[1.1] text-center w-full">
        <p className="font-mono text-lg font-normal uppercase text-[#001f33] w-full">
          our values
        </p>
        <p className="font-sans text-[36px] md:text-4xl lg:text-[48px] font-normal leading-[1.1] tracking-[-0.72px] md:tracking-[-0.96px] text-[#001f33] w-full">
          Our Values
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-[60px] md:gap-4 w-full">
        {/* Integrity Box */}
        <div className="flex flex-col gap-6 items-center px-5 md:px-6 w-full md:w-[383px]">
          <div className="h-[70px] md:h-[120px] w-[70px] md:w-[120px] relative">
            {/* Integrity Icon - nested squares */}
            <div className="absolute left-[0.417px] md:left-0 top-[0.417px] md:top-0 w-[49.166px] md:w-[84px] h-[49.166px] md:h-[84px] border-[0.875px] md:border-[1.5px] border-[#001f33] rotate-90" />
            <div className="absolute left-[10.42px] md:left-[18px] top-[10.42px] md:top-[18px] w-[49.166px] md:w-[84px] h-[49.166px] md:h-[84px] border-[0.875px] md:border-[1.5px] border-[#001f33] rotate-90" />
            <div className="absolute left-[20.25px] md:left-[35px] top-[20.25px] md:top-[35px] w-[49.166px] md:w-[84px] h-[49.166px] md:h-[84px] bg-[#001f33] rotate-90" />
          </div>
          <p className="font-mono text-xl font-normal leading-[1.1] text-center uppercase text-[#001f33]">
            Integrity
          </p>
          <p className="font-sans text-base font-normal leading-[1.6] text-center tracking-[-0.16px] text-[#001f33]">
            We are transparent and act consistently with ethical principles
          </p>
        </div>

        {/* Excellence Box */}
        <div className="flex flex-col gap-6 items-center px-5 md:px-6 w-full md:w-[383px]">
          <div className="h-[70px] md:h-[120px] w-[68.332px] md:w-[117px] relative flex items-center justify-center">
            <Image
              src="/images/icons/excellence-icon.svg"
              alt="Excellence icon"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-mono text-xl font-normal leading-[1.1] text-center uppercase text-[#001f33]">
            Excellence
          </p>
          <p className="font-sans text-base font-normal leading-[1.6] text-center tracking-[-0.16px] text-[#001f33]">
            We pursue excellence in every aspect of our work.
          </p>
        </div>

        {/* Impact Box */}
        <div className="flex flex-col gap-6 items-center px-5 md:px-6 w-full md:w-[383px]">
          <div className="h-[70px] md:h-[120px] w-[70px] md:w-[120px] relative flex items-center justify-center">
            <Image
              src="/images/icons/impact-icon.svg"
              alt="Impact icon"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-mono text-xl font-normal leading-[1.1] text-center uppercase text-[#001f33]">
            Impact
          </p>
          <p className="font-sans text-base font-normal leading-[1.6] text-center tracking-[-0.16px] text-[#001f33]">
            We create AI solutions that make a real difference.
          </p>
        </div>
      </div>
    </div>
  );
}

