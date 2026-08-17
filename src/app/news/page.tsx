"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { news, newsCategories } from "@/data/news";
import { navigationItems } from "@/constants/navigation";

const ITEMS_PER_PAGE = 5;

/** Matches against metadata only, so article bodies stay out of the bundle. */
function matchesQuery(article: (typeof news)[number], query: string): boolean {
  if (!query) return true;
  const haystack = [
    article.title,
    article.description,
    article.venue ?? "",
    article.category ?? "",
    article.author ?? "",
    ...(article.tags ?? []),
    ...(article.authors ?? []).map((a) => a.name),
  ]
    .join(" ")
    .toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => haystack.includes(term));
}

export default function NewsPage() {
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
  const [category, setCategory] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      news.filter(
        (article) =>
          (!category || article.category === category) &&
          matchesQuery(article, query),
      ),
    [category, query],
  );

  const displayed = filtered.slice(0, displayCount);
  const hasMore = displayCount < filtered.length;

  // Any change to the filters should start the list from the top again.
  const resetAnd = (fn: () => void) => {
    fn();
    setDisplayCount(ITEMS_PER_PAGE);
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/news" />

      <div className="pt-[64px] md:pt-[80px] min-h-[calc(100vh-200px)]">
        <Section className="py-12 md:py-20">
          <div className="flex flex-col gap-8 md:gap-12 items-start w-full">
            <div className="flex flex-col gap-4 md:gap-[19px] items-start leading-[1.1] text-[#001f33] w-full">
              <p className="font-mono text-base md:text-lg font-normal uppercase">
                news
              </p>
              <h1 className="font-sans text-3xl md:text-[48px] font-normal leading-[1.1] tracking-[-0.96px]">
                Follow Our Research
              </h1>
              <p className="font-sans text-base md:text-xl font-normal leading-[1.4] tracking-[-0.2px] max-w-[800px]">
                We share our research as it develops, from preprints and project
                pages to talks at conferences. Explore what the Centre is
                publishing, presenting, and running.
              </p>
            </div>

            {/* Search sits beside the chips on desktop, below them when narrow. */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center w-full">
              <div className="flex gap-3 md:gap-4 items-center flex-wrap">
                <button
                  onClick={() => resetAnd(() => setCategory(null))}
                  className={`px-4 md:px-6 py-2 md:py-3 font-mono text-xs md:text-sm font-normal border transition-colors ${
                    category === null
                      ? "bg-[#001f33] text-white border-[#001f33]"
                      : "bg-white text-[#001f33] border-[#001f33] hover:bg-gray-50"
                  }`}
                >
                  All
                </button>
                {newsCategories.map((name) => (
                  <button
                    key={name}
                    onClick={() => resetAnd(() => setCategory(name))}
                    className={`px-4 md:px-6 py-2 md:py-3 font-mono text-xs md:text-sm font-normal border transition-colors ${
                      category === name
                        ? "bg-[#001f33] text-white border-[#001f33]"
                        : "bg-white text-[#001f33] border-[#001f33] hover:bg-gray-50"
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>

              <input
                type="search"
                value={query}
                onChange={(e) => resetAnd(() => setQuery(e.target.value))}
                placeholder="Search by title, author, venue or tag"
                aria-label="Search news"
                className="w-full max-w-[520px] border border-[#a3a3a3] px-4 py-3 font-sans text-base text-[#001f33] placeholder:text-[#001f33]/45 focus:outline-none focus:border-[#001f33]"
              />
            </div>
          </div>
        </Section>

        <div className="mx-auto max-w-[1440px] px-5 lg:px-[120px] flex flex-col items-center">
          {displayed.length > 0 ? (
            <>
              {displayed.map((article) => (
                <NewsCard key={article.id} news={article} />
              ))}
              {hasMore && (
                <button
                  onClick={() =>
                    setDisplayCount((prev) =>
                      Math.min(prev + ITEMS_PER_PAGE, filtered.length),
                    )
                  }
                  className="bg-[#001f33] px-4 py-3 flex gap-2 items-center justify-center my-8 md:my-12 hover:bg-[#003355] transition-colors"
                >
                  <p className="font-mono text-[14px] font-normal leading-[1.1] text-white text-center">
                    LOAD MORE
                  </p>
                </button>
              )}
            </>
          ) : (
            <p className="font-sans text-base md:text-xl font-normal text-[#001f33] py-16 md:py-24">
              No articles match that search.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
