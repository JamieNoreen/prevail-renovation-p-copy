import { Section, CTAButton, BOOKING_URL } from "./primitives";

/* Approved renovation photography assets */
export const RENO_IMG =
  "https://storage.googleapis.com/msgsndr/LvVv0JB7C7WPSXPpUzFg/media/4f986784-f4a3-49d9-a29e-20441f483462.webp";
export const RENO_IMG_BATH =
  "https://vibe.filesafe.space/1793020469600597287/attachments/d6db3417-13aa-4dec-9abc-a926aadb8e62.jpg";
export const RENO_IMG_OUTDOOR =
  "https://vibe.filesafe.space/1793020469600597287/attachments/e036bba3-370c-4269-aa3b-107801c6db26.jpg";
export const RENO_IMG_SITE =
  "https://vibe.filesafe.space/1793020469600597287/attachments/4a952a8e-8fc3-44f6-bfbb-d73ae4f60d38.jpg";
export const RENO_IMG_CONSULT =
  "https://vibe.filesafe.space/1793020469600597287/attachments/d701bc9a-e5d3-4cd9-8ba1-db050e74d4eb.jpg";
export const RENO_IMG_OUTDOOR_LIVING =
  "https://storage.googleapis.com/msgsndr/LvVv0JB7C7WPSXPpUzFg/media/fd614839-402d-4d7d-86c8-f6a5dd3f1abf.webp";
export const RENO_IMG_OUTCOME =
  "https://storage.googleapis.com/msgsndr/LvVv0JB7C7WPSXPpUzFg/media/fd614839-402d-4d7d-86c8-f6a5dd3f1abf.webp";
export const RENO_IMG_KITCHEN_CONSULT =
  "https://vibe.filesafe.space/1793020469600597287/attachments/cf5651cd-2f23-4b00-961b-b715a6fa6659.jpg";
export const RENO_IMG_INTERIOR_ALFRESCO =
  "https://storage.googleapis.com/msgsndr/LvVv0JB7C7WPSXPpUzFg/media/07d14745-e674-4108-86cf-1672b864f386.webp";
export const RENO_IMG_INTERIOR_ISLAND =
  "https://storage.googleapis.com/msgsndr/LvVv0JB7C7WPSXPpUzFg/media/39725260-fa25-4cf8-a488-07674f886df1.webp";
export const RENO_IMG_INTERIOR_BUILD =
  "https://storage.googleapis.com/msgsndr/LvVv0JB7C7WPSXPpUzFg/media/ab275474-c820-47ed-92fd-043b53c83f8a.webp";
export const RENO_IMG_HANDSHAKE =
  "https://storage.googleapis.com/msgsndr/LvVv0JB7C7WPSXPpUzFg/media/d648170d-a7c1-4a53-a149-8a08274089ea.webp";
export const RENO_IMG_PLANS =
  "https://vibe.filesafe.space/1793020469600597287/attachments/8a6627fd-7f48-458c-a875-9953136bc15b.jpg";
export const RENO_IMG_GLAZING_TEAM =
  "https://storage.googleapis.com/msgsndr/LvVv0JB7C7WPSXPpUzFg/media/a6cb36bc-bb91-42bc-9c19-8496ff396b84.webp";

/* Highlight component.
 *   variant="block" — for DISPLAY / HEADLINE text: a solid highlight block
 *                     (Light: Deep Navy bg + Dirty White text;
 *                      Dark: Electric Volt bg + Grungy Black text).
 *   variant="inline" (default) — for paragraph / body text: inline coloured text
 *                     (Light: Deep Navy; Dark: Electric Volt), no background. */
export function HL({
  children,
  variant = "inline",
}: {
  children: React.ReactNode;
  variant?: "block" | "inline";
}) {
  if (variant === "block") {
    return <span className="hl-block">{children}</span>;
  }
  return <span className="text-highlight">{children}</span>;
}

/* HERO */
export function Hero() {
  return (
    <Section
      id="top"
      className="noise-texture relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40"
    >
      <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="relative z-10 flex flex-col justify-center lg:col-span-7">
          <div
            className="hero-rise flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground"
            style={{ animationDelay: "60ms" }}
          >
            <span className="h-px w-10 bg-accent" />
            For established Australian renovation businesses
          </div>

          <h1
            className="hero-rise mt-8 font-display text-[15vw] uppercase leading-[0.86] text-foreground sm:text-[12vw] lg:text-[8vw] xl:text-[7rem]"
            style={{ animationDelay: "180ms" }}
          >
            More of the <HL variant="block">right</HL>
            <br />
            renovation jobs.
          </h1>

          <div
            className="hero-rise mt-8 max-w-xl space-y-4 text-base text-muted-foreground sm:text-lg"
            style={{ animationDelay: "420ms" }}
          >
            <p>You've already built the reputation.</p>
            <p>
              Facebook + Instagram ads built to generate renovation opportunities actually worth
              quoting.
            </p>
          </div>

          <div
            className="hero-rise mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "0ms" }}
          >
            <CTAButton href={BOOKING_URL}>Book a Strategy Call</CTAButton>
          </div>
        </div>

        <div className="relative z-10 flex flex-col justify-center lg:col-span-5">
          {/* Hero Image Container */}
          <div
            className="group hero-scale relative w-full overflow-hidden rounded-lg border border-border aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto min-h-[320px] sm:min-h-[360px] lg:h-[620px] xl:h-[680px]"
            style={{ animationDelay: "320ms" }}
          >
            <img
              src={RENO_IMG}
              alt="Builder in hard hat consulting with homeowner during home renovation"
              className="reno-img h-full w-full object-cover object-[54%_35%]"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
