// src/pages/NewsPage.jsx
import PageHero from "../components/shared/PageHero";

const articles = [
  {
    date: "June 10, 2026",
    headline: "Golden Leaf Tea Co. Expands Cold-Chain Network to Southern India",
    summary: "New 30,000 sq ft climate-controlled facility in Coimbatore extends our pan-India cold-chain coverage to 15 cities, ensuring peak freshness for South Indian partners.",
  },
  {
    date: "May 22, 2026",
    headline: "Partnership with Assam Smallholder Farmers Collective Reaches 5,000 Families",
    summary: "Our direct sourcing agreement now supports 5,000 smallholder tea farmers with fair pricing, agronomy training, and free soil testing services.",
  },
  {
    date: "April 18, 2026",
    headline: "Golden Leaf Receives FSSAI Re-Certification with Zero Non-Conformances",
    summary: "For the third consecutive audit cycle, all four of our processing units received FSSAI re-certification with zero non-conformances across every category.",
  },
  {
    date: "March 8, 2026",
    headline: "Baby Care Line Achieves Dermatest® Approval for All Three Products",
    summary: "Our Baby Massage Oil, Baby Powder, and Baby Wash have received Dermatest® certification, confirming they are clinically proven to be safe for newborn skin.",
  },
  {
    date: "February 14, 2026",
    headline: "Golden Leaf Partners with 50 New Café Chains Across India",
    summary: "A landmark B2B partnership brings Golden Leaf's tea and spice products to 350+ café locations across 28 cities, with custom blends developed exclusively for the hospitality sector.",
  },
  {
    date: "January 25, 2026",
    headline: "Annual Sustainability Report Shows 40% Reduction in Plastic Use",
    summary: "Our 2025 sustainability report highlights a 40% year-on-year reduction in virgin plastic usage, 200,000 new trees planted, and a 25% increase in farmer community investments.",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News"
        subtitle="Golden Leaf Tea Co."
        breadcrumb="Home / News"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-widest uppercase text-tea-600 mb-3">
              Press & Announcements
            </p>
            <h2 className="font-display text-tea-800 text-3xl lg:text-4xl font-bold">
              Latest News
            </h2>
            <p className="font-body text-charcoal/55 text-base mt-4 max-w-xl mx-auto">
              Company milestones, industry partnerships, certifications, and community
              initiatives — stay up to date with everything Golden Leaf.
            </p>
          </div>

          <div className="space-y-6">
            {articles.map((a) => (
              <article
                key={a.headline}
                className="group bg-white border border-tea-100 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="hidden lg:block w-32 shrink-0">
                    <div className="w-full aspect-[4/3] rounded-lg bg-tea-50 border border-tea-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl mb-1">📰</div>
                        <p className="font-body text-[10px] text-charcoal/35">[News]</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="font-body text-xs text-charcoal/40">{a.date}</span>
                    <h3 className="font-display text-tea-800 text-xl lg:text-2xl font-bold leading-snug mt-1 mb-3 group-hover:text-tea-700 transition-colors">
                      {a.headline}
                    </h3>
                    <p className="font-body text-charcoal/55 text-sm leading-relaxed">{a.summary}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
