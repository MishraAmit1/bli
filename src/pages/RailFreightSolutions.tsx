import { ArrowLeft, ArrowRight, Train, Package, BarChart3, Shield, Clock, MapPin, CheckCircle, Users, Truck, Zap, Globe, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";

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

    return (
        <PageLayout>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
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
                                className="text-4xl md:text-5xl font-bold mb-6 text-[#F8FFFF]"
                            >
                                Rail Freight Solutions
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-xl text-[#F8FFFF]/90 mb-8"
                            >
                                Leverage India's extensive railway network for cost-effective, eco-friendly transportation
                                of bulk cargo and containers across long distances with reliable scheduling.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group"
                                >
                                    Get Rail Quote
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('rail-corridors');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all"
                                >
                                    View Rail Routes
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
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
                            Comprehensive Rail Freight Services
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

            {/* Advantages Section */}
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
                            Why Choose Rail Freight?
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {advantages.map((advantage, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white p-6 rounded-xl border border-[#185EAA]/20 text-center hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all"
                                >
                                    <div className="w-16 h-16 bg-[#F8FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <advantage.icon className="w-8 h-8 text-[#185EAA]" />
                                    </div>
                                    <div className="text-2xl font-bold text-[#FF7729] mb-2">{advantage.stat}</div>
                                    <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{advantage.title}</h3>
                                    <p className="text-[#21221C]/70 text-sm">{advantage.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Rail Corridors */}
            <section id="rail-corridors" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]">
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
                            Major Rail Corridors
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {corridors.map((corridor, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white rounded-xl p-6 border border-[#185EAA]/20 hover:border-[#185EAA]/40 transition-all"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="font-bold text-lg text-[#113C6A]">{corridor.route}</h3>
                                        <Train className="w-6 h-6 text-[#FF7729]" />
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
                                </motion.div>
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
                            >
                                Check availability for your route
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Cargo Types */}
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
                            Cargo Types We Handle
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {cargoTypes.map((cargo, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white rounded-xl p-6 border border-[#185EAA]/20 text-center hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all"
                                >
                                    <div className="w-16 h-16 bg-[#F8FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Package className="w-8 h-8 text-[#185EAA]" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{cargo.type}</h3>
                                    <p className="text-[#21221C]/70 text-sm mb-2">{cargo.description}</p>
                                    <p className="text-[#FF7729] font-semibold text-sm">{cargo.capacity}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Process & Benefits */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]">
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
                            <h3 className="text-2xl font-bold mb-6 text-[#113C6A]">
                                Rail Freight Process
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { step: "1", title: "Route Planning", description: "Optimal rail route selection based on cargo and timeline" },
                                    { step: "2", title: "Booking & Documentation", description: "Railway booking and customs documentation" },
                                    { step: "3", title: "First Mile Pickup", description: "Road transport from origin to rail terminal" },
                                    { step: "4", title: "Rail Transit", description: "Secure rail transportation with tracking updates" },
                                    { step: "5", title: "Last Mile Delivery", description: "Road transport from destination terminal to final location" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start bg-white p-4 rounded-lg border border-[#185EAA]/20">
                                        <div className="w-8 h-8 bg-[#185EAA] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#113C6A] mb-1">{item.title}</h4>
                                            <p className="text-[#21221C]/70 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Benefits */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold mb-6 text-[#113C6A]">
                                Service Benefits
                            </h3>
                            <div className="bg-white rounded-xl p-6 border border-[#185EAA]/20">
                                <div className="space-y-3">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-[#FF7729] mt-0.5 mr-3 flex-shrink-0" />
                                            <span className="text-[#21221C]/80 text-sm">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Comparison Section */}
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
                            Rail vs Road Transport Comparison
                        </motion.h2>

                        <motion.div
                            variants={itemVariants}
                            className="bg-white rounded-xl p-8 border border-[#185EAA]/20"
                        >
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-[#185EAA]/20">
                                            <th className="text-left py-4 px-4 font-bold text-[#113C6A]">Factor</th>
                                            <th className="text-center py-4 px-4 font-bold text-[#FF7729]">Rail Freight</th>
                                            <th className="text-center py-4 px-4 font-bold text-[#21221C]/70">Road Transport</th>
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
                                                <td className="py-3 px-4 text-[#21221C]/80">{row.factor}</td>
                                                <td className="py-3 px-4 text-center font-semibold text-[#FF7729]">{row.rail}</td>
                                                <td className="py-3 px-4 text-center text-[#21221C]/70">{row.road}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Case Study */}
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
                            Success Story
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
                                        Steel Manufacturing Giant
                                    </h3>
                                    <p className="text-[#F8FFFF]/90 mb-6">
                                        How we helped a major steel manufacturer reduce transportation costs by 35%
                                        while improving delivery reliability through dedicated rail freight corridors.
                                    </p>
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div>
                                            <p className="text-3xl font-bold text-[#FF7729]">35%</p>
                                            <p className="text-sm text-[#F8FFFF]/80">Cost Reduction</p>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold text-[#FF7729]">50K</p>
                                            <p className="text-sm text-[#F8FFFF]/80">Tons/Month</p>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold text-[#FF7729]">98%</p>
                                            <p className="text-sm text-[#F8FFFF]/80">On-Time Rate</p>
                                        </div>
                                    </div>
                                    <Link
                                        to="/case-studies/steel-manufacturing"
                                        className="inline-flex items-center text-[#F8FFFF] hover:text-[#FF7729] transition-colors"
                                    >
                                        Read Full Case Study
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="relative">
                                    <img
                                        src="/lovable-uploads/d5ce901e-2ce0-4f2a-bce1-f0ca5d6192df.png"
                                        alt="Rail Freight Operations"
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
                            Ready to Switch to Rail Freight?
                        </h2>
                        <p className="text-[#F8FFFF]/90 mb-8 text-lg">
                            Reduce costs, lower carbon footprint, and improve reliability with our rail freight solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group"
                            >
                                Get Rail Freight Quote
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="tel:+911234567890"
                                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all"
                            >
                                <Users className="mr-2 w-4 h-4" />
                                Speak with Rail Expert
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 pt-12 border-t border-[#F8FFFF]/20">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div>
                                    <p className="text-3xl font-bold text-[#FF7729]">7000+</p>
                                    <p className="text-[#F8FFFF]/80 mt-1">Railway Stations</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-[#FF7729]">40%</p>
                                    <p className="text-[#F8FFFF]/80 mt-1">Cost Savings</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-[#FF7729]">2000+</p>
                                    <p className="text-[#F8FFFF]/80 mt-1">Tons Capacity</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-[#FF7729]">95%</p>
                                    <p className="text-[#F8FFFF]/80 mt-1">On-Time Performance</p>
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