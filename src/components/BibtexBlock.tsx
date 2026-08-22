"use client";

import { useState } from "react";

interface BibtexBlockProps {
  bibtex: string;
}

export default function BibtexBlock({ bibtex }: BibtexBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be refused; the text stays selectable either way.
    }
  };

  return (
    <div className="flex flex-col gap-3 items-start w-full">
      <div className="flex gap-4 items-center justify-between w-full">
        <h2 className="font-sans text-xl md:text-2xl font-normal leading-[1.2] tracking-[-0.4px] text-[#001f33]">
          Citation
        </h2>
        <button
          onClick={copy}
          className="font-mono text-xs md:text-sm font-normal uppercase tracking-[0.32px] text-[#001f33] border border-[#001f33] px-[7px] py-[3px] hover:bg-[#001f33] hover:text-white transition-colors"
        >
          {copied ? "copied" : "copy"}
        </button>
      </div>
      <pre className="w-full overflow-x-auto bg-[#f5f5f5] p-4 md:p-5">
        <code className="font-mono text-xs md:text-sm leading-[1.6] text-[#001f33] whitespace-pre">
          {bibtex}
        </code>
      </pre>
    </div>
  );
}
