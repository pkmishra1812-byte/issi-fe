// src/components/home/Testimonials.jsx
import { TESTIMONIALS } from "../../data/homeData";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-tea-50">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="section-subtitle mb-3">What Clients Say</p>
          <h2 className="section-title">Trusted by the Best</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className="bg-cream rounded-2xl p-8 shadow-sm border border-tea-100 relative"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Quote mark */}
              <span className="font-display text-6xl text-tea-200 leading-none absolute top-4 right-6 select-none">
                "
              </span>

              <p className="font-body text-charcoal/70 text-sm leading-relaxed mb-6 relative z-10">
                {t.quote}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-tea-200 to-forest-200 flex items-center justify-center">
                  <span className="font-display text-tea-700 font-bold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body text-charcoal text-sm font-semibold">{t.name}</p>
                  <p className="font-body text-charcoal/50 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
