import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { MobileStickyBar, FinalCTA } from "../components/section-rest";
import { Section, SectionLabel, Reveal, CTAButton, BOOKING_URL } from "../components/primitives";
import { HL } from "../components/section-hero";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works | The PREVAIL Qualified Lead System™" },
      {
        name: "description",
        content:
          "Discover how the PREVAIL Qualified Lead System™ works for established Australian renovation builders: Strategy, Offer, Creative, Meta Ads, Qualification, and Optimisation.",
      },
      { property: "og:title", content: "How It Works | The PREVAIL Qualified Lead System™" },
      {
        property: "og:description",
        content:
          "Discover how the PREVAIL Qualified Lead System™ works for established Australian renovation builders: Strategy, Offer, Creative, Meta Ads, Qualification, and Optimisation.",
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
                  name: "How It Works",
                  item: "https://prevailph.com/how-it-works",
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
                "A focused six-stage acquisition system that creates more qualified renovation opportunities for established Australian renovation businesses through Facebook and Instagram advertising.",
              offers: {
                "@type": "Offer",
                priceCurrency: "AUD",
                price: "2500",
                description: "AUD $2,500/month + Meta ad spend",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: HowItWorksPage,
});

/* Six core delivery stages from approved PREVAIL Qualified Lead System */
const STAGES = [
  {
    num: "01",
    title: "STRATEGY",
    subtitle: "Targeting & Market Definition",
    summary: "We identify the jobs, homeowners and locations worth targeting.",
    description:
      "We begin by defining the renovation projects and service areas that make commercial sense for your business. Instead of broad, generic campaigns, we align your acquisition with your team's capacity, high-margin service types (kitchens, bathrooms, full-home transformations, additions), and preferred council areas.",
    bullets: [
      "Target council areas & preferred project radius",
      "Identification of high-value renovation job scopes",
      "Capacity alignment based on current team workload",
    ],
  },
  {
    num: "02",
    title: "OFFER",
    subtitle: "Commercial Positioning",
    summary: "We give homeowners a clear reason to enquire.",
    description:
      "Serious homeowners considering substantial renovation work don't respond to cheap gimmicks or discounted quotes. We structure a professional proposition anchored around your craftsmanship, reliability, and consultative process — positioning your business as the trusted choice, not the lowest bid.",
    bullets: [
      "Clear commercial proposition for serious homeowners",
      "Protection against race-to-the-bottom price competition",
      "Expectation-setting around build quality and investment",
    ],
  },
  {
    num: "03",
    title: "CREATIVE",
    subtitle: "Editorial Project Showcasing",
    summary:
      "We turn your workmanship, reputation and real projects into advertising people actually want to look at.",
    description:
      "We turn your real portfolio, completed projects, and on-site craft into clean, editorial-grade creative. Homeowners looking for major renovation work respond to authentic workmanship, real transformations, and quality finishes — not generic stock photography or flashy agency graphics.",
    bullets: [
      "Showcasing of real completed projects and craftsmanship",
      "Authentic Australian renovation photography and video",
      "Direct, transparent copywriting with zero hype",
    ],
  },
  {
    num: "04",
    title: "META ADS",
    subtitle: "Facebook + Instagram Infrastructure",
    summary: "We build and manage your Facebook + Instagram campaigns.",
    description:
      "We build, launch, and manage your Meta advertising campaigns from end to end. Targeting, audience segmentation, budget distribution, and technical tracking are handled with discipline so your team never has to spend evenings learning ads or managing ad accounts.",
    bullets: [
      "Targeted placement across Facebook and Instagram feeds",
      "Demographic and local geo-targeting tailored to your suburbs",
      "Disciplined campaign budget pacing and spend management",
    ],
  },
  {
    num: "05",
    title: "QUALIFICATION",
    subtitle: "Intent & Scope Filtering",
    summary:
      "We structure enquiries to help separate serious project opportunities from tyre-kickers.",
    description:
      "Generating more volume is useless if it consumes your quoting time with small repair jobs or tyre-kickers. We build qualification mechanisms directly into the enquiry flow, capturing project scope, location, intended timeframe, and realistic budget expectations before enquiries reach you.",
    bullets: [
      "Screening questions for renovation scope, timeline and budget",
      "Filtering out low-margin repairs and tire-kickers",
      "Structured enquiries delivered ready for commercial quoting",
    ],
  },
  {
    num: "06",
    title: "OPTIMISATION",
    subtitle: "Tracking & Ongoing Refinement",
    summary: "We track what matters, learn from the market and keep improving.",
    description:
      "We focus on commercial metrics: lead quality, cost per qualified conversation, and quotation fit. Every week we adjust creative and audiences based on real enquiry feedback; every month we conduct a strategic review to adapt to seasonal demand and keep results consistent.",
    bullets: [
      "Weekly performance tracking focused on quote-worthy jobs",
      "Continuous creative and audience optimization",
      "Monthly strategic reviews to calibrate with your pipeline",
    ],
  },
];

/* 4-step reframe pipeline */
const PIPELINE_STEPS = [
  {
    step: "01",
    label: "TARGET",
    desc: "Define the renovation scopes, budgets, and service areas worth pursuing.",
  },
  {
    step: "02",
    label: "ATTRACT",
    desc: "Put real workmanship and clear positioning in front of local homeowners.",
  },
  {
    step: "03",
    label: "QUALIFY",
    desc: "Filter out poor-fit enquiries and tyre-kickers before they reach your schedule.",
  },
  {
    step: "04",
    label: "CONVERT",
    desc: "Create qualified project opportunities your team actually wants to quote.",
  },
];

/* How we get started timeline */
const ONBOARDING_STEPS = [
  {
    num: "01",
    title: "Strategy Call",
    timeline: "20 Minutes",
    desc: "We look at your past projects, market, service territory, capacity, and current lead flow to determine whether Meta Ads make commercial sense for your business.",
  },
  {
    num: "02",
    title: "Campaign Build",
    timeline: "Week 1–2",
    desc: "We develop your targeting strategy, offer, creative assets, copywriting, and qualification funnel. Everything is reviewed and approved by you before anything goes live.",
  },
  {
    num: "03",
    title: "Launch & Flow",
    timeline: "Ongoing",
    desc: "Campaigns launch across Facebook and Instagram. Qualified enquiries flow directly to your team, with weekly optimizations and monthly strategy reviews.",
  },
];

/* Interactive Six-Stage Process Walkthrough — Two-column sticky layout */
function InteractiveDeliveryStages() {
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const [focusedStage, setFocusedStage] = useState<string | null>(null);

  const isExpanded = (num: string) => {
    if (selectedStage === num) return true;
    if (hoveredStage === num) return true;
    if (focusedStage === num) return true;
    return false;
  };

  const handleStageClick = (num: string) => {
    setSelectedStage((prev) => (prev === num ? null : num));
  };

  return (
    <Section id="stages" className="noise-texture">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start xl:gap-16">
        {/* LEFT COLUMN: STICKY INTRODUCTION */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <SectionLabel num="02">Delivery Stages</SectionLabel>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              The Six Delivery Stages
            </div>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.92] text-foreground sm:text-6xl md:text-7xl">
              One connected system. <HL variant="block">Six stages</HL>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We don't sell disconnected marketing pieces. Each stage works together to attract the
              right homeowners, filter out tyre-kickers, and protect your quoting time.
            </p>

            <div className="mt-8 hidden items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-muted-foreground/80 lg:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Click or hover any stage to expand details</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SIX INTERACTIVE STAGES */}
        <div className="lg:col-span-7">
          <div className="border-t border-[#3A3A3A]">
            {STAGES.map((s) => {
              const isSelected = selectedStage === s.num;
              const isFocused = focusedStage === s.num;
              const isPermanent = isSelected || isFocused;

              return (
                <div
                  key={s.num}
                  className={`group border-b border-[#3A3A3A] transition-colors duration-200 ${
                    isPermanent ? "bg-panel/40" : "hover:bg-panel/20"
                  }`}
                  onPointerEnter={() => setHoveredStage(s.num)}
                  onPointerLeave={() => setHoveredStage(null)}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={isPermanent || hoveredStage === s.num}
                    aria-controls={`stage-content-${s.num}`}
                    onClick={() => handleStageClick(s.num)}
                    onFocus={() => setFocusedStage(s.num)}
                    onBlur={() => setFocusedStage(null)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleStageClick(s.num);
                      }
                    }}
                    className="w-full cursor-pointer px-4 py-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent sm:px-6 sm:py-7 select-none"
                  >
                    {/* Collapsed row: Number and Title on one horizontal line */}
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:gap-x-4">
                        <span
                          className={`font-display text-2xl transition-colors duration-200 sm:text-3xl ${
                            isPermanent
                              ? "text-accent"
                              : "text-muted-foreground group-hover:text-accent"
                          }`}
                        >
                          {s.num}
                        </span>
                        <h3 className="font-display text-2xl uppercase tracking-wide text-foreground sm:text-3xl">
                          {s.title}
                        </h3>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/75">
                          {s.subtitle}
                        </span>
                      </div>

                      {/* Expand indicator: subtle +/- */}
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center text-muted-foreground">
                        <span
                          className={`font-sans text-xl font-bold leading-none transition-transform duration-300 motion-reduce:transition-none ${
                            isPermanent
                              ? "rotate-45 text-accent"
                              : "group-hover:rotate-45 group-hover:text-accent"
                          }`}
                        >
                          +
                        </span>
                      </div>
                    </div>

                    {/* Concise summary beneath the header line */}
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {s.summary}
                    </p>

                    {/* Expanded content */}
                    <div
                      id={`stage-content-${s.num}`}
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                        isPermanent
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="space-y-6 pt-6">
                          <p className="border-l-2 border-accent/40 pl-4 text-base leading-relaxed text-foreground/90 sm:text-lg">
                            {s.description}
                          </p>

                          <div className="rounded-md border border-[#3A3A3A] bg-background/60 p-5 sm:p-6">
                            <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                              Included In This Stage
                            </div>
                            <ul className="space-y-3">
                              {s.bullets.map((b) => (
                                <li key={b} className="flex items-start gap-3">
                                  <span className="font-sans text-lg font-bold leading-none text-accent">
                                    +
                                  </span>
                                  <span className="text-sm leading-relaxed text-foreground sm:text-base">
                                    {b}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navbar />

      <main>
        {/* HERO SECTION */}
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
                How the system <HL variant="block">actually works</HL>.
              </h1>

              <div className="hero-rise mt-8 max-w-xl space-y-4 text-base text-muted-foreground sm:text-lg">
                <p>One focused acquisition channel. One objective.</p>
                <p>
                  A disciplined system engineered to generate qualified renovation opportunities
                  worth quoting for established Australian renovation builders.
                </p>
              </div>

              <div className="hero-rise mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CTAButton href={BOOKING_URL}>Book a Strategy Call</CTAButton>
              </div>
            </div>

            <div className="flex flex-col justify-center lg:col-span-5">
              <div className="group hero-scale relative w-full overflow-hidden rounded-lg border border-border aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto min-h-[320px] sm:min-h-[360px] lg:h-[580px] xl:h-[640px]">
                <img
                  src="/images/how-it-works-hero.jpg"
                  alt="Australian renovation builder reviewing architectural blueprint plans at an active residential renovation site"
                  className="reno-img h-full w-full object-cover object-[50%_35%]"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* 4-PHASE REFRAME PIPELINE */}
        <Section className="noise-texture bg-panel">
          <SectionLabel num="01">The Architecture</SectionLabel>

          <Reveal>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Acquisition Architecture
            </div>
            <h2 className="mt-4 font-display text-4xl uppercase text-foreground sm:text-6xl md:text-7xl">
              From market impression to <HL variant="block">qualified opportunity</HL>.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              We structure the entire journey between a local homeowner discovering your work and a
              structured enquiry landing in your inbox.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PIPELINE_STEPS.map((p, idx) => (
              <Reveal
                key={p.step}
                delay={idx * 80}
                className="group card-lift relative flex flex-col justify-between rounded-md border border-border bg-background p-6"
              >
                <div>
                  <span className="font-display text-4xl text-accent">{p.step}</span>
                  <h3 className="mt-5 font-display text-2xl uppercase tracking-wide text-foreground">
                    {p.label}
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground">{p.desc}</p>
                </div>
                <span className="accent-line mt-6" />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* THE SIX DELIVERY STAGES — INTERACTIVE TWO-COLUMN WALKTHROUGH */}
        <InteractiveDeliveryStages />

        {/* ONBOARDING TIMELINE / HOW WE START */}
        <Section className="noise-texture bg-[#1F1F1F]">
          <SectionLabel num="03">Getting Started</SectionLabel>

          <Reveal>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              The Process
            </div>
            <h2 className="mt-4 font-display text-4xl uppercase text-foreground sm:text-6xl md:text-7xl">
              How we <HL variant="block">get started</HL>.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              A straightforward, transparent onboarding process designed around respect for your
              time and your business.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ONBOARDING_STEPS.map((o, idx) => (
              <Reveal
                key={o.num}
                delay={idx * 80}
                className="card-lift relative flex flex-col justify-between rounded-lg border border-border bg-background p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="font-display text-3xl text-accent">{o.num}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {o.timeline}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl uppercase tracking-wide text-foreground">
                    {o.title}
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground">{o.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* CLOSING CALL TO ACTION */}
        <FinalCTA
          bgClassName="bg-[#2A2A2A]"
          image="/images/how-it-works-final-cta.webp"
          imageAlt="Completed light-filled open-plan architectural renovation with exposed timber trusses and expansive garden glazing"
          kicker="Take the Next Step"
          headline={
            <>
              Ready to see how the system{" "}
              <HL variant="block">fits your business</HL>?
            </>
          }
          supportingCopy="If you run an established Australian renovation business and want a disciplined system to generate opportunities worth quoting, let's schedule an initial strategy call."
          showAssessment={false}
        />
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
