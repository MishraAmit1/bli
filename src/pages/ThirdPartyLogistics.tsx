import { ArrowLeft, ArrowRight, Warehouse, TrendingUp, Settings, BarChart3, Package, Truck, Users, Shield, CheckCircle, Globe, Zap, Database, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const ThirdPartyLogistics = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3, duration: 0.8 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    };

    const services = [
        {
            icon: Warehouse,
            title: "Warehousing & Storage",
            description: "Strategic storage locations with advanced inventory management systems"
        },
        {
            icon: Truck,
            title: "Transportation Management",
            description: "End-to-end transportation planning and execution across all modes"
        },
        {
            icon: Package,
            title: "Order Fulfillment",
            description: "Pick, pack, and ship services with same-day processing capabilities"
        },
        {
            icon: BarChart3,
            title: "Supply Chain Analytics",
            description: "Data-driven insights to optimize your supply chain performance"
        },
        {
            icon: Settings,
            title: "Value-Added Services",
            description: "Kitting, labeling, quality checks, and custom packaging solutions"
        },
        {
            icon: Globe,
            title: "Returns Management",
            description: "Seamless reverse logistics with inspection and restocking services"
        }
    ];

    const benefits = [
        {
            title: "Reduce Costs by 25%",
            description: "Leverage our economies of scale and optimized operations",
            icon: TrendingUp
        },
        {
            title: "Scale On-Demand",
            description: "Flexible capacity to handle seasonal peaks and business growth",
            icon: Zap
        },
        {
            title: "Focus on Core Business",
            description: "Let us handle logistics while you concentrate on growth",
            icon: Target
        },
        {
            title: "Technology Integration",
            description: "Seamless API integration with your existing systems",
            icon: Database
        }
    ];

    const industries = [
        "E-commerce & Retail",
        "FMCG & Consumer Goods",
        "Electronics & Technology",
        "Fashion & Apparel",
        "Healthcare & Pharma",
        "Automotive Parts"
    ];

    const stats = [
        { value: "15M+", label: "Sq. ft. Warehouse Space" },
        { value: "500+", label: "Enterprise Clients" },
        { value: "99.9%", label: "Inventory Accuracy" },
        { value: "24hr", label: "Order Processing" }
    ];

    // Structured Data for 3PL Service
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Third Party Logistics (3PL) Solutions",
        "description": "Complete supply chain management from warehousing to last-mile delivery. Strategic 3PL partner for seamless operations with 15M+ sq ft warehouse space.",
        "provider": {
            "@type": "Organization",
            "name": "BLI - Bansal Logistics of India",
            "url": "https://blirapid.com"
        },
        "areaServed": {
            "@type": "Country",
            "name": "India"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "3PL Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Warehousing & Storage",
                        "description": "15M+ sq ft warehouse space with advanced inventory management"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Order Fulfillment",
                        "description": "24-hour order processing with 99.9% inventory accuracy"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Transportation Management",
                        "description": "End-to-end transportation planning across all modes"
                    }
                }
            ]
        }
    };

    // FAQ Schema for 3PL
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is Third Party Logistics (3PL)?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "3PL is outsourcing logistics operations including warehousing, transportation, order fulfillment, and supply chain management to a specialized provider like BLI."
                }
            },
            {
                "@type": "Question",
                "name": "How much can I save with 3PL services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Businesses typically reduce logistics costs by 25% through economies of scale, optimized operations, and reduced infrastructure investment."
                }
            },
            {
                "@type": "Question",
                "name": "What industries does BLI 3PL serve?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BLI serves E-commerce & Retail, FMCG, Electronics, Fashion, Healthcare & Pharma, and Automotive industries with specialized 3PL solutions."
                }
            }
        ]
    };

    return (
        <PageLayout>
            <Helmet>
                <title>3PL Services India | Third Party Logistics | Warehousing & Distribution | BLI</title>
                <meta name="description" content="Complete 3PL solutions in India. 15M+ sq ft warehouse space, 99.9% inventory accuracy, 24hr order processing. Reduce costs by 25% with BLI's strategic 3PL services." />
                <meta name="keywords" content="3PL services india, third party logistics, warehousing services, order fulfillment, supply chain management, distribution services, logistics outsourcing, warehouse management, 3PL provider" />

                {/* Open Graph */}
                <meta property="og:title" content="3PL Solutions - Complete Supply Chain Management | BLI" />
                <meta property="og:description" content="Strategic 3PL partner with 15M+ sq ft warehouse space, serving 500+ enterprise clients. Reduce costs by 25% with our integrated solutions." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://blirapid.com/services/3pl" />
                <meta property="og:image" content="https://blirapid.com/3pl-services.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="3PL Services - 500+ Enterprise Clients | BLI" />
                <meta name="twitter:description" content="End-to-end supply chain management. Warehousing, fulfillment, transportation & analytics." />

                {/* Canonical URL */}
                <link rel="canonical" href="https://blirapid.com/services/3pl" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="relative pt-8 sm:pt-10 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
                {/* Background image with overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: 'url("/lovable-uploads/3pl-hero.jpg")' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#113C6A]/80 to-[#113C6A]/90 z-0" />

                <div className="container mx-auto relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <motion.h1
                                variants={itemVariants}
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#F8FFFF] leading-tight"
                            >
                                3PL Solutions
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-base sm:text-lg md:text-xl text-[#F8FFFF]/90 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
                            >
                                Complete supply chain management from warehousing to last-mile delivery.
                                Let us be your strategic logistics partner for seamless operations.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                                    aria-label="Get custom 3PL solution"
                                >
                                    <span>Get Custom Solution</span>
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                </Link>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('3pl-services');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all text-sm sm:text-base"
                                    aria-label="Explore 3PL services"
                                >
                                    <span>Explore Our Services</span>
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]" aria-labelledby="stats-heading">
                <div className="container mx-auto max-w-6xl">
                    <h2 id="stats-heading" className="sr-only">BLI 3PL Statistics</h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="text-center"
                            >
                                <p className="text-3xl md:text-4xl font-bold text-[#FF7729]">{stat.value}</p>
                                <p className="text-[#21221C]/70 mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="3pl-services" className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="services-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="services-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Comprehensive 3PL Services
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <motion.article key={index} variants={itemVariants}>
                                    <Card className="h-full bg-white border border-[#185EAA]/20 hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all hover:-translate-y-1">
                                        <CardContent className="p-6">
                                            <div className="w-14 h-14 bg-[#F8FFFF] rounded-lg flex items-center justify-center mb-4">
                                                <service.icon className="w-7 h-7 text-[#185EAA]" aria-hidden="true" />
                                            </div>
                                            <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{service.title}</h3>
                                            <p className="text-[#21221C]/70 text-sm">{service.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]" aria-labelledby="benefits-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="benefits-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Why Outsource to BLI 3PL?
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {benefits.map((benefit, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-start bg-white p-6 rounded-xl border border-[#185EAA]/20"
                                >
                                    <div className="w-12 h-12 bg-[#F8FFFF] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <benefit.icon className="w-6 h-6 text-[#FF7729]" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2 text-[#113C6A]">{benefit.title}</h3>
                                        <p className="text-[#21221C]/80">{benefit.description}</p>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="process-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="process-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Our 3PL Process
                        </motion.h2>

                        <div className="relative">
                            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#185EAA]/20 -translate-y-1/2 hidden lg:block" aria-hidden="true" />

                            <ol className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Consultation",
                                        description: "Understanding your unique supply chain requirements and challenges"
                                    },
                                    {
                                        step: "2",
                                        title: "Solution Design",
                                        description: "Creating customized 3PL strategy aligned with your business goals"
                                    },
                                    {
                                        step: "3",
                                        title: "Implementation",
                                        description: "Seamless integration with dedicated team and technology setup"
                                    },
                                    {
                                        step: "4",
                                        title: "Optimization",
                                        description: "Continuous improvement through data analytics and feedback"
                                    }
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        variants={itemVariants}
                                        className="relative bg-white p-6 rounded-xl border border-[#185EAA]/20 text-center"
                                    >
                                        <div className="w-12 h-12 bg-[#185EAA] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                                            <span aria-label={`Step ${item.step}`}>{item.step}</span>
                                        </div>
                                        <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{item.title}</h3>
                                        <p className="text-[#21221C]/70 text-sm">{item.description}</p>
                                    </motion.li>
                                ))}
                            </ol>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Industries & Technology */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]" aria-labelledby="industries-tech">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                    >
                        {/* Industries */}
                        <motion.div variants={itemVariants}>
                            <h3 id="industries-tech" className="text-2xl font-bold mb-6 text-[#113C6A]">Industries We Serve</h3>
                            <div className="bg-white rounded-xl p-6 border border-[#185EAA]/20">
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                                    {industries.map((industry, index) => (
                                        <li key={index} className="flex items-center">
                                            <CheckCircle className="w-5 h-5 text-[#FF7729] mr-3 flex-shrink-0" aria-hidden="true" />
                                            <span className="text-[#21221C]/80">{industry}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Technology Stack */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold mb-6 text-[#113C6A]">Technology Stack</h3>
                            <div className="bg-white rounded-xl p-6 border border-[#185EAA]/20">
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <Shield className="w-5 h-5 text-[#185EAA] mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                                        <div>
                                            <h4 className="font-semibold text-[#113C6A]">WMS Integration</h4>
                                            <p className="text-[#21221C]/70 text-sm">Advanced warehouse management system</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Shield className="w-5 h-5 text-[#185EAA] mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                                        <div>
                                            <h4 className="font-semibold text-[#113C6A]">Real-time Tracking</h4>
                                            <p className="text-[#21221C]/70 text-sm">GPS-enabled fleet with live updates</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Shield className="w-5 h-5 text-[#185EAA] mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                                        <div>
                                            <h4 className="font-semibold text-[#113C6A]">API Integration</h4>
                                            <p className="text-[#21221C]/70 text-sm">Seamless connection with your systems</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Shield className="w-5 h-5 text-[#185EAA] mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                                        <div>
                                            <h4 className="font-semibold text-[#113C6A]">Analytics Dashboard</h4>
                                            <p className="text-[#21221C]/70 text-sm">Comprehensive reporting and insights</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Case Study Preview */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="case-study">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="case-study"
                            variants={itemVariants}
                            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-[#113C6A]"
                        >
                            Success Stories
                        </motion.h2>

                        <motion.article
                            variants={itemVariants}
                            className="bg-gradient-to-r from-[#113C6A] to-[#185EAA] rounded-xl p-4 sm:p-6 md:p-8 text-white"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                                <div className="order-2 lg:order-1">
                                    <div className="inline-block px-3 py-1 bg-[#FF7729] rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                                        Case Study
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                                        Leading E-commerce Platform
                                    </h3>
                                    <p className="text-sm sm:text-base text-[#F8FFFF]/90 mb-4 sm:mb-6 leading-relaxed">
                                        How we helped a major e-commerce player reduce logistics costs by 30% while
                                        improving delivery speed by 2 days through our integrated 3PL solution.
                                    </p>
                                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                                        <div className="text-center sm:text-left">
                                            <p className="text-2xl sm:text-3xl font-bold text-[#FF7729]">30%</p>
                                            <p className="text-xs sm:text-sm text-[#F8FFFF]/80">Cost Reduction</p>
                                        </div>
                                        <div className="text-center sm:text-left">
                                            <p className="text-2xl sm:text-3xl font-bold text-[#FF7729]">2 Days</p>
                                            <p className="text-xs sm:text-sm text-[#F8FFFF]/80">Faster Delivery</p>
                                        </div>
                                        <div className="text-center sm:text-left">
                                            <p className="text-2xl sm:text-3xl font-bold text-[#FF7729]">99.5%</p>
                                            <p className="text-xs sm:text-sm text-[#F8FFFF]/80">Order Accuracy</p>
                                        </div>
                                    </div>
                                    <Link
                                        to="/case-studies/ecommerce"
                                        className="inline-flex items-center text-sm sm:text-base text-[#F8FFFF] hover:text-[#FF7729] transition-colors"
                                        aria-label="Read full e-commerce case study"
                                    >
                                        <span>Read Full Case Study</span>
                                        <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                    </Link>
                                </div>
                                <div className="relative order-1 lg:order-2">
                                    <img
                                        src="/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png"
                                        alt="BLI 3PL warehouse operations and order fulfillment"
                                        className="rounded-lg shadow-xl w-full"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </motion.article>
                    </motion.div>
                </div>
            </section>

            {/* Hidden FAQ Section for SEO */}
            <section className="sr-only" aria-label="Frequently Asked Questions">
                <h2>Frequently Asked Questions about 3PL Services</h2>
                <dl>
                    <dt>What is Third Party Logistics (3PL)?</dt>
                    <dd>3PL is outsourcing logistics operations including warehousing, transportation, order fulfillment, and supply chain management to a specialized provider like BLI.</dd>

                    <dt>How much can I save with 3PL services?</dt>
                    <dd>Businesses typically reduce logistics costs by 25% through economies of scale, optimized operations, and reduced infrastructure investment.</dd>

                    <dt>What industries does BLI 3PL serve?</dt>
                    <dd>BLI serves E-commerce & Retail, FMCG, Electronics, Fashion, Healthcare & Pharma, and Automotive industries with specialized 3PL solutions.</dd>

                    <dt>What technology does BLI use for 3PL?</dt>
                    <dd>BLI uses advanced WMS integration, real-time tracking, API integration, and analytics dashboard for comprehensive 3PL management.</dd>
                </dl>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF7] to-[#113C6A] text-[#FFFDF7]" aria-labelledby="supplychain-cta">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 id="supplychain-cta" className="text-3xl font-bold mb-4 text-[#113C6A]">
                            Transform Your Supply Chain Today
                        </h2>
                        <p className="text-[#000]/90 mb-8 text-lg">
                            Partner with BLI for end-to-end 3PL solutions that drive efficiency and growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/contact"
                                aria-label="Schedule 3PL Consultation"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                            >
                                <span>Schedule Consultation</span>
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                            <a
                                href="tel:+919687448434"
                                aria-label="Call BLI 3PL logistics expert"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all text-sm sm:text-base"
                            >
                                <Users className="mr-2 w-4 h-4 flex-shrink-0" />
                                <span>Talk to 3PL Expert</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageLayout>
    );
};

export default ThirdPartyLogistics;