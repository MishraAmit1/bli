import { useEffect } from 'react';
import { motion } from "framer-motion";
import {
    Cpu, Monitor, Home, Gift, UtensilsCrossed, Factory, ShoppingBag, Briefcase,
    Zap, Shield, CheckCircle, HardHat, Box, ArrowRight, ArrowLeft,
    RefreshCcw, Handshake
} from "lucide-react";
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';

const Services = () => {
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

    const services = [
        {
            icon: <Cpu className="w-4 h-4 text-[#FFFDF7]" />,
            title: "Full Truck Load (FTL)",
            description: "Complete trucks for large-volume cargo and plant-to-plant transfers.",
            image: "/lovable-uploads/services1.jpg",
            overlayText: "Bulk • Dedicated",
            link: "/services/full-truckload",
            subFeatures: [
                { icon: <Zap className="w-3 h-3 text-yellow-500" />, text: "Direct routes" },
                { icon: <Shield className="w-3 h-3 text-blue-500" />, text: "Minimal handling Cost-efficient for high loads" }
            ]
        },
        {
            icon: <Monitor className="w-4 h-4 text-[#FFFDF7]" />,
            title: "Part Load (PTL)",
            description: "Pay only for the space you use—ideal for small or medium shipments.",
            image: "/lovable-uploads/services2.jpg",
            overlayText: "Shared • Affordable",
            link: "/services/part-load",
            subFeatures: [
                { icon: <CheckCircle className="w-3 h-3 text-green-500" />, text: "Shared truck costs" },
                { icon: <HardHat className="w-3 h-3 text-orange-500" />, text: "Flexible scheduling" }
            ]
        },
        {
            icon: <Home className="w-4 h-4 text-[#FFFDF7]" />,
            title: "3PL & Distribution",
            description: "From warehousing to last-mile, we manage the supply chain so you can focus on sales.",
            image: "/lovable-uploads/services3.png",
            overlayText: "End-to-End • Hassle-Free",
            link: "/services/3pl",
            subFeatures: [
                { icon: <Gift className="w-3 h-3 text-pink-500" />, text: "Route planning & reverse logistics" },
                { icon: <Zap className="w-3 h-3 text-yellow-500" />, text: "Multi-location coordination" }
            ]
        },
        {
            icon: <Gift className="w-4 h-4 text-[#FFFDF7]" />,
            title: "Warehousing Support",
            description: "Strategic hubs for both short- and long-term storage anywhere in India.",
            image: "/lovable-uploads/services4.png",
            overlayText: "Secure • Flexible",
            link: "/services/warehousing",
            subFeatures: [
                { icon: <Shield className="w-3 h-3 text-blue-500" />, text: "Inventory management" },
                { icon: <CheckCircle className="w-3 h-3 text-green-500" />, text: "Scalable space options" }
            ]
        },
        {
            icon: <UtensilsCrossed className="w-4 h-4 text-[#FFFDF7]" />,
            title: "Local & Regional Dispatch",
            description: "Quick, reliable deliveries within cities and regional zones.",
            image: "/lovable-uploads/services5.jpg",
            overlayText: "Fast • Nearby",
            link: "/services/local-dispatch",
            subFeatures: [
                { icon: <Zap className="w-3 h-3 text-yellow-500" />, text: "Light commercial vehicles" },
                { icon: <Shield className="w-3 h-3 text-blue-500" />, text: "Perfect for eCommerce & urgent loads" }
            ]
        },
        {
            icon: <Factory className="w-4 h-4 text-[#FFFDF7]" />,
            title: "Rail Freight Solutions",
            description: "Cost-efficient bulk shipping via India's rail network.",
            image: "/lovable-uploads/services6.jpg",
            overlayText: "Heavy • Long-Distance",
            link: "/services/rail-freight",
            subFeatures: [
                { icon: <HardHat className="w-3 h-3 text-orange-500" />, text: "Stable rates, less fuel impact" },
                { icon: <RefreshCcw className="w-3 h-3 text-purple-500" />, text: "Ideal for heavy industrial goods" }
            ]
        },
        {
            icon: <ShoppingBag className="w-4 h-4 text-[#FFFDF7]" />,
            title: "Air Cargo Services",
            description: "Same-day or next-day air freight for urgent, high-value shipments.",
            image: "/lovable-uploads/services7.jpg",
            overlayText: "Express • Secure",
            link: "/services/air-cargo",
            subFeatures: [
                { icon: <Box className="w-3 h-3 text-gray-700" />, text: "Priority handling" },
                { icon: <ArrowRight className="w-3 h-3 text-[#FF7729]" />, text: "Major-city coverage" }
            ]
        },
        {
            icon: <Briefcase className="w-4 h-4 text-[#FFFDF7]" />,
            title: "Real-Time Support",
            description: "Stay informed with proactive updates and live tracking.",
            image: "/lovable-uploads/services8.png",
            overlayText: "Always-On • Transparent",
            link: "/services/real-time-support",
            subFeatures: [
                { icon: <Handshake className="w-3 h-3 text-green-600" />, text: "24/7 coordination" },
                { icon: <Gift className="w-3 h-3 text-pink-500" />, text: "Instant issue resolution" }
            ]
        }
    ];

    // Structured Data for Services
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Logistics and Transportation Services",
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
            "name": "BLI Logistics Services",
            "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "name": service.title,
                "description": service.description,
                "url": `https://www.blirapid.com${service.link}`
            }))
        }
    };

    return (
        <PageLayout>
            <Helmet>
                <title>Logistics Services India | FTL, PTL, 3PL, Warehousing | BLI</title>
                <meta name="description" content="Comprehensive logistics services across India - Full Truck Load (FTL), Part Load (PTL), 3PL Distribution, Warehousing, Rail & Air Freight. 24/7 support with real-time tracking." />
                <meta name="keywords" content="logistics services india, FTL services, PTL services, 3PL logistics, warehousing india, rail freight, air cargo services, distribution services, supply chain solutions, BLI services" />

                {/* Open Graph */}
                <meta property="og:title" content="Complete Logistics Solutions | BLI Services" />
                <meta property="og:description" content="End-to-end logistics services: FTL, PTL, 3PL, Warehousing, Rail & Air Freight across India. Get reliable, scalable solutions." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.blirapid.com/services" />
                <meta property="og:image" content="https://www.blirapid.com/services-og-image.jpg" />
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="BLI Logistics Services - Complete Supply Chain Solutions" />
                <meta name="twitter:description" content="From FTL to Air Cargo, comprehensive logistics solutions for businesses across India" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.blirapid.com/services" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
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
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 md:mb-6 text-[#F8FFFF]"
                        >
                            Our Services
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3 md:mb-4 text-[#F8FFFF]/90"
                        >
                            End-to-End Logistics Solutions
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-sm sm:text-base md:text-[15px] text-[#F8FFFF]/90 max-w-3xl leading-relaxed"
                        >
                            From Full Truck Load to Air Cargo, we offer comprehensive logistics and 3PL solutions
                            designed for speed, reliability, and scale across India.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-6 sm:mt-8"
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                                aria-label="Get a logistics quote"
                            >
                                <span>Get a Quote</span>
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="services-heading">
                <div className="container mx-auto max-w-7xl">
                    <h2 id="services-heading" className="sr-only">Our Logistics Services</h2>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {services.map((service, index) => (
                            <motion.article
                                key={index}
                                variants={itemVariants}
                                className="group relative rounded-xl overflow-hidden shadow-lg border hover:border-[#FF7729] h-[420px] flex flex-col bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Tag badge */}
                                <span className="absolute top-3 left-3 z-10 bg-[#FF7729] text-white text-xs font-medium px-2 py-1 rounded-full shadow">
                                    {service.overlayText}
                                </span>

                                {/* Image Section */}
                                <div className="relative w-full h-64 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={`${service.title} - BLI Logistics Service`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white text-sm font-medium tracking-wide">
                                            Safe • Fast • Reliable
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-5 flex flex-col justify-between flex-grow">
                                    {/* Icon + Title */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="bg-[#113C6A] p-1 rounded-md flex items-center justify-center" aria-hidden="true">
                                                {service.icon}
                                            </span>
                                            <h3 className="font-semibold text-[#113C6A] text-base">{service.title}</h3>
                                        </div>

                                        {/* Short Description */}
                                        <p className="text-black text-sm leading-snug mt-1">
                                            {service.description}
                                        </p>

                                        {/* Sub-feature points */}
                                        <ul className="mt-3 text-xs text-gray-600 space-y-1">
                                            {service.subFeatures.map((sf, i) => (
                                                <li key={i} className="flex items-center gap-1">
                                                    <span aria-hidden="true">{sf.icon}</span> {sf.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Footer with CTA */}
                                    <div className="mt-4 flex items-center justify-between">
                                        <Link
                                            to={service.link}
                                            className="flex items-center text-[#FF7729] text-sm font-medium hover:underline"
                                            aria-label={`Learn more about ${service.title}`}
                                        >
                                            Learn More <ArrowRight className="ml-1 w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* CTA Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-12 sm:mt-16 text-center bg-[#F8FFFF] rounded-xl p-6 sm:p-8 md:p-12 border border-[#185EAA]/20"
                        aria-labelledby="custom-solution-heading"
                    >
                        <h2 id="custom-solution-heading" className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-[#113C6A]">
                            Need a Custom Solution?
                        </h2>
                        <p className="text-sm sm:text-base text-[#21221C]/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
                            We understand that every business has unique logistics needs. Let's discuss how we can
                            create a tailored solution for your specific requirements.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                                aria-label="Contact BLI logistics experts"
                            >
                                <span>Contact Our Experts</span>
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                        </div>
                    </motion.section>
                </div>
            </section>
        </PageLayout>
    );
};

export default Services;