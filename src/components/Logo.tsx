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
          <div className={`md:hidden relative flex items-center`} style={{ height: "20px" }}>
            <img
              src={shortLogoSrc}
              alt="CCAI Logo"
              className={`${variant === "white" ? "brightness-0 invert" : ""}`}
              style={{ height: "20px", width: "92.855px", display: "block" }}
            />
          </div>
          {/* Desktop: show full logo with all parts */}
          <div className={`hidden md:flex relative items-center gap-[6px]`} style={{ height: "22.527px" }}>
            <img
              src="/images/logo-full-part1.svg"
              alt="CCAI"
              style={{ height: "22.527px", width: "104.589px", display: "block" }}
            />
            <div className="flex flex-col justify-center" style={{ gap: "3px" }}>
              <img
                src="/images/logo-full-part2.svg"
                alt="Centre for Credible"
                style={{ height: "7px", width: "76.3px", display: "block" }}
              />
              <img
                src="/images/logo-full-part3.svg"
                alt="Artificial Intelligence"
                style={{ height: "9px", width: "90px", display: "block" }}
              />
            </div>
          </div>
        </>
      )}
      {/* Default: show the short logo */}
      {!variantMobile && (
        <div className={`relative flex items-center ${className || "h-8"}`}>
          <img
            src={shortLogoSrc}
            alt="CCAI Logo"
            className={`h-full w-auto object-contain ${variant === "white" ? "brightness-0 invert" : ""}`}
            style={{ display: "block" }}
          />
        </div>
      )}
    </>
  );
}

