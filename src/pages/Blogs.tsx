import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion } from "framer-motion";
import {
    Clock, Search, ArrowRight, ArrowLeft, Filter
} from "lucide-react";
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeCategory, setActiveCategory] = useState("All Posts");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = [
        "All Posts",
        "Logistics Trends",
        "Industry Insights",
        "Operational Tips",
        "Technology",
        "Sustainability"
    ];

    const blogPosts = [
        {
            title: "Digital Transformation in Supply Chain Analytics",
            excerpt: "How data-driven insights are revolutionizing logistics operations across industries, enabling better decision-making and operational efficiency.",
            image: "/lovable-uploads/services1.jpg",
            category: "Technology",
            readTime: "5 min read",
            date: "Dec 15, 2024",
            featured: true,
            slug: "digital-transformation-supply-chain-analytics",
            author: "BLI Logistics Team",
            metaDescription: "Discover how digital transformation and data analytics are revolutionizing supply chain operations. Learn about AI, IoT, and predictive analytics in logistics."
        },
        {
            title: "AI-Powered Warehouse Automation Trends",
            excerpt: "Exploring the latest developments in artificial intelligence for warehouse management and how they're reshaping the logistics landscape.",
            image: "/lovable-uploads/services2.jpg",
            category: "Technology",
            readTime: "7 min read",
            date: "Dec 12, 2024",
            featured: true,
            slug: "ai-powered-warehouse-automation",
            author: "BLI Logistics Team",
            metaDescription: "Explore AI-powered warehouse automation trends including robotics, machine learning, and smart inventory management systems transforming logistics."
        },
        {
            title: "Sustainable Logistics: Green Transportation Solutions",
            excerpt: "Environmental initiatives driving the future of eco-friendly logistics operations and sustainable supply chain practices.",
            image: "/lovable-uploads/services3.png",
            category: "Sustainability",
            readTime: "6 min read",
            date: "Dec 10, 2024",
            featured: false,
            slug: "sustainable-logistics-green-transportation",
            author: "BLI Logistics Team",
            metaDescription: "Learn about sustainable logistics practices, green transportation solutions, and eco-friendly supply chain strategies for environmental responsibility."
        },
        {
            title: "Last-Mile Delivery Optimization Strategies",
            excerpt: "Best practices for improving last-mile delivery efficiency while reducing costs and enhancing customer satisfaction.",
            image: "/lovable-uploads/services4.png",
            category: "Operational Tips",
            readTime: "4 min read",
            date: "Dec 8, 2024",
            featured: false,
            slug: "last-mile-delivery-optimization",
            author: "BLI Logistics Team",
            metaDescription: "Optimize last-mile delivery with proven strategies for route planning, delivery tracking, and customer satisfaction in urban logistics."
        },
        {
            title: "Cross-Border Logistics: Navigating International Trade",
            excerpt: "Key considerations and strategies for successful international logistics operations in today's global marketplace.",
            image: "/lovable-uploads/services5.jpg",
            category: "Industry Insights",
            readTime: "8 min read",
            date: "Dec 5, 2024",
            featured: false,
            slug: "cross-border-logistics-international-trade",
            author: "BLI Logistics Team",
            metaDescription: "Navigate cross-border logistics challenges with expert insights on customs, documentation, and international trade compliance strategies."
        },
        {
            title: "The Future of Cold Chain Logistics",
            excerpt: "Innovations in temperature-controlled transportation and storage solutions for pharmaceutical and food industries.",
            image: "/lovable-uploads/services6.jpg",
            category: "Logistics Trends",
            readTime: "6 min read",
            date: "Dec 3, 2024",
            featured: false,
            slug: "future-cold-chain-logistics",
            author: "BLI Logistics Team",
            metaDescription: "Explore the future of cold chain logistics with innovations in temperature monitoring, IoT sensors, and pharmaceutical transportation."
        }
    ];

    // Filter posts based on search and category
    const filteredPosts = useMemo(() => {
        let filtered = [...blogPosts];

        // Filter by search query (only in title for now)
        if (searchQuery.trim()) {
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
            );
        }

        // Filter by category
        if (activeCategory !== "All Posts") {
            filtered = filtered.filter(post => post.category === activeCategory);
        }

        return filtered;
    }, [searchQuery, activeCategory]);

    // Separate featured and non-featured posts
    const featuredPosts = filteredPosts.filter(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured);

    const popularPosts = [
        "Digital Transformation in Supply Chain Analytics",
        "AI-Powered Warehouse Automation Trends",
        "Last-Mile Delivery Optimization Strategies",
        "Cross-Border Logistics Guide"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2, duration: 0.8 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
    };

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const resetFilters = () => {
        setActiveCategory("All Posts");
        setSearchQuery("");
    };

    // Structured Data for Blog Listing
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "BLI Logistics Insights & Blog",
        "description": "Expert insights on logistics, supply chain management, warehouse automation, and transportation trends in India",
        "url": "https://www.blirapid.com/resources/blogs",
        "publisher": {
            "@type": "Organization",
            "name": "BLI - Bansal Logistics of India",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.blirapid.com/logo.png"
            }
        },
        "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "url": `https://www.blirapid.com/resources/blogs/${post.slug}`,
            "image": `https://www.blirapid.com${post.image}`,
            "datePublished": post.date,
            "author": {
                "@type": "Organization",
                "name": post.author
            },
            "publisher": {
                "@type": "Organization",
                "name": "BLI - Bansal Logistics of India"
            }
        }))
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
            }
        ]
    };

    return (
        <PageLayout>
            <Helmet>
                <title>Logistics Blog & Industry Insights | Supply Chain Trends | BLI</title>
                <meta name="description" content="Expert logistics insights on supply chain analytics, AI warehouse automation, sustainable transportation, last-mile delivery optimization. Stay updated with industry trends." />
                <meta name="keywords" content="logistics blog, supply chain insights, warehouse automation, transportation trends, logistics technology, sustainable logistics, last-mile delivery, cross-border logistics" />

                {/* Open Graph */}
                <meta property="og:title" content="Logistics Blog - Expert Supply Chain Insights | BLI" />
                <meta property="og:description" content="Stay informed with latest logistics trends, AI automation, sustainability practices, and supply chain best practices from industry experts." />
                <meta property="og:type" content="blog" />
                <meta property="og:url" content="https://www.blirapid.com/resources/blogs" />
                <meta property="og:image" content="https://www.blirapid.com/logistics-blog-insights.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Logistics Blog & Industry Insights | BLI" />
                <meta name="twitter:description" content="Expert insights on supply chain, warehouse automation, and logistics trends." />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.blirapid.com/resources/blogs" />

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
                        <nav aria-label="Breadcrumb" className="flex items-center text-[#F8FFFF]/80 mb-4 sm:mb-6 text-sm sm:text-base">
                            <Link to="/" className="hover:text-[#F8FFFF] transition-colors">Home</Link>
                            <span className="mx-2" aria-hidden="true">/</span>
                            <Link to="/resources" className="hover:text-[#F8FFFF] transition-colors">Resources</Link>
                            <span className="mx-2" aria-hidden="true">/</span>
                            <span className="text-[#F8FFFF]" aria-current="page">Blogs</span>
                        </nav>

                        <motion.h1
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#F8FFFF] leading-tight"
                        >
                            Logistics Insights & Blogs
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-base sm:text-lg md:text-xl text-[#F8FFFF]/90 max-w-3xl leading-relaxed px-2 sm:px-0"
                        >
                            Stay informed with the latest trends, insights, and best practices in logistics and supply chain management.
                        </motion.p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Main Content */}
                    <main className="flex-1">
                        {/* Search and Filter */}
                        <div className="mb-6 sm:mb-8">
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#21221C]/60" aria-hidden="true" />
                                    <Input
                                        placeholder="Search articles..."
                                        className="pl-10 border-[#185EAA]/20 focus:border-[#185EAA] text-sm sm:text-base"
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        aria-label="Search blog articles"
                                    />
                                </div>
                                {(searchQuery || activeCategory !== "All Posts") && (
                                    <Button
                                        variant="outline"
                                        className="border-[#185EAA]/30 text-[#113C6A] hover:bg-[#113C6A] hover:text-white text-sm sm:text-base px-3 sm:px-4"
                                        onClick={resetFilters}
                                        aria-label="Clear search and category filters"
                                    >
                                        Clear Filters
                                    </Button>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
                                {categories.map((category, index) => (
                                    <Badge
                                        key={index}
                                        className={cn(
                                            "cursor-pointer px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors",
                                            activeCategory === category
                                                ? "bg-[#FF7729] text-white hover:bg-[#e56721]"
                                                : "bg-transparent text-[#113C6A] border border-[#113C6A]/30 hover:bg-[#113C6A] hover:text-white"
                                        )}
                                        onClick={() => handleCategoryClick(category)}
                                        role="button"
                                        aria-pressed={activeCategory === category}
                                        aria-label={`Filter by ${category}`}
                                    >
                                        {category}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Featured Posts - Only show if there are featured posts after filtering */}
                        {featuredPosts.length > 0 && (
                            <section className="mb-8 sm:mb-12" aria-labelledby="featured-articles-heading">
                                <h2 id="featured-articles-heading" className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#113C6A]">Featured Articles</h2>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={containerVariants}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
                                    role="list"
                                >
                                    {featuredPosts.map((post, index) => (
                                        <motion.article
                                            key={index}
                                            variants={itemVariants}
                                            className="rounded-xl overflow-hidden bg-white border border-[#185EAA]/20 group hover:shadow-lg transition-shadow"
                                            role="listitem"
                                        >
                                            <Link to={`/resources/blogs/${post.slug}`} aria-label={`Read article: ${post.title}`}>
                                                <div className="aspect-video overflow-hidden">
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="p-4 sm:p-6">
                                                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#21221C]/60 mb-2 sm:mb-3">
                                                        <Badge className="bg-[#113C6A]/10 text-[#113C6A] hover:bg-[#113C6A]/20 border-0 text-xs">
                                                            {post.category}
                                                        </Badge>
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="h-3 w-3" aria-hidden="true" />
                                                            <span>{post.readTime}</span>
                                                        </span>
                                                        <time dateTime={post.date} className="hidden sm:inline">{post.date}</time>
                                                    </div>
                                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#113C6A] group-hover:text-[#FF7729] transition-colors leading-tight">
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-sm sm:text-base text-[#21221C]/70 mb-3 sm:mb-4 line-clamp-3">{post.excerpt}</p>
                                                    <span className="inline-flex items-center text-sm text-[#FF7729] hover:underline">
                                                        Read More
                                                        <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" aria-hidden="true" />
                                                    </span>
                                                </div>
                                            </Link>
                                        </motion.article>
                                    ))}
                                </motion.div>
                            </section>
                        )}

                        {/* All Posts */}
                        <section aria-labelledby="all-articles-heading">
                            <h2 id="all-articles-heading" className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#113C6A]">
                                {filteredPosts.length > 0 ? "All Articles" : "No Articles Found"}
                            </h2>

                            {filteredPosts.length === 0 ? (
                                <div className="text-center py-8 sm:py-12 bg-[#F8FFFF] rounded-xl border border-[#185EAA]/20">
                                    <div className="mb-4">
                                        <Filter className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-[#185EAA]/40 mb-3" aria-hidden="true" />
                                        <h3 className="text-base sm:text-lg font-medium text-[#113C6A] mb-2">No Articles Found</h3>
                                        <p className="text-sm sm:text-base text-[#21221C]/70 mb-4 px-4">
                                            {searchQuery
                                                ? `No articles match "${searchQuery}" in the ${activeCategory === "All Posts" ? "selected" : activeCategory} category.`
                                                : `No articles found in the ${activeCategory} category.`
                                            }
                                        </p>
                                    </div>
                                    <Button
                                        className="bg-[#113C6A] hover:bg-[#185EAA] text-white text-sm sm:text-base px-4 sm:px-6"
                                        onClick={resetFilters}
                                        aria-label="Reset filters and show all articles"
                                    >
                                        Show All Articles
                                    </Button>
                                </div>
                            ) : (
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={containerVariants}
                                    className="grid gap-4 sm:gap-6"
                                    role="list"
                                >
                                    {regularPosts.map((post, index) => (
                                        <motion.article
                                            key={index}
                                            variants={itemVariants}
                                            className="rounded-xl overflow-hidden bg-white border border-[#185EAA]/20 group hover:shadow-md transition-shadow"
                                            role="listitem"
                                        >
                                            <Link to={`/resources/blogs/${post.slug}`} aria-label={`Read article: ${post.title}`}>
                                                <div className="flex flex-col md:flex-row">
                                                    <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden">
                                                        <img
                                                            src={post.image}
                                                            alt={post.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="md:w-2/3 p-4 sm:p-6">
                                                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#21221C]/60 mb-2 sm:mb-3">
                                                            <Badge className="bg-[#113C6A]/10 text-[#113C6A] hover:bg-[#113C6A]/20 border-0 text-xs">
                                                                {post.category}
                                                            </Badge>
                                                            <span className="flex items-center gap-1">
                                                                <Clock className="h-3 w-3" aria-hidden="true" />
                                                                <span>{post.readTime}</span>
                                                            </span>
                                                            <time dateTime={post.date} className="hidden sm:inline">{post.date}</time>
                                                        </div>
                                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#113C6A] group-hover:text-[#FF7729] transition-colors leading-tight">
                                                            {post.title}
                                                        </h3>
                                                        <p className="text-sm sm:text-base text-[#21221C]/70 mb-3 sm:mb-4 line-clamp-3">{post.excerpt}</p>
                                                        <span className="inline-flex items-center text-sm text-[#FF7729] hover:underline">
                                                            Read More
                                                            <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" aria-hidden="true" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </motion.article>
                                    ))}
                                </motion.div>
                            )}
                        </section>
                    </main>

                    {/* Sidebar */}
                    <aside className="lg:w-80 order-last" aria-label="Blog sidebar">
                        <div className="lg:sticky lg:top-24 space-y-6 sm:space-y-8">
                            {/* Newsletter Signup */}
                            <section className="rounded-xl p-4 sm:p-6 bg-[#F8FFFF] border border-[#185EAA]/20" aria-labelledby="newsletter-heading">
                                <h3 id="newsletter-heading" className="font-semibold mb-3 sm:mb-4 text-[#113C6A] text-base sm:text-lg">Stay Updated</h3>
                                <p className="text-xs sm:text-sm text-[#21221C]/70 mb-3 sm:mb-4">
                                    Get the latest logistics insights delivered to your inbox.
                                </p>
                                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                                    <Input
                                        type="email"
                                        placeholder="Your email address"
                                        className="border-[#185EAA]/20 focus:border-[#185EAA] text-sm"
                                        required
                                        aria-label="Email address for newsletter subscription"
                                    />
                                    <Button
                                        type="submit"
                                        className="w-full bg-[#FF7729] hover:bg-[#e56721] text-white text-sm sm:text-base"
                                        aria-label="Subscribe to newsletter"
                                    >
                                        Subscribe
                                    </Button>
                                </form>
                            </section>

                            {/* Popular Posts */}
                            <section className="rounded-xl p-4 sm:p-6 bg-white border border-[#185EAA]/20" aria-labelledby="popular-posts-heading">
                                <h3 id="popular-posts-heading" className="font-semibold mb-3 sm:mb-4 text-[#113C6A] text-base sm:text-lg">Popular Posts</h3>
                                <nav aria-label="Popular blog posts">
                                    <ul className="space-y-3">
                                        {popularPosts.map((post, index) => (
                                            <li key={index} className="pb-3 border-b border-[#185EAA]/10 last:border-b-0">
                                                <Link
                                                    to="#"
                                                    className="text-xs sm:text-sm font-medium text-[#21221C] hover:text-[#FF7729] transition-colors leading-tight block"
                                                >
                                                    {post}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </section>

                            {/* Quick Filter by Category */}
                            <section className="rounded-xl p-4 sm:p-6 bg-white border border-[#185EAA]/20" aria-labelledby="categories-heading">
                                <h3 id="categories-heading" className="font-semibold mb-3 sm:mb-4 text-[#113C6A] text-base sm:text-lg">Categories</h3>
                                <nav aria-label="Blog categories">
                                    <ul className="space-y-2">
                                        {categories.map((category, index) => (
                                            <li key={index}>
                                                <button
                                                    onClick={() => handleCategoryClick(category)}
                                                    className={cn(
                                                        "w-full text-left px-3 py-2 rounded text-xs sm:text-sm transition-colors flex justify-between items-center",
                                                        activeCategory === category
                                                            ? "bg-[#FF7729] text-white"
                                                            : "text-[#21221C] hover:bg-[#113C6A]/10"
                                                    )}
                                                    aria-pressed={activeCategory === category}
                                                    aria-label={`Filter by ${category} category`}
                                                >
                                                    <span className="truncate">{category}</span>
                                                    <span className="text-xs opacity-70" aria-label={`${category === "All Posts" ? blogPosts.length : blogPosts.filter(post => post.category === category).length} posts`}>
                                                        {category === "All Posts"
                                                            ? blogPosts.length
                                                            : blogPosts.filter(post => post.category === category).length
                                                        }
                                                    </span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </section>

                            {/* CTA */}
                            <section className="rounded-xl p-4 sm:p-6 bg-[#113C6A] text-[#F8FFFF]" aria-labelledby="cta-heading">
                                <h3 id="cta-heading" className="font-semibold mb-2 text-base sm:text-lg">Need Logistics Solutions?</h3>
                                <p className="text-xs sm:text-sm opacity-90 mb-3 sm:mb-4">
                                    Ready to optimize your supply chain? Get a customized quote.
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-colors text-sm sm:text-base"
                                    aria-label="Get logistics quote"
                                >
                                    Get Quote
                                </Link>
                            </section>
                        </div>
                    </aside>
                </div>
            </div>
        </PageLayout>
    );
};

export default Blogs;