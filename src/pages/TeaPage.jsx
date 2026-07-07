import PageHero from "../components/shared/PageHero";
import { Link } from "react-router-dom";

const teaTypes = [
  {
    title: "Green Tea",
    desc: "Light, refreshing, and packed with antioxidants — gently processed to preserve natural goodness.",
    path: "/our-offering/tea/green-tea",
    color: "bg-[#5B8C3E]",
  },
  {
    title: "White Tea",
    desc: "Delicate and minimally processed, offering a subtle sweetness and a wealth of fine antioxidants.",
    path: "/our-offering/tea/white-tea",
    color: "bg-[#B8D4B0]",
  },
  {
    title: "Black Tea",
    desc: "Fully oxidized for a robust, full-bodied flavour that stands up to milk, sugar, or lemon.",
    path: "/our-offering/tea/black-tea",
    color: "bg-[#4A2C2A]",
  },
  {
    title: "CTC Tea",
    desc: "Crush, Tear, Curl — a bold, quick-brewing tea loved for its strong colour and masala chai character.",
    path: "/our-offering/tea/ctc-tea",
    color: "bg-[#5D4037]",
  },
  {
    title: "Cardamom Tea",
    desc: "A fragrant union of premium tea leaves and authentic green cardamom for a warm, aromatic cup.",
    path: "/our-offering/tea/cardamom-tea",
    color: "bg-[#C0392B]",
  },
  {
    title: "Process Tea",
    desc: "Expertly manufactured using controlled oxidation and drying to deliver consistent flavour in every batch.",
    path: "/our-offering/tea/process-tea",
    color: "bg-[#7D5A4A]",
  },
];

export default function TeaPage() {
  return (
    <>
      <PageHero
        title="Our Tea Collection"
        subtitle="Golden Leaf Tea Co."
        breadcrumb="Home / Our Offering / Tea"
      />
      <section className="py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="space-y-10">
            {teaTypes.map((tea, i) => (
              <Link
                key={tea.path}
                to={tea.path}
                className={`group flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-xl border border-tea-100 hover:shadow-lg hover:border-tea-300 transition-all duration-300 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`w-full md:w-32 h-24 rounded-lg shrink-0 ${tea.color} opacity-80 flex items-center justify-center`}>
                  <span className="text-white/70 font-display text-lg font-bold tracking-wider uppercase">
                    {tea.title.split(" ")[0]}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-tea-700 group-hover:text-tea-800 transition-colors mb-1.5">
                    {tea.title}
                  </h3>
                  <p className="font-body text-sm text-charcoal/50 leading-relaxed">
                    {tea.desc}
                  </p>
                </div>
                <svg className="w-5 h-5 text-charcoal/30 group-hover:text-tea-500 translate-x-0 group-hover:translate-x-1 transition-all duration-300 shrink-0 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
