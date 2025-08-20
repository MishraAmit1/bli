import { ArrowLeft, ArrowRight, Truck, Shield, Clock, MapPin, Package, CheckCircle, BarChart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";

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

    return (
        <PageLayout>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                {/* Background image with overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: 'url("/lovable-uploads/ftl-hero.jpg")' }}
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
                                Full Truckload (FTL) Services
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-xl text-[#F8FFFF]/90 mb-8"
                            >
                                Dedicated truck solutions for large shipments across India. When your cargo needs
                                exclusive transportation, our FTL service delivers reliability, speed, and security.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group"
                                >
                                    Get FTL Quote
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('ftl-calculator');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all"
                                >
                                    Calculate Shipping Cost
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]">
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
                            Why Choose BLI for Full Truckload?
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

            {/* Features Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        <motion.div variants={itemVariants}>
                            <h2 className="text-3xl font-bold mb-6 text-[#113C6A]">
                                Comprehensive FTL Features
                            </h2>
                            <p className="text-[#21221C]/80 mb-8">
                                Our Full Truckload service is designed to handle your large shipments with
                                maximum efficiency and minimum hassle. From pickup to delivery, we ensure
                                your cargo receives dedicated attention.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-[#FF7729] mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-[#21221C]/80 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="relative">
                            <img
                                src="/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png"
                                alt="FTL Truck Fleet"
                                className="rounded-xl shadow-lg"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-[#FF7729] text-white p-4 rounded-lg shadow-lg">
                                <p className="text-2xl font-bold">500+</p>
                                <p className="text-sm">Dedicated Trucks</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]">
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
                            Simple 4-Step Process
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { step: "1", title: "Book Online", description: "Submit your FTL requirement through our platform or call" },
                                { step: "2", title: "Get Instant Quote", description: "Receive competitive pricing based on route and cargo" },
                                { step: "3", title: "Schedule Pickup", description: "Choose convenient pickup time, we'll handle the rest" },
                                { step: "4", title: "Track & Deliver", description: "Monitor real-time location until safe delivery" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="text-center"
                                >
                                    <div className="w-16 h-16 bg-[#185EAA] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{item.title}</h3>
                                    <p className="text-[#21221C]/70 text-sm">{item.description}</p>
                                    {index < 3 && (
                                        <ArrowRight className="w-6 h-6 text-[#185EAA] mx-auto mt-4 hidden md:block" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Industries Served */}
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
                            Industries We Serve
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((industry, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white p-6 rounded-lg border border-[#185EAA]/20 hover:border-[#185EAA]/40 transition-all"
                                >
                                    <Package className="w-8 h-8 text-[#FF7729] mb-3" />
                                    <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{industry.name}</h3>
                                    <p className="text-[#21221C]/70 text-sm">{industry.description}</p>
                                </motion.div>
                            ))}
                        </div>
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
                            Ready to Ship with Dedicated Trucks?
                        </h2>
                        <p className="text-[#F8FFFF]/90 mb-8 text-lg">
                            Get competitive FTL rates and reliable service for your large shipments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group"
                            >
                                Request FTL Quote
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="tel:+911234567890"
                                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all"
                            >
                                <Users className="mr-2 w-4 h-4" />
                                Talk to Expert
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageLayout>
    );
};

export default FullTruckload;