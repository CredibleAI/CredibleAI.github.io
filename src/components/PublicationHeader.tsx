import { Article, ArticleLink } from "@/types/article";

interface PublicationHeaderProps {
  article: Article;
}

/**
 * Academic project-page header, in the shape used by conference project pages:
 * venue, author list with affiliation superscripts, then a row of labelled
 * links. Every part is optional, so an article carrying only a paper URL still
 * renders a sensible single button.
 */
export default function PublicationHeader({ article }: PublicationHeaderProps) {
  // `links` supersedes the older single `paperUrl`, which stays supported.
  const links: ArticleLink[] =
    article.links && article.links.length > 0
      ? article.links
      : article.paperUrl
        ? [{ label: "Read publication", url: article.paperUrl }]
        : [];

  const hasAuthors = article.authors && article.authors.length > 0;

  return (
    <div className="flex flex-col gap-5 items-start w-full">
      {article.venue && (
        <div className="bg-[#001f33] px-[7px] py-[3px] flex items-center justify-center">
          <p className="font-mono text-sm font-normal leading-[1.1] text-white uppercase tracking-[0.32px]">
            {article.venue}
          </p>
        </div>
      )}

      {hasAuthors && (
        <div className="flex flex-col gap-2 items-start w-full">
          <p className="font-sans text-base md:text-lg font-normal leading-[1.6] text-[#001f33]">
            {article.authors?.map((author, index) => (
              <span key={author.name}>
                {author.url ? (
                  <a
                    href={author.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 decoration-[#001f33]/40 hover:decoration-[#001f33]"
                  >
                    {author.name}
                  </a>
                ) : (
                  author.name
                )}
                {author.affiliations && author.affiliations.length > 0 && (
                  <sup className="ml-[2px]">
                    {author.affiliations.map((a) => a + 1).join(",")}
                  </sup>
                )}
                {author.isCorresponding && <sup className="ml-[1px]">*</sup>}
                {index < (article.authors?.length ?? 0) - 1 && ", "}
              </span>
            ))}
          </p>

          {article.affiliations && article.affiliations.length > 0 && (
            <p className="font-sans text-sm md:text-base font-normal leading-[1.5] text-[#001f33]/70">
              {article.affiliations.map((affiliation, index) => (
                <span key={affiliation}>
                  <sup>{index + 1}</sup>
                  {affiliation}
                  {index < (article.affiliations?.length ?? 0) - 1 && "   "}
                </span>
              ))}
            </p>
          )}
        </div>
      )}

      {links.length > 0 && (
        <div className="flex gap-3 items-center flex-wrap">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#001f33] flex gap-[10px] items-center justify-center pl-[7px] pr-[9px] py-[5px] hover:bg-opacity-90 transition-colors"
            >
              <p className="font-mono text-sm font-normal leading-[1.1] text-white uppercase tracking-[0.32px]">
                {link.label}
              </p>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0">
                <path
                  d="M1 9L9 1M9 1H1M9 1V9"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
