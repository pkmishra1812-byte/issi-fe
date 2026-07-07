import { Link } from "react-router-dom";

const dots = [
  { top: "8%", right: "6%" },
  { top: "15%", right: "18%", size: 4 },
  { top: "30%", right: "10%", size: 3 },
  { top: "45%", right: "22%", size: 5 },
  { top: "60%", right: "8%", size: 3 },
  { top: "75%", right: "16%" },
  { top: "88%", right: "6%", size: 4 },
  { top: "22%", right: "28%", size: 2 },
  { top: "55%", right: "3%", size: 2 },
];

export default function WholesaleWhoWeAre() {
  return (
    <section className="bg-[#fdf4ed] py-[72px] lg:py-24 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((d, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#C8602A]/20"
            style={{
              top: d.top,
              right: d.right,
              width: d.size ?? 6,
              height: d.size ?? 6,
            }}
          />
        ))}
        <span className="absolute bottom-[12%] right-[14%] w-10 h-10 rounded-full bg-[#A02020]/[0.04]" />
        <span className="absolute top-[40%] right-[4%] w-20 h-20 rounded-full bg-[#C8602A]/[0.03]" />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
          {/* Left column — text */}
          <div className="lg:max-w-[75%]">
            <span className="inline-block text-[#A02020] font-body font-bold text-sm tracking-[0.18em] uppercase mb-4">
              Who We Are
            </span>
            <h2 className="font-display text-[#1A1A1A] text-[32px] sm:text-4xl md:text-[44px] lg:text-[48px] leading-[1.15] tracking-tight mb-5">
              Every Tea Has A Story
            </h2>
            <p className="font-body text-[#1F3864]/55 text-[15px] sm:text-base leading-[1.75] max-w-[900px]">
              Step into the rich legacy of <strong className="text-[#1F3864]/80 font-semibold">Golden Leaf Tea Co.</strong>, a distinguished brand
              under the esteemed trade name <strong className="text-[#1F3864]/80 font-semibold">Tea Plantations and Exports</strong>.
              Rooted in heritage since <strong className="text-[#1F3864]/80 font-semibold">2012</strong>, this 12-year-old brand weaves a
              captivating tale of passion for tea. From its modest origins, Golden Leaf Tea Co. has evolved into a cherished name,
              meticulously curating exceptional tea experiences that stand the test of time. Explore the journey, where every sip
              echoes the commitment to quality and the artistry of tea craftsmanship.
            </p>
          </div>

          {/* Right column — button */}
          <div className="shrink-0 pt-1 lg:pt-8">
            <Link
              to="/our-company"
              className="inline-block bg-[#A02020] hover:bg-[#861B1B] active:bg-[#6E1515] text-white font-body font-bold text-sm tracking-[0.12em] px-10 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#A02020]/20"
            >
              EXPLORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
