import { ArrowLeft, CheckCircle, ArrowRight, Truck, Users, Globe, Award, Package, Clock, Shield, Target, MapPin, Zap, Headphones, Heart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Scroll to top on mount
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

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-[#113C6A] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#113C6A]/90 to-[#185EAA]/80" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-[#F8FFFF]/80 hover:text-[#F8FFFF] mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-[#F8FFFF]"
            >
              About BLI Rapid
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold mb-4 text-[#F8FFFF]/90"
            >
              Built on Legacy. Designed for the Future.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-[#F8FFFF]/90 max-w-3xl"
            >
              For more than 25 years, Bansal Logistics of India (BLI) has been moving businesses forward.
              With BLI Rapid as our digital identity, we combine our trusted legacy with a future-ready
              approach — delivering scalable, dependable, and responsive logistics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group"
              >
                Partner with Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">

          {/* Mission, Vision & Values - All in One Row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-20"
          >
            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div variants={itemVariants} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Target className="w-10 h-10 text-[#FF7729] mr-3" />
                  <h2 className="text-3xl font-bold text-[#113C6A]">Our Mission</h2>
                </div>
                <p className="text-[#21221C]/80 leading-relaxed">
                  To simplify the movement of goods and empower business growth through reliable,
                  scalable, and customer-first logistics solutions.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Globe className="w-10 h-10 text-[#185EAA] mr-3" />
                  <h2 className="text-3xl font-bold text-[#113C6A]">Our Vision</h2>
                </div>
                <p className="text-[#21221C]/80 leading-relaxed">
                  To be recognized as India's most trusted logistics partner, delivering seamless,
                  dependable supply chain solutions nationwide.
                </p>
              </motion.div>
            </div>

            {/* Values */}
            <motion.div variants={itemVariants}>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-[#113C6A]">Our Values</h2>
                <p className="text-[#21221C]/70 max-w-2xl mx-auto">
                  The principles that guide everything we do, built on decades of industry experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Reliability",
                    description: "Delivering on every promise, every time.",
                    color: "text-[#FF7729]"
                  },
                  {
                    icon: Zap,
                    title: "Agility",
                    description: "Quick responses and adaptive solutions.",
                    color: "text-[#185EAA]"
                  },
                  {
                    icon: Heart,
                    title: "Trust",
                    description: "Decades of consistent, transparent service.",
                    color: "text-[#FF7729]"
                  },
                  {
                    icon: Users,
                    title: "Service First",
                    description: "Client success at the heart of all we do.",
                    color: "text-[#185EAA]"
                  }
                ].map((value, i) => (
                  <div key={i} className="text-center p-6 bg-[#F8FFFF] rounded-lg border border-[#185EAA]/10 hover:shadow-md transition-all">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className={`w-8 h-8 ${value.color}`} />
                    </div>
                    <h3 className={`font-bold text-lg mb-2 ${value.color}`}>{value.title}</h3>
                    <p className="text-[#21221C]/70 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Scale & Capabilities - Stats Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-white rounded-xl border border-[#185EAA]/20 shadow-sm p-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-[#113C6A] mb-4">Our Scale & Capabilities</h2>
                <p className="text-[#21221C]/70 max-w-2xl mx-auto">
                  Comprehensive logistics infrastructure designed to scale with your business needs
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { number: "500+", label: "Verified Vehicles", description: "From Tata Ace to heavy trailers" },
                  { number: "15+", label: "Key Hubs Nationwide", description: "Strategic locations across India" },
                  { number: "4", label: "Multi-Mode Services", description: "FTL, PTL, Warehousing, 3PL" },
                  { number: "24/7", label: "Operations", description: "Rail & Air connectivity" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-[#FF7729] mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-[#113C6A] mb-1">{stat.label}</div>
                    <p className="text-sm text-[#21221C]/70">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-[#F8FFFF] to-[#185EAA]/5 rounded-xl p-8 border border-[#185EAA]/20">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-[#185EAA] mr-3" />
                <h3 className="text-2xl font-bold text-[#113C6A]">Pan-India Coverage</h3>
              </div>
              <p className="text-[#21221C]/70 text-center">Strategic hubs for optimal supply chain efficiency</p>
            </div>
          </motion.div>

          {/* Why Businesses Trust Us - List Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#113C6A]">Why Businesses Trust Us</h2>
              <p className="text-[#21221C]/70 max-w-2xl mx-auto">
                The foundation of trust built through consistent performance and unwavering commitment
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Award,
                  title: "25+ Years of Proven Legacy",
                  description: "Built on decades of consistent service and industry expertise"
                },
                {
                  icon: Clock,
                  title: "Pan-India Coverage with 2–4 hr turnaround",
                  description: "Rapid response times across our extensive network"
                },
                {
                  icon: TrendingUp,
                  title: "Scalable Solutions",
                  description: "For startups, SMEs, and enterprises of all sizes"
                },
                {
                  icon: Headphones,
                  title: "24/7 Customer Support",
                  description: "Proactive updates and continuous assistance"
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start p-6 bg-gradient-to-r from-white to-[#F8FFFF] rounded-lg border border-[#185EAA]/10 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-[#185EAA]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#185EAA]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{item.title}</h3>
                    <p className="text-[#21221C]/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 bg-[#113C6A] rounded-xl p-12 text-center"
          >
            <blockquote className="text-xl md:text-2xl text-[#F8FFFF] italic mb-6">
              "At BLI, we don't just transport goods — we carry responsibility.
              Whether it's fragile electronics, FMCG consignments, or heavy industrial cargo,
              we ensure safe, timely, and cost-efficient delivery that fuels your growth."
            </blockquote>
            <p className="text-lg text-[#F8FFFF]/80 font-semibold">
              Big Enough to Move the World. Small Enough to Care.
            </p>
          </motion.div>

          {/* How We Deliver - Process Steps */}
          {/* How We Deliver - Enhanced Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#113C6A]">How We Deliver</h2>
              <p className="text-[#21221C]/70 max-w-2xl mx-auto">
                Our proven 5-step process ensures seamless logistics from start to finish
              </p>
            </div>

            <div className="relative">
              {/* Progress Line */}
              {/* <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-[#FF7729] via-[#185EAA] to-[#FF7729] rounded-full opacity-30 hidden md:block"></div> */}

              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: "Planning",
                    description: "Comprehensive logistics planning and route optimization for maximum efficiency",
                    icon: Target,
                    color: "from-[#FF7729] to-[#e56721]"
                  },
                  {
                    step: 2,
                    title: "Route & Vehicle Allocation",
                    description: "Smart allocation of optimal routes and appropriate vehicles for your cargo",
                    icon: MapPin,
                    color: "from-[#185EAA] to-[#113C6A]"
                  },
                  {
                    step: 3,
                    title: "Loading & Dispatch",
                    description: "Careful loading procedures and timely dispatch with proper documentation",
                    icon: Package,
                    color: "from-[#FF7729] to-[#e56721]"
                  },
                  {
                    step: 4,
                    title: "In-Transit Monitoring",
                    description: "Real-time tracking and monitoring throughout the journey",
                    icon: Globe,
                    color: "from-[#185EAA] to-[#113C6A]"
                  },
                  {
                    step: 5,
                    title: "Delivery & Handover",
                    description: "Safe delivery with proper documentation and customer confirmation",
                    icon: CheckCircle,
                    color: "from-[#FF7729] to-[#e56721]"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="relative flex items-center gap-6 p-6 bg-white rounded-xl border border-[#185EAA]/10 hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all duration-300 group"
                  >
                    {/* Step Number Circle with Gradient */}
                    <motion.div
                      className={`relative w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg`}
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <span className="relative z-10">{item.step}</span>

                      {/* Pulse Animation */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-white/20"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.4
                        }}
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <item.icon className="w-6 h-6 text-[#185EAA] mr-3 group-hover:text-[#FF7729] transition-colors duration-300" />
                        <h3 className="font-bold text-xl text-[#113C6A] group-hover:text-[#185EAA] transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[#21221C]/70 leading-relaxed group-hover:text-[#21221C]/90 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow for next step */}
                    {i < 4 && (
                      <motion.div
                        className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block"
                        animate={{
                          y: [0, 5, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      >
                        <ArrowRight className="w-6 h-6 text-[#185EAA]/40 rotate-90" />
                      </motion.div>
                    )}

                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F8FFFF]/0 to-[#185EAA]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>

              {/* Bottom Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-12 text-center p-6 bg-gradient-to-r from-[#F8FFFF] to-[#185EAA]/5 rounded-xl border border-[#185EAA]/20"
              >
                <div className="flex items-center justify-center mb-3">
                  <Truck className="w-8 h-8 text-[#FF7729] mr-3" />
                  <h3 className="text-xl font-bold text-[#113C6A]">End-to-End Excellence</h3>
                </div>
                <p className="text-[#21221C]/70">
                  From planning to delivery, every step is monitored and optimized for your success
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Facts - Minimal Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#113C6A]">Quick Facts</h2>
              <p className="text-[#21221C]/70 max-w-2xl mx-auto">
                Numbers that speak to our scale, reliability, and commitment to excellence
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#F8FFFF] to-white rounded-xl p-8 border border-[#185EAA]/20">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                {[
                  { value: "25+", label: "Years Logistics Excellence" },
                  { value: "15+", label: "Hubs Across India" },
                  { value: "500+", label: "Vehicles Verified Fleet" },
                  { value: "4 Hr", label: "Fast Turnaround" },
                  { value: "1", label: "3PL-Ready Warehousing" },
                  { value: "24/7", label: "Operations Pan-India" }
                ].map((fact, i) => (
                  <div key={i} className="p-4">
                    <div className="text-3xl font-bold text-[#FF7729] mb-2">{fact.value}</div>
                    <div className="text-sm text-[#21221C]/70 leading-tight">{fact.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-[#21221C]/70 mt-6 italic">
              Trusted by thousands of businesses across India
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-[#F8FFFF] rounded-xl p-12 border border-[#185EAA]/20"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#113C6A]">Partner with BLI Rapid Today</h2>
            <p className="text-[#21221C]/80 mb-8 max-w-2xl mx-auto">
              Experience logistics that are fast, scalable, and built on trust.
              Join thousands of businesses who rely on our proven expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 bg-[#185EAA] text-white rounded hover:bg-[#113C6A] transition-all group"
              >
                View Our Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#21221C]/70">
              <div className="flex items-center">
                <Headphones className="w-4 h-4 mr-2 text-[#185EAA]" />
                24/7 Support
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-[#FF7729]" />
                Quick Response
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;