import { useRef, useEffect, useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Memoized blog post card wrapper
const MemoizedBlogPostCard = memo(BlogPostCard);

// Pagination indicator component
const PaginationIndicator = memo(({ active, index, onClick }: { active: boolean; index: number; onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={`h-1.5 rounded-full transition-all duration-300 ${active ? 'w-6 bg-[#FF7729]' : 'w-2 bg-[#185EAA]/30 hover:bg-[#185EAA]/50'
      }`}
    aria-label={`Go to slide ${index + 1}`}
    aria-current={active ? 'true' : 'false'}
  />
));

const BlogPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Get the 3 most recent blog posts
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Start animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Handle mobile carousel navigation
  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      // Get all slides
      const slides = Array.from(carouselRef.current.children);
      if (slides[index]) {
        // Scroll to the selected slide
        slides[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        setActiveSlide(index);
      }
    }
  };

  // Handle touch events for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left, go to next slide
      const nextSlide = Math.min(recentPosts.length - 1, activeSlide + 1);
      scrollToSlide(nextSlide);
    } else if (distance < -minSwipeDistance) {
      // Swiped right, go to previous slide
      const prevSlide = Math.max(0, activeSlide - 1);
      scrollToSlide(prevSlide);
    }
  };

  // Handle intersection observer for each slide
  useEffect(() => {
    if (!carouselRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the index of the visible slide
            const slides = Array.from(carouselRef.current?.children || []);
            const index = slides.findIndex(slide => slide === entry.target);
            if (index !== -1) {
              setActiveSlide(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.7 // Consider a slide visible when 70% is in view
      }
    );

    // Observe all slides
    const slides = Array.from(carouselRef.current.children);
    slides.forEach(slide => observer.observe(slide));

    return () => {
      slides.forEach(slide => observer.unobserve(slide));
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Structured data for SEO
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "headline": "BLI Logistics Blog",
    "description": "Latest insights on logistics, transportation, and supply chain management from BLI.",
    "publisher": {
      "@type": "Organization",
      "name": "BLI - Bansal Logistics of India",
      "logo": {
        "@type": "ImageObject",
        "url": "https://blirapid.com/lovable-uploads/8.png"
      }
    },
    "blogPost": recentPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.image || "https://blirapid.com/placeholder.svg",
      "datePublished": post.date,
      "url": `https://blirapid.com/resources/blogs/${post.slug}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      </Helmet>

      <section
        id="blog"
        ref={sectionRef}
        className="py-12 md:py-24 px-0 md:px-12 bg-[#]"
        aria-labelledby="blog-heading"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-3">
                <Newspaper size={20} className="text-[#185EAA]" />
                <span className="text-[#113C6A] font-medium">Our Blog</span>
              </div>
              <h2 id="blog-heading" className="text-3xl md:text-4xl font-bold mb-4 text-[#113C6A]">Latest Updates</h2>
              <p className="text-[#0a213a]/90 max-w-xl">
                Stay informed with the latest insights on logistics, transportation trends, and industry best practices.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className='md:mt-0 mt-2'>
              <Link to="/resources/blogs" className="mt-4">
                <Button
                  variant="outline"
                  className="group border-[#185EAA] text-[#113C6A] hover:bg-[#113C6A] hover:text-[#FFFDF7] hover:border-[#113C6A]"
                  aria-label="View all blog posts"
                >
                  View All Posts
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            {/* Mobile carousel - ONE CARD AT A TIME */}
            <div className="md:hidden relative">
              {/* Mobile swipeable carousel */}
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
                  {recentPosts.map((post, index) => (
                    <div
                      key={post.title}
                      className="w-full flex-shrink-0 flex-grow-0 snap-center"
                      style={{ scrollSnapAlign: 'center' }}
                    >
                      <MemoizedBlogPostCard
                        title={post.title}
                        excerpt={post.excerpt}
                        imageUrl={post.image || '/placeholder.svg'}
                        date={post.date}
                        slug={post.slug}
                        category={post.category}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile navigation controls */}
              <div className="mt-6 flex justify-center items-center">
                <button
                  onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
                  className="mr-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-[#185EAA] hover:text-[#113C6A] transition-colors border border-[#185EAA]/20"
                  aria-label="Previous blog post"
                  disabled={activeSlide === 0}
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="flex gap-2">
                  {recentPosts.map((_, i) => (
                    <PaginationIndicator
                      key={i}
                      active={i === activeSlide}
                      index={i}
                      onClick={() => scrollToSlide(i)}
                    />
                  ))}
                </div>

                <button
                  onClick={() => scrollToSlide(Math.min(recentPosts.length - 1, activeSlide + 1))}
                  className="ml-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-[#185EAA] hover:text-[#113C6A] transition-colors border border-[#185EAA]/20"
                  aria-label="Next blog post"
                  disabled={activeSlide === recentPosts.length - 1}
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Swipe instruction */}
              <div className="flex items-center justify-center mt-2 text-[#185EAA]/60 text-xs">
                <ChevronLeft size={12} />
                <span className="mx-1">Swipe to navigate</span>
                <ChevronRight size={12} />
              </div>
            </div>

            {/* Desktop grid layout - KEEP UNCHANGED */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <MemoizedBlogPostCard
                  key={post.title}
                  title={post.title}
                  excerpt={post.excerpt}
                  imageUrl={post.image || '/placeholder.svg'}
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