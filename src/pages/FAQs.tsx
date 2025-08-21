// src/pages/FAQs.tsx

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import {
    Search, MessageCircle, ArrowRight, ArrowLeft
} from "lucide-react";
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQs = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const faqCategories = [
        {
            title: "General",
            icon: "📋",
            count: 8,
            faqs: [
                {
                    question: "What services does BLI Rapid offer?",
                    answer: "BLI Rapid provides comprehensive logistics solutions including full truckload (FTL), part load (PTL), and 3PL services. We specialize in last-mile delivery, warehouse management, inventory optimization, and supply chain consulting across India."
                },
                {
                    question: "Which industries do you serve?",
                    answer: "We serve diverse industries including FMCG, e-commerce, manufacturing, automotive, healthcare, pharmaceuticals, textiles, and food & beverage. Our solutions are customized to meet specific industry requirements."
                },
                {
                    question: "What geographic areas do you cover?",
                    answer: "BLI Rapid operates pan-India with a network covering all major cities and tier-2/tier-3 towns. We have strategically located hubs in Delhi NCR, Mumbai, Bangalore, Chennai, Kolkata, Pune, and Ahmedabad."
                },
                {
                    question: "How do I get started with BLI Rapid?",
                    answer: "Simply contact our sales team through the 'Get Quote' button, call our customer service, or fill out our online inquiry form. We'll assess your requirements and provide a customized logistics solution."
                }
            ]
        },
        {
            title: "Shipments & Operations",
            icon: "🚛",
            count: 12,
            faqs: [
                {
                    question: "How do I request a shipment?",
                    answer: "You can request shipments through our online portal, mobile app, customer service hotline (available 24/7), or by contacting your dedicated account manager. Provide pickup/delivery details, cargo specifications, and preferred delivery timeline."
                },
                {
                    question: "What tracking options are available?",
                    answer: "We offer comprehensive tracking through GPS-enabled vehicles, real-time updates via SMS/email, online tracking portal, mobile app notifications, and dedicated customer service support for status updates."
                },
                {
                    question: "What are your delivery timeframes?",
                    answer: "Delivery times vary by service type: Express (same-day/next-day within cities), Standard (2-3 days for metro-to-metro), Economy (3-5 days for long distances). Interstate deliveries typically take 2-7 days depending on origin-destination."
                },
                {
                    question: "Do you handle special cargo requirements?",
                    answer: "Yes, we manage specialized cargo including fragile items, hazardous materials, temperature-controlled goods, oversized cargo, and high-value shipments with appropriate handling protocols and insurance coverage."
                },
                {
                    question: "What documentation is required for shipments?",
                    answer: "Standard requirements include commercial invoice, packing list, transport challan, and relevant permits. For interstate movement, we handle e-way bills. Specialized cargo may require additional certifications."
                },
                {
                    question: "Can I modify or cancel a shipment after booking?",
                    answer: "Modifications are possible before pickup, subject to availability and route planning. Cancellations are accepted with minimal charges if done before pickup. Post-pickup changes incur additional costs."
                }
            ]
        },
        {
            title: "Billing & Invoicing",
            icon: "💰",
            count: 6,
            faqs: [
                {
                    question: "How is pricing calculated?",
                    answer: "Pricing considers multiple factors: distance, weight, dimensions (volumetric weight), service type (express/standard), fuel surcharge, toll charges, loading/unloading requirements, and any special handling needs."
                },
                {
                    question: "What payment methods do you accept?",
                    answer: "We accept bank transfers (NEFT/RTGS), cheques, digital payments (UPI, net banking), credit terms for verified corporate clients, and cash on delivery for select services."
                },
                {
                    question: "When will I receive my invoice?",
                    answer: "Invoices are generated immediately after delivery confirmation and sent via email within 24 hours. Corporate clients receive consolidated monthly invoices. All invoices include detailed service breakdowns."
                },
                {
                    question: "Do you offer credit terms?",
                    answer: "Yes, we provide flexible credit terms (15-45 days) for established corporate clients after credit verification. Terms depend on business volume, payment history, and company credentials."
                },
                {
                    question: "How can I get a detailed cost breakdown?",
                    answer: "Detailed quotations include base freight, fuel surcharge, toll charges, handling charges, insurance, taxes, and any additional services. Request detailed estimates through our sales team."
                }
            ]
        },
        {
            title: "Support & Claims",
            icon: "🛡️",
            count: 7,
            faqs: [
                {
                    question: "How do I file a claim for damaged goods?",
                    answer: "Report damage immediately upon delivery, document with photographs, fill out our claim form within 24 hours, and submit supporting documents. Our claims team will investigate and process compensation as per policy."
                },
                {
                    question: "What is your insurance coverage?",
                    answer: "We provide comprehensive transit insurance covering loss, damage, and theft. Coverage includes full cargo value replacement, subject to policy terms. Premium insurance options available for high-value goods."
                },
                {
                    question: "How quickly are claims processed?",
                    answer: "Standard claims are processed within 15-30 days after documentation submission. Complex cases may take longer. We provide regular updates throughout the claims process."
                },
                {
                    question: "What if my shipment is delayed?",
                    answer: "Delays are proactively communicated with reasons and revised ETAs. We offer compensation for delays caused by our operations as per service level agreements. Real-time updates keep you informed."
                },
                {
                    question: "How can I provide feedback?",
                    answer: "Share feedback through our website, mobile app, customer service helpline, or email. We value your input for continuous service improvement and respond to all feedback within 48 hours."
                }
            ]
        }
    ];

    const popularQuestions = [
        "How do I track my shipment?",
        "What are your delivery charges?",
        "Do you provide insurance coverage?",
        "How do I get a quote?",
        "What areas do you serve?",
        "How do I file a complaint?"
    ];

    // Filter FAQs based on search query
    const filteredFAQs = faqCategories.map(category => {
        const filteredQuestions = category.faqs.filter(faq =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return {
            ...category,
            faqs: filteredQuestions,
            count: filteredQuestions.length
        };
    }).filter(category => category.count > 0);

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

    const scrollToCategory = (categoryTitle: string) => {
        setActiveCategory(categoryTitle);
        const element = document.getElementById(categoryTitle.toLowerCase().replace(/\s+/g, '-'));
        if (element) {
            const yOffset = -100; // Adjust this value as needed
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
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
                            <span className="text-[#F8FFFF]">FAQs</span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-bold mb-6 text-[#F8FFFF]"
                        >
                            Frequently Asked Questions
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-xl text-[#F8FFFF]/90 max-w-3xl"
                        >
                            Find quick answers to common questions about our logistics services and operations.
                        </motion.p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
                {/* Search Bar */}
                <div className="mb-12">
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#21221C]/60" />
                        <Input
                            placeholder="Search for answers..."
                            className="pl-12 py-6 text-lg border-[#185EAA]/20 focus:border-[#185EAA]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main FAQ Content */}
                    <div className="flex-1">
                        {/* Category Overview */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
                        >
                            {faqCategories.map((category, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={cn(
                                        "rounded-xl p-4 border transition-all duration-300 cursor-pointer",
                                        activeCategory === category.title
                                            ? "bg-[#113C6A] border-[#FF7729] shadow-lg text-white"
                                            : "bg-white border-[#185EAA]/20 hover:border-[#185EAA]/50 hover:shadow-lg"
                                    )}
                                    onClick={() => scrollToCategory(category.title)}
                                >
                                    <div className="text-center">
                                        <div className="text-3xl mb-2">{category.icon}</div>
                                        <h3 className="font-semibold mb-1">{category.title}</h3>
                                        <p className={cn(
                                            "text-sm",
                                            activeCategory === category.title
                                                ? "text-[#F8FFFF]/80"
                                                : "text-[#21221C]/70"
                                        )}>
                                            {category.count} questions
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* FAQ Sections */}
                        <div className="space-y-12">
                            {filteredFAQs.map((category, categoryIndex) => (
                                <div key={categoryIndex} id={category.title.toLowerCase().replace(/\s+/g, '-')}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="text-2xl">{category.icon}</div>
                                        <h2 className="text-2xl font-bold text-[#113C6A]">{category.title}</h2>
                                        <Badge className="bg-[#113C6A]/10 text-[#113C6A] border-0">
                                            {category.count} questions
                                        </Badge>
                                    </div>

                                    <Accordion type="single" collapsible className="space-y-2">
                                        {category.faqs.map((faq, faqIndex) => (
                                            <AccordionItem
                                                key={faqIndex}
                                                value={`${categoryIndex}-${faqIndex}`}
                                                className="border border-[#185EAA]/20 rounded-lg px-6"
                                            >
                                                <AccordionTrigger className="text-left py-4 hover:no-underline text-[#113C6A]">
                                                    <span className="font-medium">{faq.question}</span>
                                                </AccordionTrigger>
                                                <AccordionContent className="pb-4 text-[#21221C]/70">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            ))}

                            {filteredFAQs.length === 0 && (
                                <div className="text-center py-12 bg-[#F8FFFF] rounded-xl border border-[#185EAA]/20">
                                    <p className="text-[#21221C]/70 mb-4">No questions match your search criteria.</p>
                                    <Button
                                        className="bg-[#113C6A] hover:bg-[#185EAA] text-white"
                                        onClick={() => setSearchQuery("")}
                                    >
                                        Clear Search
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-80 relative">
                        <div className="sticky top-24 space-y-6">
                            {/* Popular Questions */}
                            <div className="rounded-xl p-6 bg-white border border-[#185EAA]/20">
                                <h3 className="font-semibold mb-4 text-[#113C6A]">Popular Questions</h3>
                                <div className="space-y-2">
                                    {popularQuestions.map((question, index) => (
                                        <div key={index} className="py-2 border-b border-[#185EAA]/10 last:border-b-0">
                                            <button
                                                className="text-sm text-left text-[#21221C] hover:text-[#FF7729] transition-colors w-full text-left"
                                                onClick={() => setSearchQuery(question)}
                                            >
                                                {question}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Support */}
                            <div className="rounded-xl p-6 bg-[#113C6A] text-[#F8FFFF]">
                                <div className="text-center">
                                    <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-80" />
                                    <h3 className="font-semibold mb-2">Still Need Help?</h3>
                                    <p className="text-sm opacity-90 mb-4">
                                        Can't find what you're looking for? Our support team is here to help.
                                    </p>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-colors"
                                    >
                                        Contact Support
                                    </Link>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="rounded-xl p-6 bg-white border border-[#185EAA]/20">
                                <h3 className="font-semibold mb-4 text-[#113C6A]">Quick Links</h3>
                                <div className="space-y-2">
                                    <Link
                                        to="/track-shipment"
                                        className="flex items-center w-full px-3 py-2 text-[#113C6A] hover:bg-[#F8FFFF] rounded-md transition-colors text-sm"
                                    >
                                        Track Shipment
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="flex items-center w-full px-3 py-2 text-[#113C6A] hover:bg-[#F8FFFF] rounded-md transition-colors text-sm"
                                    >
                                        Get Quote
                                    </Link>
                                    <Link
                                        to="/resources/claims"
                                        className="flex items-center w-full px-3 py-2 text-[#113C6A] hover:bg-[#F8FFFF] rounded-md transition-colors text-sm"
                                    >
                                        File a Claim
                                    </Link>
                                    <Link
                                        to="/services"
                                        className="flex items-center w-full px-3 py-2 text-[#113C6A] hover:bg-[#F8FFFF] rounded-md transition-colors text-sm"
                                    >
                                        Service Areas
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="mt-16">
                    <div className="rounded-xl p-8 md:p-12 text-center bg-[#F8FFFF] border border-[#185EAA]/20">
                        <h2 className="text-2xl font-bold mb-4 text-[#113C6A]">Didn't Find Your Answer?</h2>
                        <p className="text-[#21221C]/70 mb-6">
                            Our customer support team is available 24/7 to assist you with any questions or concerns.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-3 bg-[#113C6A] text-white rounded hover:bg-[#185EAA] transition-all group"
                            >
                                Contact Support
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-3 bg-transparent border border-[#113C6A] text-[#113C6A] rounded hover:bg-[#113C6A] hover:text-white transition-all group"
                            >
                                Live Chat
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default FAQs;