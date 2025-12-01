interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`mx-auto max-w-[1440px] px-4 sm:px-8 md:px-16 lg:px-[120px] ${className}`}>
      {children}
    </section>
  );
}

