import { ArrowLeft, ArrowRight, Package, PiggyBank, Network, Clock, Shield, CheckCircle, TrendingUp, Boxes } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const PartLoad = () => {
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

    const benefits = [
        {
            icon: PiggyBank,
            title: "Cost Savings",
            description: "Pay only for the space you use, reducing shipping costs by up to 60%"
        },
        {
            icon: Network,
            title: "Wide Network",
            description: "Access to 30+ consolidation hubs across India for efficient routing"
        },
        {
            icon: Package,
            title: "Flexible Loads",
            description: "Ship anything from 50kg to 5 tons without booking entire truck"
        },
        {
            icon: Shield,
            title: "Secure Handling",
            description: "Professional loading with cargo segregation and damage protection"
        }
    ];

    const features = [
        "Minimum shipment: 50 kg",
        "Maximum per consignment: 5 tons",
        "Daily departures to major cities",
        "Consolidation at strategic hubs",
        "Barcode scanning at each touchpoint",
        "Shared truck space optimization",
        "Door-to-door service available",
        "Competitive per-kg pricing"
    ];

    const idealFor = [
        {
            title: "Small & Medium Businesses",
            description: "Regular shipments without full truck requirements",
            icon: TrendingUp
        },
        {
            title: "E-commerce Sellers",
            description: "B2B shipments to multiple locations",
            icon: Boxes
        },
        {
            title: "Manufacturers",
            description: "Sample shipments and small batch orders",
            icon: Package
        },
        {
            title: "Distributors",
            description: "Regional distribution with varying volumes",
            icon: Network
        }
    ];

    const routes = [
        { from: "Delhi", to: "Mumbai", time: "2-3 days" },
        { from: "Bangalore", to: "Chennai", time: "1-2 days" },
        { from: "Kolkata", to: "Guwahati", time: "2-3 days" },
        { from: "Ahmedabad", to: "Pune", time: "1-2 days" }
    ];

    // Structured Data for Part Load Service
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Part Load (LTL) Services",
        "description": "Cost-effective part load shipping solution for smaller consignments. Share truck space and save up to 60% on shipping costs across India.",
        "provider": {
            "@type": "Organization",
            "name": "BLI - Bansal Logistics of India",
            "url": "https://www.blirapid.com"
        },
        "areaServed": {
            "@type": "Country",
            "name": "India"
        },
        "offers": {
            "@type": "Offer",
            "price": "12",
            "priceCurrency": "INR",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "12",
                "priceCurrency": "INR",
                "unitText": "per kg"
            }
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Part Load Features",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "50kg to 5 tons capacity",
                        "description": "Flexible shipment sizes for various business needs"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "30+ Consolidation Hubs",
                        "description": "Strategic locations for efficient routing"
                    }
                }
            ]
        }
    };

    // FAQ Schema for Part Load
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is Part Load (LTL) service?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Part Load or Less Than Truckload (LTL) service allows you to ship smaller consignments by sharing truck space with other shipments, reducing costs by up to 60%."
                }
            },
            {
                "@type": "Question",
                "name": "What is the minimum and maximum weight for part load?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Minimum shipment is 50 kg and maximum per consignment is 5 tons for part load services."
                }
            },
            {
                "@type": "Question",
                "name": "How much does part load shipping cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Part load shipping starts from ₹12/kg with competitive per-kg pricing based on route and volume."
                }
            }
        ]
    };

    return (
        <PageLayout>
            <Helmet>
                <title>Part Load (LTL) Services India | 50kg-5T Shipments | Starting ₹12/kg | BLI</title>
                <meta name="description" content="Cost-effective Part Load shipping across India. 50kg to 5 tons capacity, 30+ hubs, daily departures. Save up to 60% on shipping costs. Starting ₹12/kg." />
                <meta name="keywords" content="part load services india, LTL shipping, less than truckload, shared truck space, small shipment, cost effective shipping, consolidation hubs, PTL services, part load rates" />

                {/* Open Graph */}
                <meta property="og:title" content="Part Load Services - Save 60% on Small Shipments | BLI" />
                <meta property="og:description" content="Ship 50kg to 5 tons at ₹12/kg starting price. 30+ consolidation hubs, daily departures, 98% on-time delivery." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.blirapid.com/services/part-load" />
                <meta property="og:image" content="https://www.blirapid.com/part-load-service.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Part Load Shipping - 50K+ Monthly Shipments | BLI" />
                <meta name="twitter:description" content="Smart shipping for smaller loads. Share truck space, save costs, maintain reliability." />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.blirapid.com/services/part-load" />

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
                    style={{ backgroundImage: 'url("/lovable-uploads/ptl-hero.jpg")' }}
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
                                Part Load (LTL) Services
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-base sm:text-lg md:text-xl text-[#F8FFFF]/90 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
                            >
                                Smart shipping solution for smaller consignments. Share truck space with other
                                shipments and save costs while maintaining reliability and speed.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                                    aria-label="Get Part Load service quote"
                                >
                                    <span>Get LTL Quote</span>
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                </Link>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('ltl-benefits');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all text-sm sm:text-base"
                                    aria-label="Learn about Part Load services"
                                >
                                    <span>Part Load Services</span>
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="ltl-benefits" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]" aria-labelledby="benefits-heading">
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
                            Why Choose BLI Part Load Services?
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.article key={index} variants={itemVariants}>
                                    <Card className="h-full bg-white border border-[#185EAA]/20 hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all">
                                        <CardContent className="p-6">
                                            <div className="w-12 h-12 bg-[#F8FFFF] rounded-lg flex items-center justify-center mb-4">
                                                <benefit.icon className="w-6 h-6 text-[#185EAA]" aria-hidden="true" />
                                            </div>
                                            <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{benefit.title}</h3>
                                            <p className="text-[#21221C]/70 text-sm">{benefit.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="how-it-works">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="how-it-works"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            How Part Load Shipping Works
                        </motion.h2>

                        <ol className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <motion.li
                                variants={itemVariants}
                                className="bg-white p-6 rounded-xl border border-[#185EAA]/20"
                            >
                                <div className="text-4xl font-bold text-[#FF7729] mb-4">01</div>
                                <h3 className="font-bold text-xl mb-3 text-[#113C6A]">Consolidation</h3>
                                <p className="text-[#21221C]/80">
                                    Your shipment is collected and consolidated with other part loads heading
                                    in the same direction at our nearest hub.
                                </p>
                            </motion.li>

                            <motion.li
                                variants={itemVariants}
                                className="bg-white p-6 rounded-xl border border-[#185EAA]/20"
                            >
                                <div className="text-4xl font-bold text-[#FF7729] mb-4">02</div>
                                <h3 className="font-bold text-xl mb-3 text-[#113C6A]">Transportation</h3>
                                <p className="text-[#21221C]/80">
                                    Consolidated cargo travels via our optimized routes with real-time tracking
                                    and regular status updates.
                                </p>
                            </motion.li>

                            <motion.li
                                variants={itemVariants}
                                className="bg-white p-6 rounded-xl border border-[#185EAA]/20"
                            >
                                <div className="text-4xl font-bold text-[#FF7729] mb-4">03</div>
                                <h3 className="font-bold text-xl mb-3 text-[#113C6A]">Distribution</h3>
                                <p className="text-[#21221C]/80">
                                    At destination hub, shipments are segregated and delivered to final
                                    destinations via our last-mile network.
                                </p>
                            </motion.li>
                        </ol>
                    </motion.div>
                </div>
            </section>

            {/* Features & Ideal For Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]" aria-labelledby="features-section">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                    >
                        {/* Features */}
                        <motion.div variants={itemVariants}>
                            <h3 id="features-section" className="text-2xl font-bold mb-6 text-[#113C6A]">
                                Service Features
                            </h3>
                            <div className="bg-white rounded-xl p-6 border border-[#185EAA]/20">
                                <ul className="space-y-3" role="list">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-[#FF7729] mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                                            <span className="text-[#21221C]/80 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Ideal For */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold mb-6 text-[#113C6A]">
                                Ideal For
                            </h3>
                            <div className="space-y-4">
                                {idealFor.map((item, index) => (
                                    <article key={index} className="bg-white rounded-lg p-4 border border-[#185EAA]/20 hover:border-[#185EAA]/40 transition-all">
                                        <div className="flex items-start">
                                            <div className="w-10 h-10 bg-[#F8FFFF] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                                <item.icon className="w-5 h-5 text-[#185EAA]" aria-hidden="true" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#113C6A] mb-1">{item.title}</h4>
                                                <p className="text-[#21221C]/70 text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Popular Routes */}
            <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="routes-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="routes-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Popular Part Load Routes
                        </motion.h2>

                        <motion.div
                            variants={itemVariants}
                            className="bg-white rounded-xl p-8 border border-[#185EAA]/20"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {routes.map((route, index) => (
                                    <div key={index} className="text-center">
                                        <div className="flex items-center justify-center mb-3">
                                            <span className="text-[#113C6A] font-medium">{route.from}</span>
                                            <ArrowRight className="w-4 h-4 mx-2 text-[#FF7729]" aria-hidden="true" />
                                            <span className="text-[#113C6A] font-medium">{route.to}</span>
                                        </div>
                                        <div className="flex items-center justify-center text-sm text-[#21221C]/70">
                                            <Clock className="w-4 h-4 mr-1" aria-hidden="true" />
                                            <time>{route.time}</time>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-center mt-6 text-[#21221C]/70">
                                And 500+ more routes covering all major cities and towns
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Hidden FAQ Section for SEO */}
            <section className="sr-only" aria-label="Frequently Asked Questions">
                <h2>Frequently Asked Questions about Part Load Services</h2>
                <dl>
                    <dt>What is Part Load (LTL) service?</dt>
                    <dd>Part Load or Less Than Truckload (LTL) service allows you to ship smaller consignments by sharing truck space with other shipments, reducing costs by up to 60%.</dd>

                    <dt>What is the minimum and maximum weight for part load?</dt>
                    <dd>Minimum shipment is 50 kg and maximum per consignment is 5 tons for part load services.</dd>

                    <dt>How much does part load shipping cost?</dt>
                    <dd>Part load shipping starts from ₹12/kg with competitive per-kg pricing based on route and volume.</dd>

                    <dt>Which cities are covered under part load services?</dt>
                    <dd>BLI covers 500+ routes including major cities like Delhi, Mumbai, Bangalore, Chennai, Kolkata, Ahmedabad, Pune, and many more.</dd>
                </dl>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF7] to-[#113C6A] text-[#FFFDF7]" aria-labelledby="partload-cta">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 id="partload-cta" className="text-3xl font-bold mb-4 text-[#113C6A]">
                            Ship Smarter with Part Load
                        </h2>
                        <p className="text-[#000]/90 mb-8 text-lg">
                            Save up to 60% on shipping costs without compromising on service quality.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                                aria-label="Request Part Load Quote"
                            >
                                <span>Get Instant Quote</span>
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                            <a
                                href="tel:+919687448434"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all text-sm sm:text-base"
                                aria-label="Call BLI for Part Load services"
                            >
                                <Package className="mr-2 w-4 h-4 flex-shrink-0" />
                                <span>Call +91-968 744 8434</span>
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 pt-12 border-t border-[#F8FFFF]/20">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div>
                                    <p className="text-4xl font-bold text-[#FF7729]">50K+</p>
                                    <p className="text-[#000]/80 mt-1">Monthly Part Load Shipments</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-[#FF7729]">98%</p>
                                    <p className="text-[#000]/80 mt-1">On-Time Delivery Rate</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-[#FF7729]">₹12/kg</p>
                                    <p className="text-[#000]/80 mt-1">Starting Price</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageLayout>
    );
};

export default PartLoad;