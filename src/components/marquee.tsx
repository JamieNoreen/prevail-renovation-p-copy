const ITEMS = [
  "PREVAIL QUALIFIED LEAD SYSTEM™",
  "BETTER OPPORTUNITIES",
  "PREVAIL QUALIFIED LEAD SYSTEM™",
  "BETTER OPPORTUNITIES",
];

export function Marquee() {
  // duplicate the set once so the -50% translate loops seamlessly
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div
      className="relative overflow-hidden border-y border-border bg-panel py-5 select-none"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {loop.map((item, i) => {
          const isLogo = item === "PREVAIL QUALIFIED LEAD SYSTEM™";
          return (
            <span
              key={i}
              className="inline-flex items-center whitespace-nowrap font-display text-3xl uppercase tracking-wide text-foreground sm:text-5xl md:text-6xl"
            >
              {isLogo ? (
                <span
                  role="img"
                  aria-label="PREVAIL"
                  className="prevail-logo inline-block h-16 align-middle sm:h-20 md:h-24"
                  style={{
                    width: "auto",
                    aspectRatio: "8334 / 4501",
                    marginLeft: "-0.32em",
                    marginRight: "-0.32em",
                    maskPosition: "center center",
                    WebkitMaskPosition: "center center",
                  }}
                />
              ) : (
                <span className="align-middle">{item}</span>
              )}
              {/* Diamond separator:
                  - After LOGO: diamond sits between PREVAIL and BETTER OPPORTUNITIES.
                    ml = distance from PREVAIL, mr = distance to BETTER OPPORTUNITIES.
                  - After TEXT: diamond sits between BETTER OPPORTUNITIES and PREVAIL.
                    ml = distance from BETTER OPPORTUNITIES, mr = distance to PREVAIL.
                  Optical balance: gap between PREVAIL and diamond should match on both left and right sides! */}
              <span
                className={`inline-block h-3 w-3 shrink-0 rotate-45 bg-accent align-middle ${
                  isLogo ? "ml-5 mr-8 sm:ml-8 sm:mr-12" : "ml-8 mr-5 sm:ml-12 sm:mr-8"
                }`}
                aria-hidden="true"
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
