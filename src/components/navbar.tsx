import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { CTAButton, BOOKING_URL } from "./primitives";

const LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Who It's For", href: "/who-its-for" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const pathname = useLocation({ select: (location) => location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on Escape and outside-click (ignoring clicks on the hamburger button itself)
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [menuOpen]);

  // Lock body scroll while the menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        {/* PREVAIL logo — always visible on the far left.
            Cropped aspect ratio + negative margin trims the PNG's ~16% transparent padding
            so the visible letters align with the true element bounds. */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center overflow-hidden"
          aria-label="PREVAIL Home"
        >
          <span
            role="img"
            aria-label="PREVAIL"
            className="prevail-logo h-12 sm:h-14 md:h-16"
            style={{
              aspectRatio: "8334 / 4501",
              marginLeft: "-0.28em",
              marginRight: "-0.28em",
              maskPosition: "center center",
              WebkitMaskPosition: "center center",
            }}
          />
        </Link>

        {/* ── RIGHT-SIDE GROUP: Navigation links + Booking CTA, or Mobile Hamburger ── */}
        <div className="flex items-center gap-6 lg:gap-8">
          {/* Desktop navigation links (lg+) in exact order:
              1. HOW IT WORKS  2. WHO IT'S FOR  3. PRICING  4. BLOG */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {LINKS.map((l) => {
              const isActive = pathname === l.href || pathname.startsWith(`${l.href}/`);
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-1 whitespace-nowrap text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 inset-x-0 h-[2px] rounded-full bg-[#E7FE25]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* 5. BOOK A STRATEGY CALL CTA — desktop & tablet (md+) */}
          <div className="hidden md:block">
            <CTAButton href={BOOKING_URL} className="px-5 py-2.5">
              Book a Strategy Call
            </CTAButton>
          </div>

          {/* Unified mobile/tablet hamburger button (<lg) */}
          <button
            ref={buttonRef}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-0.5 w-6 bg-foreground transition-transform duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-foreground transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-foreground transition-transform duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ── TABLET / MOBILE MENU (hidden on desktop) ── */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {LINKS.map((l) => {
              const isActive = pathname === l.href || pathname.startsWith(`${l.href}/`);
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center justify-between border-b border-border py-3 text-sm font-bold uppercase tracking-widest transition-colors ${
                    isActive
                      ? "text-[#E7FE25]"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  <span>{l.label}</span>
                  {isActive && (
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[#E7FE25]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}

            {/* CTA inside mobile drawer */}
            <div className="pt-4 pb-2">
              <CTAButton
                href={BOOKING_URL}
                onClick={() => setMenuOpen(false)}
                className="w-full justify-center py-3.5"
              >
                Book a Strategy Call
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
