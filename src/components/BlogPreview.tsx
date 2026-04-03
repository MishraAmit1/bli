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
        className="bg-white py-16 sm:py-20 lg:py-24"
        aria-labelledby="blog-heading"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* ── Header ── */}
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 lg:gap-8 mb-10 sm:mb-12 lg:mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Left */}
            <div>
              {/* Label */}
              <p className="font-semibold uppercase tracking-widest mb-2 sm:mb-3 text-[11px] sm:text-xs lg:text-[14px] lg:leading-[17px] text-[#1C1825]">
                Our Blog
              </p>
              {/* Heading */}
              <h2
                id="blog-heading"
                className="font-bold uppercase tracking-normal mb-3 sm:mb-4 text-[24px] leading-[30px] sm:text-[36px] sm:leading-[42px] lg:text-[52px] lg:leading-[60px] text-black"
              >
                <span className="block">Latest Insights</span>
                <span className="block">& Updates</span>
              </h2>
              {/* Description */}
              <p className="font-light max-w-lg text-sm sm:text-base lg:text-[20px] lg:leading-[29px] text-[#1C1825]">
                Stay informed with the latest insights on logistics,
                transportation trends, and industry best practices.
              </p>
            </div>

            {/* Right View All button */}
            <div className="flex-shrink-0">
              <Link
                to="/resources/blogs"
                className="group relative inline-flex items-center gap-2 sm:gap-2.5 border border-[#1a1a1a] px-5 sm:px-6 py-2 sm:py-2.5 hover:bg-[#1a1a1a] transition-all duration-300"
              >
                <span className="font-medium text-xs sm:text-sm text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                  View All Posts
                </span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
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
              <div className="mt-5 sm:mt-6 flex justify-center items-center gap-3 sm:gap-4">
                <button
                  onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
                  disabled={activeSlide === 0}
                  className="w-8 h-8 sm:w-9 sm:h-9 border border-gray-200 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white disabled:opacity-30 transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </button>

                <div className="flex gap-1.5 sm:gap-2">
                  {recentPosts.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => scrollToSlide(i)}
                      className={`h-[3px] transition-all duration-300 ${
                        i === activeSlide
                          ? "bg-[#FF7300] w-6 sm:w-8"
                          : "bg-gray-300 w-3 sm:w-4"
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
                  className="w-8 h-8 sm:w-9 sm:h-9 border border-gray-200 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white disabled:opacity-30 transition-all duration-300"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>

            {/* Desktop grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 [&_.rounded-xl]:rounded-none [&_.rounded-lg]:rounded-none [&_.rounded]:rounded-none">
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
