import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Marquee } from "../components/marquee";
import { Hero } from "../components/section-hero";
import { Problem, Reframe } from "../components/section-problem-reframe";
import { Offer, Outcome, Proof } from "../components/section-offer-outcome";
import {
  WhoFor,
  NotFor,
  WhyPrevail,
  Investment,
  Team,
  FinalCTA,
  MobileStickyBar,
} from "../components/section-rest";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PREVAIL" },
      {
        name: "description",
        content:
          "Facebook + Instagram advertising built around better project opportunities for established Australian renovation businesses. AUD $2,500/month + ad spend.",
      },
      { property: "og:title", content: "PREVAIL" },
      {
        property: "og:description",
        content:
          "Facebook + Instagram advertising built around better project opportunities for established Australian renovation businesses.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/msgsndr/LvVv0JB7C7WPSXPpUzFg/media/4f986784-f4a3-49d9-a29e-20441f483462.webp",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/msgsndr/LvVv0JB7C7WPSXPpUzFg/media/4f986784-f4a3-49d9-a29e-20441f483462.webp",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "google-site-verification",
        content: "HZt8cjbIPk2N2LUTM_yXNYoxpXo4rkVRsmwCAoHmMf4",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://prevailph.com/#organization",
              name: "Prevail",
              url: "https://prevailph.com",
              description:
                "Digital marketing and qualified lead systems for established Australian renovation builders. Facebook + Instagram advertising built around better project opportunities.",
              areaServed: { "@type": "Country", name: "Australia" },
              knowsAbout: [
                "Digital Marketing",
                "Lead Generation",
                "Facebook Advertising",
                "Instagram Advertising",
                "Renovation Industry",
              ],
            },
            {
              "@type": "Service",
              name: "The PREVAIL Qualified Lead System\u2122",
              serviceType: "Digital Marketing and Qualified Lead Generation",
              provider: { "@id": "https://prevailph.com/#organization" },
              areaServed: { "@type": "Country", name: "Australia" },
              description:
                "A focused acquisition system that creates more qualified renovation opportunities for established Australian renovation businesses through Facebook and Instagram advertising.",
              offers: {
                "@type": "Offer",
                priceCurrency: "AUD",
                price: "2500",
                description: "AUD $2,500/month + Meta ad spend",
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is the PREVAIL Qualified Lead System\u2122?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The PREVAIL Qualified Lead System\u2122 is a focused acquisition system that creates more qualified renovation opportunities for established Australian renovation businesses. It combines strategy, offer, creative, Meta Ads, qualification, and optimisation into one system with one job \u2014 generating renovation opportunities actually worth quoting.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does PREVAIL cost?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "PREVAIL is AUD $2,500 per month plus Meta ad spend. The investment covers the full PREVAIL Qualified Lead System\u2122 designed to generate better qualified renovation opportunities, not just more leads.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Reframe />
        <Marquee />
        <Offer />
        <Outcome />
        <Proof />
        <WhoFor />
        <NotFor />
        <WhyPrevail />
        <Investment />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
