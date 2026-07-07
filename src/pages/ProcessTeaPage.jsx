import PageHero from "../components/shared/PageHero";

export default function ProcessTeaPage() {
  return (
    <>
      <PageHero title="Process Tea" breadcrumb="Home / Our Offering / Tea / Process Tea" />
      <section className="bg-white py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <h2 className="font-display text-[#A02020] text-3xl font-bold mb-6">Process Tea</h2>
          <p className="font-body text-[#1F3864]/60 text-base leading-relaxed max-w-3xl">
            Our process teas are expertly manufactured using controlled oxidation and drying
            techniques to deliver consistent flavour, colour, and strength in every batch.
          </p>
        </div>
      </section>
    </>
  );
}
