import PageHero from "../components/shared/PageHero";

export default function CTCTeaPage() {
  return (
    <>
      <PageHero title="CTC Tea" breadcrumb="Home / Our Offering / Tea / CTC Tea" />
      <section className="bg-white py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <h2 className="font-display text-[#A02020] text-3xl font-bold mb-6">CTC Tea</h2>
          <p className="font-body text-[#1F3864]/60 text-base leading-relaxed max-w-3xl">
            Crush, Tear, Curl — CTC tea is known for its strong, bold flavour and quick brew
            time. A favourite for masala chai and everyday consumption across India.
          </p>
        </div>
      </section>
    </>
  );
}
