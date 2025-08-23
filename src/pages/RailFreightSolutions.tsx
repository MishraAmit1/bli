import { ArrowLeft, ArrowRight, Train, Package, BarChart3, Shield, Clock, MapPin, CheckCircle, Users, Truck, Zap, Globe, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const RailFreightSolutions = () => {
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
            icon: Train,
            title: "Container Rail Transport",
            description: "Full container loads via dedicated rail corridors for long-distance shipping"
        },
        {
            icon: Package,
            title: "Bulk Cargo Movement",
            description: "Coal, cement, steel, and other bulk commodities via specialized rail cars"
        },
        {
            icon: Factory,
            title: "Industrial Rail Solutions",
            description: "Direct rail connectivity to manufacturing plants and industrial complexes"
        },
        {
            icon: Truck,
            title: "Multimodal Integration",
            description: "Seamless rail-to-road connectivity for complete door-to-door service"
        },
        {
            icon: Shield,
            title: "Secure Transit",
            description: "Enhanced security protocols for high-value and sensitive cargo"
        },
        {
            icon: Globe,
            title: "Pan-India Network",
            description: "Access to Indian Railways' extensive network covering remote locations"
        }
    ];

    const advantages = [
        {
            title: "Cost Effective",
            description: "Up to 40% cheaper than road transport for long distances",
            icon: BarChart3,
            stat: "40% Savings"
        },
        {
            title: "Eco-Friendly",
            description: "Lower carbon footprint compared to road transportation",
            icon: Zap,
            stat: "75% Less CO2"
        },
        {
            title: "High Capacity",
            description: "Move large volumes in single consignment",
            icon: Package,
            stat: "2000+ Tons"
        },
        {
            title: "Reliable Schedule",
            description: "Fixed departure and arrival times",
            icon: Clock,
            stat: "95% On-Time"
        }
    ];

    const corridors = [
        {
            route: "Mumbai - Delhi",
            distance: "1,384 km",
            time: "18-24 hours",
            frequency: "Daily",
            speciality: "JNPT connectivity"
        },
        {
            route: "Chennai - Kolkata",
            distance: "1,663 km",
            time: "24-30 hours",
            frequency: "Daily",
            speciality: "East Coast corridor"
        },
        {
            route: "Bangalore - Mumbai",
            distance: "1,279 km",
            time: "20-26 hours",
            frequency: "Daily",
            speciality: "Tech hub connectivity"
        },
        {
            route: "Delhi - Kolkata",
            distance: "1,472 km",
            time: "22-28 hours",
            frequency: "Daily",
            speciality: "Industrial belt"
        },
        {
            route: "Ahmedabad - Chennai",
            distance: "1,567 km",
            time: "24-30 hours",
            frequency: "Alternate days",
            speciality: "Chemical corridor"
        },
        {
            route: "Pune - Hyderabad",
            distance: "563 km",
            time: "12-16 hours",
            frequency: "Daily",
            speciality: "Auto hub route"
        }
    ];

    const cargoTypes = [
        { type: "Containerized Cargo", description: "20ft & 40ft containers", capacity: "Up to 30 tons" },
        { type: "Bulk Commodities", description: "Coal, cement, steel, grains", capacity: "Up to 60 tons per wagon" },
        { type: "Automotive", description: "Cars, trucks, auto components", capacity: "Multi-tier car carriers" },
        { type: "Industrial Goods", description: "Machinery, equipment, raw materials", capacity: "Customized loading" }
    ];

    const benefits = [
        "Dedicated freight corridors for faster transit",
        "Real-time GPS tracking on select routes",
        "Insurance coverage up to cargo value",
        "First & last mile connectivity via road",
        "Customs clearance support for imports/exports",
        "Specialized handling for hazardous cargo",
        "Temperature-controlled wagons available",
        "24/7 customer support and updates"
    ];

    // Structured Data for Rail Freight Service
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Rail Freight Solutions",
        "description": "Cost-effective, eco-friendly rail freight transportation across India. 40% cost savings, 75% less CO2, 2000+ tons capacity with 95% on-time performance.",
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
            "name": "Rail Freight Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Container Rail Transport",
                        "description": "20ft & 40ft containers via dedicated rail corridors"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Bulk Cargo Movement",
                        "description": "Coal, cement, steel transport up to 60 tons per wagon"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Multimodal Integration",
                        "description": "Rail-to-road connectivity for door-to-door service"
                    }
                }
            ]
        }
    };

    // FAQ Schema for Rail Freight
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are the benefits of rail freight over road transport?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rail freight offers 40% cost savings, 75% less CO2 emissions, 2000+ tons capacity, and 95% on-time performance compared to road transport."
                }
            },
            {
                "@type": "Question",
                "name": "Which rail corridors does BLI cover?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BLI covers major corridors including Mumbai-Delhi, Chennai-Kolkata, Bangalore-Mumbai, Delhi-Kolkata, Ahmedabad-Chennai, and Pune-Hyderabad with daily/alternate day frequency."
                }
            },
            {
                "@type": "Question",
                "name": "What types of cargo can be transported by rail?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rail freight handles containerized cargo (20ft/40ft), bulk commodities (coal, cement, steel), automotive vehicles, and industrial goods with capacities up to 60 tons per wagon."
                }
            }
        ]
    };

    return (
        <PageLayout>
            <Helmet>
                <title>Rail Freight Solutions India | 40% Cost Savings | 7000+ Stations | BLI</title>
                <meta name="description" content="Rail freight transport across India. 40% cost savings, 75% less CO2, 2000+ tons capacity, 95% on-time. Container & bulk cargo via 7000+ railway stations." />
                <meta name="keywords" content="rail freight india, railway cargo transport, container rail transport, bulk cargo rail, multimodal transport, eco friendly freight, rail logistics, indian railways freight" />

                {/* Open Graph */}
                <meta property="og:title" content="Rail Freight Solutions - 40% Cost Savings & Eco-Friendly | BLI" />
                <meta property="og:description" content="Leverage India's railway network for cost-effective freight. 2000+ tons capacity, 95% on-time, 75% less CO2. Major corridors covered." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://blirapid.com/services/rail-freight" />
                <meta property="og:image" content="https://blirapid.com/rail-freight-services.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Rail Freight - 7000+ Railway Stations Coverage | BLI" />
                <meta name="twitter:description" content="Cost-effective rail transport. 40% savings, eco-friendly, high capacity freight solutions." />

                {/* Canonical URL */}
                <link rel="canonical" href="https://blirapid.com/services/rail-freight" />

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
                    style={{ backgroundImage: 'url("/lovable-uploads/rail-freight-hero.jpg")' }}
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
                                Rail Freight Solutions
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-base sm:text-lg md:text-xl text-[#F8FFFF]/90 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
                            >
                                Leverage India's extensive railway network for cost-effective, eco-friendly transportation
                                of bulk cargo and containers across long distances with reliable scheduling.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                                    aria-label="Get rail freight quote"
                                >
                                    <span>Get Rail Quote</span>
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                </Link>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('rail-corridors');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all text-sm sm:text-base"
                                    aria-label="View rail freight routes"
                                >
                                    <span>View Rail Routes</span>
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
                            Comprehensive Rail Freight Services
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

            {/* Advantages Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="advantages-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="advantages-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Why Choose Rail Freight?
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {advantages.map((advantage, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white p-6 rounded-xl border border-[#185EAA]/20 text-center hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all"
                                >
                                    <div className="w-16 h-16 bg-[#F8FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <advantage.icon className="w-8 h-8 text-[#185EAA]" aria-hidden="true" />
                                    </div>
                                    <div className="text-2xl font-bold text-[#FF7729] mb-2">{advantage.stat}</div>
                                    <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{advantage.title}</h3>
                                    <p className="text-[#21221C]/70 text-sm">{advantage.description}</p>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Rail Corridors */}
            <section id="rail-corridors" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]" aria-labelledby="corridors-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="corridors-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Major Rail Corridors
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {corridors.map((corridor, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white rounded-xl p-6 border border-[#185EAA]/20 hover:border-[#185EAA]/40 transition-all"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="font-bold text-lg text-[#113C6A]">{corridor.route}</h3>
                                        <Train className="w-6 h-6 text-[#FF7729]" aria-hidden="true" />
                                    </div>

                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-[#21221C]/70">Distance:</span>
                                            <span className="font-medium text-[#113C6A]">{corridor.distance}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-[#21221C]/70">Transit Time:</span>
                                            <span className="font-medium text-[#113C6A]">{corridor.time}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-[#21221C]/70">Frequency:</span>
                                            <span className="font-medium text-[#113C6A]">{corridor.frequency}</span>
                                        </div>
                                        <div className="pt-2 border-t border-[#185EAA]/10">
                                            <span className="text-[#21221C]/70 text-xs">Speciality: </span>
                                            <span className="text-[#FF7729] text-xs font-medium">{corridor.speciality}</span>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-8 text-center"
                        >
                            <p className="text-[#21221C]/80 mb-4">
                                Connect to 7,000+ railway stations across India through our network
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center text-[#185EAA] hover:text-[#FF7729] transition-colors"
                                aria-label="Check rail freight availability for your route"
                            >
                                Check availability for your route
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Cargo Types */}
            <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="cargo-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="cargo-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Cargo Types We Handle
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {cargoTypes.map((cargo, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white rounded-xl p-6 border border-[#185EAA]/20 text-center hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all"
                                >
                                    <div className="w-16 h-16 bg-[#F8FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Package className="w-8 h-8 text-[#185EAA]" aria-hidden="true" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{cargo.type}</h3>
                                    <p className="text-[#21221C]/70 text-sm mb-2">{cargo.description}</p>
                                    <p className="text-[#FF7729] font-semibold text-sm">{cargo.capacity}</p>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Process & Benefits */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]" aria-labelledby="process-benefits">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                    >
                        {/* Process */}
                        <motion.div variants={itemVariants}>
                            <h3 id="process-benefits" className="text-2xl font-bold mb-6 text-[#113C6A]">
                                Rail Freight Process
                            </h3>
                            <ol className="space-y-4" role="list">
                                {[
                                    { step: "1", title: "Route Planning", description: "Optimal rail route selection based on cargo and timeline" },
                                    { step: "2", title: "Booking & Documentation", description: "Railway booking and customs documentation" },
                                    { step: "3", title: "First Mile Pickup", description: "Road transport from origin to rail terminal" },
                                    { step: "4", title: "Rail Transit", description: "Secure rail transportation with tracking updates" },
                                    { step: "5", title: "Last Mile Delivery", description: "Road transport from destination terminal to final location" }
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start bg-white p-4 rounded-lg border border-[#185EAA]/20">
                                        <div className="w-8 h-8 bg-[#185EAA] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                                            <span aria-label={`Step ${item.step}`}>{item.step}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#113C6A] mb-1">{item.title}</h4>
                                            <p className="text-[#21221C]/70 text-sm">{item.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </motion.div>

                        {/* Benefits */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold mb-6 text-[#113C6A]">
                                Service Benefits
                            </h3>
                            <div className="bg-white rounded-xl p-6 border border-[#185EAA]/20">
                                <ul className="space-y-3" role="list">
                                    {benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-[#FF7729] mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                                            <span className="text-[#21221C]/80 text-sm">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Rail vs Road Comparison */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="comparison-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="comparison-heading"
                            variants={itemVariants}
                            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-[#113C6A]"
                        >
                            Rail vs Road Transport Comparison
                        </motion.h2>

                        <motion.div
                            variants={itemVariants}
                            className="bg-white rounded-xl p-4 sm:p-6 md:p-8 border border-[#185EAA]/20"
                        >
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[500px]" role="table">
                                    <thead>
                                        <tr className="border-b border-[#185EAA]/20">
                                            <th className="text-left py-3 sm:py-4 px-2 sm:px-4 font-bold text-[#113C6A] text-sm sm:text-base">
                                                Factor
                                            </th>
                                            <th className="text-center py-3 sm:py-4 px-2 sm:px-4 font-bold text-[#FF7729] text-sm sm:text-base">
                                                Rail Freight
                                            </th>
                                            <th className="text-center py-3 sm:py-4 px-2 sm:px-4 font-bold text-[#21221C]/70 text-sm sm:text-base">
                                                Road Transport
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { factor: "Cost (per ton/km)", rail: "₹1.5-2.5", road: "₹3.5-5.0" },
                                            { factor: "Carbon Footprint", rail: "75% Lower", road: "Baseline" },
                                            { factor: "Capacity", rail: "2000+ tons", road: "25-30 tons" },
                                            { factor: "Speed (long distance)", rail: "50-60 km/h", road: "40-50 km/h" },
                                            { factor: "Weather Impact", rail: "Minimal", road: "High" },
                                            { factor: "Fuel Efficiency", rail: "4x Better", road: "Baseline" }
                                        ].map((row, index) => (
                                            <tr key={index} className="border-b border-[#185EAA]/10">
                                                <td className="py-2 sm:py-3 px-2 sm:px-4 text-[#21221C]/80 text-xs sm:text-sm">
                                                    {row.factor}
                                                </td>
                                                <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-semibold text-[#FF7729] text-xs sm:text-sm">
                                                    {row.rail}
                                                </td>
                                                <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-[#21221C]/70 text-xs sm:text-sm">
                                                    {row.road}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile-friendly note */}
                            <div className="mt-4 sm:hidden">
                                <p className="text-xs text-[#21221C]/60 text-center">
                                    Scroll horizontally to view full comparison
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Case Study */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF] " aria-labelledby="case-study-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="case-study-heading"
                            variants={itemVariants}
                            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-[#113C6A]"
                        >
                            Success Story
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
                                        Steel Manufacturing Giant
                                    </h3>
                                    <p className="text-sm sm:text-base text-[#F8FFFF]/90 mb-4 sm:mb-6 leading-relaxed">
                                        How we helped a major steel manufacturer reduce transportation costs by 35%
                                        while improving delivery reliability through dedicated rail freight corridors.
                                    </p>
                                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                                        <div className="text-center sm:text-left">
                                            <p className="text-2xl sm:text-3xl font-bold text-[#FF7729]">35%</p>
                                            <p className="text-xs sm:text-sm text-[#F8FFFF]/80">Cost Reduction</p>
                                        </div>
                                        <div className="text-center sm:text-left">
                                            <p className="text-2xl sm:text-3xl font-bold text-[#FF7729]">50K</p>
                                            <p className="text-xs sm:text-sm text-[#F8FFFF]/80">Tons/Month</p>
                                        </div>
                                        <div className="text-center sm:text-left">
                                            <p className="text-2xl sm:text-3xl font-bold text-[#FF7729]">98%</p>
                                            <p className="text-xs sm:text-sm text-[#F8FFFF]/80">On-Time Rate</p>
                                        </div>
                                    </div>
                                    <Link
                                        to="/case-studies/steel-manufacturing"
                                        className="inline-flex items-center text-sm sm:text-base text-[#F8FFFF] hover:text-[#FF7729] transition-colors"
                                        aria-label="Read full steel manufacturing case study"
                                    >
                                        <span>Read Full Case Study</span>
                                        <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                    </Link>
                                </div>
                                <div className="relative order-1 lg:order-2">
                                    <img
                                        src="/lovable-uploads/d5ce901e-2ce0-4f2a-bce1-f0ca5d6192df.png"
                                        alt="BLI rail freight operations and steel cargo transport"
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
                <h2>Frequently Asked Questions about Rail Freight Services</h2>
                <dl>
                    <dt>What are the benefits of rail freight over road transport?</dt>
                    <dd>Rail freight offers 40% cost savings, 75% less CO2 emissions, 2000+ tons capacity, and 95% on-time performance compared to road transport.</dd>

                    <dt>Which rail corridors does BLI cover?</dt>
                    <dd>BLI covers major corridors including Mumbai-Delhi, Chennai-Kolkata, Bangalore-Mumbai, Delhi-Kolkata, Ahmedabad-Chennai, and Pune-Hyderabad with daily/alternate day frequency.</dd>

                    <dt>What types of cargo can be transported by rail?</dt>
                    <dd>Rail freight handles containerized cargo (20ft/40ft), bulk commodities (coal, cement, steel), automotive vehicles, and industrial goods with capacities up to 60 tons per wagon.</dd>

                    <dt>How much can I save with rail freight?</dt>
                    <dd>Rail freight typically costs ₹1.5-2.5 per ton/km compared to ₹3.5-5.0 for road transport, offering up to 40% cost savings for long-distance shipments.</dd>

                    <dt>What is the capacity of rail freight?</dt>
                    <dd>Rail freight can handle 2000+ tons in single consignment with individual wagon capacity up to 60 tons, much higher than road transport's 25-30 tons.</dd>
                </dl>
            </section>

            {/* CTA Section */}
            <section
                className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF7] to-[#113C6A] text-[#FFFDF7]"
                aria-labelledby="railfreight-cta"
            >
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Heading */}
                        <h2 id="railfreight-cta" className="text-3xl font-bold mb-4 text-[#113C6A]">
                            Ready to Switch to Rail Freight?
                        </h2>
                        <p className="text-[#000]/90 mb-8 text-lg">
                            Reduce costs, lower carbon footprint, and improve reliability with our rail freight solutions.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/contact"
                                aria-label="Get Rail Freight Quote"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                            >
                                <span>Get Rail Freight Quote</span>
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                            <a
                                href="tel:+919687448434"
                                aria-label="Speak with Rail Expert"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all text-sm sm:text-base"
                            >
                                <Users className="mr-2 w-4 h-4 flex-shrink-0" />
                                <span>Speak with Rail Expert</span>
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 pt-12 border-t border-[#F8FFFF]/20">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">7000+</p>
                                    <p className="text-[#000]/80 mt-1">Railway Stations</p>
                                </div>
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">40%</p>
                                    <p className="text-[#000]/80 mt-1">Cost Savings</p>
                                </div>
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">2000+</p>
                                    <p className="text-[#000]/80 mt-1">Tons Capacity</p>
                                </div>
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">95%</p>
                                    <p className="text-[#000]/80 mt-1">On-Time Performance</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageLayout>
    );
};

export default RailFreightSolutions;