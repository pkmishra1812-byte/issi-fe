// src/pages/WholesalePage.jsx
import WholesaleContactForm from "../components/shared/WholesaleContactForm";
import WholesaleWhoWeAre from "../components/shared/WholesaleWhoWeAre";
import WholesaleWhyChooseUs from "../components/shared/WholesaleWhyChooseUs";
import wholesaleBanner from "../assets/wholsale-banner.png";

export default function WholesalePage() {
  return (
    <>
  
  

      <img
        src={wholesaleBanner}
        alt="Wholesale"
        className="w-full h-auto object-cover"
      />

      <WholesaleWhoWeAre />

      <WholesaleWhyChooseUs />

      <WholesaleContactForm />

      {/* ════════════════════ Section 2 — Tea of All Seasons ════════════════════ */}
      <section className="bg-[#fcf9f3] py-20 lg:py-28 border-y border-tea-100/50">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">

          {/* ══ Part 1 — Seasonal Flush Timeline ══ */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-[#A02020]/30" />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2C6 6 4 10 4 13c0 3 2.5 5 6 5s6-2 6-5c0-3-2-7-6-11z" fill="#A02020" opacity="0.6" />
              <path d="M10 6C8 9 7 11 7 13c0 1.5 1.5 3 3 3s3-1.5 3-3c0-2-1-4-3-7z" fill="#A02020" />
            </svg>
            <span className="w-12 h-px bg-[#A02020]/30" />
          </div>

          <h2 className="text-center font-display text-[#A02020] text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            TEA OF ALL SEASONS
          </h2>

          <p className="text-center font-body text-[#1F3864]/50 text-sm italic max-w-lg mx-auto mb-14">
            Every season brings a unique harvest — discover the rhythm of our flushes
          </p>

          {/* Timeline rows */}
          <div className="max-w-2xl mx-auto space-y-7 mb-16">
            {[
              { label: "Spring First Flush", color: "#5B8C3E", period: "Begins mid February &mdash; ends early May." },
              { label: "Summer Second Flush", color: "#E67E22", period: "Begins late May &mdash; ends mid July." },
              { label: "Monsoon Rain Flush", color: "#C0392B", period: "Begins mid July &mdash; ends mid September." },
              { label: "Autumnal Flush", color: "#7D5A4A", period: "Begins mid September &mdash; ends mid November." },
            ].map((s) => (
              <div key={s.label} className="flex items-start gap-5 group">
                <div className="flex items-center gap-3 min-w-0 shrink-0">
                  <span
                    className="w-2.5 h-2.5 rounded-full mt-2 shrink-0 ring-2 ring-offset-2 ring-offset-[#fcf9f3]"
                    style={{ backgroundColor: s.color, ringColor: s.color }}
                  />
                  <span
                    className="font-display font-bold text-xs md:text-sm whitespace-nowrap pt-0.5 tracking-wide"
                    style={{ color: s.color }}
                  >
                    {s.label}
                  </span>
                </div>
                <div className="w-px h-7 bg-tea-200/60 shrink-0 mt-1.5" />
                <p className="font-body text-[#1F3864]/40 text-xs md:text-sm italic leading-relaxed pt-0.5"
                   dangerouslySetInnerHTML={{ __html: s.period }}
                />
              </div>
            ))}
          </div>

          {/* Calendar gradient bar */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="flex h-6 w-full rounded-full overflow-hidden shadow-sm">
              <div className="flex-1" style={{ background: "#81C784" }} />
              <div className="flex-1" style={{ background: "linear-gradient(90deg, #81C784, #9CCC65)" }} />
              <div className="flex-1" style={{ background: "linear-gradient(90deg, #9CCC65, #C5E1A5)" }} />
              <div className="flex-1" style={{ background: "linear-gradient(90deg, #C5E1A5, #FFF176)" }} />
              <div className="flex-1" style={{ background: "linear-gradient(90deg, #FFF176, #FFD54F)" }} />
              <div className="flex-1" style={{ background: "linear-gradient(90deg, #FFD54F, #FFB74D)" }} />
              <div className="flex-1" style={{ background: "linear-gradient(90deg, #FFB74D, #FF8A65)" }} />
              <div className="flex-1" style={{ background: "linear-gradient(90deg, #FF8A65, #E57373)" }} />
              <div className="flex-1" style={{ background: "linear-gradient(90deg, #E57373, #A1887F)" }} />
              <div className="flex-1" style={{ background: "linear-gradient(90deg, #A1887F, #81C784)" }} />
              <div className="flex-1" style={{ background: "#81C784" }} />
              <div className="flex-1" style={{ background: "#81C784" }} />
            </div>
            <div className="flex w-full text-[9px] md:text-[11px] font-body text-[#1F3864]/30 tracking-widest font-medium mt-2.5 px-1">
              {["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"].map((m) => (
                <span key={m} className="flex-1 text-center">{m}</span>
              ))}
            </div>
          </div>

          {/* ══ Part 2 — Types of Tea ══ */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-[#A02020]/30" />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2C6 6 4 10 4 13c0 3 2.5 5 6 5s6-2 6-5c0-3-2-7-6-11z" fill="#A02020" opacity="0.6" />
              <path d="M10 6C8 9 7 11 7 13c0 1.5 1.5 3 3 3s3-1.5 3-3c0-2-1-4-3-7z" fill="#A02020" />
            </svg>
            <span className="w-12 h-px bg-[#A02020]/30" />
          </div>

          <h2 className="text-center font-display text-[#A02020] text-3xl md:text-4xl lg:text-5xl font-bold mb-14 tracking-tight">
            TYPES OF TEA
          </h2>

          {/* Tea grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-x-14 md:gap-y-14 max-w-4xl mx-auto">
            {[
              {
                name: "Black Tea",
                color: "#4A2C2A",
                liquor: "#4A2C2A",
                leaves: "M14 8 Q18 4 22 10 Q26 4 30 10 Q34 4 38 10 Q42 4 46 8 M12 18 Q16 14 20 18 Q24 14 28 18 Q32 14 36 18 Q40 14 44 18 M16 28 Q20 24 24 28 Q28 24 32 28 Q36 24 40 28 M14 38 Q20 34 26 38 Q32 34 38 38",
              },
              {
                name: "Green Tea",
                color: "#5B8C3E",
                liquor: "#5B8C3E",
                leaves: "M14 10 Q18 14 22 10 Q26 14 30 10 Q34 14 38 10 Q42 14 46 10 M12 20 Q16 24 20 20 Q24 24 28 20 Q32 24 36 20 M16 30 Q20 34 24 30 Q28 34 32 30 M14 40 Q20 44 26 40 Q32 44 38 40",
              },
              {
                name: "White Tea",
                color: "#8AB88A",
                liquor: "#B8D4B0",
                leaves: "M16 10 Q20 8 24 10 Q28 8 32 10 Q36 8 40 10 M14 20 Q18 18 22 20 Q26 18 30 20 Q34 18 38 20 M18 30 Q22 28 26 30 Q30 28 34 30 M20 40 Q24 38 28 40 Q32 38 36 40",
              },
              {
                name: "Oolong Tea",
                color: "#7D5A4A",
                liquor: "#7D5A4A",
                leaves: "M16 10 A5 4 0 1 1 16 10.1 M28 8 A5 4 0 1 1 28 8.1 M40 10 A5 4 0 1 1 40 10.1 M18 22 A5 4 0 1 1 18 22.1 M30 20 A5 4 0 1 1 30 20.1 M22 34 A5 4 0 1 1 22 34.1 M36 32 A5 4 0 1 1 36 32.1",
              },
              {
                name: "Masala Tea",
                color: "#C0392B",
                liquor: "#C0392B",
                leaves: "M12 8 Q16 4 20 8 Q24 12 28 8 Q32 4 36 8 Q40 12 44 8 M16 18 L18 16 M24 18 L26 16 M34 17 L36 15 M16 26 Q20 22 24 26 Q28 22 32 26 Q36 22 40 26 M18 38 Q22 34 26 38 Q30 34 34 38 M10 17 h4 v4 h-4 z M38 25 h4 v4 h-4 z",
              },
              {
                name: "Speciality Tea",
                color: "#8E44AD",
                liquor: "#8E44AD",
                leaves: "M12 10 Q16 6 20 10 Q24 14 28 10 Q32 6 36 10 Q40 14 44 10 M12 18 A3 3 0 1 1 12 18.1 M24 16 A3 3 0 1 1 24 16.1 M36 18 A3 3 0 1 1 36 18.1 M18 26 A3 3 0 1 1 18 26.1 M30 24 A3 3 0 1 1 30 24.1 M42 26 A3 3 0 1 1 42 26.1 M20 36 Q24 32 28 36",
              },
              {
                name: "CTC Tea",
                color: "#5D4037",
                liquor: "#5D4037",
                leaves: "M10 10 h6 v5 h-6 z M18 10 h6 v5 h-6 z M26 10 h6 v5 h-6 z M34 10 h6 v5 h-6 z M42 10 h6 v5 h-6 z M14 18 h6 v5 h-6 z M22 18 h6 v5 h-6 z M30 18 h6 v5 h-6 z M38 18 h6 v5 h-6 z M10 26 h6 v5 h-6 z M18 26 h6 v5 h-6 z M26 26 h6 v5 h-6 z M34 26 h6 v5 h-6 z M42 26 h6 v5 h-6 z",
              },
              {
                name: "Organic Tea",
                color: "#3D8B37",
                liquor: "#3D8B37",
                leaves: "M14 10 Q18 6 22 10 L18 20 Z M26 8 Q30 4 34 8 L30 18 Z M38 10 Q42 6 46 10 L42 20 Z M18 22 Q22 18 26 22 L22 32 Z M30 22 Q34 18 38 22 L34 32 Z",
              },
            ].map((tea) => (
              <div key={tea.name} className="flex flex-col items-center group">
                <div className="relative transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                  <svg viewBox="0 0 60 80" width="64" height="84" fill="none" className="drop-shadow-sm">
                    <defs>
                      <linearGradient id={`glass-${tea.name}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="white" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#f5f0e8" stopOpacity="0.9" />
                      </linearGradient>
                    </defs>
                    <path d="M8 5 L52 5 L46 70 Q46 76 30 76 Q14 76 14 70 Z" stroke="#A02020" strokeWidth="1.2" fill={`url(#glass-${tea.name})`} opacity="0.8" />
                    <path d="M16 68 Q30 74 44 68 L46 70 Q46 76 30 76 Q14 76 14 70 Z" fill={tea.liquor} opacity="0.2" />
                    <path d={tea.leaves} stroke={tea.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.85" />
                    <path d="M18 8 L24 8 Q23 16 20 18 Q17 16 18 8 Z" fill="white" opacity="0.2" />
                    <path d="M10 5 L14 5 Q13.5 10 12 11 Q10.5 10 10 5 Z" fill="white" opacity="0.15" />
                  </svg>
                </div>
                <p className="font-body text-[#3D8B37] text-[11px] md:text-sm font-bold text-center mt-3 tracking-wide">
                  {tea.name}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-tea-200/60 mt-20" />
        </div>
      </section>

    </>
  );
}
