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
            downloads: 1247
        },
        {
            title: "Fleet Capabilities Brochure",
            description: "Detailed specifications of our transportation fleet including truck types, capacity, and coverage areas.",
            type: "PDF",
            size: "3.1 MB",
            category: "Service Brochures",
            icon: Image,
            featured: true,
            downloads: 892
        },
        {
            title: "Warehouse Infrastructure Deck",
            description: "Complete overview of our warehouse facilities, technology, and storage capabilities.",
            type: "PDF",
            size: "4.2 MB",
            category: "Capability Decks",
            icon: BarChart3,
            featured: true,
            downloads: 654
        },
        {
            title: "Technology Solutions Overview",
            description: "Comprehensive guide to our digital logistics platform, tracking systems, and automation tools.",
            type: "PDF",
            size: "2.8 MB",
            category: "Service Brochures",
            icon: FileText,
            featured: false,
            downloads: 543
        },
        {
            title: "Compliance & Certifications",
            description: "Complete documentation of our regulatory compliance, certifications, and quality standards.",
            type: "PDF",
            size: "1.9 MB",
            category: "Compliance Documents",
            icon: Shield,
            featured: false,
            downloads: 421
        },
        {
            title: "Cold Chain Logistics Capabilities",
            description: "Specialized cold storage and temperature-controlled transportation solutions for sensitive cargo.",
            type: "PDF",
            size: "3.5 MB",
            category: "Service Brochures",
            icon: Image,
            featured: false,
            downloads: 387
        },
        {
            title: "Shipment Booking Form",
            description: "Printable form for offline shipment bookings with complete field specifications.",
            type: "PDF",
            size: "0.8 MB",
            category: "Forms",
            icon: FileText,
            featured: false,
            downloads: 756
        },
        {
            title: "Insurance Claim Form",
            description: "Official form for filing insurance claims with step-by-step instructions and requirements.",
            type: "PDF",
            size: "0.6 MB",
            category: "Forms",
            icon: FileText,
            featured: false,
            downloads: 234
        },
        {
            title: "Service Level Agreement Template",
            description: "Standard SLA template outlining service commitments, KPIs, and performance metrics.",
            type: "PDF",
            size: "1.2 MB",
            category: "Compliance Documents",
            icon: Shield,
            featured: false,
            downloads: 178
        },
        {
            title: "Network Coverage Map",
            description: "Interactive map showing our complete service network across India with hub locations.",
            type: "PDF",
            size: "5.1 MB",
            category: "Capability Decks",
            icon: BarChart3,
            featured: false,
            downloads: 634
        },
        {
            title: "Sustainability Report 2024",
            description: "Annual sustainability report highlighting our environmental initiatives and green logistics practices.",
            type: "PDF",
            size: "3.7 MB",
            category: "Company Profiles",
            icon: FileText,
            featured: false,
            downloads: 156
        },
        {
            title: "Industry Solutions Portfolio",
            description: "Customized logistics solutions for specific industries including FMCG, healthcare, and automotive.",
            type: "PDF",
            size: "4.8 MB",
            category: "Service Brochures",
            icon: Image,
            featured: false,
            downloads: 445
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
                            <span className="text-[#F8FFFF]">Downloads</span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-bold mb-6 text-[#F8FFFF]"
                        >
                            Resource Downloads
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-xl text-[#F8FFFF]/90 max-w-3xl"
                        >
                            Access comprehensive documentation, brochures, and resources to understand our logistics capabilities.
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
                                placeholder="Search resources..."
                                className="pl-10 border-[#185EAA]/20 focus:border-[#185EAA]"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button className="bg-[#113C6A] hover:bg-[#185EAA] text-white">Search</Button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {downloadCategories.map((category, index) => (
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

                {/* Featured Downloads */}
                {featuredDownloads.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-[#113C6A]">Featured Resources</h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="grid md:grid-cols-3 gap-6"
                        >
                            {featuredDownloads.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="rounded-xl overflow-hidden bg-white border border-[#185EAA]/20 group hover:shadow-lg transition-shadow"
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getIconColor(item.category)}`}>
                                                <item.icon className="h-6 w-6" />
                                            </div>
                                            <Badge className="bg-[#113C6A]/10 text-[#113C6A] hover:bg-[#113C6A]/20 border-0">
                                                {item.category}
                                            </Badge>
                                        </div>

                                        <h3 className="font-semibold mb-2 text-[#113C6A] group-hover:text-[#FF7729] transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-[#21221C]/70 mb-4">{item.description}</p>

                                        <div className="flex items-center justify-between text-sm text-[#21221C]/60 mb-4">
                                            <span>{item.type} • {item.size}</span>
                                            <span>{item.downloads} downloads</span>
                                        </div>

                                        <Button className="w-full bg-[#113C6A] hover:bg-[#185EAA] text-white">
                                            <Download className="mr-2 h-4 w-4" />
                                            Download Now
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>
                )}

                {/* All Downloads */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-[#113C6A]">
                        {filteredDownloads.length > 0 ? "All Resources" : "No Resources Found"}
                    </h2>

                    {filteredDownloads.length === 0 ? (
                        <div className="text-center py-12 bg-[#F8FFFF] rounded-xl border border-[#185EAA]/20">
                            <p className="text-[#21221C]/70 mb-4">No resources match your search criteria.</p>
                            <Button
                                className="bg-[#113C6A] hover:bg-[#185EAA] text-white"
                                onClick={() => {
                                    setActiveCategory("All Resources");
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
                            className="grid gap-4"
                        >
                            {regularDownloads.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="rounded-xl overflow-hidden bg-white border border-[#185EAA]/20 group hover:shadow-md transition-shadow"
                                >
                                    <div className="p-6">
                                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                                            <div className="flex items-start gap-4 flex-1">
                                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getIconColor(item.category)}`}>
                                                    <item.icon className="h-6 w-6" />
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex items-start justify-between mb-2">
                                                        <h3 className="font-semibold text-[#113C6A] group-hover:text-[#FF7729] transition-colors">
                                                            {item.title}
                                                        </h3>
                                                        <Badge className="ml-4 bg-[#113C6A]/10 text-[#113C6A] hover:bg-[#113C6A]/20 border-0">
                                                            {item.category}
                                                        </Badge>
                                                    </div>
                                                    <p className="text-sm text-[#21221C]/70 mb-2">{item.description}</p>
                                                    <div className="flex items-center gap-4 text-xs text-[#21221C]/60">
                                                        <span>{item.type} • {item.size}</span>
                                                        <span>{item.downloads} downloads</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <Button className="md:w-auto bg-[#113C6A] hover:bg-[#185EAA] text-white">
                                                <Download className="mr-2 h-4 w-4" />
                                                Download
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </section>


            </div>
            {/* CTA Section */}
            <div className="mt-16">
                <div className="rounded-xl p-8 md:p-12 bg-gradient-to-b from-[#FFFDF7] to-[#113C6A] text-center">
                    <h2 className="text-3xl font-bold mb-4 text-[#113C6A]">Need a Custom Proposal?</h2>
                    <p className="text-lg mb-8 opacity-90 text-[#000]/60">
                        Looking for specific information or a tailored logistics solution? Our team can create custom documentation for your business needs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group"
                        >
                            Get Quote
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all group"
                        >
                            Request Custom Proposal
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default Downloads;