import { ArrowLeft, ArrowRight, Plane, Clock, Globe, Shield, Package, Zap, CheckCircle, Users, BarChart3, MapPin, Truck, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const AirCargoServices = () => {
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
            icon: Plane,
            title: "Express Air Freight",
            description: "Next-day delivery for urgent shipments across domestic and international routes"
        },
        {
            icon: Package,
            title: "Consolidated Cargo",
            description: "Cost-effective air freight for smaller shipments through cargo consolidation"
        },
        {
            icon: Shield,
            title: "Secure Transport",
            description: "High-value and sensitive cargo with enhanced security protocols"
        },
        {
            icon: Globe,
            title: "International Shipping",
            description: "Global air freight with customs clearance and documentation support"
        },
        {
            icon: AlertTriangle,
            title: "Dangerous Goods",
            description: "IATA-certified handling of hazardous materials and dangerous goods"
        },
        {
            icon: Truck,
            title: "Door-to-Airport",
            description: "Complete pickup and delivery service to and from airports"
        }
    ];

    const advantages = [
        {
            title: "Fastest Transit",
            description: "Same-day to 48-hour delivery worldwide",
            icon: Zap,
            stat: "24-48 Hours"
        },
        {
            title: "Global Reach",
            description: "Access to 500+ destinations worldwide",
            icon: Globe,
            stat: "500+ Cities"
        },
        {
            title: "High Security",
            description: "Enhanced security for valuable cargo",
            icon: Shield,
            stat: "99.9% Safe"
        },
        {
            title: "Time Critical",
            description: "Perfect for urgent and perishable goods",
            icon: Clock,
            stat: "Emergency Ready"
        }
    ];

    const routes = [
        {
            route: "Mumbai - Delhi",
            frequency: "Multiple daily",
            transit: "2-4 hours",
            type: "Domestic"
        },
        {
            route: "Delhi - Dubai",
            frequency: "Daily",
            transit: "3-5 hours",
            type: "International"
        },
        {
            route: "Bangalore - Singapore",
            frequency: "Daily",
            transit: "4-6 hours",
            type: "International"
        },
        {
            route: "Chennai - Frankfurt",
            frequency: "3x weekly",
            transit: "8-12 hours",
            type: "International"
        },
        {
            route: "Kolkata - Bangkok",
            frequency: "Daily",
            transit: "2-4 hours",
            type: "International"
        },
        {
            route: "Hyderabad - London",
            frequency: "Daily",
            transit: "9-13 hours",
            type: "International"
        }
    ];

    const cargoTypes = [
        {
            type: "Pharmaceuticals",
            description: "Temperature-controlled transport",
            features: ["Cold chain", "GDP compliance", "Real-time monitoring"]
        },
        {
            type: "Electronics",
            description: "High-value technology products",
            features: ["Anti-static packaging", "Secure handling", "Insurance coverage"]
        },
        {
            type: "Perishables",
            description: "Fresh produce and food items",
            features: ["Temperature control", "Quick clearance", "Fresh handling"]
        },
        {
            type: "Documents",
            description: "Important business documents",
            features: ["Same-day delivery", "Secure custody", "Proof of delivery"]
        }
    ];

    const airports = [
        { city: "Mumbai", code: "BOM", cargo: "700K tons/year" },
        { city: "Delhi", code: "DEL", cargo: "800K tons/year" },
        { city: "Bangalore", code: "BLR", cargo: "400K tons/year" },
        { city: "Chennai", code: "MAA", cargo: "300K tons/year" },
        { city: "Hyderabad", code: "HYD", cargo: "250K tons/year" },
        { city: "Kolkata", code: "CCU", cargo: "150K tons/year" }
    ];

    const features = [
        "Real-time flight tracking and updates",
        "Temperature-controlled cargo holds",
        "Customs clearance assistance",
        "Door-to-door pickup and delivery",
        "Insurance coverage up to cargo value",
        "24/7 emergency cargo handling",
        "IATA dangerous goods certification",
        "Multi-currency billing options"
    ];

    // Structured Data for Air Cargo Service
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Air Cargo Services",
        "description": "Fastest air freight solutions for urgent shipments. 24-48 hour delivery worldwide, 500+ destinations, 99.9% safe delivery with 24/7 emergency service.",
        "provider": {
            "@type": "Organization",
            "name": "BLI - Bansal Logistics of India",
            "url": "https://blirapid.com"
        },
        "areaServed": [
            {
                "@type": "Country",
                "name": "India"
            },
            {
                "@type": "Place",
                "name": "Worldwide"
            }
        ],
        "offers": [
            {
                "@type": "Offer",
                "name": "Domestic Air Cargo",
                "price": "80",
                "priceCurrency": "INR",
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "80",
                    "priceCurrency": "INR",
                    "unitText": "per kg"
                },
                "description": "Same-day to next-day domestic delivery"
            },
            {
                "@type": "Offer",
                "name": "International Air Cargo",
                "price": "150",
                "priceCurrency": "INR",
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "150",
                    "priceCurrency": "INR",
                    "unitText": "per kg"
                },
                "description": "24-48 hours international delivery"
            }
        ]
    };

    // FAQ Schema for Air Cargo
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How fast is air cargo delivery?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Air cargo offers 24-48 hour delivery worldwide, with same-day to next-day delivery for domestic shipments and emergency service available 24/7."
                }
            },
            {
                "@type": "Question",
                "name": "What is the cost of air cargo services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Domestic air cargo starts at ₹80/kg, international at ₹150/kg, and express service at ₹200/kg. Rates vary based on destination, weight, and cargo type."
                }
            },
            {
                "@type": "Question",
                "name": "Which airports does BLI serve for air cargo?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BLI serves 50+ airports across India including Mumbai (BOM), Delhi (DEL), Bangalore (BLR), Chennai (MAA), Hyderabad (HYD), and Kolkata (CCU)."
                }
            },
            {
                "@type": "Question",
                "name": "What types of cargo can be shipped by air?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Air cargo handles pharmaceuticals, electronics, perishables, documents, dangerous goods (IATA certified), and high-value cargo with specialized handling."
                }
            }
        ]
    };

    return (
        <PageLayout>
            <Helmet>
                <title>Air Cargo Services India | 24-48 Hour Delivery | ₹80/kg | Emergency Hotline | BLI</title>
                <meta name="description" content="Fastest air freight across India & worldwide. 24-48 hour delivery, 500+ destinations, 99.9% safe delivery. Domestic ₹80/kg, International ₹150/kg. 24/7 emergency service." />
                <meta name="keywords" content="air cargo services india, air freight, express air cargo, international air freight, emergency air cargo, pharmaceutical air transport, same day air delivery, urgent cargo" />

                {/* Open Graph */}
                <meta property="og:title" content="Air Cargo Services - 24-48 Hour Worldwide Delivery | BLI" />
                <meta property="og:description" content="Fastest air freight solutions. 500+ destinations, 99.9% safe delivery, 24/7 emergency service. Domestic & international air cargo." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://blirapid.com/services/air-cargo" />
                <meta property="og:image" content="https://blirapid.com/air-cargo-services.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Air Cargo - 500+ Destinations Worldwide | BLI" />
                <meta name="twitter:description" content="Emergency air freight service. 24-48 hour delivery, IATA certified, temperature controlled." />

                {/* Canonical URL */}
                <link rel="canonical" href="https://blirapid.com/services/air-cargo" />

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
                    style={{ backgroundImage: 'url("/lovable-uploads/air-cargo-hero.webp")' }}
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
                                Air Cargo Services
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-base sm:text-lg md:text-xl text-[#F8FFFF]/90 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
                            >
                                When time is critical, trust our air cargo solutions for the fastest, most reliable
                                transportation of your urgent shipments across India and worldwide.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                                    aria-label="Get air cargo quote"
                                >
                                    <span>Get Air Cargo Quote</span>
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                </Link>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('air-routes');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all text-sm sm:text-base"
                                    aria-label="View air cargo flight routes"
                                >
                                    <span>View Flight Routes</span>
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
                            Comprehensive Air Cargo Solutions
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
                            Why Choose Air Cargo?
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

            {/* Air Routes */}
            <section id="air-routes" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]" aria-labelledby="routes-heading">
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
                            Key Air Routes
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {routes.map((route, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white rounded-xl p-6 border border-[#185EAA]/20 hover:border-[#185EAA]/40 transition-all"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="font-bold text-lg text-[#113C6A]">{route.route}</h3>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${route.type === 'International'
                                            ? 'bg-[#FF7729] text-white'
                                            : 'bg-[#F8FFFF] text-[#185EAA] border border-[#185EAA]/20'
                                            }`}>
                                            {route.type}
                                        </span>
                                    </div>

                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-[#21221C]/70">Frequency:</span>
                                            <span className="font-medium text-[#113C6A]">{route.frequency}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-[#21221C]/70">Transit Time:</span>
                                            <span className="font-medium text-[#113C6A]">{route.transit}</span>
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
                                Connect to 500+ destinations worldwide through our airline partnerships
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center text-[#185EAA] hover:text-[#FF7729] transition-colors"
                                aria-label="Check air cargo availability for your destination"
                            >
                                Check availability for your destination
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
                            Specialized Cargo Handling
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {cargoTypes.map((cargo, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white rounded-xl p-6 border border-[#185EAA]/20 hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all"
                                >
                                    <div className="w-16 h-16 bg-[#F8FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Package className="w-8 h-8 text-[#185EAA]" aria-hidden="true" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{cargo.type}</h3>
                                    <p className="text-[#21221C]/70 text-sm mb-3">{cargo.description}</p>
                                    <ul className="space-y-1" role="list">
                                        {cargo.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-xs">
                                                <CheckCircle className="w-3 h-3 text-[#FF7729] mr-2 flex-shrink-0" aria-hidden="true" />
                                                <span className="text-[#21221C]/70">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Airport Network */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]" aria-labelledby="airports-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="airports-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Our Airport Network
                        </motion.h2>

                        <motion.div
                            variants={itemVariants}
                            className="bg-white rounded-xl p-8 border border-[#185EAA]/20"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {airports.map((airport, index) => (
                                    <article key={index} className="border border-[#185EAA]/10 rounded-lg p-4 hover:border-[#185EAA]/30 transition-all">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-bold text-lg text-[#113C6A]">{airport.city}</h3>
                                            <span className="px-2 py-1 bg-[#F8FFFF] text-[#185EAA] rounded text-sm font-mono">
                                                {airport.code}
                                            </span>
                                        </div>
                                        <p className="text-[#21221C]/70 text-sm">
                                            <strong>Cargo Volume:</strong> {airport.cargo}
                                        </p>
                                    </article>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-[#185EAA]/20 text-center">
                                <p className="text-[#21221C]/80 mb-4">
                                    <strong>Total Network:</strong> 50+ airports across India with cargo facilities
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center text-[#185EAA] hover:text-[#FF7729] transition-colors"
                                    aria-label="Find nearest cargo airport"
                                >
                                    Find nearest cargo airport
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Process & Features */}
            <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="process-features">
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
                            <h3 id="process-features" className="text-2xl font-bold mb-6 text-[#113C6A]">
                                Air Cargo Process
                            </h3>
                            <ol className="space-y-4" role="list">
                                {[
                                    { step: "1", title: "Booking & Documentation", description: "Air waybill creation and customs documentation" },
                                    { step: "2", title: "Pickup & Security", description: "Secure pickup and airport security screening" },
                                    { step: "3", title: "Flight Departure", description: "Cargo loading and flight departure tracking" },
                                    { step: "4", title: "In-Transit Updates", description: "Real-time flight tracking and status updates" },
                                    { step: "5", title: "Customs & Delivery", description: "Customs clearance and final delivery" }
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

                        {/* Features */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold mb-6 text-[#113C6A]">
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
                    </motion.div>
                </div>
            </section>

            {/* Pricing Structure */}
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
                            Air Cargo Pricing
                        </motion.h2>

                        <motion
                            .div
                            variants={itemVariants}
                            className="bg-white rounded-xl p-8 border border-[#185EAA]/20"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-[#F8FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <MapPin className="w-10 h-10 text-[#185EAA]" aria-hidden="true" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-2 text-[#113C6A]">Domestic</h3>
                                    <p className="text-3xl font-bold text-[#FF7729] mb-2">₹80/kg</p>
                                    <p className="text-[#21221C]/70 text-sm">Starting rate</p>
                                    <p className="text-[#21221C]/70 text-xs mt-1">Same-day to next-day</p>
                                </div>

                                <div className="text-center">
                                    <div className="w-20 h-20 bg-[#F8FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Globe className="w-10 h-10 text-[#185EAA]" aria-hidden="true" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-2 text-[#113C6A]">International</h3>
                                    <p className="text-3xl font-bold text-[#FF7729] mb-2">₹150/kg</p>
                                    <p className="text-[#21221C]/70 text-sm">Starting rate</p>
                                    <p className="text-[#21221C]/70 text-xs mt-1">24-48 hours</p>
                                </div>

                                <div className="text-center">
                                    <div className="w-20 h-20 bg-[#F8FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Zap className="w-10 h-10 text-[#185EAA]" aria-hidden="true" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-2 text-[#113C6A]">Express</h3>
                                    <p className="text-3xl font-bold text-[#FF7729] mb-2">₹200/kg</p>
                                    <p className="text-[#21221C]/70 text-sm">Premium rate</p>
                                    <p className="text-[#21221C]/70 text-xs mt-1">Next available flight</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-[#185EAA]/20 text-center">
                                <p className="text-[#21221C]/80 text-sm mb-4">
                                    * Rates vary based on destination, weight, dimensions, and cargo type. Fuel surcharges may apply.
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center text-[#185EAA] hover:text-[#FF7729] transition-colors"
                                    aria-label="Get detailed air cargo quote"
                                >
                                    Get detailed quote for your shipment
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Emergency Services */}
            <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="emergency-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="emergency-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Emergency Air Cargo
                        </motion.h2>

                        <motion.article
                            variants={itemVariants}
                            className="bg-gradient-to-r from-[#FF7729] to-[#e56721] rounded-xl p-8 text-white"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                                        24/7 Emergency Service
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">
                                        Critical Cargo Solutions
                                    </h3>
                                    <p className="text-white/90 mb-6">
                                        When every minute counts, our emergency air cargo service ensures your critical
                                        shipments reach their destination on the next available flight, 24/7.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <p className="text-3xl font-bold">2-4hrs</p>
                                            <p className="text-sm text-white/80">Emergency Pickup</p>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold">24/7</p>
                                            <p className="text-sm text-white/80">Service Available</p>
                                        </div>
                                    </div>
                                    <a
                                        href="tel:+919687448434"
                                        className="inline-flex items-center px-6 py-3 bg-white text-[#FF7729] rounded hover:bg-gray-100 transition-all font-semibold"
                                        aria-label="Call emergency air cargo hotline"
                                    >
                                        Emergency Hotline
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </a>
                                </div>
                                <div className="relative">
                                    <img
                                        src="/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.webp"
                                        alt="BLI emergency air cargo operations and urgent freight handling"
                                        className="rounded-lg shadow-xl"
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
                <h2>Frequently Asked Questions about Air Cargo Services</h2>
                <dl>
                    <dt>How fast is air cargo delivery?</dt>
                    <dd>Air cargo offers 24-48 hour delivery worldwide, with same-day to next-day delivery for domestic shipments and emergency service available 24/7.</dd>

                    <dt>What is the cost of air cargo services?</dt>
                    <dd>Domestic air cargo starts at ₹80/kg, international at ₹150/kg, and express service at ₹200/kg. Rates vary based on destination, weight, and cargo type.</dd>

                    <dt>Which airports does BLI serve for air cargo?</dt>
                    <dd>BLI serves 50+ airports across India including Mumbai (BOM), Delhi (DEL), Bangalore (BLR), Chennai (MAA), Hyderabad (HYD), and Kolkata (CCU).</dd>

                    <dt>What types of cargo can be shipped by air?</dt>
                    <dd>Air cargo handles pharmaceuticals, electronics, perishables, documents, dangerous goods (IATA certified), and high-value cargo with specialized handling.</dd>

                    <dt>Is emergency air cargo service available?</dt>
                    <dd>Yes, BLI offers 24/7 emergency air cargo service with 2-4 hour pickup and next available flight booking for critical shipments.</dd>
                </dl>
            </section>

            {/* CTA Section */}
            <section
                className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF7] to-[#113C6A] text-[#FFFDF7]"
                aria-labelledby="aircargo-cta"
            >
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Heading */}
                        <h2 id="aircargo-cta" className="text-3xl font-bold mb-4 text-[#113C6A]">
                            Need Urgent Air Cargo?
                        </h2>
                        <p className="text-[#000]/90 mb-8 text-lg">
                            Get your time-critical shipments delivered faster with our reliable air cargo services.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/contact"
                                aria-label="Book Air Cargo Service"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                            >
                                <span>Book Air Cargo Now</span>
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                            <a
                                href="tel:+919687448434"
                                aria-label="Call Air Cargo Emergency Hotline"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all text-sm sm:text-base"
                            >
                                <Users className="mr-2 w-4 h-4 flex-shrink-0" />
                                <span>Emergency Hotline</span>
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 pt-12 border-t border-[#F8FFFF]/20">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">24-48hrs</p>
                                    <p className="text-[#000]/80 mt-1">Global Delivery</p>
                                </div>
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">500+</p>
                                    <p className="text-[#000]/80 mt-1">Destinations</p>
                                </div>
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">99.9%</p>
                                    <p className="text-[#000]/80 mt-1">Safe Delivery</p>
                                </div>
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">24/7</p>
                                    <p className="text-[#000]/80 mt-1">Emergency Service</p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Contact Info */}
                        <div className="mt-8 text-[#000]/80">
                            <p className="text-sm">Emergency air cargo needed?</p>
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

export default AirCargoServices;