import { ArrowLeft, ArrowRight, Warehouse, Package, Truck, BarChart3, Shield, Clock, MapPin, Zap, CheckCircle, Users, Database, Settings, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const WarehousingDistribution = () => {
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
            title: "Strategic Storage",
            description: "Multi-location warehouses with climate control and security systems"
        },
        {
            icon: Package,
            title: "Inventory Management",
            description: "Real-time stock tracking with automated reorder alerts"
        },
        {
            icon: Truck,
            title: "Distribution Network",
            description: "Last-mile delivery through our extensive partner network"
        },
        {
            icon: BarChart3,
            title: "Demand Planning",
            description: "AI-powered forecasting to optimize stock levels"
        },
        {
            icon: Settings,
            title: "Value-Added Services",
            description: "Kitting, labeling, quality control, and custom packaging"
        },
        {
            icon: Shield,
            title: "Risk Management",
            description: "Insurance coverage and damage prevention protocols"
        }
    ];

    const features = [
        {
            category: "Storage Solutions",
            items: [
                "Ambient & temperature-controlled storage",
                "Hazmat certified facilities",
                "Bulk & rack storage options",
                "Cross-docking capabilities"
            ]
        },
        {
            category: "Technology",
            items: [
                "WMS with real-time visibility",
                "Barcode & RFID tracking",
                "API integration with your systems",
                "Mobile apps for field operations"
            ]
        },
        {
            category: "Operations",
            items: [
                "24/7 facility monitoring",
                "Pick, pack & ship services",
                "Quality control processes",
                "Returns processing"
            ]
        }
    ];

    const locations = [
        { city: "Mumbai", area: "2.5M sq ft", speciality: "Port connectivity" },
        { city: "Delhi NCR", area: "3.2M sq ft", speciality: "North India hub" },
        { city: "Bangalore", area: "1.8M sq ft", speciality: "Tech corridor" },
        { city: "Chennai", area: "2.1M sq ft", speciality: "South India gateway" },
        { city: "Pune", area: "1.5M sq ft", speciality: "Auto hub" },
        { city: "Ahmedabad", area: "1.9M sq ft", speciality: "Chemical & pharma" }
    ];

    const benefits = [
        {
            title: "Reduce Infrastructure Costs",
            description: "Eliminate the need for your own warehouse investment",
            icon: BarChart3,
            stat: "40% Cost Savings"
        },
        {
            title: "Faster Market Reach",
            description: "Strategic locations for quicker customer delivery",
            icon: Zap,
            stat: "2-Day Delivery"
        },
        {
            title: "Scalable Operations",
            description: "Flex up or down based on seasonal demands",
            icon: TrendingUp,
            stat: "300% Peak Capacity"
        },
        {
            title: "Advanced Technology",
            description: "State-of-the-art WMS and automation systems",
            icon: Database,
            stat: "99.9% Accuracy"
        }
    ];

    // Structured Data for Warehousing Service
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Warehousing & Distribution Services",
        "description": "Strategic storage solutions and efficient distribution networks across India. 15M+ sq ft warehouse space with 99.9% inventory accuracy and 24/7 operations.",
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
            "name": "Warehousing Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Strategic Storage",
                        "description": "15M+ sq ft warehouse space across 30+ locations in India"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Inventory Management",
                        "description": "99.9% inventory accuracy with real-time WMS tracking"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Distribution Network",
                        "description": "Last-mile delivery with 2-day delivery capability"
                    }
                }
            ]
        }
    };

    // FAQ Schema for Warehousing
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What warehousing services does BLI offer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BLI offers strategic storage, inventory management, distribution network, demand planning, value-added services, and risk management across 15M+ sq ft warehouse space."
                }
            },
            {
                "@type": "Question",
                "name": "How many warehouse locations does BLI have?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BLI operates 30+ warehouse locations across India including Mumbai, Delhi NCR, Bangalore, Chennai, Pune, and Ahmedabad with specialized facilities."
                }
            },
            {
                "@type": "Question",
                "name": "What is BLI's inventory accuracy rate?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BLI maintains 99.9% inventory accuracy through advanced WMS, barcode & RFID tracking, and real-time monitoring systems."
                }
            }
        ]
    };

    return (
        <PageLayout>
            <Helmet>
                <title>Warehousing & Distribution Services India | 15M+ Sq Ft | 99.9% Accuracy | BLI</title>
                <meta name="description" content="Strategic warehousing & distribution across India. 15M+ sq ft space, 30+ locations, 99.9% inventory accuracy, 24/7 operations. Mumbai, Delhi, Bangalore, Chennai hubs." />
                <meta name="keywords" content="warehousing services india, distribution centers, inventory management, warehouse storage, logistics warehousing, cold storage, WMS system, warehouse locations mumbai delhi" />

                {/* Open Graph */}
                <meta property="og:title" content="Warehousing & Distribution - 30+ Locations Across India | BLI" />
                <meta property="og:description" content="15M+ sq ft warehouse space with advanced WMS, 99.9% accuracy, climate control, and strategic locations for faster market reach." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.blirapid.com/services/warehousing" />
                <meta property="og:image" content="https://www.blirapid.com/warehousing-services.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Warehousing Services - 40% Cost Savings | BLI" />
                <meta name="twitter:description" content="Strategic storage solutions with advanced technology. 15M+ sq ft across India." />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.blirapid.com/services/warehousing" />

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
                    style={{ backgroundImage: 'url("/lovable-uploads/warehousing-hero.jpg")' }}
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
                                Warehousing & Distribution
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-base sm:text-lg md:text-xl text-[#F8FFFF]/90 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
                            >
                                Strategic storage solutions and efficient distribution networks across India.
                                From inventory management to order fulfillment, we optimize your supply chain operations.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                                    aria-label="Get warehouse storage quote"
                                >
                                    <span>Get Warehouse Quote</span>
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                </Link>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('warehouse-locations');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all text-sm sm:text-base"
                                    aria-label="View warehouse locations"
                                >
                                    <span>View Locations</span>
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]" aria-labelledby="services-heading">
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
                            Complete Warehousing Solutions
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
            <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="benefits-heading">
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
                            Why Choose BLI Warehousing?
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white p-6 rounded-xl border border-[#185EAA]/20 text-center hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all"
                                >
                                    <div className="w-16 h-16 bg-[#F8FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <benefit.icon className="w-8 h-8 text-[#185EAA]" aria-hidden="true" />
                                    </div>
                                    <div className="text-2xl font-bold text-[#FF7729] mb-2">{benefit.stat}</div>
                                    <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{benefit.title}</h3>
                                    <p className="text-[#21221C]/70 text-sm">{benefit.description}</p>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]" aria-labelledby="features-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="features-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Comprehensive Features
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white rounded-xl p-6 border border-[#185EAA]/20"
                                >
                                    <h3 className="font-bold text-xl mb-4 text-[#113C6A]">{feature.category}</h3>
                                    <ul className="space-y-3" role="list">
                                        {feature.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#FF7729] mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                                                <span className="text-[#21221C]/80 text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Warehouse Locations */}
            <section id="warehouse-locations" className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="locations-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="locations-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Strategic Warehouse Locations
                        </motion.h2>

                        <motion.div
                            variants={itemVariants}
                            className="bg-white rounded-xl p-8 border border-[#185EAA]/20"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {locations.map((location, index) => (
                                    <article key={index} className="border border-[#185EAA]/10 rounded-lg p-4 hover:border-[#185EAA]/30 transition-all">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="font-bold text-lg text-[#113C6A]">{location.city}</h3>
                                            <MapPin className="w-5 h-5 text-[#FF7729]" aria-hidden="true" />
                                        </div>
                                        <p className="text-[#21221C]/80 text-sm mb-1">
                                            <strong>Area:</strong> {location.area}
                                        </p>
                                        <p className="text-[#21221C]/70 text-sm">
                                            <strong>Speciality:</strong> {location.speciality}
                                        </p>
                                    </article>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-[#185EAA]/20 text-center">
                                <p className="text-[#21221C]/80 mb-4">
                                    <strong>Total Warehouse Space:</strong> 15+ Million sq ft across India
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center text-[#185EAA] hover:text-[#FF7729] transition-colors"
                                    aria-label="Find warehouse near your location"
                                >
                                    Find warehouse near your location
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Process Flow */}
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
                            How Our Warehousing Works
                        </motion.h2>

                        <ol className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                {
                                    step: "1",
                                    title: "Receive & Inspect",
                                    description: "Goods received, quality checked, and entered into WMS system",
                                    icon: Package
                                },
                                {
                                    step: "2",
                                    title: "Store & Track",
                                    description: "Strategic placement with real-time inventory tracking",
                                    icon: Warehouse
                                },
                                {
                                    step: "3",
                                    title: "Pick & Pack",
                                    description: "Order processing with accuracy verification and custom packaging",
                                    icon: Settings
                                },
                                {
                                    step: "4",
                                    title: "Ship & Deliver",
                                    description: "Dispatch through optimized routes with tracking updates",
                                    icon: Truck
                                }
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white rounded-xl p-6 border border-[#185EAA]/20 text-center hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all"
                                >
                                    <div className="w-16 h-16 bg-[#185EAA] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                        <span aria-label={`Step ${item.step}`}>{item.step}</span>
                                    </div>
                                    <div className="w-12 h-12 bg-[#F8FFFF] rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <item.icon className="w-6 h-6 text-[#FF7729]" aria-hidden="true" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{item.title}</h3>
                                    <p className="text-[#21221C]/70 text-sm">{item.description}</p>
                                </motion.li>
                            ))}
                        </ol>
                    </motion.div>
                </div>
            </section>

            {/* Technology Integration */}
            <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="technology-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        <motion.div variants={itemVariants}>
                            <h2 id="technology-heading" className="text-3xl font-bold mb-6 text-[#113C6A]">
                                Advanced Warehouse Technology
                            </h2>
                            <p className="text-[#21221C]/80 mb-8">
                                Our state-of-the-art Warehouse Management System (WMS) provides complete
                                visibility and control over your inventory, ensuring accuracy and efficiency
                                at every step.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-[#F8FFFF] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <Database className="w-4 h-4 text-[#185EAA]" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#113C6A] mb-1">Real-time Inventory</h4>
                                        <p className="text-[#21221C]/70 text-sm">Live stock levels with automated alerts</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-[#F8FFFF] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <BarChart3 className="w-4 h-4 text-[#185EAA]" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#113C6A] mb-1">Analytics Dashboard</h4>
                                        <p className="text-[#21221C]/70 text-sm">Comprehensive reporting and insights</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-[#F8FFFF] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <Zap className="w-4 h-4 text-[#185EAA]" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#113C6A] mb-1">API Integration</h4>
                                        <p className="text-[#21221C]/70 text-sm">Seamless connection with your systems</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="relative">
                            <img
                                src="/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png"
                                alt="BLI modern warehouse technology and WMS system"
                                className="rounded-xl shadow-lg w-full"
                                loading="lazy"
                            />
                            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#FF7729] text-white p-3 sm:p-4 rounded-lg shadow-lg">
                                <p className="text-xl sm:text-2xl font-bold">99.9%</p>
                                <p className="text-xs sm:text-sm">Inventory Accuracy</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]" aria-labelledby="pricing-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="pricing-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Flexible Pricing Options
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Pay-per-Use",
                                    description: "Ideal for seasonal businesses",
                                    features: ["Storage per sq ft", "Handling per unit", "No minimum commitment"],
                                    highlight: false
                                },
                                {
                                    title: "Dedicated Space",
                                    description: "Best for consistent volumes",
                                    features: ["Reserved warehouse area", "Dedicated staff", "Custom operations"],
                                    highlight: true
                                },
                                {
                                    title: "Hybrid Model",
                                    description: "Combination of both models",
                                    features: ["Base + variable pricing", "Scalable operations", "Cost optimization"],
                                    highlight: false
                                }
                            ].map((plan, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className={`rounded-xl p-6 border-2 ${plan.highlight
                                        ? 'border-[#FF7729] bg-white shadow-lg'
                                        : 'border-[#185EAA]/20 bg-white'
                                        }`}
                                >
                                    {plan.highlight && (
                                        <div className="inline-block px-3 py-1 bg-[#FF7729] text-white rounded-full text-sm font-medium mb-4">
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 className="font-bold text-xl mb-2 text-[#113C6A]">{plan.title}</h3>
                                    <p className="text-[#21221C]/70 mb-4">{plan.description}</p>
                                    <ul className="space-y-2" role="list">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-sm">
                                                <CheckCircle className="w-4 h-4 text-[#FF7729] mr-2 flex-shrink-0" aria-hidden="true" />
                                                <span className="text-[#21221C]/80">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Hidden FAQ Section for SEO */}
            <section className="sr-only" aria-label="Frequently Asked Questions">
                <h2>Frequently Asked Questions about Warehousing Services</h2>
                <dl>
                    <dt>What warehousing services does BLI offer?</dt>
                    <dd>BLI offers strategic storage, inventory management, distribution network, demand planning, value-added services, and risk management across 15M+ sq ft warehouse space.</dd>

                    <dt>How many warehouse locations does BLI have?</dt>
                    <dd>BLI operates 30+ warehouse locations across India including Mumbai, Delhi NCR, Bangalore, Chennai, Pune, and Ahmedabad with specialized facilities.</dd>

                    <dt>What is BLI's inventory accuracy rate?</dt>
                    <dd>BLI maintains 99.9% inventory accuracy through advanced WMS, barcode & RFID tracking, and real-time monitoring systems.</dd>

                    <dt>What types of storage facilities does BLI provide?</dt>
                    <dd>BLI provides ambient & temperature-controlled storage, hazmat certified facilities, bulk & rack storage options, and cross-docking capabilities.</dd>

                    <dt>How much can I save with BLI warehousing services?</dt>
                    <dd>Businesses typically achieve 40% cost savings by eliminating warehouse infrastructure investment and leveraging BLI's economies of scale.</dd>
                </dl>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF7] to-[#113C6A] text-[#FFFDF7]" aria-labelledby="warehousing-cta">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 id="warehousing-cta" className="text-3xl font-bold mb-4 text-[#113C6A]">
                            Ready to Optimize Your Storage?
                        </h2>
                        <p className="text-[#000]/90 mb-8 text-lg">
                            Get a custom warehousing solution tailored to your business needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/contact"
                                aria-label="Request warehouse tour"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                            >
                                <span>Request Warehouse Tour</span>
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                            <a
                                href="tel:+919687448434"
                                aria-label="Speak with warehousing expert"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all text-sm sm:text-base"
                            >
                                <Users className="mr-2 w-4 h-4 flex-shrink-0" />
                                <span>Speak with Expert</span>
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 pt-12 border-t border-[#F8FFFF]/20">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">15M+</p>
                                    <p className="text-[#000]/80 mt-1">Sq Ft Storage</p>
                                </div>
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">30+</p>
                                    <p className="text-[#000]/80 mt-1">Warehouse Locations</p>
                                </div>
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">99.9%</p>
                                    <p className="text-[#000]/80 mt-1">Inventory Accuracy</p>
                                </div>
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">24/7</p>
                                    <p className="text-[#000]/80 mt-1">Operations</p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Contact Info */}
                        <div className="mt-8 text-[#000]/80">
                            <p className="text-sm">Need immediate assistance?</p>
                            <a href="tel:+919687448434" className="text-xl font-bold text-[#113C6A] hover:text-[#FF7729] transition-colors">
                                +91-968 744 8434
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageLayout>
    );
};

export default WarehousingDistribution;