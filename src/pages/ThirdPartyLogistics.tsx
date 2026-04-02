import { useEffect, useRef, useState, memo, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Warehouse,
  Truck,
  Package,
  BarChart3,
  Settings,
  Globe,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Zap,
  Database,
  Target,
  TrendingUp,
  Building,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Helmet } from "react-helmet-async";

/* ═══════════════ DATA ═══════════════ */

const navLinks = [
  { label: "Overview", id: "overview" },
  { label: "Our Services", id: "sub-services" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Key Benefits", id: "benefits" },
  { label: "Industries", id: "industries" },
  { label: "FAQs", id: "faq" },
];

const subServices = [
  {
    id: 1,
    title: "Warehousing & Storage",
    brand: "Strategic • Managed",
    description:
      "Strategic storage locations with advanced inventory management systems across 15M+ sq ft space.",
    tags: ["WMS Enabled", "Climate Control", "Multi-Location"],
    imageUrl: "/lovable-uploads/services2.webp",
  },
  {
    id: 2,
    title: "Transportation Management",
    brand: "End-to-End • Optimized",
    description:
      "Complete transportation planning and execution across all modes with real-time tracking.",
    tags: ["Multi-Modal", "GPS Tracking", "Route Optimization"],
    imageUrl: "/lovable-uploads/services1.webp",
  },
  {
    id: 3,
    title: "Order Fulfillment",
    brand: "Fast • Accurate",
    description:
      "Pick, pack, and ship services with same-day processing capabilities and 99.9% accuracy.",
    tags: ["Same-Day Processing", "Kitting", "Quality Checks"],
    imageUrl: "/lovable-uploads/services3.webp",
  },
  {
    id: 4,
    title: "Supply Chain Analytics",
    brand: "Data-Driven • Insights",
    description:
      "Comprehensive analytics dashboard with real-time insights to optimize your supply chain.",
    tags: ["Real-Time Reports", "KPI Tracking", "Forecasting"],
    imageUrl: "/lovable-uploads/services4.webp",
  },
  {
    id: 5,
    title: "Value-Added Services",
    brand: "Custom • Flexible",
    description:
      "Kitting, labeling, quality checks, and custom packaging solutions tailored to your needs.",
    tags: ["Custom Packaging", "Labeling", "Assembly"],
    imageUrl: "/lovable-uploads/services5.webp",
  },
];

const steps = [
  {
    title: "Consultation & Assessment",
    desc: "Understanding your unique supply chain requirements, challenges, and business goals.",
    image: "/lovable-uploads/services1.webp",
  },
  {
    title: "Solution Design",
    desc: "Creating customized 3PL strategy with dedicated team and technology integration.",
    image: "/lovable-uploads/services2.webp",
  },
  {
    title: "Implementation",
    desc: "Seamless onboarding with WMS setup, API integration, and staff training.",
    image: "/lovable-uploads/services3.webp",
  },
  {
    title: "Optimization & Growth",
    desc: "Continuous improvement through data analytics, feedback, and scaling support.",
    image: "/lovable-uploads/services4.webp",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Reduce Costs by 25%",
    description:
      "Leverage our economies of scale and optimized operations to significantly reduce your logistics spend.",
  },
  {
    icon: Zap,
    title: "Scale On-Demand",
    description:
      "Flexible capacity to handle seasonal peaks, business growth, and market fluctuations seamlessly.",
  },
  {
    icon: Target,
    title: "Focus on Core Business",
    description:
      "Let us handle logistics while you concentrate on product development, sales, and growth.",
  },
  {
    icon: Database,
    title: "Technology Integration",
    description:
      "Seamless API integration with your existing ERP, e-commerce, and order management systems.",
  },
];

const industries = [
  { name: "E-commerce & Retail", clients: "200+", icon: Package },
  { name: "FMCG & Consumer Goods", clients: "150+", icon: Truck },
  { name: "Electronics & Technology", clients: "100+", icon: Settings },
  { name: "Fashion & Apparel", clients: "80+", icon: Users },
  { name: "Healthcare & Pharma", clients: "50+", icon: Shield },
  { name: "Automotive Parts", clients: "75+", icon: Building },
];

const faqs = [
  {
    question: "What is Third Party Logistics (3PL)?",
    answer:
      "3PL is outsourcing logistics operations including warehousing, transportation, order fulfillment, and supply chain management to a specialized provider like BLI, allowing you to focus on your core business.",
  },
  {
    question: "How much can I save with 3PL services?",
    answer:
      "Businesses typically reduce logistics costs by 25% through economies of scale, optimized operations, reduced infrastructure investment, and lower labor costs.",
  },
  {
    question: "What industries does BLI 3PL serve?",
    answer:
      "BLI serves E-commerce & Retail, FMCG, Electronics, Fashion & Apparel, Healthcare & Pharma, and Automotive industries with specialized 3PL solutions.",
  },
  {
    question: "How long does 3PL implementation take?",
    answer:
      "Typical implementation takes 4-8 weeks depending on complexity. This includes consultation, solution design, WMS setup, API integration, and staff training.",
  },
];

/* ═══════════════ SUB-COMPONENTS ═══════════════ */

const SubServiceCard = memo(
  ({ service }: { service: (typeof subServices)[0] }) => (
    <div className="group flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[28vw] min-w-[260px]">
      <div className="relative overflow-hidden h-[180px] sm:h-[200px]">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <p className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white/70 text-[10px] sm:text-[11px] font-medium uppercase tracking-widest">
          {service.brand}
        </p>
      </div>
      <div className="pt-4 sm:pt-5 pb-5 sm:pb-6 border-b border-gray-200">
        <h3 className="text-[#1a1a1a] text-sm sm:text-base font-bold leading-snug mb-1.5 sm:mb-2 group-hover:text-[#113C6A] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed mb-3 sm:mb-4 line-clamp-2">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-1 sm:gap-1.5">
          {service.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-gray-500 text-[10px] sm:text-[11px] border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  ),
);

const FAQItem = ({ faq, index }: { faq: (typeof faqs)[0]; index: number }) => {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full flex items-start justify-between gap-4 sm:gap-8 py-6 pr-4 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h3
          className="text-sm sm:text-base lg:text-lg font-semibold leading-snug max-w-3xl transition-colors"
          style={{ color: open ? "#113C6A" : "#1C1825" }}
        >
          {faq.question}
        </h3>
        <span
          className={`flex-shrink-0 mt-1 transition-transform duration-500 ${open ? "rotate-180" : ""}`}
        >
          <svg viewBox="0 0 48 48" width="20" height="20" fill="none">
            <path
              d="M4 16.2C4 15.97 4.08 15.74 4.24 15.55C4.6 15.13 5.23 15.09 5.65 15.45L24.04 31.32C24.18 31.44 24.44 31.43 24.57 31.31L42.31 14.87C42.72 14.49 43.35 14.52 43.72 14.92C44.09 15.32 44.07 15.96 43.67 16.33L25.94 32.77C25.06 33.59 23.65 33.61 22.74 32.83L4.35 16.96C4.12 16.76 4 16.48 4 16.2Z"
              fill={open ? "#113C6A" : "#9ca3af"}
              stroke={open ? "#113C6A" : "#9ca3af"}
              strokeWidth="2"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
      >
        <p
          className="font-light max-w-3xl text-sm sm:text-base lg:text-lg"
          style={{
            lineHeight: "27px",
            color: "rgb(28, 24, 37)",
          }}
        >
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

/* ═══════════════ MAIN PAGE ═══════════════ */

const ThirdPartyLogistics = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const maxIndex = subServices.length - 1;

  const overviewRef = useRef<HTMLElement>(null);
  const subServicesRef = useRef<HTMLElement>(null);
  const howItWorksRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);
  const industriesRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const sections = [
      { id: "overview", ref: overviewRef },
      { id: "sub-services", ref: subServicesRef },
      { id: "how-it-works", ref: howItWorksRef },
      { id: "benefits", ref: benefitsRef },
      { id: "industries", ref: industriesRef },
      { id: "faq", ref: faqRef },
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);

  const goToPrev = useCallback(
    () => setCurrentIndex((p) => Math.max(p - 1, 0)),
    [],
  );
  const goToNext = useCallback(
    () => setCurrentIndex((p) => Math.min(p + 1, maxIndex)),
    [maxIndex],
  );
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);
  const onTouchMove = useCallback(
    (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX),
    [],
  );
  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    const d = touchStart - touchEnd;
    if (d > 50) goToNext();
    else if (d < -50) goToPrev();
  }, [touchStart, touchEnd, goToNext, goToPrev]);

  const overviewInView = useInView(overviewRef, {
    once: true,
    margin: "-80px",
  });
  const stepsInView = useInView(howItWorksRef, { once: true, margin: "-80px" });
  const benefitsInView = useInView(benefitsRef, {
    once: true,
    margin: "-80px",
  });
  const industriesInView = useInView(industriesRef, {
    once: true,
    margin: "-80px",
  });

  const getSlideOffset = () => {
    if (typeof window === "undefined") return 29.4;
    const width = window.innerWidth;
    if (width < 640) return 88;
    if (width < 768) return 62;
    if (width < 1024) return 47;
    return 29.4;
  };

  return (
    <PageLayout>
      <Helmet>
        <title>
          3PL Services India | Third Party Logistics | Warehousing &
          Distribution | BLI
        </title>
        <meta
          name="description"
          content="Complete 3PL solutions in India. 15M+ sq ft warehouse space, 99.9% inventory accuracy, 24hr order processing. Reduce costs by 25% with BLI's strategic 3PL services."
        />
        <link rel="canonical" href="https://blirapid.com/services/3pl/" />
      </Helmet>

      {/* ══════════ HERO ══════════ */}
      <div className="relative w-full h-[50vh] min-h-[420px] sm:h-[55vh] lg:h-[65vh] lg:max-h-[550px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/services2.webp"
            alt="Third Party Logistics"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            loading="eager"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/40 to-black/80 flex items-center">
          <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            {/* Breadcrumb */}
            <nav className="mb-3 sm:mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
                <li>
                  <Link
                    to="/"
                    className="text-white/90 hover:text-white text-[10px] sm:text-xs lg:text-sm font-semibold transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-white/70">
                  <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-white/80 hover:text-white text-[10px] sm:text-xs lg:text-sm font-semibold transition-colors"
                  >
                    All Services
                  </Link>
                </li>
                <li className="text-white/70">
                  <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </li>
                <li>
                  <span className="text-white/60 text-[10px] sm:text-xs lg:text-sm font-semibold">
                    3PL Solutions
                  </span>
                </li>
              </ol>
            </nav>

            {/* H1 */}
            <h1 className="font-bold text-white uppercase tracking-normal mb-2 sm:mb-3 text-[32px] leading-[38px] sm:text-[40px] sm:leading-[46px] md:text-[44px] md:leading-[52px] lg:text-[48px] lg:leading-[56px]">
              <span className="block">Third Party</span>
              <span className="block">Logistics (3PL)</span>
            </h1>

            {/* Description */}
            <p className="font-light max-w-xl mt-3 sm:mt-4 tracking-wide text-white/90 text-sm sm:text-base md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[27px]">
              Complete supply chain management from warehousing to last-mile
              delivery. Let us be your strategic logistics partner for seamless
              operations and 25% cost reduction.
            </p>

            {/* CTA */}
            <div className="mt-5 sm:mt-6">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 sm:gap-2.5 border border-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
              >
                <span className="font-medium text-xs sm:text-sm text-white group-hover:text-[#1a1a1a] transition-colors duration-300">
                  Get 3PL Quote
                </span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7300] group-hover:text-[#1a1a1a] group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ STICKY NAV ══════════ */}
      <nav
        className="bg-slate-100 border-b border-gray-200 sticky top-[56px] sm:top-[64px] lg:top-[66px] z-50 overflow-x-auto scrollbar-hide"
        aria-label="Page sections"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex items-center min-w-max">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`relative py-3 sm:py-3.5 px-1 mr-5 sm:mr-6 lg:mr-8 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-[#113C6A]"
                      : "text-gray-400 hover:text-[#1a1a1a]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#113C6A] transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ══════════ OVERVIEW ══════════ */}
      <section
        id="overview"
        ref={overviewRef}
        className="py-12 sm:py-14 md:py-16 lg:py-20 bg-white"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-9 lg:mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={overviewInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs lg:text-[13px] text-[#1C1825]">
              What Is 3PL
            </p>
            <h2 className="font-bold uppercase tracking-normal mb-3 text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
              <span className="block">Outsource Logistics.</span>
              <span className="block">Scale Faster.</span>
            </h2>
            <p className="font-light text-sm sm:text-base md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[27px] text-[#1C1825]">
              Third Party Logistics (3PL) lets you outsource warehousing,
              transportation, and fulfillment to experts — reducing costs by 25%
              while you focus on growing your business.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={overviewInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { value: "15M+", label: "Sq. ft. Warehouse" },
              { value: "99.9%", label: "Inventory Accuracy" },
              { value: "500+", label: "Enterprise Clients" },
              { value: "24hr", label: "Order Processing" },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-4 sm:p-5 lg:p-6 text-center">
                <div className="font-bold leading-none mb-1 text-[32px] sm:text-[38px] lg:text-[44px] text-black">
                  {stat.value}
                </div>
                <div className="font-light text-xs sm:text-sm lg:text-base text-[#1C1825]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ SUB-SERVICES SLIDER ══════════ */}
      <section
        id="sub-services"
        ref={subServicesRef}
        className="bg-gray-50 py-12 sm:py-14 md:py-16 lg:py-20 w-full overflow-hidden"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-9 lg:mb-10">
            <div className="max-w-2xl">
              <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs lg:text-[13px] text-[#1C1825]">
                Our 3PL Services
              </p>
              <h2 className="font-bold uppercase tracking-normal mb-2 text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
                <span className="block">Comprehensive</span>
                <span className="block">3PL Solutions</span>
              </h2>
              <p className="font-light max-w-lg text-sm sm:text-base md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[27px] text-[#1C1825]">
                End-to-end supply chain services designed to optimize your
                operations and reduce costs.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 sm:gap-2.5 border border-[#1a1a1a] px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              >
                <span className="font-medium text-xs sm:text-sm text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                  Get Quote
                </span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>

        <div
          className="relative"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="overflow-hidden pl-4 sm:pl-6 md:pl-8 lg:pl-12">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out gap-3 sm:gap-4 lg:gap-5"
              style={{
                transform: `translateX(-${currentIndex * getSlideOffset()}vw)`,
              }}
            >
              {subServices.map((s) => (
                <SubServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 justify-end mt-5 sm:mt-6 pr-4 sm:pr-6 md:pr-8 lg:pr-12">
            <button
              onClick={goToPrev}
              disabled={currentIndex === 0}
              className="w-9 h-9 sm:w-10 sm:h-10 border border-gray-200 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className="w-9 h-9 sm:w-10 sm:h-10 border border-gray-200 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════ HOW IT WORKS ══════════ */}
      <section
        id="how-it-works"
        ref={howItWorksRef}
        className="py-12 sm:py-14 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-11 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-2xl">
              <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs lg:text-[13px] text-[#1C1825]">
                How It Works
              </p>
              <h2 className="font-bold uppercase tracking-normal text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
                <span className="block">From Consultation</span>
                <span className="block">To Optimization</span>
              </h2>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 sm:gap-2.5 border border-[#1a1a1a] px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              >
                <span className="font-medium text-xs sm:text-sm text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                  Get Started
                </span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </motion.div>

          <div className="space-y-0">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="relative border-l-2 border-gray-200 pl-6 sm:pl-7 md:pl-8 lg:pl-10 pb-10 sm:pb-11 lg:pb-12 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={stepsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className="absolute left-[-11px] sm:left-[-13px] lg:left-[-15px] top-0 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-white border-2 border-[#113C6A] flex items-center justify-center">
                  <span className="text-[#113C6A] font-bold text-[10px] sm:text-xs">
                    {idx + 1}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-10 items-center">
                  <div
                    className={`lg:col-span-7 order-1 ${idx % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div className="relative overflow-hidden h-[200px] sm:h-[220px] md:h-[240px] lg:h-[280px] border border-gray-100">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-5 order-2 ${idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <span className="inline-block bg-[#113C6A] text-white font-semibold uppercase tracking-wider px-2 py-0.5 mb-2 sm:mb-2.5 lg:mb-3 text-[9px] sm:text-[10px]">
                      Step {idx + 1}
                    </span>
                    <h3 className="font-bold mb-1.5 sm:mb-2 text-[20px] leading-[26px] sm:text-[22px] sm:leading-[28px] lg:text-[24px] lg:leading-[30px] text-black">
                      {step.title}
                    </h3>
                    <p className="font-light text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ KEY BENEFITS ══════════ */}
      <section
        id="benefits"
        ref={benefitsRef}
        className="py-12 sm:py-14 md:py-16 lg:py-20 bg-white"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-9 lg:mb-10">
            <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs lg:text-[13px] text-[#1C1825]">
              Key Benefits
            </p>
            <h2 className="font-bold uppercase tracking-normal text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
              <span className="block">Why Outsource</span>
              <span className="block">To BLI 3PL?</span>
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-gray-200 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group relative overflow-hidden bg-[#f5f5f5] px-5 sm:px-6 md:px-7 lg:px-8 pt-8 sm:pt-9 lg:pt-10 pb-5 sm:pb-6 min-h-[240px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px] flex flex-col justify-end cursor-default transition-colors duration-500 hover:bg-[#113C6A]"
              >
                <img
                  src="https://cdn.prod.website-files.com/63ede56f5ceca72669fcaced/63f1f1de63ea2217e333ebca_track.png"
                  alt=""
                  className="absolute top-[8%] right-[-8%] w-[75%] opacity-[0.04] group-hover:opacity-[0.12] group-hover:invert transition-all duration-700 pointer-events-none select-none"
                  loading="lazy"
                  aria-hidden="true"
                />

                <div className="relative z-10 mb-3 sm:mb-4">
                  <b.icon
                    className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[#1a1a1a] group-hover:text-white transition-colors duration-500"
                    strokeWidth={1.4}
                  />
                </div>

                <h3 className="relative z-10 font-bold text-[#1a1a1a] group-hover:text-white transition-colors duration-500 leading-tight mb-0 group-hover:mb-2 text-lg sm:text-xl lg:text-[22px]">
                  {b.title}
                </h3>

                <div className="relative z-10 max-h-0 overflow-hidden opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 transition-all duration-500 ease-out">
                  <p className="text-white/80 text-xs sm:text-[13px] lg:text-[14px] font-light leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ INDUSTRIES ══════════ */}
      <section
        id="industries"
        ref={industriesRef}
        className="py-12 sm:py-14 md:py-16 lg:py-20 bg-gray-50"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-9 lg:mb-10">
            <div className="max-w-xl">
              <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs lg:text-[13px] text-[#1C1825]">
                Industries
              </p>
              <h2 className="font-bold uppercase tracking-normal text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
                <span className="block">Industries</span>
                <span className="block">We Serve</span>
              </h2>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 sm:gap-2.5 border border-[#1a1a1a] px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              >
                <span className="font-medium text-xs sm:text-sm text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                  Discuss Your Industry
                </span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={industriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {industries.map((industry, i) => (
              <Link
                to="/contact"
                key={i}
                className="group flex items-center justify-between p-5 bg-white border border-gray-200 hover:border-[#113C6A] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-50 group-hover:bg-[#113C6A]/10 flex items-center justify-center transition-colors duration-300">
                    <industry.icon className="w-6 h-6 text-[#113C6A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a1a] text-sm sm:text-base">
                      {industry.name}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {industry.clients} Clients
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#FF7300] transition-colors duration-300" />
              </Link>
            ))}
          </motion.div>

          <div className="flex items-center justify-between mt-5">
            <p className="text-gray-400 text-xs sm:text-sm font-light">
              <span className="font-semibold text-[#1a1a1a]">500+</span>{" "}
              enterprise clients across India
            </p>
            <Link
              to="/contact"
              className="text-[#113C6A] text-xs sm:text-sm font-semibold hover:underline flex items-center gap-1"
            >
              View all industries
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section
        id="faq"
        ref={faqRef}
        className="py-12 sm:py-14 md:py-16 lg:py-20 bg-white border-t border-gray-100"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-9 lg:mb-10">
            <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs lg:text-[13px] text-[#1C1825]">
              Got Questions?
            </p>
            <h2 className="font-bold uppercase tracking-normal text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
              <span className="block">Frequently Asked</span>
              <span className="block">Questions</span>
            </h2>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default memo(ThirdPartyLogistics);
