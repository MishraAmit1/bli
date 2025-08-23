// src/pages/BlogPost.tsx

import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Clock, ArrowLeft, Calendar, User, Share2, ArrowRight
} from "lucide-react";
import PageLayout from '@/components/PageLayout';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Helmet } from 'react-helmet-async';

const BlogPost = () => {
    const { slug } = useParams();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const blogPosts = {
        "digital-transformation-supply-chain-analytics": {
            title: "Digital Transformation in Supply Chain Analytics",
            excerpt: "How data-driven insights are revolutionizing logistics operations across industries",
            metaDescription: "Discover how digital transformation and data analytics are revolutionizing supply chain operations. Learn about AI, IoT, predictive analytics, and real-time visibility in logistics.",
            keywords: "digital transformation logistics, supply chain analytics, predictive analytics logistics, IoT supply chain, real-time visibility, logistics data analytics",
            image: "/lovable-uploads/services1.jpg",
            category: "Technology",
            readTime: "5 min read",
            date: "December 15, 2024",
            dateISO: "2024-12-15",
            author: "Rajesh Kumar",
            authorRole: "Supply Chain Technology Expert",
            content: `
                <p>The logistics industry is experiencing a paradigm shift as digital transformation reshapes how supply chains operate. Data-driven analytics are no longer just a competitive advantage—they're becoming essential for survival in today's fast-paced marketplace.</p>

                <h2>The Power of Predictive Analytics</h2>
                <p>Modern logistics companies are leveraging predictive analytics to forecast demand patterns, optimize inventory levels, and prevent potential disruptions before they occur. By analyzing historical data, weather patterns, market trends, and consumer behavior, businesses can make informed decisions that significantly reduce costs and improve service levels.</p>

                <h2>Real-Time Visibility Revolution</h2>
                <p>Gone are the days of "black box" shipments. Today's supply chain analytics provide real-time visibility into every aspect of the logistics process. From GPS tracking and IoT sensors to automated status updates, businesses now have unprecedented insight into their operations.</p>

                <blockquote>
                "Companies using advanced analytics in their supply chain operations report up to 25% reduction in logistics costs and 30% improvement in delivery performance." - Supply Chain Management Review
                </blockquote>

                <h2>Key Technologies Driving Change</h2>
                <ul>
                <li><strong>Artificial Intelligence:</strong> Machine learning algorithms optimize routes, predict maintenance needs, and automate decision-making processes.</li>
                <li><strong>Internet of Things (IoT):</strong> Sensors provide real-time data on location, temperature, humidity, and cargo conditions.</li>
                <li><strong>Blockchain:</strong> Ensures transparency and security in multi-party logistics transactions.</li>
                <li><strong>Cloud Computing:</strong> Enables scalable data processing and real-time collaboration across the supply chain.</li>
                </ul>

                <h2>Implementation Challenges</h2>
                <p>While the benefits are clear, implementing digital transformation in logistics comes with challenges. Legacy systems, data integration complexities, and the need for skilled personnel can create barriers. However, companies that invest in gradual, strategic implementation see significant returns on investment.</p>

                <h2>The Future Outlook</h2>
                <p>As we look ahead, the integration of analytics in supply chain operations will only deepen. Autonomous vehicles, drone deliveries, and fully automated warehouses are becoming reality, all powered by sophisticated analytics platforms.</p>

                <p>For logistics companies, the message is clear: embrace digital transformation now, or risk being left behind in an increasingly competitive marketplace.</p>
            `
        },
        "ai-powered-warehouse-automation": {
            title: "AI-Powered Warehouse Automation Trends",
            excerpt: "Exploring the latest developments in artificial intelligence for warehouse management",
            metaDescription: "Explore AI-powered warehouse automation trends including robotics, machine learning, smart inventory management, and predictive maintenance. Learn about ROI and implementation strategies.",
            keywords: "AI warehouse automation, warehouse robotics, smart inventory management, predictive maintenance, warehouse AI, automated picking systems, warehouse technology",
            image: "/lovable-uploads/services2.jpg",
            category: "Technology",
            readTime: "7 min read",
            date: "December 12, 2024",
            dateISO: "2024-12-12",
            author: "Priya Sharma",
            authorRole: "Warehouse Automation Specialist",
            content: `
                <p>Warehouse automation powered by artificial intelligence is transforming the logistics landscape. From robotic picking systems to intelligent inventory management, AI is driving unprecedented efficiency gains in warehouse operations.</p>

                <h2>The Rise of Intelligent Robotics</h2>
                <p>Modern warehouses are increasingly deploying AI-powered robots that can navigate complex environments, pick items with precision, and collaborate safely with human workers. These systems use computer vision, machine learning, and advanced sensors to perform tasks that were once thought impossible to automate.</p>

                <h2>Smart Inventory Management</h2>
                <p>AI algorithms are revolutionizing how warehouses manage inventory. Predictive analytics help forecast demand, optimize stock levels, and reduce waste. Machine learning models analyze patterns in ordering, seasonal variations, and market trends to ensure optimal inventory positioning.</p>

                <h2>Key AI Applications in Warehouses</h2>
                <ul>
                <li><strong>Automated Picking Systems:</strong> Robots equipped with computer vision can identify, pick, and sort items with remarkable accuracy.</li>
                <li><strong>Predictive Maintenance:</strong> AI monitors equipment health and predicts failures before they occur, reducing downtime.</li>
                <li><strong>Dynamic Slotting:</strong> Machine learning optimizes product placement based on demand patterns and picking efficiency.</li>
                <li><strong>Quality Control:</strong> Computer vision systems inspect products for defects and ensure quality standards.</li>
                </ul>

                <h2>Benefits and ROI</h2>
                <p>Companies implementing AI-powered warehouse automation report significant improvements:</p>
                <ul>
                <li>40-60% increase in picking accuracy</li>
                <li>25-35% reduction in operational costs</li>
                <li>50-70% improvement in order fulfillment speed</li>
                <li>90% reduction in inventory discrepancies</li>
                </ul>

                <h2>Challenges and Considerations</h2>
                <p>While AI automation offers tremendous benefits, implementation requires careful planning. Initial investment costs, integration with existing systems, and workforce adaptation are key considerations for successful deployment.</p>

                <p>The future of warehouse operations lies in the seamless integration of AI technologies that enhance rather than replace human capabilities, creating more efficient, accurate, and profitable logistics operations.</p>
            `
        },
        "sustainable-logistics-green-transportation": {
            title: "Sustainable Logistics: Green Transportation Solutions",
            excerpt: "Environmental initiatives driving the future of eco-friendly logistics operations",
            metaDescription: "Learn about sustainable logistics practices, green transportation solutions, electric vehicles in logistics, and eco-friendly supply chain strategies for environmental responsibility.",
            keywords: "sustainable logistics, green transportation, eco-friendly logistics, electric vehicles logistics, carbon footprint reduction, sustainable supply chain, green logistics strategies",
            image: "/lovable-uploads/services3.png",
            category: "Sustainability",
            readTime: "6 min read",
            date: "December 10, 2024",
            dateISO: "2024-12-10",
            author: "Amit Patel",
            authorRole: "Sustainability Consultant",
            content: `
                <p>As environmental concerns take center stage globally, the logistics industry is embracing sustainable practices that reduce carbon footprint while maintaining operational efficiency. Green transportation solutions are no longer optional—they're essential for future business success.</p>

                <h2>The Sustainability Imperative</h2>
                <p>The transportation sector accounts for approximately 24% of global CO2 emissions, making it a critical area for environmental improvement. Logistics companies are under increasing pressure from customers, regulators, and stakeholders to adopt sustainable practices.</p>

                <h2>Electric Vehicle Revolution</h2>
                <p>Electric vehicles (EVs) are leading the charge in sustainable logistics. From last-mile delivery vans to long-haul trucks, electric options are becoming increasingly viable with improvements in battery technology, charging infrastructure, and total cost of ownership.</p>

                <h2>Green Logistics Strategies</h2>
                <ul>
                <li><strong>Route Optimization:</strong> AI-powered systems minimize fuel consumption by calculating the most efficient routes.</li>
                <li><strong>Load Consolidation:</strong> Maximizing vehicle capacity reduces the number of trips required.</li>
                <li><strong>Alternative Fuels:</strong> Biodiesel, hydrogen, and compressed natural gas offer cleaner alternatives to traditional diesel.</li>
                <li><strong>Intermodal Transportation:</strong> Combining rail, road, and water transport reduces overall environmental impact.</li>
                </ul>

                <h2>Technology Enablers</h2>
                <p>Several technologies are accelerating the adoption of sustainable logistics:</p>
                <ul>
                <li>Telematics systems that monitor fuel efficiency and driver behavior</li>
                <li>IoT sensors that optimize cold chain operations</li>
                <li>Blockchain for transparent carbon footprint tracking</li>
                <li>AI algorithms that balance cost and environmental impact</li>
                </ul>

                <h2>Business Case for Green Logistics</h2>
                <p>Sustainable logistics isn't just about environmental responsibility—it makes good business sense:</p>
                <ul>
                <li>Reduced fuel costs through efficiency improvements</li>
                <li>Lower maintenance costs with cleaner technologies</li>
                <li>Enhanced brand reputation and customer loyalty</li>
                <li>Compliance with increasingly strict environmental regulations</li>
                <li>Access to green financing and investment opportunities</li>
                </ul>

                <h2>Challenges and Solutions</h2>
                <p>While the benefits are clear, implementing sustainable logistics faces challenges including higher upfront costs, infrastructure limitations, and technology maturity. However, government incentives, improving technology, and growing customer demand are driving rapid adoption.</p>

                <p>The future of logistics is green, and companies that invest in sustainable transportation solutions today will be the leaders of tomorrow's eco-friendly supply chains.</p>
            `
        },
        "last-mile-delivery-optimization": {
            title: "Last-Mile Delivery Optimization Strategies",
            excerpt: "Best practices for improving last-mile delivery efficiency while reducing costs",
            metaDescription: "Optimize last-mile delivery with proven strategies for route planning, micro-fulfillment centers, delivery tracking, and customer satisfaction in urban logistics.",
            keywords: "last-mile delivery optimization, urban logistics, delivery route planning, micro-fulfillment centers, last-mile logistics, delivery efficiency, customer satisfaction logistics",
            image: "/lovable-uploads/services4.png",
            category: "Operational Tips",
            readTime: "4 min read",
            date: "December 8, 2024",
            dateISO: "2024-12-08",
            author: "Neha Singh",
            authorRole: "Last-Mile Delivery Expert",
            content: `
                <p>Last-mile delivery represents the final and often most expensive leg of the logistics journey. Optimizing this crucial segment can significantly impact customer satisfaction, operational costs, and competitive advantage.</p>

                <h2>Understanding Last-Mile Challenges</h2>
                <p>Last-mile delivery faces unique challenges including urban congestion, diverse delivery locations, time-sensitive requirements, and high customer expectations for speed and convenience.</p>

                <h2>Key Optimization Strategies</h2>
                <ul>
                <li><strong>Dynamic Route Planning:</strong> Real-time optimization based on traffic, weather, and delivery priorities</li>
                <li><strong>Micro-Fulfillment Centers:</strong> Strategically located small warehouses closer to customers</li>
                <li><strong>Delivery Time Windows:</strong> Offering customers flexible delivery slots to optimize routes</li>
                <li><strong>Alternative Delivery Points:</strong> Pickup locations, lockers, and partner stores</li>
                </ul>

                <h2>Technology Solutions</h2>
                <p>Modern last-mile optimization relies heavily on technology including GPS tracking, mobile apps, AI-powered routing algorithms, and customer communication platforms.</p>

                <p>Success in last-mile delivery requires balancing speed, cost, and customer satisfaction while continuously adapting to changing market demands and technological advances.</p>
            `
        },
        "cross-border-logistics-international-trade": {
            title: "Cross-Border Logistics: Navigating International Trade",
            excerpt: "Key considerations for successful international logistics operations",
            metaDescription: "Navigate cross-border logistics challenges with expert insights on customs procedures, documentation, international trade compliance, and strategic partnerships.",
            keywords: "cross-border logistics, international trade logistics, customs procedures, trade documentation, international shipping, global logistics, import export logistics",
            image: "/lovable-uploads/services5.jpg",
            category: "Industry Insights",
            readTime: "8 min read",
            date: "December 5, 2024",
            dateISO: "2024-12-05",
            author: "Vikram Gupta",
            authorRole: "International Trade Specialist",
            content: `
                <p>Cross-border logistics involves complex coordination of documentation, customs procedures, and multiple transportation modes. Success requires expertise in international trade regulations and strategic planning.</p>

                <h2>Documentation and Compliance</h2>
                <p>Proper documentation is critical for smooth cross-border operations. This includes commercial invoices, packing lists, certificates of origin, and compliance with destination country requirements.</p>

                <h2>Key Success Factors</h2>
                <ul>
                <li>Understanding customs procedures and regulations</li>
                <li>Strategic partner selection in destination countries</li>
                <li>Efficient documentation management</li>
                <li>Risk management and insurance coverage</li>
                </ul>

                <p>International logistics success depends on careful planning, regulatory compliance, and building strong partnerships across borders.</p>
            `
        },
        "future-cold-chain-logistics": {
            title: "The Future of Cold Chain Logistics",
            excerpt: "Innovations in temperature-controlled transportation and storage",
            metaDescription: "Explore the future of cold chain logistics with innovations in temperature monitoring, IoT sensors, pharmaceutical transportation, and sustainable refrigeration technologies.",
            keywords: "cold chain logistics, temperature-controlled transportation, pharmaceutical logistics, cold storage, IoT cold chain, vaccine distribution, refrigerated transport",
            image: "/lovable-uploads/services6.jpg",
            category: "Logistics Trends",
            readTime: "6 min read",
            date: "December 3, 2024",
            dateISO: "2024-12-03",
            author: "Ravi Krishnan",
            authorRole: "Cold Chain Specialist",
            content: `
                <p>Cold chain logistics is evolving rapidly with new technologies ensuring product integrity from origin to destination. IoT sensors, AI monitoring, and advanced refrigeration systems are transforming temperature-controlled transportation.</p>

                <h2>Technology Innovations</h2>
                <p>Modern cold chain solutions include real-time temperature monitoring, predictive analytics for equipment maintenance, and automated alerts for temperature deviations.</p>

                <h2>Industry Applications</h2>
                <ul>
                <li>Pharmaceutical and vaccine distribution</li>
                <li>Fresh food and grocery delivery</li>
                <li>Chemical and biotechnology products</li>
                <li>Specialty materials requiring controlled environments</li>
                </ul>

                <p>The future of cold chain logistics lies in seamless integration of technology, sustainability, and regulatory compliance to ensure product quality and safety.</p>
            `
        }
    };

    const currentPost = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

    if (!currentPost) {
        return (
            <PageLayout>
                <Helmet>
                    <title>Blog Post Not Found | BLI Logistics</title>
                    <meta name="robots" content="noindex, nofollow" />
                </Helmet>
                <div className="pt-8 sm:pt-10 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#113C6A]">Blog Post Not Found</h1>
                    <p className="text-sm sm:text-base text-[#21221C]/70 mb-6 sm:mb-8">The blog post you're looking for doesn't exist.</p>
                    <Link
                        to="/resources/blogs"
                        className="inline-flex items-center px-4 sm:px-6 py-3 bg-[#113C6A] text-white rounded hover:bg-[#185EAA] transition-all text-sm sm:text-base"
                    >
                        Back to Blogs
                    </Link>
                </div>
            </PageLayout>
        );
    }

    // Related posts logic
    const relatedPosts = Object.entries(blogPosts)
        .filter(([postSlug, post]) => postSlug !== slug)
        .sort((a, b) => {
            if (a[1].category === currentPost.category && b[1].category !== currentPost.category) return -1;
            if (a[1].category !== currentPost.category && b[1].category === currentPost.category) return 1;
            return 0;
        })
        .slice(0, 3);

    // Structured Data for Blog Post
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": currentPost.title,
        "description": currentPost.metaDescription || currentPost.excerpt,
        "image": `https://www.blirapid.com${currentPost.image}`,
        "datePublished": currentPost.dateISO,
        "dateModified": currentPost.dateISO,
        "author": {
            "@type": "Person",
            "name": currentPost.author,
            "jobTitle": currentPost.authorRole
        },
        "publisher": {
            "@type": "Organization",
            "name": "BLI - Bansal Logistics of India",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.blirapid.com/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.blirapid.com/resources/blogs/${slug}`
        },
        "articleSection": currentPost.category,
        "keywords": currentPost.keywords
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.blirapid.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Resources",
                "item": "https://www.blirapid.com/resources"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Blogs",
                "item": "https://www.blirapid.com/resources/blogs"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": currentPost.title,
                "item": `https://www.blirapid.com/resources/blogs/${slug}`
            }
        ]
    };

    return (
        <PageLayout>
            <Helmet>
                <title>{currentPost.title} | Logistics Insights | BLI</title>
                <meta name="description" content={currentPost.metaDescription || currentPost.excerpt} />
                <meta name="keywords" content={currentPost.keywords} />

                {/* Open Graph */}
                <meta property="og:title" content={currentPost.title} />
                <meta property="og:description" content={currentPost.metaDescription || currentPost.excerpt} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://www.blirapid.com/resources/blogs/${slug}`} />
                <meta property="og:image" content={`https://www.blirapid.com${currentPost.image}`} />
                <meta property="article:published_time" content={currentPost.dateISO} />
                <meta property="article:author" content={currentPost.author} />
                <meta property="article:section" content={currentPost.category} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={currentPost.title} />
                <meta name="twitter:description" content={currentPost.metaDescription || currentPost.excerpt} />
                <meta name="twitter:image" content={`https://www.blirapid.com${currentPost.image}`} />

                {/* Canonical URL */}
                <link rel="canonical" href={`https://www.blirapid.com/resources/blogs/${slug}`} />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="relative bg-[#113C6A] pt-8 sm:pt-10 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-gradient-to-b from-[#113C6A]/90 to-[#185EAA]/80" />
                <div className="container mx-auto relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center text-[#F8FFFF]/80 mb-4 sm:mb-6 text-xs sm:text-sm">
                            <Link to="/" className="hover:text-[#F8FFFF] transition-colors">Home</Link>
                            <span className="mx-1 sm:mx-2" aria-hidden="true">/</span>
                            <Link to="/resources" className="hover:text-[#F8FFFF] transition-colors">Resources</Link>
                            <span className="mx-1 sm:mx-2" aria-hidden="true">/</span>
                            <Link to="/resources/blogs" className="hover:text-[#F8FFFF] transition-colors">Blogs</Link>
                            <span className="mx-1 sm:mx-2" aria-hidden="true">/</span>
                            <span className="text-[#F8FFFF] truncate" aria-current="page">{currentPost.title}</span>
                        </nav>

                        <motion.h1
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#F8FFFF] leading-tight"
                        >
                            {currentPost.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-base sm:text-lg md:text-xl text-[#F8FFFF]/90 max-w-3xl leading-relaxed px-2 sm:px-0"
                        >
                            {currentPost.excerpt}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#F8FFFF]/80 mt-4 sm:mt-6"
                        >
                            <Badge className="bg-[#FF7729] text-white border-0 text-xs">
                                {currentPost.category}
                            </Badge>
                            <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" aria-hidden="true" />
                                <span>{currentPost.readTime}</span>
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" aria-hidden="true" />
                                <time dateTime={currentPost.dateISO}>
                                    <span className="hidden sm:inline">{currentPost.date}</span>
                                    <span className="sm:hidden">{currentPost.date.split(' ').slice(0, 2).join(' ')}</span>
                                </time>
                            </span>
                            <span className="flex items-center gap-1">
                                <User className="h-3 w-3" aria-hidden="true" />
                                <span>{currentPost.author}</span>
                            </span>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-4xl">
                <Link
                    to="/resources/blogs"
                    className="inline-flex items-center px-3 sm:px-4 py-2 rounded-md text-[#113C6A] hover:bg-[#F8FFFF] transition-colors mb-6 sm:mb-8 text-sm sm:text-base"
                    aria-label="Back to all blog posts"
                >
                    <ArrowLeft className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Back to Blogs
                </Link>

                <article>
                    {/* Featured Image */}
                    <div className="aspect-video overflow-hidden rounded-xl mb-6 sm:mb-8">
                        <img
                            src={currentPost.image}
                            alt={currentPost.title}
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    </div>

                    {/* Author Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#185EAA]/20 pt-4 sm:pt-6 mb-6 sm:mb-8 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#113C6A] rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base" aria-hidden="true">
                                {currentPost.author.charAt(0)}
                            </div>
                            <div>
                                <div className="font-semibold text-[#113C6A] text-sm sm:text-base">{currentPost.author}</div>
                                <div className="text-xs sm:text-sm text-[#21221C]/70">{currentPost.authorRole}</div>
                            </div>
                        </div>
                        <button
                            className="inline-flex items-center px-3 py-1.5 border border-[#185EAA]/30 rounded-md text-[#113C6A] hover:bg-[#F8FFFF] transition-colors text-xs sm:text-sm"
                            aria-label="Share this article"
                        >
                            <Share2 className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                            Share
                        </button>
                    </div>

                    {/* Content */}
                    <div className="mb-8 sm:mb-12">
                        <div
                            dangerouslySetInnerHTML={{ __html: currentPost.content }}
                            className="space-y-4 sm:space-y-6 text-sm sm:text-base text-[#21221C]/80 
                            [&>h2]:text-xl [&>h2]:sm:text-2xl [&>h2]:font-bold [&>h2]:mt-6 [&>h2]:sm:mt-8 [&>h2]:mb-3 [&>h2]:sm:mb-4 [&>h2]:text-[#113C6A] 
                            [&>h3]:text-lg [&>h3]:sm:text-xl [&>h3]:font-semibold [&>h3]:mt-4 [&>h3]:sm:mt-6 [&>h3]:mb-2 [&>h3]:sm:mb-3 [&>h3]:text-[#113C6A] 
                            [&>p]:mb-3 [&>p]:sm:mb-4 [&>p]:leading-relaxed
                            [&>ul]:mb-3 [&>ul]:sm:mb-4 [&>ul]:space-y-1 [&>ul]:sm:space-y-2 
                            [&>ul>li]:ml-3 [&>ul>li]:sm:ml-4 [&>ul>li]:pl-2 [&>ul>li]:relative [&>ul>li]:before:content-['•'] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:text-[#FF7729] 
                            [&>blockquote]:border-l-2 [&>blockquote]:sm:border-l-4 [&>blockquote]:border-[#FF7729] [&>blockquote]:pl-3 [&>blockquote]:sm:pl-6 [&>blockquote]:italic [&>blockquote]:my-4 [&>blockquote]:sm:my-6 [&>blockquote]:text-[#21221C]/70 [&>blockquote]:text-sm [&>blockquote]:sm:text-base"
                        />
                    </div>

                    {/* CTA */}
                    <aside className="rounded-xl p-6 sm:p-8 bg-[#113C6A] text-[#F8FFFF] text-center mb-8 sm:mb-12">
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Transform Your Logistics?</h3>
                        <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base px-2 sm:px-0">
                            Discover how BLI Rapid can help optimize your supply chain operations with our advanced logistics solutions.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group text-sm sm:text-base"
                            aria-label="Get custom logistics quote"
                        >
                            <span>Get Custom Quote</span>
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                        </Link>
                    </aside>
                </article>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section aria-labelledby="related-posts-heading">
                        <h3 id="related-posts-heading" className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#113C6A]">Related Articles</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" role="list">
                            {relatedPosts.map(([postSlug, post]) => (
                                <article
                                    key={postSlug}
                                    className="rounded-xl overflow-hidden bg-white border border-[#185EAA]/20 group hover:shadow-lg transition-shadow"
                                    role="listitem"
                                >
                                    <Link to={`/resources/blogs/${postSlug}`} aria-label={`Read article: ${post.title}`}>
                                        <div className="aspect-video overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="p-4 sm:p-6">
                                            <Badge className="mb-2 bg-[#113C6A]/10 text-[#113C6A] hover:bg-[#113C6A]/20 border-0 text-xs">
                                                {post.category}
                                            </Badge>
                                            <h4 className="font-semibold mb-2 text-[#113C6A] group-hover:text-[#FF7729] transition-colors text-sm sm:text-base leading-tight">
                                                {post.title}
                                            </h4>
                                            <p className="text-xs sm:text-sm text-[#21221C]/70 mb-3 sm:mb-4 line-clamp-3">{post.excerpt}</p>
                                            <span className="inline-flex items-center text-[#FF7729] hover:underline text-sm">
                                                Read More
                                                <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" aria-hidden="true" />
                                            </span>
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </PageLayout>
    );
};

export default BlogPost;