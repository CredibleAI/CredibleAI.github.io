interface WordWithSquareAfterProps {
  children: React.ReactNode;
}

export default function WordWithSquareAfter({ children }: WordWithSquareAfterProps) {
  return (
    <span className="inline-flex items-baseline gap-2">
      <span className="inline-block align-baseline">{children}</span>
      <span className="h-6 w-6 bg-[#001f33] shrink-0 inline-block align-middle" />
    </span>
  );
}

