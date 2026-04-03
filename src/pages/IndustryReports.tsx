import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  BarChart3,
  ArrowRight,
  Search,
  Download,
  Calendar,
  Eye,
  TrendingUp,
  Clock,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";

const IndustryReports = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState("All Reports");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredRef = useRef<HTMLElement>(null);
  const allRef = useRef<HTMLElement>(null);
  const insightsRef = useRef<HTMLElement>(null);
  const featuredInView = useInView(featuredRef, {
    once: true,
    margin: "-80px",
  });
  const allInView = useInView(allRef, { once: true, margin: "-80px" });
  const insightsInView = useInView(insightsRef, {
    once: true,
    margin: "-80px",
  });

  const reportCategories = [
    "All Reports",
    "Market Analysis",
    "Industry Trends",
    "Logistics Insights",
    "Supply Chain",
    "Technology",
  ];

  const reports = [
    {
      title: "Indian Logistics Market Outlook 2025",
      description:
        "Comprehensive analysis of the Indian logistics sector, market size, growth projections, and key players.",
      image: "/lovable-uploads/services1.webp",
      category: "Market Analysis",
      date: "August 2024",
      dateISO: "2024-08-01",
      readTime: "15 min read",
      featured: true,
      views: 2547,
      slug: "indian-logistics-market-outlook-2025",
    },
    {
      title: "E-commerce Logistics Trends & Innovations",
      description:
        "In-depth look at how e-commerce is reshaping logistics operations, last-mile delivery innovations, and fulfillment strategies.",
      image: "/lovable-uploads/services2.webp",
      category: "Industry Trends",
      date: "July 2024",
      dateISO: "2024-07-01",
      readTime: "12 min read",
      featured: true,
      views: 1892,
      slug: "ecommerce-logistics-trends-innovations",
    },
    {
      title: "Supply Chain Resilience: Post-Pandemic Strategies",
      description:
        "Analysis of how companies are rebuilding supply chain resilience after global disruptions, with actionable strategies.",
      image: "/lovable-uploads/services3.webp",
      category: "Supply Chain",
      date: "June 2024",
      dateISO: "2024-06-01",
      readTime: "18 min read",
      featured: true,
      views: 2104,
      slug: "supply-chain-resilience-post-pandemic",
    },
    {
      title: "AI & Machine Learning in Logistics Operations",
      description:
        "Exploring how artificial intelligence and machine learning are transforming route optimization, demand forecasting, and warehouse automation.",
      image: "/lovable-uploads/services4.webp",
      category: "Technology",
      date: "May 2024",
      dateISO: "2024-05-01",
      readTime: "14 min read",
      featured: false,
      views: 1756,
      slug: "ai-machine-learning-logistics-operations",
    },
    {
      title: "Cold Chain Logistics: Market Growth & Challenges",
      description:
        "Analysis of India's cold chain logistics sector, infrastructure gaps, investment opportunities, and regulatory landscape.",
      image: "/lovable-uploads/services5.webp",
      category: "Market Analysis",
      date: "April 2024",
      dateISO: "2024-04-01",
      readTime: "16 min read",
      featured: false,
      views: 1432,
      slug: "cold-chain-logistics-market-growth",
    },
    {
      title: "Sustainable Logistics: Environmental Impact Report",
      description:
        "Comprehensive study on carbon footprint reduction, green transportation alternatives, and sustainability metrics in logistics.",
      image: "/lovable-uploads/services6.webp",
      category: "Industry Trends",
      date: "March 2024",
      dateISO: "2024-03-01",
      readTime: "20 min read",
      featured: false,
      views: 1678,
      slug: "sustainable-logistics-environmental-impact",
    },
    {
      title: "Last-Mile Delivery Economics: Cost Analysis",
      description:
        "Detailed breakdown of last-mile delivery costs, optimization strategies, and profitability models for urban logistics.",
      image: "/lovable-uploads/services7.webp",
      category: "Logistics Insights",
      date: "February 2024",
      dateISO: "2024-02-01",
      readTime: "13 min read",
      featured: false,
      views: 1845,
      slug: "last-mile-delivery-economics",
    },
    {
      title: "Warehouse Automation: ROI & Implementation Guide",
      description:
        "Practical guide to warehouse automation technologies, implementation roadmap, and return on investment calculations.",
      image: "/lovable-uploads/services8.webp",
      category: "Technology",
      date: "January 2024",
      dateISO: "2024-01-01",
      readTime: "17 min read",
      featured: false,
      views: 1567,
      slug: "warehouse-automation-roi-guide",
    },
    {
      title: "Multi-Modal Transportation: Efficiency Analysis",
      description:
        "Research on combining road, rail, air, and sea transportation for optimal logistics efficiency and cost reduction.",
      image: "/lovable-uploads/services1.webp",
      category: "Logistics Insights",
      date: "December 2023",
      dateISO: "2023-12-01",
      readTime: "15 min read",
      featured: false,
      views: 1289,
      slug: "multi-modal-transportation-efficiency",
    },
    {
      title: "Supply Chain Visibility: Technology Solutions",
      description:
        "Overview of technologies enabling end-to-end supply chain visibility, from IoT sensors to blockchain implementations.",
      image: "/lovable-uploads/services2.webp",
      category: "Supply Chain",
      date: "November 2023",
      dateISO: "2023-11-01",
      readTime: "14 min read",
      featured: false,
      views: 1632,
      slug: "supply-chain-visibility-technology",
    },
  ];

  const trendingInsights = [
    {
      stat: "35%",
      trend: "increase",
      text: "in e-commerce logistics demand across tier-2 and tier-3 cities",
    },
    {
      stat: "₹10.5L Cr",
      trend: "market size",
      text: "projected for Indian logistics sector by 2025",
    },
    {
      stat: "42%",
      trend: "reduction",
      text: "in last-mile delivery costs through route optimization",
    },
    {
      stat: "3.2 days",
      trend: "average",
      text: "transit time for interstate shipments across India",
    },
    {
      stat: "68%",
      trend: "of companies",
      text: "investing in warehouse automation technologies",
    },
    {
      stat: "27%",
      trend: "decrease",
      text: "in carbon emissions through green logistics initiatives",
    },
  ];

  // Filter reports
  const filteredReports = reports.filter((report) => {
    const categoryMatch =
      activeCategory === "All Reports" || report.category === activeCategory;
    const searchMatch =
      searchQuery === "" ||
      report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const featuredReports = filteredReports.filter((report) => report.featured);
  const regularReports = filteredReports.filter((report) => !report.featured);

  // Get count for each category
  const getCategoryCount = (category: string) => {
    if (category === "All Reports") return reports.length;
    return reports.filter((r) => r.category === category).length;
  };

  // Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Logistics Industry Reports & Market Analysis",
    description:
      "Comprehensive logistics industry reports covering market analysis, trends, supply chain insights, and technology innovations.",
    provider: {
      "@type": "Organization",
      name: "BLI - Bansal Logistics of India",
      url: "https://blirapid.com",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://blirapid.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources",
        item: "https://blirapid.com/resources",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Industry Reports",
        item: "https://blirapid.com/resources/reports",
      },
    ],
  };

  return (
    <PageLayout>
      <Helmet>
        <title>
          Logistics Industry Reports & Market Analysis - Trends & Insights | BLI
        </title>
        <meta
          name="description"
          content="Access comprehensive logistics industry reports covering market analysis, e-commerce trends, supply chain insights, AI technology, and sustainability."
        />
        <link rel="canonical" href="https://blirapid.com/resources/reports/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* ── HERO ── */}
      <div className="relative w-full h-[35vh] min-h-[300px] sm:h-[55vh] lg:h-[60vh] lg:max-h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/services1.webp"
            alt="Industry Reports"
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
                    Industry Reports
                  </span>
                </li>
              </ol>
            </nav>

            <h1 className="font-bold text-white uppercase tracking-normal mb-3 text-[28px] leading-[34px] sm:text-[40px] sm:leading-[46px] lg:text-[52px] lg:leading-[60px]">
              <span className="block">Industry Reports</span>
              <span className="block">& Analysis</span>
            </h1>
            <p className="font-light max-w-xl mt-4 sm:mt-5 text-white/90 text-sm sm:text-base lg:text-[20px] lg:leading-[29px]">
              Gain valuable insights into logistics trends, market analysis, and
              industry best practices through our comprehensive reports.
            </p>
          </div>
        </div>
      </div>

      {/* ── STICKY CATEGORY NAV ── */}
      <nav
        className="bg-slate-100 border-b border-gray-200 sticky top-[56px] sm:top-[64px] lg:top-[66px] z-50 overflow-x-auto scrollbar-hide"
        aria-label="Filter by category"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center min-w-max">
            {reportCategories.map((category) => {
              const isActive = activeCategory === category;
              const count = getCategoryCount(category);
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative py-3 sm:py-3.5 px-1 mr-5 sm:mr-6 lg:mr-8 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-[#113C6A]"
                      : "text-gray-400 hover:text-[#1a1a1a]"
                  }`}
                >
                  {category}
                  <span
                    className={`ml-1.5 text-[10px] sm:text-xs ${
                      isActive ? "text-[#FF7300]" : "text-gray-300"
                    }`}
                  >
                    ({count})
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#113C6A] transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ── SEARCH BAR ── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-5 sm:py-6">
          <div className="relative max-w-xl">
            <Search
              className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
              aria-hidden="true"
            />
            <Input
              placeholder="Search reports..."
              className="pl-10 sm:pl-12 h-11 sm:h-12 text-sm sm:text-base border-gray-200 focus:border-[#113C6A] bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search industry reports"
            />
          </div>
        </div>
      </div>

      {/* ── FEATURED REPORTS ── */}
      {featuredReports.length > 0 && (
        <section ref={featuredRef} className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 lg:gap-6 mb-8 sm:mb-10">
              <div>
                <p className="font-semibold uppercase tracking-widest mb-2 sm:mb-3 text-[11px] sm:text-xs lg:text-[14px] lg:leading-[17px] text-[#1C1825]">
                  Latest Research
                </p>
                <h2 className="font-bold uppercase tracking-normal text-[24px] leading-[30px] sm:text-[32px] sm:leading-[38px] lg:text-[44px] lg:leading-[52px] text-black">
                  <span className="sm:block">Featured </span>
                  <span className="sm:block">Reports</span>
                </h2>
              </div>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"
              initial={{ opacity: 0, y: 30 }}
              animate={featuredInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {featuredReports.map((report, index) => (
                <Link
                  key={index}
                  to={`/resources/reports/${report.slug}`}
                  className="group bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-[160px] sm:h-[180px] lg:h-[200px]">
                    <img
                      src={report.image}
                      alt={report.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute top-2 sm:top-3 left-2 sm:left-3 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-[11px] text-white bg-[#113C6A] font-medium">
                      {report.category}
                    </span>
                    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 flex items-center gap-2 sm:gap-3 text-white/80 text-[10px] sm:text-[11px]">
                      <span className="flex items-center gap-0.5 sm:gap-1">
                        <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        {report.date}
                      </span>
                      <span className="flex items-center gap-0.5 sm:gap-1">
                        <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        {report.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 lg:p-6">
                    <h3 className="text-sm sm:text-base font-bold text-[#1a1a1a] leading-snug mb-2 group-hover:text-[#113C6A] transition-colors duration-300 line-clamp-2">
                      {report.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                      {report.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs text-gray-400 flex items-center gap-0.5 sm:gap-1">
                        <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        {report.views.toLocaleString()} views
                      </span>
                      <span className="flex items-center gap-1 sm:gap-1.5 text-[#113C6A] group-hover:text-[#FF7300] transition-colors duration-300">
                        <span className="text-xs sm:text-sm font-semibold">
                          Read Report
                        </span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── ALL REPORTS ── */}
      <section
        ref={allRef}
        className="py-12 sm:py-16 lg:py-20 bg-gray-50 border-t border-gray-200"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 lg:gap-6 mb-8 sm:mb-10">
            <div>
              <p className="font-semibold uppercase tracking-widest mb-2 sm:mb-3 text-[11px] sm:text-xs lg:text-[14px] lg:leading-[17px] text-[#1C1825]">
                {activeCategory}
              </p>
              <h2 className="font-bold uppercase tracking-normal text-[24px] leading-[30px] sm:text-[32px] sm:leading-[38px] lg:text-[44px] lg:leading-[52px] text-black">
                <span className="sm:block">All</span>
                <span className="sm:block"> Reports</span>
              </h2>
              <p className="font-light max-w-lg mt-2 sm:mt-3 text-sm sm:text-base lg:text-[18px] lg:leading-[27px] text-[#1C1825]">
                {filteredReports.length} reports available.
              </p>
            </div>
          </div>

          {filteredReports.length === 0 ? (
            <div className="text-center py-12 sm:py-16 bg-white border border-gray-200">
              <p className="text-gray-500 mb-5 sm:mb-6 text-sm sm:text-base">
                No reports match your search criteria.
              </p>
              <button
                className="group inline-flex items-center gap-2.5 border border-[#1a1a1a] px-5 sm:px-6 py-2 sm:py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                onClick={() => {
                  setActiveCategory("All Reports");
                  setSearchQuery("");
                }}
              >
                <span className="font-medium text-xs sm:text-sm">
                  Reset Filters
                </span>
              </button>
            </div>
          ) : (
            <motion.div
              className="space-y-0"
              initial={{ opacity: 0, y: 30 }}
              animate={allInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {regularReports.map((report, index) => (
                <Link
                  key={index}
                  to={`/resources/reports/${report.slug}`}
                  className="group flex flex-col md:flex-row bg-white border-b border-gray-200 first:border-t hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="md:w-1/4 h-[140px] sm:h-[160px] md:h-auto overflow-hidden relative">
                    <img
                      src={report.image}
                      alt={report.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-2 sm:top-3 left-2 sm:left-3 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] text-white bg-[#113C6A] font-medium">
                      {report.category}
                    </span>
                  </div>

                  <div className="flex-1 p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-gray-400 mb-1.5 sm:mb-2">
                      <span className="flex items-center gap-0.5 sm:gap-1">
                        <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        {report.date}
                      </span>
                      <span className="flex items-center gap-0.5 sm:gap-1">
                        <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        {report.readTime}
                      </span>
                      <span className="flex items-center gap-0.5 sm:gap-1">
                        <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        {report.views.toLocaleString()}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-1.5 sm:mb-2 group-hover:text-[#113C6A] transition-colors">
                      {report.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-light line-clamp-2 mb-3 sm:mb-4">
                      {report.description}
                    </p>

                    <div className="flex items-center gap-3 sm:gap-4">
                      <button className="group/btn inline-flex items-center gap-1.5 sm:gap-2 border border-[#1a1a1a] px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300">
                        <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="font-medium text-xs sm:text-sm">
                          PDF
                        </span>
                      </button>
                      <span className="flex items-center gap-1 sm:gap-1.5 text-[#113C6A] group-hover:text-[#FF7300] transition-colors duration-300">
                        <span className="text-xs sm:text-sm font-semibold">
                          Read Report
                        </span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── TRENDING INSIGHTS ── */}
      <section
        ref={insightsRef}
        className="py-12 sm:py-16 lg:py-20 bg-white border-t border-gray-200"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-10">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF7300]" />
            <div>
              <p className="font-semibold uppercase tracking-widest mb-0.5 sm:mb-1 text-[11px] sm:text-xs lg:text-[14px] lg:leading-[17px] text-[#1C1825]">
                Key Data Points
              </p>
              <h2 className="font-bold uppercase tracking-normal text-[20px] leading-[26px] sm:text-[24px] sm:leading-[30px] lg:text-[32px] lg:leading-[38px] text-black">
                Trending Insights
              </h2>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[1px] bg-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={insightsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {trendingInsights.map((insight, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-5 lg:p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="font-bold text-[#FF7300] mb-0.5 sm:mb-1 text-[20px] leading-[26px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px]">
                  {insight.stat}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#113C6A] mb-0.5 sm:mb-1">
                  {insight.trend}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 font-light leading-relaxed">
                  {insight.text}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-12 sm:py-14 lg:py-16 px-5 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-[#113C6A]">
        <div className="max-w-[1280px] mx-auto text-center">
          <p className="font-semibold uppercase tracking-widest mb-2 sm:mb-3 text-[11px] sm:text-xs lg:text-[14px] lg:leading-[17px] text-[#1C1825]">
            Need Custom Research?
          </p>
          <h2 className="font-bold uppercase tracking-normal mb-3 sm:mb-4 text-[24px] leading-[30px] sm:text-[32px] sm:leading-[38px] lg:text-[44px] lg:leading-[52px] text-black">
            <span className="block">Custom Industry</span>
            <span className="block">Analysis</span>
          </h2>
          <p className="font-light text-[#1C1825] mb-6 sm:mb-8 text-sm sm:text-base lg:text-[18px] lg:leading-[27px] max-w-2xl mx-auto">
            Our research team can provide tailored industry reports and market
            analysis specific to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#FF7300] text-white hover:bg-[#e56800] transition-all"
            >
              <span className="font-medium text-xs sm:text-sm">
                Request Custom Report
              </span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-[#F8FFFF] text-[#F8FFFF] hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all"
            >
              <span className="font-medium text-xs sm:text-sm">
                Subscribe to Updates
              </span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default IndustryReports;
