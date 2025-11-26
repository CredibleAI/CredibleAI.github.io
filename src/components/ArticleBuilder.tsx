import Image from "next/image";
import { ArticleBlock } from "@/types/article";

interface ArticleBuilderProps {
  blocks: ArticleBlock[];
}

export default function ArticleBuilder({ blocks }: ArticleBuilderProps) {
  return (
    <div className="flex flex-col gap-8">
      {blocks.map((block) => {
        switch (block.type) {
          case "heading":
            const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements;
            const headingClasses = {
              1: "font-sans text-[48px] font-normal leading-[1.1] tracking-[-0.96px] text-[#001f33]",
              2: "font-sans text-[36px] font-normal leading-[1.1] tracking-[-0.72px] text-[#001f33]",
              3: "font-sans text-[28px] font-normal leading-[1.1] tracking-[-0.56px] text-[#001f33]",
              4: "font-sans text-[24px] font-normal leading-[1.1] tracking-[-0.48px] text-[#001f33]",
              5: "font-sans text-[20px] font-normal leading-[1.1] tracking-[-0.4px] text-[#001f33]",
              6: "font-sans text-[18px] font-normal leading-[1.1] tracking-[-0.36px] text-[#001f33]",
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
              <p
                key={block.id}
                className="font-sans text-lg font-normal leading-[1.6] tracking-[-0.18px] text-[#001f33]"
              >
                {block.text}
              </p>
            );

          case "image":
            return (
              <figure key={block.id} className="flex flex-col gap-4">
                <div
                  className={`relative ${
                    block.width && block.height
                      ? ""
                      : "w-full aspect-video"
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
                  <figcaption className="font-mono text-sm font-normal text-[#a3a3a3] italic">
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
                className={`font-sans text-lg font-normal leading-[1.6] tracking-[-0.18px] text-[#001f33] ${
                  block.ordered ? "list-decimal" : "list-disc"
                } pl-6 space-y-2`}
              >
                {block.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ListTag>
            );

          case "quote":
            return (
              <blockquote
                key={block.id}
                className="border-l-4 border-[#001f33] pl-6 py-4 italic font-sans text-xl font-normal leading-[1.6] text-[#001f33]"
              >
                <p>{block.text}</p>
                {block.author && (
                  <cite className="block mt-4 font-mono text-sm not-italic text-[#a3a3a3]">
                    — {block.author}
                  </cite>
                )}
              </blockquote>
            );

          case "code":
            return (
              <pre
                key={block.id}
                className="bg-[#f5f5f5] p-6 rounded overflow-x-auto font-mono text-sm leading-[1.6] text-[#001f33]"
              >
                <code>{block.code}</code>
              </pre>
            );

          case "divider":
            return (
              <hr
                key={block.id}
                className="border-t border-[#a3a3a3] my-8"
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

