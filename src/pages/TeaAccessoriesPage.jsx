import PageHero from "../components/shared/PageHero";

export default function TeaAccessoriesPage() {
  return (
    <>
      <PageHero title="Tea Accessories" breadcrumb="Home / Our Offering / Tea / Accessories" />
      <section className="bg-white py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <h2 className="font-display text-[#A02020] text-3xl font-bold mb-6">Tea Accessories</h2>
          <p className="font-body text-[#1F3864]/60 text-base leading-relaxed max-w-3xl">
            Explore our range of tea accessories — from elegant infusers and strainers to
            premium teapots and storage canisters, designed for the perfect brew every time.
          </p>
        </div>
      </section>
    </>
  );
}
