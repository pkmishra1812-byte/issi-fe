import PageHero from "../components/shared/PageHero";

export default function WhiteTeaPage() {
  return (
    <>
      <PageHero title="White Tea" breadcrumb="Home / Our Offering / Tea / White Tea" />
      <section className="bg-white py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <h2 className="font-display text-[#A02020] text-3xl font-bold mb-6">White Tea</h2>
          <p className="font-body text-[#1F3864]/60 text-base leading-relaxed max-w-3xl">
            Our white teas are the least processed of all teas, handpicked at first flush and
            gently withered to preserve their delicate flavour and high antioxidant content.
          </p>
        </div>
      </section>
    </>
  );
}
