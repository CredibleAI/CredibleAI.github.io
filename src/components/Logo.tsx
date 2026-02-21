import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
  variantMobile?: "short" | "full";
}

export default function Logo({ className = "", variant = "default", variantMobile }: LogoProps) {
  const shortLogoSrc = "/images/logo.svg";

  return (
    <>
      {/* Mobile: show short logo if variantMobile is specified */}
      {variantMobile === "short" && (
        <>
          <div className={`md:hidden relative flex items-center`} style={{ height: "20px", width: "92.855px" }}>
            <Image
              src={shortLogoSrc}
              alt="CCAI Logo"
              fill
              className={`object-contain ${variant === "white" ? "brightness-0 invert" : ""}`}
            />
          </div>
          {/* Desktop: show full logo with all parts */}
          <div className={`hidden md:flex relative items-center gap-[6px]`} style={{ height: "22.527px" }}>
            <div className="relative" style={{ height: "22.527px", width: "104.589px" }}>
              <Image
                src="/images/logo-full-part1.svg"
                alt="CCAI"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center" style={{ gap: "3px" }}>
              <div className="relative" style={{ height: "7px", width: "76.3px" }}>
                <Image
                  src="/images/logo-full-part2.svg"
                  alt="Centre for Credible"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative" style={{ height: "9px", width: "90px" }}>
                <Image
                  src="/images/logo-full-part3.svg"
                  alt="Artificial Intelligence"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {/* Default: show the short logo */}
      {!variantMobile && (
        <div className={`relative flex items-center ${className || "h-8"}`} style={{ width: "92.855px" }}>
          <Image
            src={shortLogoSrc}
            alt="CCAI Logo"
            fill
            className={`object-contain ${variant === "white" ? "brightness-0 invert" : ""}`}
          />
        </div>
      )}
    </>
  );
}

