import PageHero from "../components/shared/PageHero";

export default function CardamomTeaPage() {
  return (
    <>
      <PageHero title="Cardamom Tea" breadcrumb="Home / Our Offering / Tea / Cardamom Tea" />
      <section className="bg-white py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <h2 className="font-display text-[#A02020] text-3xl font-bold mb-6">Cardamom Tea</h2>
          <p className="font-body text-[#1F3864]/60 text-base leading-relaxed max-w-3xl">
            A fragrant blend of premium tea leaves and authentic green cardamom, offering a
            warming, aromatic cup that delights the senses and aids digestion.
          </p>
        </div>
      </section>
    </>
  );
}
