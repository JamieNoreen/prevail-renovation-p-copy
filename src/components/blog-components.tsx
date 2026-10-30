import { useState, type FormEvent } from "react";
import type { BlogPost, BlogCategory } from "../data/blog-posts";
import { BOOKING_URL, CTAButton } from "./primitives";

/* ── Minimal Editorial Category Navigation ── */
export function CategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: {
  categories: readonly BlogCategory[];
  activeCategory: BlogCategory;
  onSelectCategory: (category: BlogCategory) => void;
}) {
  return (
    <nav
      aria-label="Article categories"
      className="flex w-full items-center overflow-x-auto border-b border-border/60 pb-3 no-scrollbar"
    >
      <div className="flex items-center gap-6 sm:gap-8">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory(cat)}
              className={`shrink-0 pb-1 text-xs uppercase tracking-[0.18em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                isActive
                  ? "border-b-2 border-accent font-bold text-accent"
                  : "border-b-2 border-transparent font-semibold text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

/* ── Featured Article Component (Solid Panel Black Filled Card) ── */
export function FeaturedArticle({ post }: { post: BlogPost }) {
  return (
    <article className="group relative overflow-hidden rounded-lg bg-[#2A2A2A] transition-colors duration-300 hover:bg-[#2E2E2E]">
      <div className="grid grid-cols-1 md:grid-cols-[55%_45%] lg:grid-cols-[62%_38%] items-stretch">
        {/* Dominant Featured Architectural Photograph (60–65% width) */}
        <div className="relative min-h-[260px] sm:min-h-[320px] md:min-h-full w-full overflow-hidden bg-background">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="reno-img h-full w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Minimal Editorial Details with Comfortable Internal Padding */}
        <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 xl:p-12">
          <div>
            {/* Small Category Label */}
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              {post.category}
            </div>

            {/* Short, Prominent Headline */}
            <h2 className="mt-3.5 font-display text-3xl uppercase leading-[0.92] text-foreground transition-colors duration-200 group-hover:text-accent sm:text-4xl lg:text-3xl xl:text-4xl">
              {post.title}
            </h2>

            {/* Brief Excerpt (2–3 short lines max) */}
            <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {post.excerpt}
            </p>
          </div>

          {/* Understated Action & Compact Metadata */}
          <div className="mt-6 sm:mt-8 flex items-center justify-between border-t border-[#3A3A3A]/40 pt-4 sm:pt-5 text-xs">
            <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-muted-foreground">
              <time>{post.publishedAt}</time>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
              <span>{post.readTime}</span>
            </div>
            <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-foreground transition-colors duration-200 group-hover:text-accent">
              Read Article <span>→</span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ── Standard Filled Article Card (#2A2A2A Solid Panel) ── */
export function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-lg bg-[#2A2A2A] transition-colors duration-300 hover:bg-[#303030]">
      {/* Top Image — Consistent Aspect Ratio & Visual Weight */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-background">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="reno-img h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Internal Content with Comfortable Padding */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          {/* Small Category Label */}
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {post.category}
          </div>

          {/* Short, Punchy Editorial Headline (4–8 Words) */}
          <h3 className="mt-3 font-display text-2xl uppercase leading-[0.96] text-foreground transition-colors duration-200 group-hover:text-accent sm:text-[1.65rem]">
            {post.title}
          </h3>
        </div>

        {/* Minimal Publication Metadata */}
        <div className="mt-6 flex items-center justify-between border-t border-[#3A3A3A]/40 pt-4 text-xs">
          <span className="font-bold uppercase tracking-widest text-muted-foreground">
            {post.readTime}
          </span>
          <span className="inline-flex items-center gap-1 font-bold uppercase tracking-wider text-foreground transition-colors duration-200 group-hover:text-accent">
            Read <span>→</span>
          </span>
        </div>
      </div>
    </article>
  );
}

/* ── Spacious, Restrained Newsletter / Insights Section ── */
export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 3) {
      setSubmitted(true);
    }
  };

  return (
    <section className="noise-texture relative w-full border-t border-border/60 bg-[#2A2A2A] px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
          Field Notes Dispatch
        </div>

        <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] text-foreground sm:text-5xl md:text-6xl">
          Commercial intelligence in your inbox.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
          Practical breakdowns on project acquisition, margin protection, and client qualification
          for established Australian residential builders.
        </p>

        {submitted ? (
          <div className="mt-8 rounded-md border border-accent/40 bg-accent/10 px-6 py-4 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">
              Thank you for subscribing.
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              You will receive our next monthly dispatch.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              required
              aria-label="Work email address for newsletter"
              className="flex-1 rounded-md border border-border bg-[#1F1F1F] px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <button
              type="submit"
              className="cta-btn inline-flex items-center justify-center rounded-md px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-background transition-colors hover:bg-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Subscribe
            </button>
          </form>
        )}

        {/* Alternative Direct Consultation Prompt */}
        <div className="mt-12 pt-4">
          <p className="text-xs text-muted-foreground">
            Looking to engineer your acquisition pipeline directly?{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold uppercase tracking-wider text-accent hover:underline ml-1"
            >
              Book a Strategy Call →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
