import React from "react";
import Image from "next/image";
import { ArticleBlock } from "@/types/article";

interface ArticleBuilderProps {
  blocks: ArticleBlock[];
}

export default function ArticleBuilder({ blocks }: ArticleBuilderProps) {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {blocks.map((block) => {
        switch (block.type) {
          case "heading":
            const HeadingTag = `h${block.level}` as keyof React.JSX.IntrinsicElements;
            const headingClasses = {
              1: "font-sans text-xl md:text-[48px] font-normal leading-[1.2] md:leading-[1.1] tracking-[-0.2px] md:tracking-[-0.96px] text-[#001f33]",
              2: "font-sans text-xl md:text-[36px] font-normal leading-[1.2] md:leading-[1.1] tracking-[-0.2px] md:tracking-[-0.72px] text-[#001f33]",
              3: "font-sans text-xl md:text-[28px] font-normal leading-[1.2] md:leading-[1.1] tracking-[-0.2px] md:tracking-[-0.56px] text-[#001f33]",
              4: "font-sans text-xl md:text-[24px] font-normal leading-[1.2] md:leading-[1.1] tracking-[-0.2px] md:tracking-[-0.48px] text-[#001f33]",
              5: "font-sans text-xl md:text-[20px] font-normal leading-[1.2] md:leading-[1.1] tracking-[-0.2px] md:tracking-[-0.4px] text-[#001f33]",
              6: "font-sans text-xl md:text-[18px] font-normal leading-[1.2] md:leading-[1.1] tracking-[-0.2px] md:tracking-[-0.36px] text-[#001f33]",
            };
            return (
              <HeadingTag
                key={block.id}
                className={headingClasses[block.level]}
              >
                {block.text}
              </HeadingTag>
            );

          case "paragraph":
            return (
              <div key={block.id} className="flex flex-col gap-4">
                <p className="font-sans text-base md:text-xl font-normal leading-[1.6] tracking-[-0.16px] md:tracking-[-0.2px] text-[#001f33]">
                  {block.text}
                </p>
              </div>
            );

          case "image":
            return (
              <figure key={block.id} className="flex flex-col gap-[10px]">
                <div
                  className={`relative ${
                    block.width && block.height
                      ? ""
                      : "w-full aspect-[335/189] md:aspect-video"
                  }`}
                  style={
                    block.width && block.height
                      ? { width: block.width, height: block.height }
                      : {}
                  }
                >
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill={!block.width || !block.height}
                    width={block.width}
                    height={block.height}
                    className="object-cover"
                  />
                </div>
                {block.caption && (
                  <figcaption className="font-mono text-xs md:text-sm font-normal leading-[1.1] text-[#001f33]">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "list":
            const ListTag = block.ordered ? "ol" : "ul";
            return (
              <ListTag
                key={block.id}
                className={`font-sans text-base md:text-xl font-normal leading-[1.6] tracking-[-0.16px] md:tracking-[-0.2px] text-[#001f33] ${
                  block.ordered ? "list-decimal pl-5 md:pl-6" : "list-disc pl-5 md:pl-6"
                } space-y-0`}
              >
                {block.items.map((item, index) => (
                  <li key={index} className="mb-0">
                    {item}
                  </li>
                ))}
              </ListTag>
            );

          case "quote":
            return (
              <blockquote
                key={block.id}
                className="border-l-4 border-[#001f33] pl-4 md:pl-6 py-4 italic font-sans text-base md:text-xl font-normal leading-[1.6] text-[#001f33]"
              >
                <p>{block.text}</p>
                {block.author && (
                  <cite className="block mt-4 font-mono text-xs md:text-sm not-italic text-[#a3a3a3]">
                    — {block.author}
                  </cite>
                )}
              </blockquote>
            );

          case "code":
            return (
              <pre
                key={block.id}
                className="bg-[#f5f5f5] p-4 md:p-6 rounded overflow-x-auto font-mono text-xs md:text-sm leading-[1.6] text-[#001f33]"
              >
                <code>{block.code}</code>
              </pre>
            );

          case "divider":
            return (
              <hr
                key={block.id}
                className="border-t border-[#a3a3a3] my-6 md:my-8"
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

