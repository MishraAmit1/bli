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
import { Helmet } from 'react-helmet-async';

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
            icon: <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />,
            title: "Blogs & Insights",
            description: "Latest trends and expert insights in logistics",
            href: "/resources/blogs",
            color: "bg-[#185EAA]/10 text-[#113C6A]"
        },
        {
            icon: <HelpCircle className="h-6 w-6 sm:h-8 sm:w-8" />,
            title: "FAQs",
            description: "Quick answers to common questions",
            href: "/resources/faqs",
            color: "bg-[#FF7729]/10 text-[#FF7729]"
        },
        {
            icon: <Download className="h-6 w-6 sm:h-8 sm:w-8" />,
            title: "Downloads",
            description: "Brochures, profiles, and resources",
            href: "/resources/downloads",
            color: "bg-[#113C6A]/10 text-[#113C6A]"
        },
        {
            icon: <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8" />,
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
            image: "/lovable-uploads/services1.webp",
            readTime: "5 min read",
            slug: "digital-transformation-supply-chain-analytics"
        },
        {
            title: "AI-Powered Warehouse Automation Trends",
            excerpt: "Exploring the latest developments in artificial intelligence for warehouse management.",
            image: "/lovable-uploads/services2.webp",
            readTime: "7 min read",
            slug: "ai-powered-warehouse-automation"
        },
        {
            title: "Sustainable Logistics: Green Transportation Solutions",
            excerpt: "Environmental initiatives driving the future of eco-friendly logistics operations.",
            image: "/lovable-uploads/services3.webp",
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

    // Structured Data for Resources
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Logistics Resources & Knowledge Center",
        "description": "Comprehensive logistics resources including blogs, FAQs, industry reports, and downloadable materials. Expert insights on supply chain, transportation, and logistics trends.",
        "provider": {
            "@type": "Organization",
            "name": "BLI - Bansal Logistics of India",
            "url": "https://blirapid.com"
        },
        "mainEntity": {
            "@type": "ItemList",
            "name": "Resource Categories",
            "itemListElement": quickAccessItems.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.title,
                "description": item.description,
                "url": `https://blirapid.com${item.href}`
            }))
        }
    };

    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": topFAQs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    // Blog Schema
    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "BLI Logistics Blog",
        "description": "Expert insights on logistics, supply chain, and transportation trends",
        "url": "https://blirapid.com/resources/blogs",
        "publisher": {
            "@type": "Organization",
            "name": "BLI - Bansal Logistics of India"
        },
        "blogPost": featuredBlogs.map(blog => ({
            "@type": "BlogPosting",
            "headline": blog.title,
            "description": blog.excerpt,
            "url": `https://blirapid.com/resources/blogs/${blog.slug}`,
            "image": `https://blirapid.com${blog.image}`,
            "datePublished": "2025-01-01",
            "author": {
                "@type": "Organization",
                "name": "BLI Logistics Team"
            }
        }))
    };

    return (
        <PageLayout>
            <Helmet>
                <title>Logistics Resources & Knowledge Center | Blogs, FAQs, Reports | BLI</title>
                <meta name="description" content="Comprehensive logistics resources: Expert blogs on supply chain analytics, AI automation, sustainability. FAQs, industry reports, downloadable brochures. Stay updated with latest logistics trends." />
                <meta name="keywords" content="logistics resources, supply chain blogs, logistics FAQs, industry reports, logistics knowledge center, transportation insights, warehouse automation, logistics downloads" />

                {/* Open Graph */}
                <meta property="og:title" content="Logistics Knowledge Center - Expert Resources & Insights | BLI" />
                <meta property="og:description" content="Access expert logistics insights, industry reports, FAQs, and downloadable resources. Stay ahead with latest supply chain trends and best practices." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://blirapid.com/resources" />
                <meta property="og:image" content="https://blirapid.com/resources-knowledge-center.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Logistics Resources - Expert Insights & Knowledge | BLI" />
                <meta name="twitter:description" content="Comprehensive logistics knowledge center with blogs, FAQs, reports, and downloads." />

                {/* Canonical URL */}
                <link rel="canonical" href="https://blirapid.com/resources" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(blogSchema)}
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
                            Resources to Power Your Supply Chain Decisions
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-base sm:text-lg md:text-xl text-[#F8FFFF]/90 max-w-3xl leading-relaxed px-2 sm:px-0"
                        >
                            From insights to FAQs — find everything you need to move smarter with BLI Rapid.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
                        >
                            <Link
                                to="/resources/blogs"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                                aria-label="Explore logistics blogs and insights"
                            >
                                <span>Explore Blogs</span>
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all text-sm sm:text-base"
                                aria-label="Get logistics quote"
                            >
                                <span>Get Quote</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Quick Access Grid */}
                <section className="py-12 sm:py-16" aria-labelledby="quick-access-heading">
                    <motion.h2
                        id="quick-access-heading"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-[#113C6A]"
                    >
                        Quick Access
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                        role="list"
                    >
                        {quickAccessItems.map((item, index) => (
                            <motion.div key={index} variants={itemVariants} role="listitem">
                                <Link to={item.href} className="group block" aria-label={`Access ${item.title}`}>
                                    <article className="h-full rounded-xl border border-[#185EAA]/20 bg-white p-4 sm:p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#185EAA]/50">
                                        <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${item.color} flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform`} aria-hidden="true">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#113C6A]">{item.title}</h3>
                                        <p className="text-sm sm:text-base text-[#21221C]/70">{item.description}</p>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Featured Blog Preview */}
                <section className="py-12 sm:py-16 bg-[#F8FFFF] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-xl" aria-labelledby="latest-insights-heading">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
                            <h2 id="latest-insights-heading" className="text-2xl sm:text-3xl font-bold text-[#113C6A] mb-4 sm:mb-0">
                                Latest Insights
                            </h2>
                            <Link
                                to="/resources/blogs"
                                className="inline-flex items-center text-[#185EAA] hover:text-[#113C6A] transition-colors group text-sm sm:text-base"
                                aria-label="View all logistics blogs"
                            >
                                View All Blogs
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                            role="list"
                        >
                            {featuredBlogs.map((blog, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
                                    role="listitem"
                                >
                                    <Link to={`/resources/blogs/${blog.slug}`} aria-label={`Read blog: ${blog.title}`}>
                                        <div className="aspect-video overflow-hidden">
                                            <img
                                                src={blog.image}
                                                alt={blog.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="p-4 sm:p-6">
                                            <span className="text-xs sm:text-sm text-[#185EAA] font-medium">{blog.readTime}</span>
                                            <h3 className="text-lg sm:text-xl font-semibold mt-2 mb-3 text-[#113C6A] group-hover:text-[#185EAA] transition-colors line-clamp-2">
                                                {blog.title}
                                            </h3>
                                            <p className="text-sm sm:text-base text-[#21221C]/70 line-clamp-3">{blog.excerpt}</p>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-12 sm:py-16" aria-labelledby="faq-heading">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8 sm:mb-12">
                            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-[#113C6A] mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-base sm:text-lg text-[#21221C]/70">
                                Quick answers to help you get started
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Accordion type="single" collapsible className="space-y-4">
                                {topFAQs.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="bg-white rounded-lg border border-[#185EAA]/20 px-4 sm:px-6"
                                    >
                                        <AccordionTrigger className="text-left text-base sm:text-lg font-medium text-[#113C6A] hover:text-[#185EAA] transition-colors py-4">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm sm:text-base text-[#21221C]/70 pb-4">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </motion.div>

                        <div className="text-center mt-6 sm:mt-8">
                            <Link
                                to="/resources/faqs"
                                className="inline-flex items-center text-[#185EAA] hover:text-[#113C6A] transition-colors group text-sm sm:text-base"
                                aria-label="View all frequently asked questions"
                            >
                                View All FAQs
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="py-12 sm:py-16 bg-gradient-to-r from-[#113C6A] to-[#185EAA] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-xl" aria-labelledby="newsletter-heading">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 id="newsletter-heading" className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Stay Updated with Industry Insights
                            </h2>
                            <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8">
                                Get the latest logistics trends and updates delivered to your inbox
                            </p>
                            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20"
                                    required
                                    aria-label="Email address for newsletter"
                                />
                                <Button
                                    type="submit"
                                    className="bg-[#FF7729] hover:bg-[#e56721] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded transition-colors"
                                    aria-label="Subscribe to newsletter"
                                >
                                    Subscribe
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </section>

                {/* Download Resources */}
                <section className="py-12 sm:py-16" aria-labelledby="download-heading">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 id="download-heading" className="text-2xl sm:text-3xl font-bold text-[#113C6A] mb-4">
                            Download Resources
                        </h2>
                        <p className="text-base sm:text-lg text-[#21221C]/70">
                            Access our comprehensive guides and company materials
                        </p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                        role="list"
                    >
                        {[
                            {
                                title: "Company Profile",
                                description: "Learn about BLI's history, values, and capabilities",
                                size: "2.5 MB PDF",
                                type: "company-profile"
                            },
                            {
                                title: "Service Brochure",
                                description: "Comprehensive overview of our logistics solutions",
                                size: "3.2 MB PDF",
                                type: "service-brochure"
                            },
                            {
                                title: "Industry Report 2025",
                                description: "Latest trends and insights in Indian logistics",
                                size: "4.8 MB PDF",
                                type: "industry-report"
                            }
                        ].map((resource, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white rounded-lg border border-[#185EAA]/20 p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group"
                                role="listitem"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#185EAA]/10 rounded-lg flex items-center justify-center group-hover:bg-[#185EAA]/20 transition-colors">
                                        <Download className="w-5 h-5 sm:w-6 sm:h-6 text-[#185EAA]" aria-hidden="true" />
                                    </div>
                                    <span className="text-xs sm:text-sm text-[#21221C]/60">{resource.size}</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#113C6A]">{resource.title}</h3>
                                <p className="text-sm sm:text-base text-[#21221C]/70 mb-4">{resource.description}</p>
                                <Button
                                    variant="outline"
                                    className="w-full border-[#185EAA] text-[#185EAA] hover:bg-[#185EAA] hover:text-white transition-colors"
                                    aria-label={`Download ${resource.title}`}
                                >
                                    <Download className="w-4 h-4 mr-2" aria-hidden="true" />
                                    Download
                                </Button>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="text-center mt-6 sm:mt-8">
                        <Link
                            to="/resources/downloads"
                            className="inline-flex items-center text-[#185EAA] hover:text-[#113C6A] transition-colors group text-sm sm:text-base"
                            aria-label="View all downloadable resources"
                        >
                            View All Downloads
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};
export default Resources;