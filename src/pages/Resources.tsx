import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  BarChart3,
  HelpCircle,
  Download,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Helmet } from "react-helmet-async";

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickRef = useRef<HTMLElement>(null);
  const blogRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const downloadRef = useRef<HTMLElement>(null);

  const quickInView = useInView(quickRef, { once: true, margin: "-80px" });
  const blogInView = useInView(blogRef, { once: true, margin: "-80px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });
  const downloadInView = useInView(downloadRef, {
    once: true,
    margin: "-80px",
  });

  const quickAccessItems = [
    {
      icon: BookOpen,
      title: "Blogs & Insights",
      description: "Latest trends and expert insights in logistics",
      href: "/resources/blogs",
    },
    {
      icon: HelpCircle,
      title: "FAQs",
      description: "Quick answers to common questions",
      href: "/resources/faqs",
    },
    {
      icon: Download,
      title: "Downloads",
      description: "Brochures, profiles, and resources",
      href: "/resources/downloads",
    },
    {
      icon: BarChart3,
      title: "Industry Reports",
      description: "Data-driven logistics industry insights",
      href: "/resources/reports",
    },
  ];

  const featuredBlogs = [
    {
      title: "Digital Transformation in Supply Chain Analytics",
      excerpt:
        "Analytics and data intelligence reshaping global supply chains.",
      image:
        "https://i.pinimg.com/736x/4d/e5/ad/4de5add391b426b1f263c23fc76b612f.jpg",
      readTime: "5 min read",
      slug: "digital-transformation-supply-chain-analytics",
    },
    {
      title: "AI-Powered Warehouse Automation Trends",
      excerpt: "AI-powered robots and systems redefining warehouse operations.",
      image:
        "https://i.pinimg.com/736x/16/b4/36/16b436e3702ffcb459c2fcb598f2f7e9.jpg",
      readTime: "7 min read",
      slug: "ai-powered-warehouse-automation",
    },
    {
      title: "Sustainable Logistics: Green Transportation Solutions",
      excerpt:
        "Eco logistics strategies paving the way for sustainable transport.",
      image:
        "https://i.pinimg.com/1200x/e3/50/45/e35045144cec7d7d202269096fb5d71e.jpg",
      readTime: "6 min read",
      slug: "sustainable-logistics-green-transportation",
    },
  ];

  const topFAQs = [
    {
      question: "How do I request a shipment?",
      answer:
        "You can request a shipment through our online portal, mobile app, or by calling our 24/7 customer service team. Simply provide pickup and delivery details, and we'll handle the rest.",
    },
    {
      question: "What tracking options are available?",
      answer:
        "We offer real-time GPS tracking, SMS updates, email notifications, and a comprehensive online tracking portal where you can monitor your shipment's progress 24/7.",
    },
    {
      question: "What are your delivery timeframes?",
      answer:
        "Delivery times vary by service type and distance. Express deliveries within cities are typically same-day or next-day, while interstate shipments range from 2-5 business days.",
    },
    {
      question: "How is pricing calculated?",
      answer:
        "Pricing is based on factors including distance, weight, dimensions, service type, and any special handling requirements. Contact us for a detailed quote tailored to your needs.",
    },
  ];

  const downloads = [
    {
      title: "Company Profile",
      description: "Learn about BLI's history, values, and capabilities",
      size: "2.5 MB PDF",
    },
    {
      title: "Service Brochure",
      description: "Comprehensive overview of our logistics solutions",
      size: "3.2 MB PDF",
    },
    {
      title: "Industry Report 2025",
      description: "Latest trends and insights in Indian logistics",
      size: "4.8 MB PDF",
    },
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>
          Logistics Resources & Knowledge Center | Blogs, FAQs, Reports | BLI
        </title>
        <meta
          name="description"
          content="Comprehensive logistics resources: Expert blogs on supply chain analytics, AI automation, sustainability. FAQs, industry reports, downloadable brochures."
        />
        <link rel="canonical" href="https://blirapid.com/resources/" />
      </Helmet>

      {/* ── HERO ── */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] max-h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.pinimg.com/736x/4d/e5/ad/4de5add391b426b1f263c23fc76b612f.jpg"
            alt="BLI Resources"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/40 to-black/80 flex items-center">
          <div className="max-w-[1280px] w-full mx-auto px-5 sm:px-8 lg:px-12">
            <nav className="mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5">
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
                  <span className="text-white/80 text-xs sm:text-sm font-semibold">
                    Resources
                  </span>
                </li>
              </ol>
            </nav>

            <h1
              className="font-bold text-white uppercase tracking-normal mb-3"
              style={{ fontSize: "52px", lineHeight: "60px" }}
            >
              <span className="block">Resources & </span>
              <span className="block">Knowledge Center</span>
            </h1>
            <p
              className="font-light max-w-xl mt-5 text-white/90"
              style={{ fontSize: "20px", lineHeight: "29px" }}
            >
              From insights to FAQs — find everything you need to move smarter
              with BLI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/resources/blogs"
                className="group inline-flex items-center justify-center gap-2.5 bg-white text-[#113C6A] border-2 border-white px-6 py-2.5 hover:bg-transparent hover:text-white transition-all duration-300"
              >
                <span className="font-medium text-sm">Explore Blogs</span>
                <ArrowRight className="w-4 h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2.5 border-2 border-white/60 text-white px-6 py-2.5 hover:bg-white hover:text-[#113C6A] transition-all duration-300"
              >
                <span className="font-medium text-sm">Get Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── QUICK ACCESS ── */}
      <section ref={quickRef} className="py-20 sm:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p
              className="font-semibold uppercase tracking-widest mb-3"
              style={{
                fontSize: "14px",
                lineHeight: "17px",
                color: "rgb(28, 24, 37)",
              }}
            >
              Explore
            </p>
            <h2
              className="font-bold uppercase tracking-normal mb-3"
              style={{
                fontSize: "52px",
                lineHeight: "60px",
                color: "rgb(0, 0, 0)",
              }}
            >
              <span className="block">Quick Access</span>
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={quickInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {quickAccessItems.map((item, i) => (
              <Link
                key={i}
                to={item.href}
                className="group bg-white p-6 sm:p-8 hover:bg-gray-50 transition-all duration-300 relative"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#113C6A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="w-12 h-12 bg-[#113C6A]/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#113C6A]" />
                </div>

                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:text-[#113C6A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex items-center gap-1.5 text-[#113C6A] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED BLOGS ── */}
      <section ref={blogRef} className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div>
              <p
                className="font-semibold uppercase tracking-widest mb-3"
                style={{
                  fontSize: "14px",
                  lineHeight: "17px",
                  color: "rgb(28, 24, 37)",
                }}
              >
                Latest Insights
              </p>
              <h2
                className="font-bold uppercase tracking-normal mb-3"
                style={{
                  fontSize: "52px",
                  lineHeight: "60px",
                  color: "rgb(0, 0, 0)",
                }}
              >
                <span className="block">From Our</span>
                <span className="block">Blog</span>
              </h2>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/resources/blogs"
                className="group inline-flex items-center gap-2.5 border border-[#1a1a1a] px-6 py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              >
                <span className="font-medium text-sm text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                  View All Blogs
                </span>
                <ArrowRight className="w-4 h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={blogInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {featuredBlogs.map((blog, i) => (
              <Link
                key={i}
                to={`/resources/blogs/${blog.slug}`}
                className="group bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative overflow-hidden h-[220px]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-white/80 text-[11px] font-medium uppercase tracking-widest">
                    {blog.readTime}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-base font-bold text-[#1a1a1a] leading-snug mb-2 group-hover:text-[#113C6A] transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center gap-1.5 text-[#113C6A] group-hover:text-[#FF7300] transition-colors duration-300">
                    <span className="text-sm font-semibold">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        ref={faqRef}
        className="py-20 sm:py-24 bg-white border-t border-gray-100"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p
              className="font-semibold uppercase tracking-widest mb-3"
              style={{
                fontSize: "14px",
                lineHeight: "17px",
                color: "rgb(28, 24, 37)",
              }}
            >
              Got Questions?
            </p>
            <h2
              className="font-bold uppercase tracking-normal mb-3"
              style={{
                fontSize: "52px",
                lineHeight: "60px",
                color: "rgb(0, 0, 0)",
              }}
            >
              <span className="block">Frequently Asked</span>
              <span className="block">Questions</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {topFAQs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link
              to="/resources/faqs"
              className="group inline-flex items-center gap-2.5 border border-[#1a1a1a] px-6 py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
            >
              <span className="font-medium text-sm text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                View All FAQs
              </span>
              <ArrowRight className="w-4 h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── DOWNLOADS ── */}
      <section ref={downloadRef} className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div>
              <p
                className="font-semibold uppercase tracking-widest mb-3"
                style={{
                  fontSize: "14px",
                  lineHeight: "17px",
                  color: "rgb(28, 24, 37)",
                }}
              >
                Resources
              </p>
              <h2
                className="font-bold uppercase tracking-normal mb-3"
                style={{
                  fontSize: "52px",
                  lineHeight: "60px",
                  color: "rgb(0, 0, 0)",
                }}
              >
                <span className="block">Download</span>
                <span className="block">Resources</span>
              </h2>
              <p
                className="font-light max-w-lg"
                style={{
                  fontSize: "20px",
                  lineHeight: "29px",
                  color: "rgb(28, 24, 37)",
                }}
              >
                Access our comprehensive guides and company materials.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/resources/downloads"
                className="group inline-flex items-center gap-2.5 border border-[#1a1a1a] px-6 py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              >
                <span className="font-medium text-sm text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                  View All Downloads
                </span>
                <ArrowRight className="w-4 h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={downloadInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {downloads.map((resource, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-200 p-6 sm:p-8 hover:border-[#113C6A]/30 hover:shadow-lg transition-all duration-300 relative"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#113C6A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-[#113C6A]/10 flex items-center justify-center">
                    <Download className="w-6 h-6 text-[#113C6A]" />
                  </div>
                  <span className="text-[12px] text-gray-400 font-medium">
                    {resource.size}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-6">
                  {resource.description}
                </p>

                <button className="group/btn inline-flex items-center gap-2.5 border border-[#1a1a1a] px-5 py-2 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300">
                  <Download className="w-4 h-4" />
                  <span className="font-medium text-sm">Download</span>
                </button>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

/* ── FAQ Item — same as services page ── */
const FAQItem = ({
  faq,
  index,
}: {
  faq: { question: string; answer: string };
  index: number;
}) => {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full flex items-start justify-between gap-8 py-7 pr-4 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h3
          className="text-base sm:text-lg font-semibold leading-snug max-w-3xl transition-colors"
          style={{ color: open ? "#113C6A" : "#1C1825" }}
        >
          {faq.question}
        </h3>
        <span
          className={`flex-shrink-0 mt-1 transition-transform duration-500 ${open ? "rotate-180" : ""}`}
        >
          <svg viewBox="0 0 48 48" width="20" height="20" fill="none">
            <path
              d="M4 16.2C4 15.97 4.08 15.74 4.24 15.55C4.6 15.13 5.23 15.09 5.65 15.45L24.04 31.32C24.18 31.44 24.44 31.43 24.57 31.31L42.31 14.87C42.72 14.49 43.35 14.52 43.72 14.92C44.09 15.32 44.07 15.96 43.67 16.33L25.94 32.77C25.06 33.59 23.65 33.61 22.74 32.83L4.35 16.96C4.12 16.76 4 16.48 4 16.2Z"
              fill={open ? "#113C6A" : "#9ca3af"}
              stroke={open ? "#113C6A" : "#9ca3af"}
              strokeWidth="2"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-96 opacity-100 pb-7" : "max-h-0 opacity-0"}`}
      >
        <p
          className="font-light max-w-3xl"
          style={{
            fontSize: "20px",
            lineHeight: "29px",
            color: "rgb(28, 24, 37)",
          }}
        >
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

export default Resources;
