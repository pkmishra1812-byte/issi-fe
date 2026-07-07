// src/pages/OurCompanyPage.jsx
import PageHero from "../components/shared/PageHero";

// ── Inline stat card ──
function StatCard({ value, label }) {
  return (
    <div className="flex flex-col items-center text-center px-6 py-8 border-r border-tea-100 last:border-r-0">
      <span className="font-display text-4xl lg:text-5xl font-bold text-tea-800 tracking-tight">
        {value}
      </span>
      <span className="font-body text-sm text-charcoal/55 mt-2 tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
}

// ── USP card ──
function UspCard({ icon, title, desc }) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-xl border border-tea-100 hover:shadow-md transition-shadow duration-300">
      <div className="w-11 h-11 rounded-full bg-tea-50 flex items-center justify-center text-xl shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-display text-tea-800 font-semibold text-base mb-1">{title}</h4>
        <p className="font-body text-charcoal/55 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// ── Timeline item ──
function TimelineItem({ year, title, desc, last }) {
  return (
    <div className="flex gap-6">
      {/* Line + dot */}
      <div className="flex flex-col items-center">
        <div className="w-3.5 h-3.5 rounded-full bg-tea-700 shrink-0 mt-1" />
        {!last && <div className="w-px flex-1 bg-tea-100 mt-2" />}
      </div>
      {/* Content */}
      <div className={`pb-10 ${last ? "" : ""}`}>
        <span className="font-body text-xs text-tea-600 font-semibold tracking-widest uppercase">
          {year}
        </span>
        <h4 className="font-display text-tea-800 font-bold text-lg mt-0.5 mb-1">{title}</h4>
        <p className="font-body text-charcoal/55 text-sm leading-relaxed max-w-lg">{desc}</p>
      </div>
    </div>
  );
}

// ── Cert badge ──
function CertBadge({ label, body }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg bg-tea-50 border border-tea-100">
      <div className="mt-0.5 w-5 h-5 shrink-0">
        <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-tea-700">
          <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 10l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <p className="font-display text-tea-800 text-sm font-semibold">{label}</p>
        <p className="font-body text-charcoal/50 text-xs mt-0.5">{body}</p>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────
export default function OurCompanyPage() {
  const stats = [
    { value: "1998",   label: "Founded" },
    { value: "25+",    label: "Years of Excellence" },
    { value: "40+",    label: "Garden Partners" },
    { value: "12K MT", label: "Annual Volume" },
  ];

  const usps = [
    { icon: "🌿", title: "Direct Garden Sourcing",   desc: "We partner directly with 40+ estates across Assam, Darjeeling, Nilgiris and Munnar — cutting out middlemen for guaranteed freshness." },
    { icon: "🏭", title: "State-of-Art Processing",  desc: "Our ISO-certified processing units use modern CTC and orthodox technology to deliver consistent grade quality across every batch." },
    { icon: "✅", title: "Quality Certifications",   desc: "FSSAI, ISO 22000, APEDA and GI-tag certified. Every lot is lab-tested for pesticide residue, moisture and grade compliance." },
    { icon: "🚚", title: "Pan-India Distribution",  desc: "Reliable 3PL partnerships ensure delivery to 500+ cities within 3–5 business days with full cold-chain support in 12 metros." },
    { icon: "📦", title: "Flexible Order Quantities", desc: "From 25 kg specialty lots to multi-tonne bulk orders — we accommodate retail chains, distributors and export buyers alike." },
    { icon: "🤝", title: "Dedicated Account Support", desc: "Every wholesale partner gets a named relationship manager available 6 AM to 10 PM via WhatsApp, call or email." },
  ];

  const timeline = [
    { year: "1998", title: "Founded in Kolkata",          desc: "Indian Soya & Spice Industries was established with a single mission — to bring transparent, fair-trade sourcing to India's tea supply chain." },
    { year: "2004", title: "First Garden Partnerships",   desc: "Signed direct sourcing agreements with our first five estates in upper Assam, bypassing auction floors for consistent lot control." },
    { year: "2011", title: "ISO 22000 Certification",     desc: "Achieved ISO 22000:2005 food safety certification across all processing and storage facilities, setting a new benchmark for our sector." },
    { year: "2016", title: "Expanded to Nilgiris & Munnar", desc: "Extended our sourcing network to South India, adding green tea and specialty orthodox grades to our wholesale portfolio." },
    { year: "2021", title: "Pan-India Cold-Chain Launch", desc: "Commissioned 60,000 sq ft of climate-controlled warehousing across Mumbai, Delhi and Kolkata to extend product shelf life." },
    { year: "2024", title: "Digital Wholesale Platform",  desc: "Launched our B2B ordering portal, giving 8,000+ retail and hospitality partners real-time lot visibility and seamless reordering.", last: true },
  ];

  const certs = [
    { label: "FSSAI Licensed",      body: "Lic. No. 10016011001234 · All processing units" },
    { label: "ISO 22000 : 2018",    body: "Food Safety Management · Certified since 2011" },
    { label: "APEDA Registered",    body: "Agricultural & Processed Food Export" },
    { label: "GI Tag Partner",      body: "Darjeeling & Assam Orthodox grades" },
    { label: "Organic India Cert.", body: "Select green tea & white tea grades" },
    { label: "Rainforest Alliance", body: "Sustainable sourcing programme member" },
  ];

  return (
    <>
      {/* ── Page Hero (your existing component) ── */}
      <PageHero
        title="Our Company"
        subtitle="Indian Soya & Spice Industries"
        breadcrumb="Home / Our Company"
      />

      {/* ══════════════════════════════════════
          1. INTRO — Who We Are
      ══════════════════════════════════════ */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-tea-600 mb-3">
                Who We Are
              </p>
              <h2 className="font-display text-tea-800 text-3xl lg:text-4xl font-bold leading-tight mb-6">
                India's Most Trusted<br />Tea & Spice Wholesale House
              </h2>
              <p className="font-body text-charcoal/65 text-base leading-relaxed mb-5">
                Founded in 1998, Indian Soya & Spice Industries has grown from a single-garden sourcing house into one of India's most respected wholesale tea and spice traders. We supply retailers, café chains, hotels, caterers, and exporters across 28 states.
              </p>
              <p className="font-body text-charcoal/65 text-base leading-relaxed mb-8">
                Our philosophy is simple — build long-term partnerships built on quality, consistency and transparency. Every lot we supply carries full traceability, from the garden row to your warehouse dock.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-tea-100 max-w-[48px]" />
                <span className="font-display text-tea-700 text-sm italic">
                  "From the garden. To your cup."
                </span>
              </div>
            </div>

            {/* Right — image placeholder styled to match site */}
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-2xl bg-tea-50 border border-tea-100 flex items-center justify-center overflow-hidden">
                {/* Replace with your actual image: <img src={companyImg} className="w-full h-full object-cover rounded-2xl" /> */}
                <div className="text-center">
                  <div className="text-6xl mb-3">🏛️</div>
                  <p className="font-body text-charcoal/35 text-sm">Company Image</p>
                </div>
              </div>
              {/* GI badge */}
              <div className="absolute -bottom-5 -left-5 bg-tea-700 text-cream rounded-xl px-5 py-4 shadow-lg">
                <p className="font-display text-2xl font-bold">25+</p>
                <p className="font-body text-xs tracking-widest uppercase opacity-80">Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. STATS BAR
      ══════════════════════════════════════ */}
      <section className="bg-white border-y border-tea-100">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. MISSION & VISION
      ══════════════════════════════════════ */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-widest uppercase text-tea-600 mb-3">Our Purpose</p>
            <h2 className="font-display text-tea-800 text-3xl lg:text-4xl font-bold">Mission & Vision</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Mission */}
            <div className="relative p-8 lg:p-10 rounded-2xl bg-tea-800 text-cream overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-tea-700/40 -translate-y-1/2 translate-x-1/2" />
              <p className="font-body text-xs tracking-widest uppercase text-tea-200/70 mb-4">Our Mission</p>
              <h3 className="font-display text-2xl font-bold mb-4 leading-snug">
                Deliver quality that never compromises
              </h3>
              <p className="font-body text-cream/70 text-sm leading-relaxed">
                To be India's most reliable wholesale partner for tea and spice — connecting the finest gardens directly to businesses, with certified quality, transparent pricing, and unwavering consistency in every kilogram we supply.
              </p>
              <div className="mt-8 pt-6 border-t border-tea-600/50 flex items-center gap-3">
                <div className="text-3xl">🎯</div>
                <span className="font-body text-xs text-cream/50 tracking-wide">Garden-to-warehouse traceability</span>
              </div>
            </div>

            {/* Vision */}
            <div className="relative p-8 lg:p-10 rounded-2xl bg-tea-50 border border-tea-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-tea-100/80 -translate-y-1/2 translate-x-1/2" />
              <p className="font-body text-xs tracking-widest uppercase text-tea-600 mb-4">Our Vision</p>
              <h3 className="font-display text-tea-800 text-2xl font-bold mb-4 leading-snug">
                Redefine how India sources its chai
              </h3>
              <p className="font-body text-charcoal/60 text-sm leading-relaxed">
                To build a future where every business — from a corner chai stall to a five-star hotel — has equal access to ethically sourced, premium-quality tea and spice, backed by technology-driven transparency and farmer-fair trade.
              </p>
              <div className="mt-8 pt-6 border-t border-tea-100 flex items-center gap-3">
                <div className="text-3xl">🌿</div>
                <span className="font-body text-xs text-charcoal/40 tracking-wide">Sustainable sourcing for the next generation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. WHY CHOOSE US
      ══════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-widest uppercase text-tea-600 mb-3">Our Strengths</p>
            <h2 className="font-display text-tea-800 text-3xl lg:text-4xl font-bold">Why Choose Us</h2>
            <p className="font-body text-charcoal/55 text-base mt-4 max-w-xl mx-auto">
              We don't just sell tea. We build partnerships built on quality, reliability and long-term value for your business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {usps.map((u) => <UspCard key={u.title} {...u} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. OUR STORY / TIMELINE
      ══════════════════════════════════════ */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">

            {/* Left — sticky label */}
            <div className="lg:sticky lg:top-32">
              <p className="font-body text-xs tracking-widest uppercase text-tea-600 mb-3">Our Journey</p>
              <h2 className="font-display text-tea-800 text-3xl lg:text-4xl font-bold leading-tight mb-5">
                25 Years of<br />Building Trust
              </h2>
              <p className="font-body text-charcoal/55 text-sm leading-relaxed">
                From a single sourcing agreement in 1998 to serving 8,000+ partners across 28 states — every milestone reflects our commitment to quality and partnership.
              </p>
            </div>

            {/* Right — timeline */}
            <div className="pt-1">
              {timeline.map((t) => (
                <TimelineItem key={t.year} {...t} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. CERTIFICATIONS
      ══════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-widest uppercase text-tea-600 mb-3">Compliance & Standards</p>
            <h2 className="font-display text-tea-800 text-3xl lg:text-4xl font-bold">Certifications & Compliance</h2>
            <p className="font-body text-charcoal/55 text-base mt-4 max-w-lg mx-auto">
              Every batch we supply meets international food safety and quality standards — so your business is always protected.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certs.map((c) => <CertBadge key={c.label} {...c} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. CTA BANNER
      ══════════════════════════════════════ */}
      <section className="bg-tea-800 py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-body text-xs tracking-widest uppercase text-tea-200/60 mb-3">
            Partner With Us
          </p>
          <h2 className="font-display text-cream text-3xl lg:text-4xl font-bold mb-5 leading-tight">
            Ready to Start Your Wholesale Account?
          </h2>
          <p className="font-body text-cream/65 text-base max-w-xl mx-auto mb-8">
            Join 8,000+ businesses who trust Indian Soya & Spice Industries for consistent, certified, farm-fresh tea and spice supply.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/wholesale"
              className="inline-block font-body text-sm tracking-wide bg-cream text-tea-800 font-semibold px-8 py-3.5 rounded-full hover:bg-tea-50 transition-colors duration-200"
            >
              Start Wholesale Account
            </a>
            <a
              href="/contact"
              className="inline-block font-body text-sm tracking-wide border border-cream/40 text-cream px-8 py-3.5 rounded-full hover:bg-tea-700 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}