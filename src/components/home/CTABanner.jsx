// src/components/home/CTABanner.jsx
import { Link } from "react-router-dom";

export default function CTABanner() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-tea-800 to-charcoal relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-tea-400 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-forest-400 blur-3xl" />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
        <p className="font-accent italic text-tea-300 text-xl mb-4">Ready to partner with us?</p>
        <h2 className="font-display text-4xl lg:text-5xl text-cream leading-tight mb-6">
          Start Your Wholesale<br />Journey Today
        </h2>
        <p className="font-body text-cream/60 text-base max-w-xl mx-auto mb-10">
          Join 200+ businesses who trust us for consistent quality, competitive pricing, and reliable supply across India.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/wholesale" className="btn-primary">
            Apply for Wholesale
          </Link>
          <Link to="/contact" className="btn-outline border-cream/40 text-cream hover:bg-cream/10 hover:border-cream/60">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
