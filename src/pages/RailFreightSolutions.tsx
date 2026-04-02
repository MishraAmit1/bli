import { useEffect, useRef, useState, memo, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Train,
  Package,
  Truck,
  BarChart3,
  Shield,
  Clock,
  CheckCircle,
  Zap,
  Globe,
  Factory,
  MapPin,
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
  { label: "Rail Routes", id: "routes" },
  { label: "FAQs", id: "faq" },
];

const subServices = [
  {
    id: 1,
    title: "Container Rail Transport",
    brand: "Dedicated • Efficient",
    description:
      "Full container loads (20ft & 40ft) via dedicated rail corridors for long-distance shipping across India.",
    tags: ["20ft/40ft Containers", "Dedicated Corridors", "Long Distance"],
    imageUrl: "/lovable-uploads/services2.webp",
  },
  {
    id: 2,
    title: "Bulk Cargo Movement",
    brand: "Heavy • Specialized",
    description:
      "Coal, cement, steel, grains, and other bulk commodities via specialized rail cars up to 60 tons.",
    tags: ["Coal & Cement", "Steel Transport", "60 Tons/Wagon"],
    imageUrl: "/lovable-uploads/services1.webp",
  },
  {
    id: 3,
    title: "Industrial Rail Solutions",
    brand: "Direct • Connected",
    description:
      "Direct rail connectivity to manufacturing plants and industrial complexes for seamless operations.",
    tags: ["Plant Connectivity", "Industrial Hubs", "Dedicated Sidings"],
    imageUrl: "/lovable-uploads/services3.webp",
  },
  {
    id: 4,
    title: "Multimodal Integration",
    brand: "Complete • Door-to-Door",
    description:
      "Seamless rail-to-road connectivity for complete door-to-door service with first and last mile.",
    tags: ["First Mile Pickup", "Last Mile Delivery", "End-to-End"],
    imageUrl: "/lovable-uploads/services4.webp",
  },
  {
    id: 5,
    title: "Secure Transit",
    brand: "Protected • Monitored",
    description:
      "Enhanced security protocols for high-value and sensitive cargo with 24/7 monitoring systems.",
    tags: ["24/7 Monitoring", "Insurance Coverage", "Secure Handling"],
    imageUrl: "/lovable-uploads/services5.webp",
  },
];

const steps = [
  {
    title: "Route Planning & Booking",
    desc: "Optimal rail route selection based on cargo type, timeline, and railway booking with documentation.",
    image: "/lovable-uploads/services1.webp",
  },
  {
    title: "First Mile Pickup",
    desc: "Road transport from origin location to the nearest rail terminal with secure loading.",
    image: "/lovable-uploads/services2.webp",
  },
  {
    title: "Rail Transit with Tracking",
    desc: "Secure rail transportation with real-time GPS tracking updates and proactive notifications.",
    image: "/lovable-uploads/services3.webp",
  },
  {
    title: "Last Mile Delivery",
    desc: "Road transport from destination terminal to final location with proof of delivery.",
    image: "/lovable-uploads/services4.webp",
  },
];

const benefits = [
  {
    icon: BarChart3,
    title: "Cost Effective",
    description:
      "Up to 40% cheaper than road transport for long distances. Rail freight costs ₹1.5-2.5 per ton/km vs road's ₹3.5-5.0.",
  },
  {
    icon: Zap,
    title: "Eco-Friendly Transport",
    description:
      "75% lower carbon footprint compared to road transportation. 4x better fuel efficiency for sustainable logistics.",
  },
  {
    icon: Package,
    title: "High Capacity Loads",
    description:
      "Move 2000+ tons in single consignment with individual wagon capacity up to 60 tons per unit.",
  },
  {
    icon: Clock,
    title: "Reliable Schedule",
    description:
      "95% on-time performance with fixed departure and arrival times. Minimal weather impact compared to road.",
  },
];

const routes = [
  {
    from: "Mumbai",
    to: "Delhi",
    distance: "1,384 km",
    time: "18-24 hours",
    frequency: "Daily",
  },
  {
    from: "Chennai",
    to: "Kolkata",
    distance: "1,663 km",
    time: "24-30 hours",
    frequency: "Daily",
  },
  {
    from: "Bangalore",
    to: "Mumbai",
    distance: "1,279 km",
    time: "20-26 hours",
    frequency: "Daily",
  },
  {
    from: "Delhi",
    to: "Kolkata",
    distance: "1,472 km",
    time: "22-28 hours",
    frequency: "Daily",
  },
  {
    from: "Ahmedabad",
    to: "Chennai",
    distance: "1,567 km",
    time: "24-30 hours",
    frequency: "Alternate days",
  },
  {
    from: "Pune",
    to: "Hyderabad",
    distance: "563 km",
    time: "12-16 hours",
    frequency: "Daily",
  },
];

const faqs = [
  {
    question: "What are the benefits of rail freight over road transport?",
    answer:
      "Rail freight offers 40% cost savings (₹1.5-2.5 vs ₹3.5-5.0 per ton/km), 75% less CO2 emissions, 2000+ tons capacity vs 25-30 tons for trucks, and 95% on-time performance with minimal weather impact.",
  },
  {
    question: "Which rail corridors does BLI cover?",
    answer:
      "BLI covers major corridors including Mumbai-Delhi, Chennai-Kolkata, Bangalore-Mumbai, Delhi-Kolkata, Ahmedabad-Chennai, and Pune-Hyderabad with access to 7000+ railway stations across India.",
  },
  {
    question: "What types of cargo can be transported by rail?",
    answer:
      "Rail freight handles containerized cargo (20ft/40ft containers up to 30 tons), bulk commodities (coal, cement, steel, grains up to 60 tons/wagon), automotive vehicles, and industrial goods.",
  },
  {
    question: "How does multimodal rail freight work?",
    answer:
      "We provide complete door-to-door service combining road and rail. First mile: road pickup to rail terminal. Main transit: secure rail transport. Last mile: terminal to final destination via road.",
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

const RailFreightSolutions = () => {
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
  const routesRef = useRef<HTMLElement>(null);
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
      { id: "routes", ref: routesRef },
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
  const routesInView = useInView(routesRef, { once: true, margin: "-80px" });

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
          Rail Freight Solutions India | 40% Cost Savings | 7000+ Stations | BLI
        </title>
        <meta
          name="description"
          content="Rail freight transport across India. 40% cost savings, 75% less CO2, 2000+ tons capacity, 95% on-time. Container & bulk cargo via 7000+ railway stations."
        />
        <link
          rel="canonical"
          href="https://blirapid.com/services/rail-freight/"
        />
      </Helmet>

      {/* ══════════ HERO ══════════ */}
      <div className="relative w-full h-[50vh] min-h-[420px] sm:h-[55vh] lg:h-[65vh] lg:max-h-[550px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/services2.webp"
            alt="Rail Freight Solutions"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            loading="eager"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/40 to-black/80 flex items-center">
          <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
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
                    Rail Freight
                  </span>
                </li>
              </ol>
            </nav>

            <h1 className="font-bold text-white uppercase tracking-normal mb-2 sm:mb-3 text-[32px] leading-[38px] sm:text-[40px] sm:leading-[46px] md:text-[44px] md:leading-[52px] lg:text-[48px] lg:leading-[56px]">
              <span className="block">Rail Freight</span>
              <span className="block">Solutions</span>
            </h1>

            <p className="font-light max-w-xl mt-3 sm:mt-4 tracking-wide text-white/90 text-sm sm:text-base md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[27px]">
              Leverage India's extensive railway network for cost-effective,
              eco-friendly transportation. 40% cost savings, 75% less CO2, and
              2000+ tons capacity with 7000+ stations coverage.
            </p>

            <div className="mt-5 sm:mt-6">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 sm:gap-2.5 border border-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
              >
                <span className="font-medium text-xs sm:text-sm text-white group-hover:text-[#1a1a1a] transition-colors duration-300">
                  Get Rail Quote
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
              What Is Rail Freight
            </p>
            <h2 className="font-bold uppercase tracking-normal mb-3 text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
              <span className="block">Ship Greener.</span>
              <span className="block">Save More.</span>
            </h2>
            <p className="font-light text-sm sm:text-base md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[27px] text-[#1C1825]">
              Rail freight leverages India's 7000+ railway stations for
              cost-effective, eco-friendly bulk transport — offering 40% cost
              savings and 75% less CO2 emissions compared to road transport.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={overviewInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { value: "40%", label: "Cost Savings" },
              { value: "75%", label: "Less CO2" },
              { value: "2000+", label: "Tons Capacity" },
              { value: "95%", label: "On-Time Rate" },
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
                Our Rail Services
              </p>
              <h2 className="font-bold uppercase tracking-normal mb-2 text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
                <span className="block">Complete Rail</span>
                <span className="block">Freight Solutions</span>
              </h2>
              <p className="font-light max-w-lg text-sm sm:text-base md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[27px] text-[#1C1825]">
                From container transport to bulk cargo and multimodal
                integration for every rail freight need.
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
                <span className="block">From Booking</span>
                <span className="block">To Delivery</span>
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
              <span className="block">Why Choose</span>
              <span className="block">Rail Freight?</span>
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

      {/* ══════════ ROUTES ══════════ */}
      <section
        id="routes"
        ref={routesRef}
        className="py-12 sm:py-14 md:py-16 lg:py-20 bg-gray-50"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-9 lg:mb-10">
            <div className="max-w-xl">
              <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs lg:text-[13px] text-[#1C1825]">
                Network
              </p>
              <h2 className="font-bold uppercase tracking-normal text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
                <span className="block">Major Rail</span>
                <span className="block">Corridors</span>
              </h2>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 sm:gap-2.5 border border-[#1a1a1a] px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              >
                <span className="font-medium text-xs sm:text-sm text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                  Check Availability
                </span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </div>

          <motion.div
            className="bg-white border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={routesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="hidden md:grid grid-cols-12 gap-4 px-4 sm:px-5 py-3 border-b border-gray-200 bg-gray-50">
              <div className="col-span-4">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Corridor
                </span>
              </div>
              <div className="col-span-3 text-center">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Distance
                </span>
              </div>
              <div className="col-span-3 text-center">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Transit Time
                </span>
              </div>
              <div className="col-span-2 text-right">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Frequency
                </span>
              </div>
            </div>

            {routes.map((route, i) => (
              <Link
                to="/contact"
                key={i}
                className="group block border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-all duration-300"
              >
                <div className="md:hidden px-4 py-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#113C6A]" />
                      <span className="font-semibold text-[#1a1a1a] text-sm">
                        {route.from}
                      </span>
                      <ArrowRight className="w-3 h-3 text-gray-300" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7300]" />
                      <span className="font-semibold text-[#1a1a1a] text-sm">
                        {route.to}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{route.time}</span>
                    </div>
                    <span
                      className={`px-2 py-0.5 text-[10px] font-semibold uppercase ${route.frequency === "Daily" ? "bg-[#113C6A]/10 text-[#113C6A]" : "bg-gray-100 text-gray-500"}`}
                    >
                      {route.frequency}
                    </span>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-4 items-center">
                  <div className="col-span-4 flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#113C6A]" />
                      <span className="font-semibold text-[#1a1a1a] text-sm">
                        {route.from}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#FF7300] transition-colors duration-300" />
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7300]" />
                      <span className="font-semibold text-[#1a1a1a] text-sm">
                        {route.to}
                      </span>
                    </div>
                  </div>

                  <div className="col-span-3 text-center">
                    <span className="font-medium text-sm text-gray-600">
                      {route.distance}
                    </span>
                  </div>

                  <div className="col-span-3 text-center">
                    <div className="inline-flex items-center gap-1 text-gray-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="font-medium text-sm">{route.time}</span>
                    </div>
                  </div>

                  <div className="col-span-2 text-right flex items-center justify-end gap-2">
                    <span
                      className={`px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${route.frequency === "Daily" ? "bg-[#113C6A]/10 text-[#113C6A]" : "bg-gray-100 text-gray-500"}`}
                    >
                      {route.frequency}
                    </span>
                    <div className="w-7 h-7 border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowRight className="w-3 h-3 text-[#113C6A]" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>

          <div className="flex items-center justify-between mt-5">
            <p className="text-gray-400 text-xs sm:text-sm font-light">
              <span className="font-semibold text-[#1a1a1a]">7000+</span>{" "}
              railway stations across India
            </p>
            <Link
              to="/contact"
              className="text-[#113C6A] text-xs sm:text-sm font-semibold hover:underline flex items-center gap-1"
            >
              View all corridors
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

export default memo(RailFreightSolutions);
