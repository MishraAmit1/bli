import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Clock,
  Calendar,
  User,
  Share2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Helmet } from "react-helmet-async";

const BlogPost = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = {
    "digital-transformation-supply-chain-analytics": {
      title: "Digital Transformation in Supply Chain Analytics",
      excerpt:
        "Analytics is reshaping logistics efficiency and visibility worldwide.",
      metaDescription:
        "Discover how digital transformation and data analytics are revolutionizing supply chain operations. Learn about AI, IoT, predictive analytics, and real-time visibility in logistics.",
      keywords:
        "digital transformation logistics, supply chain analytics, predictive analytics logistics, IoT supply chain, real-time visibility, logistics data analytics",
      image:
        "https://i.pinimg.com/736x/4d/e5/ad/4de5add391b426b1f263c23fc76b612f.jpg",
      category: "Technology",
      readTime: "5 min read",
      date: "December 15, 2024",
      dateISO: "2024-12-15",
      author: "Rajesh Kumar",
      authorRole: "Supply Chain Technology Expert",
      content: `
        <p>The logistics industry is experiencing a paradigm shift as digital transformation reshapes how supply chains operate. Data-driven analytics are no longer just a competitive advantage — they're becoming essential for survival in today's fast-paced marketplace.</p>
        <h2>The Power of Predictive Analytics</h2>
        <p>Modern logistics companies are leveraging predictive analytics to forecast demand patterns, optimize inventory levels, and prevent potential disruptions before they occur. By analyzing historical data, weather patterns, market trends, and consumer behavior, businesses can make informed decisions that significantly reduce costs and improve service levels.</p>
        <h2>Real-Time Visibility Revolution</h2>
        <p>Gone are the days of "black box" shipments. Today's supply chain analytics provide real-time visibility into every aspect of the logistics process. From GPS tracking and IoT sensors to automated status updates, businesses now have unprecedented insight into their operations.</p>
        <blockquote>"Companies using advanced analytics in their supply chain operations report up to 25% reduction in logistics costs and 30% improvement in delivery performance." - Supply Chain Management Review</blockquote>
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
      `,
    },
    "ai-powered-warehouse-automation": {
      title: "AI-Powered Warehouse Automation Trends",
      excerpt:
        "Smarter AI-driven automation is redefining warehouse management.",
      metaDescription:
        "Explore AI-powered warehouse automation trends including robotics, machine learning, smart inventory management, and predictive maintenance.",
      keywords:
        "AI warehouse automation, warehouse robotics, smart inventory management, predictive maintenance, warehouse AI",
      image:
        "https://i.pinimg.com/736x/16/b4/36/16b436e3702ffcb459c2fcb598f2f7e9.jpg",
      category: "Technology",
      readTime: "7 min read",
      date: "December 12, 2024",
      dateISO: "2024-12-12",
      author: "Priya Sharma",
      authorRole: "Warehouse Automation Specialist",
      content: `
        <p>Warehouse automation powered by artificial intelligence is transforming the logistics landscape. From robotic picking systems to intelligent inventory management, AI is driving unprecedented efficiency gains in warehouse operations.</p>
        <h2>The Rise of Intelligent Robotics</h2>
        <p>Modern warehouses are increasingly deploying AI-powered robots that can navigate complex environments, pick items with precision, and collaborate safely with human workers.</p>
        <h2>Smart Inventory Management</h2>
        <p>AI algorithms are revolutionizing how warehouses manage inventory. Predictive analytics help forecast demand, optimize stock levels, and reduce waste.</p>
        <h2>Key AI Applications in Warehouses</h2>
        <ul>
          <li><strong>Automated Picking Systems:</strong> Robots equipped with computer vision can identify, pick, and sort items with remarkable accuracy.</li>
          <li><strong>Predictive Maintenance:</strong> AI monitors equipment health and predicts failures before they occur, reducing downtime.</li>
          <li><strong>Dynamic Slotting:</strong> Machine learning optimizes product placement based on demand patterns and picking efficiency.</li>
          <li><strong>Quality Control:</strong> Computer vision systems inspect products for defects and ensure quality standards.</li>
        </ul>
        <h2>Benefits and ROI</h2>
        <ul>
          <li>40-60% increase in picking accuracy</li>
          <li>25-35% reduction in operational costs</li>
          <li>50-70% improvement in order fulfillment speed</li>
          <li>90% reduction in inventory discrepancies</li>
        </ul>
        <p>The future of warehouse operations lies in the seamless integration of AI technologies that enhance rather than replace human capabilities.</p>
      `,
    },
    "sustainable-logistics-green-transportation": {
      title: "Sustainable Logistics: Green Transportation Solutions",
      excerpt:
        "Eco-friendly logistics tactics are securing a greener supply chain.",
      metaDescription:
        "Learn about sustainable logistics practices, green transportation solutions, electric vehicles in logistics, and eco-friendly supply chain strategies.",
      keywords:
        "sustainable logistics, green transportation, eco-friendly logistics, electric vehicles logistics, carbon footprint reduction",
      image:
        "https://i.pinimg.com/1200x/e3/50/45/e35045144cec7d7d202269096fb5d71e.jpg",
      category: "Sustainability",
      readTime: "6 min read",
      date: "December 10, 2024",
      dateISO: "2024-12-10",
      author: "Amit Patel",
      authorRole: "Sustainability Consultant",
      content: `
        <p>As environmental concerns take center stage globally, the logistics industry is embracing sustainable practices that reduce carbon footprint while maintaining operational efficiency.</p>
        <h2>The Sustainability Imperative</h2>
        <p>The transportation sector accounts for approximately 24% of global CO2 emissions, making it a critical area for environmental improvement.</p>
        <h2>Electric Vehicle Revolution</h2>
        <p>Electric vehicles (EVs) are leading the charge in sustainable logistics. From last-mile delivery vans to long-haul trucks, electric options are becoming increasingly viable.</p>
        <h2>Green Logistics Strategies</h2>
        <ul>
          <li><strong>Route Optimization:</strong> AI-powered systems minimize fuel consumption by calculating the most efficient routes.</li>
          <li><strong>Load Consolidation:</strong> Maximizing vehicle capacity reduces the number of trips required.</li>
          <li><strong>Alternative Fuels:</strong> Biodiesel, hydrogen, and compressed natural gas offer cleaner alternatives.</li>
          <li><strong>Intermodal Transportation:</strong> Combining rail, road, and water transport reduces overall environmental impact.</li>
        </ul>
        <p>The future of logistics is green, and companies that invest in sustainable transportation solutions today will be the leaders of tomorrow's eco-friendly supply chains.</p>
      `,
    },
    "last-mile-delivery-optimization": {
      title: "Last-Mile Delivery Optimization Strategies",
      excerpt:
        "Effective practices for faster, cheaper, and more accurate deliveries.",
      metaDescription:
        "Optimize last-mile delivery with proven strategies for route planning, micro-fulfillment centers, delivery tracking, and customer satisfaction in urban logistics.",
      keywords:
        "last-mile delivery optimization, urban logistics, delivery route planning, micro-fulfillment centers",
      image:
        "https://i.pinimg.com/1200x/25/e6/00/25e600f4f9d7f5bd381fbe033d21183b.jpg",
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
        <p>Success in last-mile delivery requires balancing speed, cost, and customer satisfaction while continuously adapting to changing market demands.</p>
      `,
    },
    "cross-border-logistics-international-trade": {
      title: "Cross-Border Logistics: Navigating International Trade",
      excerpt:
        "Practical strategies for smooth and compliant international logistics.",
      metaDescription:
        "Navigate cross-border logistics challenges with expert insights on customs procedures, documentation, international trade compliance, and strategic partnerships.",
      keywords:
        "cross-border logistics, international trade logistics, customs procedures, trade documentation",
      image:
        "https://i.pinimg.com/736x/b0/8a/74/b08a747bc276c46fa62ef903447b3af7.jpg",
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
      `,
    },
    "future-cold-chain-logistics": {
      title: "The Future of Cold Chain Logistics",
      excerpt:
        "Next-gen cold chain solutions are advancing safe product transport.",
      metaDescription:
        "Explore the future of cold chain logistics with innovations in temperature monitoring, IoT sensors, pharmaceutical transportation, and sustainable refrigeration technologies.",
      keywords:
        "cold chain logistics, temperature-controlled transportation, pharmaceutical logistics, cold storage, IoT cold chain",
      image:
        "https://i.pinimg.com/1200x/25/6c/2e/256c2e61a6d6f79148ba35b87510541b.jpg",
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
      `,
    },
  };

  const currentPost = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!currentPost) {
    return (
      <PageLayout>
        <Helmet>
          <title>Blog Post Not Found | BLI Logistics</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center">
          <h1
            className="font-bold uppercase tracking-normal mb-4"
            style={{
              fontSize: "52px",
              lineHeight: "60px",
              color: "rgb(0,0,0)",
            }}
          >
            Post Not Found
          </h1>
          <p
            className="font-light mb-8"
            style={{
              fontSize: "20px",
              lineHeight: "29px",
              color: "rgb(28,24,37)",
            }}
          >
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/resources/blogs"
            className="group inline-flex items-center gap-2.5 border border-[#1a1a1a] px-6 py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
          >
            <span className="font-medium text-sm text-[#1a1a1a] group-hover:text-white transition-colors">
              Back to Blogs
            </span>
            <ArrowRight className="w-4 h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </Link>
        </div>
      </PageLayout>
    );
  }

  const relatedPosts = Object.entries(blogPosts)
    .filter(([postSlug]) => postSlug !== slug)
    .sort((a, b) => {
      if (
        a[1].category === currentPost.category &&
        b[1].category !== currentPost.category
      )
        return -1;
      if (
        a[1].category !== currentPost.category &&
        b[1].category === currentPost.category
      )
        return 1;
      return 0;
    })
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: currentPost.title,
    description: currentPost.metaDescription || currentPost.excerpt,
    image: currentPost.image,
    datePublished: currentPost.dateISO,
    dateModified: currentPost.dateISO,
    author: {
      "@type": "Person",
      name: currentPost.author,
      jobTitle: currentPost.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "BLI - Bansal Logistics of India",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://blirapid.com/resources/blogs/${slug}`,
    },
    articleSection: currentPost.category,
    keywords: currentPost.keywords,
  };

  return (
    <PageLayout>
      <Helmet>
        <title>{currentPost.title} | Logistics Insights | BLI</title>
        <meta
          name="description"
          content={currentPost.metaDescription || currentPost.excerpt}
        />
        <meta name="keywords" content={currentPost.keywords} />
        <meta property="og:title" content={currentPost.title} />
        <meta
          property="og:description"
          content={currentPost.metaDescription || currentPost.excerpt}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://blirapid.com/resources/blogs/${slug}`}
        />
        <meta property="og:image" content={currentPost.image} />
        <meta property="article:published_time" content={currentPost.dateISO} />
        <meta property="article:author" content={currentPost.author} />
        <meta property="article:section" content={currentPost.category} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentPost.title} />
        <meta
          name="twitter:description"
          content={currentPost.metaDescription || currentPost.excerpt}
        />
        <link
          rel="canonical"
          href={`https://blirapid.com/resources/blogs/${slug}/`}
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* ── HERO ── */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] max-h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={currentPost.image}
            alt={currentPost.title}
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/50 to-black/85 flex items-end">
          <div className="max-w-[1280px] w-full mx-auto px-5 sm:px-8 lg:px-12 pb-12">
            {/* Breadcrumb */}
            <nav className="mb-5" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li>
                  <Link
                    to="/"
                    className="text-white/80 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-white/50">
                  <ChevronRight className="w-3 h-3" />
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-white/80 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Resources
                  </Link>
                </li>
                <li className="text-white/50">
                  <ChevronRight className="w-3 h-3" />
                </li>
                <li>
                  <Link
                    to="/resources/blogs"
                    className="text-white/80 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Blogs
                  </Link>
                </li>
                <li className="text-white/50">
                  <ChevronRight className="w-3 h-3" />
                </li>
                <li>
                  <span className="text-white/70 text-xs sm:text-sm font-semibold line-clamp-1">
                    {currentPost.title}
                  </span>
                </li>
              </ol>
            </nav>

            {/* Category tag */}
            <span className="inline-block bg-[#113C6A] text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 mb-4">
              {currentPost.category}
            </span>

            {/* Title */}
            <h1
              className="font-bold text-white uppercase tracking-normal mb-4 max-w-4xl"
              style={{ fontSize: "52px", lineHeight: "60px" }}
            >
              {currentPost.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {currentPost.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <time dateTime={currentPost.dateISO}>{currentPost.date}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" />
                {currentPost.author}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTENT AREA ── */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* ── Article ── */}
          <article className="lg:col-span-8">
            {/* Author bar */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#113C6A] flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                  {currentPost.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1a1a1a]">
                    {currentPost.author}
                  </p>
                  <p className="text-xs text-gray-400 font-light">
                    {currentPost.authorRole}
                  </p>
                </div>
              </div>
              <button
                className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 text-sm font-medium text-[#1a1a1a] hover:bg-gray-50 transition-colors"
                aria-label="Share this article"
              >
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>

            {/* Article excerpt */}
            <p
              className="font-light mb-10 border-l-4 border-[#113C6A] pl-5"
              style={{
                fontSize: "20px",
                lineHeight: "29px",
                color: "rgb(28, 24, 37)",
              }}
            >
              {currentPost.excerpt}
            </p>

            {/* Article body */}
            <div
              dangerouslySetInnerHTML={{ __html: currentPost.content }}
              className="
                prose-custom
                [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-gray-600 [&>p]:font-light [&>p]:mb-5
                [&>h2]:font-bold [&>h2]:uppercase [&>h2]:tracking-normal [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:text-[#1a1a1a]
                [&>h2]:text-[28px] [&>h2]:leading-[34px]
                [&>h3]:font-bold [&>h3]:text-lg [&>h3]:mt-7 [&>h3]:mb-3 [&>h3]:text-[#1a1a1a]
                [&>ul]:mb-5 [&>ul]:space-y-2
                [&>ul>li]:text-[15px] [&>ul>li]:text-gray-600 [&>ul>li]:font-light [&>ul>li]:leading-relaxed
                [&>ul>li]:pl-4 [&>ul>li]:relative
                [&>ul>li]:before:content-[''] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:top-[10px] [&>ul>li]:before:w-1.5 [&>ul>li]:before:h-1.5 [&>ul>li]:before:bg-[#113C6A]
                [&>blockquote]:border-l-4 [&>blockquote]:border-[#113C6A] [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-8 [&>blockquote]:bg-gray-50 [&>blockquote]:italic
                [&>blockquote]:text-[15px] [&>blockquote]:text-gray-600 [&>blockquote]:font-light [&>blockquote]:leading-relaxed
              "
            />

            {/* CTA box */}
            <div className="bg-[#113C6A] p-8 mt-12">
              <h3
                className="font-bold uppercase tracking-normal text-white mb-3"
                style={{ fontSize: "32px", lineHeight: "38px" }}
              >
                Ready to Transform Your Logistics?
              </h3>
              <p
                className="font-light text-white/80 mb-6 max-w-lg"
                style={{ fontSize: "20px", lineHeight: "29px" }}
              >
                Discover how BLI can help optimize your supply chain operations
                with our advanced logistics solutions.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 bg-white text-[#113C6A] border-2 border-white px-6 py-2.5 hover:bg-transparent hover:text-white transition-all duration-300"
              >
                <span className="font-medium text-sm">Get Custom Quote</span>
                <ArrowRight className="w-4 h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 flex flex-col gap-6">
              {/* Back to blogs */}
              <Link
                to="/resources/blogs"
                className="group inline-flex items-center gap-2.5 border border-gray-200 px-5 py-3 hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              >
                <ArrowRight className="w-4 h-4 rotate-180 text-[#FF7300] group-hover:text-white transition-colors" />
                <span className="font-medium text-sm text-[#1a1a1a] group-hover:text-white transition-colors">
                  Back to Blogs
                </span>
              </Link>

              {/* Article meta */}
              <div className="border border-gray-200 bg-white p-6">
                <h4 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-4">
                  Article Info
                </h4>
                <ul className="flex flex-col gap-3 text-sm">
                  <li className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-gray-400 font-light">Category</span>
                    <span className="font-semibold text-[#113C6A] text-[11px] uppercase tracking-wider bg-[#113C6A]/10 px-2 py-1">
                      {currentPost.category}
                    </span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-gray-400 font-light">Read Time</span>
                    <span className="font-medium text-[#1a1a1a]">
                      {currentPost.readTime}
                    </span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-gray-400 font-light">Published</span>
                    <span className="font-medium text-[#1a1a1a]">
                      {currentPost.date}
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-400 font-light">Author</span>
                    <span className="font-medium text-[#1a1a1a]">
                      {currentPost.author}
                    </span>
                  </li>
                </ul>
              </div>

              {/* CTA sidebar */}
              <div className="bg-[#113C6A] p-6">
                <h4 className="text-base font-bold text-white mb-2">
                  Need Logistics Help?
                </h4>
                <p className="text-sm text-white/70 font-light leading-relaxed mb-5">
                  Get a customized logistics solution for your business needs.
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 border border-white/40 px-5 py-2.5 text-white hover:bg-white hover:text-[#113C6A] transition-all duration-300"
                >
                  <span className="text-sm font-medium">Get Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* ── Related Posts ── */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 sm:mt-20 pt-12 border-t border-gray-200">
            <p
              className="font-semibold uppercase tracking-widest mb-3"
              style={{
                fontSize: "14px",
                lineHeight: "17px",
                color: "rgb(28, 24, 37)",
              }}
            >
              Keep Reading
            </p>
            <h3
              className="font-bold uppercase tracking-normal mb-10"
              style={{
                fontSize: "52px",
                lineHeight: "60px",
                color: "rgb(0, 0, 0)",
              }}
            >
              Related Articles
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedPosts.map(([postSlug, post]) => (
                <Link
                  key={postSlug}
                  to={`/resources/blogs/${postSlug}`}
                  className="group bg-white border border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#113C6A]/20 transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-[180px]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-white/80 text-[11px] font-medium uppercase tracking-widest">
                      {post.readTime}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#113C6A] bg-[#113C6A]/10 px-2 py-1 mb-3">
                      {post.category}
                    </span>
                    <h4 className="text-sm font-bold text-[#1a1a1a] leading-snug mb-2 group-hover:text-[#113C6A] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-500 font-light leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-1.5 text-[#113C6A] group-hover:text-[#FF7300] transition-colors">
                      <span className="text-sm font-semibold">Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </PageLayout>
  );
};

export default BlogPost;
