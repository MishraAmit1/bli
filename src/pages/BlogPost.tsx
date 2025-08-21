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
            image: "/lovable-uploads/services1.jpg",
            category: "Technology",
            readTime: "5 min read",
            date: "December 15, 2024",
            author: "Rajesh Kumar",
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
            image: "/lovable-uploads/services2.jpg",
            category: "Technology",
            readTime: "7 min read",
            date: "December 12, 2024",
            author: "Priya Sharma",
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
            image: "/lovable-uploads/services3.png",
            category: "Sustainability",
            readTime: "6 min read",
            date: "December 10, 2024",
            author: "Amit Patel",
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
            image: "/lovable-uploads/services4.png",
            category: "Operational Tips",
            readTime: "4 min read",
            date: "December 8, 2024",
            author: "Neha Singh",
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
            image: "/lovable-uploads/services5.jpg",
            category: "Industry Insights",
            readTime: "8 min read",
            date: "December 5, 2024",
            author: "Vikram Gupta",
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
            image: "/lovable-uploads/services6.jpg",
            category: "Logistics Trends",
            readTime: "6 min read",
            date: "December 3, 2024",
            author: "Ravi Krishnan",
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
                <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4 text-[#113C6A]">Blog Post Not Found</h1>
                    <p className="text-[#21221C]/70 mb-8">The blog post you're looking for doesn't exist.</p>
                    <Link
                        to="/resources/blogs"
                        className="inline-flex items-center px-6 py-3 bg-[#113C6A] text-white rounded hover:bg-[#185EAA] transition-all"
                    >
                        Back to Blogs
                    </Link>
                </div>
            </PageLayout>
        );
    }

    // In BlogPost.tsx, replace the relatedPosts code with this:

    const relatedPosts = Object.entries(blogPosts)
        .filter(([postSlug, post]) => postSlug !== slug)
        .sort((a, b) => {
            // Sort by category match first (same category posts come first)
            if (a[1].category === currentPost.category && b[1].category !== currentPost.category) return -1;
            if (a[1].category !== currentPost.category && b[1].category === currentPost.category) return 1;
            // Then sort by date (assuming newer posts are more relevant)
            return 0; // If we had dates as numbers, we could sort by date here
        })
        .slice(0, 3); // Take the top 3 related posts

    return (
        <PageLayout>
            {/* Hero Section */}
            <section className="relative bg-[#113C6A] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-gradient-to-b from-[#113C6A]/90 to-[#185EAA]/80" />
                <div className="container mx-auto relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center text-[#F8FFFF]/80 mb-6">
                            <Link to="/" className="hover:text-[#F8FFFF] transition-colors">Home</Link>
                            <span className="mx-2">/</span>
                            <Link to="/resources" className="hover:text-[#F8FFFF] transition-colors">Resources</Link>
                            <span className="mx-2">/</span>
                            <Link to="/resources/blogs" className="hover:text-[#F8FFFF] transition-colors">Blogs</Link>
                            <span className="mx-2">/</span>
                            <span className="text-[#F8FFFF]">{currentPost.title}</span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-bold mb-6 text-[#F8FFFF]"
                        >
                            {currentPost.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-xl text-[#F8FFFF]/90 max-w-3xl"
                        >
                            {currentPost.excerpt}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex items-center gap-4 text-sm text-[#F8FFFF]/80 mt-6"
                        >
                            <Badge className="bg-[#FF7729] text-white border-0">
                                {currentPost.category}
                            </Badge>
                            <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {currentPost.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {currentPost.date}
                            </span>
                            <span className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                {currentPost.author}
                            </span>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
                <Link
                    to="/resources/blogs"
                    className="inline-flex items-center px-4 py-2 rounded-md text-[#113C6A] hover:bg-[#F8FFFF] transition-colors mb-8"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blogs
                </Link>

                <article>
                    {/* Featured Image */}
                    <div className="aspect-video overflow-hidden rounded-xl mb-8">
                        <img
                            src={currentPost.image}
                            alt={currentPost.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center justify-between border-t border-[#185EAA]/20 pt-6 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#113C6A] rounded-full flex items-center justify-center text-white font-semibold">
                                {currentPost.author.charAt(0)}
                            </div>
                            <div>
                                <div className="font-semibold text-[#113C6A]">{currentPost.author}</div>
                                <div className="text-sm text-[#21221C]/70">Logistics Expert</div>
                            </div>
                        </div>
                        <button className="inline-flex items-center px-3 py-1.5 border border-[#185EAA]/30 rounded-md text-[#113C6A] hover:bg-[#F8FFFF] transition-colors text-sm">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                        </button>
                    </div>

                    {/* Content */}
                    <div className="mb-12">
                        <div
                            dangerouslySetInnerHTML={{ __html: currentPost.content }}
                            className="space-y-6 text-[#21221C]/80 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:text-[#113C6A] [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:text-[#113C6A] [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:ml-4 [&>ul>li]:pl-2 [&>ul>li]:relative [&>ul>li]:before:content-['•'] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:text-[#FF7729] [&>blockquote]:border-l-4 [&>blockquote]:border-[#FF7729] [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:my-6 [&>blockquote]:text-[#21221C]/70"
                        />
                    </div>

                    {/* CTA */}
                    <div className="rounded-xl p-8 bg-[#113C6A] text-[#F8FFFF] text-center mb-12">
                        <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Logistics?</h3>
                        <p className="mb-6 opacity-90">
                            Discover how BLI Rapid can help optimize your supply chain operations with our advanced logistics solutions.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-6 py-3 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-all group"
                        >
                            Get Custom Quote
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </article>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section>
                        <h3 className="text-2xl font-bold mb-6 text-[#113C6A]">Related Articles</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {relatedPosts.map(([postSlug, post]) => (
                                <div
                                    key={postSlug}
                                    className="rounded-xl overflow-hidden bg-white border border-[#185EAA]/20 group hover:shadow-lg transition-shadow"
                                >
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <Badge className="mb-2 bg-[#113C6A]/10 text-[#113C6A] hover:bg-[#113C6A]/20 border-0">
                                            {post.category}
                                        </Badge>
                                        <h4 className="font-semibold mb-2 text-[#113C6A] group-hover:text-[#FF7729] transition-colors">
                                            {post.title}
                                        </h4>
                                        <p className="text-sm text-[#21221C]/70 mb-4">{post.excerpt}</p>
                                        <Link
                                            to={`/resources/blogs/${postSlug}`}
                                            className="inline-flex items-center text-[#FF7729] hover:underline"
                                        >
                                            Read More
                                            <ArrowRight className="ml-1 h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </PageLayout>
    );
};

export default BlogPost;
