import { ArrowLeft, ArrowRight, Warehouse, TrendingUp, Settings, BarChart3, Package, Truck, Users, Shield, CheckCircle, Globe, Zap, Database, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";

const ThirdPartyLogistics = () => {
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
            title: "Warehousing & Storage",
            description: "Strategic storage locations with advanced inventory management systems"
        },
        {
            icon: Truck,
            title: "Transportation Management",
            description: "End-to-end transportation planning and execution across all modes"
        },
        {
            icon: Package,
            title: "Order Fulfillment",
            description: "Pick, pack, and ship services with same-day processing capabilities"
        },
        {
            icon: BarChart3,
            title: "Supply Chain Analytics",
            description: "Data-driven insights to optimize your supply chain performance"
        },
        {
            icon: Settings,
            title: "Value-Added Services",
            description: "Kitting, labeling, quality checks, and custom packaging solutions"
        },
        {
            icon: Globe,
            title: "Returns Management",
            description: "Seamless reverse logistics with inspection and restocking services"
        }
    ];

    const benefits = [
        {
            title: "Reduce Costs by 25%",
            description: "Leverage our economies of scale and optimized operations",
            icon: TrendingUp
        },
        {
            title: "Scale On-Demand",
            description: "Flexible capacity to handle seasonal peaks and business growth",
            icon: Zap
        },
        {
            title: "Focus on Core Business",
            description: "Let us handle logistics while you concentrate on growth",
            icon: Target
        },
        {
            title: "Technology Integration",
            description: "Seamless API integration with your existing systems",
            icon: Database
        }
    ];

    const industries = [
        "E-commerce & Retail",
        "FMCG & Consumer Goods",
        "Electronics & Technology",
        "Fashion & Apparel",
        "Healthcare & Pharma",
        "Automotive Parts"
    ];

    const stats = [
        { value: "15M+", label: "Sq. ft. Warehouse Space" },
        { value: "500+", label: "Enterprise Clients" },
        { value: "99.9%", label: "Inventory Accuracy" },
        { value: "24hr", label: "Order Processing" }
    ];

    return (
        <PageLayout>
            {/* Hero Section */}

            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                {/* Background image with overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: 'url("/lovable-uploads/3pl-hero.jpg")' }}
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
                                3PL Solutions
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-xl text-[#F8FFFF]/90 mb-8"
                            >
                                Complete supply chain management from warehousing to last-mile delivery.
                                Let us be your strategic logistics partner for seamless operations.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group"
                                >
                                    Get Custom Solution
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('3pl-services');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all"
                                >
                                    Explore Our Services
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Stats Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="text-center"
                            >
                                <p className="text-3xl md:text-4xl font-bold text-[#FF7729]">{stat.value}</p>
                                <p className="text-[#21221C]/70 mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="3pl-services" className="py-16 px-4 sm:px-6 lg:px-8">
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
                            Comprehensive 3PL Services
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <Card className="h-full bg-white border border-[#185EAA]/20 hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all hover:-translate-y-1">
                                        <CardContent className="p-6">
                                            <div className="w-14 h-14 bg-[#F8FFFF] rounded-lg flex items-center justify-center mb-4">
                                                <service.icon className="w-7 h-7 text-[#185EAA]" />
                                            </div>
                                            <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{service.title}</h3>
                                            <p className="text-[#21221C]/70 text-sm">{service.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
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
                            Why Outsource to BLI 3PL?
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-start bg-white p-6 rounded-xl border border-[#185EAA]/20"
                                >
                                    <div className="w-12 h-12 bg-[#F8FFFF] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <benefit.icon className="w-6 h-6 text-[#FF7729]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2 text-[#113C6A]">{benefit.title}</h3>
                                        <p className="text-[#21221C]/80">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
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
                            Our 3PL Process
                        </motion.h2>

                        <div className="relative">
                            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#185EAA]/20 -translate-y-1/2 hidden lg:block" />

                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Consultation",
                                        description: "Understanding your unique supply chain requirements and challenges"
                                    },
                                    {
                                        step: "2",
                                        title: "Solution Design",
                                        description: "Creating customized 3PL strategy aligned with your business goals"
                                    },
                                    {
                                        step: "3",
                                        title: "Implementation",
                                        description: "Seamless integration with dedicated team and technology setup"
                                    },
                                    {
                                        step: "4",
                                        title: "Optimization",
                                        description: "Continuous improvement through data analytics and feedback"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="relative bg-white p-6 rounded-xl border border-[#185EAA]/20 text-center"
                                    >
                                        <div className="w-12 h-12 bg-[#185EAA] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                                            {item.step}
                                        </div>
                                        <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{item.title}</h3>
                                        <p className="text-[#21221C]/70 text-sm">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Industries & Technology */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                    >
                        {/* Industries */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold mb-6 text-[#113C6A]">Industries We Serve</h3>
                            <div className="bg-white rounded-xl p-6 border border-[#185EAA]/20">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {industries.map((industry, index) => (
                                        <div key={index} className="flex items-center">
                                            <CheckCircle className="w-5 h-5 text-[#FF7729] mr-3 flex-shrink-0" />
                                            <span className="text-[#21221C]/80">{industry}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Technology Stack */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold mb-6 text-[#113C6A]">Technology Stack</h3>
                            <div className="bg-white rounded-xl p-6 border border-[#185EAA]/20">
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <Shield className="w-5 h-5 text-[#185EAA] mt-0.5 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-[#113C6A]">WMS Integration</h4>
                                            <p className="text-[#21221C]/70 text-sm">Advanced warehouse management system</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Shield className="w-5 h-5 text-[#185EAA] mt-0.5 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-[#113C6A]">Real-time Tracking</h4>
                                            <p className="text-[#21221C]/70 text-sm">GPS-enabled fleet with live updates</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Shield className="w-5 h-5 text-[#185EAA] mt-0.5 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-[#113C6A]">API Integration</h4>
                                            <p className="text-[#21221C]/70 text-sm">Seamless connection with your systems</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Shield className="w-5 h-5 text-[#185EAA] mt-0.5 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-[#113C6A]">Analytics Dashboard</h4>
                                            <p className="text-[#21221C]/70 text-sm">Comprehensive reporting and insights</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Case Study Preview */}
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
                            Success Stories
                        </motion.h2>

                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-r from-[#113C6A] to-[#185EAA] rounded-xl p-8 text-white"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="inline-block px-3 py-1 bg-[#FF7729] rounded-full text-sm font-medium mb-4">
                                        Case Study
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">
                                        Leading E-commerce Platform
                                    </h3>
                                    <p className="text-[#F8FFFF]/90 mb-6">
                                        How we helped a major e-commerce player reduce logistics costs by 30% while
                                        improving delivery speed by 2 days through our integrated 3PL solution.
                                    </p>
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div>
                                            <p className="text-3xl font-bold text-[#FF7729]">30%</p>
                                            <p className="text-sm text-[#F8FFFF]/80">Cost Reduction</p>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold text-[#FF7729]">2 Days</p>
                                            <p className="text-sm text-[#F8FFFF]/80">Faster Delivery</p>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold text-[#FF7729]">99.5%</p>
                                            <p className="text-sm text-[#F8FFFF]/80">Order Accuracy</p>
                                        </div>
                                    </div>
                                    <Link
                                        to="/case-studies/ecommerce"
                                        className="inline-flex items-center text-[#F8FFFF] hover:text-[#FF7729] transition-colors"
                                    >
                                        Read Full Case Study
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="relative">
                                    <img
                                        src="/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png"
                                        alt="3PL Warehouse Operations"
                                        className="rounded-lg shadow-xl"
                                    />
                                </div>
                            </div>
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
                            Transform Your Supply Chain Today
                        </h2>
                        <p className="text-[#F8FFFF]/90 mb-8 text-lg">
                            Partner with BLI for end-to-end 3PL solutions that drive efficiency and growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group"
                            >
                                Schedule Consultation
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="tel:+911234567890"
                                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all"
                            >
                                <Users className="mr-2 w-4 h-4" />
                                Talk to 3PL Expert
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageLayout>
    );
};

export default ThirdPartyLogistics;