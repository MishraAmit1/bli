// pages/PartLoadVapi.tsx
import {
    ArrowRight,
    Package,
    PiggyBank,
    Network,
    Clock,
    Shield,
    CheckCircle,
    TrendingUp,
    Boxes,
    Truck,
    MapPin,
    IndianRupee,
    Barcode,
    ClipboardCheck,
    FileText,
    Phone,
    Home,
    Factory,
    Building2,
    ShoppingCart,
    Printer,
    Store,
    Award,
    Users,
    Headphones,
    MessageCircle,
    PhoneCall
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const PartLoadVapi = () => {
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
            icon: IndianRupee,
            title: "Cost Savings",
            description: "Pay only for the space used. Reduce freight costs by 40–60% versus FTL."
        },
        {
            icon: MapPin,
            title: "Strong Network",
            description: "Daily pickup from Vapi, Daman, Silvassa, Valsad, Umargam & surrounding zones."
        },
        {
            icon: Truck,
            title: "Flexible Loads",
            description: "Move 50kg – 5 Tons without booking a full truck. Cartons, pallets & industrial items."
        },
        {
            icon: Shield,
            title: "Secure Handling",
            description: "Cargo segregation, professional loading, moisture protection & zero-damage focus."
        }
    ];

    const features = [
        { icon: Package, text: "Minimum shipment: 50 kg" },
        { icon: Truck, text: "Maximum: 5 tons per consignment" },
        { icon: Clock, text: "Daily departures to major cities" },
        { icon: MapPin, text: "Consolidation at 30+ national hubs" },
        { icon: Barcode, text: "Barcode scanning at checkpoints" },
        { icon: Truck, text: "Shared truck space optimization" },
        { icon: Home, text: "Door pickup & delivery available" },
        { icon: FileText, text: "Clean LR (Lorry Receipt)" },
        { icon: ClipboardCheck, text: "POD within 24 hours" },
        { icon: IndianRupee, text: "Competitive per-kg pricing" },
        { icon: Phone, text: "Real-time coordination calls" },
    ];

    const industries = [
        {
            icon: Factory,
            title: "Manufacturers",
            description: "Plastic goods, packaging materials, light machinery & industrial components"
        },
        {
            icon: Building2,
            title: "SMBs & Distributors",
            description: "Small and medium businesses with regular part-load requirements"
        },
        {
            icon: ShoppingCart,
            title: "B2B E-commerce",
            description: "Business-to-business online sellers needing reliable freight partners"
        },
        {
            icon: Printer,
            title: "Packaging & Printing",
            description: "Carton boxes, printed materials, labels & packaging supplies"
        },
        {
            icon: Store,
            title: "Regional Wholesalers",
            description: "Wholesale distributors moving goods across state boundaries"
        },
        {
            icon: Network,
            title: "Multi-City Businesses",
            description: "Companies requiring flexible volume shipments to multiple destinations"
        }
    ];

    const routeGroups = [
        {
            region: "North India",
            color: "bg-blue-500",
            routes: ["Vapi → Delhi NCR", "Vapi → Noida / Gurgaon", "Vapi → Jaipur / Lucknow"]
        },
        {
            region: "South India",
            color: "bg-green-500",
            routes: ["Vapi → Bangalore", "Vapi → Chennai", "Vapi → Hyderabad"]
        },
        {
            region: "West & Central",
            color: "bg-[#FF7729]",
            routes: ["Vapi → Mumbai / Pune", "Vapi → Nagpur / Aurangabad", "Vapi → Indore / Bhopal"]
        },
        {
            region: "East India",
            color: "bg-purple-500",
            routes: ["Vapi → Kolkata", "Vapi → Ranchi / Patna", "Vapi → Guwahati"]
        }
    ];

    const trustPoints = [
        {
            icon: Award,
            title: "25+ Years Logistics Legacy",
            description: "Decades of proven expertise in industrial freight and part-load transport across India."
        },
        {
            icon: Users,
            title: "Customer-First Operations",
            description: "Every process designed around your needs. Flexible scheduling, transparent pricing."
        },
        {
            icon: Headphones,
            title: "Professional Support Team",
            description: "Dedicated coordinators for real-time updates. WhatsApp, call & email support."
        },
        {
            icon: Shield,
            title: "Reliable Transport Partner",
            description: "Trusted by leading manufacturers in Vapi-Daman-Silvassa belt for daily shipments."
        }
    ];

    const localZones = [
        "Vapi", "Daman", "Silvassa", "Valsad", "Umargam",
        "Sarigam", "Pardi", "Dadra", "Masat", "Rakholi"
    ];

    // Structured Data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Part Load (PTL) Services Vapi, Daman, Silvassa",
        "description": "Industrial part load shipping from Vapi, Daman, Silvassa to all India. Daily dispatches, 500+ cities coverage, save up to 60% on freight costs.",
        "provider": {
            "@type": "Organization",
            "name": "BLI - Bansal Logistics of India",
            "url": "https://blirapid.com",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vapi",
                "addressRegion": "Gujarat",
                "postalCode": "396191",
                "addressCountry": "IN"
            }
        },
        "areaServed": [
            { "@type": "City", "name": "Vapi" },
            { "@type": "City", "name": "Daman" },
            { "@type": "City", "name": "Silvassa" },
            { "@type": "City", "name": "Valsad" },
            { "@type": "City", "name": "Umargam" }
        ],
        "serviceType": "Part Load Transport, PTL Shipping, LTL Freight"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is Part Load service from Vapi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Part Load (PTL/LTL) service from Vapi allows you to ship smaller consignments (50kg to 5 tons) by sharing truck space, reducing costs by 40-60% compared to full truckload."
                }
            },
            {
                "@type": "Question",
                "name": "Which areas are covered for pickup?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer daily pickup from Vapi, Daman, Silvassa, Valsad, Umargam, Sarigam, Pardi, Dadra, and surrounding industrial zones."
                }
            },
            {
                "@type": "Question",
                "name": "What is the transit time from Vapi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Transit time is typically 1-3 days depending on the destination. Express options available for urgent shipments."
                }
            }
        ]
    };

    // WhatsApp URL
    const whatsappMessage = "Hi BLI! I need a PTL quote for shipment from Vapi/Daman region. Please share rates.";
    const whatsappUrl = `https://wa.me/919537448444?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <PageLayout>
            <Helmet>
                <title>Part Load (PTL) Services Vapi, Daman, Silvassa | Daily Dispatch | BLI Logistics</title>
                <meta name="description" content="Industrial Part Load (PTL/LTL) shipping from Vapi, Daman, Silvassa to all India. Daily dispatches, 500+ cities, save 40-60% on freight. Get instant quotes!" />
                <meta name="keywords" content="part load services vapi, PTL transport daman, LTL shipping silvassa, industrial freight vapi, part truck load valsad, logistics umargam, PTL vapi to delhi, part load vapi to mumbai" />

                <meta property="og:title" content="Part Load (PTL) Services from Vapi, Daman, Silvassa | BLI" />
                <meta property="og:description" content="Industrial part load shipping from Vapi-Daman-Silvassa belt. Daily dispatches to 500+ cities. Save 40-60% on freight costs." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://blirapid.com/services/part-load-vapi" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Part Load Services Vapi | BLI Logistics" />
                <meta name="twitter:description" content="Daily PTL dispatches from Vapi, Daman, Silvassa. PAN India coverage." />

                <link rel="canonical" href="https://blirapid.com/services/part-load-vapi" />

                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative pt-8 sm:pt-10 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: 'url("/lovable-uploads/ptl-hero.webp")' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#113C6A]/95 via-[#113C6A]/90 to-[#185EAA]/80 z-0" />

                <div className="container mx-auto relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 bg-[#FF7729]/20 text-[#FF7729] border border-[#FF7729]/30 rounded-full px-3 py-1 mb-4"
                        >
                            <span className="w-1.5 h-1.5 bg-[#FF7729] rounded-full animate-pulse" />
                            <span className="text-xs font-medium">Daily Dispatches from Vapi & Daman Region</span>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <motion.h1
                                variants={itemVariants}
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#F8FFFF] leading-tight"
                            >
                                Part Load (PTL) Services
                                <span className="block text-[#FF7729]">for Industries Across India</span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-base sm:text-lg text-[#F8FFFF]/90 mb-2"
                            >
                                <span className="text-[#FF7729] font-semibold">Daily Dispatches</span> • Best Rates • PAN India Coverage
                            </motion.p>

                            {/* Mobile Text - Short */}
                            <motion.p
                                variants={itemVariants}
                                className="block sm:hidden text-sm text-[#F8FFFF]/70 max-w-xl mx-auto mb-6"
                            >
                                Cost-effective shipping for industrial goods. Save up to 60% on freight costs.
                            </motion.p>

                            {/* Desktop Text - Full */}
                            <motion.p
                                variants={itemVariants}
                                className="hidden sm:block text-base text-[#F8FFFF]/70 max-w-xl mx-auto mb-8"
                            >
                                Smart, cost-effective movement for industrial cartons and lightweight goods. Save up to 60% on freight costs with shared truck space optimization.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
                            >
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-[#25D366] text-white rounded hover:bg-[#20BA5C] transition-all group text-sm sm:text-base whitespace-nowrap"
                                >
                                    <MessageCircle className="mr-2 w-4 h-4 flex-shrink-0" />
                                    <span className="sm:hidden">WhatsApp for Rates</span>
                                    <span className="hidden sm:inline">WhatsApp for Instant Rates</span>
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                </a>
                                <a
                                    href="tel:+919537448444"
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all text-sm sm:text-base whitespace-nowrap"
                                >
                                    <Phone className="mr-2 w-4 h-4 flex-shrink-0" />
                                    <span>Call for Pickup</span>
                                </a>
                            </motion.div>

                            {/* Trust Badges */}
                            <motion.div
                                variants={itemVariants}
                                className="flex items-center justify-center gap-3 sm:gap-6 mt-8 pt-6 border-t border-[#F8FFFF]/20"
                            >
                                <div className="flex items-center gap-1 sm:gap-2 text-[#F8FFFF]/80">
                                    <span className="text-lg sm:text-2xl font-bold text-[#FF7729]">25+</span>
                                    <span className="text-[10px] sm:text-sm">
                                        <span className="sm:hidden">Years</span>
                                        <span className="hidden sm:inline">Years Legacy</span>
                                    </span>
                                </div>
                                <div className="w-px h-5 sm:h-6 bg-[#F8FFFF]/30" />
                                <div className="flex items-center gap-1 sm:gap-2 text-[#F8FFFF]/80">
                                    <span className="text-lg sm:text-2xl font-bold text-[#FF7729]">500+</span>
                                    <span className="text-[10px] sm:text-sm">
                                        <span className="sm:hidden">Cities</span>
                                        <span className="hidden sm:inline">Cities Covered</span>
                                    </span>
                                </div>
                                <div className="w-px h-5 sm:h-6 bg-[#F8FFFF]/30" />
                                <div className="flex items-center gap-1 sm:gap-2 text-[#F8FFFF]/80">
                                    <span className="text-lg sm:text-2xl font-bold text-[#FF7729]">30+</span>
                                    <span className="text-[10px] sm:text-sm">
                                        <span className="sm:hidden">Hubs</span>
                                        <span className="hidden sm:inline">Hub Network</span>
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Intro / Benefits Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center mb-14">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#113C6A] mb-6">
                                Your Trusted Partner for Industrial Part Load Shipping
                            </h2>
                            <p className="text-[#21221C]/80 text-lg leading-relaxed">
                                BLI (Bansal Logistics of India) specializes in industrial Part Load Transport (PTL/LTL) services
                                with a strong focus on the <span className="text-[#113C6A] font-semibold">Vapi–Daman–Silvassa industrial belt</span>.
                                With PAN India reach and decades of experience, we deliver reliable, cost-effective logistics
                                solutions for manufacturers, distributors, and SMBs across the country.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <Card className="h-full bg-white border border-[#185EAA]/10 hover:border-[#FF7729]/30 hover:shadow-lg transition-all group">
                                        <CardContent className="p-6 text-center">
                                            <div className="w-14 h-14 mx-auto bg-[#FF7729]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FF7729]/20 transition-colors">
                                                <benefit.icon className="w-7 h-7 text-[#FF7729]" />
                                            </div>
                                            <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{benefit.title}</h3>
                                            <p className="text-[#21221C]/70 text-sm">{benefit.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Routes Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#113C6A] to-[#185EAA]">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="text-center mb-12">
                            <span className="text-[#FF7729] font-medium text-sm tracking-wider uppercase mb-4 block">
                                Route Network
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F8FFFF] mb-4">
                                Popular PTL Routes from Vapi
                            </h2>
                            <p className="text-lg text-[#F8FFFF]/70 max-w-2xl mx-auto">
                                Regular scheduled services to all major industrial hubs across India
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                            {routeGroups.map((group, index) => (
                                <div
                                    key={index}
                                    className="bg-[#F8FFFF]/10 backdrop-blur-sm rounded-2xl p-6 border border-[#F8FFFF]/20 hover:border-[#FF7729]/40 transition-all"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-3 h-3 rounded-full ${group.color}`} />
                                        <h3 className="text-lg font-bold text-[#F8FFFF]">{group.region}</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {group.routes.map((route, routeIndex) => (
                                            <li key={routeIndex} className="flex items-center gap-2 text-[#F8FFFF]/80">
                                                <ArrowRight className="w-4 h-4 text-[#FF7729] flex-shrink-0" />
                                                <span className="text-sm">{route}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </motion.div>

                        {/* Transit Time */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-[#FF7729]/20 border border-[#FF7729]/30 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#FF7729]/30 flex items-center justify-center">
                                <Clock className="w-6 h-6 text-[#FF7729]" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-[#F8FFFF] mb-1">
                                    Transit Time: 1–3 Days
                                </h4>
                                <p className="text-[#F8FFFF]/70 text-sm">
                                    Depending on route and destination. Express options available for urgent shipments.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7]">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="text-center mb-12">
                            <span className="text-[#FF7729] font-medium text-sm tracking-wider uppercase mb-4 block">
                                Service Features
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#113C6A] mb-4">
                                What's Included in Our PTL Services
                            </h2>
                            <p className="text-lg text-[#21221C]/70 max-w-2xl mx-auto">
                                Comprehensive part load solutions designed for industrial shipping needs
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 bg-white rounded-xl p-4 border border-[#185EAA]/10 hover:border-[#FF7729]/30 hover:shadow-md transition-all"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#FF7729]/10 flex items-center justify-center flex-shrink-0">
                                        <feature.icon className="w-5 h-5 text-[#FF7729]" />
                                    </div>
                                    <span className="text-sm font-medium text-[#113C6A]">{feature.text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="text-center mb-12">
                            <span className="text-[#FF7729] font-medium text-sm tracking-wider uppercase mb-4 block">
                                Industries We Serve
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#113C6A] mb-4">
                                Ideal For These Businesses
                            </h2>
                            <p className="text-lg text-[#21221C]/70 max-w-2xl mx-auto">
                                Our PTL services are tailored for industrial and B2B clients across diverse sectors
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {industries.map((industry, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <Card className="h-full bg-white border border-[#185EAA]/10 hover:border-[#FF7729]/30 hover:shadow-lg transition-all group">
                                        <CardContent className="p-6">
                                            <div className="w-14 h-14 rounded-xl bg-[#113C6A]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF7729]/10 transition-colors">
                                                <industry.icon className="w-7 h-7 text-[#113C6A] group-hover:text-[#FF7729] transition-colors" />
                                            </div>
                                            <h3 className="text-xl font-bold text-[#113C6A] mb-2">{industry.title}</h3>
                                            <p className="text-[#21221C]/70">{industry.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* How It Works / Workflow Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#113C6A] to-[#185EAA]">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="text-center mb-14">
                            <span className="text-[#FF7729] font-medium text-sm tracking-wider uppercase mb-4 block">
                                How It Works
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F8FFFF] mb-4">
                                Part Load Workflow
                            </h2>
                            <p className="text-lg text-[#F8FFFF]/70 max-w-2xl mx-auto">
                                Simple, transparent process from pickup to delivery. Track your cargo at every step.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
                            {[
                                {
                                    icon: Package,
                                    step: "Step 1",
                                    title: "Pickup & Consolidation",
                                    description: "Shipment collected from your location → scanned → sorted → consolidated with other loads at nearest hub for optimized routing."
                                },
                                {
                                    icon: Truck,
                                    step: "Step 2",
                                    title: "Line Haul Movement",
                                    description: "Scheduled dispatches via optimized routes with real-time updates. Call/WhatsApp support throughout transit for complete visibility."
                                },
                                {
                                    icon: MapPin,
                                    step: "Step 3",
                                    title: "Destination Delivery",
                                    description: "Segregation at destination hub → routed for local delivery → Proof of Delivery (POD) shared within 24 hours."
                                }
                            ].map((step, index) => (
                                <motion.div key={index} variants={itemVariants} className="relative">
                                    <div className="bg-[#F8FFFF]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#F8FFFF]/20 hover:border-[#FF7729]/40 transition-all h-full">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-16 h-16 rounded-xl bg-[#FF7729]/20 flex items-center justify-center">
                                                <step.icon className="w-8 h-8 text-[#FF7729]" />
                                            </div>
                                            <div>
                                                <span className="text-[#FF7729] text-sm font-medium">{step.step}</span>
                                                <h3 className="text-xl font-bold text-[#F8FFFF]">{step.title}</h3>
                                            </div>
                                        </div>
                                        <p className="text-[#F8FFFF]/70 leading-relaxed">{step.description}</p>
                                    </div>

                                    {index < 2 && (
                                        <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                                            <ArrowRight className="w-8 h-8 text-[#FF7729]/50" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Network Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7]">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid lg:grid-cols-2 gap-12 items-center"
                    >
                        {/* Content */}
                        <motion.div variants={itemVariants}>
                            <span className="text-[#FF7729] font-medium text-sm tracking-wider uppercase mb-4 block">
                                Network Coverage
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#113C6A] mb-6">
                                Extensive National Distribution Network
                            </h2>
                            <p className="text-lg text-[#21221C]/80 mb-6 leading-relaxed">
                                With over <span className="text-[#113C6A] font-semibold">500+ cities covered</span> across India,
                                BLI operates one of the most comprehensive part-load distribution networks in the country.
                                Our strategically located hubs ensure quick transit and reliable deliveries.
                            </p>
                            <p className="text-[#21221C]/70 mb-8 leading-relaxed">
                                We are the trusted PTL specialist for factories and manufacturers in the
                                <span className="text-[#113C6A] font-medium"> Vapi–Daman–Silvassa industrial belt</span>,
                                handling daily movements with precision and care.
                            </p>

                            {/* Local Pickup Zones */}
                            <div className="bg-white rounded-xl p-6 border border-[#185EAA]/10">
                                <h4 className="font-bold text-[#113C6A] mb-4">Local Pickup Zones:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {localZones.map((zone) => (
                                        <span
                                            key={zone}
                                            className="px-3 py-1.5 bg-[#113C6A]/10 text-[#113C6A] text-sm font-medium rounded-full"
                                        >
                                            {zone}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                            {[
                                { icon: MapPin, value: "500+", label: "Cities Covered" },
                                { icon: Building2, value: "30+", label: "Hub Network" },
                                { icon: Truck, value: "Daily", label: "Dispatches" },
                                { icon: Users, value: "1000+", label: "Clients Served" }
                            ].map((stat, index) => (
                                <Card key={index} className="bg-white border border-[#185EAA]/10 hover:shadow-lg transition-all">
                                    <CardContent className="p-6 text-center">
                                        <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#FF7729]/10 flex items-center justify-center">
                                            <stat.icon className="w-7 h-7 text-[#FF7729]" />
                                        </div>
                                        <div className="text-3xl md:text-4xl font-bold text-[#113C6A] mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-[#21221C]/70">{stat.label}</div>
                                    </CardContent>
                                </Card>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="text-center mb-12">
                            <span className="text-[#FF7729] font-medium text-sm tracking-wider uppercase mb-4 block">
                                Why Trust BLI
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#113C6A] mb-4">
                                Built on Trust & Reliability
                            </h2>
                            <p className="text-lg text-[#21221C]/70 max-w-2xl mx-auto">
                                Decades of experience serving industrial clients with dedication and integrity
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {trustPoints.map((point, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <Card className="h-full bg-white border border-[#185EAA]/10 hover:border-[#FF7729]/30 hover:shadow-lg transition-all group">
                                        <CardContent className="p-6 flex gap-5">
                                            <div className="w-14 h-14 rounded-xl bg-[#113C6A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF7729] transition-colors">
                                                <point.icon className="w-7 h-7 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-[#113C6A] mb-2">{point.title}</h3>
                                                <p className="text-[#21221C]/70 leading-relaxed">{point.description}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF7] to-[#113C6A] text-[#FFFDF7]" aria-labelledby="partload-vapi-cta">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 id="partload-vapi-cta" className="text-3xl font-bold mb-4 text-[#113C6A]">
                            Get Your Part Load (PTL) Quote Now
                        </h2>
                        <p className="text-[#000]/90 mb-8 text-lg">
                            Connect with our team for instant quotes and pickup scheduling from Vapi, Daman, Silvassa & surrounding zones.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#25D366] text-white rounded hover:bg-[#20BA5C] transition-all group text-sm sm:text-base whitespace-nowrap"
                                aria-label="WhatsApp for PTL Quote"
                            >
                                <MessageCircle className="mr-2 w-4 h-4 flex-shrink-0" />
                                <span>WhatsApp for Instant Rates</span>
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </a>
                            <a
                                href="tel:+919537448444"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base whitespace-nowrap"
                                aria-label="Call BLI for PTL services"
                            >
                                <Phone className="mr-2 w-4 h-4 flex-shrink-0" />
                                <span>Call +91-953 744 8444</span>
                            </a>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all text-sm sm:text-base whitespace-nowrap"
                                aria-label="Request Callback for PTL"
                            >
                                <PhoneCall className="mr-2 w-4 h-4 flex-shrink-0" />
                                <span>Request Callback</span>
                            </Link>
                        </div>

                        {/* Service Availability */}
                        <div className="mt-8 pt-8 border-t border-[#F8FFFF]/20">
                            <div className="flex items-center gap-3 justify-center flex-wrap">
                                <MapPin className="w-5 h-5 text-[#FF7729]" />
                                <span className="text-[#F8FFFF] text-sm md:text-base">
                                    <span className="font-semibold">Daily pickup:</span> Vapi, Daman, Silvassa, Valsad, Umargam, Sarigam & more
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Hidden FAQ Section for SEO */}
            <section className="sr-only" aria-label="Frequently Asked Questions">
                <h2>Frequently Asked Questions about Part Load Services from Vapi</h2>
                <dl>
                    <dt>What is Part Load service from Vapi?</dt>
                    <dd>Part Load (PTL/LTL) service from Vapi allows you to ship smaller consignments (50kg to 5 tons) by sharing truck space, reducing costs by 40-60% compared to full truckload.</dd>

                    <dt>Which areas are covered for pickup?</dt>
                    <dd>We offer daily pickup from Vapi, Daman, Silvassa, Valsad, Umargam, Sarigam, Pardi, Dadra, and surrounding industrial zones.</dd>

                    <dt>What is the transit time from Vapi?</dt>
                    <dd>Transit time is typically 1-3 days depending on the destination. Express options available for urgent shipments.</dd>

                    <dt>What industries do you serve?</dt>
                    <dd>We serve manufacturers, SMBs, B2B e-commerce, packaging & printing, regional wholesalers, and multi-city businesses.</dd>
                </dl>
            </section>
        </PageLayout>
    );
};

export default PartLoadVapi;