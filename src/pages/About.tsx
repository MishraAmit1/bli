import { ArrowLeft, CheckCircle, ArrowRight, Truck, Users, Globe, Award, Package, Clock, Shield, Target, MapPin, Zap, Headphones, Heart, TrendingUp, Calendar } from 'lucide-react';
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

      {/* Who We Are Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-20"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-8 text-[#113C6A] text-center"
            >
              Who We Are
            </motion.h2>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
              <div>
                <p className="text-[#21221C]/80 leading-relaxed mb-6">
                  For over 25 years, Bansal Logistics of India (BLI) has been a trusted partner in the movement of goods across the country. Built on reliability, speed, and customer-centric service, we specialize in Full Truckload (FTL), Part Load, 3PL, and warehousing solutions, connecting industries with their markets through a robust logistics network.
                </p>
                <p className="text-[#21221C]/80 leading-relaxed mb-6">
                  What began as a regional transport service has today grown into a pan-India logistics partner, serving diverse industries such as Packaging & Plastics, Steel & Heavy Material, Consumer Durables & Electronics, Auto Parts, FMCG, Retail, and eCommerce.
                </p>
                <p className="text-[#21221C]/80 leading-relaxed">
                  With 15+ major hubs, a verified fleet of 500+ vehicles, and a dedicated 24/7 team, we ensure goods move faster, safer, and smarter — every time.
                </p>
              </div>
              <div className="relative flex flex-col justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO07XvuDlBGoDScqaVyQpK78SRr4ZbDP4O3X8U5CBzy9aNLmfb&s"
                  alt="BLI Logistics Operations"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#FF7729] text-white p-4 rounded-lg shadow-lg">
                  <p className="text-2xl font-bold">25+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Our Journey Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-20"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-12 text-[#113C6A] text-center"
            >
              Our Journey
            </motion.h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-[#185EAA]/20 transform md:translate-x-[-50%] hidden sm:block"></div>

              <div className="space-y-12">
                {[
                  {
                    year: "1999",
                    title: "Humble Beginnings",
                    description: "Operations began as a regional logistics provider in Western India, offering dependable freight movement for lightweight goods and plastic products."
                  },
                  {
                    year: "2005",
                    title: "Foundation of Bansal Logistics of India",
                    description: "Incorporated officially as Bansal Logistics of India (BLI), creating a formal identity and expanding routes across Gujarat and Maharashtra."
                  },
                  {
                    year: "2010",
                    title: "Building Western India Stronghold",
                    description: "Established major hubs in Vapi, Surat, Ahmedabad, and Mumbai, becoming a go-to logistics partner for manufacturers and distributors."
                  },
                  {
                    year: "2015",
                    title: "Expansion into North & Central India",
                    description: "Extended reach into Delhi NCR, UP Border, and Jammu, while simultaneously scaling into Nagpur and Raipur, boosting central connectivity."
                  },
                  {
                    year: "2018",
                    title: "Pan-India Network",
                    description: "Operations expanded into South & East India with hubs in Bangalore, Chennai, Hyderabad, Kolkata, and Ranchi, offering true nationwide coverage."
                  },
                  {
                    year: "2020",
                    title: "Scaling Fleet & Infrastructure",
                    description: "Built access to 500+ verified vehicles across categories: Tata Ace, Pickups, Bolero, 14/17/19/22/32-ft trucks, trailers, and heavy vehicles. Enhanced warehousing & 3PL services to meet evolving customer needs."
                  },
                  {
                    year: "2023",
                    title: "Technology-Driven Operations",
                    description: "Integrated technology for faster vehicle turnaround (2–4 hours), warehouse management, real-time tracking support, and stronger coordination — making BLI a digitally enabled logistics partner."
                  },
                  {
                    year: "2025",
                    title: "Launch of BLI Rapid",
                    description: "Evolving with the times, we introduced BLI Rapid — a new-age digital logistics identity designed for speed, scale, and reliability, built on the strong legacy of BLI."
                  }
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-[#FF7729] rounded-full transform translate-x-[-50%] z-10 hidden sm:block"></div>

                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} pl-10 sm:pl-0`}>
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-[#185EAA]/10 hover:shadow-md transition-all">
                        <div className="flex items-center mb-3">
                          <Calendar className="w-5 h-5 text-[#FF7729] mr-2" />
                          <span className="text-lg font-bold text-[#FF7729]">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-[#113C6A]">{milestone.title}</h3>
                        <p className="text-[#21221C]/70">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Mobile timeline dot and line */}
                    <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center sm:hidden">
                      <div className="w-4 h-4 bg-[#FF7729] rounded-full z-10"></div>
                      <div className="w-0.5 h-full bg-[#185EAA]/20 -mt-2"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              variants={itemVariants}
              className="text-center mt-12 p-6 bg-[#F8FFFF] rounded-lg border border-[#185EAA]/10"
            >
              <p className="text-xl italic text-[#113C6A]">
                "Big Enough to Move the World. Small Enough to Care."
              </p>
            </motion.div>
          </motion.div>

          {/* Our Leadership */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-20"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-12 text-[#113C6A] text-center"
            >
              Our Leadership
            </motion.h2>

            <motion.div variants={itemVariants}>
              <p className="text-center text-[#21221C]/80 mb-12 max-w-3xl mx-auto">
                At the core of BLI's success lies a leadership that blends experience, vision, and innovation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-[#185EAA]/10 hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="w-32 h-32 bg-[#185EAA]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-16 h-16 text-[#185EAA]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#113C6A] text-center sm:text-left">Mr. [Founder's Name]</h3>
                      <p className="text-[#FF7729] font-medium mb-4 text-center sm:text-left">Founder & Chairman</p>
                      <p className="text-[#21221C]/70">
                        With decades of experience in logistics and a strong entrepreneurial spirit, he laid the foundation of BLI in the late 1990s. His vision of building a reliable logistics brand for India continues to guide the company.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-[#185EAA]/10 hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="w-32 h-32 bg-[#185EAA]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-16 h-16 text-[#185EAA]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#113C6A] text-center sm:text-left">Mr. Prince Bansal</h3>
                      <p className="text-[#FF7729] font-medium mb-4 text-center sm:text-left">Director, Strategy & Growth</p>
                      <p className="text-[#21221C]/70">
                        Representing the new generation of leadership, he drives BLI's transformation into a future-ready, tech-driven logistics partner. With a focus on digital adoption, customer experience, and pan-India scalability, he spearheads the company's growth through BLI Rapid and beyond.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-20"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-12 text-[#113C6A] text-center"
            >
              Why Choose Us
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Award,
                  title: "25+ Years Legacy",
                  description: "Proven expertise in logistics and supply chain."
                },
                {
                  icon: Globe,
                  title: "Pan-India Reach",
                  description: "15+ hubs and a presence in all major industrial belts."
                },
                {
                  icon: Truck,
                  title: "500+ Verified Fleet",
                  description: "Access to every vehicle type, from small cargo to heavy haulage."
                },
                {
                  icon: Package,
                  title: "Industry Expertise",
                  description: "Serving plastic, steel, FMCG, eCommerce, and more."
                },
                {
                  icon: Clock,
                  title: "24/7 Operations",
                  description: "Always available, ensuring shipments move without delay."
                },
                {
                  icon: Zap,
                  title: "Technology Integration",
                  description: "Faster vehicle turnaround, 3PL readiness, and real-time visibility."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg shadow-sm border border-[#185EAA]/10 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-[#F8FFFF] rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#FF7729]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{item.title}</h3>
                  <p className="text-[#21221C]/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission, Vision & Values */}
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

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-[#F8FFFF] rounded-xl p-12 border border-[#185EAA]/20"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#113C6A]">Partner with BLI Today</h2>
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
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;