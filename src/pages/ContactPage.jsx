// src/pages/ContactPage.jsx
import PageHero from "../components/shared/PageHero";
import { SITE_CONFIG } from "../data/navigation";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Golden Leaf Tea Co."
        breadcrumb="Home / Contact Us"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-tea-600 mb-3">
                Get in Touch
              </p>
              <h2 className="font-display text-tea-800 text-3xl lg:text-4xl font-bold leading-tight mb-6">
                We'd Love to Hear from You
              </h2>
              <p className="font-body text-charcoal/55 text-base leading-relaxed mb-8">
                Have a question about wholesale pricing, product availability, or partnerships?
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs text-charcoal/60 tracking-wide uppercase mb-1.5 block">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full font-body text-sm text-charcoal bg-white border border-tea-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tea-400 focus:border-transparent placeholder:text-charcoal/25"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-charcoal/60 tracking-wide uppercase mb-1.5 block">Email *</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full font-body text-sm text-charcoal bg-white border border-tea-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tea-400 focus:border-transparent placeholder:text-charcoal/25"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs text-charcoal/60 tracking-wide uppercase mb-1.5 block">Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full font-body text-sm text-charcoal bg-white border border-tea-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tea-400 focus:border-transparent placeholder:text-charcoal/25"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-charcoal/60 tracking-wide uppercase mb-1.5 block">Subject</label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      className="w-full font-body text-sm text-charcoal bg-white border border-tea-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tea-400 focus:border-transparent placeholder:text-charcoal/25"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs text-charcoal/60 tracking-wide uppercase mb-1.5 block">Message *</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your enquiry..."
                    className="w-full font-body text-sm text-charcoal bg-white border border-tea-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tea-400 focus:border-transparent placeholder:text-charcoal/25 resize-y"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary rounded-full"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <div className="bg-white border border-tea-100 rounded-2xl p-8 lg:p-10 mb-8">
                <p className="font-body text-xs tracking-widest uppercase text-tea-600 mb-6">
                  Contact Information
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-tea-700 text-xl mt-0.5">📍</span>
                    <div>
                      <p className="font-display text-tea-800 text-sm font-semibold">Our Address</p>
                      <p className="font-body text-charcoal/55 text-sm mt-0.5">{SITE_CONFIG.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-tea-700 text-xl mt-0.5">📧</span>
                    <div>
                      <p className="font-display text-tea-800 text-sm font-semibold">Email Us</p>
                      <p className="font-body text-charcoal/55 text-sm mt-0.5">{SITE_CONFIG.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-tea-700 text-xl mt-0.5">📞</span>
                    <div>
                      <p className="font-display text-tea-800 text-sm font-semibold">Call Us</p>
                      <p className="font-body text-charcoal/55 text-sm mt-0.5">{SITE_CONFIG.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-tea-700 text-xl mt-0.5">🕐</span>
                    <div>
                      <p className="font-display text-tea-800 text-sm font-semibold">Business Hours</p>
                      <p className="font-body text-charcoal/55 text-sm mt-0.5">Mon–Sat: 6 AM – 10 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full aspect-[4/3] rounded-2xl bg-tea-50 border border-tea-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🏢</div>
                  <p className="font-body text-xs text-charcoal/35">[Office / Storefront Image]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-tea-100 py-12">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p className="font-body text-xs tracking-widest uppercase text-tea-600 mb-4 text-center">
            Find Us
          </p>
          <div className="w-full aspect-[4/1] rounded-2xl bg-tea-50 border border-tea-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <p className="font-body text-xs text-charcoal/35">[Google Map Embed]</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
