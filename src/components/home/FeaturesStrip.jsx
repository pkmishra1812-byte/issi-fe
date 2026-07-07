// src/components/home/FeaturesStrip.jsx
import { FEATURES } from "../../data/homeData";

export default function FeaturesStrip() {
  return (
    <section className="py-16 lg:py-20 bg-white border-y border-tea-100">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {FEATURES.map((f, i) => (
            <div
              key={f.id}
              className="flex flex-col items-center text-center p-6 group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-tea-50 flex items-center justify-center text-2xl mb-4 group-hover:bg-tea-100 transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="font-display text-charcoal text-lg mb-2">{f.title}</h3>
              <p className="font-body text-charcoal/55 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
