import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import {
    BookOpen, BarChart3, HelpCircle, Download, ArrowRight, ChevronDown,
    ArrowLeft
} from "lucide-react";
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Resources = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

    const quickAccessItems = [
        {
            icon: <BookOpen className="h-8 w-8" />,
            title: "Blogs & Insights",
            description: "Latest trends and expert insights in logistics",
            href: "/resources/blogs",
            color: "bg-[#185EAA]/10 text-[#113C6A]"
        },
        {
            icon: <HelpCircle className="h-8 w-8" />,
            title: "FAQs",
            description: "Quick answers to common questions",
            href: "/resources/faqs",
            color: "bg-[#FF7729]/10 text-[#FF7729]"
        },
        {
            icon: <Download className="h-8 w-8" />,
            title: "Downloads",
            description: "Brochures, profiles, and resources",
            href: "/resources/downloads",
            color: "bg-[#113C6A]/10 text-[#113C6A]"
        },
        {
            icon: <BarChart3 className="h-8 w-8" />,
            title: "Industry Reports",
            description: "Data-driven logistics industry insights",
            href: "/resources/reports",
            color: "bg-[#FF7729]/10 text-[#FF7729]"
        }
    ];

    const featuredBlogs = [
        {
            title: "Digital Transformation in Supply Chain Analytics",
            excerpt: "How data-driven insights are revolutionizing logistics operations across industries.",
            image: "/lovable-uploads/services1.jpg",
            readTime: "5 min read",
            slug: "digital-transformation-supply-chain-analytics"
        },
        {
            title: "AI-Powered Warehouse Automation Trends",
            excerpt: "Exploring the latest developments in artificial intelligence for warehouse management.",
            image: "/lovable-uploads/services2.jpg",
            readTime: "7 min read",
            slug: "ai-powered-warehouse-automation"
        },
        {
            title: "Sustainable Logistics: Green Transportation Solutions",
            excerpt: "Environmental initiatives driving the future of eco-friendly logistics operations.",
            image: "/lovable-uploads/services3.png",
            readTime: "6 min read",
            slug: "sustainable-logistics-green-transportation"
        }
    ];

    const topFAQs = [
        {
            question: "How do I request a shipment?",
            answer: "You can request a shipment through our online portal, mobile app, or by calling our 24/7 customer service team. Simply provide pickup and delivery details, and we'll handle the rest."
        },
        {
            question: "What tracking options are available?",
            answer: "We offer real-time GPS tracking, SMS updates, email notifications, and a comprehensive online tracking portal where you can monitor your shipment's progress 24/7."
        },
        {
            question: "What are your delivery timeframes?",
            answer: "Delivery times vary by service type and distance. Express deliveries within cities are typically same-day or next-day, while interstate shipments range from 2-5 business days."
        },
        {
            question: "How is pricing calculated?",
            answer: "Pricing is based on factors including distance, weight, dimensions, service type, and any special handling requirements. Contact us for a detailed quote tailored to your needs."
        }
    ];

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
                            Resources to Power Your Supply Chain Decisions
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-xl text-[#F8FFFF]/90 max-w-3xl"
                        >
                            From insights to FAQs — find everything you need to move smarter with BLI Rapid.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-8 flex flex-col sm:flex-row gap-4"
                        >
                            <Link
                                to="/resources/blogs"
                                className="inline-flex items-center px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group"
                            >
                                Explore Blogs
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all"
                            >
                                Get Quote
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Quick Access Grid */}
                <section className="py-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-12 text-[#113C6A]"
                    >
                        Quick Access
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {quickAccessItems.map((item, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Link to={item.href} className="group block">
                                    <div className="h-full rounded-xl border border-[#185EAA]/20 bg-white p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#185EAA]/50">
                                        <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 text-[#113C6A]">{item.title}</h3>
                                        <p className="text-[#21221C]/70">{item.description}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Featured Blog Preview */}
                <section className="py-16 bg-[#F8FFFF] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-xl">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
                            <h2 className="text-3xl font-bold text-[#113C6A] mb-4 sm:mb-0">Latest Insights</h2>
                            <Link
                                to="/resources/blogs"
                                className="inline-flex items-center px-6 py-2 border border-[#113C6A] text-[#113C6A] rounded hover:bg-[#113C6A] hover:text-white transition-colors"
                            >
                                Read All Blogs
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {featuredBlogs.map((blog, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="rounded-xl overflow-hidden bg-white border border-[#185EAA]/20 group hover:shadow-lg transition-shadow"
                                >
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="text-sm text-[#21221C]/60 mb-2">{blog.readTime}</div>
                                        <h3 className="font-semibold text-lg mb-2 text-[#113C6A] group-hover:text-[#FF7729] transition-colors">
                                            {blog.title}
                                        </h3>
                                        <p className="text-sm text-[#21221C]/70 mb-4">{blog.excerpt}</p>
                                        <Link
                                            to={`/resources/blogs/${blog.slug}`}
                                            className="inline-flex items-center text-[#FF7729] hover:underline"
                                        >
                                            Read More
                                            <ArrowRight className="ml-1 h-4 w-4" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Highlight */}
                <section className="py-16">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
                        <h2 className="text-3xl font-bold text-[#113C6A] mb-4 sm:mb-0">Frequently Asked Questions</h2>
                        <Link
                            to="/resources/faqs"
                            className="inline-flex items-center px-6 py-2 border border-[#113C6A] text-[#113C6A] rounded hover:bg-[#113C6A] hover:text-white transition-colors"
                        >
                            View Full FAQ Library
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                    <div className="max-w4xl mx-auto">
                        <Accordion type="single" collapsible className="border rounded-xl overflow-hidden">
                            {topFAQs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-0">
                                    <AccordionTrigger className="text-left px-6 py-4 hover:bg-[#F8FFFF] text-[#113C6A] font-medium">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-[#21221C]/70 px-6 pb-4">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* Download Center Highlight */}
                <section className="py-16 bg-[#F8FFFF] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-xl">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
                            <h2 className="text-3xl font-bold text-[#113C6A] mb-4 sm:mb-0">Resource Downloads</h2>
                            <Link
                                to="/resources/downloads"
                                className="inline-flex items-center px-6 py-2 border border-[#113C6A] text-[#113C6A] rounded hover:bg-[#113C6A] hover:text-white transition-colors"
                            >
                                Access Downloads
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="rounded-xl p-6 bg-white border border-[#185EAA]/20 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-[#113C6A]/10 rounded-lg flex items-center justify-center">
                                        <Download className="h-6 w-6 text-[#113C6A]" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold mb-2 text-[#113C6A]">Company Profile</h3>
                                        <p className="text-sm text-[#21221C]/70 mb-3">
                                            Comprehensive overview of BLI Rapid's capabilities and services
                                        </p>
                                        <Button className="bg-[#113C6A] hover:bg-[#185EAA] text-white">Download PDF</Button>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="rounded-xl p-6 bg-white border border-[#185EAA]/20 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-[#FF7729]/10 rounded-lg flex items-center justify-center">
                                        <Download className="h-6 w-6 text-[#FF7729]" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold mb-2 text-[#113C6A]">Fleet Capabilities Brochure</h3>
                                        <p className="text-sm text-[#21221C]/70 mb-3">
                                            Detailed specifications of our transportation fleet
                                        </p>
                                        <Button className="bg-[#FF7729] hover:bg-[#e56721] text-white">Download PDF</Button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
            {/* Engagement CTA */}
            <section className="py-">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-12  bg-gradient-to-b from-[#FFFDF7] to-[#113C6A] text-[#F8FFFF] text-center"
                >
                    <h2 className="text-3xl font-bold mb-4 text-[#113C6A]">Stay Updated with Logistics Insights</h2>
                    <p className="text-lg mb-8 opacity-90 text-[#000]/60">
                        Get the latest industry trends, tips, and updates delivered to your inbox
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <Input
                            placeholder="Enter your email"
                            className="bg-white text-[#21221C] border-white"
                        />
                        <Button className="bg-[#FF7729] hover:bg-[#e56721] text-white">Subscribe Now</Button>
                    </div>
                    <div className="mt-8">
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all"
                        >
                            Contact Support
                        </Link>
                    </div>
                </motion.div>
            </section>
        </PageLayout>
    );
};

export default Resources;