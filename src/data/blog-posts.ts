export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Acquisition Strategy" | "Commercial Operations" | "Positioning & Brand" | "Enquiry Qualification";
  publishedAt: string;
  readTime: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export const BLOG_CATEGORIES = [
  "All",
  "Acquisition Strategy",
  "Commercial Operations",
  "Positioning & Brand",
  "Enquiry Qualification",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const FEATURED_POST: BlogPost = {
  slug: "more-leads-better-fit",
  title: "More Leads. Better Fit.",
  excerpt:
    "How leading residential contractors engineer selective acquisition to protect quoting capacity and attract higher-margin renovations.",
  category: "Acquisition Strategy",
  publishedAt: "28 OCT 2026",
  readTime: "7 MIN READ",
  image: "/images/blog-featured.webp",
  imageAlt:
    "Light-filled Australian architectural living renovation with raked timber ceilings, honed concrete fireplace, and garden glazing",
  featured: true,
};

export const LATEST_POSTS: BlogPost[] = [
  {
    slug: "screen-budget-and-intent-before-estimating",
    title: "Screening Homeowner Budgets Before Quoting",
    excerpt: "Four digital qualification checkpoints to eliminate tyre-kickers before your first site visit.",
    category: "Enquiry Qualification",
    publishedAt: "24 OCT 2026",
    readTime: "5 MIN READ",
    image: "/images/services/kitchen-renovations.jpg",
    imageAlt: "Custom architectural kitchen renovation with minimalist joinery and stone island",
  },
  {
    slug: "portfolio-as-leverage-editorial-precision",
    title: "Presenting Completed Work with Editorial Precision",
    excerpt: "How documentary-style project photography commands higher contract margins.",
    category: "Positioning & Brand",
    publishedAt: "19 OCT 2026",
    readTime: "6 MIN READ",
    image: "/images/services/home-renovations.jpg",
    imageAlt: "Expansive modern Australian home renovation featuring natural light and open floor plan",
  },
  {
    slug: "unit-economics-of-meta-ads-for-renovation-builders",
    title: "The Unit Economics of Meta Advertising",
    excerpt: "A realistic commercial breakdown of customer acquisition costs in the Australian market.",
    category: "Commercial Operations",
    publishedAt: "15 OCT 2026",
    readTime: "8 MIN READ",
    image: "/images/services/windows-doors.jpg",
    imageAlt: "Architectural window and sliding glass door installation on modern home renovation",
  },
  {
    slug: "why-google-search-clicks-are-getting-less-profitable",
    title: "Why Visual Discovery Beats Search Ads",
    excerpt: "Why prospective renovation clients respond better to visual craft than search keywords.",
    category: "Acquisition Strategy",
    publishedAt: "11 OCT 2026",
    readTime: "5 MIN READ",
    image: "/images/services/bathroom-renovations.jpg",
    imageAlt: "Contemporary master ensuite renovation with bespoke fluted vanity and brass fixtures",
  },
  {
    slug: "managing-pipeline-pacing-calibrating-ad-spend",
    title: "Calibrating Lead Flow to Build Capacity",
    excerpt: "Pacing digital acquisition directly against your project calendar and team availability.",
    category: "Commercial Operations",
    publishedAt: "06 OCT 2026",
    readTime: "4 MIN READ",
    image: "/images/services/home-improvement.jpg",
    imageAlt: "Finished architectural living and entertaining zone with polished concrete flooring",
  },
  {
    slug: "positioning-against-race-to-the-bottom-quote-wars",
    title: "Positioning Against Low-Price Competitors",
    excerpt: "How to establish non-negotiable value before price comparisons ever begin.",
    category: "Positioning & Brand",
    publishedAt: "01 OCT 2026",
    readTime: "6 MIN READ",
    image: "/images/services/roofing.jpg",
    imageAlt: "Architectural standing seam metal roof installation on modern residential build",
  },
];
