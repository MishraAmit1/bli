import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Clock, Search, ArrowRight, Filter, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All Posts",
    "Logistics Trends",
    "Industry Insights",
    "Operational Tips",
    "Technology",
    "Sustainability",
  ];

  const blogPosts = [
    {
      title: "Digital Transformation in Supply Chain Analytics",
      excerpt:
        "Digital tools are revolutionizing supply chain decision-making and operational agility.",
      image:
        "https://i.pinimg.com/736x/4d/e5/ad/4de5add391b426b1f263c23fc76b612f.jpg",
      category: "Technology",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      featured: true,
      slug: "digital-transformation-supply-chain-analytics",
      author: "BLI Logistics Team",
    },
    {
      title: "AI-Powered Warehouse Automation Trends",
      excerpt:
        "The newest AI trends are unlocking smarter, scalable warehouse performance.",
      image:
        "https://i.pinimg.com/736x/16/b4/36/16b436e3702ffcb459c2fcb598f2f7e9.jpg",
      category: "Technology",
      readTime: "7 min read",
      date: "Dec 12, 2024",
      featured: true,
      slug: "ai-powered-warehouse-automation",
      author: "BLI Logistics Team",
    },
    {
      title: "Sustainable Logistics: Green Transportation Solutions",
      excerpt:
        "Sustainable logistics solutions are driving eco-conscious supply chain success.",
      image:
        "https://i.pinimg.com/1200x/e3/50/45/e35045144cec7d7d202269096fb5d71e.jpg",
      category: "Sustainability",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      featured: false,
      slug: "sustainable-logistics-green-transportation",
      author: "BLI Logistics Team",
    },
    {
      title: "Last-Mile Delivery Optimization Strategies",
      excerpt:
        "Route planning and automation are transforming last-mile logistics efficiency.",
      image:
        "https://i.pinimg.com/1200x/25/e6/00/25e600f4f9d7f5bd381fbe033d21183b.jpg",
      category: "Operational Tips",
      readTime: "4 min read",
      date: "Dec 8, 2024",
      featured: false,
      slug: "last-mile-delivery-optimization",
      author: "BLI Logistics Team",
    },
    {
      title: "Cross-Border Logistics: Navigating International Trade",
      excerpt:
        "Global trade logistics requires precision in compliance, customs, and partnerships.",
      image:
        "https://i.pinimg.com/736x/b0/8a/74/b08a747bc276c46fa62ef903447b3af7.jpg",
      category: "Industry Insights",
      readTime: "8 min read",
      date: "Dec 5, 2024",
      featured: false,
      slug: "cross-border-logistics-international-trade",
      author: "BLI Logistics Team",
    },
    {
      title: "The Future of Cold Chain Logistics",
      excerpt:
        "Emerging cold chain innovations keep goods safer and fresher in transit.",
      image:
        "https://i.pinimg.com/1200x/25/6c/2e/256c2e61a6d6f79148ba35b87510541b.jpg",
      category: "Logistics Trends",
      readTime: "6 min read",
      date: "Dec 3, 2024",
      featured: false,
      slug: "future-cold-chain-logistics",
      author: "BLI Logistics Team",
    },
  ];

  const filteredPosts = useMemo(() => {
    let filtered = [...blogPosts];
    if (searchQuery.trim()) {
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase().trim()),
      );
    }
    if (activeCategory !== "All Posts") {
      filtered = filtered.filter((post) => post.category === activeCategory);
    }
    return filtered;
  }, [searchQuery, activeCategory]);

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  const popularPosts = [
    {
      title: "Digital Transformation in Supply Chain Analytics",
      slug: "digital-transformation-supply-chain-analytics",
    },
    {
      title: "AI-Powered Warehouse Automation Trends",
      slug: "ai-powered-warehouse-automation",
    },
    {
      title: "Last-Mile Delivery Optimization Strategies",
      slug: "last-mile-delivery-optimization",
    },
    {
      title: "Cross-Border Logistics Guide",
      slug: "cross-border-logistics-international-trade",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "BLI Logistics Insights & Blog",
    description:
      "Expert insights on logistics, supply chain management, warehouse automation, and transportation trends in India",
    url: "https://blirapid.com/resources/blogs",
    publisher: {
      "@type": "Organization",
      name: "BLI - Bansal Logistics of India",
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://blirapid.com/resources/blogs/${post.slug}`,
      datePublished: post.date,
      author: { "@type": "Organization", name: post.author },
    })),
  };

  return (
    <PageLayout>
      <Helmet>
        <title>
          Logistics Blog & Industry Insights | Supply Chain Trends | BLI
        </title>
        <meta
          name="description"
          content="Expert logistics insights on supply chain analytics, AI warehouse automation, sustainable transportation, last-mile delivery optimization."
        />
        <link rel="canonical" href="https://blirapid.com/resources/blogs/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* ── HERO ── */}
      <div className="relative w-full h-[35vh] min-h-[300px] sm:h-[55vh] lg:h-[60vh] lg:max-h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.pinimg.com/736x/4d/e5/ad/4de5add391b426b1f263c23fc76b612f.jpg"
            alt="BLI Logistics Blog"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/40 to-black/80 flex items-center">
          <div className="max-w-[1280px] w-full mx-auto px-5 sm:px-8 lg:px-12">
            <nav className="mb-3 sm:mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li>
                  <Link
                    to="/"
                    className="text-white/90 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-white/70">
                  <ChevronRight className="w-3 h-3" />
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-white/80 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Resources
                  </Link>
                </li>
                <li className="text-white/70">
                  <ChevronRight className="w-3 h-3" />
                </li>
                <li>
                  <span className="text-white/60 text-xs sm:text-sm font-semibold">
                    Blogs
                  </span>
                </li>
              </ol>
            </nav>

            <h1 className="font-bold text-white uppercase tracking-normal mb-3 text-[28px] leading-[34px] sm:text-[40px] sm:leading-[46px] lg:text-[52px] lg:leading-[60px]">
              <span className="block">Logistics Insights</span>
              <span className="block">& Blogs</span>
            </h1>
            <p className="font-light max-w-xl mt-4 sm:mt-5 text-white/90 text-sm sm:text-base lg:text-[20px] lg:leading-[29px]">
              Stay informed with the latest trends, insights, and best practices
              in logistics and supply chain management.
            </p>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
          {/* ── LEFT: Main ── */}
          <main className="flex-1 min-w-0">
            {/* Search + Filter */}
            <div className="mb-8 sm:mb-10">
              {/* Search bar */}
              <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-5">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#113C6A] transition-colors"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search blog articles"
                  />
                </div>
                {(searchQuery || activeCategory !== "All Posts") && (
                  <button
                    onClick={() => {
                      setActiveCategory("All Posts");
                      setSearchQuery("");
                    }}
                    className="px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 text-xs sm:text-sm font-medium text-[#1a1a1a] hover:bg-gray-50 transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category pills */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-[#113C6A] text-white"
                        : "border border-gray-200 text-gray-500 hover:border-[#113C6A] hover:text-[#113C6A]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <div className="mb-10 sm:mb-12">
                <p className="font-semibold uppercase tracking-widest mb-3 text-[11px] sm:text-xs lg:text-[14px] lg:leading-[17px] text-[#1C1825]">
                  Featured Articles
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  {featuredPosts.map((post, i) => (
                    <Link
                      key={i}
                      to={`/resources/blogs/${post.slug}`}
                      className="group bg-white border border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#113C6A]/20 transition-all duration-300"
                    >
                      <div className="relative overflow-hidden h-[160px] sm:h-[180px] lg:h-[200px]">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <span className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4 text-white/80 text-[10px] sm:text-[11px] font-medium uppercase tracking-widest">
                          {post.readTime}
                        </span>
                      </div>
                      <div className="p-4 sm:p-5">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#113C6A] bg-[#113C6A]/10 px-1.5 sm:px-2 py-0.5 sm:py-1">
                            {post.category}
                          </span>
                          <span className="text-[11px] sm:text-[12px] text-gray-400">
                            {post.date}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-[#1a1a1a] leading-snug mb-2 group-hover:text-[#113C6A] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-1.5 text-[#113C6A] group-hover:text-[#FF7300] transition-colors">
                          <span className="text-xs sm:text-sm font-semibold">
                            Read More
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* All Posts */}
            <div>
              <p className="font-semibold uppercase tracking-widest mb-4 sm:mb-6 text-[11px] sm:text-xs lg:text-[14px] lg:leading-[17px] text-[#1C1825]">
                {filteredPosts.length > 0
                  ? "All Articles"
                  : "No Articles Found"}
              </p>

              {filteredPosts.length === 0 ? (
                <div className="text-center py-12 sm:py-16 border border-gray-200 bg-gray-50">
                  <Filter className="h-8 w-8 sm:h-10 sm:w-10 mx-auto text-gray-300 mb-3 sm:mb-4" />
                  <h3 className="text-sm sm:text-base font-bold text-[#1a1a1a] mb-2">
                    No Articles Found
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-light mb-5 sm:mb-6 px-4">
                    {searchQuery
                      ? `No articles match "${searchQuery}".`
                      : `No articles in the ${activeCategory} category.`}
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory("All Posts");
                      setSearchQuery("");
                    }}
                    className="inline-flex items-center gap-2 border border-[#1a1a1a] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                  >
                    Show All Articles
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4 sm:gap-5">
                  {regularPosts.map((post, i) => (
                    <Link
                      key={i}
                      to={`/resources/blogs/${post.slug}`}
                      className="group bg-white border border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#113C6A]/20 transition-all duration-300 flex flex-col sm:flex-row"
                    >
                      <div className="relative overflow-hidden sm:w-[200px] lg:w-[260px] flex-shrink-0 h-[160px] sm:h-auto">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 flex-wrap">
                          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#113C6A] bg-[#113C6A]/10 px-1.5 sm:px-2 py-0.5 sm:py-1">
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1 text-[11px] sm:text-[12px] text-gray-400">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                          <span className="text-[11px] sm:text-[12px] text-gray-400 hidden sm:inline">
                            {post.date}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-[#1a1a1a] leading-snug mb-2 group-hover:text-[#113C6A] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-1.5 text-[#113C6A] group-hover:text-[#FF7300] transition-colors">
                          <span className="text-xs sm:text-sm font-semibold">
                            Read More
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </main>

          {/* ── RIGHT: Sidebar ── */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-24 flex flex-col gap-5 sm:gap-6">
              {/* Newsletter */}
              <div className="border border-gray-200 bg-white p-5 sm:p-6">
                <h3 className="text-sm sm:text-base font-bold text-[#1a1a1a] mb-1">
                  Stay Updated
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed mb-3 sm:mb-4">
                  Get the latest logistics insights delivered to your inbox.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col gap-2.5 sm:gap-3"
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    required
                    className="w-full px-3 py-2 sm:py-2.5 border border-gray-200 text-sm focus:outline-none focus:border-[#113C6A] transition-colors"
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 border border-[#1a1a1a] px-4 py-2 sm:py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                  >
                    <span className="text-xs sm:text-sm font-medium text-[#1a1a1a] group-hover:text-white transition-colors">
                      Subscribe
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </button>
                </form>
              </div>

              {/* Popular Posts */}
              <div className="border border-gray-200 bg-white p-5 sm:p-6">
                <h3 className="text-sm sm:text-base font-bold text-[#1a1a1a] mb-3 sm:mb-4">
                  Popular Posts
                </h3>
                <ul className="flex flex-col gap-2.5 sm:gap-3">
                  {popularPosts.map((post, i) => (
                    <li
                      key={i}
                      className="border-b border-gray-100 last:border-b-0 pb-2.5 sm:pb-3 last:pb-0"
                    >
                      <Link
                        to={`/resources/blogs/${post.slug}`}
                        className="group flex items-start gap-2 text-xs sm:text-sm font-medium text-[#1a1a1a] hover:text-[#113C6A] transition-colors leading-snug"
                      >
                        <span className="text-[#FF7300] font-bold text-[10px] sm:text-xs mt-0.5 flex-shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="border border-gray-200 bg-white p-5 sm:p-6">
                <h3 className="text-sm sm:text-base font-bold text-[#1a1a1a] mb-3 sm:mb-4">
                  Categories
                </h3>
                <ul className="flex flex-col gap-1">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`w-full text-left px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm transition-colors flex justify-between items-center ${
                          activeCategory === cat
                            ? "bg-[#113C6A] text-white font-semibold"
                            : "text-gray-500 hover:bg-gray-50 hover:text-[#1a1a1a]"
                        }`}
                      >
                        <span>{cat}</span>
                        <span className="text-[10px] sm:text-xs opacity-70">
                          {cat === "All Posts"
                            ? blogPosts.length
                            : blogPosts.filter((p) => p.category === cat)
                                .length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-[#113C6A] p-5 sm:p-6">
                <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                  Need Logistics Solutions?
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-4 sm:mb-5">
                  Ready to optimize your supply chain? Get a customized quote
                  today.
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 border border-white/40 px-4 sm:px-5 py-2 sm:py-2.5 text-white hover:bg-white hover:text-[#113C6A] transition-all duration-300"
                >
                  <span className="text-xs sm:text-sm font-medium">
                    Get Quote
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </PageLayout>
  );
};

export default Blogs;
