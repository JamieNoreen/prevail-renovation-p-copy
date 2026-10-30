import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import {
  MobileStickyBar,
  FinalCTA,
  ServiceCard,
  SERVICE_CATEGORIES,
} from "../components/section-rest";
import { Section, SectionLabel, Reveal, CTAButton, BOOKING_URL } from "../components/primitives";
import { HL, RENO_IMG_SITE } from "../components/section-hero";

export const Route = createFileRoute("/who-its-for")({
  head: () => ({
    meta: [
      { title: "Who It's For | The PREVAIL Qualified Lead System™" },
      {
        name: "description",
        content:
          "PREVAIL is built for established Australian renovation businesses that deliver quality workmanship, have an existing reputation, and want better-fit projects — not simply more leads.",
      },
      { property: "og:title", content: "Who It's For | The PREVAIL Qualified Lead System™" },
      {
        property: "og:description",
        content:
          "PREVAIL is built for established Australian renovation businesses that deliver quality workmanship, have an existing reputation, and want better-fit projects — not simply more leads.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/msgsndr/LvVv0JB7C7WPSXPpUzFg/media/4f986784-f4a3-49d9-a29e-20441f483462.webp",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/msgsndr/LvVv0JB7C7WPSXPpUzFg/media/4f986784-f4a3-49d9-a29e-20441f483462.webp",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://prevailph.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Who It's For",
                  item: "https://prevailph.com/who-its-for",
                },
              ],
            },
            {
              "@type": "Service",
              name: "The PREVAIL Qualified Lead System\u2122",
              serviceType: "Digital Marketing and Qualified Lead Generation",
              provider: {
                "@type": "Organization",
                name: "Prevail",
                url: "https://prevailph.com",
              },
              areaServed: { "@type": "Country", name: "Australia" },
              description:
                "Selective acquisition system built for established Australian renovation builders seeking quote-worthy renovation opportunities.",
            },
          ],
        }),
      },
    ],
  }),
  component: WhoItsForPage,
});

/* Approved renovation service categories */
const SECTOR_DESCRIPTIONS: Record<string, string> = {
  "Kitchen Renovations":
    "Cabinetry, layout reconfigurations, stone benchtops, and full kitchen transformations.",
  "Bathroom Renovations":
    "Ensuites, master bathrooms, waterproofing, and structural wet area upgrades.",
  "Home Renovations":
    "Whole-home remodels, ground-floor extensions, second-storey additions, and open-plan reconfigurations.",
  Roofing:
    "Re-roofing, tile-to-Colorbond conversions, architectural roof replacements, and restoration.",
  "Windows & Doors":
    "Architectural glazing, bifold installations, energy-efficient replacements, and alfresco framing.",
  "Home Improvement":
    "Structural renovations, bespoke carpentry, architectural plastering, and premium outdoor living.",
};

const SECTORS = SERVICE_CATEGORIES.map((s) => ({
  title: s.name,
  desc: SECTOR_DESCRIPTIONS[s.name] ?? "",
  image: s.image,
  alt: s.alt,
}));

/* Good fit positive qualification criteria */
const GOOD_FIT_CRITERIA = [
  {
    num: "01",
    title: "Delivers Quality Workmanship",
    desc: "You take pride in your craft. Your projects stand up to scrutiny, your finishes are solid, and you don't cut corners on site.",
  },
  {
    num: "02",
    title: "Has Real Customers & Reputation",
    desc: "You have completed real projects, have genuine client references, and have a local reputation worth protecting in your market.",
  },
  {
    num: "03",
    title: "Has Capacity to Deliver",
    desc: "You have trade capacity or sub-contractor networks ready to take on additional projects without sacrificing quality or blow out timelines.",
  },
  {
    num: "04",
    title: "Wants Better Opportunities, Not Just More Volume",
    desc: "You understand that 5 qualified, quote-worthy opportunities beat 50 tyre-kickers who only care about getting the lowest price.",
  },
];

/* Disqualification criteria */
const NOT_FOR_REASONS = [
  {
    reason: "Starting completely from scratch.",
    explanation:
      "Without completed projects, quality photography, and established operations, advertising alone cannot build your reputation.",
  },
  {
    reason: "Looking for the cheapest leads possible.",
    explanation:
      "If shared, low-cost leads are your priority, our dedicated acquisition model may not be the right fit.",
  },
  {
    reason: "Chasing every type of small job.",
    explanation:
      "If you mainly want handyman work, minor patching, or unrelated small fixes, this system is more than you need.",
  },
  {
    reason: "Already booked beyond your team's capacity.",
    explanation:
      "Generating more demand when you cannot take on work risks damaging your reputation.",
  },
  {
    reason: "Expecting ads to fix poor workmanship or sales.",
    explanation:
      "Advertising cannot compensate for poor workmanship, unreturned calls, or weak sales follow-through.",
  },
];

function WhoItsForPage() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navbar />

      <main>
        {/* HERO */}
        <Section
          id="top"
          className="noise-texture relative overflow-hidden pb-16 pt-32 sm:pb-20 md:pb-24 md:pt-40"
        >
          <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="flex flex-col justify-center lg:col-span-7">
              <div className="hero-rise flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                <span className="h-px w-10 bg-accent" />
                The PREVAIL Qualified Lead System™
              </div>

              <h1 className="hero-rise mt-8 font-display text-[13vw] uppercase leading-[0.88] text-foreground sm:text-[10vw] lg:text-[6.5vw] xl:text-[5.5rem]">
                Built for builders who have <HL variant="block">already proven</HL> themselves.
              </h1>

              <div className="hero-rise mt-8 max-w-xl text-base text-muted-foreground sm:text-lg">
                <p>
                  PREVAIL works with established Australian renovation businesses that have a
                  reputation worth protecting and want better-fit opportunities, not simply more
                  leads.
                </p>
              </div>

              <div className="hero-rise mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CTAButton href={BOOKING_URL}>Book a Strategy Call</CTAButton>
              </div>
            </div>

            <div className="flex flex-col justify-center lg:col-span-5">
              <div className="group hero-scale relative w-full overflow-hidden rounded-lg border border-border aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto min-h-[320px] sm:min-h-[360px] lg:h-[560px] xl:h-[620px]">
                <img
                  src={RENO_IMG_SITE}
                  alt="Australian renovation builder on site reviewing craftsmanship"
                  className="reno-img h-full w-full object-cover object-[50%_25%]"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* WHO PREVAIL WORKS WITH: RENOVATION SECTORS */}
        <Section className="noise-texture bg-panel">
          <SectionLabel num="01">Sectors</SectionLabel>

          <Reveal>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Service Specialisations
            </div>
            <h2 className="mt-4 font-display text-4xl uppercase text-foreground sm:text-6xl md:text-7xl">
              The renovation categories <HL variant="block">we focus on</HL>.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              We build dedicated acquisition campaigns for established Australian trade specialists
              where project value and quality craftsmanship matter.
            </p>
          </Reveal>

          <Reveal className="mt-14">
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {SECTORS.map((s) => (
                <ServiceCard
                  key={s.title}
                  name={s.title}
                  desc={s.desc}
                  image={s.image}
                  alt={s.alt}
                  isSelected={activeCard === s.title}
                  onToggle={() => setActiveCard((prev) => (prev === s.title ? null : s.title))}
                />
              ))}
            </div>
          </Reveal>
        </Section>

        {/* SIGNS A BUSINESS IS A GOOD FIT */}
        <Section className="noise-texture">
          <SectionLabel num="02">Signs of a Fit</SectionLabel>

          <Reveal>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Qualification Criteria
            </div>
            <h2 className="mt-4 font-display text-4xl uppercase text-foreground sm:text-6xl md:text-7xl">
              Signs PREVAIL is the <HL variant="block">right fit</HL>.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Our system performs best when partnered with trade businesses that already have the
              operational foundations in place.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {GOOD_FIT_CRITERIA.map((c, idx) => (
              <Reveal
                key={c.num}
                delay={idx * 80}
                className="card-lift relative flex flex-col justify-between rounded-lg border border-border bg-panel p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="font-display text-3xl text-accent sm:text-4xl">{c.num}</span>
                    <span className="font-sans text-xl font-bold leading-none text-accent">+</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl uppercase tracking-wide text-foreground sm:text-3xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* WHO THE SYSTEM IS NOT FOR */}
        <Section className="noise-texture bg-panel">
          <SectionLabel num="03">Disqualification</SectionLabel>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  Disqualification
                </div>
                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.92] text-foreground sm:text-6xl md:text-7xl">
                  Not for <HL variant="block">every tradie</HL>.
                </h2>
                <div className="mt-6 space-y-4 text-base text-muted-foreground sm:text-lg">
                  <p>
                    We are clear and upfront about who we don't work with. A focused acquisition
                    system requires quality inputs to deliver quality outcomes.
                  </p>
                  <p>
                    If your business isn't set up to quote and deliver at this level, we'd rather
                    tell you before you spend money on marketing.
                  </p>
                </div>

                <div className="mt-8 border-t border-border pt-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Straightforward Partnership
                  </p>
                  <p className="mt-2 font-display text-2xl uppercase tracking-wide text-foreground sm:text-3xl">
                    No vanity metrics. Just honest commercial assessment.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={100} className="space-y-4">
                <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  PREVAIL probably isn't right for you if you're:
                </div>

                {NOT_FOR_REASONS.map((item) => (
                  <div
                    key={item.reason}
                    className="neg-row rounded-lg border border-border bg-background p-5 transition-colors sm:p-6"
                  >
                    <div className="flex items-start gap-3">
                      <span className="neg-cross font-sans text-3xl font-bold leading-none text-muted-foreground">
                        ×
                      </span>
                      <div>
                        <div className="neg-text text-base font-bold text-[#E7FE25] sm:text-lg">
                          {item.reason}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                          {item.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </Section>

        {/* COMMERCIAL FIT */}
        <Section className="noise-texture">
          <SectionLabel num="04">Commercial Sense</SectionLabel>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch">
            <div className="flex flex-col justify-center lg:col-span-5">
              <div
                tabIndex={0}
                className="group relative flex-1 h-full w-full overflow-hidden rounded-lg border border-border aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto min-h-[340px] lg:min-h-full max-h-[620px] xl:max-h-[680px] focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              >
                <img
                  src="/images/commercial-principle.webp"
                  alt="Architectural renovation consultation with builder and client"
                  className="reno-img h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center lg:col-span-7">
              <Reveal>
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  The Commercial Principle
                </div>
                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] text-foreground sm:text-6xl md:text-7xl">
                  We only work where Meta Ads make <HL variant="block">commercial sense</HL>.
                </h2>

                <div className="mt-6 space-y-4 text-base text-muted-foreground sm:text-lg">
                  <p>
                    Renovation projects involve significant investment. Your margins, quote values,
                    and available capacity need to make the numbers work.
                  </p>
                  <p>
                    If the economics don&apos;t stack up, or we can&apos;t generate worthwhile
                    opportunities, we&apos;ll tell you.
                  </p>
                </div>

                <div className="mt-8 rounded-lg border border-border bg-panel p-6 sm:p-8">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    Required Commercial Conditions
                  </div>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="font-sans text-xl font-bold leading-none text-accent">
                        +
                      </span>
                      <span className="text-sm text-foreground sm:text-base">
                        <strong className="font-bold text-foreground">PROJECT VALUE:</strong> Jobs
                        must justify the cost of acquiring them.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-sans text-xl font-bold leading-none text-accent">
                        +
                      </span>
                      <span className="text-sm text-foreground sm:text-base">
                        <strong className="font-bold text-foreground">CAPACITY:</strong> You need
                        room to take on suitable projects.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-sans text-xl font-bold leading-none text-accent">
                        +
                      </span>
                      <span className="text-sm text-foreground sm:text-base">
                        <strong className="font-bold text-foreground">STANDARDS:</strong> Quality
                        and professionalism come before competing on price.
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6 border-t border-border pt-6">
                    <CTAButton href={BOOKING_URL}>See if we're a fit</CTAButton>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* FINAL CTA */}
        <FinalCTA
          image="/images/who-its-for-final-cta.webp"
          imageAlt="Completed luxury architectural residential renovation with custom timber joinery and central courtyard garden"
          kicker="Take the Next Step"
          headline={
            <>
              Ready to see if your business <HL variant="block">is a fit</HL>?
            </>
          }
          supportingCopy="If you run an established Australian renovation business and want to know whether our acquisition model aligns with your territory and capacity, let's have a conversation."
          showAssessment={false}
        />
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
