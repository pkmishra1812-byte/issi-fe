// src/components/home/Carousel.jsx
import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const items = [
  { id: 1, title: "Assam Black Tea", link: "/our-offering/tea", thumb: null },
  { id: 2, title: "Darjeeling First Flush", link: "/our-offering/tea", thumb: null },
  { id: 3, title: "Masala Chai", link: "/our-offering/tea", thumb: null },
  { id: 4, title: "Green Tea", link: "/our-offering/tea", thumb: null },
  { id: 5, title: "White Tea", link: "/our-offering/tea", thumb: null },
  { id: 6, title: "Baby Care Set", link: "/our-offering/baby-care", thumb: null },
  { id: 7, title: "Beauty Essentials", link: "/our-offering/beauty-products", thumb: null },
  { id: 8, title: "Spices Collection", link: "/our-offering/kitchen-products/spices", thumb: null },
  { id: 9, title: "Herbal Blends", link: "/our-offering/tea", thumb: null },
  { id: 10, title: "Tea Accessories", link: "/our-offering/tea/accessories", thumb: null },
];

const CARD_W = 220;
const GAP = 12;
const VISIBLE = 3;

const placeholderColors = [
  "bg-emerald-700", "bg-amber-700", "bg-teal-700", "bg-rose-700",
  "bg-sky-700", "bg-violet-700", "bg-lime-700", "bg-orange-700",
  "bg-cyan-700", "bg-pink-700",
];

export default function Carousel() {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [activeDot, setActiveDot] = useState(0);

  const totalPages = Math.ceil(items.length / VISIBLE);

  const updateState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 20);
    setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20);
    const maxScroll = el.scrollWidth - el.clientWidth;
    const ratio = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
    setActiveDot(Math.round(ratio * (totalPages - 1)));
  }, [totalPages]);

  const scrollByPage = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const page = (CARD_W + GAP) * VISIBLE;
    el.scrollBy({ left: dir * page, behavior: "smooth" });
    setTimeout(updateState, 400);
  };

  const scrollToDot = (dot) => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const target = totalPages > 1 ? (dot / (totalPages - 1)) * maxScroll : 0;
    el.scrollTo({ left: target, behavior: "smooth" });
    setActiveDot(dot);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateState, { passive: true });
    updateState();
    return () => el.removeEventListener("scroll", updateState);
  }, [updateState]);

  return (
    <section className="py-16 lg:py-20 bg-black">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 mb-8">
        <h2 className="font-display text-white text-2xl lg:text-3xl font-bold">
          Our Collection
        </h2>
      </div>

      <div className="relative max-w-screen-xl mx-auto">
        {/* Left arrow */}
        {showLeft && (
          <button
            onClick={() => scrollByPage(-1)}
            aria-label="Scroll left"
            className="absolute left-1 top-0 bottom-0 z-10 w-12 flex items-center justify-center bg-black/50 hover:bg-black/70 transition-colors rounded-r-xl"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scroll-smooth px-6 lg:px-8 py-2 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, i) => (
            <Link
              key={item.id}
              to={item.link}
              className="group shrink-0 w-[220px] rounded-lg overflow-hidden transition-all duration-200 hover:scale-110 hover:z-10 hover:ring-2 hover:ring-white relative"
              style={{ aspectRatio: "16/9" }}
            >
              <div className={`absolute inset-0 ${placeholderColors[i % placeholderColors.length]} flex items-center justify-center`}>
                <span className="text-white/80 text-xs font-bold text-center px-2 leading-tight">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Right arrow */}
        {showRight && (
          <button
            onClick={() => scrollByPage(1)}
            aria-label="Scroll right"
            className="absolute right-1 top-0 bottom-0 z-10 w-12 flex items-center justify-center bg-black/50 hover:bg-black/70 transition-colors rounded-l-xl"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Mini pagination dots — bottom right */}
        <div className="flex items-center justify-end gap-1.5 px-6 lg:px-8 mt-4">
          {Array.from({ length: totalPages }).map((_, dot) => (
            <button
              key={dot}
              onClick={() => scrollToDot(dot)}
              aria-label={`Go to page ${dot + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dot === activeDot
                  ? "w-6 bg-white"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
