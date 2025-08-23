import { ArrowLeft, ArrowRight, MapPin, Clock, Truck, Zap, CheckCircle, Users, BarChart3, Shield, Package, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const LocalRegionalDispatch = () => {
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
            icon: Clock,
            title: "Same-Day Delivery",
            description: "Urgent deliveries within city limits with 4-6 hour commitment"
        },
        {
            icon: MapPin,
            title: "Regional Coverage",
            description: "Next-day delivery to surrounding districts and nearby cities"
        },
        {
            icon: Truck,
            title: "Multi-Drop Routes",
            description: "Optimized routes for multiple deliveries in single trip"
        },
        {
            icon: Zap,
            title: "Express Service",
            description: "Priority handling for time-critical shipments"
        },
        {
            icon: Package,
            title: "Flexible Capacity",
            description: "From documents to pallets - all sizes accommodated"
        },
        {
            icon: Navigation,
            title: "Route Optimization",
            description: "AI-powered routing for fastest and most cost-effective delivery"
        }
    ];

    const benefits = [
        {
            title: "Faster Delivery",
            description: "Same-day and next-day delivery options",
            icon: Zap,
            stat: "4-6 Hours"
        },
        {
            title: "Cost Effective",
            description: "Shared routes reduce per-delivery costs",
            icon: BarChart3,
            stat: "30% Savings"
        },
        {
            title: "Real-Time Tracking",
            description: "Live updates on delivery status",
            icon: Navigation,
            stat: "100% Visibility"
        },
        {
            title: "Reliable Service",
            description: "Consistent on-time performance",
            icon: Shield,
            stat: "98% Success"
        }
    ];

    const coverage = [
        {
            region: "Mumbai Metropolitan",
            cities: ["Mumbai", "Navi Mumbai", "Thane", "Kalyan", "Vasai"],
            radius: "50 km",
            delivery: "Same Day"
        },
        {
            region: "Delhi NCR",
            cities: ["Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"],
            radius: "60 km",
            delivery: "Same Day"
        },
        {
            region: "Bangalore Urban",
            cities: ["Bangalore", "Whitefield", "Electronic City", "Hosur", "Tumkur"],
            radius: "45 km",
            delivery: "Same Day"
        },
        {
            region: "Chennai Metro",
            cities: ["Chennai", "Tambaram", "Avadi", "Kanchipuram", "Tiruvallur"],
            radius: "40 km",
            delivery: "Same Day"
        }
    ];

    const vehicleTypes = [
        { type: "Two Wheeler", capacity: "Up to 20 kg", ideal: "Documents, small parcels" },
        { type: "Three Wheeler", capacity: "Up to 200 kg", ideal: "E-commerce packages" },
        { type: "Pickup Van", capacity: "Up to 500 kg", ideal: "Bulk deliveries" },
        { type: "Mini Truck", capacity: "Up to 1.5 tons", ideal: "Furniture, appliances" }
    ];

    const industries = [
        "E-commerce & Quick Commerce",
        "Food & Beverage Delivery",
        "Pharmaceutical Distribution",
        "Retail Chain Replenishment",
        "Banking & Financial Services",
        "Manufacturing JIT Supply"
    ];

    // Structured Data for Local Dispatch Service
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Local & Regional Dispatch Services",
        "description": "Lightning-fast same-day and next-day delivery solutions across metro areas. 4-6 hour delivery commitment with real-time tracking and 98% success rate.",
        "provider": {
            "@type": "Organization",
            "name": "BLI - Bansal Logistics of India",
            "url": "https://www.blirapid.com"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Mumbai",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Maharashtra"
                }
            },
            {
                "@type": "City",
                "name": "Delhi",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Delhi"
                }
            },
            {
                "@type": "City",
                "name": "Bangalore",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Karnataka"
                }
            },
            {
                "@type": "City",
                "name": "Chennai",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Tamil Nadu"
                }
            }
        ],
        "offers": [
            {
                "@type": "Offer",
                "name": "Same-Day Delivery",
                "price": "50",
                "priceCurrency": "INR",
                "description": "4-6 hour delivery within city limits"
            },
            {
                "@type": "Offer",
                "name": "Express Service",
                "price": "80",
                "priceCurrency": "INR",
                "description": "2-4 hour priority delivery"
            }
        ]
    };

    // FAQ Schema for Local Dispatch
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is same-day delivery service?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Same-day delivery service provides urgent deliveries within city limits with 4-6 hour commitment. Starting at ₹50 base rate plus ₹8/km."
                }
            },
            {
                "@type": "Question",
                "name": "Which cities does BLI cover for local dispatch?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BLI covers Mumbai Metropolitan (50km), Delhi NCR (60km), Bangalore Urban (45km), and Chennai Metro (40km) areas for same-day delivery."
                }
            },
            {
                "@type": "Question",
                "name": "What vehicle types are available for local delivery?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BLI offers Two Wheeler (up to 20kg), Three Wheeler (up to 200kg), Pickup Van (up to 500kg), and Mini Truck (up to 1.5 tons) for different delivery needs."
                }
            }
        ]
    };

    return (
        <PageLayout>
            <Helmet>
                <title>Local & Regional Dispatch Services | Same-Day Delivery | 4-6 Hours | BLI</title>
                <meta name="description" content="Same-day & next-day local dispatch services in Mumbai, Delhi, Bangalore, Chennai. 4-6 hour delivery, real-time tracking, 98% success rate. Starting ₹50." />
                <meta name="keywords" content="same day delivery, local dispatch services, regional delivery, express delivery mumbai delhi bangalore chennai, quick delivery, urgent courier, local logistics" />

                {/* Open Graph */}
                <meta property="og:title" content="Local Dispatch Services - Same-Day Delivery in 4-6 Hours | BLI" />
                <meta property="og:description" content="Lightning-fast local delivery across metro areas. 2000+ daily dispatches, 98% success rate, real-time tracking. Mumbai, Delhi, Bangalore, Chennai." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.blirapid.com/services/local-dispatch" />
                <meta property="og:image" content="https://www.blirapid.com/local-dispatch-services.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Local Dispatch - 2000+ Daily Deliveries | BLI" />
                <meta name="twitter:description" content="Same-day delivery in 4-6 hours. Express service available. Real-time tracking." />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.blirapid.com/services/local-dispatch" />

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
                    style={{ backgroundImage: 'url("/lovable-uploads/local-dispatch-hero.jpg")' }}
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
                                Local & Regional Dispatch
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-base sm:text-lg md:text-xl text-[#F8FFFF]/90 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
                            >
                                Lightning-fast delivery solutions for your local and regional needs. From same-day
                                urgent deliveries to optimized multi-drop routes across metro areas.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                                    aria-label="Get local dispatch quote"
                                >
                                    <span>Get Dispatch Quote</span>
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                </Link>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('coverage-areas');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all text-sm sm:text-base"
                                    aria-label="Check local delivery coverage area"
                                >
                                    <span>Check Coverage Area</span>
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
                            Fast & Flexible Dispatch Services
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
                            Why Choose BLI Local Dispatch?
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

            {/* Coverage Areas */}
            <section id="coverage-areas" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]" aria-labelledby="coverage-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="coverage-heading"
                            variants={itemVariants}
                            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-[#113C6A]"
                        >
                            Coverage Areas
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {coverage.map((area, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white rounded-xl p-4 sm:p-6 border border-[#185EAA]/20 hover:border-[#185EAA]/40 transition-all"
                                >
                                    <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                                        <h3 className="font-bold text-lg sm:text-xl text-[#113C6A] flex-1">{area.region}</h3>
                                        <span className="px-2 sm:px-3 py-1 bg-[#FF7729] text-white rounded-full text-xs sm:text-sm font-medium flex-shrink-0">
                                            {area.delivery}
                                        </span>
                                    </div>

                                    <div className="mb-3 sm:mb-4">
                                        <p className="text-[#21221C]/80 text-xs sm:text-sm mb-2">
                                            <strong>Coverage Radius:</strong> {area.radius}
                                        </p>
                                        <p className="text-[#21221C]/80 text-xs sm:text-sm mb-2">
                                            <strong>Key Cities:</strong>
                                        </p>
                                        <div className="flex flex-wrap gap-1 sm:gap-2 mt-2">
                                            {area.cities.map((city, cityIndex) => (
                                                <span
                                                    key={cityIndex}
                                                    className="px-2 py-1 bg-[#F8FFFF] text-[#113C6A] rounded text-xs border border-[#185EAA]/20"
                                                >
                                                    {city}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-6 sm:mt-8 text-center px-2 sm:px-0"
                        >
                            <p className="text-sm sm:text-base text-[#21221C]/80 mb-3 sm:mb-4">
                                Don't see your area? We're expanding rapidly across India.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center text-sm sm:text-base text-[#185EAA] hover:text-[#FF7729] transition-colors"
                                aria-label="Request coverage in your area"
                            >
                                <span>Request coverage in your area</span>
                                <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Vehicle Types */}
            <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="vehicles-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="vehicles-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Vehicle Options
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {vehicleTypes.map((vehicle, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white rounded-xl p-6 border border-[#185EAA]/20 text-center hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all"
                                >
                                    <div className="w-16 h-16 bg-[#F8FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Truck className="w-8 h-8 text-[#185EAA]" aria-hidden="true" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{vehicle.type}</h3>
                                    <p className="text-[#FF7729] font-semibold text-sm mb-2">{vehicle.capacity}</p>
                                    <p className="text-[#21221C]/70 text-sm">{vehicle.ideal}</p>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
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
                            How Local Dispatch Works
                        </motion.h2>

                        <ol className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                {
                                    step: "1",
                                    title: "Book Online",
                                    description: "Submit pickup request via app, website, or phone call",
                                    icon: Package
                                },
                                {
                                    step: "2",
                                    title: "Instant Assignment",
                                    description: "Nearest available vehicle assigned within minutes",
                                    icon: Navigation
                                },
                                {
                                    step: "3",
                                    title: "Real-Time Tracking",
                                    description: "Live GPS tracking from pickup to delivery",
                                    icon: MapPin
                                },
                                {
                                    step: "4",
                                    title: "Proof of Delivery",
                                    description: "Digital confirmation with recipient signature",
                                    icon: CheckCircle
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

            {/* Industries Served */}
            <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="industries-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        <motion.div variants={itemVariants}>
                            <h2 id="industries-heading" className="text-3xl font-bold mb-6 text-[#113C6A]">
                                Industries We Serve
                            </h2>
                            <p className="text-[#21221C]/80 mb-8">
                                Our local dispatch services cater to diverse industries requiring fast,
                                reliable delivery solutions within metropolitan areas.
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                                {industries.map((industry, index) => (
                                    <li key={index} className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-[#FF7729] mr-3 flex-shrink-0" aria-hidden="true" />
                                        <span className="text-[#21221C]/80">{industry}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div variants={itemVariants} className="relative">
                            <img
                                src="/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"
                                alt="BLI local delivery network and dispatch operations"
                                className="rounded-xl shadow-lg w-full"
                                loading="lazy"
                            />
                            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-[#FF7729] text-white p-3 sm:p-4 rounded-lg shadow-lg">
                                <p className="text-xl sm:text-2xl font-bold">2000+</p>
                                <p className="text-xs sm:text-sm">Daily Deliveries</p>
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
                            Transparent Pricing
                        </motion.h2>

                        <motion.div
                            variants={itemVariants}
                            className="bg-white rounded-xl p-8 border border-[#185EAA]/20"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-[#F8FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Clock className="w-10 h-10 text-[#185EAA]" aria-hidden="true" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-2 text-[#113C6A]">Same-Day</h3>
                                    <p className="text-3xl font-bold text-[#FF7729] mb-2">₹50</p>
                                    <p className="text-[#21221C]/70 text-sm">Base rate + ₹8/km</p>
                                    <p className="text-[#21221C]/70 text-xs mt-1">Within city limits</p>
                                </div>

                                <div className="text-center">
                                    <div className="w-20 h-20 bg-[#F8FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Zap className="w-10 h-10 text-[#185EAA]" aria-hidden="true" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-2 text-[#113C6A]">Express</h3>
                                    <p className="text-3xl font-bold text-[#FF7729] mb-2">₹80</p>
                                    <p className="text-[#21221C]/70 text-sm">Base rate + ₹12/km</p>
                                    <p className="text-[#21221C]/70 text-xs mt-1">2-4 hour delivery</p>
                                </div>

                                <div className="text-center">
                                    <div className="w-20 h-20 bg-[#F8FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <MapPin className="w-10 h-10 text-[#185EAA]" aria-hidden="true" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-2 text-[#113C6A]">Regional</h3>
                                    <p className="text-3xl font-bold text-[#FF7729] mb-2">₹120</p>
                                    <p className="text-[#21221C]/70 text-sm">Base rate + ₹15/km</p>
                                    <p className="text-[#21221C]/70 text-xs mt-1">Next-day delivery</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-[#185EAA]/20 text-center">
                                <p className="text-[#21221C]/80 text-sm mb-4">
                                    * Prices may vary based on weight, dimensions, and special handling requirements
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center text-[#185EAA] hover:text-[#FF7729] transition-colors"
                                    aria-label="Get custom quote for bulk orders"
                                >
                                    Get custom quote for bulk orders
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Hidden FAQ Section for SEO */}
            <section className="sr-only" aria-label="Frequently Asked Questions">
                <h2>Frequently Asked Questions about Local Dispatch Services</h2>
                <dl>
                    <dt>What is same-day delivery service?</dt>
                    <dd>Same-day delivery service provides urgent deliveries within city limits with 4-6 hour commitment. Starting at ₹50 base rate plus ₹8/km.</dd>

                    <dt>Which cities does BLI cover for local dispatch?</dt>
                    <dd>BLI covers Mumbai Metropolitan (50km), Delhi NCR (60km), Bangalore Urban (45km), and Chennai Metro (40km) areas for same-day delivery.</dd>

                    <dt>What vehicle types are available for local delivery?</dt>
                    <dd>BLI offers Two Wheeler (up to 20kg), Three Wheeler (up to 200kg), Pickup Van (up to 500kg), and Mini Truck (up to 1.5 tons) for different delivery needs.</dd>

                    <dt>How fast is express delivery service?</dt>
                    <dd>Express delivery service provides 2-4 hour priority delivery within city limits at ₹80 base rate plus ₹12/km.</dd>

                    <dt>What industries use local dispatch services?</dt>
                    <dd>E-commerce, food delivery, pharmaceutical distribution, retail chains, banking, and manufacturing industries use our local dispatch services.</dd>
                </dl>
            </section>

            {/* CTA Section */}
            <section
                className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF7] to-[#113C6A] text-[#FFFDF7]"
                aria-labelledby="localdelivery-cta"
            >
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 id="localdelivery-cta" className="text-3xl font-bold mb-4 text-[#113C6A]">
                            Need Fast Local Delivery?
                        </h2>
                        <p className="text-[#000]/90 mb-8 text-lg">
                            Book your dispatch now and experience lightning-fast delivery in your city.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/contact"
                                aria-label="Book Local Dispatch Now"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                            >
                                <span>Book Dispatch Now</span>
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                            <a
                                href="tel:+919687448434"
                                aria-label="Call for urgent pickup"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all text-sm sm:text-base"
                            >
                                <Users className="mr-2 w-4 h-4 flex-shrink-0" />
                                <span>Call for Urgent Pickup</span>
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 pt-12 border-t border-[#F8FFFF]/20">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">4-6hrs</p>
                                    <p className="text-[#000]/80 mt-1">Same-Day Delivery</p>
                                </div>
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">2000+</p>
                                    <p className="text-[#000]/80 mt-1">Daily Dispatches</p>
                                </div>
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">98%</p>
                                    <p className="text-[#000]/80 mt-1">On-Time Rate</p>
                                </div>
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">24/7</p>
                                    <p className="text-[#000]/80 mt-1">Service Available</p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Contact Info */}
                        <div className="mt-8 text-[#000]/80">
                            <p className="text-sm">Need urgent pickup?</p>
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

export default LocalRegionalDispatch;