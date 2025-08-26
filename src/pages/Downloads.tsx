// src/pages/Downloads.tsx

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import {
    Download, FileText, Image, BarChart3, Shield, Search, ArrowRight
} from "lucide-react";
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Helmet } from 'react-helmet-async';

const Downloads = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeCategory, setActiveCategory] = useState("All Resources");
    const [searchQuery, setSearchQuery] = useState("");

    const downloadCategories = [
        "All Resources",
        "Company Profiles",
        "Service Brochures",
        "Capability Decks",
        "Compliance Documents",
        "Forms"
    ];

    const downloads = [
        {
            title: "BLI Rapid Company Profile",
            description: "Comprehensive overview of our company, services, infrastructure, and capabilities across India.",
            type: "PDF",
            size: "2.4 MB",
            category: "Company Profiles",
            icon: FileText,
            featured: true,
            downloads: 1247,
            keywords: "company profile, logistics company overview, BLI capabilities, infrastructure details",
            url: "/downloads/bli-company-profile.pdf"
        },
        {
            title: "Fleet Capabilities Brochure",
            description: "Detailed specifications of our transportation fleet including truck types, capacity, and coverage areas.",
            type: "PDF",
            size: "3.1 MB",
            category: "Service Brochures",
            icon: Image,
            featured: true,
            downloads: 892,
            keywords: "fleet capabilities, truck specifications, transportation capacity, vehicle types",
            url: "/downloads/fleet-capabilities-brochure.pdf"
        },
        {
            title: "Warehouse Infrastructure Deck",
            description: "Complete overview of our warehouse facilities, technology, and storage capabilities.",
            type: "PDF",
            size: "4.2 MB",
            category: "Capability Decks",
            icon: BarChart3,
            featured: true,
            downloads: 654,
            keywords: "warehouse infrastructure, storage facilities, logistics technology, warehouse capabilities",
            url: "/downloads/warehouse-infrastructure-deck.pdf"
        },
        {
            title: "Technology Solutions Overview",
            description: "Comprehensive guide to our digital logistics platform, tracking systems, and automation tools.",
            type: "PDF",
            size: "2.8 MB",
            category: "Service Brochures",
            icon: FileText,
            featured: false,
            downloads: 543,
            keywords: "logistics technology, digital platform, tracking systems, automation tools",
            url: "/downloads/technology-solutions-overview.pdf"
        },
        {
            title: "Compliance & Certifications",
            description: "Complete documentation of our regulatory compliance, certifications, and quality standards.",
            type: "PDF",
            size: "1.9 MB",
            category: "Compliance Documents",
            icon: Shield,
            featured: false,
            downloads: 421,
            keywords: "compliance documentation, certifications, quality standards, regulatory compliance",
            url: "/downloads/compliance-certifications.pdf"
        },
        {
            title: "Cold Chain Logistics Capabilities",
            description: "Specialized cold storage and temperature-controlled transportation solutions for sensitive cargo.",
            type: "PDF",
            size: "3.5 MB",
            category: "Service Brochures",
            icon: Image,
            featured: false,
            downloads: 387,
            keywords: "cold chain logistics, temperature-controlled transport, cold storage, pharmaceutical logistics",
            url: "/downloads/cold-chain-capabilities.pdf"
        },
        {
            title: "Shipment Booking Form",
            description: "Printable form for offline shipment bookings with complete field specifications.",
            type: "PDF",
            size: "0.8 MB",
            category: "Forms",
            icon: FileText,
            featured: false,
            downloads: 756,
            keywords: "shipment booking form, logistics forms, booking documentation, shipping forms",
            url: "/downloads/shipment-booking-form.pdf"
        },
        {
            title: "Insurance Claim Form",
            description: "Official form for filing insurance claims with step-by-step instructions and requirements.",
            type: "PDF",
            size: "0.6 MB",
            category: "Forms",
            icon: FileText,
            featured: false,
            downloads: 234,
            keywords: "insurance claim form, cargo insurance, claim documentation, insurance process",
            url: "/downloads/insurance-claim-form.pdf"
        },
        {
            title: "Service Level Agreement Template",
            description: "Standard SLA template outlining service commitments, KPIs, and performance metrics.",
            type: "PDF",
            size: "1.2 MB",
            category: "Compliance Documents",
            icon: Shield,
            featured: false,
            downloads: 178,
            keywords: "service level agreement, SLA template, performance metrics, service commitments",
            url: "/downloads/sla-template.pdf"
        },
        {
            title: "Network Coverage Map",
            description: "Interactive map showing our complete service network across India with hub locations.",
            type: "PDF",
            size: "5.1 MB",
            category: "Capability Decks",
            icon: BarChart3,
            featured: false,
            downloads: 634,
            keywords: "network coverage, service areas, logistics network, hub locations India",
            url: "/downloads/network-coverage-map.pdf"
        },
        {
            title: "Sustainability Report 2024",
            description: "Annual sustainability report highlighting our environmental initiatives and green logistics practices.",
            type: "PDF",
            size: "3.7 MB",
            category: "Company Profiles",
            icon: FileText,
            featured: false,
            downloads: 156,
            keywords: "sustainability report, green logistics, environmental initiatives, sustainable transportation",
            url: "/downloads/sustainability-report-2024.pdf"
        },
        {
            title: "Industry Solutions Portfolio",
            description: "Customized logistics solutions for specific industries including FMCG, healthcare, and automotive.",
            type: "PDF",
            size: "4.8 MB",
            category: "Service Brochures",
            icon: Image,
            featured: false,
            downloads: 445,
            keywords: "industry solutions, FMCG logistics, healthcare logistics, automotive logistics, customized solutions",
            url: "/downloads/industry-solutions-portfolio.pdf"
        }
    ];

    // Filter downloads based on active category and search query
    const filteredDownloads = downloads.filter(item => {
        // Filter by category
        const categoryMatch = activeCategory === "All Resources" || item.category === activeCategory;

        // Filter by search query
        const searchMatch = searchQuery === "" ||
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());

        return categoryMatch && searchMatch;
    });

    // Separate featured and non-featured downloads
    const featuredDownloads = filteredDownloads.filter(item => item.featured);
    const regularDownloads = filteredDownloads.filter(item => !item.featured);

    const getIconColor = (category: string) => {
        const colors = {
            "Company Profiles": "text-[#113C6A] bg-[#113C6A]/10",
            "Service Brochures": "text-[#FF7729] bg-[#FF7729]/10",
            "Capability Decks": "text-[#185EAA] bg-[#185EAA]/10",
            "Compliance Documents": "text-[#113C6A] bg-[#113C6A]/10",
            "Forms": "text-[#FF7729] bg-[#FF7729]/10"
        };
        return colors[category as keyof typeof colors] || "text-[#113C6A] bg-[#113C6A]/10";
    };

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

    // Structured Data for Downloads Page
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Logistics Resource Downloads - Company Profiles & Brochures",
        "description": "Download comprehensive logistics resources including company profiles, service brochures, capability decks, compliance documents, and forms from BLI Rapid.",
        "provider": {
            "@type": "Organization",
            "name": "BLI - Bansal Logistics of India",
            "url": "https://blirapid.com"
        },
        "mainEntity": {
            "@type": "ItemList",
            "name": "Downloadable Resources",
            "itemListElement": downloads.map((item, index) => ({
                "@type": "DigitalDocument",
                "position": index + 1,
                "name": item.title,
                "description": item.description,
                "encodingFormat": "application/pdf",
                "contentSize": item.size,
                "url": `https://blirapid.com${item.url}`,
                "downloadUrl": `https://blirapid.com${item.url}`,
                "category": item.category
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
                "item": "https://blirapid.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Resources",
                "item": "https://blirapid.com/resources"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Downloads",
                "item": "https://blirapid.com/resources/downloads"
            }
        ]
    };

    return (
        <PageLayout>
            <Helmet>
                <title>Logistics Resource Downloads - Company Profiles, Brochures & Forms | BLI</title>
                <meta name="description" content="Download comprehensive logistics resources: company profiles, fleet capabilities, warehouse infrastructure, compliance documents, forms, and service brochures. Free PDF downloads available." />
                <meta name="keywords" content="logistics downloads, company profile download, fleet brochure, warehouse capabilities, compliance documents, logistics forms, service brochures, capability decks" />

                {/* Open Graph */}
                <meta property="og:title" content="Logistics Resource Downloads - Free Company Profiles & Brochures | BLI" />
                <meta property="og:description" content="Access comprehensive logistics documentation including company profiles, fleet capabilities, warehouse infrastructure, and compliance documents. Free PDF downloads." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://blirapid.com/resources/downloads" />
                <meta property="og:image" content="https://blirapid.com/logistics-resources-downloads.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Logistics Resource Downloads | BLI Rapid" />
                <meta name="twitter:description" content="Download logistics company profiles, service brochures, and capability documents." />

                {/* Canonical URL */}
                <link rel="canonical" href="https://blirapid.com/resources/downloads" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
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
                            <span className="text-[#F8FFFF]" aria-current="page">Downloads</span>
                        </nav>

                        <motion.h1
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#F8FFFF] leading-tight"
                        >
                            Resource Downloads
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-base sm:text-lg md:text-xl text-[#F8FFFF]/90 max-w-3xl leading-relaxed px-2 sm:px-0"
                        >
                            Access comprehensive documentation, brochures, and resources to understand our logistics capabilities.
                        </motion.p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
                {/* Search and Filter */}
                <section className="mb-6 sm:mb-8" aria-labelledby="search-filter-heading">
                    <h2 id="search-filter-heading" className="sr-only">Search and Filter Downloads</h2>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#21221C]/60" aria-hidden="true" />
                            <Input
                                placeholder="Search resources..."
                                className="pl-10 border-[#185EAA]/20 focus:border-[#185EAA] text-sm sm:text-base"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                aria-label="Search downloadable resources"
                            />
                        </div>
                        <Button
                            className="bg-[#113C6A] hover:bg-[#185EAA] text-white text-sm sm:text-base px-4 sm:px-6"
                            aria-label="Search resources"
                        >
                            Search
                        </Button>
                    </div>

                    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
                        {downloadCategories.map((category, index) => (
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

                {/* Featured Downloads */}
                {featuredDownloads.length > 0 && (
                    <section className="mb-8 sm:mb-12" aria-labelledby="featured-downloads-heading">
                        <h2 id="featured-downloads-heading" className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#113C6A]">Featured Resources</h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                            role="list"
                        >
                            {featuredDownloads.map((item, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className="rounded-xl overflow-hidden bg-white border border-[#185EAA]/20 group hover:shadow-lg transition-shadow"
                                    role="listitem"
                                >
                                    <div className="p-4 sm:p-6">
                                        <div className="flex items-start justify-between mb-3 sm:mb-4">
                                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${getIconColor(item.category)}`} aria-hidden="true">
                                                <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                            </div>
                                            <Badge className="bg-[#113C6A]/10 text-[#113C6A] hover:bg-[#113C6A]/20 border-0 text-xs">
                                                {item.category}
                                            </Badge>
                                        </div>

                                        <h3 className="font-semibold mb-2 text-[#113C6A] group-hover:text-[#FF7729] transition-colors text-sm sm:text-base leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-[#21221C]/70 mb-3 sm:mb-4 line-clamp-3">{item.description}</p>

                                        <div className="flex items-center justify-between text-xs sm:text-sm text-[#21221C]/60 mb-3 sm:mb-4">
                                            <span>{item.type} • {item.size}</span>
                                            <span className="hidden sm:inline" aria-label={`Downloaded ${item.downloads} times`}>{item.downloads} downloads</span>
                                        </div>

                                        <Button
                                            className="w-full bg-[#113C6A] hover:bg-[#185EAA] text-white text-xs sm:text-sm"
                                            aria-label={`Download ${item.title}`}
                                        >
                                            <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                                            Download Now
                                        </Button>
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>
                    </section>
                )}

                {/* All Downloads */}
                <section aria-labelledby="all-downloads-heading">
                    <h2 id="all-downloads-heading" className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#113C6A]">
                        {filteredDownloads.length > 0 ? "All Resources" : "No Resources Found"}
                    </h2>

                    {filteredDownloads.length === 0 ? (
                        <div className="text-center py-8 sm:py-12 bg-[#F8FFFF] rounded-xl border border-[#185EAA]/20">
                            <p className="text-sm sm:text-base text-[#21221C]/70 mb-4">No resources match your search criteria.</p>
                            <Button
                                className="bg-[#113C6A] hover:bg-[#185EAA] text-white text-sm sm:text-base px-4 sm:px-6"
                                onClick={() => {
                                    setActiveCategory("All Resources");
                                    setSearchQuery("");
                                }}
                                aria-label="Reset filters and show all resources"
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
                            className="grid gap-3 sm:gap-4"
                            role="list"
                        >
                            {regularDownloads.map((item, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className="rounded-xl overflow-hidden bg-white border border-[#185EAA]/20 group hover:shadow-md transition-shadow"
                                    role="listitem"
                                >
                                    <div className="p-4 sm:p-6">
                                        <div className="flex flex-col md:flex-row md:items-center gap-3 sm:gap-4">
                                            <div className="flex items-start gap-3 sm:gap-4 flex-1">
                                                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${getIconColor(item.category)}`} aria-hidden="true">
                                                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                                                        <h3 className="font-semibold text-[#113C6A] group-hover:text-[#FF7729] transition-colors text-sm sm:text-base leading-tight">
                                                            {item.title}
                                                        </h3>
                                                        <Badge className="self-start bg-[#113C6A]/10 text-[#113C6A] hover:bg-[#113C6A]/20 border-0 text-xs flex-shrink-0">
                                                            {item.category}
                                                        </Badge>
                                                    </div>
                                                    <p className="text-xs sm:text-sm text-[#21221C]/70 mb-2 line-clamp-2">{item.description}</p>
                                                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-[#21221C]/60">
                                                        <span>{item.type} • {item.size}</span>
                                                        <span className="hidden sm:inline" aria-label={`Downloaded ${item.downloads} times`}>{item.downloads} downloads</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <Button
                                                className="w-full md:w-auto bg-[#113C6A] hover:bg-[#185EAA] text-white text-xs sm:text-sm px-4 sm:px-6"
                                                aria-label={`Download ${item.title}`}
                                            >
                                                <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                                                Download
                                            </Button>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>
                    )}
                </section>
            </div>

            {/* CTA Section */}
            <section className="mt-12 sm:mt-16" aria-labelledby="cta-heading">
                <div className=" p-6 sm:p-8 md:p-12 bg-gradient-to-b from-[#FFFDF7] to-[#113C6A] text-center">
                    <h2 id="cta-heading" className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#113C6A]">Need a Custom Proposal?</h2>
                    <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-90 text-[#000]/90 px-2 sm:px-0">
                        Looking for specific information or a tailored logistics solution? Our team can create custom documentation for your business needs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                            aria-label="Get logistics quote"
                        >
                            <span>Get Quote</span>
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all group text-sm sm:text-base"
                            aria-label="Request custom logistics proposal"
                        >
                            <span>Request Custom Proposal</span>
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                        </Link>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default Downloads;