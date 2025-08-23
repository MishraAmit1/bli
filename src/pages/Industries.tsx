// src/pages/Industries.tsx

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import {
    Cpu, Gift, Coffee, Home, Shirt, Wrench, Car, ShoppingCart,
    ArrowRight, ArrowLeft, Zap, Shield, CheckCircle, Clock,
    Package, TrendingUp, Truck, BarChart,
    Factory
} from "lucide-react";
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { cn } from '@/lib/utils';
import { Helmet } from 'react-helmet-async';

const Industries = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

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

    const industries = [
        {
            id: "electronics",
            icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFFDF7]" />,
            title: "Electronics & Electrical Goods",
            subtitle: "Fragile • High-Value",
            description: "From bulbs and tube lights to cables and small appliances—handled with zero-breakage SOPs.",
            image: "/lovable-uploads/industries1.jpg",
            link: "/projects/electronics",
            tags: ["Shock-Safe Packing", "Scan-Based Handover", "ePOD"],
            highlights: [
                { icon: <Shield className="w-4 h-4 text-blue-500" />, text: "Zero-breakage SOPs" },
                { icon: <Package className="w-4 h-4 text-green-500" />, text: "Shock-safe packaging" },
                { icon: <CheckCircle className="w-4 h-4 text-purple-500" />, text: "Scan-based handover" },
                { icon: <Zap className="w-4 h-4 text-yellow-500" />, text: "Electronic POD system" }
            ]
        },
        {
            id: "toys",
            icon: <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFFDF7]" />,
            title: "Toys, Gifts & Seasonal Items",
            subtitle: "Careful • Festive-Ready",
            description: "Corporate gifts and seasonal ranges delivered intact and on time for campaigns.",
            image: "/lovable-uploads/industries2.jpg",
            link: "/projects/toys",
            tags: ["Protective Packing", "Segregation", "Deadline Routing"],
            highlights: [
                { icon: <Gift className="w-4 h-4 text-pink-500" />, text: "Protective gift packing" },
                { icon: <Clock className="w-4 h-4 text-red-500" />, text: "Campaign deadline routing" },
                { icon: <Shield className="w-4 h-4 text-blue-500" />, text: "Careful segregation" },
                { icon: <CheckCircle className="w-4 h-4 text-green-500" />, text: "Festive-ready delivery" }
            ]
        },
        {
            id: "fmcg",
            icon: <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFFDF7]" />,
            title: "Food, Beverages & FMCG",
            subtitle: "Fresh • Ambient/Controlled",
            description: "Compliant handling for packaged foods & beverages with batch/lot visibility.",
            image: "/lovable-uploads/industries3.jpg",
            link: "/projects/fmcg",
            tags: ["Ambient/Temp Controlled", "FIFO", "Seal-Intact SOPs"],
            highlights: [
                { icon: <Shield className="w-4 h-4 text-blue-500" />, text: "Temperature controlled storage" },
                { icon: <Clock className="w-4 h-4 text-red-500" />, text: "FIFO inventory management" },
                { icon: <CheckCircle className="w-4 h-4 text-green-500" />, text: "Seal-intact SOPs" },
                { icon: <Package className="w-4 h-4 text-purple-500" />, text: "Batch/lot visibility" }
            ]
        },
        {
            id: "plastics",
            icon: <Home className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFFDF7]" />,
            title: "Home & Kitchen Plastics",
            subtitle: "Lightweight • High-Cube",
            description: "Princeware/Cello-type SKUs moved in volume with low-damage stacking.",
            image: "/lovable-uploads/industries4.jpg",
            link: "/projects/plastics",
            tags: ["High-Cube Vehicles", "Space Optimization", "Stretch-Wrap"],
            highlights: [
                { icon: <Truck className="w-4 h-4 text-orange-500" />, text: "High-cube vehicles" },
                { icon: <BarChart className="w-4 h-4 text-blue-500" />, text: "Space optimization" },
                { icon: <Shield className="w-4 h-4 text-green-500" />, text: "Low-damage stacking" },
                { icon: <Package className="w-4 h-4 text-purple-500" />, text: "Stretch-wrap protection" }
            ]
        },
        {
            id: "apparel",
            icon: <Shirt className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFFDF7]" />,
            title: "Apparel & Footwear",
            subtitle: "Clean • Store-Ready",
            description: "Carton-perfect moves for fashion, accessories, and footwear—B2B & marketplace ready.",
            image: "/lovable-uploads/industries5.jpg",
            link: "/projects/apparel",
            tags: ["Garment-Safe Handling", "No Crush", "Store Labeling"],
            highlights: [
                { icon: <Shield className="w-4 h-4 text-blue-500" />, text: "Garment-safe handling" },
                { icon: <CheckCircle className="w-4 h-4 text-green-500" />, text: "No-crush packaging" },
                { icon: <Package className="w-4 h-4 text-purple-500" />, text: "Store-ready labeling" },
                { icon: <Truck className="w-4 h-4 text-orange-500" />, text: "B2B & marketplace ready" }
            ]
        },
        {
            id: "machinery",
            icon: <Wrench className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFFDF7]" />,
            title: "Industrial Supplies & Light Machinery",
            subtitle: "Heavy-Duty • Reliable",
            description: "Machines, tools, and spares delivered safely to plants and distributors.",
            image: "/lovable-uploads/industries6.jpg",
            link: "/projects/machinery",
            tags: ["Bracing", "Lashing", "Time-Critical Runs"],
            highlights: [
                { icon: <Shield className="w-4 h-4 text-blue-500" />, text: "Heavy-duty bracing" },
                { icon: <Truck className="w-4 h-4 text-orange-500" />, text: "Secure lashing" },
                { icon: <Clock className="w-4 h-4 text-red-500" />, text: "Time-critical runs" },
                { icon: <CheckCircle className="w-4 h-4 text-green-500" />, text: "Plant-safe delivery" }
            ]
        },
        {
            id: "automotive",
            icon: <Car className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFFDF7]" />,
            title: "Automotive Spares & Accessories",
            subtitle: "SKU-Dense • Dealer-Ready",
            description: "Fast replenishment to workshops and retailers with part-level accuracy.",
            image: "/lovable-uploads/industries7.jpg",
            link: "/projects/automotive",
            tags: ["Milk-Run Routing", "Dealer Network", "Scan In/Out"],
            highlights: [
                { icon: <Truck className="w-4 h-4 text-orange-500" />, text: "Milk-run routing" },
                { icon: <CheckCircle className="w-4 h-4 text-green-500" />, text: "Dealer network ready" },
                { icon: <Package className="w-4 h-4 text-purple-500" />, text: "Part-level accuracy" },
                { icon: <Shield className="w-4 h-4 text-blue-500" />, text: "Scan in/out system" }
            ]
        },
        {
            id: "marketplace",
            icon: <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFFDF7]" />,
            title: "Marketplace & D2C Sellers",
            subtitle: "Flexible • Reverse-Ready",
            description: "First-mile to hub with seamless handoff to last-mile partners and easy returns.",
            image: "/lovable-uploads/industries8.jpg",
            link: "/projects/marketplace",
            tags: ["COD Workflows", "Prepaid Flow", "Reverse Pickups"],
            highlights: [
                { icon: <Zap className="w-4 h-4 text-yellow-500" />, text: "COD workflows" },
                { icon: <Shield className="w-4 h-4 text-blue-500" />, text: "Prepaid flow management" },
                { icon: <Package className="w-4 h-4 text-green-500" />, text: "Reverse pickups" },
                { icon: <CheckCircle className="w-4 h-4 text-purple-500" />, text: "Last-mile handoff" }
            ]
        }
    ];

    const handleIndustryClick = (industryId: string) => {
        setSelectedIndustry(selectedIndustry === industryId ? null : industryId);
    };

    const selectedIndustryData = industries.find(ind => ind.id === selectedIndustry);

    // Structured Data for Industries
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Industry-Specific Logistics Solutions",
        "description": "Tailored logistics solutions for 8+ industries including Electronics, FMCG, Automotive, Apparel, Marketplace sellers with specialized handling and SOPs.",
        "provider": {
            "@type": "Organization",
            "name": "BLI - Bansal Logistics of India",
            "url": "https://www.blirapid.com"
        },
        "areaServed": {
            "@type": "Country",
            "name": "India"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Industry Solutions",
            "itemListElement": industries.map((industry, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "name": industry.title,
                "description": industry.description,
                "category": industry.subtitle
            }))
        }
    };

    // FAQ Schema for Industries
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Which industries does BLI serve?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BLI serves 8+ industries including Electronics & Electrical Goods, FMCG & Food, Automotive, Apparel & Footwear, Industrial Machinery, Home & Kitchen Plastics, Toys & Gifts, and Marketplace & D2C sellers."
                }
            },
            {
                "@type": "Question",
                "name": "What specialized services does BLI offer for electronics?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For electronics, BLI offers zero-breakage SOPs, shock-safe packaging, scan-based handover, and electronic POD systems to ensure fragile items are handled safely."
                }
            },
            {
                "@type": "Question",
                "name": "How does BLI handle FMCG and food products?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BLI provides temperature-controlled storage, FIFO inventory management, seal-intact SOPs, and batch/lot visibility for FMCG and food products."
                }
            },
            {
                "@type": "Question",
                "name": "What automotive logistics services does BLI provide?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BLI offers milk-run routing, dealer network distribution, part-level accuracy tracking, and scan in/out systems for automotive spares and accessories."
                }
            }
        ]
    };

    return (
        <PageLayout>
            <Helmet>
                <title>Industries We Serve | Electronics, FMCG, Automotive, Apparel Logistics | BLI</title>
                <meta name="description" content="Specialized logistics for 8+ industries: Electronics (zero-breakage), FMCG (temperature-controlled), Automotive (dealer network), Apparel, Marketplace sellers. Tailored SOPs for each sector." />
                <meta name="keywords" content="industry logistics, electronics logistics, FMCG logistics, automotive logistics, apparel logistics, marketplace logistics, specialized logistics, industry-specific transport" />

                {/* Open Graph */}
                <meta property="og:title" content="Industry-Specific Logistics Solutions | BLI" />
                <meta property="og:description" content="Tailored logistics for Electronics, FMCG, Automotive, Apparel & more. Specialized handling, SOPs, and industry expertise." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.blirapid.com/industries" />
                <meta property="og:image" content="https://www.blirapid.com/industries-logistics.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Industries We Serve - Specialized Logistics Solutions | BLI" />
                <meta name="twitter:description" content="8+ industries served with tailored logistics: Electronics, FMCG, Automotive, Apparel, Marketplace sellers." />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.blirapid.com/industries" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="relative bg-[#113C6A] pt-8 sm:pt-10 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-gradient-to-b from-[#113C6A]/90 to-[#185EAA]/80" />
                <div className="container mx-auto relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
                            <Link to="/" className="inline-flex items-center text-[#F8FFFF]/80 hover:text-[#F8FFFF] transition-colors text-sm sm:text-base">
                                <ArrowLeft className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                Back to Home
                            </Link>
                        </nav>

                        <motion.h1
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#F8FFFF] leading-tight"
                        >
                            Industries We Serve
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-[#F8FFFF]/90"
                        >
                            Tailored Logistics for Every Sector
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-base sm:text-lg md:text-xl text-[#F8FFFF]/90 max-w-3xl leading-relaxed px-2 sm:px-0"
                        >
                            From electronics to marketplace sellers, we understand the unique logistics challenges
                            of each industry and deliver solutions that drive your business forward.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-6 sm:mt-8"
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                                aria-label="Discuss your industry logistics needs"
                            >
                                <span>Discuss Your Industry Needs</span>
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Industries Grid Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="industries-heading">
                <div className="container mx-auto max-w-7xl">
                    <h2 id="industries-heading" className="sr-only">Industries and Sectors We Serve</h2>

                    {/* Industry Cards Grid - Simplified with only icons and titles */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
                        role="list"
                    >
                        {industries.map((industry) => (
                            <motion.article
                                key={industry.id}
                                variants={itemVariants}
                                onClick={() => handleIndustryClick(industry.id)}
                                className={cn(
                                    "cursor-pointer rounded-xl p-4 sm:p-6 border-2 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px]",
                                    selectedIndustry === industry.id
                                        ? "bg-[#113C6A] border-[#FF7729] shadow-xl scale-[1.02]"
                                        : "bg-white border-[#185EAA]/20 hover:border-[#185EAA]/50 hover:shadow-lg"
                                )}
                                role="listitem"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handleIndustryClick(industry.id);
                                    }
                                }}
                                aria-label={`Select ${industry.title} industry`}
                            >
                                <div className={cn(
                                    "w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4",
                                    selectedIndustry === industry.id
                                        ? "bg-[#FF7729]"
                                        : "bg-[#113C6A]"
                                )} aria-hidden="true">
                                    {industry.icon}
                                </div>
                                <h3 className={cn(
                                    "font-bold text-sm sm:text-base md:text-lg text-center leading-tight",
                                    selectedIndustry === industry.id
                                        ? "text-[#FFFDF7]"
                                        : "text-[#113C6A]"
                                )}>
                                    {industry.title}
                                </h3>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* Selected Industry Details */}
                    {selectedIndustry && selectedIndustryData && (
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#F8FFFF] rounded-xl p-4 sm:p-6 md:p-8 border border-[#185EAA]/20 shadow-lg mb-8 sm:mb-12"
                            aria-labelledby="selected-industry-heading"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                                {/* Left side - Image */}
                                <div className="relative rounded-xl overflow-hidden h-[250px] sm:h-[300px] md:h-[400px] order-1 lg:order-1">
                                    <img
                                        src={selectedIndustryData.image}
                                        alt={`${selectedIndustryData.title} logistics solutions`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#FF7729] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                                        {selectedIndustryData.subtitle}
                                    </div>
                                </div>

                                {/* Right side - Content */}
                                <div className="order-2 lg:order-2">
                                    <h3 id="selected-industry-heading" className="text-xl sm:text-2xl font-bold text-[#113C6A] mb-3 sm:mb-4">
                                        {selectedIndustryData.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-[#21221C]/80 mb-4 sm:mb-6 leading-relaxed">
                                        {selectedIndustryData.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                                        {selectedIndustryData.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2 sm:px-3 py-1 bg-[#185EAA]/10 text-[#113C6A] rounded-full text-xs sm:text-sm font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h4 className="text-base sm:text-lg font-semibold text-[#113C6A] mb-3 sm:mb-4">Key Features:</h4>
                                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6" role="list">
                                        {selectedIndustryData.highlights.map((highlight, index) => (
                                            <li key={index} className="flex items-start gap-2 sm:gap-3">
                                                <div className="mt-0.5 flex-shrink-0" aria-hidden="true">{highlight.icon}</div>
                                                <p className="text-[#21221C]/70 text-xs sm:text-sm">{highlight.text}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.section>
                    )}
                </div>
            </section>

            {/* Hidden FAQ Section for SEO */}
            <section className="sr-only" aria-label="Frequently Asked Questions">
                <h2>Frequently Asked Questions about Industries We Serve</h2>
                <dl>
                    <dt>Which industries does BLI serve?</dt>
                    <dd>BLI serves 8+ industries including Electronics & Electrical Goods, FMCG & Food, Automotive, Apparel & Footwear, Industrial Machinery, Home & Kitchen Plastics, Toys & Gifts, and Marketplace & D2C sellers.</dd>

                    <dt>What specialized services does BLI offer for electronics?</dt>
                    <dd>For electronics, BLI offers zero-breakage SOPs, shock-safe packaging, scan-based handover, and electronic POD systems to ensure fragile items are handled safely.</dd>

                    <dt>How does BLI handle FMCG and food products?</dt>
                    <dd>BLI provides temperature-controlled storage, FIFO inventory management, seal-intact SOPs, and batch/lot visibility for FMCG and food products.</dd>

                    <dt>What automotive logistics services does BLI provide?</dt>
                    <dd>BLI offers milk-run routing, dealer network distribution, part-level accuracy tracking, and scan in/out systems for automotive spares and accessories.</dd>

                    <dt>Does BLI serve marketplace and D2C sellers?</dt>
                    <dd>Yes, BLI provides COD workflows, prepaid flow management, reverse pickups, and last-mile handoff services for marketplace and D2C sellers.</dd>
                </dl>
            </section>

            {/* CTA Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12 sm:mt-16 text-center bg-gradient-to-b from-[#FFFDF7] to-[#113C6A] text-[#FFFDF7] p-6 sm:p-8 md:p-12"
                aria-labelledby="cta-heading"
            >
                <h2 id="cta-heading" className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#113C6A]">
                    Looking for a logistics partner in your industry?
                </h2>
                <p className="text-sm sm:text-base text-[#000]/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
                    Our industry experts are ready to discuss your specific requirements and create
                    a tailored solution for your business.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                        aria-label="Talk to our industry experts"
                    >
                        <span>Talk to Our Team</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </Link>
                    <Link
                        to="/services"
                        className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all group text-sm sm:text-base"
                        aria-label="View our logistics services"
                    >
                        <span>View Our Services</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </Link>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 pt-12 border-t border-[#F8FFFF]/20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">8+</p>
                            <p className="text-[#000]/80 mt-1">Industries Served</p>
                        </div>
                        <div>
                            <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">500+</p>
                            <p className="text-[#000]/80 mt-1">Industry Clients</p>
                        </div>
                        <div>
                            <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">99%</p>
                            <p className="text-[#000]/80 mt-1">Industry Compliance</p>
                        </div>
                        <div>
                            <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">25+</p>
                            <p className="text-[#000]/80 mt-1">Years Experience</p>
                        </div>
                    </div>
                </div>
            </motion.section>
        </PageLayout>
    );
};

export default Industries;