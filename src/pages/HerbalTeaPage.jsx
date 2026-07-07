import PageHero from "../components/shared/PageHero";
import { Link } from "react-router-dom";

export default function HerbalTeaPage() {
  const varieties = [
    {
      title: "Chamomile",
      description:
        "Delicate floral notes with a soothing, apple-like sweetness. Known for its calming properties, it is the perfect evening cup to wind down after a long day.",
    },
    {
      title: "Peppermint",
      description:
        "Cool, invigorating, and naturally refreshing. Our peppermint leaves are carefully dried to preserve their vibrant aroma and menthol character.",
    },
    {
      title: "Tulsi (Holy Basil)",
      description:
        "An ancient Ayurvedic herb with a warm, clove-like flavour. Tulsi is revered for its adaptogenic properties and is a staple in Indian households.",
    },
  ];

  const benefits = [
    "100% caffeine-free — enjoy anytime",
    "No artificial flavours or additives",
    "Hand-blended in small batches",
    "Packaged in eco-friendly materials",
  ];

  return (
    <>
      <PageHero
        title="Herbal Tea"
        subtitle="Golden Leaf Tea Co."
        breadcrumb="Home / Our Offering / Tea / Herbal Tea"
      />
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p className="font-body text-charcoal/60 text-base max-w-3xl mb-10">
            Naturally caffeine-free and brimming with flavor. Our herbal teas
            blend flowers, herbs, and spices for a soothing and aromatic
            experience that nurtures both body and mind.
          </p>
          <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-8">
            Our Varieties
          </h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {varieties.map((v, i) => (
              <div
                key={i}
                className="bg-white border border-tea-100 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-display text-lg text-tea-700 mb-2">
                  {v.title}
                </h3>
                <p className="font-body text-sm text-charcoal/55 leading-relaxed">
                  {v.description}
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
              Why Choose Our Herbal Teas?
            </h2>
            <p className="font-body text-charcoal/60 mb-6">
              Every herbal blend is crafted with intention — using whole herbs,
              flowers, and spices sourced from trusted growers. We never use
              fillers, artificial flavours, or unnecessary additives.
            </p>
            <ul className="font-body text-sm text-charcoal/55 space-y-2">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-tea-600 mt-0.5">&#10003;</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          {/* ── IMAGE PLACEHOLDER ── */}
          <div className="w-full aspect-[4/3] rounded-2xl bg-tea-50 border border-tea-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-2">📷</div>
              <p className="font-body text-xs text-charcoal/35">
                [Herbal Tea Ingredients &amp; Infusion]
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-tea-50">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-4">
            Bring Wellness to Your Shelves
          </h2>
          <p className="font-body text-charcoal/60 max-w-xl mx-auto mb-8">
            Our herbal teas are perfect for health-conscious retailers,
            caf&eacute;s, and wellness brands. Wholesale and private label
            options available.
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
