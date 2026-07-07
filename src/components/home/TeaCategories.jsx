import { Link } from "react-router-dom";
import banner1 from "../../assets/banner-new-1.png";
import banner2 from "../../assets/banner-new-2.png";
import banner3 from "../../assets/banner-new-3.png";
import banner4 from "../../assets/banner-new-4.png";

const categories = [
  { name: "Tea", slug: "/our-offering/tea", img: banner1 },
  { name: "Spices", slug: "/our-offering/kitchen-products/spices", img: banner2 },
  { name: "Baby Care", slug: "/our-offering/baby-care", img: banner3 },
  { name: "Beauty", slug: "/our-offering/beauty-products", img: banner4 },
];

export default function TeaCategories() {
  return (
    <section className="pt-16 lg:pt-20 pb-20 lg:pb-28 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="mb-12 lg:mb-14">
          <h2 className="font-body text-[1.7rem] tracking-[0.15em] uppercase text-tea-500 mb-2 font-black">
            Our Business
          </h2>
          <h2 className="font-display text-tea-800 text-3xl lg:text-4xl font-bold">
            Our brands are creating Desire at Scale
          </h2>
        </div>

        <div className="flex gap-5 lg:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.slug}
              className="group shrink-0 w-[75vw] sm:w-[45vw] lg:w-[23%] snap-start rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between px-4 py-4 lg:px-5 lg:py-4 min-h-[60px]">
                <h3 className="font-display text-tea-800 text-sm lg:text-base font-bold">
                  {cat.name}
                </h3>
                <span
                  aria-label={`Go to ${cat.name}`}
                  className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border-2 border-tea-600 flex items-center justify-center text-tea-600 text-sm font-bold transition-colors group-hover:bg-tea-600 group-hover:text-white shrink-0"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
