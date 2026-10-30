import { useState, useEffect, type ReactNode } from "react";
import { Section, SectionLabel, CTAButton, BOOKING_URL, Reveal } from "./primitives";
import { Lightbox, type GalleryImage } from "./lightbox";
import {
  HL,
  RENO_IMG_BATH,
  RENO_IMG_SITE,
  RENO_IMG_KITCHEN_CONSULT,
  RENO_IMG_INTERIOR_ALFRESCO,
  RENO_IMG_INTERIOR_ISLAND,
  RENO_IMG_INTERIOR_BUILD,
  RENO_IMG_HANDSHAKE,
} from "./section-hero";

/* Approved renovation service categories with imagery */
export const SERVICE_CATEGORIES = [
  {
    name: "Kitchen Renovations",
    image: "/images/services/kitchen-renovations.jpg",
    alt: "Australian residential kitchen renovation with high-quality cabinetry and island bench",
  },
  {
    name: "Bathroom Renovations",
    image: "/images/services/bathroom-renovations.jpg",
    alt: "Completed residential bathroom renovation with refined fixtures and quality tiling",
  },
  {
    name: "Home Renovations",
    image: "/images/services/home-renovations.jpg",
    alt: "Renovated open-plan Australian residential home interior with natural lighting",
  },
  {
    name: "Roofing",
    image: "/images/services/roofing.jpg",
    alt: "Residential standing-seam metal roofing project showing finished professional workmanship",
  },
  {
    name: "Windows & Doors",
    image: "/images/services/windows-doors.jpg",
    alt: "Residential renovation featuring newly installed windows and glass doors with architectural details",
  },
  {
    name: "Home Improvement",
    image: "/images/services/home-improvement.jpg",
    alt: "Completed residential improvement project with high-quality workmanship in living space",
  },
];

export interface ServiceCardProps {
  name: string;
  desc?: string;
  image: string;
  alt: string;
  isSelected?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function ServiceCard({
  name,
  desc,
  image,
  alt,
  isSelected = false,
  onToggle,
  className = "",
}: ServiceCardProps) {
  return (
    <div
      tabIndex={0}
      role="button"
      aria-expanded={isSelected}
      aria-label={`${name} - tap or hover to view completed renovation project`}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle?.();
        }
      }}
      className={`group relative flex flex-col justify-start bg-background p-6 transition-colors duration-300 hover:bg-panel focus-within:bg-panel focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent cursor-pointer motion-reduce:transition-none sm:p-7 ${
        isSelected ? "bg-panel" : ""
      } ${className}`}
    >
      <div className="flex items-center justify-between w-full">
        <span className="font-display text-xl uppercase tracking-wide text-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-focus-within:-translate-y-0.5 motion-reduce:transition-none sm:text-2xl">
          {name}
        </span>
        <span
          className={`block h-0.5 transition-all duration-300 motion-reduce:transition-none ${
            isSelected
              ? "w-12 bg-accent"
              : "w-8 bg-muted-foreground/60 group-hover:w-12 group-hover:bg-accent group-focus-within:w-12 group-focus-within:bg-accent"
          }`}
        />
      </div>

      {desc && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{desc}</p>
      )}

      {/* Revealed renovation image container below label */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
          isSelected
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="pt-4">
            <div className="overflow-hidden rounded border border-border/60 bg-panel">
              <img
                src={image}
                alt={alt}
                className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] group-focus-within:scale-[1.03] motion-reduce:transition-none motion-reduce:transform-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 07 — WHO IT'S FOR */
export function WhoFor() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const services = SERVICE_CATEGORIES;
  const points = [
    "You already know how to deliver good work.",
    "You have real customers.",
    "You have a reputation worth protecting.",
    "You have capacity for more of the right projects.",
  ];
  return (
    <Section id="who" className="bg-panel">
      <SectionLabel num="07">Who It's For</SectionLabel>
      <Reveal className="mt-8">
        <h2 className="font-display text-4xl uppercase text-foreground sm:text-6xl md:text-7xl">
          Built for renovation businesses that have already{" "}
          <HL variant="block">proven themselves</HL>.
        </h2>
      </Reveal>

      {/* Supporting copy — established, selective, practical */}
      <Reveal className="mt-10 max-w-xl space-y-3">
        {points.map((p) => (
          <p key={p} className="flex items-center gap-3 text-lg text-foreground">
            <span className="font-sans text-2xl font-bold leading-none text-accent">+</span>
            <span>{p}</span>
          </p>
        ))}
      </Reveal>

      {/* Service types — connected boxy editorial grid with reveal-on-interaction */}
      <Reveal className="mt-12">
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard
              key={s.name}
              name={s.name}
              image={s.image}
              alt={s.alt}
              isSelected={activeCard === s.name}
              onToggle={() => setActiveCard((prev) => (prev === s.name ? null : s.name))}
            />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

/* 07 — NOT FOR EVERY TRADIE */
export function NotFor() {
  const reasons = [
    "Starting from scratch.",
    "Looking for the cheapest leads possible.",
    "Chasing every type of job.",
    "Already booked beyond capacity.",
    "Expecting ads to fix poor workmanship, reputation or sales.",
  ];
  return (
    <Section className="noise-texture">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <Reveal>
          <SectionLabel num="08">Not for every tradie</SectionLabel>
          <p className="mt-6 text-lg text-muted-foreground">
            PREVAIL probably isn't right for you if you're:
          </p>
          <ul className="mt-6 space-y-3">
            {reasons.map((r) => (
              <li key={r} className="neg-row flex items-center gap-3 border-b border-border pb-3">
                <span className="neg-cross font-sans text-3xl font-bold leading-none text-muted-foreground">
                  ×
                </span>
                <span className="neg-text text-base text-muted-foreground">{r}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={120}
          className="relative rounded-lg border border-accent bg-panel p-8 md:p-12"
        >
          <h2 className="font-display text-5xl uppercase leading-[0.92] text-foreground sm:text-6xl">
            We only work where we believe Meta Ads make <HL variant="block">commercial sense</HL>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            If we don't think we're a fit, we'll tell you.
          </p>
          <div className="mt-8">
            <CTAButton href={BOOKING_URL}>See if we're a fit</CTAButton>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 09 — WHY PREVAIL */
export function WhyPrevail() {
  const gallery: [GalleryImage, GalleryImage, GalleryImage, GalleryImage] = [
    {
      src: RENO_IMG_HANDSHAKE,
      alt: "Homeowner and contractor reviewing architectural plans on site",
    },
    {
      src: RENO_IMG_INTERIOR_ALFRESCO,
      alt: "Finished alfresco indoor-outdoor dining and living renovation",
    },
    {
      src: RENO_IMG_INTERIOR_ISLAND,
      alt: "Finished luxury open-plan kitchen with marble waterfall island",
    },
    {
      src: RENO_IMG_INTERIOR_BUILD,
      alt: "Carpenters and renovation team crafting bespoke cabinetry on site",
    },
  ];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <Section className="noise-texture bg-panel">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
        {/* Left — strict aligned image collage (50% width) */}
        <Reveal>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Large image — spans two rows on the left */}
            <button
              type="button"
              onClick={() => setLightboxIndex(0)}
              aria-label={`Open image: ${gallery[0].alt}`}
              className="group block row-span-2 cursor-zoom-in overflow-hidden rounded-lg border-0 bg-transparent p-0 text-left"
            >
              <img
                src={gallery[0].src}
                alt={gallery[0].alt}
                className="reno-img h-full w-full object-cover object-[50%_25%]"
                loading="lazy"
              />
            </button>

            {/* Small image — top right */}
            <button
              type="button"
              onClick={() => setLightboxIndex(1)}
              aria-label={`Open image: ${gallery[1].alt}`}
              className="group block cursor-zoom-in overflow-hidden rounded-lg border-0 bg-transparent p-0 text-left"
            >
              <img
                src={gallery[1].src}
                alt={gallery[1].alt}
                className="reno-img aspect-[4/3] w-full object-cover grayscale"
                loading="lazy"
              />
            </button>

            {/* Small image — bottom right */}
            <button
              type="button"
              onClick={() => setLightboxIndex(2)}
              aria-label={`Open image: ${gallery[2].alt}`}
              className="group block cursor-zoom-in overflow-hidden rounded-lg border-0 bg-transparent p-0 text-left"
            >
              <img
                src={gallery[2].src}
                alt={gallery[2].alt}
                className="reno-img aspect-[4/3] w-full object-cover grayscale"
                loading="lazy"
              />
            </button>

            {/* Wide image — full span bottom */}
            <button
              type="button"
              onClick={() => setLightboxIndex(3)}
              aria-label={`Open image: ${gallery[3].alt}`}
              className="group block col-span-2 cursor-zoom-in overflow-hidden rounded-lg border-0 bg-transparent p-0 text-left"
            >
              <img
                src={gallery[3].src}
                alt={gallery[3].alt}
                className="reno-img aspect-[16/6] w-full object-cover object-[50%_35%] grayscale"
                loading="lazy"
              />
            </button>
          </div>
        </Reveal>

        {/* Right — large typography and supporting content (50% width) */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <SectionLabel num="09">Why PREVAIL</SectionLabel>
          </Reveal>

          <Reveal className="mt-6 sm:mt-8">
            <h2 className="font-display text-5xl uppercase leading-[0.9] text-foreground sm:text-6xl md:text-7xl xl:text-[4.5rem]">
              Your best ad is the
              <br />
              <HL variant="block">business you've</HL>
              <br />
              <HL variant="block">already built.</HL>
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-6 space-y-1 text-base text-muted-foreground sm:text-lg">
            <p>You built something worth being proud of.</p>
            <p>We're here to help more of the right people see it.</p>
          </Reveal>

          {/* Bottom supporting statements with dividers */}
          <Reveal delay={160} className="mt-10 border-t border-border pt-8 sm:mt-12 sm:pt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4 md:gap-6">
              <div>
                <p className="font-display text-3xl uppercase leading-[1.0] text-foreground sm:text-3xl md:text-4xl">
                  Finished
                  <br />
                  projects.
                </p>
              </div>

              <div className="border-l-0 border-t border-border pt-6 pl-0 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0 md:pl-6">
                <p className="font-display text-3xl uppercase leading-[1.0] text-foreground sm:text-3xl md:text-4xl">
                  Happy
                  <br />
                  customers.
                </p>
              </div>

              <div className="border-l-0 border-t border-border pt-6 pl-0 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0 md:pl-6">
                <p className="font-display text-3xl uppercase leading-[1.0] text-foreground sm:text-3xl md:text-4xl">
                  Claim less.
                  <br />
                  <HL variant="block">Prove more.</HL>
                </p>
              </div>
            </div>

            <div className="mt-8 font-display text-3xl uppercase tracking-wide text-accent sm:text-4xl md:text-5xl">
              That's PREVAIL.
            </div>
          </Reveal>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={gallery}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </Section>
  );
}

/* 09 — INVESTMENT */
export function Investment() {
  const included = [
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
  return (
    <Section id="investment">
      <SectionLabel num="10">Investment</SectionLabel>

      {/* System → Outcome hierarchy leads the panel before the price */}
      <Reveal className="mt-8">
        <h2 className="mx-auto max-w-3xl text-center font-display text-4xl uppercase leading-[0.95] text-foreground sm:text-6xl md:text-7xl">
          One system. <HL variant="block">One job</HL>.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-center text-lg text-muted-foreground">
          Built to create more qualified renovation opportunities — not more leads.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-12">
        <div className="price-card relative mx-auto max-w-3xl overflow-hidden rounded-lg border-2 border-border bg-panel p-8 md:p-12">
          {/* System label */}
          <div className="relative z-10 flex items-center justify-between border-b border-border pb-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent sm:text-sm">
              PREVAIL Qualified Lead System™
            </span>
          </div>

          {/* Investment */}
          <div className="relative z-10 mt-8 text-center">
            <div className="font-display text-5xl uppercase leading-none text-foreground sm:text-5xl md:text-5xl">
              AUD $2,500{" "}
              <span className="text-2xl tracking-wide text-muted-foreground sm:text-3xl">
                / month
              </span>
            </div>

            <div className="mt-2 text-sm font-bold uppercase tracking-widest text-accent">
              + Meta ad spend
            </div>
          </div>

          {/* What's included */}
          <div className="relative z-10 mt-10 border-t border-border pt-6">
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Included
            </div>
            <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {included.map((inc) => (
                <li key={inc} className="flex items-center gap-3">
                  <span className="font-sans text-2xl font-bold leading-none text-accent">+</span>
                  <span className="text-base text-foreground">{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 mt-8 space-y-3 text-base text-muted-foreground">
            <p>No bloated package.</p>
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
  );
}

/* 11 — MEET THE TEAM */
export function Team() {
  const members = [
    {
      name: "Dane Sanchez",
      role: "Founder & Brand Strategist",
      image:
        "https://assets.cdn.filesafe.space/LvVv0JB7C7WPSXPpUzFg/media/6ada0792a0c3fa1f7d73bf39.webp",
    },
    {
      name: "Nikki Sanchez",
      role: "Head Of Finance",
      image:
        "https://storage.googleapis.com/msgsndr/LvVv0JB7C7WPSXPpUzFg/media/053205c8-3570-4c0f-aa0d-ee1362c4f1a8.webp",
    },
    {
      name: "JV Ancheta",
      role: "Head of Advertising",
      image:
        "https://storage.googleapis.com/msgsndr/LvVv0JB7C7WPSXPpUzFg/media/895d9ea5-505d-4647-ba1b-31885a573d3e.webp",
    },
    {
      name: "Bark Aninang",
      role: "Head of Operations",
      image:
        "https://storage.googleapis.com/msgsndr/LvVv0JB7C7WPSXPpUzFg/media/ea5f29e2-57a1-4dd7-9454-af9b1619c0a7.webp",
    },
    {
      name: "Jam Ferrer",
      role: "Brand & Creative Designer",
      image:
        "https://storage.googleapis.com/msgsndr/LvVv0JB7C7WPSXPpUzFg/media/5f49a904-b2d7-4dbf-9da3-20e91e801b7f.webp",
    },
  ];

  return (
    <Section className="noise-texture">
      <SectionLabel num="11">Meet the Team</SectionLabel>
      <Reveal className="mt-8">
        <h2 className="font-display text-4xl uppercase text-foreground sm:text-6xl md:text-7xl">
          MEET THE TEAM
        </h2>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          The people behind the PREVAIL Qualified Lead System.
        </p>
      </Reveal>

      {/* Editorial team profiles — 3 + centred 2 on desktop, no card chrome */}
      <Reveal delay={100} className="mt-14">
        <div className="mx-auto grid max-w-4xl grid-cols-1 justify-items-center gap-y-12 sm:grid-cols-2 lg:grid-cols-6">
          {members.map((m, i) => (
            <div
              key={m.name}
              className={`flex flex-col items-center text-center lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""}`}
            >
              <div className="overflow-hidden rounded-full border-3 border-border">
                <img
                  src={m.image}
                  alt={m.name}
                  className="aspect-square w-40 object-cover sm:w-44 md:w-48"
                  loading="lazy"
                />
              </div>
              <div className="mt-5 font-display text-2xl uppercase tracking-wide text-foreground">
                {m.name}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {m.role}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

/* 10 — FINAL CTA */
export interface FinalCTAProps {
  id?: string;
  className?: string;
  bgClassName?: string;
  image?: string | null;
  imageAlt?: string;
  kicker?: string;
  headline?: ReactNode;
  supportingCopy?: ReactNode;
  showAssessment?: boolean;
  assessmentIntro?: string;
  assessmentAreas?: string[];
  evaluationText?: ReactNode;
  ctaText?: string;
  reassuranceText?: string;
}

export function FinalCTA({
  id = "book",
  className = "",
  bgClassName = "bg-panel",
  image = "/images/home-final-cta.webp",
  imageAlt = "Completed luxury Australian home extension and alfresco timber deck at dusk",
  kicker = "You've already built the hard part.",
  headline = (
    <>
      <span className="sm:block">Now let&apos;s help more of the</span>{" "}
      <span className="sm:block">
        <HL variant="block">
          <span className="whitespace-nowrap">right homeowners</span>
        </HL>{" "}
        find it.
      </span>
    </>
  ),
  supportingCopy = "If you're running an established renovation business and want a more consistent way to create quality project opportunities, let's have a conversation.",
  showAssessment = true,
  assessmentIntro = "We'll look at your:",
  assessmentAreas = ["Projects", "Market", "Service area", "Capacity", "Current lead flow"],
  evaluationText = (
    <>
      <p>
        Then we&apos;ll determine whether Meta Ads actually make sense for your business. If
        we&apos;re a fit, we&apos;ll show you the next step. If we&apos;re not, we&apos;ll tell you.
      </p>
    </>
  ),
  ctaText = "Book a Strategy Call",
  reassuranceText = "No hard sell. Just a proper business conversation.",
}: FinalCTAProps = {}) {
  return (
    <Section id={id} className={`noise-texture ${bgClassName} ${className}`}>
      <div className="mx-auto max-w-5xl">
        {/* Wide architectural renovation photograph at top */}
        {image && (
          <Reveal className="group mb-10 overflow-hidden rounded-lg border border-[#3A3A3A] sm:mb-14">
            <img
              src={image}
              alt={imageAlt}
              className="reno-img aspect-[16/7] sm:aspect-[21/9] w-full object-cover object-center max-h-[380px] sm:max-h-[460px]"
              loading="lazy"
            />
          </Reveal>
        )}

        {/* Structured CTA Panel Header Content */}
        <div className="mx-auto max-w-4xl lg:max-w-5xl text-center">
          {/* Centred introductory label */}
          {kicker && (
            <Reveal>
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                {kicker}
              </div>
            </Reveal>
          )}

          {/* Centred headline */}
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-3xl uppercase leading-[0.95] text-foreground sm:text-6xl md:text-7xl lg:text-[5rem]">
              {headline}
            </h2>
          </Reveal>

          {/* Centred supporting copy */}
          {supportingCopy && (
            <Reveal delay={120} className="mt-5 sm:mt-7">
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#A8A8A8] sm:text-lg">
                {supportingCopy}
              </p>
            </Reveal>
          )}
        </div>

        {/* Restrained two-column outlined assessment panel */}
        {showAssessment && assessmentAreas && assessmentAreas.length > 0 && (
          <Reveal delay={160} className="mt-10 sm:mt-12 w-full">
            <div className="w-full rounded-lg border border-[#3A3A3A] bg-[#1F1F1F]/60 p-6 sm:p-8 md:p-10 text-left">
              <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1px_1fr] items-center gap-6 sm:gap-8 md:gap-10">
                {/* Left column: Assessment areas */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A8A8]">
                    {assessmentIntro}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-display text-2xl uppercase tracking-wide text-foreground sm:text-3xl lg:text-[2.1rem] leading-tight">
                    {assessmentAreas.map((area, idx) => {
                      const cleanArea = area.replace(/\.$/, "").trim().toUpperCase();
                      return (
                        <span key={idx} className="whitespace-nowrap">
                          {cleanArea}.
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Vertical divider on desktop, hidden on mobile */}
                <div
                  className="hidden md:block w-px self-stretch bg-[#3A3A3A]"
                  aria-hidden="true"
                />

                {/* Right column: Commercial evaluation explanation */}
                {evaluationText && (
                  <div className="text-sm sm:text-base leading-relaxed text-[#A8A8A8] space-y-2">
                    {typeof evaluationText === "string" ? <p>{evaluationText}</p> : evaluationText}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        )}

        {/* Centred primary CTA and reassurance */}
        <Reveal delay={200} className="mt-8 sm:mt-10 flex flex-col items-center gap-4 text-center">
          <CTAButton
            href={BOOKING_URL}
            className="px-8 py-4 text-sm font-bold uppercase tracking-wider"
          >
            {ctaText}
          </CTAButton>
          {reassuranceText && (
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#A8A8A8]">
              {reassuranceText}
            </p>
          )}
        </Reveal>
      </div>
    </Section>
  );
}

/* MOBILE STICKY BAR */
export function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/90 p-3 backdrop-blur-md transition-all duration-300 md:hidden ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn flex w-full items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-bold uppercase tracking-wide"
      >
        Book a Strategy Call
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
