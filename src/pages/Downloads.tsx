import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Download,
  FileText,
  Image,
  BarChart3,
  Shield,
  Search,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";

const Downloads = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState("All Resources");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredRef = useRef<HTMLElement>(null);
  const allRef = useRef<HTMLElement>(null);
  const featuredInView = useInView(featuredRef, {
    once: true,
    margin: "-80px",
  });
  const allInView = useInView(allRef, { once: true, margin: "-80px" });

  const downloadCategories = [
    "All Resources",
    "Company Profiles",
    "Service Brochures",
    "Capability Decks",
    "Compliance Documents",
    "Forms",
  ];

  const downloads = [
    {
      title: "BLI Rapid Company Profile",
      description:
        "Comprehensive overview of our company, services, infrastructure, and capabilities across India.",
      type: "PDF",
      size: "2.4 MB",
      category: "Company Profiles",
      icon: FileText,
      featured: true,
      downloads: 1247,
      url: "/downloads/bli-company-profile.pdf",
    },
    {
      title: "Fleet Capabilities Brochure",
      description:
        "Detailed specifications of our transportation fleet including truck types, capacity, and coverage areas.",
      type: "PDF",
      size: "3.1 MB",
      category: "Service Brochures",
      icon: Image,
      featured: true,
      downloads: 892,
      url: "/downloads/fleet-capabilities-brochure.pdf",
    },
    {
      title: "Warehouse Infrastructure Deck",
      description:
        "Complete overview of our warehouse facilities, technology, and storage capabilities.",
      type: "PDF",
      size: "4.2 MB",
      category: "Capability Decks",
      icon: BarChart3,
      featured: true,
      downloads: 654,
      url: "/downloads/warehouse-infrastructure-deck.pdf",
    },
    {
      title: "Technology Solutions Overview",
      description:
        "Comprehensive guide to our digital logistics platform, tracking systems, and automation tools.",
      type: "PDF",
      size: "2.8 MB",
      category: "Service Brochures",
      icon: FileText,
      featured: false,
      downloads: 543,
      url: "/downloads/technology-solutions-overview.pdf",
    },
    {
      title: "Compliance & Certifications",
      description:
        "Complete documentation of our regulatory compliance, certifications, and quality standards.",
      type: "PDF",
      size: "1.9 MB",
      category: "Compliance Documents",
      icon: Shield,
      featured: false,
      downloads: 421,
      url: "/downloads/compliance-certifications.pdf",
    },
    {
      title: "Cold Chain Logistics Capabilities",
      description:
        "Specialized cold storage and temperature-controlled transportation solutions for sensitive cargo.",
      type: "PDF",
      size: "3.5 MB",
      category: "Service Brochures",
      icon: Image,
      featured: false,
      downloads: 387,
      url: "/downloads/cold-chain-capabilities.pdf",
    },
    {
      title: "Shipment Booking Form",
      description:
        "Printable form for offline shipment bookings with complete field specifications.",
      type: "PDF",
      size: "0.8 MB",
      category: "Forms",
      icon: FileText,
      featured: false,
      downloads: 756,
      url: "/downloads/shipment-booking-form.pdf",
    },
    {
      title: "Insurance Claim Form",
      description:
        "Official form for filing insurance claims with step-by-step instructions and requirements.",
      type: "PDF",
      size: "0.6 MB",
      category: "Forms",
      icon: FileText,
      featured: false,
      downloads: 234,
      url: "/downloads/insurance-claim-form.pdf",
    },
    {
      title: "Service Level Agreement Template",
      description:
        "Standard SLA template outlining service commitments, KPIs, and performance metrics.",
      type: "PDF",
      size: "1.2 MB",
      category: "Compliance Documents",
      icon: Shield,
      featured: false,
      downloads: 178,
      url: "/downloads/sla-template.pdf",
    },
    {
      title: "Network Coverage Map",
      description:
        "Interactive map showing our complete service network across India with hub locations.",
      type: "PDF",
      size: "5.1 MB",
      category: "Capability Decks",
      icon: BarChart3,
      featured: false,
      downloads: 634,
      url: "/downloads/network-coverage-map.pdf",
    },
    {
      title: "Sustainability Report 2024",
      description:
        "Annual sustainability report highlighting our environmental initiatives and green logistics practices.",
      type: "PDF",
      size: "3.7 MB",
      category: "Company Profiles",
      icon: FileText,
      featured: false,
      downloads: 156,
      url: "/downloads/sustainability-report-2024.pdf",
    },
    {
      title: "Industry Solutions Portfolio",
      description:
        "Customized logistics solutions for specific industries including FMCG, healthcare, and automotive.",
      type: "PDF",
      size: "4.8 MB",
      category: "Service Brochures",
      icon: Image,
      featured: false,
      downloads: 445,
      url: "/downloads/industry-solutions-portfolio.pdf",
    },
  ];

  // Filter downloads
  const filteredDownloads = downloads.filter((item) => {
    const categoryMatch =
      activeCategory === "All Resources" || item.category === activeCategory;
    const searchMatch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const featuredDownloads = filteredDownloads.filter((item) => item.featured);
  const regularDownloads = filteredDownloads.filter((item) => !item.featured);

  // Get count for each category
  const getCategoryCount = (category: string) => {
    if (category === "All Resources") return downloads.length;
    return downloads.filter((d) => d.category === category).length;
  };

  // Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Logistics Resource Downloads - Company Profiles & Brochures",
    description:
      "Download comprehensive logistics resources including company profiles, service brochures, capability decks, compliance documents, and forms from BLI Rapid.",
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
        name: "Downloads",
        item: "https://blirapid.com/resources/downloads",
      },
    ],
  };

  return (
    <PageLayout>
      <Helmet>
        <title>
          Logistics Resource Downloads - Company Profiles, Brochures & Forms |
          BLI
        </title>
        <meta
          name="description"
          content="Download comprehensive logistics resources: company profiles, fleet capabilities, warehouse infrastructure, compliance documents, forms, and service brochures."
        />
        <link
          rel="canonical"
          href="https://blirapid.com/resources/downloads/"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* ── HERO ── */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] max-h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/services2.webp"
            alt="BLI Downloads"
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
                  <Link
                    to="/resources"
                    className="text-white/90 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Resources
                  </Link>
                </li>
                <li className="text-white/70">
                  <ChevronRight className="w-3 h-3" />
                </li>
                <li>
                  <span className="text-white/80 text-xs sm:text-sm font-semibold">
                    Downloads
                  </span>
                </li>
              </ol>
            </nav>

            <h1
              className="font-bold text-white uppercase tracking-normal mb-3"
              style={{ fontSize: "52px", lineHeight: "60px" }}
            >
              <span className="block">Resource</span>
              <span className="block">Downloads</span>
            </h1>
            <p
              className="font-light max-w-xl mt-5 text-white/90"
              style={{ fontSize: "20px", lineHeight: "29px" }}
            >
              Access comprehensive documentation, brochures, and resources to
              understand our logistics capabilities.
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
            {downloadCategories.map((category) => {
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
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-6">
          <div className="relative max-w-xl">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <Input
              placeholder="Search resources..."
              className="pl-12 h-12 text-base border-gray-200 focus:border-[#113C6A] bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search downloadable resources"
            />
          </div>
        </div>
      </div>

      {/* ── FEATURED DOWNLOADS ── */}
      {featuredDownloads.length > 0 && (
        <section ref={featuredRef} className="py-16 sm:py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p
                  className="font-semibold uppercase tracking-widest mb-2"
                  style={{
                    fontSize: "14px",
                    lineHeight: "17px",
                    color: "rgb(28, 24, 37)",
                  }}
                >
                  Most Popular
                </p>
                <h2
                  className="font-bold uppercase tracking-normal"
                  style={{
                    fontSize: "44px",
                    lineHeight: "52px",
                    color: "rgb(0, 0, 0)",
                  }}
                >
                  <span className="block">Featured</span>
                  <span className="block">Resources</span>
                </h2>
              </div>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
              initial={{ opacity: 0, y: 30 }}
              animate={featuredInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {featuredDownloads.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 p-6 sm:p-8 hover:border-[#113C6A]/30 hover:shadow-lg transition-all duration-300 relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#113C6A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 bg-[#113C6A]/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-[#113C6A]" />
                    </div>
                    <span className="text-[12px] text-gray-400 font-medium">
                      {item.type} • {item.size}
                    </span>
                  </div>

                  <span className="inline-block px-2 py-1 text-[11px] text-[#113C6A] bg-[#113C6A]/10 font-medium mb-3">
                    {item.category}
                  </span>

                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:text-[#113C6A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {item.downloads.toLocaleString()} downloads
                    </span>
                    <button className="group/btn inline-flex items-center gap-2 border border-[#1a1a1a] px-4 py-2 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300">
                      <Download className="w-4 h-4" />
                      <span className="font-medium text-sm">Download</span>
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── ALL DOWNLOADS ── */}
      <section
        ref={allRef}
        className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p
                className="font-semibold uppercase tracking-widest mb-2"
                style={{
                  fontSize: "14px",
                  lineHeight: "17px",
                  color: "rgb(28, 24, 37)",
                }}
              >
                {activeCategory}
              </p>
              <h2
                className="font-bold uppercase tracking-normal"
                style={{
                  fontSize: "44px",
                  lineHeight: "52px",
                  color: "rgb(0, 0, 0)",
                }}
              >
                <span className="block">All</span>
                <span className="block">Resources</span>
              </h2>
              <p
                className="font-light max-w-lg mt-3"
                style={{
                  fontSize: "18px",
                  lineHeight: "27px",
                  color: "rgb(28, 24, 37)",
                }}
              >
                {filteredDownloads.length} resources available for download.
              </p>
            </div>
          </div>

          {filteredDownloads.length === 0 ? (
            <div className="text-center py-16 bg-white border border-gray-200">
              <p className="text-gray-500 mb-6">
                No resources match your search criteria.
              </p>
              <button
                className="group inline-flex items-center gap-2.5 border border-[#1a1a1a] px-6 py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                onClick={() => {
                  setActiveCategory("All Resources");
                  setSearchQuery("");
                }}
              >
                <span className="font-medium text-sm">Reset Filters</span>
              </button>
            </div>
          ) : (
            <motion.div
              className="space-y-0"
              initial={{ opacity: 0, y: 30 }}
              animate={allInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {regularDownloads.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white border-b border-gray-200 first:border-t hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 p-5 sm:p-6">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-[#113C6A]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-[#113C6A]" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-base font-bold text-[#1a1a1a] group-hover:text-[#113C6A] transition-colors">
                            {item.title}
                          </h3>
                          <span className="px-2 py-0.5 text-[10px] text-[#113C6A] bg-[#113C6A]/10 font-medium">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 font-light line-clamp-1 mb-2">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <span>
                            {item.type} • {item.size}
                          </span>
                          <span>
                            {item.downloads.toLocaleString()} downloads
                          </span>
                        </div>
                      </div>
                    </div>

                    <button className="group/btn inline-flex items-center justify-center gap-2 border border-[#1a1a1a] px-5 py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 w-full md:w-auto">
                      <Download className="w-4 h-4" />
                      <span className="font-medium text-sm">Download</span>
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#113C6A]">
        <div className="max-w-[1280px] mx-auto text-center">
          <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs text-[#1C1825]">
            Need Something Specific?
          </p>
          <h2 className="font-bold uppercase tracking-normal mb-3 text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
            <span className="block">Custom Proposal</span>
            <span className="block">For Your Business</span>
          </h2>
          <p className="font-light text-[#1C1825] mb-8 text-sm sm:text-base md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[27px] max-w-2xl mx-auto">
            Looking for specific information or a tailored logistics solution?
            Our team can create custom documentation for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#FF7300] text-white hover:bg-[#e56800] transition-all"
            >
              <span className="font-medium">Get Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#F8FFFF] text-[#F8FFFF] hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all"
            >
              <span className="font-medium">Request Custom Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Downloads;
