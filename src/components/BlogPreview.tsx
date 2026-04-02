import { useRef, useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import BlogPostCard from "@/components/BlogPostCard";
import { blogPosts } from "@/data/blogPosts";
import { motion, useAnimation, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";

const MemoizedBlogPostCard = memo(BlogPostCard);

const BlogPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const slides = Array.from(carouselRef.current.children);
      if (slides[index]) {
        slides[index].scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
        setActiveSlide(index);
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50)
      scrollToSlide(Math.min(recentPosts.length - 1, activeSlide + 1));
    else if (distance < -50) scrollToSlide(Math.max(0, activeSlide - 1));
  };

  useEffect(() => {
    if (!carouselRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slides = Array.from(carouselRef.current?.children || []);
            const index = slides.findIndex((slide) => slide === entry.target);
            if (index !== -1) setActiveSlide(index);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.7 },
    );
    const slides = Array.from(carouselRef.current.children);
    slides.forEach((slide) => observer.observe(slide));
    return () => slides.forEach((slide) => observer.unobserve(slide));
  }, []);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    headline: "BLI Logistics Blog",
    description:
      "Latest insights on logistics, transportation, and supply chain management from BLI.",
    publisher: {
      "@type": "Organization",
      name: "BLI - Bansal Logistics of India",
      logo: {
        "@type": "ImageObject",
        url: "https://blirapid.com/lovable-uploads/8.png",
      },
    },
    blogPost: recentPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: post.image || "https://blirapid.com/placeholder.svg",
      datePublished: post.date,
      url: `https://blirapid.com/resources/blogs/${post.slug}`,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      </Helmet>

      <section
        id="blog"
        ref={sectionRef}
        className="bg-white py-20 sm:py-24 md:py-28"
        aria-labelledby="blog-heading"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* ── Header ── */}
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Left */}
            <div>
              {/* Label */}
              <p
                className="font-semibold uppercase tracking-widest mb-3"
                style={{
                  fontSize: "14px",
                  lineHeight: "17px",
                  color: "rgb(28, 24, 37)",
                }}
              >
                Our Blog
              </p>
              {/* Heading */}
              <h2
                id="blog-heading"
                className="font-bold uppercase tracking-normal mb-3"
                style={{
                  fontSize: "52px",
                  lineHeight: "60px",
                  color: "rgb(0, 0, 0)",
                }}
              >
                <span className="block">Latest Insights</span>
                <span className="block">& Updates</span>
              </h2>
              {/* Description */}
              <p
                className="font-light max-w-lg"
                style={{
                  fontSize: "20px",
                  lineHeight: "29px",
                  color: "rgb(28, 24, 37)",
                }}
              >
                Stay informed with the latest insights on logistics,
                transportation trends, and industry best practices.
              </p>
            </div>

            {/* Right View All button */}
            <div className="flex-shrink-0">
              <Link
                to="/resources/blogs"
                className="group relative inline-flex items-center gap-2.5 border border-[#1a1a1a] px-6 py-2.5"
              >
                <span className="font-medium text-sm text-[#1a1a1a]">
                  View All Posts
                </span>
                <ArrowRight className="w-4 h-4 text-[#FF7300] group-hover:translate-x-1.5 transition-all duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* ── Cards ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Mobile carousel */}
            <div className="md:hidden">
              <div
                className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  ref={carouselRef}
                  className="flex w-full"
                  role="region"
                  aria-label="Blog posts carousel"
                >
                  {recentPosts.map((post) => (
                    <div
                      key={post.title}
                      className="w-full flex-shrink-0 snap-center [&_.rounded-xl]:rounded-none [&_.rounded-lg]:rounded-none [&_.rounded]:rounded-none"
                    >
                      <MemoizedBlogPostCard
                        title={post.title}
                        excerpt={post.excerpt}
                        imageUrl={post.image || "/placeholder.svg"}
                        date={post.date}
                        slug={post.slug}
                        category={post.category}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile nav */}
              <div className="mt-6 flex justify-center items-center gap-4">
                <button
                  onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
                  disabled={activeSlide === 0}
                  className="w-9 h-9 border border-gray-200 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white disabled:opacity-30 transition-all duration-300"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="flex gap-2">
                  {recentPosts.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => scrollToSlide(i)}
                      className={`h-[3px] transition-all duration-300 ${
                        i === activeSlide
                          ? "bg-[#FF7300] w-8"
                          : "bg-gray-300 w-4"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    scrollToSlide(
                      Math.min(recentPosts.length - 1, activeSlide + 1),
                    )
                  }
                  disabled={activeSlide === recentPosts.length - 1}
                  className="w-9 h-9 border border-gray-200 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white disabled:opacity-30 transition-all duration-300"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Desktop grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 [&_.rounded-xl]:rounded-none [&_.rounded-lg]:rounded-none [&_.rounded]:rounded-none">
              {recentPosts.map((post) => (
                <MemoizedBlogPostCard
                  key={post.title}
                  title={post.title}
                  excerpt={post.excerpt}
                  imageUrl={post.image || "/placeholder.svg"}
                  date={post.date}
                  slug={post.slug}
                  category={post.category}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default memo(BlogPreview);
