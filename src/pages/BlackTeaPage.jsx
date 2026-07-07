import PageHero from "../components/shared/PageHero";
import { Link } from "react-router-dom";

export default function BlackTeaPage() {
  const features = [
    {
      title: "Bold & Robust Flavor",
      description:
        "Fully oxidized leaves deliver a deep, malty character with notes that range from brisk and bright to smooth and caramel-like. Perfect for any time of day.",
    },
    {
      title: "Premium Tea Estates",
      description:
        "We source from renowned gardens in Assam, Darjeeling, and Dooars — regions celebrated for producing some of the world&rsquo;s finest black teas.",
    },
    {
      title: "Perfect for Chai",
      description:
        "Our robust CTC and orthodox grades are ideal for traditional masala chai. Stands up beautifully to milk, spices, and sweeteners.",
    },
  ];

  return (
    <>
      <PageHero
        title="Black Tea"
        subtitle="Golden Leaf Tea Co."
        breadcrumb="Home / Our Offering / Tea / Black Tea"
      />
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p className="font-body text-charcoal/60 text-base max-w-3xl mb-10">
            Bold, robust, and full-bodied. Our black teas are sourced from the
            finest estates and expertly processed to deliver a rich cup every
            time — whether you enjoy it plain, with milk, or as spiced chai.
          </p>
          <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-8">
            Our Black Tea Range
          </h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white border border-tea-100 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-display text-lg text-tea-700 mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-sm text-charcoal/55 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            {/* ── IMAGE PLACEHOLDER ── */}
            <div className="w-full aspect-[4/3] rounded-2xl bg-tea-50 border border-tea-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">📷</div>
                <p className="font-body text-xs text-charcoal/35">
                  [Black Tea Leaves &amp; Brewed Cup]
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-4">
              Brewing Guide
            </h2>
            <p className="font-body text-charcoal/60 mb-6">
              Unlock the full flavor of our black teas with the right brewing
              technique. Small adjustments can transform your cup.
            </p>
            <ol className="font-body text-sm text-charcoal/55 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-tea-600 font-bold">1.</span>
                Use freshly boiled water at 95&ndash;100&deg;C
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tea-600 font-bold">2.</span>
                Steep for 3&ndash;5 minutes depending on desired strength
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tea-600 font-bold">3.</span>
                One teaspoon of loose leaf per cup
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tea-600 font-bold">4.</span>
                Serve plain or with milk and sugar to taste
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tea-600 font-bold">5.</span>
                For iced tea, double the leaves and pour over ice
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-tea-50">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-4">
            Stock the Finest Black Tea
          </h2>
          <p className="font-body text-charcoal/60 max-w-xl mx-auto mb-8">
            Wholesale enquiries welcome. Consistent quality, competitive pricing,
            and reliable delivery for businesses of all sizes.
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
