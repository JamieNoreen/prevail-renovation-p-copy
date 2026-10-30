import type { MouseEventHandler, ReactNode } from "react";
import { useReveal } from "../hooks/use-reveal";

/* Official PREVAIL Free Strategy Call booking page (Cal.com). */
export const BOOKING_URL = "https://cal.com/prevailph/freestrategycall";

/* CTA button — primary action with editorial hover + pressed state.
   Defaults to the official PREVAIL booking page and opens in a new tab so
   visitors keep their place on the site. */
export function CTAButton({
  children,
  href = BOOKING_URL,
  className = "",
  onClick,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`group cta-btn inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide ${className}`}
    >
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
    </a>
  );
}

/* Outlined variant for secondary actions. */
export function GhostButton({
  children,
  href = "#book",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-md border border-border bg-transparent px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {children}
    </a>
  );
}

/* Section number + label chip, e.g. "02 / THE PROBLEM".
   Currently hidden by request — returns null so every section's small
   "0X / Name" subtitle is removed site-wide without touching layouts. */
export function SectionLabel({ num, children }: { num: string; children: ReactNode }) {
  return null;
}

/* Reveal wrapper: fades + lifts its children into view on scroll. */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* Page section shell with consistent vertical rhythm. */
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative isolate w-full px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
