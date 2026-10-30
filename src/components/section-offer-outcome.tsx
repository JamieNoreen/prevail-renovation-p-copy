import { useState, useEffect, useRef } from "react";
import { Section, SectionLabel, Reveal } from "./primitives";
import { Lightbox, type GalleryImage } from "./lightbox";
import { HL, RENO_IMG_OUTDOOR_LIVING } from "./section-hero";

/* 04 — THE OFFER */
export function Offer() {
  const stages = [
    {
      n: "01",
      t: "STRATEGY",
      d: "We identify the jobs, homeowners and locations worth targeting.",
    },
    {
      n: "02",
      t: "OFFER",
      d: "We give homeowners a clear reason to enquire.",
    },
    {
      n: "03",
      t: "CREATIVE",
      d: "We turn your workmanship, reputation and real projects into advertising people actually want to look at.",
    },
    {
      n: "04",
      t: "META ADS",
      d: "We build and manage your Facebook + Instagram campaigns.",
    },
    {
      n: "05",
      t: "QUALIFICATION",
      d: "We structure enquiries to help separate serious project opportunities from tyre-kickers.",
    },
    {
      n: "06",
      t: "OPTIMISATION",
      d: "We track what matters, learn from the market and keep improving.",
    },
  ];
  return (
    <Section id="offer" className="bg-panel">
      <SectionLabel num="04">The Offer</SectionLabel>
      <Reveal className="mt-6">
        <div className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.2em] text-accent">
          <span>The PREVAIL Qualified Lead System™</span>
        </div>
      </Reveal>
      <Reveal className="mt-4">
        <h2 className="font-display text-5xl uppercase leading-[0.9] text-foreground sm:text-7xl md:text-8xl">
          One system. One job.
        </h2>
      </Reveal>
      <Reveal className="mt-5">
        <p className="font-display text-2xl uppercase tracking-wide text-foreground sm:text-3xl md:text-4xl">
          Create more <HL variant="block">qualified renovation opportunities</HL>.
        </p>
      </Reveal>
      <Reveal className="mt-8 max-w-2xl space-y-4 text-lg text-muted-foreground">
        <p>We don't sell you a pile of marketing services you don't need.</p>
        <p>We focus on one acquisition channel and make it work harder.</p>
      </Reveal>

      {/* One connected system — six components as a single job schedule.
          Numbers are subordinate; the system + outcome above carry the hierarchy. */}
      <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {stages.map((s, i) => (
          <Reveal key={s.n} delay={i * 60} className="group flex">
            <div
              tabIndex={0}
              className="relative flex w-full flex-col justify-between bg-panel p-6 transition-colors duration-300 ease-out group-hover:bg-[#E7FE25] group-focus-within:bg-[#E7FE25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F1F1F] motion-reduce:transition-none sm:p-7"
            >
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-2xl leading-none text-muted-foreground transition-colors duration-300 group-hover:text-[#1F1F1F]/75 group-focus-within:text-[#1F1F1F]/75 motion-reduce:transition-none sm:text-3xl">
                    {s.n}
                  </span>
                  <h3 className="font-display text-xl uppercase tracking-wide text-foreground transition-colors duration-300 group-hover:text-[#1F1F1F] group-focus-within:text-[#1F1F1F] motion-reduce:transition-none sm:text-2xl">
                    {s.t}
                  </h3>
                </div>

                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-[#1F1F1F] group-focus-within:text-[#1F1F1F] motion-reduce:transition-none sm:text-[0.95rem]">
                  {s.d}
                </p>
              </div>

              {/* Small horizontal divider — transitions to Grungy Black against Electric Volt */}
              <div className="mt-6">
                <span className="block h-0.5 w-10 bg-muted-foreground/60 transition-colors duration-300 group-hover:bg-[#1F1F1F]/50 group-focus-within:bg-[#1F1F1F]/50 motion-reduce:transition-none" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* 05 — THE OUTCOME */
export function Outcome() {
  const positives = [
    "Quoting better-fit projects.",
    "Planning your workload.",
    "Keeping your team productive.",
    "Building the business you actually want.",
  ];

  return (
    <Section className="noise-texture">
      <SectionLabel num="05">The Outcome</SectionLabel>

      <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-12 md:gap-8 lg:gap-12 xl:gap-16">
        {/* Left Column: Content */}
        <Reveal className="flex flex-col justify-center md:col-span-7 lg:col-span-7">
          {/* Large, left-aligned display headline */}
          <h2 className="font-display text-5xl uppercase leading-[0.92] text-foreground sm:text-6xl md:text-5xl lg:text-7xl xl:text-8xl tracking-tight">
            <span className="block">
              <HL variant="block">Less guessing</HL>
            </span>
            about where the next good job comes from.
          </h2>

          {/* Supporting paragraphs */}
          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>The goal isn&apos;t to replace your referrals.</p>
            <p>It&apos;s so you&apos;re not relying on them alone.</p>
            <p>
              A focused acquisition system gives your business another way to create opportunities
              when you have capacity to grow.
            </p>
          </div>

          {/* Benefits section */}
          <div className="mt-10 sm:mt-12">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-foreground sm:text-sm">
              So you can spend more time:
            </h3>

            {/* Benefits list with Electric Volt plus signs */}
            <ul className="mt-5 space-y-3.5">
              {positives.map((p) => (
                <li key={p} className="flex items-start gap-3.5">
                  <span
                    className="font-sans text-xl font-bold leading-none text-accent select-none sm:text-2xl"
                    aria-hidden="true"
                  >
                    +
                  </span>
                  <span className="text-base leading-snug text-foreground sm:text-lg">{p}</span>
                </li>
              ))}
            </ul>

            {/* Subdued, crossed-out final statement */}
            <div className="mt-5 border-t border-border/60 pt-4">
              <div className="flex items-start gap-3.5">
                <span
                  className="font-sans text-xl font-bold leading-none text-muted-foreground/70 select-none sm:text-2xl"
                  aria-hidden="true"
                >
                  ×
                </span>
                <span className="text-base leading-snug text-muted-foreground line-through sm:text-lg">
                  Not learning Facebook Ads.
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Photography */}
        <Reveal
          delay={120}
          className="flex flex-col md:col-span-5 lg:col-span-5"
        >
          <div className="group relative flex-1 h-full min-h-[300px] w-full overflow-hidden rounded-lg aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:min-h-full">
            <img
              src={RENO_IMG_OUTDOOR_LIVING}
              alt="Architectural renovation with open-plan indoor-outdoor entertaining area and illuminated timber deck"
              className="reno-img h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 06 — PROOF / RESULTS */
/* Evidence-driven case-study section. Metrics and screenshots are clearly
   treated as placeholder/demo content until real verified PREVAIL data is
   supplied — no invented testimonials, screenshots or results. */
export function Proof() {
  const [animatedRevenue, setAnimatedRevenue] = useState(0);
  const [animatedLeads, setAnimatedLeads] = useState(0);
  const [animatedClosing, setAnimatedClosing] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const proofImages: [GalleryImage, GalleryImage, GalleryImage] = [
    {
      src: "https://storage.googleapis.com/msgsndr/LvVv0JB7C7WPSXPpUzFg/media/1799f736-917d-47fc-8d18-4139d2acb4d4.webp",
      alt: "Meta Ads Sources report showing 59 leads and $338,031.71 in closed revenue",
    },
    {
      src: "https://storage.googleapis.com/msgsndr/LvVv0JB7C7WPSXPpUzFg/media/ba087b25-aa9d-4a11-8754-e63fad5a2725.webp",
      alt: "Meta Ads Campaign Summary showing $375,530.00 total closed revenue across Windows, Siding, and Roofing",
    },
    {
      src: "https://storage.googleapis.com/msgsndr/LvVv0JB7C7WPSXPpUzFg/media/d5193501-41f7-48b7-8aa1-a1f25d2c3760.webp",
      alt: "Client text message: 'Check this out. We finally did it, our Meta Ads are our top producing lead source last week!'",
    },
  ];

  useEffect(() => {
    const cancelActiveAnimation = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const clearIntervalTimer = () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const animateNumbers = () => {
      cancelActiveAnimation();
      const duration = 1800;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);

        const eased = 1 - Math.pow(1 - progress, 3);

        setAnimatedRevenue(Math.round(338 * eased));
        setAnimatedLeads(Math.round(24 * eased));
        setAnimatedClosing(Math.round(40 * eased));

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          rafRef.current = null;
        }
      };

      setAnimationKey((prev) => prev + 1);
      rafRef.current = requestAnimationFrame(animate);
    };

    const startRepeatCycle = () => {
      clearIntervalTimer();
      intervalRef.current = setInterval(animateNumbers, 10000);
    };

    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      animateNumbers();
      startRepeatCycle();
      return () => {
        cancelActiveAnimation();
        clearIntervalTimer();
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          if (!hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            animateNumbers();
          }
          startRepeatCycle();
        } else {
          clearIntervalTimer();
          cancelActiveAnimation();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      clearIntervalTimer();
      cancelActiveAnimation();
    };
  }, []);

  const metrics = [
    { v: "$338K+", l: "Leads from Meta Ads" },
    { v: "24", l: "Leads generated" },
    { v: "40%", l: "Closing rate" },
  ];

  const panels = [
    { w: "lg:w-[40%]", cap: "Meta Ads sources", ratio: "aspect-[16/10]" },
    { w: "lg:w-[35%]", cap: "Campaign summary", ratio: "aspect-[16/10]" },
    { w: "lg:w-[25%]", cap: "Client message", ratio: "aspect-[3/4]" },
  ];

  return (
    <Section id="proof" className="noise-texture bg-panel">
      <SectionLabel num="05">Results</SectionLabel>

      <Reveal className="mt-8">
        <h2 className="font-display text-5xl uppercase leading-[0.92] text-foreground sm:text-7xl md:text-8xl">
          <span className="block">Real campaigns.</span>
          <span className="block">Real renovation businesses.</span>
          <HL variant="block">Real results.</HL>
        </h2>
      </Reveal>

      {/* Case study panel */}
      <Reveal delay={80} className="mt-12">
        <div
          ref={containerRef}
          className="rounded-lg border border-border bg-background p-6 sm:p-8 md:p-10"
        >
          {/* Top row */}
          <div className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-baseline sm:justify-between">
            <span className="font-display text-xl uppercase tracking-wide text-foreground sm:text-2xl">
              US Home Renovation Company
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Windows, doors, siding and roofing
            </span>
          </div>

          {/* Metrics */}
          <div className="mt-6 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
            <div className="bg-panel p-5 sm:p-6">
              <div
                key={`revenue-${animationKey}`}
                className="font-display text-4xl uppercase leading-none text-foreground sm:text-5xl md:text-6xl"
              >
                ${animatedRevenue.toLocaleString()}K+
              </div>

              <p className="mt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Leads from Meta Ads
              </p>
            </div>

            <div className="bg-panel p-5 sm:p-6">
              <div
                key={`leads-${animationKey}`}
                className="font-display text-4xl uppercase leading-none text-foreground sm:text-5xl md:text-6xl"
              >
                {animatedLeads}
              </div>

              <p className="mt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Leads generated
              </p>
            </div>

            <div className="bg-panel p-5 sm:p-6">
              <div
                key={`closing-${animationKey}`}
                className="font-display text-4xl uppercase leading-none text-foreground sm:text-5xl md:text-6xl"
              >
                {animatedClosing}%
              </div>

              <p className="mt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Closing rate
              </p>
            </div>
          </div>

          {/* Asymmetric proof image row */}
          <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-[8fr_7fr_5fr]">
            {/* 40% — Meta Ads Sources */}
            <button
              type="button"
              onClick={() => setLightboxIndex(0)}
              aria-label={`Open image: ${proofImages[0].alt}`}
              className="group flex flex-col cursor-zoom-in rounded-md border-0 bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="flex flex-1 items-center justify-center overflow-hidden rounded-md border border-border bg-panel p-2 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent">
                <img
                  src={proofImages[0].src}
                  alt={proofImages[0].alt}
                  className="max-h-[280px] w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-accent">
                Meta Ads Sources
              </p>
            </button>

            {/* 35% — Campaign Summary */}
            <button
              type="button"
              onClick={() => setLightboxIndex(1)}
              aria-label={`Open image: ${proofImages[1].alt}`}
              className="group flex flex-col cursor-zoom-in rounded-md border-0 bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="flex flex-1 items-center justify-center overflow-hidden rounded-md border border-border bg-panel p-2 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent">
                <img
                  src={proofImages[1].src}
                  alt={proofImages[1].alt}
                  className="max-h-[280px] w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-accent">
                Campaign Summary
              </p>
            </button>

            {/* 25% — Client Message */}
            <button
              type="button"
              onClick={() => setLightboxIndex(2)}
              aria-label={`Open image: ${proofImages[2].alt}`}
              className="group flex flex-col cursor-zoom-in rounded-md border-0 bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="flex flex-1 items-center justify-center overflow-hidden rounded-md border border-border bg-panel p-2 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent">
                <img
                  src={proofImages[2].src}
                  alt={proofImages[2].alt}
                  className="max-h-[280px] w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-accent">
                Client Message
              </p>
            </button>
          </div>
        </div>
      </Reveal>

      {lightboxIndex !== null && (
        <Lightbox
          images={proofImages}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </Section>
  );
}
