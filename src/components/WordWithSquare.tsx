interface WordWithSquareProps {
  children: React.ReactNode;
}

export default function WordWithSquare({ children }: WordWithSquareProps) {
  return (
    <span className="inline-flex items-baseline gap-2">
      <span className="h-6 w-6 bg-[#001f33] shrink-0 inline-block align-middle" />
      <span className="inline-block align-baseline">{children}</span>
    </span>
  );
}

