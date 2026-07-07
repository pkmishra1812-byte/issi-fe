// src/components/layout/Footer.jsx
import { Link } from "react-router-dom";
import { NAV_LINKS, NAV_LINKS_RIGHT, SITE_CONFIG } from "../../data/navigation";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70 font-body">

      {/* Main footer grid */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 border-2 border-tea-400 flex items-center justify-center rounded-sm">
              <span className="font-display text-tea-400 font-bold text-lg">IS</span>
            </div>
            <span className="font-display text-cream text-sm tracking-widest uppercase">
              Indian Soya &amp; Spice Industries
            </span>
          </div>
          <p className="font-accent italic text-tea-300 text-base mb-4">
            "Premium Quality, Trusted Since 1998"
          </p>
          <p className="text-sm text-cream/50 leading-relaxed">
            India's trusted wholesale partner for premium tea, spices, and baby care products. Sourced directly from farms, delivered with care.
          </p>
          {/* Social */}
          <div className="flex items-center gap-4 mt-6">
            {["Instagram", "Facebook", "LinkedIn"].map((s) => (
              <a
                key={s}
                href={s === "Instagram" ? "https://instagram.com" : s === "Facebook" ? "https://facebook.com" : "https://linkedin.com"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s}
                className="text-xs text-cream/40 hover:text-tea-400 transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-cream text-sm tracking-widest uppercase mb-5">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-cream/50 hover:text-tea-300 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="font-display text-cream text-sm tracking-widest uppercase mb-5">
            Information
          </h4>
          <ul className="space-y-2.5">
            {NAV_LINKS_RIGHT.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-cream/50 hover:text-tea-300 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-cream text-sm tracking-widest uppercase mb-5">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-sm text-cream/50">
            <li className="flex gap-2">
              <span className="mt-0.5">📍</span>
              <span>{SITE_CONFIG.address}</span>
            </li>
            <li className="flex gap-2">
              <span>✉️</span>
              <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-tea-300 transition-colors">
                {SITE_CONFIG.email}
              </a>
            </li>
            <li className="flex gap-2">
              <span>📞</span>
              <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-tea-300 transition-colors">
                {SITE_CONFIG.phone}
              </a>
            </li>
          </ul>

          <Link to="/wholesale" className="btn-outline border-tea-500 text-tea-400 hover:bg-tea-700 hover:border-tea-700 mt-6 inline-block text-xs">
            Wholesale Inquiry
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10 py-5 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/30">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/policies" className="hover:text-cream/60 transition-colors">Privacy Policy</Link>
            <Link to="/policies" className="hover:text-cream/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
