// src/pages/IndustryReports.tsx

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import {
    FileText, BarChart3, ArrowRight, ArrowLeft, Search, Download, Calendar, Eye, TrendingUp, Clock
} from "lucide-react";
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Helmet } from 'react-helmet-async';

const IndustryReports = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeCategory, setActiveCategory] = useState("All Reports");
    const [searchQuery, setSearchQuery] = useState("");

    const reportCategories = [
        "All Reports",
        "Market Analysis",
        "Industry Trends",
        "Logistics Insights",
        "Supply Chain",
        "Technology"
    ];

    const reports = [
        {
            title: "Indian Logistics Market Outlook 2025",
            description: "Comprehensive analysis of the Indian logistics sector, market size, growth projections, and key players.",
            image: "/lovable-uploads/services1.jpg",
            category: "Market Analysis",
            date: "August 2024",
            dateISO: "2024-08-01",
            readTime: "15 min read",
            featured: true,
            views: 2547,
            slug: "indian-logistics-market-outlook-2025",
            keywords: "Indian logistics market, logistics sector analysis, market outlook 2025, logistics growth projections",
            author: "BLI Research Team",
            summary: "The Indian logistics market is projected to reach ₹10.5 lakh crore by 2025, driven by e-commerce growth and infrastructure development."
        },
        {
            title: "E-commerce Logistics Trends & Innovations",
            description: "In-depth look at how e-commerce is reshaping logistics operations, last-mile delivery innovations, and fulfillment strategies.",
            image: "/lovable-uploads/services2.jpg",
            category: "Industry Trends",
            date: "July 2024",
            dateISO: "2024-07-01",
            readTime: "12 min read",
            featured: true,
            views: 1892,
            slug: "ecommerce-logistics-trends-innovations",
            keywords: "e-commerce logistics, last-mile delivery, fulfillment strategies, logistics innovations, online retail logistics",
            author: "BLI Research Team",
            summary: "E-commerce logistics demand has increased by 35% in tier-2 and tier-3 cities, driving innovation in delivery models."
        },
        {
            title: "Supply Chain Resilience: Post-Pandemic Strategies",
            description: "Analysis of how companies are rebuilding supply chain resilience after global disruptions, with actionable strategies.",
            image: "/lovable-uploads/services3.png",
            category: "Supply Chain",
            date: "June 2024",
            dateISO: "2024-06-01",
            readTime: "18 min read",
            featured: true,
            views: 2104,
            slug: "supply-chain-resilience-post-pandemic",
            keywords: "supply chain resilience, post-pandemic logistics, supply chain disruption, business continuity, risk management",
            author: "BLI Research Team",
            summary: "Companies are investing heavily in supply chain diversification and technology to build resilience against future disruptions."
        },
        {
            title: "AI & Machine Learning in Logistics Operations",
            description: "Exploring how artificial intelligence and machine learning are transforming route optimization, demand forecasting, and warehouse automation.",
            image: "/lovable-uploads/services4.png",
            category: "Technology",
            date: "May 2024",
            dateISO: "2024-05-01",
            readTime: "14 min read",
            featured: false,
            views: 1756,
            slug: "ai-machine-learning-logistics-operations",
            keywords: "AI logistics, machine learning transportation, route optimization, demand forecasting, warehouse automation",
            author: "BLI Research Team",
            summary: "AI and ML technologies are reducing logistics costs by up to 25% through improved route optimization and predictive analytics."
        },
        {
            title: "Cold Chain Logistics: Market Growth & Challenges",
            description: "Analysis of India's cold chain logistics sector, infrastructure gaps, investment opportunities, and regulatory landscape.",
            image: "/lovable-uploads/services5.jpg",
            category: "Market Analysis",
            date: "April 2024",
            dateISO: "2024-04-01",
            readTime: "16 min read",
            featured: false,
            views: 1432,
            slug: "cold-chain-logistics-market-growth",
            keywords: "cold chain logistics, temperature-controlled transport, pharmaceutical logistics, food supply chain, cold storage",
            author: "BLI Research Team",
            summary: "India's cold chain market is growing at 15% CAGR, driven by pharmaceutical and food industry demands."
        },
        {
            title: "Sustainable Logistics: Environmental Impact Report",
            description: "Comprehensive study on carbon footprint reduction, green transportation alternatives, and sustainability metrics in logistics.",
            image: "/lovable-uploads/services6.jpg",
            category: "Industry Trends",
            date: "March 2024",
            dateISO: "2024-03-01",
            readTime: "20 min read",
            featured: false,
            views: 1678,
            slug: "sustainable-logistics-environmental-impact",
            keywords: "sustainable logistics, green transportation, carbon footprint reduction, environmental impact, eco-friendly logistics",
            author: "BLI Research Team",
            summary: "Green logistics initiatives have achieved 27% reduction in carbon emissions across participating companies."
        },
        {
            title: "Last-Mile Delivery Economics: Cost Analysis",
            description: "Detailed breakdown of last-mile delivery costs, optimization strategies, and profitability models for urban logistics.",
            image: "/lovable-uploads/services7.jpg",
            category: "Logistics Insights",
            date: "February 2024",
            dateISO: "2024-02-01",
            readTime: "13 min read",
            featured: false,
            views: 1845,
            slug: "last-mile-delivery-economics",
            keywords: "last-mile delivery costs, urban logistics, delivery economics, cost optimization, logistics profitability",
            author: "BLI Research Team",
            summary: "Route optimization technologies have reduced last-mile delivery costs by 42% in urban areas."
        },
        {
            title: "Warehouse Automation: ROI & Implementation Guide",
            description: "Practical guide to warehouse automation technologies, implementation roadmap, and return on investment calculations.",
            image: "/lovable-uploads/services8.png",
            category: "Technology",
            date: "January 2024",
            dateISO: "2024-01-01",
            readTime: "17 min read",
            featured: false,
            views: 1567,
            slug: "warehouse-automation-roi-guide",
            keywords: "warehouse automation, ROI calculation, automation implementation, warehouse technology, logistics automation",
            author: "BLI Research Team",
            summary: "68% of companies are investing in warehouse automation with average ROI of 18-24 months."
        },
        {
            title: "Multi-Modal Transportation: Efficiency Analysis",
            description: "Research on combining road, rail, air, and sea transportation for optimal logistics efficiency and cost reduction.",
            image: "/lovable-uploads/services1.jpg",
            category: "Logistics Insights",
            date: "December 2023",
            dateISO: "2023-12-01",
            readTime: "15 min read",
            featured: false,
            views: 1289,
            slug: "multi-modal-transportation-efficiency",
            keywords: "multi-modal transportation, intermodal logistics, transportation efficiency, freight optimization, logistics modes",
            author: "BLI Research Team",
            summary: "Multi-modal transportation reduces costs by 20-30% while improving delivery reliability."
        },
        {
            title: "Supply Chain Visibility: Technology Solutions",
            description: "Overview of technologies enabling end-to-end supply chain visibility, from IoT sensors to blockchain implementations.",
            image: "/lovable-uploads/services2.jpg",
            category: "Supply Chain",
            date: "November 2023",
            dateISO: "2023-11-01",
            readTime: "14 min read",
            featured: false,
            views: 1632,
            slug: "supply-chain-visibility-technology",
            keywords: "supply chain visibility, IoT logistics, blockchain supply chain, tracking technology, logistics transparency",
            author: "BLI Research Team",
            summary: "End-to-end visibility solutions improve supply chain efficiency by 35% and reduce delays by 40%."
        }
    ];

    // Filter reports based on active category and search query
    const filteredReports = reports.filter(report => {
        // Filter by category
        const categoryMatch = activeCategory === "All Reports" || report.category === activeCategory;

        // Filter by search query
        const searchMatch = searchQuery === "" ||
            report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            report.description.toLowerCase().includes(searchQuery.toLowerCase());

        return categoryMatch && searchMatch;
    });

    // Separate featured and non-featured reports
    const featuredReports = filteredReports.filter(report => report.featured);
    const regularReports = filteredReports.filter(report => !report.featured);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2, duration: 0.8 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    };

    const getCategoryColor = (category: string) => {
        const colors = {
            "Market Analysis": "bg-[#113C6A]/10 text-[#113C6A]",
            "Industry Trends": "bg-[#FF7729]/10 text-[#FF7729]",
            "Logistics Insights": "bg-[#185EAA]/10 text-[#185EAA]",
            "Supply Chain": "bg-[#113C6A]/10 text-[#113C6A]",
            "Technology": "bg-[#FF7729]/10 text-[#FF7729]"
        };
        return colors[category as keyof typeof colors] || "bg-[#113C6A]/10 text-[#113C6A]";
    };

    // Structured Data for Industry Reports
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Logistics Industry Reports & Market Analysis",
        "description": "Comprehensive logistics industry reports covering market analysis, trends, supply chain insights, and technology innovations in Indian logistics sector.",
        "provider": {
            "@type": "Organization",
            "name": "BLI - Bansal Logistics of India",
            "url": "https://www.blirapid.com"
        },
        "mainEntity": {
            "@type": "ItemList",
            "name": "Industry Reports",
            "itemListElement": reports.map((report, index) => ({
                "@type": "Report",
                "position": index + 1,
                "name": report.title,
                "description": report.description,
                "url": `https://www.blirapid.com/resources/reports/${report.slug}`,
                "datePublished": report.dateISO,
                "author": {
                    "@type": "Organization",
                    "name": report.author
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "BLI - Bansal Logistics of India"
                },
                "about": report.category,
                "keywords": report.keywords
            }))
        }
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.blirapid.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Resources",
                "item": "https://www.blirapid.com/resources"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Industry Reports",
                "item": "https://www.blirapid.com/resources/reports"
            }
        ]
    };

    // Research Organization Schema
    const researchSchema = {
        "@context": "https://schema.org",
        "@type": "ResearchOrganization",
        "name": "BLI Research Division",
        "parentOrganization": {
            "@type": "Organization",
            "name": "BLI - Bansal Logistics of India"
        },
        "knowsAbout": [
            "Logistics Market Analysis",
            "Supply Chain Research",
            "Transportation Technology",
            "E-commerce Logistics",
            "Warehouse Automation"
        ]
    };

    return (
        <PageLayout>
            <Helmet>
                <title>Logistics Industry Reports & Market Analysis - Trends & Insights | BLI</title>
                <meta name="description" content="Access comprehensive logistics industry reports covering market analysis, e-commerce trends, supply chain insights, AI technology, and sustainability. Expert research on Indian logistics sector." />
                <meta name="keywords" content="logistics industry reports, market analysis, supply chain research, logistics trends, e-commerce logistics, warehouse automation, transportation technology, logistics insights" />

                {/* Open Graph */}
                <meta property="og:title" content="Logistics Industry Reports & Market Analysis | BLI Research" />
                <meta property="og:description" content="Comprehensive logistics industry reports and market analysis covering trends, technology, and insights in the Indian logistics sector." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.blirapid.com/resources/reports" />
                <meta property="og:image" content="https://www.blirapid.com/logistics-industry-reports.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Logistics Industry Reports & Analysis | BLI" />
                <meta name="twitter:description" content="Expert insights on logistics trends, market analysis, and industry innovations." />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.blirapid.com/resources/reports" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(researchSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="relative bg-[#113C6A] pt-8 sm:pt-10 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-gradient-to-b from-[#113C6A]/90 to-[#185EAA]/80" />
                <div className="container mx-auto relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <nav aria-label="Breadcrumb" className="flex items-center text-[#F8FFFF]/80 mb-4 sm:mb-6 text-sm sm:text-base">
                            <Link to="/" className="hover:text-[#F8FFFF] transition-colors">Home</Link>
                            <span className="mx-2" aria-hidden="true">/</span>
                            <Link to="/resources" className="hover:text-[#F8FFFF] transition-colors">Resources</Link>
                            <span className="mx-2" aria-hidden="true">/</span>
                            <span className="text-[#F8FFFF]" aria-current="page">Industry Reports</span>
                        </nav>

                        <motion.h1
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#F8FFFF] leading-tight"
                        >
                            Industry Reports & Analysis
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-base sm:text-lg md:text-xl text-[#F8FFFF]/90 max-w-3xl leading-relaxed px-2 sm:px-0"
                        >
                            Gain valuable insights into logistics trends, market analysis, and industry best practices through our comprehensive reports.
                        </motion.p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
                {/* Search and Filter */}
                <section className="mb-6 sm:mb-8" aria-labelledby="search-filter-heading">
                    <h2 id="search-filter-heading" className="sr-only">Search and Filter Reports</h2>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#21221C]/60" aria-hidden="true" />
                            <Input
                                placeholder="Search reports..."
                                className="pl-10 border-[#185EAA]/20 focus:border-[#185EAA] text-sm sm:text-base"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                aria-label="Search industry reports"
                            />
                        </div>
                        <Button
                            className="bg-[#113C6A] hover:bg-[#185EAA] text-white text-sm sm:text-base px-4 sm:px-6"
                            aria-label="Search reports"
                        >
                            Search
                        </Button>
                    </div>

                    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
                        {reportCategories.map((category, index) => (
                            <Badge
                                key={index}
                                className={cn(
                                    "cursor-pointer px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors",
                                    activeCategory === category
                                        ? "bg-[#FF7729] text-white hover:bg-[#e56721]"
                                        : "bg-transparent text-[#113C6A] border border-[#113C6A]/30 hover:bg-[#113C6A] hover:text-white"
                                )}
                                onClick={() => setActiveCategory(category)}
                                role="button"
                                aria-pressed={activeCategory === category}
                                aria-label={`Filter by ${category}`}
                            >
                                {category}
                            </Badge>
                        ))}
                    </div>
                </section>

                {/* Featured Reports */}
                {featuredReports.length > 0 && (
                    <section className="mb-8 sm:mb-12" aria-labelledby="featured-reports-heading">
                        <h2 id="featured-reports-heading" className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#113C6A]">Featured Reports</h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                            role="list"
                        >
                            {featuredReports.map((report, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className="rounded-xl overflow-hidden bg-white border border-[#185EAA]/20 group hover:shadow-lg transition-shadow"
                                    role="listitem"
                                >
                                    <Link to={`/resources/reports/${report.slug}`} aria-label={`Read report: ${report.title}`}>
                                        <div className="aspect-video overflow-hidden relative">
                                            <img
                                                src={report.image}
                                                alt={report.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                loading="lazy"
                                            />
                                            <Badge
                                                className={`absolute top-2 sm:top-3 left-2 sm:left-3 ${getCategoryColor(report.category)} border-0 text-xs`}
                                            >
                                                {report.category}
                                            </Badge>
                                        </div>
                                        <div className="p-4 sm:p-6">
                                            <div className="flex items-center justify-between text-xs sm:text-sm text-[#21221C]/60 mb-2 sm:mb-3">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" aria-hidden="true" />
                                                    <time dateTime={report.dateISO}>{report.date}</time>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-3 w-3" aria-hidden="true" />
                                                    <span className="hidden sm:inline">{report.readTime}</span>
                                                    <span className="sm:hidden">{report.readTime.split(' ')[0]}m</span>
                                                </div>
                                            </div>

                                            <h3 className="font-semibold text-base sm:text-lg mb-2 text-[#113C6A] group-hover:text-[#FF7729] transition-colors leading-tight">
                                                {report.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-[#21221C]/70 mb-3 sm:mb-4 line-clamp-3">{report.description}</p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center text-xs sm:text-sm text-[#21221C]/60">
                                                    <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1" aria-hidden="true" />
                                                    <span>{report.views} views</span>
                                                </div>
                                                <span className="inline-flex items-center text-[#FF7729] hover:underline text-sm">
                                                    Read Report
                                                    <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" aria-hidden="true" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </motion.div>
                    </section>
                )}

                {/* All Reports */}
                <section aria-labelledby="all-reports-heading">
                    <h2 id="all-reports-heading" className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#113C6A]">
                        {filteredReports.length > 0 ? "All Reports" : "No Reports Found"}
                    </h2>

                    {filteredReports.length === 0 ? (
                        <div className="text-center py-8 sm:py-12 bg-[#F8FFFF] rounded-xl border border-[#185EAA]/20">
                            <p className="text-sm sm:text-base text-[#21221C]/70 mb-4">No reports match your search criteria.</p>
                            <Button
                                className="bg-[#113C6A] hover:bg-[#185EAA] text-white text-sm sm:text-base px-4 sm:px-6"
                                onClick={() => {
                                    setActiveCategory("All Reports");
                                    setSearchQuery("");
                                }}
                                aria-label="Reset filters and show all reports"
                            >
                                Reset Filters
                            </Button>
                        </div>
                    ) : (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="grid gap-4 sm:gap-6"
                            role="list"
                        >
                            {regularReports.map((report, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className="rounded-xl overflow-hidden bg-white border border-[#185EAA]/20 group hover:shadow-md transition-shadow"
                                    role="listitem"
                                >
                                    <Link to={`/resources/reports/${report.slug}`} aria-label={`Read report: ${report.title}`}>
                                        <div className="flex flex-col md:flex-row">
                                            <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden relative">
                                                <img
                                                    src={report.image}
                                                    alt={report.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    loading="lazy"
                                                />
                                                <Badge
                                                    className={`absolute top-2 sm:top-3 left-2 sm:left-3 ${getCategoryColor(report.category)} border-0 text-xs`}
                                                >
                                                    {report.category}
                                                </Badge>
                                            </div>
                                            <div className="md:w-2/3 p-4 sm:p-6">
                                                <div className="flex items-center justify-between text-xs sm:text-sm text-[#21221C]/60 mb-2 sm:mb-3">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="h-3 w-3" aria-hidden="true" />
                                                        <time dateTime={report.dateISO}>{report.date}</time>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="h-3 w-3" aria-hidden="true" />
                                                        <span className="hidden sm:inline">{report.readTime}</span>
                                                        <span className="sm:hidden">{report.readTime.split(' ')[0]}m</span>
                                                    </div>
                                                </div>

                                                <h3 className="font-semibold text-base sm:text-lg mb-2 text-[#113C6A] group-hover:text-[#FF7729] transition-colors leading-tight">
                                                    {report.title}
                                                </h3>
                                                <p className="text-xs sm:text-sm text-[#21221C]/70 mb-3 sm:mb-4 line-clamp-3">{report.description}</p>

                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                                    <div className="flex items-center text-xs sm:text-sm text-[#21221C]/60">
                                                        <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1" aria-hidden="true" />
                                                        <span>{report.views} views</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 sm:gap-3">
                                                        <Button
                                                            className="bg-transparent border border-[#113C6A] text-[#113C6A] hover:bg-[#113C6A] hover:text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2"
                                                            size="sm"
                                                            aria-label={`Download ${report.title} PDF`}
                                                        >
                                                            <Download className="mr-1 h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                                                            PDF
                                                        </Button>
                                                        <span className="inline-flex items-center text-[#FF7729] hover:underline text-sm">
                                                            Read Report
                                                            <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" aria-hidden="true" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </motion.div>
                    )}
                </section>

                {/* Trending Insights Section */}
                <section className="mt-12 sm:mt-16" aria-labelledby="trending-insights-heading">
                    <div className="rounded-xl p-6 sm:p-8 bg-[#F8FFFF] border border-[#185EAA]/20">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-[#FF7729]" aria-hidden="true" />
                            <h2 id="trending-insights-heading" className="text-xl sm:text-2xl font-bold text-[#113C6A]">Trending Logistics Insights</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" role="list">
                            {[
                                {
                                    stat: "35%",
                                    trend: "increase",
                                    text: "in e-commerce logistics demand across tier-2 and tier-3 cities"
                                },
                                {
                                    stat: "₹10.5 Lakh Cr",
                                    trend: "market size",
                                    text: "projected for Indian logistics sector by 2025"
                                },
                                {
                                    stat: "42%",
                                    trend: "reduction",
                                    text: "in last-mile delivery costs through route optimization"
                                },
                                {
                                    stat: "3.2 days",
                                    trend: "average",
                                    text: "transit time for interstate shipments across India"
                                },
                                {
                                    stat: "68%",
                                    trend: "of companies",
                                    text: "investing in warehouse automation technologies"
                                },
                                {
                                    stat: "27%",
                                    trend: "decrease",
                                    text: "in carbon emissions through green logistics initiatives"
                                }
                            ].map((insight, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-3 sm:p-4 rounded-lg border border-[#185EAA]/10 hover:shadow-md transition-shadow"
                                    role="listitem"
                                >
                                    <div className="text-xl sm:text-2xl font-bold text-[#FF7729]">{insight.stat}</div>
                                    <div className="text-xs sm:text-sm font-medium text-[#113C6A]">{insight.trend}</div>
                                    <div className="text-xs sm:text-sm text-[#21221C]/70 leading-tight">{insight.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="mt-12 sm:mt-16" aria-labelledby="cta-heading">
                    <div className="rounded-xl p-6 sm:p-8 md:p-12 bg-[#113C6A] text-[#F8FFFF] text-center">
                        <h2 id="cta-heading" className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Need Custom Industry Analysis?</h2>
                        <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-90 px-2 sm:px-0">
                            Our research team can provide tailored industry reports and market analysis specific to your business needs.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                                aria-label="Request custom industry report"
                            >
                                <span>Request Custom Report</span>
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                            <Link
                                to="/resources/reports"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all group text-sm sm:text-base"
                                aria-label="Subscribe to report updates"
                            >
                                <span>Subscribe to Updates</span>
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default IndustryReports;