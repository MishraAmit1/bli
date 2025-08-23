import { ArrowLeft, ArrowRight, Headset, Clock, MessageSquare, Phone, Monitor, Users, CheckCircle, Zap, Shield, Globe, AlertTriangle, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

const RealTimeSupport = () => {
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

    const supportChannels = [
        {
            icon: Phone,
            title: "24/7 Phone Support",
            description: "Dedicated helpline with instant human assistance for urgent queries"
        },
        {
            icon: MessageSquare,
            title: "Live Chat Support",
            description: "Real-time chat assistance through website and mobile app"
        },
        {
            icon: Monitor,
            title: "Shipment Tracking",
            description: "Live GPS tracking with proactive alerts and status updates"
        },
        {
            icon: Headset,
            title: "Dedicated Account Manager",
            description: "Personal relationship manager for enterprise clients"
        },
        {
            icon: AlertTriangle,
            title: "Emergency Response",
            description: "Immediate escalation and resolution for critical issues"
        },
        {
            icon: Globe,
            title: "Multi-Language Support",
            description: "Support in Hindi, English, and regional languages"
        }
    ];

    const features = [
        {
            title: "Instant Response",
            description: "Average response time under 30 seconds",
            icon: Zap,
            stat: "<30 Seconds"
        },
        {
            title: "24/7 Availability",
            description: "Round-the-clock support, 365 days a year",
            icon: Clock,
            stat: "24/7/365"
        },
        {
            title: "Expert Team",
            description: "Trained logistics professionals",
            icon: Users,
            stat: "100+ Experts"
        },
        {
            title: "Issue Resolution",
            description: "First-call resolution rate",
            icon: Shield,
            stat: "95% FCR"
        }
    ];

    const supportLevels = [
        {
            level: "Standard Support",
            description: "For regular shipments and general queries",
            features: [
                "Phone and email support",
                "Business hours availability",
                "Standard response time",
                "Basic tracking updates"
            ],
            responseTime: "2-4 hours",
            availability: "9 AM - 6 PM"
        },
        {
            level: "Priority Support",
            description: "For time-sensitive and high-value shipments",
            features: [
                "24/7 phone support",
                "Live chat assistance",
                "Priority queue handling",
                "Proactive notifications"
            ],
            responseTime: "30 minutes",
            availability: "24/7",
            highlighted: true
        },
        {
            level: "Enterprise Support",
            description: "For large volume customers and partners",
            features: [
                "Dedicated account manager",
                "Direct escalation line",
                "Custom reporting",
                "SLA guarantees"
            ],
            responseTime: "15 minutes",
            availability: "24/7"
        }
    ];

    const trackingFeatures = [
        "Real-time GPS location updates",
        "Estimated delivery time calculations",
        "Automatic delay notifications",
        "Proof of delivery with signatures",
        "Temperature monitoring (for sensitive cargo)",
        "Route optimization alerts",
        "Delivery attempt notifications",
        "Custom milestone tracking"
    ];

    const contactMethods = [
        {
            method: "Emergency Hotline",
            contact: "+91-1800-123-4567",
            description: "For urgent shipment issues",
            availability: "24/7"
        },
        {
            method: "Customer Care",
            contact: "+91-1800-765-4321",
            description: "For general inquiries",
            availability: "24/7"
        },
        {
            method: "WhatsApp Support",
            contact: "+91-98765-43210",
            description: "Quick updates and queries",
            availability: "24/7"
        },
        {
            method: "Email Support",
            contact: "support@blilogistics.com",
            description: "Detailed queries and documentation",
            availability: "24/7"
        }
    ];

    const languages = [
        "English", "Hindi", "Tamil", "Telugu", "Kannada", "Malayalam",
        "Marathi", "Gujarati", "Bengali", "Punjabi"
    ];

    // Structured Data for Real-Time Support Service
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CustomerService",
        "name": "Real-Time Support Services",
        "description": "24/7 logistics support with 30-second response time, 95% first-call resolution, live GPS tracking, and multi-language assistance across 10+ Indian languages.",
        "provider": {
            "@type": "Organization",
            "name": "BLI - Bansal Logistics of India",
            "url": "https://blirapid.com"
        },
        "areaServed": {
            "@type": "Country",
            "name": "India"
        },
        "availableLanguage": [
            "English", "Hindi", "Tamil", "Telugu", "Kannada", "Malayalam",
            "Marathi", "Gujarati", "Bengali", "Punjabi"
        ],
        "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "+91-1800-123-4567",
                "contactType": "Emergency Support",
                "availableLanguage": ["English", "Hindi"]
            },
            {
                "@type": "ContactPoint",
                "telephone": "+91-1800-765-4321",
                "contactType": "Customer Service",
                "availableLanguage": ["English", "Hindi"]
            }
        ]
    };

    // FAQ Schema for Support
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How can I track my shipment in real-time?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Use your tracking number on our website or mobile app for live GPS updates with real-time location, estimated delivery time, and proactive notifications."
                }
            },
            {
                "@type": "Question",
                "name": "What is the response time for support?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our average response time is under 30 seconds with 95% first-call resolution rate. Priority support offers 30-minute response, Enterprise gets 15-minute response."
                }
            },
            {
                "@type": "Question",
                "name": "Is support available 24/7?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our support is available 24/7/365 through phone, live chat, WhatsApp, and email with 100+ trained logistics experts."
                }
            },
            {
                "@type": "Question",
                "name": "What languages does BLI support?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BLI provides support in 10+ languages including English, Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Bengali, and Punjabi."
                }
            }
        ]
    };

    return (
        <PageLayout>
            <Helmet>
                <title>24/7 Real-Time Support | 30s Response | Live Tracking | Multi-Language | BLI</title>
                <meta name="description" content="24/7 logistics support with 30-second response time, 95% first-call resolution, live GPS tracking, emergency hotline. Support in 10+ Indian languages including Hindi, Tamil, Telugu." />
                <meta name="keywords" content="24/7 logistics support, real time tracking, live chat support, emergency logistics hotline, multi language support, shipment tracking, customer service, logistics help" />

                {/* Open Graph */}
                <meta property="og:title" content="Real-Time Support - 24/7 Logistics Assistance | BLI" />
                <meta property="og:description" content="Instant support with 30s response time, 95% first-call resolution, live GPS tracking. Available in 10+ languages with dedicated account managers." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://blirapid.com/services/real-time-support" />
                <meta property="og:image" content="https://blirapid.com/support-services.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="24/7 Support - 100+ Experts Ready to Help | BLI" />
                <meta name="twitter:description" content="Real-time logistics support. Live tracking, instant response, multi-language assistance." />

                {/* Canonical URL */}
                <link rel="canonical" href="https://blirapid.com/services/real-time-support" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            <section className="relative pt-8 sm:pt-10 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
                {/* Background image with overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: 'url("/lovable-uploads/support-hero.jpg")' }}
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
                                Real-Time Support
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-base sm:text-lg md:text-xl text-[#F8FFFF]/90 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
                            >
                                Stay connected with your shipments 24/7. Our dedicated support team ensures you're
                                always informed and any issues are resolved instantly, keeping your logistics running smoothly.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
                            >
                                <a
                                    href="tel:+919687448434"
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                                    aria-label="Call BLI support team"
                                >
                                    <span>Call Support Now</span>
                                    <Phone className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                                </a>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('live-chat');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all text-sm sm:text-base"
                                    aria-label="Start live chat with BLI support"
                                >
                                    <span>Start Live Chat</span>
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Support Channels */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]" aria-labelledby="channels-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="channels-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Multiple Support Channels
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {supportChannels.map((channel, index) => (
                                <motion.article key={index} variants={itemVariants}>
                                    <Card className="h-full bg-white border border-[#185EAA]/20 hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all hover:-translate-y-1">
                                        <CardContent className="p-6">
                                            <div className="w-14 h-14 bg-[#F8FFFF] rounded-lg flex items-center justify-center mb-4">
                                                <channel.icon className="w-7 h-7 text-[#185EAA]" aria-hidden="true" />
                                            </div>
                                            <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{channel.title}</h3>
                                            <p className="text-[#21221C]/70 text-sm">{channel.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="features-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="features-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Why Our Support Stands Out
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white p-6 rounded-xl border border-[#185EAA]/20 text-center hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all"
                                >
                                    <div className="w-16 h-16 bg-[#F8FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <feature.icon className="w-8 h-8 text-[#185EAA]" aria-hidden="true" />
                                    </div>
                                    <div className="text-2xl font-bold text-[#FF7729] mb-2">{feature.stat}</div>
                                    <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{feature.title}</h3>
                                    <p className="text-[#21221C]/70 text-sm">{feature.description}</p>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Support Levels */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]" aria-labelledby="levels-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="levels-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Support Service Levels
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {supportLevels.map((level, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className={`rounded-xl p-6 border-2 ${level.highlighted
                                        ? 'border-[#FF7729] bg-white shadow-lg'
                                        : 'border-[#185EAA]/20 bg-white'
                                        }`}
                                >
                                    {level.highlighted && (
                                        <div className="inline-block px-3 py-1 bg-[#FF7729] text-white rounded-full text-sm font-medium mb-4">
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 className="font-bold text-xl mb-2 text-[#113C6A]">{level.level}</h3>
                                    <p className="text-[#21221C]/70 mb-4">{level.description}</p>

                                    <div className="mb-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-[#21221C]/70">Response Time:</span>
                                            <span className="font-semibold text-[#FF7729]">{level.responseTime}</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-sm text-[#21221C]/70">Availability:</span>
                                            <span className="font-semibold text-[#113C6A]">{level.availability}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2" role="list">
                                        {level.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-sm">
                                                <CheckCircle className="w-4 h-4 text-[#FF7729] mr-2 flex-shrink-0" aria-hidden="true" />
                                                <span className="text-[#21221C]/80">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Real-Time Tracking */}
            <section id="live-chat" className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="tracking-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        <motion.div variants={itemVariants}>
                            <h2 id="tracking-heading" className="text-3xl font-bold mb-6 text-[#113C6A]">
                                Advanced Shipment Tracking
                            </h2>
                            <p className="text-[#21221C]/80 mb-8">
                                Stay informed every step of the way with our comprehensive tracking system.
                                Get real-time updates, proactive notifications, and complete visibility of your shipments.
                            </p>

                            <ul className="space-y-3" role="list">
                                {trackingFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-[#FF7729] mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                                        <span className="text-[#21221C]/80 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div variants={itemVariants} className="relative">
                            <img
                                src="/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"
                                alt="BLI real-time tracking dashboard and GPS monitoring system"
                                className="rounded-xl shadow-lg"
                                loading="lazy"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-[#FF7729] text-white p-4 rounded-lg shadow-lg">
                                <p className="text-2xl font-bold">Live</p>
                                <p className="text-sm">GPS Tracking</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]" aria-labelledby="contact-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="contact-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Get In Touch
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {contactMethods.map((method, index) => (
                                <motion.article
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white rounded-xl p-6 border border-[#185EAA]/20 text-center hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all"
                                >
                                    <div className="w-16 h-16 bg-[#F8FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                                        {method.method.includes('Phone') || method.method.includes('Hotline') ? (
                                            <Phone className="w-8 h-8 text-[#185EAA]" aria-hidden="true" />
                                        ) : method.method.includes('WhatsApp') ? (
                                            <MessageSquare className="w-8 h-8 text-[#185EAA]" aria-hidden="true" />
                                        ) : (
                                            <Headset className="w-8 h-8 text-[#185EAA]" aria-hidden="true" />
                                        )}
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-[#113C6A]">{method.method}</h3>
                                    <p className="text-[#FF7729] font-semibold mb-2">{method.contact}</p>
                                    <p className="text-[#21221C]/70 text-sm mb-2">{method.description}</p>
                                    <span className="inline-block px-2 py-1 bg-[#F8FFFF] text-[#185EAA] rounded text-xs">
                                        {method.availability}
                                    </span>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Language Support */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="language-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="language-heading"
                            variants={itemVariants}
                            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-[#113C6A]"
                        >
                            Multi-Language Support
                        </motion.h2>

                        <motion.div
                            variants={itemVariants}
                            className="bg-white rounded-xl p-4 sm:p-6 md:p-8 border border-[#185EAA]/20"
                        >
                            <div className="text-center mb-6 sm:mb-8">
                                <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-[#185EAA] mx-auto mb-3 sm:mb-4" aria-hidden="true" />
                                <h3 className="text-xl sm:text-2xl font-bold text-[#113C6A] mb-2">
                                    Speak Your Language
                                </h3>
                                <p className="text-sm sm:text-base text-[#21221C]/80 px-2 sm:px-0">
                                    Our support team is fluent in multiple Indian languages to serve you better
                                </p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                                {languages.map((language, index) => (
                                    <div
                                        key={index}
                                        className="text-center p-2 sm:p-3 bg-[#F8FFFF] rounded-lg border border-[#185EAA]/20 hover:border-[#185EAA]/40 transition-all"
                                    >
                                        <span className="text-[#113C6A] font-medium text-sm sm:text-base">{language}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Support Statistics */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FFFF]" aria-labelledby="stats-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="stats-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Support Performance
                        </motion.h2>

                        <motion.div
                            variants={itemVariants}
                            className="bg-white rounded-xl p-8 border border-[#185EAA]/20"
                        >
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-[#FF7729] mb-2">95%</div>
                                    <p className="text-[#21221C]/70">First Call Resolution</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-[#FF7729] mb-2">30s</div>
                                    <p className="text-[#21221C]/70">Average Response Time</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-[#FF7729] mb-2">4.8/5</div>
                                    <p className="text-[#21221C]/70">Customer Satisfaction</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-[#FF7729] mb-2">50K+</div>
                                    <p className="text-[#21221C]/70">Monthly Support Tickets</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="faq-heading">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            id="faq-heading"
                            variants={itemVariants}
                            className="text-3xl font-bold mb-12 text-center text-[#113C6A]"
                        >
                            Frequently Asked Questions
                        </motion.h2>

                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {[
                                {
                                    question: "How can I track my shipment in real-time?",
                                    answer: "Use your tracking number on our website or mobile app for live GPS updates."
                                },
                                {
                                    question: "What if my shipment is delayed?",
                                    answer: "You'll receive automatic notifications. Our support team will proactively contact you with updates."
                                },
                                {
                                    question: "Can I change delivery address after booking?",
                                    answer: "Yes, contact our support team immediately. Changes are possible before dispatch."
                                },
                                {
                                    question: "How do I file a claim for damaged goods?",
                                    answer: "Report within 24 hours via phone or email. Our claims team will guide you through the process."
                                },
                                {
                                    question: "Is support available on weekends?",
                                    answer: "Yes, our support is available 24/7, including weekends and holidays."
                                },
                                {
                                    question: "Can I get updates via WhatsApp?",
                                    answer: "Absolutely! We provide shipment updates and support via WhatsApp for your convenience."
                                }
                            ].map((faq, index) => (
                                <article key={index} className="bg-white p-6 rounded-lg border border-[#185EAA]/20">
                                    <h4 className="font-semibold text-[#113C6A] mb-2">{faq.question}</h4>
                                    <p className="text-[#21221C]/80 text-sm">{faq.answer}</p>
                                </article>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Hidden FAQ Section for SEO */}
            <section className="sr-only" aria-label="Frequently Asked Questions">
                <h2>Frequently Asked Questions about Real-Time Support</h2>
                <dl>
                    <dt>How can I track my shipment in real-time?</dt>
                    <dd>Use your tracking number on our website or mobile app for live GPS updates with real-time location, estimated delivery time, and proactive notifications.</dd>

                    <dt>What is the response time for support?</dt>
                    <dd>Our average response time is under 30 seconds with 95% first-call resolution rate. Priority support offers 30-minute response, Enterprise gets 15-minute response.</dd>

                    <dt>Is support available 24/7?</dt>
                    <dd>Yes, our support is available 24/7/365 through phone, live chat, WhatsApp, and email with 100+ trained logistics experts.</dd>

                    <dt>What languages does BLI support?</dt>
                    <dd>BLI provides support in 10+ languages including English, Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Bengali, and Punjabi.</dd>

                    <dt>What support levels are available?</dt>
                    <dd>BLI offers Standard Support (2-4 hour response), Priority Support (30-minute response), and Enterprise Support (15-minute response) with dedicated account managers.</dd>
                </dl>
            </section>

            {/* CTA Section */}
            <section
                className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF7] to-[#113C6A] text-[#FFFDF7]"
                aria-labelledby="support-cta"
            >
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Heading */}
                        <h2 id="support-cta" className="text-3xl font-bold mb-4 text-[#113C6A]">
                            Need Help Right Now?
                        </h2>
                        <p className="text-[#000]/90 mb-8 text-lg">
                            Our support team is standing by to assist you with any logistics needs or questions.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="tel:+919687448434"
                                aria-label="Call support team"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                            >
                                <span>Call Support Now</span>
                                <Phone className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                            </a>
                            <Link
                                to="/contact"
                                aria-label="Start live chat with support"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border-2 border-[#F8FFFF] text-[#F8FFFF] rounded hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all text-sm sm:text-base"
                            >
                                <MessageSquare className="mr-2 w-4 h-4 flex-shrink-0" />
                                <span>Start Live Chat</span>
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 pt-12 border-t border-[#F8FFFF]/20">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">24/7</p>
                                    <p className="text-[#000]/80 mt-1">Support Available</p>
                                </div>
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">30s</p>
                                    <p className="text-[#000]/80 mt-1">Avg Response Time</p>
                                </div>
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">95%</p>
                                    <p className="text-[#000]/80 mt-1">First Call Resolution</p>
                                </div>
                                <div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#FF7729]">10+</p>
                                    <p className="text-[#000]/80 mt-1">Languages Supported</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageLayout>
    );
};

export default RealTimeSupport;