interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`relative flex items-center ${className || "h-8"}`}>
      <img
        src="/images/logo.svg"
        alt="CCAI Logo"
        className="h-full w-auto object-contain"
        style={{ display: "block" }}
        width={149}
        height={32}
      />
    </div>
  );
}

