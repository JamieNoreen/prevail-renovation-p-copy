import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { MobileStickyBar, FinalCTA } from "../components/section-rest";
import { Section, SectionLabel, Reveal, CTAButton, BOOKING_URL } from "../components/primitives";
import { HL } from "../components/section-hero";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | The PREVAIL Qualified Lead System™" },
      {
        name: "description",
        content:
          "Clear, transparent investment for established Australian renovation builders: AUD $2,500/month + Meta ad spend. Discover what is included and how the model works.",
      },
      { property: "og:title", content: "Pricing | The PREVAIL Qualified Lead System™" },
      {
        property: "og:description",
        content:
          "Clear, transparent investment for established Australian renovation builders: AUD $2,500/month + Meta ad spend. Discover what is included and how the model works.",
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
                  name: "Pricing",
                  item: "https://prevailph.com/pricing",
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
                "A single, focused acquisition system built around creating better renovation project opportunities.",
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
  component: PricingPage,
});

/* Approved list of inclusions from the PREVAIL Qualified Lead System */
const INCLUSIONS = [
  "Strategy",
  "Offer development",
  "Facebook + Instagram Ads",
  "Copywriting",
  "Ad creative",
  "Campaign setup",
  "Lead qualification",
  "Tracking",
  "Weekly optimisation",
  "Reporting",
  "Monthly strategy review",
];

function PricingPage() {
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
            {/* Left Column: Text & CTA */}
            <div className="flex flex-col justify-center text-left lg:col-span-7">
              <div className="hero-rise flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                <span className="h-px w-10 bg-accent" />
                Transparent Commercial Model
              </div>

              <h1 className="hero-rise mt-8 font-display text-[13vw] uppercase leading-[0.88] text-foreground sm:text-[10vw] lg:text-[4.25rem] xl:text-[4.35rem]">
                Straightforward investment. <HL variant="block">Zero bloat</HL>.
              </h1>

              <div className="hero-rise mt-8 max-w-xl space-y-4 text-base text-muted-foreground sm:text-lg">
                <p>
                  One focused acquisition system engineered for established Australian renovation
                  businesses.
                </p>
                <p>
                  No hidden add-ons, no complicated tiers, and no paying for marketing services your
                  business doesn't need.
                </p>
              </div>

              <div className="hero-rise mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CTAButton href={BOOKING_URL}>Book a Strategy Call</CTAButton>
              </div>
            </div>

            {/* Right Column: Architectural Renovation Image */}
            <div className="flex flex-col justify-center lg:col-span-5">
              <div className="group relative w-full overflow-hidden rounded-lg border border-border aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto min-h-[320px] sm:min-h-[360px] lg:h-[580px] xl:h-[640px]">
                <img
                  src="/images/pricing-hero.webp"
                  alt="Luxury completed open-plan Australian renovation with marble waterfall island and natural oak cabinetry"
                  className="reno-img h-full w-full object-cover object-center"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* PRIMARY INVESTMENT CARD */}
        <Section className="noise-texture bg-panel">
          <SectionLabel num="01">The Investment</SectionLabel>

          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                Monthly System Investment
              </div>
              <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] text-foreground sm:text-6xl md:text-7xl">
                One system. <HL variant="block">One job</HL>.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Built to create more qualified renovation opportunities — not more leads.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="mt-12">
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-lg bg-background p-8 md:p-12">
              {/* Continuous animated Electric Volt perimeter border */}
              <svg
                className="card-border-svg pointer-events-none absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  rx="8"
                  ry="8"
                  fill="none"
                  stroke="#3A3A3A"
                  strokeWidth="1"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  rx="8"
                  ry="8"
                  fill="none"
                  stroke="#E7FE25"
                  strokeWidth="1.5"
                  pathLength={100}
                  className="border-stroke-runner"
                />
              </svg>

              {/* Card Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-border pb-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent sm:text-sm">
                  The PREVAIL Qualified Lead System™
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Monthly Retainer
                </span>
              </div>

              {/* Price */}
              <div className="relative z-10 mt-8 text-center">
                <div className="font-display text-5xl uppercase leading-none text-foreground sm:text-6xl md:text-7xl">
                  AUD $2,500{" "}
                  <span className="text-xl tracking-wide text-muted-foreground sm:text-2xl md:text-3xl">
                    / month
                  </span>
                </div>
                <div className="mt-3 text-sm font-bold uppercase tracking-widest text-accent">
                  + Meta ad spend
                </div>
              </div>

              {/* Inclusions */}
              <div className="relative z-10 mt-10 border-t border-border pt-6">
                <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  What is included in the monthly investment
                </div>
                <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {INCLUSIONS.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="font-sans text-2xl font-bold leading-none text-accent">
                        +
                      </span>
                      <span className="text-base text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Commercial Clarity */}
              <div className="relative z-10 mt-8 space-y-2 border-t border-border pt-6 text-sm text-muted-foreground sm:text-base">
                <p>No bloated packages.</p>
                <p>No unnecessary tech.</p>
                <p>No vanity metrics dressed up as results.</p>
                <p className="font-semibold text-foreground">
                  One focused system built around creating better project opportunities.
                </p>
              </div>

              <div className="relative z-10 mt-10 text-center">
                <CTAButton href={BOOKING_URL}>Book a Strategy Call</CTAButton>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* WHAT IS PAID SEPARATELY & ENGAGEMENT TERMS */}
        <Section className="noise-texture">
          <SectionLabel num="02">Commercial Details</SectionLabel>

          <Reveal className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="font-display text-4xl uppercase leading-[0.95] text-foreground sm:text-5xl md:text-6xl">
              The details behind the investment.
            </h2>
          </Reveal>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {/* What Is Paid Separately */}
            <Reveal className="card-lift flex flex-col justify-between rounded-lg border border-border bg-panel p-8">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  Media Spend
                </div>
                <h3 className="mt-4 font-display text-3xl uppercase tracking-wide text-foreground sm:text-4xl">
                  What is paid separately
                </h3>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    Meta advertising spend is paid directly to Meta via your own business ad
                    account. PREVAIL does not mark up media costs or take a percentage of
                    advertising spend.
                  </p>
                  <p>
                    Recommended monthly media budgets are agreed during your strategy call, tailored
                    to your strategy, service territory, capacity, and average job values.
                  </p>
                </div>
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  100% Direct to Platform — Zero Agency Markup
                </span>
              </div>
            </Reveal>

            {/* Engagement Alignment */}
            <Reveal
              delay={100}
              className="card-lift flex flex-col justify-between rounded-lg border border-border bg-panel p-8"
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  Alignment & Terms
                </div>
                <h3 className="mt-4 font-display text-3xl uppercase tracking-wide text-foreground sm:text-4xl">
                  Engagement Terms
                </h3>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    PREVAIL works with established renovation businesses where we have verified that
                    Meta Ads make commercial sense.
                  </p>
                  <p>
                    Before any campaign begins, your past projects, market, service territory,
                    capacity, and current lead flow are reviewed on an initial strategy call.
                  </p>
                  <p>
                    Media budgets, launch timelines, and campaign scopes are agreed directly during
                    this call, based on your team&apos;s capacity to quote and deliver.
                  </p>
                </div>
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  Confirmed on Strategy Call — No Assumptions
                </span>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* CLOSING CALL TO ACTION */}
        <FinalCTA
          image={null}
          kicker="Take the Next Step"
          headline={
            <>
              Ready to review your{" "}
              <HL variant="block">numbers and capacity</HL>?
            </>
          }
          supportingCopy="If you run an established Australian renovation business and want to know whether the economics make sense for your business model, let's have a conversation."
          showAssessment={false}
        />
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
