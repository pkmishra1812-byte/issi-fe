// src/pages/SustainabilityPage.jsx
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import sustainBanner from "../assets/sustainbility1.png";
import teaFarming from "../assets/teafarming.png";
import bannerNew1 from "../assets/banner-new-1.png";
import bannerNew2 from "../assets/banner-new-2.png";
import bannerNew3 from "../assets/banner-new-3.png";
import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.png";

const pillars = [
  {
    icon: "🌱",
    title: "Eco-Friendly Farming",
    desc: "We partner with estates that practice regenerative agriculture — minimal tilling, natural composting, and integrated pest management to protect soil health and biodiversity.",
  },
  {
    icon: "🤝",
    title: "Ethical Sourcing",
    desc: "Every producer in our supply chain receives fair wages and works in safe conditions. Our direct garden partnerships eliminate exploitative middlemen and ensure traceable, transparent trade.",
  },
  {
    icon: "👩‍🌾",
    title: "Community Empowerment",
    desc: "We invest in the communities behind our products — funding school supplies, health check-ups, and clean-water initiatives for tea garden worker families across Assam and Darjeeling.",
  },
  {
    icon: "♻️",
    title: "Plastic Neutral",
    desc: "We've eliminated single-use plastics from 90% of our packaging and offset the remainder through certified plastic-neutral programmes. Our goal is 100% compostable packaging by 2027.",
  },
];

const productPillarData = [
  {
    label: "Tea",
    path: "/our-offering/tea",
    color: "#2D6A4F",
    desc: "Premium hand-picked leaves from Assam & Darjeeling",
    svg: (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="#2D6A4F" />
        <circle cx="200" cy="150" r="90" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
        <circle cx="200" cy="130" r="40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <path d="M160 170 Q200 130 240 170" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
        <path d="M140 190 Q200 150 260 190" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <text x="200" y="240" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="14" fontFamily="serif" fontStyle="italic">Tea</text>
      </svg>
    ),
  },
  {
    label: "Beauty Care",
    path: "/our-offering/beauty-products",
    color: "#D4A5A5",
    desc: "Natural skincare & wellness essentials",
    svg: (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="#D4A5A5" />
        <ellipse cx="200" cy="160" rx="50" ry="65" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <rect x="180" y="80" width="40" height="30" rx="4" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <circle cx="200" cy="130" r="12" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        <text x="200" y="260" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="13" fontFamily="serif" fontStyle="italic">Beauty Care</text>
      </svg>
    ),
  },
  {
    label: "Baby Care",
    path: "/our-offering/baby-care",
    color: "#A8D5BA",
    desc: "Gentle & safe products for your little ones",
    svg: (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="#A8D5BA" />
        <circle cx="200" cy="140" r="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <circle cx="185" cy="130" r="5" fill="rgba(255,255,255,0.3)" />
        <circle cx="215" cy="130" r="5" fill="rgba(255,255,255,0.3)" />
        <path d="M180 155 Q200 170 220 155" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <text x="200" y="250" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="13" fontFamily="serif" fontStyle="italic">Baby Care</text>
      </svg>
    ),
  },
  {
    label: "Spices & Grains",
    path: "/our-offering/kitchen-products/spices",
    color: "#C4843B",
    desc: "Authentic spices, grains & everyday essentials",
    svg: (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="#C4843B" />
        <ellipse cx="200" cy="150" rx="60" ry="30" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        <ellipse cx="180" cy="140" rx="15" ry="8" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <ellipse cx="220" cy="155" rx="12" ry="6" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <circle cx="200" cy="120" r="3" fill="rgba(255,255,255,0.2)" />
        <circle cx="185" cy="160" r="2" fill="rgba(255,255,255,0.15)" />
        <circle cx="215" cy="170" r="2.5" fill="rgba(255,255,255,0.15)" />
        <text x="200" y="250" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="12" fontFamily="serif" fontStyle="italic">Spices & Grains</text>
      </svg>
    ),
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function VisionSection() {
  const [cardRef, cardIn] = useInView(0.15);
  const [imgRef, imgIn] = useInView(0.15);

  return (
    <section className="py-20 lg:py-28 bg-[#f5f6f8] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Mobile: image on top */}
        <div className="lg:hidden flex flex-col gap-6">
          <div
            ref={imgRef}
            className={`transition-all duration-800 ease-out ${
              imgIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative group aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl">
              <img
                src={teaFarming}
                alt="Tea farming"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b4c]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
          <div
            ref={cardRef}
            className={`transition-all duration-800 ease-out ${
              cardIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
              <h2 className="font-display text-[#0d1b4c] text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Sustainability Vision<br />&amp; Strategy
              </h2>
              <p className="font-body text-[#5a6b8c] text-base leading-relaxed mb-5 max-w-xl">
                The world today is confronted with daunting global challenges emerging from the existential climate crisis, concerns over food and nutrition security, inadequate livelihood opportunities and widening social inequity.
              </p>
              <p className="font-body text-[#5a6b8c] text-base leading-relaxed mb-8 max-w-xl">
                It is our conviction that corporates have both an economic and social purpose. With their numerous touchpoints in the frontline of economic activity, businesses can contribute immensely to shaping a secure future by embedding sustainability at the core of corporate strategy.
              </p>
              <Link
                to="/sustainability"
                className="inline-flex items-center gap-2 font-body text-base font-bold text-[#3b5bfd] hover:text-[#2a4ae0] transition-colors group"
              >
                Read more
                <span className="text-lg leading-none inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop: side-by-side with image overlapping card */}
        <div className="hidden lg:relative lg:block" style={{ minHeight: "500px" }}>
          {/* White card — left side */}
          <div
            ref={cardRef}
            className={`relative z-10 w-[55%] transition-all duration-800 ease-out ${
              cardIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white rounded-3xl shadow-xl p-12 xl:p-16">
              <h2 className="font-display text-[#0d1b4c] text-4xl xl:text-5xl font-bold leading-tight mb-6">
                Sustainability Vision<br />&amp; Strategy
              </h2>
              <p className="font-body text-[#5a6b8c] text-base leading-relaxed mb-5 max-w-lg">
                The world today is confronted with daunting global challenges emerging from the existential climate crisis, concerns over food and nutrition security, inadequate livelihood opportunities and widening social inequity.
              </p>
              <p className="font-body text-[#5a6b8c] text-base leading-relaxed mb-8 max-w-lg">
                It is our conviction that corporates have both an economic and social purpose. With their numerous touchpoints in the frontline of economic activity, businesses can contribute immensely to shaping a secure future by embedding sustainability at the core of corporate strategy.
              </p>
              <Link
                to="/sustainability"
                className="inline-flex items-center gap-2 font-body text-base font-bold text-[#3b5bfd] hover:text-[#2a4ae0] transition-colors group"
              >
                Read more
                <span className="text-lg leading-none inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Right image — floats above card, extends past top/right */}
          <div
            ref={imgRef}
            className={`absolute right-0 z-20 w-[50%] transition-all duration-800 ease-out ${
              imgIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
            style={{ transitionDelay: "0.2s", top: "-60px" }}
          >
            <div className="relative group aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={teaFarming}
                alt="Tea farming"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b4c]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductPillars() {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const updateState = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const progress = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
    setScrollProgress(progress);
    const cardW = el.children[0]?.offsetWidth || 1;
    const gap = 24;
    const idx = Math.round(el.scrollLeft / (cardW + gap));
    setActiveIdx(Math.min(idx, productPillarData.length - 1));
  };

  const scrollTo = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = el.children[0]?.offsetWidth || 320;
    const gap = 24;
    el.scrollBy({ left: dir * (cardW + gap), behavior: "smooth" });
    setTimeout(updateState, 350);
  };

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };
  const onMouseUp = () => { isDragging.current = false; };
  const onMouseLeave = () => { isDragging.current = false; };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 1.2;
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 mb-10 lg:mb-12">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1B5FAE]">
          Our Product Pillars
        </h2>
      </div>

      {/* Scrollable cards */}
      <div className="relative max-w-screen-xl mx-auto">
        <div
          ref={scrollRef}
          onScroll={updateState}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onMouseMove={onMouseMove}
          className="flex gap-6 overflow-x-auto scroll-smooth px-6 lg:px-8 pb-4 cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
        >
          {productPillarData.map((item, i) => {
            const isActive = i === activeIdx;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`shrink-0 w-[280px] lg:w-[320px] rounded-2xl overflow-hidden transition-all duration-300 ${
                  isActive
                    ? "bg-white shadow-xl scale-[1.02]"
                    : "bg-gray-50 shadow-sm opacity-70 hover:opacity-90"
                }`}
              >
                {/* 4:3 image */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  {item.svg}
                </div>
                {/* Label bar */}
                <div className={`px-5 py-4 flex items-center justify-between transition-colors ${
                  isActive ? "bg-white" : "bg-gray-50"
                }`}>
                  <span className={`font-display text-sm lg:text-base font-bold transition-colors ${
                    isActive ? "text-[#1B5FAE]" : "text-gray-700"
                  }`}>
                    {item.label}
                  </span>
                  <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-colors ${
                    isActive
                      ? "border-[#1B5FAE] text-[#1B5FAE]"
                      : "border-gray-400 text-gray-500"
                  }`}>
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Progress bar + nav buttons */}
        <div className="flex items-center justify-end gap-4 px-6 lg:px-8 mt-6">
          {/* Progress bar */}
          <div className="flex-1 max-w-[200px] h-[3px] bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#1B5FAE] rounded-full transition-all duration-200"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
          {/* Nav buttons */}
          <button
            onClick={() => scrollTo(-1)}
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#1B5FAE] hover:text-[#1B5FAE] transition-colors text-lg leading-none"
          >
            ‹
          </button>
          <button
            onClick={() => scrollTo(1)}
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#1B5FAE] hover:text-[#1B5FAE] transition-colors text-lg leading-none"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

const interventionData = [
  {
    img: bannerNew1,
    heading: "Sustainable Supply Chain",
    subtitle: "Building a Resilient & Sustainable Supply Chain",
  },
  {
    img: bannerNew2,
    heading: "Brands with Purpose",
    subtitle: "Driving Change through Purpose-led Brands",
  },
  {
    img: bannerNew3,
    heading: "Talent",
    subtitle: "Creating a Workforce for Tomorrow",
  },
];

function InterventionCards() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <h2 className="font-display text-[#0d1b4c] text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-16">
          Our Sustainability Interventions
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {interventionData.map((card) => (
            <div
              key={card.heading}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={card.img}
                  alt={card.heading}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 p-6 lg:p-8">
                <h3 className="font-display text-[#0d1b4c] text-xl lg:text-2xl font-bold leading-tight mb-2">
                  {card.heading}
                </h3>
                <p className="font-body text-gray-500 text-sm lg:text-base mb-6">
                  {card.subtitle}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-1.5 font-body text-sm font-bold text-[#3b5bfd] group-hover:text-[#2a4ae0] transition-colors">
                    Know more
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SustainabilityPage() {
  const [bannerIdx, setBannerIdx] = useState(0);

  const bannerSlides = [
    { src: sustainBanner, alt: "Sustainability" },
    { src: banner1, alt: "Sustainable farming" },
    { src: banner2, alt: "Eco-friendly practices" },
  ];

  const scrollBanner = (i) => {
    setBannerIdx(i);
  };

  return (
    <>
      {/* Banner carousel */}
      <div className="w-full relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${bannerIdx * 100}%)` }}
          >
            {bannerSlides.map((slide, i) => (
              <div key={i} className="w-full shrink-0">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Mini pagination dots — bottom right */}
        <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-8 flex items-center gap-1.5">
          {bannerSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollBanner(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === bannerIdx
                  ? "w-5 bg-white"
                  : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content after banner */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-body text-base lg:text-lg text-charcoal/75 leading-relaxed max-w-4xl mx-auto">
            We are dedicated to ensuring that our products are produced in an economically, environmentally, and socially just manner. Tata Consumer is committed to sustainable sourcing of our tea, coffee, water and foods offerings.
          </p>
        </div>
      </section>

      <ProductPillars />

      {/* ── Vision / About section ── */}
      <VisionSection />

      {/* ── Sustainability Interventions ── */}
      <InterventionCards />

      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-widest uppercase text-tea-600 mb-3">
              Our Pillars
            </p>
            <h2 className="font-display text-tea-800 text-3xl lg:text-4xl font-bold">
              How We Make a Difference
            </h2>
            <p className="font-body text-charcoal/55 text-base mt-4 max-w-xl mx-auto">
              Four focus areas that guide every sustainability decision we make.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-tea-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-5xl mb-5">{p.icon}</div>
                <h3 className="font-display text-tea-800 text-lg font-bold mb-3">{p.title}</h3>
                <p className="font-body text-charcoal/55 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
