import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { MobileStickyBar } from "../components/section-rest";
import { Section } from "../components/primitives";
import { HL } from "../components/section-hero";
import {
  BLOG_CATEGORIES,
  FEATURED_POST,
  LATEST_POSTS,
  type BlogCategory,
} from "../data/blog-posts";
import {
  CategoryFilter,
  FeaturedArticle,
  ArticleCard,
  NewsletterCTA,
} from "../components/blog-components";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & Field Notes | PREVAIL" },
      {
        name: "description",
        content:
          "Commercial intelligence, acquisition strategy, and qualification systems for established Australian renovation builders.",
      },
      { property: "og:title", content: "Insights & Field Notes | PREVAIL" },
      {
        property: "og:description",
        content:
          "Commercial intelligence, acquisition strategy, and qualification systems for established Australian renovation builders.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://prevailph.com/images/blog-featured.webp",
      },
      {
        name: "twitter:image",
        content: "https://prevailph.com/images/blog-featured.webp",
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
                  name: "Blog",
                  item: "https://prevailph.com/blog",
                },
              ],
            },
            {
              "@type": "CollectionPage",
              name: "PREVAIL Insights & Field Notes",
              description:
                "Commercial intelligence and project acquisition strategy for established Australian renovation builders.",
              publisher: {
                "@type": "Organization",
                name: "Prevail",
                url: "https://prevailph.com",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");

  const filteredPosts =
    activeCategory === "All"
      ? LATEST_POSTS
      : LATEST_POSTS.filter((post) => post.category === activeCategory);

  const showFeatured =
    activeCategory === "All" || FEATURED_POST.category === activeCategory;

  return (
    <div className="min-h-screen bg-[#1F1F1F] pb-16 md:pb-0">
      <Navbar />

      <main>
        {/* EDITORIAL FEED: INTRODUCTION, FEATURED ARTICLE & LATEST DISPATCHES */}
        <section
          id="top"
          className="noise-texture relative isolate w-full overflow-hidden px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28"
        >
          <div className="mx-auto max-w-5xl">
            {/* SECTION B: EDITORIAL INTRODUCTION */}
            <div className="relative z-10">
              {/* Kicker */}
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                <span className="h-px w-10 bg-accent" />
                Insights / Field Notes
              </div>

              {/* Controlled Width Editorial Headline */}
              <h1 className="mt-6 max-w-3xl font-display text-5xl uppercase leading-[0.92] text-foreground sm:text-6xl md:text-7xl lg:text-[5rem]">
                Thinking behind <HL variant="block">better renovation</HL> businesses.
              </h1>

              {/* Short 1–2 Sentence Introduction */}
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Commercial intelligence, project acquisition, and brand positioning for established
                Australian renovation builders.
              </p>

              {/* Minimal Category Navigation */}
              <div className="mt-10 sm:mt-12">
                <CategoryFilter
                  categories={BLOG_CATEGORIES}
                  activeCategory={activeCategory}
                  onSelectCategory={setActiveCategory}
                />
              </div>
            </div>

            {/* SECTION C: FEATURED ARTICLE (SOLID PANEL BLACK FILLED CARD) */}
            {showFeatured && (
              <div className="mt-8 sm:mt-10">
                <FeaturedArticle post={FEATURED_POST} />
              </div>
            )}

            {/* SECTION D: LATEST ARTICLES (FILLED CARDS) */}
            <div className="mt-12 sm:mt-16">
              {/* Section Header */}
              <div className="mb-8 flex items-center justify-between border-b border-border/40 pb-4">
                <h2 className="font-display text-2xl uppercase tracking-wide text-foreground sm:text-3xl">
                  {activeCategory === "All" ? "Latest Dispatches" : `${activeCategory} Articles`}
                </h2>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {filteredPosts.length} {filteredPosts.length === 1 ? "Article" : "Articles"}
                </span>
              </div>

              {/* 3-Column Solid Panel Black Card Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                  {filteredPosts.map((post) => (
                    <ArticleCard key={post.slug} post={post} />
                  ))}
                </div>
              ) : (
                <div className="rounded-lg bg-[#2A2A2A] p-12 text-center">
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    No articles found in this category yet.
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveCategory("All")}
                    className="mt-4 text-xs font-bold uppercase tracking-wider text-accent hover:underline"
                  >
                    View all articles →
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION E: CLOSING NEWSLETTER CTA */}
        <NewsletterCTA />
      </main>

      {/* SECTION F: SITE FOOTER & MOBILE STICKY BAR */}
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
