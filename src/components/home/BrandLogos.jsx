import { useEffect, useRef, useState } from "react";

import bioqt from "../../assets/brand-logo/bioqt.png";
import handsomex from "../../assets/brand-logo/handsomex.png";
import kickstar from "../../assets/brand-logo/kickstar.png";
import nextLevel from "../../assets/brand-logo/next-level.png";
import shreeman from "../../assets/brand-logo/shreeman.png";

const brands = [
  { name: "Bioqt", img: bioqt },
  { name: "Handsome X", img: handsomex },
  { name: "Kickstar", img: kickstar },
  { name: "Next Level", img: nextLevel },
  { name: "Shreeman", img: shreeman },
];

export default function BrandLogos() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="pt-8 pb-16 lg:pt-10 lg:pb-20 bg-white overflow-hidden" ref={ref}>
      <div className="text-center mb-10 px-6">
        <h2 className="font-display text-tea-800 text-2xl lg:text-3xl font-bold">
          Our Brands
        </h2>
        <p className="font-body text-charcoal/50 text-sm mt-2">
          Trusted names across India
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <div
          className="flex items-center gap-12 lg:gap-20 justify-center px-8"
          style={{
            animation: visible ? "none" : "none",
          }}
        >
          {brands.map((brand, i) => (
            <div
              key={brand.name}
              className={`flex flex-col items-center gap-3 transition-all duration-700 ${
                visible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-10 opacity-0 scale-90"
              } hover:scale-110 hover:-translate-y-2`}
              style={{
                transitionDelay: `${i * 150}ms`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl border border-tea-100 p-3 flex items-center justify-center bg-white shadow-sm hover:shadow-lg transition-all duration-400">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-body text-tea-700 text-xs lg:text-sm font-semibold text-center tracking-wide">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
