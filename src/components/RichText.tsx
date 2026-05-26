import React from "react";

type Token =
  | { type: "text"; text: string }
  | { type: "link"; label: string; href: string };

const TOKEN_REGEX = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)|(https?:\/\/[^\s)\]]+)/g;

function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = TOKEN_REGEX.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: "text", text: text.slice(lastIndex, match.index) });
    }

    if (match[1] && match[2]) {
      tokens.push({ type: "link", label: match[1], href: match[2] });
    } else if (match[3]) {
      tokens.push({ type: "link", label: match[3], href: match[3] });
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    tokens.push({ type: "text", text: text.slice(lastIndex) });
  }

  return tokens;
}

interface RichTextProps {
  text: string;
}

export default function RichText({ text }: RichTextProps) {
  const tokens = tokenize(text);

  return (
    <>
      {tokens.map((token, index) => {
        if (token.type === "link") {
          return (
            <a
              key={index}
              href={token.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#001f33] underline decoration-2 underline-offset-[3px] decoration-[#001f33] hover:bg-[#001f33] hover:text-white hover:decoration-white transition-colors break-words"
            >
              {token.label}
            </a>
          );
        }
        return <React.Fragment key={index}>{token.text}</React.Fragment>;
      })}
    </>
  );
}
