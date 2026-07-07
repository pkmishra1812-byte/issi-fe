// src/components/home/StatsSection.jsx
import { STATS } from "../../data/homeData";

export default function StatsSection() {
  return (
    <section className="py-20 bg-charcoal relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center">
          {STATS.map((s) => (
            <div key={s.label} className="py-4">
              <p className="font-display text-5xl lg:text-6xl text-tea-400 font-bold">{s.value}</p>
              <p className="font-body text-cream/50 text-sm tracking-widest uppercase mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
