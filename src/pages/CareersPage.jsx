// src/pages/CareersPage.jsx
import PageHero from "../components/shared/PageHero";
import { Link } from "react-router-dom";

const cultureCards = [
  { icon: "🌱", title: "Growth Mindset", desc: "We invest in your development through training programmes, mentorship, and clear career progression paths across all departments." },
  { icon: "🤗", title: "Inclusive Culture", desc: "Diversity is our strength. We foster a workplace where every voice is heard, respected, and valued — regardless of background or role." },
  { icon: "🎯", title: "Purpose-Driven Work", desc: "Every role at Golden Leaf contributes to a larger mission — connecting India's finest gardens to the world, ethically and sustainably." },
];

const openings = [
  { title: "Senior Tea Buyer", dept: "Sourcing", location: "Kolkata, WB", type: "Full-Time" },
  { title: "Quality Assurance Manager", dept: "Operations", location: "Guwahati, AS", type: "Full-Time" },
  { title: "Regional Sales Manager — South", dept: "Sales", location: "Bengaluru, KA", type: "Full-Time" },
  { title: "Supply Chain Analyst", dept: "Logistics", location: "Patna, BR", type: "Full-Time" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        subtitle="Golden Leaf Tea Co."
        breadcrumb="Home / Careers"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-widest uppercase text-tea-600 mb-3">
              Why Join Us
            </p>
            <h2 className="font-display text-tea-800 text-3xl lg:text-4xl font-bold">
              More Than a Job. A Journey.
            </h2>
            <p className="font-body text-charcoal/55 text-base mt-4 max-w-xl mx-auto">
              At Golden Leaf Tea Co., you'll be part of a team that's redefining India's tea and
              spice wholesale industry with integrity, innovation, and purpose.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {cultureCards.map((c) => (
              <div
                key={c.title}
                className="bg-white border border-tea-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{c.icon}</div>
                <h4 className="font-display text-tea-800 text-lg font-bold mb-3">{c.title}</h4>
                <p className="font-body text-charcoal/55 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="w-full aspect-[4/3] lg:aspect-[5/2] rounded-2xl bg-tea-50 border border-tea-100 flex items-center justify-center mb-20">
            <div className="text-center">
              <div className="text-5xl mb-2">👥</div>
              <p className="font-body text-xs text-charcoal/35">[Team & Culture Image]</p>
            </div>
          </div>

          <div>
            <div className="text-center mb-10">
              <p className="font-body text-xs tracking-widest uppercase text-tea-600 mb-3">
                Open Positions
              </p>
              <h2 className="font-display text-tea-800 text-3xl lg:text-4xl font-bold">
                Join Our Team
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {openings.map((job) => (
                <div
                  key={job.title}
                  className="bg-white border border-tea-100 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="font-body text-[11px] tracking-wider uppercase bg-tea-50 text-tea-700 font-semibold px-2.5 py-1 rounded-full">{job.dept}</span>
                    <span className="font-body text-[11px] tracking-wider uppercase bg-forest-50 text-tea-700 font-semibold px-2.5 py-1 rounded-full">{job.type}</span>
                  </div>
                  <h3 className="font-display text-tea-800 text-lg font-bold mb-2">{job.title}</h3>
                  <p className="font-body text-charcoal/50 text-sm mb-4">📍 {job.location}</p>
                  <Link
                    to="#"
                    className="font-body text-sm text-tea-700 font-semibold border border-tea-700 px-5 py-2 rounded-full inline-block hover:bg-tea-700 hover:text-cream transition-colors duration-200"
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
            <p className="font-body text-charcoal/40 text-sm text-center mt-8">
              Don't see a role that fits? Send your CV to careers@goldenleaftea.com and we'll keep you in mind.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
