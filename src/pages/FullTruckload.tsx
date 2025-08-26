import { ArrowRight, Truck, Shield, Clock, MapPin, Package, CheckCircle, BarChart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const FullTruckload = () => {
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
            icon: Truck,
            title: "Dedicated Vehicle",
            description: "Your cargo gets exclusive use of the entire truck, ensuring no mixing with other shipments"
        },
        {
            icon: Clock,
            title: "Faster Transit",
            description: "Direct point-to-point delivery without multiple stops, reducing transit time by up to 40%"
        },
        {
            icon: Shield,
            title: "Enhanced Security",
            description: "Sealed containers with GPS tracking and minimal handling for maximum cargo safety"
        },
        {
            icon: BarChart,
            title: "Cost Efficient",
            description: "Optimal pricing for large shipments with transparent, all-inclusive rates"
        }
    ];

    const features = [
        "Capacity ranging from 9MT to 25MT",
        "Pan-India coverage with 30+ hubs",
        "Real-time GPS tracking",
        "Dedicated customer support",
        "Insurance coverage up to cargo value",
        "24-48 hour pickup guarantee",
        "Digital POD and documentation",
        "Multi-modal transport options"
    ];

    const industries = [
        { name: "Manufacturing", description: "Raw materials and finished goods" },
        { name: "E-commerce", description: "Bulk inventory movements" },
        { name: "FMCG", description: "Large volume distribution" },
        { name: "Automotive", description: "Parts and components shipping" }
    ];

    // Structured Data for FTL Service
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Full Truck Load (FTL) Services",
        "description": "Dedicated truck solutions for large shipments across India with exclusive transportation, reliability, speed, and security.",
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
            "name": "FTL Service Features",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "9MT to 25MT Capacity",
                        "description": "Various truck sizes for different cargo volumes"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "GPS Tracking",
                        "description": "Real-time location monitoring of shipments"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Insurance Coverage",
                        "description": "Complete cargo value protection"
                    }
                }
            ]
        }
    };

    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is Full Truck Load (FTL) service?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "FTL service provides dedicated truck transportation where your cargo gets exclusive use of the entire vehicle, ensuring direct point-to-point delivery without mixing with other shipments."
                }
            },
            {
                "@type": "Question",
                "name": "What truck capacities are available for FTL?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BLI offers FTL trucks with capacity ranging from 9MT to 25MT, suitable for various cargo volumes across India."
                }
            },
            {
                "@type": "Question",
                "name": "How fast is FTL delivery?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "FTL offers faster transit with direct delivery, reducing transit time by up to 40% compared to part-load services. We guarantee 24-48 hour pickup."
                }
            }
        ]
    };

    return (
        <PageLayout>
            <Helmet>
                <title>Full Truck Load (FTL) Services India | 9MT-25MT Capacity | BLI</title>
                <meta name="description" content="Dedicated FTL truck services across India. 9MT to 25MT capacity, GPS tracking, 24-48hr pickup, insurance coverage. Get instant quotes for large shipments." />
                <meta name="keywords" content="FTL services india, full truck load, dedicated truck booking, 9MT truck, 25MT truck, bulk cargo transport, FTL logistics, pan india FTL, truck rental for business" />

                {/* Open Graph */}
                <meta property="og:title" content="Full Truck Load Services - Dedicated Trucks Across India | BLI" />
                <meta property="og:description" content="Book dedicated trucks from 9MT to 25MT capacity. Direct delivery, GPS tracking, insurance coverage. Serving Manufacturing, E-commerce, FMCG sectors." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://blirapid.com/services/full-truckload" />
                <meta property="og:image" content="https://blirapid.com/ftl-service-image.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="FTL Services - 500+ Dedicated Trucks | BLI Logistics" />
                <meta name="twitter:description" content="Exclusive truck transportation for large shipments. 40% faster transit, real-time tracking." />

                {/* Canonical URL */}
                <link rel="canonical" href="https://blirapid.com/services/full-truckload" />

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
                    style={{ backgroundImage: 'url("/lovable-uploads/ftl-hero.webp")' }}
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
                                Full Truckload (FTL) Services
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-base sm:text-lg md:text-xl text-[#F8FFFF]/90 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
                            >
                                Dedicated truck solutions for large shipments across India. When your cargo needs
                                exclusive transportation, our FTL service delivers reliability, speed, and security.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                                    aria-label="Get FTL service quote"
                                >
                                    <span>Get FTL Quote</span>
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                </Link>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('ftl-calculator');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all text-sm sm:text-base"
                                    aria-label="Calculate FTL shipping cost"
                                >
                                    <span>Calculate Shipping Cost</span>
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
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
                            Why Choose BLI for Full Truckload?
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

            {/* Features Grid */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="features-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
                    >
                        <motion.div variants={itemVariants} className="order-2 lg:order-1">
                            <h2 id="features-heading" className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#113C6A]">
                                Comprehensive FTL Features
                            </h2>
                            <p className="text-[#21221C]/80 mb-6 sm:mb-8 text-sm sm:text-base">
                                Our Full Truckload service is designed to handle your large shipments with
                                maximum efficiency and minimum hassle. From pickup to delivery, we ensure
                                your cargo receives dedicated attention.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" role="list">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF7729] mt-0.5 mr-2 sm:mr-3 flex-shrink-0" aria-hidden="true" />
                                        <span className="text-[#21221C]/80 text-xs sm:text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div variants={itemVariants} className="relative order-1 lg:order-2">
                            <img
                                src="/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.webp"
                                alt="BLI FTL truck fleet for dedicated transportation"
                                className="rounded-xl shadow-lg w-full"
                                loading="lazy"
                            />
                            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-[#FF7729] text-white p-3 sm:p-4 rounded-lg shadow-lg">
                                <p className="text-xl sm:text-2xl font-bold">500+</p>
                                <p className="text-xs sm:text-sm">Dedicated Trucks</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            {/* Process Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]" aria-labelledby="process-heading">
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
                            Simple 4-Step Process
                        </motion.h2>

                        <ol className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { step: "1", title: "Book Online", description: "Submit your FTL requirement through our platform or call" },
                                { step: "2", title: "Get Instant Quote", description: "Receive competitive pricing based on route and cargo" },
                                { step: "3", title: "Schedule Pickup", description: "Choose convenient pickup time, we'll handle the rest" },
                                { step: "4", title: "Track & Deliver", description: "Monitor real-time location until safe delivery" }
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="text-center relative"
                                >
                                    <div className="w-16 h-16 bg-[#185EAA] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                        <span aria-label={`Step ${item.step}`}>{item.step}</span>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{item.title}</h3>
                                    <p className="text-[#21221C]/70 text-sm">{item.description}</p>
                                    {index < 3 && (
                                        <ArrowRight className="w-6 h-6 text-[#185EAA] mx-auto mt-4 hidden md:block absolute -right-3 top-8" aria-hidden="true" />
                                    )}
                                </motion.li>
                            ))}
                        </ol>
                    </motion.div>
                </div>
            </section>

            {/* Industries Served */}
            <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="industries-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="industries-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Industries We Serve
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((industry, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white p-6 rounded-lg border border-[#185EAA]/20 hover:border-[#185EAA]/40 transition-all"
                                >
                                    <Package className="w-8 h-8 text-[#FF7729] mb-3" aria-hidden="true" />
                                    <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{industry.name}</h3>
                                    <p className="text-[#21221C]/70 text-sm">{industry.description}</p>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section (Hidden visually but available for SEO) */}
            <section className="sr-only" aria-label="Frequently Asked Questions">
                <h2>Frequently Asked Questions about FTL Services</h2>
                <dl>
                    <dt>What is Full Truck Load (FTL) service?</dt>
                    <dd>FTL service provides dedicated truck transportation where your cargo gets exclusive use of the entire vehicle, ensuring direct point-to-point delivery without mixing with other shipments.</dd>

                    <dt>What truck capacities are available for FTL?</dt>
                    <dd>BLI offers FTL trucks with capacity ranging from 9MT to 25MT, suitable for various cargo volumes across India.</dd>

                    <dt>How fast is FTL delivery?</dt>
                    <dd>FTL offers faster transit with direct delivery, reducing transit time by up to 40% compared to part-load services. We guarantee 24-48 hour pickup.</dd>
                </dl>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF7] to-[#113C6A] text-[#FFFDF7]" aria-labelledby="cta-heading">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 id="cta-heading" className="text-3xl font-bold mb-4 text-[#113C6A]">
                            Ready to Ship with Dedicated Trucks?
                        </h2>
                        <p className="text-[#000]/90 mb-8 text-lg">
                            Get competitive FTL rates and reliable service for your large shipments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                                aria-label="Request FTL service quote"
                            >
                                <span>Request FTL Quote</span>
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                            <a
                                href="tel:+919687448434"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all text-sm sm:text-base"
                                aria-label="Call BLI logistics expert"
                            >
                                <Users className="mr-2 w-4 h-4 flex-shrink-0" />
                                <span>Talk to Expert</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Schema Markup for Breadcrumb */}
            <script type="application/ld+json">
                {JSON.stringify({
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
                            "name": "Services",
                            "item": "https://blirapid.com/services"
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "Full Truck Load",
                            "item": "https://blirapid.com/services/full-truckload"
                        }
                    ]
                })}
            </script>
        </PageLayout>
    );
};

export default FullTruckload;