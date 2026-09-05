import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { focusLeaders } from "@/data/team";

// Design exploration for placing the scientific broker on the About page. Not in
// the navbar and not linked from anywhere, so it ships only if somebody types it.

const PHOTO = "/images/team/biczyk.webp";
const NAME = "Piotr Biczyk";
const ROLE = "Scientific Broker";
const CONTACT = "ccai@pw.edu.pl";

// The About page renders these in this order, from SECTION_ORDER in about/page.tsx
// plus the header and partner blocks that bracket them.
const ABOUT_STACK = [
  "Our team",
  "Team Leaders",
  "Focus Leaders",
  "Researchers",
  "Collaborators",
  "Administration",
  "Alumni",
  "Our partners",
];

const PROBLEMS = [
  "a model nobody trusts",
  "data you cannot label",
  "a regulator asking why",
  "a pilot that stalled",
];

const STEPS = [
  { n: "01", t: "You describe the problem", d: "One call, no proposal needed. Bring the thing that is not working." },
  { n: "02", t: "Piotr scopes it", d: "He turns it into a research question and finds who inside the Centre should own it." },
  { n: "03", t: "A short feasibility study", d: "Time-boxed, with a written answer about whether this is worth doing." },
  { n: "04", t: "The project starts", d: "A funded collaboration with named people, milestones and a defined outcome." },
];

function PlacementMap({ after, label }: { after: string; label: string }) {
  return (
    <div className="flex flex-col gap-1 w-full max-w-[280px]">
      <p className="font-mono text-sm uppercase tracking-[0.3px] text-[#a3a3a3] mb-2">
        Where it goes
      </p>
      {ABOUT_STACK.map((s) => (
        <div key={s} className="flex flex-col gap-1">
          <div className="border border-[#001f33]/20 px-3 py-2">
            <p className="font-mono text-sm uppercase tracking-[0.3px] text-[#a3a3a3]">
              {s}
            </p>
          </div>
          {s === after && (
            <div className="bg-[#001f33] px-3 py-2">
              <p className="font-mono text-sm uppercase tracking-[0.3px] text-white">
                {label}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// A muted stand-in for the real section above or below, so placement is visible
// rather than only described.
function Ghost({ title, cols }: { title: string; cols: number }) {
  return (
    <div className="opacity-30 select-none" aria-hidden>
      <p className="font-sans text-[32px] md:text-[48px] leading-[1.1] tracking-[-0.96px] text-[#001f33]">
        {title}
      </p>
      <div
        className="grid gap-x-10 gap-y-6 mt-[30px]"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: cols }).map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="aspect-[3/4] w-full bg-[#001f33]/15" />
            <div className="h-3 w-3/4 bg-[#001f33]/15" />
            <div className="h-3 w-1/2 bg-[#001f33]/15" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <p className="font-sans text-[32px] md:text-[48px] leading-[1.1] tracking-[-0.96px] text-[#001f33]">
      {children}
    </p>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#001f33] px-[5px] py-[3px] flex items-center justify-center">
      <p className="font-mono text-sm leading-[1.1] uppercase text-white">{children}</p>
    </div>
  );
}

function Option({
  letter,
  title,
  heading,
  note,
  after,
  children,
}: {
  letter: string;
  title: string;
  heading: string;
  note: string;
  after: string;
  children: ReactNode;
}) {
  return (
    <section className="w-full border-t border-[#001f33]/15 pt-10 pb-24">
      <div className="max-w-[1200px] mx-auto px-5 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 mb-12">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.3px] text-[#a3a3a3]">
              Option {letter}
            </p>
            <h2 className="font-sans text-[28px] md:text-[36px] leading-[1.15] tracking-[-0.72px] text-[#001f33] mt-1">
              {title}
            </h2>
            <p className="font-sans text-base leading-[1.6] tracking-[-0.16px] text-[#001f33] mt-3 max-w-[620px]">
              {note}
            </p>
            <p className="font-mono text-sm uppercase tracking-[0.3px] text-[#001f33] mt-4">
              Section heading: {heading}
            </p>
          </div>
          <PlacementMap after={after} label={heading} />
        </div>
      </div>
      {children}
    </section>
  );
}

// The About page stacks its sections 80px apart inside a 1200px column.
function InSitu({
  above,
  aboveCols,
  below,
  belowCols,
  children,
}: {
  above: string;
  aboveCols: number;
  below: string;
  belowCols: number;
  children: ReactNode;
}) {
  return (
    <div className="border-t border-b border-dashed border-[#001f33]/25 py-10 bg-[#001f33]/[0.02]">
      <div className="max-w-[1200px] mx-auto px-5 xl:px-0 flex flex-col gap-20">
        <Ghost title={above} cols={aboveCols} />
        {children}
        <Ghost title={below} cols={belowCols} />
      </div>
    </div>
  );
}

export default function BrokerPreviewPage() {
  return (
    <main className="min-h-screen bg-white pb-32">
      <div className="max-w-[1200px] mx-auto px-5 xl:px-0 pt-24 pb-16">
        <p className="font-mono text-sm uppercase tracking-[0.3px] text-[#a3a3a3]">
          Internal preview
        </p>
        <h1 className="font-sans text-[40px] md:text-[64px] leading-[1.05] tracking-[-1.28px] text-[#001f33] mt-2">
          Piotr on the About page
        </h1>
        <p className="font-sans text-base leading-[1.6] tracking-[-0.16px] text-[#001f33] mt-6 max-w-[680px]">
          Five ways to give him more room than a card in the team grid. Each option
          shows the section heading it would carry, where it sits in the About stack,
          and the block rendered between muted stand-ins for its real neighbours.
        </p>
        <div className="mt-8 border border-[#001f33] p-5 max-w-[680px]">
          <p className="font-mono text-sm uppercase tracking-[0.3px] text-[#001f33]">
            All copy below is placeholder
          </p>
          <p className="font-sans text-base leading-[1.6] tracking-[-0.16px] text-[#001f33] mt-2">
            Written to show the shape and length each layout needs, not to be used.
            The address is the Centre&apos;s general one, since Piotr&apos;s own is not
            in the repo yet, and the role title is the one you used rather than his.
          </p>
        </div>
      </div>

      <Option
        letter="A"
        title="Spotlight band"
        heading="Work with us"
        note="A dark band that runs the full width of the window, breaking the white column the whole page sits in. It is the only option that changes the page's rhythm rather than adding another block to it, and the only one that needs About's Section wrapper opened up to let a child escape the 1200px container."
        after="Alumni"
      >
        <InSitu above="Alumni" aboveCols={4} below="Our partners" belowCols={3}>
          <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#001f33] py-16">
            <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row gap-10 md:gap-14 items-start">
              <div className="relative w-[220px] md:w-[280px] aspect-[3/4] shrink-0">
                <Image src={PHOTO} alt={NAME} fill className="object-cover" />
              </div>
              <div className="flex flex-col items-start max-w-[620px]">
                <p className="font-mono text-sm uppercase tracking-[0.3px] text-[#a3a3a3]">
                  Work with us
                </p>
                <p className="font-sans text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.88px] text-white mt-3">
                  Bring us a problem you cannot solve with an off-the-shelf model.
                </p>
                <p className="font-sans text-base leading-[1.6] tracking-[-0.16px] text-white mt-6">
                  Piotr is the way into the Centre for companies. He turns a business
                  problem into a research question, finds the people inside who should
                  own it, and stays with the collaboration once it starts.
                </p>
                <p className="font-sans text-xl leading-[1.2] tracking-[-0.2px] text-white mt-8">
                  {NAME}
                </p>
                <p className="font-mono text-sm uppercase tracking-[0.3px] text-[#a3a3a3] mt-1">
                  {ROLE}
                </p>
                <Link
                  href={`mailto:${CONTACT}`}
                  className="font-mono text-sm uppercase tracking-[0.3px] bg-white text-[#001f33] px-5 py-3 mt-8"
                >
                  Start a conversation
                </Link>
              </div>
            </div>
          </div>
        </InSitu>
      </Option>

      <Option
        letter="B"
        title="The bridge"
        heading="From research to industry"
        note="Draws the job instead of describing it. The left column is not invented copy: it is the four focus areas from the section directly above, so the block reads as a continuation of what the reader has just scrolled past rather than a new topic. It is also the only option that explains what a scientific broker is to someone who has never met the term."
        after="Focus Leaders"
      >
        <InSitu above="Focus Leaders" aboveCols={2} below="Researchers" belowCols={4}>
          <div className="flex flex-col gap-0 items-start w-full">
            <SectionHeading>From research to industry</SectionHeading>
            <div className="w-full border border-[#001f33] p-8 md:p-12 mt-[30px]">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-8 items-center">
                <div className="flex flex-col items-start md:items-end gap-3">
                  <p className="font-mono text-sm uppercase tracking-[0.3px] text-[#a3a3a3]">
                    The Centre has
                  </p>
                  <div className="flex flex-col gap-1 md:items-end">
                    {focusLeaders.map((l) => (
                      <p
                        key={l.id}
                        className="font-mono text-sm uppercase tracking-[0.3px] text-[#001f33] md:text-right"
                      >
                        {l.focusArea.replace("\n", " ")}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center shrink-0">
                  <div className="hidden md:block w-full h-px bg-[#001f33]/20 mb-6" />
                  <div className="relative w-[180px] aspect-[3/4]">
                    <Image src={PHOTO} alt={NAME} fill className="object-cover" />
                  </div>
                  <p className="font-sans text-xl leading-[1.2] tracking-[-0.2px] text-[#001f33] mt-4 text-center">
                    {NAME}
                  </p>
                  <p className="font-mono text-sm uppercase tracking-[0.3px] text-[#001f33] mt-1 text-center">
                    {ROLE}
                  </p>
                  <div className="hidden md:block w-full h-px bg-[#001f33]/20 mt-6" />
                </div>

                <div className="flex flex-col items-start gap-3">
                  <p className="font-mono text-sm uppercase tracking-[0.3px] text-[#a3a3a3]">
                    You arrive with
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {PROBLEMS.map((p) => (
                      <Chip key={p}>{p}</Chip>
                    ))}
                  </div>
                  <p className="font-sans text-base leading-[1.6] tracking-[-0.16px] text-[#001f33] mt-2">
                    A deadline, a budget, and a question that does not fit a paper
                    abstract.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </InSitu>
      </Option>

      <Option
        letter="C"
        title="Concierge card"
        heading="Scientific Broker"
        note="The least invasive option. It is a team section like any other, using the same card geometry as the focus leaders, so it needs one line in SECTION_ORDER and nothing else. He gets a heading to himself, which is the whole point, but the page keeps its shape."
        after="Team Leaders"
      >
        <InSitu above="Team Leaders" aboveCols={2} below="Focus Leaders" belowCols={2}>
          <div className="flex flex-col gap-0 items-start w-full">
            <SectionHeading>Scientific Broker</SectionHeading>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-12 mt-[30px] w-full">
              <div className="grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-6 gap-y-3 items-start w-full">
                <div className="w-[140px] sm:w-[170px] md:w-[204px]">
                  <div className="relative aspect-[3/4] w-full">
                    <Image src={PHOTO} alt={NAME} fill className="object-cover" />
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-start min-w-0">
                  <p className="font-sans text-xl leading-[1.2] tracking-[-0.2px] text-[#001f33]">
                    {NAME}
                  </p>
                  <p className="font-mono text-sm md:text-base uppercase leading-[1.4] tracking-[0.3px] text-[#001f33] whitespace-pre-line">
                    {"Scientific Broker\nto Industry"}
                  </p>
                  <p className="font-sans text-base leading-[1.6] tracking-[-0.16px] text-[#001f33]">
                    The first person a company talks to. Piotr scopes the problem,
                    matches it to the right group inside the Centre, and stays with the
                    project once it starts. Bring the thing that is not working, not a
                    finished specification.
                  </p>
                </div>
                <div className="col-span-2 flex flex-col gap-[9px] items-start">
                  <div className="flex gap-1 items-center flex-wrap">
                    <Chip>industry collaboration</Chip>
                    <Chip>project scoping</Chip>
                    <Chip>tech transfer</Chip>
                  </div>
                  <Link
                    href={`mailto:${CONTACT}`}
                    className="font-mono text-sm uppercase tracking-[0.3px] text-[#001f33] underline underline-offset-4"
                  >
                    {CONTACT}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </InSitu>
      </Option>

      <Option
        letter="D"
        title="How it starts"
        heading="Working with the Centre"
        note="Answers the thing that actually stops people writing the email: what happens once I send it. Sitting just above Our partners, it reads as the route by which a reader could become one of those logos. He anchors the block rather than owning every step, which is honest and leaves room for a second broker later."
        after="Alumni"
      >
        <InSitu above="Alumni" aboveCols={4} below="Our partners" belowCols={3}>
          <div className="flex flex-col gap-0 items-start w-full">
            <SectionHeading>Working with the Centre</SectionHeading>
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start mt-[30px]">
              <div className="relative w-[140px] md:w-[170px] aspect-[3/4] shrink-0">
                <Image src={PHOTO} alt={NAME} fill className="object-cover" />
              </div>
              <div className="flex flex-col items-start max-w-[560px]">
                <p className="font-sans text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.64px] text-[#001f33]">
                  Four steps, and the first one is a conversation.
                </p>
                <p className="font-sans text-base leading-[1.6] tracking-[-0.16px] text-[#001f33] mt-4">
                  {NAME}, {ROLE}, runs this for every company that approaches the
                  Centre.
                </p>
                <Link
                  href={`mailto:${CONTACT}`}
                  className="font-mono text-sm uppercase tracking-[0.3px] text-[#001f33] underline underline-offset-4 mt-4"
                >
                  {CONTACT}
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-10 mt-12 w-full">
              {STEPS.map((s) => (
                <div
                  key={s.n}
                  className="flex flex-col items-start border-t border-[#001f33] pt-4"
                >
                  <p className="font-mono text-sm uppercase tracking-[0.3px] text-[#a3a3a3]">
                    {s.n}
                  </p>
                  <p className="font-sans text-xl leading-[1.2] tracking-[-0.2px] text-[#001f33] mt-2">
                    {s.t}
                  </p>
                  <p className="font-sans text-base leading-[1.6] tracking-[-0.16px] text-[#001f33] mt-3">
                    {s.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </InSitu>
      </Option>

      <Option
        letter="E"
        title="In his own words"
        heading="Scientific Broker"
        note="A large portrait and a quote, sized like the page's own headlines. Placed right after Team Leaders it gives the reader a human beat before the grids start, and it is the option that sells a person rather than a service. It is also the one that ages fastest, since a quote dates and a diagram does not."
        after="Team Leaders"
      >
        <InSitu above="Team Leaders" aboveCols={2} below="Focus Leaders" belowCols={2}>
          <div className="flex flex-col gap-0 items-start w-full">
            <SectionHeading>Scientific Broker</SectionHeading>
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mt-[30px]">
              <div className="relative w-full md:w-[380px] aspect-[3/4] shrink-0">
                <Image src={PHOTO} alt={NAME} fill className="object-cover" />
              </div>
              <div className="flex flex-col items-start pt-2">
                <p className="font-sans text-[26px] md:text-[36px] leading-[1.25] tracking-[-0.72px] text-[#001f33]">
                  &ldquo;Companies do not arrive with a research question. They arrive
                  with something that is losing them money, and my job is to work out
                  which part of it is actually a research question.&rdquo;
                </p>
                <p className="font-sans text-xl leading-[1.2] tracking-[-0.2px] text-[#001f33] mt-10">
                  {NAME}
                </p>
                <p className="font-mono text-sm uppercase tracking-[0.3px] text-[#a3a3a3] mt-1">
                  {ROLE}
                </p>
              </div>
            </div>
          </div>
        </InSitu>
      </Option>
    </main>
  );
}
