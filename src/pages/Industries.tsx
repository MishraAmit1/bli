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
            icon: <Cpu className="w-8 h-8 text-[#FFFDF7]" />,
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
            icon: <Gift className="w-8 h-8 text-[#FFFDF7]" />,
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
            icon: <Coffee className="w-8 h-8 text-[#FFFDF7]" />,
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
            icon: <Home className="w-8 h-8 text-[#FFFDF7]" />,
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
            icon: <Shirt className="w-8 h-8 text-[#FFFDF7]" />,
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
            icon: <Wrench className="w-8 h-8 text-[#FFFDF7]" />,
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
            icon: <Car className="w-8 h-8 text-[#FFFDF7]" />,
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
            icon: <ShoppingCart className="w-8 h-8 text-[#FFFDF7]" />,
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

    return (
        <PageLayout>
            {/* Hero Section */}
            <section className="relative bg-[#113C6A] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-gradient-to-b from-[#113C6A]/90 to-[#185EAA]/80" />
                <div className="container mx-auto relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <Link to="/" className="inline-flex items-center text-[#F8FFFF]/80 hover:text-[#F8FFFF] mb-6 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>

                        <motion.h1
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-bold mb-6 text-[#F8FFFF]"
                        >
                            Industries We Serve
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-2xl md:text-3xl font-semibold mb-4 text-[#F8FFFF]/90"
                        >
                            Tailored Logistics for Every Sector
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-xl text-[#F8FFFF]/90 max-w-3xl"
                        >
                            From electronics to marketplace sellers, we understand the unique logistics challenges
                            of each industry and deliver solutions that drive your business forward.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-8"
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group"
                            >
                                Discuss Your Industry Needs
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Industries Grid Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    {/* Industry Cards Grid - Simplified with only icons and titles */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
                    >
                        {industries.map((industry) => (
                            <motion.div
                                key={industry.id}
                                variants={itemVariants}
                                onClick={() => handleIndustryClick(industry.id)}
                                className={cn(
                                    "cursor-pointer rounded-xl p-6 border-2 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[160px]",
                                    selectedIndustry === industry.id
                                        ? "bg-[#113C6A] border-[#FF7729] shadow-xl scale-[1.02]"
                                        : "bg-white border-[#185EAA]/20 hover:border-[#185EAA]/50 hover:shadow-lg"
                                )}
                            >
                                <div className={cn(
                                    "w-16 h-16 rounded-full flex items-center justify-center mb-4",
                                    selectedIndustry === industry.id
                                        ? "bg-[#FF7729]"
                                        : "bg-[#113C6A]"
                                )}>
                                    {industry.icon}
                                </div>
                                <h3 className={cn(
                                    "font-bold text-lg text-center",
                                    selectedIndustry === industry.id
                                        ? "text-[#FFFDF7]"
                                        : "text-[#113C6A]"
                                )}>
                                    {industry.title}
                                </h3>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Selected Industry Details */}
                    {selectedIndustry && selectedIndustryData && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#F8FFFF] rounded-xl p-6 md:p-8 border border-[#185EAA]/20 shadow-lg mb-12"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Left side - Image */}
                                <div className="relative rounded-xl overflow-hidden h-[300px] md:h-[400px]">
                                    <img
                                        src={selectedIndustryData.image}
                                        alt={selectedIndustryData.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4 bg-[#FF7729] text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {selectedIndustryData.subtitle}
                                    </div>
                                </div>

                                {/* Right side - Content */}
                                <div>
                                    <h3 className="text-2xl font-bold text-[#113C6A] mb-4">
                                        {selectedIndustryData.title}
                                    </h3>
                                    <p className="text-[#21221C]/80 mb-6">
                                        {selectedIndustryData.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selectedIndustryData.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-[#185EAA]/10 text-[#113C6A] rounded-full text-sm font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h4 className="text-lg font-semibold text-[#113C6A] mb-4">Key Features:</h4>
                                    <div className="space-y-3 mb-6">
                                        {selectedIndustryData.highlights.map((highlight, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="mt-0.5">{highlight.icon}</div>
                                                <p className="text-[#21221C]/70 text-sm">{highlight.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16 text-center bg-gradient-to-b from-[#FFFDF7] to-[#113C6A] text-[#FFFDF7] p-8 md:p-12"
            >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#113C6A]">
                    Looking for a logistics partner in your industry?
                </h2>
                <p className="text-[#000]/60 mb-8 max-w-2xl mx-auto">
                    Our industry experts are ready to discuss your specific requirements and create
                    a tailored solution for your business.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/contact"
                        className="inline-flex items-center px-6 md:px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group"
                    >
                        Talk to Our Team
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/services"
                        className="inline-flex items-center px-6 md:px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all group"
                    >
                        View Our Services
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </motion.div>
        </PageLayout>
    );
};

export default Industries;