import Image from "next/image";

export default function PartnerSection() {
  return (
    <div className="flex flex-col gap-[80px] items-start w-full">
      <div className="flex flex-col gap-[10px] items-start leading-[1.1] text-[#001f33] w-full">
        <p className="font-mono text-base font-normal tracking-[0.32px] uppercase">
          who supports us
        </p>
        <p className="font-sans text-[36px] md:text-4xl lg:text-[48px] font-normal leading-[1.1] tracking-[-0.72px] md:tracking-[-0.96px]">
          Our strategic partner
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-start w-full border-t-[0.5px] border-[#a3a3a3] pt-10">
        <div className="flex flex-col gap-[17px] items-start w-full md:w-[485px]">
          <div className="relative h-[70px] md:h-[90px] w-[278.32px] md:w-full md:max-w-[360.852px]">
            <Image
              src="/images/partners/fraunhofer-logo.png"
              alt="Fraunhofer logo"
              fill
              className="object-contain object-left"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-8 items-start">
          <div className="flex flex-col gap-[10px] items-start w-full">
            <p className="font-sans text-base font-normal leading-[1.6] tracking-[-0.16px] text-[#001f33]">
              The Fraunhofer-Gesellschaft, headquartered in Germany, is one of
              the world&apos;s leading organizations for applied research. It plays a
              major role in innovation by prioritizing research on cutting-edge
              technologies and the transfer of results to industry to strengthen
              Germany&apos;s industrial base and for the benefit of society as a
              whole. Since its founding as a nonprofit organization in 1949,
              Fraunhofer has held a unique position in the German research and
              innovation ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

