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
            readTime: "15 min read",
            featured: true,
            views: 2547,
            slug: "indian-logistics-market-outlook-2025"
        },
        {
            title: "E-commerce Logistics Trends & Innovations",
            description: "In-depth look at how e-commerce is reshaping logistics operations, last-mile delivery innovations, and fulfillment strategies.",
            image: "/lovable-uploads/services2.jpg",
            category: "Industry Trends",
            date: "July 2024",
            readTime: "12 min read",
            featured: true,
            views: 1892,
            slug: "ecommerce-logistics-trends-innovations"
        },
        {
            title: "Supply Chain Resilience: Post-Pandemic Strategies",
            description: "Analysis of how companies are rebuilding supply chain resilience after global disruptions, with actionable strategies.",
            image: "/lovable-uploads/services3.png",
            category: "Supply Chain",
            date: "June 2024",
            readTime: "18 min read",
            featured: true,
            views: 2104,
            slug: "supply-chain-resilience-post-pandemic"
        },
        {
            title: "AI & Machine Learning in Logistics Operations",
            description: "Exploring how artificial intelligence and machine learning are transforming route optimization, demand forecasting, and warehouse automation.",
            image: "/lovable-uploads/services4.png",
            category: "Technology",
            date: "May 2024",
            readTime: "14 min read",
            featured: false,
            views: 1756,
            slug: "ai-machine-learning-logistics-operations"
        },
        {
            title: "Cold Chain Logistics: Market Growth & Challenges",
            description: "Analysis of India's cold chain logistics sector, infrastructure gaps, investment opportunities, and regulatory landscape.",
            image: "/lovable-uploads/services5.jpg",
            category: "Market Analysis",
            date: "April 2024",
            readTime: "16 min read",
            featured: false,
            views: 1432,
            slug: "cold-chain-logistics-market-growth"
        },
        {
            title: "Sustainable Logistics: Environmental Impact Report",
            description: "Comprehensive study on carbon footprint reduction, green transportation alternatives, and sustainability metrics in logistics.",
            image: "/lovable-uploads/services6.jpg",
            category: "Industry Trends",
            date: "March 2024",
            readTime: "20 min read",
            featured: false,
            views: 1678,
            slug: "sustainable-logistics-environmental-impact"
        },
        {
            title: "Last-Mile Delivery Economics: Cost Analysis",
            description: "Detailed breakdown of last-mile delivery costs, optimization strategies, and profitability models for urban logistics.",
            image: "/lovable-uploads/services7.jpg",
            category: "Logistics Insights",
            date: "February 2024",
            readTime: "13 min read",
            featured: false,
            views: 1845,
            slug: "last-mile-delivery-economics"
        },
        {
            title: "Warehouse Automation: ROI & Implementation Guide",
            description: "Practical guide to warehouse automation technologies, implementation roadmap, and return on investment calculations.",
            image: "/lovable-uploads/services8.png",
            category: "Technology",
            date: "January 2024",
            readTime: "17 min read",
            featured: false,
            views: 1567,
            slug: "warehouse-automation-roi-guide"
        },
        {
            title: "Multi-Modal Transportation: Efficiency Analysis",
            description: "Research on combining road, rail, air, and sea transportation for optimal logistics efficiency and cost reduction.",
            image: "/lovable-uploads/services1.jpg",
            category: "Logistics Insights",
            date: "December 2023",
            readTime: "15 min read",
            featured: false,
            views: 1289,
            slug: "multi-modal-transportation-efficiency"
        },
        {
            title: "Supply Chain Visibility: Technology Solutions",
            description: "Overview of technologies enabling end-to-end supply chain visibility, from IoT sensors to blockchain implementations.",
            image: "/lovable-uploads/services2.jpg",
            category: "Supply Chain",
            date: "November 2023",
            readTime: "14 min read",
            featured: false,
            views: 1632,
            slug: "supply-chain-visibility-technology"
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

    return (
        <PageLayout>
            {/* Hero Section */}
            <section className="relative bg-[#113C6A] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-gradient-to-b from-[#113C6A]/90 to-[#185EAA]/80" />
                <div className="container mx-auto relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center text-[#F8FFFF]/80 mb-6">
                            <Link to="/" className="hover:text-[#F8FFFF] transition-colors">Home</Link>
                            <span className="mx-2">/</span>
                            <Link to="/resources" className="hover:text-[#F8FFFF] transition-colors">Resources</Link>
                            <span className="mx-2">/</span>
                            <span className="text-[#F8FFFF]">Industry Reports</span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-bold mb-6 text-[#F8FFFF]"
                        >
                            Industry Reports & Analysis
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-xl text-[#F8FFFF]/90 max-w-3xl"
                        >
                            Gain valuable insights into logistics trends, market analysis, and industry best practices through our comprehensive reports.
                        </motion.p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
                {/* Search and Filter */}
                <div className="mb-8">
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#21221C]/60" />
                            <Input
                                placeholder="Search reports..."
                                className="pl-10 border-[#185EAA]/20 focus:border-[#185EAA]"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button className="bg-[#113C6A] hover:bg-[#185EAA] text-white">Search</Button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {reportCategories.map((category, index) => (
                            <Badge
                                key={index}
                                className={cn(
                                    "cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-colors",
                                    activeCategory === category
                                        ? "bg-[#FF7729] text-white hover:bg-[#e56721]"
                                        : "bg-transparent text-[#113C6A] border border-[#113C6A]/30 hover:bg-[#113C6A] hover:text-white"
                                )}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Featured Reports */}
                {featuredReports.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-[#113C6A]">Featured Reports</h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="grid md:grid-cols-3 gap-6"
                        >
                            {featuredReports.map((report, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="rounded-xl overflow-hidden bg-white border border-[#185EAA]/20 group hover:shadow-lg transition-shadow"
                                >
                                    <div className="aspect-video overflow-hidden relative">
                                        <img
                                            src={report.image}
                                            alt={report.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <Badge
                                            className={`absolute top-3 left-3 ${getCategoryColor(report.category)} border-0`}
                                        >
                                            {report.category}
                                        </Badge>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between text-sm text-[#21221C]/60 mb-3">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                <span>{report.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                <span>{report.readTime}</span>
                                            </div>
                                        </div>

                                        <h3 className="font-semibold text-lg mb-2 text-[#113C6A] group-hover:text-[#FF7729] transition-colors">
                                            {report.title}
                                        </h3>
                                        <p className="text-sm text-[#21221C]/70 mb-4">{report.description}</p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-sm text-[#21221C]/60">
                                                <Eye className="h-4 w-4 mr-1" />
                                                <span>{report.views} views</span>
                                            </div>
                                            <Link
                                                to={`/resources/reports/${report.slug}`}
                                                className="inline-flex items-center text-[#FF7729] hover:underline"
                                            >
                                                Read Report
                                                <ArrowRight className="ml-1 h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>
                )}

                {/* All Reports */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-[#113C6A]">
                        {filteredReports.length > 0 ? "All Reports" : "No Reports Found"}
                    </h2>

                    {filteredReports.length === 0 ? (
                        <div className="text-center py-12 bg-[#F8FFFF] rounded-xl border border-[#185EAA]/20">
                            <p className="text-[#21221C]/70 mb-4">No reports match your search criteria.</p>
                            <Button
                                className="bg-[#113C6A] hover:bg-[#185EAA] text-white"
                                onClick={() => {
                                    setActiveCategory("All Reports");
                                    setSearchQuery("");
                                }}
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
                            className="grid gap-6"
                        >
                            {regularReports.map((report, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="rounded-xl overflow-hidden bg-white border border-[#185EAA]/20 group hover:shadow-md transition-shadow"
                                >
                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden relative">
                                            <img
                                                src={report.image}
                                                alt={report.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <Badge
                                                className={`absolute top-3 left-3 ${getCategoryColor(report.category)} border-0`}
                                            >
                                                {report.category}
                                            </Badge>
                                        </div>
                                        <div className="md:w-2/3 p-6">
                                            <div className="flex items-center justify-between text-sm text-[#21221C]/60 mb-3">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    <span>{report.date}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-3 w-3" />
                                                    <span>{report.readTime}</span>
                                                </div>
                                            </div>

                                            <h3 className="font-semibold text-lg mb-2 text-[#113C6A] group-hover:text-[#FF7729] transition-colors">
                                                {report.title}
                                            </h3>
                                            <p className="text-sm text-[#21221C]/70 mb-4">{report.description}</p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center text-sm text-[#21221C]/60">
                                                    <Eye className="h-4 w-4 mr-1" />
                                                    <span>{report.views} views</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Button
                                                        className="bg-transparent border border-[#113C6A] text-[#113C6A] hover:bg-[#113C6A] hover:text-white"
                                                        size="sm"
                                                    >
                                                        <Download className="mr-1 h-4 w-4" />
                                                        PDF
                                                    </Button>
                                                    <Link
                                                        to={`/resources/reports/${report.slug}`}
                                                        className="inline-flex items-center text-[#FF7729] hover:underline"
                                                    >
                                                        Read Report
                                                        <ArrowRight className="ml-1 h-4 w-4" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </section>

                {/* Trending Insights Section */}
                <section className="mt-16">
                    <div className="rounded-xl p-8 bg-[#F8FFFF] border border-[#185EAA]/20">
                        <div className="flex items-center gap-3 mb-6">
                            <TrendingUp className="h-6 w-6 text-[#FF7729]" />
                            <h2 className="text-2xl font-bold text-[#113C6A]">Trending Logistics Insights</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                <div key={index} className="bg-white p-4 rounded-lg border border-[#185EAA]/10 hover:shadow-md transition-shadow">
                                    <div className="text-2xl font-bold text-[#FF7729]">{insight.stat}</div>
                                    <div className="text-sm font-medium text-[#113C6A]">{insight.trend}</div>
                                    <div className="text-sm text-[#21221C]/70">{insight.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <div className="mt-16">
                    <div className="rounded-xl p-8 md:p-12 bg-[#113C6A] text-[#F8FFFF] text-center">
                        <h2 className="text-3xl font-bold mb-4">Need Custom Industry Analysis?</h2>
                        <p className="text-lg mb-8 opacity-90">
                            Our research team can provide tailored industry reports and market analysis specific to your business needs.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group"
                            >
                                Request Custom Report
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/resources/reports"
                                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all group"
                            >
                                Subscribe to Updates
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default IndustryReports;