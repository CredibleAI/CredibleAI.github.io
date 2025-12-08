interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`mx-auto max-w-[1440px] px-5 md:px-5 lg:px-[120px] ${className}`}>
      {children}
    </section>
  );
}

