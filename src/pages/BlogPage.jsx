// src/pages/BlogPage.jsx
import PageHero from "../components/shared/PageHero";
import { Link } from "react-router-dom";

const posts = [
  {
    date: "May 28, 2026",
    category: "Tea Culture",
    title: "The Art of Brewing the Perfect Cup of Indian Chai",
    excerpt: "From the right leaf-to-water ratio to the perfect boil — discover the time-honoured techniques that make Indian chai an experience, not just a beverage.",
  },
  {
    date: "May 15, 2026",
    category: "Health & Wellness",
    title: "Green Tea vs. Black Tea: Which One Is Right for You?",
    excerpt: "Both are packed with antioxidants, but their processing methods, caffeine levels, and health benefits differ. We break down everything you need to know.",
  },
  {
    date: "April 30, 2026",
    category: "Recipes",
    title: "5 Warming Spice Blends to Elevate Your Winter Menu",
    excerpt: "From masala chai to spiced hot chocolate — our master blender shares five versatile spice blends that will transform your cold-weather offerings.",
  },
  {
    date: "April 12, 2026",
    category: "Sustainability",
    title: "How Direct Garden Sourcing Supports Indian Tea Farmers",
    excerpt: "Cutting out the middleman isn't just good for business — it's a lifeline for smallholder farmers. Here's how our sourcing model creates a fairer supply chain.",
  },
  {
    date: "March 28, 2026",
    category: "Baby Care",
    title: "Ayurvedic Traditions in Modern Baby Care: A Parent's Guide",
    excerpt: "Ancient Indian wellness meets modern dermatology — learn about the natural ingredients that have been nurturing babies for generations.",
  },
  {
    date: "March 10, 2026",
    category: "Industry Insights",
    title: "India's Tea Industry in 2026: Trends, Challenges & Opportunities",
    excerpt: "With climate shifts and changing consumer preferences, the Indian tea landscape is evolving rapidly. Our experts weigh in on what lies ahead.",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Golden Leaf Tea Co."
        breadcrumb="Home / Blog"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-widest uppercase text-tea-600 mb-3">
              Insights & Stories
            </p>
            <h2 className="font-display text-tea-800 text-3xl lg:text-4xl font-bold">
              From Our Desk to Yours
            </h2>
            <p className="font-body text-charcoal/55 text-base mt-4 max-w-xl mx-auto">
              Expert takes, brewing guides, industry trends, and stories from the gardens that
              bring your cup to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group bg-white border border-tea-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-full aspect-[4/3] bg-tea-50 border-b border-tea-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📝</div>
                    <p className="font-body text-xs text-charcoal/35">[{post.category} Image]</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-body text-xs text-charcoal/40">{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-tea-300" />
                    <span className="font-body text-xs text-tea-600 font-semibold tracking-wide uppercase">{post.category}</span>
                  </div>
                  <h3 className="font-display text-tea-800 text-lg font-bold leading-snug mb-3 group-hover:text-tea-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-charcoal/55 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to="#"
                    className="font-body text-sm text-tea-700 font-semibold hover:text-tea-800 transition-colors inline-flex items-center gap-1"
                  >
                    Read More <span>&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
