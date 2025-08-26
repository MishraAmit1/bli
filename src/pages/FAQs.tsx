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
import { Helmet } from 'react-helmet-async';

const FAQs = () => {
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
            description: "Basic information about BLI Rapid services and operations",
            faqs: [
                {
                    question: "What services does BLI Rapid offer?",
                    answer: "BLI Rapid provides comprehensive logistics solutions including full truckload (FTL), part load (PTL), and 3PL services. We specialize in last-mile delivery, warehouse management, inventory optimization, and supply chain consulting across India.",
                    keywords: "logistics services, FTL, PTL, 3PL, last-mile delivery, warehouse management"
                },
                {
                    question: "Which industries do you serve?",
                    answer: "We serve diverse industries including FMCG, e-commerce, manufacturing, automotive, healthcare, pharmaceuticals, textiles, and food & beverage. Our solutions are customized to meet specific industry requirements.",
                    keywords: "industries served, FMCG logistics, e-commerce logistics, manufacturing logistics"
                },
                {
                    question: "What geographic areas do you cover?",
                    answer: "BLI Rapid operates pan-India with a network covering all major cities and tier-2/tier-3 towns. We have strategically located hubs in Delhi NCR, Mumbai, Bangalore, Chennai, Kolkata, Pune, and Ahmedabad.",
                    keywords: "service areas, pan-India logistics, delivery network, logistics hubs"
                },
                {
                    question: "How do I get started with BLI Rapid?",
                    answer: "Simply contact our sales team through the 'Get Quote' button, call our customer service, or fill out our online inquiry form. We'll assess your requirements and provide a customized logistics solution.",
                    keywords: "getting started, logistics quote, customer onboarding"
                }
            ]
        },
        {
            title: "Shipments & Operations",
            icon: "🚛",
            count: 12,
            description: "Information about shipment booking, tracking, and operational procedures",
            faqs: [
                {
                    question: "How do I request a shipment?",
                    answer: "You can request shipments through our online portal, mobile app, customer service hotline (available 24/7), or by contacting your dedicated account manager. Provide pickup/delivery details, cargo specifications, and preferred delivery timeline.",
                    keywords: "shipment booking, online portal, mobile app, 24/7 service"
                },
                {
                    question: "What tracking options are available?",
                    answer: "We offer comprehensive tracking through GPS-enabled vehicles, real-time updates via SMS/email, online tracking portal, mobile app notifications, and dedicated customer service support for status updates.",
                    keywords: "shipment tracking, GPS tracking, real-time updates, tracking portal"
                },
                {
                    question: "What are your delivery timeframes?",
                    answer: "Delivery times vary by service type: Express (same-day/next-day within cities), Standard (2-3 days for metro-to-metro), Economy (3-5 days for long distances). Interstate deliveries typically take 2-7 days depending on origin-destination.",
                    keywords: "delivery timeframes, express delivery, standard delivery, interstate shipping"
                },
                {
                    question: "Do you handle special cargo requirements?",
                    answer: "Yes, we manage specialized cargo including fragile items, hazardous materials, temperature-controlled goods, oversized cargo, and high-value shipments with appropriate handling protocols and insurance coverage.",
                    keywords: "special cargo, fragile items, hazardous materials, temperature-controlled logistics"
                },
                {
                    question: "What documentation is required for shipments?",
                    answer: "Standard requirements include commercial invoice, packing list, transport challan, and relevant permits. For interstate movement, we handle e-way bills. Specialized cargo may require additional certifications.",
                    keywords: "shipping documentation, commercial invoice, e-way bills, transport permits"
                },
                {
                    question: "Can I modify or cancel a shipment after booking?",
                    answer: "Modifications are possible before pickup, subject to availability and route planning. Cancellations are accepted with minimal charges if done before pickup. Post-pickup changes incur additional costs.",
                    keywords: "shipment modification, shipment cancellation, booking changes"
                }
            ]
        },
        {
            title: "Billing & Invoicing",
            icon: "💰",
            count: 6,
            description: "Pricing, payment methods, and billing information",
            faqs: [
                {
                    question: "How is pricing calculated?",
                    answer: "Pricing considers multiple factors: distance, weight, dimensions (volumetric weight), service type (express/standard), fuel surcharge, toll charges, loading/unloading requirements, and any special handling needs.",
                    keywords: "logistics pricing, freight calculation, volumetric weight, fuel surcharge"
                },
                {
                    question: "What payment methods do you accept?",
                    answer: "We accept bank transfers (NEFT/RTGS), cheques, digital payments (UPI, net banking), credit terms for verified corporate clients, and cash on delivery for select services.",
                    keywords: "payment methods, bank transfer, digital payments, credit terms"
                },
                {
                    question: "When will I receive my invoice?",
                    answer: "Invoices are generated immediately after delivery confirmation and sent via email within 24 hours. Corporate clients receive consolidated monthly invoices. All invoices include detailed service breakdowns.",
                    keywords: "invoicing, delivery confirmation, monthly invoices, billing"
                },
                {
                    question: "Do you offer credit terms?",
                    answer: "Yes, we provide flexible credit terms (15-45 days) for established corporate clients after credit verification. Terms depend on business volume, payment history, and company credentials.",
                    keywords: "credit terms, corporate clients, payment terms, credit verification"
                },
                {
                    question: "How can I get a detailed cost breakdown?",
                    answer: "Detailed quotations include base freight, fuel surcharge, toll charges, handling charges, insurance, taxes, and any additional services. Request detailed estimates through our sales team.",
                    keywords: "cost breakdown, detailed quotation, freight charges, logistics pricing"
                }
            ]
        },
        {
            title: "Support & Claims",
            icon: "🛡️",
            count: 7,
            description: "Customer support, insurance claims, and issue resolution",
            faqs: [
                {
                    question: "How do I file a claim for damaged goods?",
                    answer: "Report damage immediately upon delivery, document with photographs, fill out our claim form within 24 hours, and submit supporting documents. Our claims team will investigate and process compensation as per policy.",
                    keywords: "damage claims, insurance claims, claim process, compensation"
                },
                {
                    question: "What is your insurance coverage?",
                    answer: "We provide comprehensive transit insurance covering loss, damage, and theft. Coverage includes full cargo value replacement, subject to policy terms. Premium insurance options available for high-value goods.",
                    keywords: "transit insurance, cargo insurance, insurance coverage, high-value goods"
                },
                {
                    question: "How quickly are claims processed?",
                    answer: "Standard claims are processed within 15-30 days after documentation submission. Complex cases may take longer. We provide regular updates throughout the claims process.",
                    keywords: "claims processing, claim timeline, insurance settlement"
                },
                {
                    question: "What if my shipment is delayed?",
                    answer: "Delays are proactively communicated with reasons and revised ETAs. We offer compensation for delays caused by our operations as per service level agreements. Real-time updates keep you informed.",
                    keywords: "shipment delays, delay compensation, service level agreements, ETA updates"
                },
                {
                    question: "How can I provide feedback?",
                    answer: "Share feedback through our website, mobile app, customer service helpline, or email. We value your input for continuous service improvement and respond to all feedback within 48 hours.",
                    keywords: "customer feedback, service improvement, customer satisfaction"
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
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    // Generate all FAQs for structured data
    const allFAQs = faqCategories.flatMap(category => category.faqs);

    // Structured Data for FAQ Page
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "name": "BLI Rapid Logistics - Frequently Asked Questions",
        "description": "Find answers to common questions about BLI Rapid logistics services, shipping, tracking, billing, and customer support.",
        "mainEntity": allFAQs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
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
                "name": "FAQs",
                "item": "https://blirapid.com/resources/faqs"
            }
        ]
    };

    // Organization Schema
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "BLI - Bansal Logistics of India",
        "url": "https://blirapid.com",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"],
            "areaServed": "IN"
        }
    };

    return (
        <PageLayout>
            <Helmet>
                <title>Logistics FAQs - Shipping, Tracking & Support Questions | BLI Rapid</title>
                <meta name="description" content="Get answers to frequently asked questions about BLI Rapid logistics services including shipping procedures, tracking options, billing, claims, and customer support. 24/7 assistance available." />
                <meta name="keywords" content="logistics FAQs, shipping questions, freight tracking, logistics support, delivery questions, billing inquiries, claims process, logistics help, transportation FAQ" />

                {/* Open Graph */}
                <meta property="og:title" content="Logistics FAQs - Quick Answers to Your Questions | BLI Rapid" />
                <meta property="og:description" content="Find instant answers to common logistics questions about shipping, tracking, billing, and support. Expert help available 24/7." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://blirapid.com/resources/faqs" />
                <meta property="og:image" content="https://blirapid.com/logistics-faq-support.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Logistics FAQs & Support | BLI Rapid" />
                <meta name="twitter:description" content="Quick answers to logistics questions about shipping, tracking, billing, and customer support." />

                {/* Canonical URL */}
                <link rel="canonical" href="https://blirapid.com/resources/faqs" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(organizationSchema)}
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
                            <span className="text-[#F8FFFF]" aria-current="page">FAQs</span>
                        </nav>

                        <motion.h1
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#F8FFFF] leading-tight"
                        >
                            Frequently Asked Questions
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-base sm:text-lg md:text-xl text-[#F8FFFF]/90 max-w-3xl leading-relaxed px-2 sm:px-0"
                        >
                            Find quick answers to common questions about our logistics services and operations.
                        </motion.p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
                {/* Search Bar */}
                <section className="mb-8 sm:mb-12" aria-labelledby="search-heading">
                    <h2 id="search-heading" className="sr-only">Search FAQs</h2>
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-[#21221C]/60" aria-hidden="true" />
                        <Input
                            placeholder="Search for answers..."
                            className="pl-10 sm:pl-12 py-4 sm:py-6 text-sm sm:text-lg border-[#185EAA]/20 focus:border-[#185EAA]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            aria-label="Search frequently asked questions"
                        />
                    </div>
                </section>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Main FAQ Content */}
                    <main className="flex-1">
                        {/* Category Overview */}
                        <section className="mb-8 sm:mb-12" aria-labelledby="categories-heading">
                            <h2 id="categories-heading" className="sr-only">FAQ Categories</h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={containerVariants}
                                className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
                                role="list"
                            >
                                {faqCategories.map((category, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className={cn(
                                            "rounded-xl p-3 sm:p-4 border transition-all duration-300 cursor-pointer",
                                            activeCategory === category.title
                                                ? "bg-[#113C6A] border-[#FF7729] shadow-lg text-white"
                                                : "bg-white border-[#185EAA]/20 hover:border-[#185EAA]/50 hover:shadow-lg"
                                        )}
                                        onClick={() => scrollToCategory(category.title)}
                                        role="listitem"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                scrollToCategory(category.title);
                                            }
                                        }}
                                        aria-label={`Jump to ${category.title} section with ${category.count} questions`}
                                    >
                                        <div className="text-center">
                                            <div className="text-2xl sm:text-3xl mb-2" aria-hidden="true">{category.icon}</div>
                                            <h3 className="font-semibold mb-1 text-xs sm:text-sm md:text-base">{category.title}</h3>
                                            <p className={cn(
                                                "text-xs sm:text-sm",
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
                        </section>

                        {/* FAQ Sections */}
                        <div className="space-y-8 sm:space-y-12">
                            {filteredFAQs.map((category, categoryIndex) => (
                                <section
                                    key={categoryIndex}
                                    id={category.title.toLowerCase().replace(/\s+/g, '-')}
                                    aria-labelledby={`${category.title.toLowerCase().replace(/\s+/g, '-')}-heading`}
                                >
                                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                                        <div className="text-xl sm:text-2xl" aria-hidden="true">{category.icon}</div>
                                        <h2
                                            id={`${category.title.toLowerCase().replace(/\s+/g, '-')}-heading`}
                                            className="text-xl sm:text-2xl font-bold text-[#113C6A]"
                                        >
                                            {category.title}
                                        </h2>
                                        <Badge className="bg-[#113C6A]/10 text-[#113C6A] border-0 text-xs">
                                            {category.count} questions
                                        </Badge>
                                    </div>

                                    <Accordion type="single" collapsible className="space-y-2">
                                        {category.faqs.map((faq, faqIndex) => (
                                            <AccordionItem
                                                key={faqIndex}
                                                value={`${categoryIndex}-${faqIndex}`}
                                                className="border border-[#185EAA]/20 rounded-lg px-4 sm:px-6"
                                            >
                                                <AccordionTrigger className="text-left py-3 sm:py-4 hover:no-underline text-[#113C6A] text-sm sm:text-base">
                                                    <span className="font-medium pr-2">{faq.question}</span>
                                                </AccordionTrigger>
                                                <AccordionContent className="pb-3 sm:pb-4 text-[#21221C]/70 text-sm sm:text-base leading-relaxed">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </section>
                            ))}

                            {filteredFAQs.length === 0 && (
                                <div className="text-center py-8 sm:py-12 bg-[#F8FFFF] rounded-xl border border-[#185EAA]/20">
                                    <p className="text-[#21221C]/70 mb-4 text-sm sm:text-base">No questions match your search criteria.</p>
                                    <Button
                                        className="bg-[#113C6A] hover:bg-[#185EAA] text-white text-sm sm:text-base px-4 sm:px-6"
                                        onClick={() => setSearchQuery("")}
                                        aria-label="Clear search and show all FAQs"
                                    >
                                        Clear Search
                                    </Button>
                                </div>
                            )}
                        </div>
                    </main>

                    {/* Sidebar */}
                    <aside className="lg:w-80 order-last" aria-label="FAQ sidebar">
                        <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-6">
                            {/* Popular Questions */}
                            <section className="rounded-xl p-4 sm:p-6 bg-white border border-[#185EAA]/20" aria-labelledby="popular-questions-heading">
                                <h3 id="popular-questions-heading" className="font-semibold mb-3 sm:mb-4 text-[#113C6A] text-base sm:text-lg">Popular Questions</h3>
                                <nav aria-label="Popular questions">
                                    <ul className="space-y-2">
                                        {popularQuestions.map((question, index) => (
                                            <li key={index} className="py-2 border-b border-[#185EAA]/10 last:border-b-0">
                                                <button
                                                    className="text-xs sm:text-sm text-left text-[#21221C] hover:text-[#FF7729] transition-colors w-full"
                                                    onClick={() => setSearchQuery(question)}
                                                    aria-label={`Search for: ${question}`}
                                                >
                                                    {question}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </section>

                            {/* Contact Support */}
                            <section className="rounded-xl p-4 sm:p-6 bg-[#113C6A] text-[#F8FFFF]" aria-labelledby="support-heading">
                                <div className="text-center">
                                    <MessageCircle className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 opacity-80" aria-hidden="true" />
                                    <h3 id="support-heading" className="font-semibold mb-2 text-base sm:text-lg">Still Need Help?</h3>
                                    <p className="text-xs sm:text-sm opacity-90 mb-3 sm:mb-4">
                                        Can't find what you're looking for? Our support team is here to help.
                                    </p>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-colors text-sm sm:text-base"
                                        aria-label="Contact customer support team"
                                    >
                                        Contact Support
                                    </Link>
                                </div>
                            </section>

                            {/* Quick Links */}
                            <section className="rounded-xl p-4 sm:p-6 bg-white border border-[#185EAA]/20" aria-labelledby="quick-links-heading">
                                <h3 id="quick-links-heading" className="font-semibold mb-3 sm:mb-4 text-[#113C6A] text-base sm:text-lg">Quick Links</h3>
                                <nav aria-label="Quick access links">
                                    <ul className="space-y-2">
                                        <li>
                                            <Link
                                                to="/track-shipment"
                                                className="flex items-center w-full px-3 py-2 text-[#113C6A] hover:bg-[#F8FFFF] rounded-md transition-colors text-xs sm:text-sm"
                                            >
                                                Track Shipment
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/contact"
                                                className="flex items-center w-full px-3 py-2 text-[#113C6A] hover:bg-[#F8FFFF] rounded-md transition-colors text-xs sm:text-sm"
                                            >
                                                Get Quote
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/resources/claims"
                                                className="flex items-center w-full px-3 py-2 text-[#113C6A] hover:bg-[#F8FFFF] rounded-md transition-colors text-xs sm:text-sm"
                                            >
                                                File a Claim
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/services"
                                                className="flex items-center w-full px-3 py-2 text-[#113C6A] hover:bg-[#F8FFFF] rounded-md transition-colors text-xs sm:text-sm"
                                            >
                                                Service Areas
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </section>
                        </div>
                    </aside>
                </div>

                {/* Contact CTA */}
                <section className="mt-12 sm:mt-16" aria-labelledby="contact-cta-heading">
                    <div className="rounded-xl p-6 sm:p-8 md:p-12 text-center bg-[#F8FFFF] border border-[#185EAA]/20">
                        <h2 id="contact-cta-heading" className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#113C6A]">Didn't Find Your Answer?</h2>
                        <p className="text-sm sm:text-base text-[#21221C]/70 mb-4 sm:mb-6 px-2 sm:px-0">
                            Our customer support team is available 24/7 to assist you with any questions or concerns.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#113C6A] text-white rounded hover:bg-[#185EAA] transition-all group text-sm sm:text-base"
                                aria-label="Contact customer support team"
                            >
                                <span>Contact Support</span>
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border border-[#113C6A] text-[#113C6A] rounded hover:bg-[#113C6A] hover:text-white transition-all group text-sm sm:text-base"
                                aria-label="Start live chat with support"
                            >
                                <span>Live Chat</span>
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default FAQs;