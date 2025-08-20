import { ArrowLeft, ArrowRight, Package, PiggyBank, Network, Clock, Shield, CheckCircle, TrendingUp, Boxes } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";

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

    return (
        <PageLayout>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
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
                                className="text-4xl md:text-5xl font-bold mb-6 text-[#F8FFFF]"
                            >
                                Part Load (LTL) Services
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-xl text-[#F8FFFF]/90 mb-8"
                            >
                                Smart shipping solution for smaller consignments. Share truck space with other
                                shipments and save costs while maintaining reliability and speed.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group"
                                >
                                    Get LTL Quote
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('ltl-benefits');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all"
                                >
                                    Part Load Services
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="ltl-benefits" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Why Choose BLI Part Load Services?
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <Card className="h-full bg-white border border-[#185EAA]/20 hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all">
                                        <CardContent className="p-6">
                                            <div className="w-12 h-12 bg-[#F8FFFF] rounded-lg flex items-center justify-center mb-4">
                                                <benefit.icon className="w-6 h-6 text-[#185EAA]" />
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

            {/* How It Works */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            How Part Load Shipping Works
                        </motion.h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <motion.div
                                variants={itemVariants}
                                className="bg-white p-6 rounded-xl border border-[#185EAA]/20"
                            >
                                <div className="text-4xl font-bold text-[#FF7729] mb-4">01</div>
                                <h3 className="font-bold text-xl mb-3 text-[#113C6A]">Consolidation</h3>
                                <p className="text-[#21221C]/80">
                                    Your shipment is collected and consolidated with other part loads heading
                                    in the same direction at our nearest hub.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="bg-white p-6 rounded-xl border border-[#185EAA]/20"
                            >
                                <div className="text-4xl font-bold text-[#FF7729] mb-4">02</div>
                                <h3 className="font-bold text-xl mb-3 text-[#113C6A]">Transportation</h3>
                                <p className="text-[#21221C]/80">
                                    Consolidated cargo travels via our optimized routes with real-time tracking
                                    and regular status updates.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="bg-white p-6 rounded-xl border border-[#185EAA]/20"
                            >
                                <div className="text-4xl font-bold text-[#FF7729] mb-4">03</div>
                                <h3 className="font-bold text-xl mb-3 text-[#113C6A]">Distribution</h3>
                                <p className="text-[#21221C]/80">
                                    At destination hub, shipments are segregated and delivered to final
                                    destinations via our last-mile network.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features & Ideal For Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]">
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
                            <h3 className="text-2xl font-bold mb-6 text-[#113C6A]">
                                Service Features
                            </h3>
                            <div className="bg-white rounded-xl p-6 border border-[#185EAA]/20">
                                <div className="space-y-3">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-[#FF7729] mt-0.5 mr-3 flex-shrink-0" />
                                            <span className="text-[#21221C]/80 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Ideal For */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold mb-6 text-[#113C6A]">
                                Ideal For
                            </h3>
                            <div className="space-y-4">
                                {idealFor.map((item, index) => (
                                    <div key={index} className="bg-white rounded-lg p-4 border border-[#185EAA]/20 hover:border-[#185EAA]/40 transition-all">
                                        <div className="flex items-start">
                                            <div className="w-10 h-10 bg-[#F8FFFF] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                                <item.icon className="w-5 h-5 text-[#185EAA]" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#113C6A] mb-1">{item.title}</h4>
                                                <p className="text-[#21221C]/70 text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Popular Routes */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
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
                                            <ArrowRight className="w-4 h-4 mx-2 text-[#FF7729]" />
                                            <span className="text-[#113C6A] font-medium">{route.to}</span>
                                        </div>
                                        <div className="flex items-center justify-center text-sm text-[#21221C]/70">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {route.time}
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

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#113C6A]">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-4 text-[#F8FFFF]">
                            Ship Smarter with Part Load
                        </h2>
                        <p className="text-[#F8FFFF]/90 mb-8 text-lg">
                            Save up to 60% on shipping costs without compromising on service quality.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group"
                            >
                                Get Instant Quote
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/track-shipment"
                                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all"
                            >
                                <Package className="mr-2 w-4 h-4" />
                                Track Your Shipment
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 pt-12 border-t border-[#F8FFFF]/20">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div>
                                    <p className="text-4xl font-bold text-[#FF7729]">50K+</p>
                                    <p className="text-[#F8FFFF]/80 mt-1">Monthly Part Load Shipments</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-[#FF7729]">98%</p>
                                    <p className="text-[#F8FFFF]/80 mt-1">On-Time Delivery Rate</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-[#FF7729]">₹12/kg</p>
                                    <p className="text-[#F8FFFF]/80 mt-1">Starting Price</p>
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