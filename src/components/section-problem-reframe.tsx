import { Section, SectionLabel, Reveal } from "./primitives";
import { HL } from "./section-hero";
import { useEffect, useState } from "react";

/* 02 — THE PROBLEM */
export function Problem() {
  const notNeeded = [
    "More tyre-kickers",
    "More price shoppers",
    "More small jobs you don't want",
    "More marketing reports full of clicks and impressions",
  ];

  const rights = ["homeowner", "conversation", "quote", "job"];
  const [rightIndex, setRightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRightIndex((prev) => (prev + 1) % rights.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section className="noise-texture bg-panel">
      <SectionLabel num="02">The Problem</SectionLabel>

      <Reveal className="mt-8">
        <h2 className="font-display text-4xl uppercase text-foreground sm:text-6xl md:text-7xl">
          Good work shouldn't rely on word of mouth alone.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal className="space-y-3">
          <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            You don't need:
          </div>
          {notNeeded.map((item) => (
            <div
              key={item}
              className="need-row flex items-center gap-3 rounded-md border border-border bg-background px-5 py-4"
            >
              <span className="need-cross font-sans text-3xl font-bold leading-none text-accent">
                ×
              </span>
              <span className="need-text text-base text-foreground">{item}</span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={120} className="flex flex-col justify-center">
          <h3 className="font-display text-3xl uppercase leading-[0.95] text-foreground sm:text-5xl">
            Not more leads. <HL variant="block">Better opportunities</HL>.
          </h3>
          <div className="mt-8">
            <p className="text-lg text-muted-foreground">
              The <HL>right</HL> {rights[rightIndex]}.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 03 — THE REFRAME */
export function Reframe() {
  const steps = [
    {
      num: "01",
      name: "Target",
      desc: "Define the projects and service areas worth pursuing.",
    },
    {
      num: "02",
      name: "Attract",
      desc: "Put the right offer in front of the right homeowners.",
    },
    {
      num: "03",
      name: "Qualify",
      desc: "Filter out poor-fit enquiries and tyre-kickers.",
    },
    {
      num: "04",
      name: "Convert",
      desc: "Create opportunities your team actually wants to quote.",
    },
  ];
  return (
    <Section className="noise-texture">
      <SectionLabel num="03">The Reframe</SectionLabel>
      <Reveal className="mt-8 max-w-4xl">
        <h2 className="font-display text-4xl uppercase text-foreground sm:text-6xl md:text-7xl">
          We build around the jobs you <HL variant="block">actually want</HL>.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal
            key={s.num}
            delay={i * 80}
            className="group card-lift relative flex flex-col rounded-md border border-border bg-panel p-6"
          >
            <span className="font-display text-4xl text-accent">{s.num}</span>
            <h3 className="mt-5 font-display text-2xl uppercase tracking-wide text-foreground">
              {s.name}
            </h3>
            <p className="mt-3 text-base text-muted-foreground">{s.desc}</p>
            <span className="accent-line mt-6" />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <div className="card-lift group relative overflow-hidden rounded-lg border border-accent bg-panel px-6 py-10 text-center transition-[transform,border-color] duration-400 ease-out motion-reduce:transition-none">
          <span className="font-display text-3xl uppercase text-foreground sm:text-5xl">
            Then we build the campaign around that.
          </span>
          <span className="accent-line mx-auto mt-6" />
        </div>
      </Reveal>
    </Section>
  );
}
