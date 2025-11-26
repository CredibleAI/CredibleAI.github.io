import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 px-5 py-3 font-mono text-sm font-normal leading-[1.1] transition-colors";
  
  const variantClasses = {
    primary: "bg-[#001f33] text-white hover:bg-opacity-90",
    secondary: "border border-[#001f33] text-[#001f33] hover:bg-gray-50",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

