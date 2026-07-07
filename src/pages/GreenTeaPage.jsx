import PageHero from "../components/shared/PageHero";
import { Link } from "react-router-dom";

export default function GreenTeaPage() {
  const benefits = [
    {
      title: "Rich in Antioxidants",
      description:
        "Packed with catechins that help fight free radicals and support overall wellness. Our green teas retain high antioxidant levels through careful processing.",
    },
    {
      title: "Supports Weight Management",
      description:
        "Naturally boosts metabolism and aids fat oxidation. A warm cup of green tea complements a balanced lifestyle and healthy routine.",
    },
    {
      title: "Promotes Heart Health",
      description:
        "Regular consumption may help maintain healthy cholesterol levels and support cardiovascular function. A simple step toward long-term wellness.",
    },
  ];

  return (
    <>
      <PageHero
        title="Green Tea"
        subtitle="Golden Leaf Tea Co."
        breadcrumb="Home / Our Offering / Tea / Green Tea"
      />
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p className="font-body text-charcoal/60 text-base max-w-3xl mb-10">
            Our green teas are carefully selected and processed to preserve their
            natural antioxidants and fresh flavor. Light, refreshing, and full of
            health benefits — every sip reflects our commitment to quality from
            leaf to cup.
          </p>
          <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-8">
            Why Green Tea?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white border border-tea-100 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-display text-lg text-tea-700 mb-2">
                  {b.title}
                </h3>
                <p className="font-body text-sm text-charcoal/55 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-4">
              Premium Green Tea Selection
            </h2>
            <p className="font-body text-charcoal/60 mb-6">
              From the lush gardens of Assam to the highlands of Darjeeling, our
              green teas are sourced from estates that practice sustainable
              farming. Each batch is tasted and graded to ensure a consistently
              delightful cup.
            </p>
            <ul className="font-body text-sm text-charcoal/55 space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-tea-600 mt-0.5">&#10003;</span>
                Handpicked tender leaves
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tea-600 mt-0.5">&#10003;</span>
                Steamed or pan-fired to lock in freshness
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tea-600 mt-0.5">&#10003;</span>
                Available in loose leaf and tea bags
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tea-600 mt-0.5">&#10003;</span>
                Bulk packaging for wholesale orders
              </li>
            </ul>
          </div>
          {/* ── IMAGE PLACEHOLDER ── */}
          <div className="w-full aspect-[4/3] rounded-2xl bg-tea-50 border border-tea-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-2">📷</div>
              <p className="font-body text-xs text-charcoal/35">
                [Green Tea Leaves &amp; Brewed Cup]
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-tea-50">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-4">
            Ready to Stock Premium Green Tea?
          </h2>
          <p className="font-body text-charcoal/60 max-w-xl mx-auto mb-8">
            Partner with us for wholesale pricing, reliable supply, and
            exceptional quality. Let&rsquo;s grow together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/our-offering"
              className="inline-block bg-tea-700 text-cream font-body text-sm px-8 py-3 rounded-full hover:bg-tea-800 transition-colors"
            >
              Explore All Products
            </Link>
            <Link
              to="/contact"
              className="inline-block border border-tea-700 text-tea-700 font-body text-sm px-8 py-3 rounded-full hover:bg-tea-700 hover:text-cream transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
