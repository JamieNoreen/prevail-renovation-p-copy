import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { BOOKING_URL } from "./primitives";

export function Footer() {
  return (
    <footer className="border-t border-[#3A3A3A] bg-[#1F1F1F] px-5 pt-12 pb-20 sm:px-8 sm:py-16 text-[#EBEBEB]">
      <div className="mx-auto max-w-7xl">
        {/* Main footer row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between lg:gap-10">
          {/* Left: PREVAIL logo + BUILT TO PREVAIL. */}
          <div className="flex flex-col items-start">
            <Link
              to="/"
              className="inline-flex items-center overflow-hidden"
              aria-label="PREVAIL Home"
            >
              <span
                role="img"
                aria-label="PREVAIL"
                className="prevail-logo block h-9 w-[150px] -ml-2 sm:h-10 sm:w-[170px] sm:-ml-2.5"
                style={{
                  backgroundColor: "#E7FE25",
                }}
              />
            </Link>
            <span className="mt-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#EBEBEB]">
              BUILT TO PREVAIL.
            </span>
          </div>

          {/* Centre: HOW IT WORKS | WHO IT'S FOR | INVESTMENT | PRIVACY */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-widest text-[#EBEBEB] sm:gap-x-5 md:justify-center"
          >
            <Link
              to="/how-it-works"
              className="transition-colors hover:text-[#E7FE25]"
            >
              HOW IT WORKS
            </Link>
            <span className="text-[#3A3A3A] select-none" aria-hidden="true">
              |
            </span>
            <Link
              to="/who-its-for"
              className="transition-colors hover:text-[#E7FE25]"
            >
              WHO IT&apos;S FOR
            </Link>
            <span className="text-[#3A3A3A] select-none" aria-hidden="true">
              |
            </span>
            <Link
              to="/pricing"
              className="transition-colors hover:text-[#E7FE25]"
            >
              INVESTMENT
            </Link>
            <span className="text-[#3A3A3A] select-none" aria-hidden="true">
              |
            </span>
            <a
              href="#privacy"
              className="transition-colors hover:text-[#E7FE25]"
            >
              PRIVACY
            </a>
          </nav>

          {/* Right: Target audience text + Book a strategy call button */}
          <div className="flex flex-col items-start gap-2.5 md:items-end">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A8A8A8] text-left md:text-right">
              FOR ESTABLISHED AUSTRALIAN RENOVATION BUSINESSES.
            </span>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#E7FE25] px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wide text-[#1F1F1F] transition-all duration-200 hover:brightness-105 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span>BOOK A STRATEGY CALL</span>
              <span
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>
        </div>

        {/* Subtle horizontal divider between main row and bottom row */}
        <div className="my-8 h-px w-full bg-[#3A3A3A] sm:my-10" />

        {/* Bottom row */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#A8A8A8]">
            © 2026 PREVAIL. ALL RIGHTS RESERVED.
          </div>
          <a
            href="https://www.linkedin.com/company/prevaildigital/home/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A8A8A8] transition-colors hover:text-[#E7FE25]"
            aria-label="PREVAIL on LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
