
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
            slug: "digital-transformation-supply-chain-analytics"
        },
        {
            title: "AI-Powered Warehouse Automation Trends",
            excerpt: "Exploring the latest developments in artificial intelligence for warehouse management and how they're reshaping the logistics landscape.",
            image: "/lovable-uploads/services2.jpg",
            category: "Technology",
            readTime: "7 min read",
            date: "Dec 12, 2024",
            featured: true,
            slug: "ai-powered-warehouse-automation"
        },
        {
            title: "Sustainable Logistics: Green Transportation Solutions",
            excerpt: "Environmental initiatives driving the future of eco-friendly logistics operations and sustainable supply chain practices.",
            image: "/lovable-uploads/services3.png",
            category: "Sustainability",
            readTime: "6 min read",
            date: "Dec 10, 2024",
            featured: false,
            slug: "sustainable-logistics-green-transportation"
        },
        {
            title: "Last-Mile Delivery Optimization Strategies",
            excerpt: "Best practices for improving last-mile delivery efficiency while reducing costs and enhancing customer satisfaction.",
            image: "/lovable-uploads/services4.png",
            category: "Operational Tips",
            readTime: "4 min read",
            date: "Dec 8, 2024",
            featured: false,
            slug: "last-mile-delivery-optimization"
        },
        {
            title: "Cross-Border Logistics: Navigating International Trade",
            excerpt: "Key considerations and strategies for successful international logistics operations in today's global marketplace.",
            image: "/lovable-uploads/services5.jpg",
            category: "Industry Insights",
            readTime: "8 min read",
            date: "Dec 5, 2024",
            featured: false,
            slug: "cross-border-logistics-international-trade"
        },
        {
            title: "The Future of Cold Chain Logistics",
            excerpt: "Innovations in temperature-controlled transportation and storage solutions for pharmaceutical and food industries.",
            image: "/lovable-uploads/services6.jpg",
            category: "Logistics Trends",
            readTime: "6 min read",
            date: "Dec 3, 2024",
            featured: false,
            slug: "future-cold-chain-logistics"
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
        console.log("Search query:", value); // Debug log
    };

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        console.log("Category clicked:", category); // Debug log
    };
    const resetFilters = () => {
        setActiveCategory("All Posts");
        setSearchQuery("");
        console.log("Filters reset"); // Debug log
    };
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
                            <span className="text-[#F8FFFF]">Blogs</span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-bold mb-6 text-[#F8FFFF]"
                        >
                            Logistics Insights & Blogs
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-xl text-[#F8FFFF]/90 max-w-3xl"
                        >
                            Stay informed with the latest trends, insights, and best practices in logistics and supply chain management.
                        </motion.p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Search and Filter */}
                        <div className="mb-8">
                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#21221C]/60" />
                                    <Input
                                        placeholder="Search articles..."
                                        className="pl-10 border-[#185EAA]/20 focus:border-[#185EAA]"
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                    />
                                </div>
                                {(searchQuery || activeCategory !== "All Posts") && (
                                    <Button
                                        variant="outline"
                                        className="border-[#185EAA]/30 text-[#113C6A] hover:bg-[#113C6A] hover:text-white"
                                        onClick={resetFilters}
                                    >
                                        Clear Filters
                                    </Button>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {categories.map((category, index) => (
                                    <Badge
                                        key={index}
                                        className={cn(
                                            "cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-colors",
                                            activeCategory === category
                                                ? "bg-[#FF7729] text-white hover:bg-[#e56721]"
                                                : "bg-transparent text-[#113C6A] border border-[#113C6A]/30 hover:bg-[#113C6A] hover:text-white"
                                        )}
                                        onClick={() => handleCategoryClick(category)}
                                    >
                                        {category}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Featured Posts - Only show if there are featured posts after filtering */}
                        {featuredPosts.length > 0 && (
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 text-[#113C6A]">Featured Articles</h2>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={containerVariants}
                                    className="grid md:grid-cols-2 gap-6"
                                >
                                    {featuredPosts.map((post, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
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
                                                <div className="flex items-center gap-4 text-sm text-[#21221C]/60 mb-3">
                                                    <Badge className="bg-[#113C6A]/10 text-[#113C6A] hover:bg-[#113C6A]/20 border-0">
                                                        {post.category}
                                                    </Badge>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="h-3 w-3" />
                                                        {post.readTime}
                                                    </span>
                                                    <span>{post.date}</span>
                                                </div>
                                                <h3 className="text-xl font-semibold mb-3 text-[#113C6A] group-hover:text-[#FF7729] transition-colors">
                                                    {post.title}
                                                </h3>
                                                <p className="text-[#21221C]/70 mb-4">{post.excerpt}</p>
                                                <Link
                                                    to={`/resources/blogs/${post.slug}`}
                                                    className="inline-flex items-center text-[#FF7729] hover:underline"
                                                >
                                                    Read More
                                                    <ArrowRight className="ml-1 h-4 w-4" />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        )}

                        {/* All Posts */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-[#113C6A]">
                                {filteredPosts.length > 0 ? "All Articles" : "No Articles Found"}
                            </h2>

                            {filteredPosts.length === 0 ? (
                                <div className="text-center py-12 bg-[#F8FFFF] rounded-xl border border-[#185EAA]/20">
                                    <div className="mb-4">
                                        <Filter className="h-12 w-12 mx-auto text-[#185EAA]/40 mb-3" />
                                        <h3 className="text-lg font-medium text-[#113C6A] mb-2">No Articles Found</h3>
                                        <p className="text-[#21221C]/70 mb-4">
                                            {searchQuery
                                                ? `No articles match "${searchQuery}" in the ${activeCategory === "All Posts" ? "selected" : activeCategory} category.`
                                                : `No articles found in the ${activeCategory} category.`
                                            }
                                        </p>
                                    </div>
                                    <Button
                                        className="bg-[#113C6A] hover:bg-[#185EAA] text-white"
                                        onClick={resetFilters}
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
                                    className="grid gap-6"
                                >
                                    {regularPosts.map((post, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="rounded-xl overflow-hidden bg-white border border-[#185EAA]/20 group hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex flex-col md:flex-row">
                                                <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden">
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                                <div className="md:w-2/3 p-6">
                                                    <div className="flex items-center gap-4 text-sm text-[#21221C]/60 mb-3">
                                                        <Badge className="bg-[#113C6A]/10 text-[#113C6A] hover:bg-[#113C6A]/20 border-0">
                                                            {post.category}
                                                        </Badge>
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="h-3 w-3" />
                                                            {post.readTime}
                                                        </span>
                                                        <span>{post.date}</span>
                                                    </div>
                                                    <h3 className="text-xl font-semibold mb-3 text-[#113C6A] group-hover:text-[#FF7729] transition-colors">
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-[#21221C]/70 mb-4">{post.excerpt}</p>
                                                    <Link
                                                        to={`/resources/blogs/${post.slug}`}
                                                        className="inline-flex items-center text-[#FF7729] hover:underline"
                                                    >
                                                        Read More
                                                        <ArrowRight className="ml-1 h-4 w-4" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-80">
                        <div className="lg:sticky lg:top-24 space-y-8">
                            {/* Newsletter Signup */}
                            <div className="rounded-xl p-6 bg-[#F8FFFF] border border-[#185EAA]/20">
                                <h3 className="font-semibold mb-4 text-[#113C6A]">Stay Updated</h3>
                                <p className="text-sm text-[#21221C]/70 mb-4">
                                    Get the latest logistics insights delivered to your inbox.
                                </p>
                                <div className="space-y-3">
                                    <Input placeholder="Your email address" className="border-[#185EAA]/20 focus:border-[#185EAA]" />
                                    <Button className="w-full bg-[#FF7729] hover:bg-[#e56721] text-white">Subscribe</Button>
                                </div>
                            </div>

                            {/* Popular Posts */}
                            <div className="rounded-xl p-6 bg-white border border-[#185EAA]/20">
                                <h3 className="font-semibold mb-4 text-[#113C6A]">Popular Posts</h3>
                                <div className="space-y-3">
                                    {popularPosts.map((post, index) => (
                                        <div key={index} className="pb-3 border-b border-[#185EAA]/10 last:border-b-0">
                                            <h4 className="text-sm font-medium text-[#21221C] hover:text-[#FF7729] cursor-pointer transition-colors">
                                                {post}
                                            </h4>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Filter by Category */}
                            <div className="rounded-xl p-6 bg-white border border-[#185EAA]/20">
                                <h3 className="font-semibold mb-4 text-[#113C6A]">Categories</h3>
                                <div className="space-y-2">
                                    {categories.map((category, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleCategoryClick(category)}
                                            className={cn(
                                                "w-full text-left px-3 py-2 rounded text-sm transition-colors",
                                                activeCategory === category
                                                    ? "bg-[#FF7729] text-white"
                                                    : "text-[#21221C] hover:bg-[#113C6A]/10"
                                            )}
                                        >
                                            {category}
                                            <span className="float-right text-xs opacity-70">
                                                {category === "All Posts"
                                                    ? blogPosts.length
                                                    : blogPosts.filter(post => post.category === category).length
                                                }
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="rounded-xl p-6 bg-[#113C6A] text-[#F8FFFF]">
                                <h3 className="font-semibold mb-2">Need Logistics Solutions?</h3>
                                <p className="text-sm opacity-90 mb-4">
                                    Ready to optimize your supply chain? Get a customized quote.
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#FF7729] text-white rounded hover:bg-[#e56721] transition-colors"
                                >
                                    Get Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default Blogs;