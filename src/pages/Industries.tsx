import { useEffect, useRef, useState, memo, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Helmet } from "react-helmet-async";

/* ═══════════════ CUSTOM SVG ICONS ═══════════════ */

const CpuSvg = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 2V5M15 2V5M9 19V22M15 19V22M2 9H5M2 15H5M19 9H22M19 15H22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const GiftSvg = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 12V22H4V12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 7H2V12H22V7Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 22V7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CoffeeSvg = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 8H18V17C18 18.0609 17.5786 19.0783 16.8284 19.8284C16.0783 20.5786 15.0609 21 14 21H6C4.93913 21 3.92172 20.5786 3.17157 19.8284C2.42143 19.0783 2 18.0609 2 17V8Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 1V4M10 1V4M14 1V4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HomeSvg = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 22V12H15V22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShirtSvg = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.38 3.46L16 2L12 5L8 2L3.62 3.46C3.25 3.58 3 3.9 3 4.27V8L8 10V21C8 21.55 8.45 22 9 22H15C15.55 22 16 21.55 16 21V10L21 8V4.27C21 3.9 20.75 3.58 20.38 3.46Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WrenchSvg = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.7 6.30001C14.5168 6.48694 14.414 6.73826 14.414 7.00001C14.414 7.26176 14.5168 7.51308 14.7 7.70001L16.3 9.30001C16.4869 9.48324 16.7383 9.58604 17 9.58604C17.2617 9.58604 17.5131 9.48324 17.7 9.30001L21.47 5.53001C21.9728 6.6412 22.1251 7.87924 21.9066 9.07916C21.6881 10.2791 21.1088 11.3839 20.2463 12.2463C19.3839 13.1088 18.2791 13.6881 17.0792 13.9066C15.8792 14.1251 14.6412 13.9728 13.53 13.47L6.62001 20.38C6.22218 20.7778 5.68262 21.0013 5.12001 21.0013C4.55739 21.0013 4.01783 20.7778 3.62001 20.38C3.22218 19.9822 2.99869 19.4426 2.99869 18.88C2.99869 18.3174 3.22218 17.7778 3.62001 17.38L10.53 10.47C10.0272 9.35882 9.87494 8.12078 10.0934 6.92087C10.3119 5.72095 10.8912 4.61612 11.7537 3.75369C12.6161 2.89127 13.7209 2.31194 14.9208 2.09346C16.1208 1.87497 17.3588 2.02729 18.47 2.53001L14.71 6.29001L14.7 6.30001Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CarSvg = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 6L17.55 10.21C17.6889 10.5687 17.9232 10.8825 18.2283 11.1174C18.5334 11.3524 18.8977 11.4994 19.28 11.54L21 11.74V16H20C20 16.7956 19.6839 17.5587 19.1213 18.1213C18.5587 18.6839 17.7956 19 17 19C16.2044 19 15.4413 18.6839 14.8787 18.1213C14.3161 17.5587 14 16.7956 14 16H10C10 16.7956 9.68393 17.5587 9.12132 18.1213C8.55871 18.6839 7.79565 19 7 19C6.20435 19 5.44129 18.6839 4.87868 18.1213C4.31607 17.5587 4 16.7956 4 16H3V12C3 11.4696 3.21071 10.9609 3.58579 10.5858C3.96086 10.2107 4.46957 10 5 10H15.28L14.1 6.62C14.0357 6.4352 13.9193 6.27265 13.7642 6.15245C13.6091 6.03226 13.422 5.95966 13.23 5.94H8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="7" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ShoppingCartSvg = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckSvg = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ═══════════════ DATA ═══════════════ */

const navLinks = [
  { label: "Overview", id: "overview" },
  { label: "Industries", id: "industries" },
  { label: "Why BLI", id: "why-bli" },
];

const industries = [
  {
    id: 1,
    slug: "electronics",
    icon: CpuSvg,
    title: "Electronics & Electrical",
    brand: "Fragile • High-Value",
    description:
      "From bulbs and tube lights to cables and small appliances — handled with zero-breakage SOPs.",
    image: "/lovable-uploads/industries1.webp",
    tags: ["Shock-Safe Packing", "Scan-Based Handover", "ePOD"],
    highlights: [
      "Zero-breakage SOPs",
      "Shock-safe packaging",
      "Scan-based handover",
      "Electronic POD system",
    ],
  },
  {
    id: 2,
    slug: "toys",
    icon: GiftSvg,
    title: "Toys, Gifts & Seasonal",
    brand: "Careful • Festive-Ready",
    description:
      "Corporate gifts and seasonal ranges delivered intact and on time for campaigns.",
    image: "/lovable-uploads/industries2.webp",
    tags: ["Protective Packing", "Segregation", "Deadline Routing"],
    highlights: [
      "Protective gift packing",
      "Campaign deadline routing",
      "Careful segregation",
      "Festive-ready delivery",
    ],
  },
  {
    id: 3,
    slug: "fmcg",
    icon: CoffeeSvg,
    title: "Food, Beverages & FMCG",
    brand: "Fresh • Controlled",
    description:
      "Compliant handling for packaged foods & beverages with batch/lot visibility.",
    image: "/lovable-uploads/industries3.webp",
    tags: ["Temp Controlled", "FIFO", "Seal-Intact SOPs"],
    highlights: [
      "Temperature controlled storage",
      "FIFO inventory management",
      "Seal-intact SOPs",
      "Batch/lot visibility",
    ],
  },
  {
    id: 4,
    slug: "plastics",
    icon: HomeSvg,
    title: "Home & Kitchen Plastics",
    brand: "Lightweight • High-Cube",
    description:
      "Princeware/Cello-type SKUs moved in volume with low-damage stacking.",
    image: "/lovable-uploads/industries4.webp",
    tags: ["High-Cube Vehicles", "Space Optimization", "Stretch-Wrap"],
    highlights: [
      "High-cube vehicles",
      "Space optimization",
      "Low-damage stacking",
      "Stretch-wrap protection",
    ],
  },
  {
    id: 5,
    slug: "apparel",
    icon: ShirtSvg,
    title: "Apparel & Footwear",
    brand: "Clean • Store-Ready",
    description:
      "Carton-perfect moves for fashion, accessories, and footwear — B2B & marketplace ready.",
    image: "/lovable-uploads/industries5.webp",
    tags: ["Garment-Safe", "No Crush", "Store Labeling"],
    highlights: [
      "Garment-safe handling",
      "No-crush packaging",
      "Store-ready labeling",
      "B2B & marketplace ready",
    ],
  },
  {
    id: 6,
    slug: "machinery",
    icon: WrenchSvg,
    title: "Industrial & Machinery",
    brand: "Heavy-Duty • Reliable",
    description:
      "Machines, tools, and spares delivered safely to plants and distributors.",
    image: "/lovable-uploads/industries6.webp",
    tags: ["Bracing", "Lashing", "Time-Critical"],
    highlights: [
      "Heavy-duty bracing",
      "Secure lashing",
      "Time-critical runs",
      "Plant-safe delivery",
    ],
  },
  {
    id: 7,
    slug: "automotive",
    icon: CarSvg,
    title: "Automotive Spares",
    brand: "SKU-Dense • Dealer-Ready",
    description:
      "Fast replenishment to workshops and retailers with part-level accuracy.",
    image: "/lovable-uploads/industries7.webp",
    tags: ["Milk-Run Routing", "Dealer Network", "Scan In/Out"],
    highlights: [
      "Milk-run routing",
      "Dealer network ready",
      "Part-level accuracy",
      "Scan in/out system",
    ],
  },
  {
    id: 8,
    slug: "marketplace",
    icon: ShoppingCartSvg,
    title: "Marketplace & D2C",
    brand: "Flexible • Reverse-Ready",
    description:
      "First-mile to hub with seamless handoff to last-mile partners and easy returns.",
    image: "/lovable-uploads/industries8.webp",
    tags: ["COD Workflows", "Prepaid Flow", "Reverse Pickups"],
    highlights: [
      "COD workflows",
      "Prepaid flow management",
      "Reverse pickups",
      "Last-mile handoff",
    ],
  },
];

const whyBli = [
  {
    title: "8+",
    subtitle: "Industries",
    description: "Specialized SOPs for every sector",
  },
  {
    title: "500+",
    subtitle: "Clients",
    description: "Trusted across industry verticals",
  },
  {
    title: "99%",
    subtitle: "Compliance",
    description: "Industry-specific requirements met",
  },
  {
    title: "25+",
    subtitle: "Years",
    description: "Cross-industry logistics expertise",
  },
];

/* ═══════════════ SUB COMPONENTS ═══════════════ */

const IndustryCard = memo(
  ({
    industry,
    isSelected,
    onClick,
  }: {
    industry: (typeof industries)[0];
    isSelected: boolean;
    onClick: () => void;
  }) => (
    <div
      className={`group flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[28vw] min-w-[260px] cursor-pointer transition-all duration-300 ${isSelected ? "ring-2 ring-[#113C6A] ring-offset-2" : ""}`}
      onClick={onClick}
    >
      <div className="relative overflow-hidden h-[180px] sm:h-[200px]">
        <img
          src={industry.image}
          alt={industry.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <p className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white/70 text-[10px] sm:text-[11px] font-medium uppercase tracking-widest">
          {industry.brand}
        </p>
      </div>
      <div className="pt-4 sm:pt-5 pb-5 sm:pb-6 border-b border-gray-200">
        <h3
          className={`text-sm sm:text-base font-bold leading-snug mb-1.5 sm:mb-2 transition-colors duration-300 ${isSelected ? "text-[#113C6A]" : "text-[#1a1a1a] group-hover:text-[#113C6A]"}`}
        >
          {industry.title}
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed mb-3 sm:mb-4 line-clamp-2">
          {industry.description}
        </p>
        <div className="flex flex-wrap gap-1 sm:gap-1.5">
          {industry.tags.map((tag, idx) => (
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

/* ═══════════════ MAIN PAGE ═══════════════ */

const Industries = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState<
    (typeof industries)[0]
  >(industries[0]);
  const trackRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const maxIndex = industries.length - 1;
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const overviewRef = useRef<HTMLElement>(null);
  const industriesRef = useRef<HTMLElement>(null);
  const whyBliRef = useRef<HTMLElement>(null);
  const detailRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (isUserInteracted) return;

    autoRotateRef.current = setInterval(() => {
      setSelectedIndustry((prev) => {
        const currentIdx = industries.findIndex((ind) => ind.id === prev.id);
        const nextIdx = (currentIdx + 1) % industries.length;
        return industries[nextIdx];
      });
    }, 20000);

    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, [isUserInteracted]);
  useEffect(() => {
    const sections = [
      { id: "overview", ref: overviewRef },
      { id: "industries", ref: industriesRef },
      { id: "why-bli", ref: whyBliRef },
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

  const getSlideOffset = () => {
    if (typeof window === "undefined") return 29.4;
    const width = window.innerWidth;
    if (width < 640) return 88;
    if (width < 768) return 62;
    if (width < 1024) return 47;
    return 29.4;
  };

  const handleIndustrySelect = (industry: (typeof industries)[0]) => {
    setIsUserInteracted(true); // Stop auto-rotate on user click
    if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    setSelectedIndustry(industry);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };
  const overviewInView = useInView(overviewRef, {
    once: true,
    margin: "-80px",
  });
  const whyBliInView = useInView(whyBliRef, { once: true, margin: "-80px" });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Industry-Specific Logistics Solutions",
    description:
      "Tailored logistics solutions for 8+ industries including Electronics, FMCG, Automotive, Apparel with specialized handling.",
    provider: {
      "@type": "Organization",
      name: "BLI - Bansal Logistics of India",
    },
  };

  return (
    <PageLayout>
      <Helmet>
        <title>
          Industries We Serve | Electronics, FMCG, Automotive Logistics | BLI
        </title>
        <meta
          name="description"
          content="Specialized logistics for 8+ industries: Electronics (zero-breakage), FMCG (temperature-controlled), Automotive, Apparel, Marketplace sellers."
        />
        <link rel="canonical" href="https://blirapid.com/industries/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* ══════════ HERO ══════════ */}
      <div className="relative w-full h-[50vh] min-h-[420px] sm:h-[55vh] lg:h-[65vh] lg:max-h-[550px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/industries1.webp"
            alt="Industries We Serve"
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
                  <span className="text-white/60 text-[10px] sm:text-xs lg:text-sm font-semibold">
                    Industries
                  </span>
                </li>
              </ol>
            </nav>
            <h1 className="font-bold text-white uppercase tracking-normal mb-2 sm:mb-3 text-[32px] leading-[38px] sm:text-[40px] sm:leading-[46px] md:text-[44px] md:leading-[52px] lg:text-[48px] lg:leading-[56px]">
              <span className="block">Industries</span>
              <span className="block">We Serve</span>
            </h1>
            <p className="font-light max-w-xl mt-3 sm:mt-4 tracking-wide text-white/90 text-sm sm:text-base md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[27px]">
              Tailored logistics for every sector. From electronics to
              marketplace sellers, we understand your unique challenges.
            </p>
            <div className="mt-5 sm:mt-6">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 sm:gap-2.5 border border-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
              >
                <span className="font-medium text-xs sm:text-sm text-white group-hover:text-[#1a1a1a] transition-colors duration-300">
                  Discuss Your Industry
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
                  className={`relative py-3 sm:py-3.5 px-1 mr-5 sm:mr-6 lg:mr-8 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${isActive ? "text-[#113C6A]" : "text-gray-400 hover:text-[#1a1a1a]"}`}
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
        className="py-12 sm:py-14 md:py-16 bg-white"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={overviewInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs lg:text-[13px] text-[#1C1825]">
              Sector Expertise
            </p>
            <h2 className="font-bold uppercase tracking-normal mb-3 text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
              <span className="block">Logistics Built For</span>
              <span className="block">Your Industry</span>
            </h2>
            <p className="font-light text-sm sm:text-base md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[27px] text-[#1C1825]">
              Every industry has unique logistics challenges. We've spent 25+
              years developing specialized SOPs, handling procedures, and
              delivery networks for each sector we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════ INDUSTRIES SLIDER ══════════ */}
      <section
        id="industries"
        ref={industriesRef}
        className="bg-gray-50 py-12 sm:py-14 md:py-16 w-full overflow-hidden"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-5 mb-8 sm:mb-9">
            <div className="max-w-2xl">
              <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs lg:text-[13px] text-[#1C1825]">
                Our Industries
              </p>
              <h2 className="font-bold uppercase tracking-normal mb-2 text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
                <span className="block">8+ Sectors</span>
                <span className="block">Specialized SOPs</span>
              </h2>
              <p className="font-light max-w-lg text-sm sm:text-base md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[27px] text-[#1C1825]">
                From fragile electronics to heavy machinery — click any industry
                to see details.
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
              {industries.map((industry) => (
                <IndustryCard
                  key={industry.id}
                  industry={industry}
                  isSelected={selectedIndustry?.id === industry.id}
                  onClick={() => handleIndustrySelect(industry)}
                />
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

      {/* ══════════ SELECTED INDUSTRY DETAIL ══════════ */}
      {selectedIndustry && (
        <motion.section
          ref={detailRef}
          id="industry-detail"
          className="py-12 sm:py-14 md:py-16 bg-white"
          key={selectedIndustry.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image — clean, no badge */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={selectedIndustry.image}
                  alt={selectedIndustry.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div>
                <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs lg:text-[13px] text-[#1C1825]">
                  Industry Focus
                </p>
                <h2 className="font-bold uppercase tracking-normal mb-4 text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] text-black">
                  {selectedIndustry.title}
                </h2>
                <p className="font-light text-sm sm:text-base md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[27px] text-[#1C1825] mb-6">
                  {selectedIndustry.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedIndustry.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-100 text-[#1C1825] text-xs sm:text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-3 mb-8">
                  {selectedIndustry.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-[#FF7300] mt-0.5 flex-shrink-0">
                        <CheckSvg />
                      </span>
                      <span className="font-light text-sm sm:text-base text-[#1C1825]">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button — same style as rest of site */}
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 sm:gap-2.5 border border-[#1a1a1a] px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                >
                  <span className="font-medium text-xs sm:text-sm text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                    Get Quote for {selectedIndustry.title}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* ══════════ WHY BLI ══════════ */}
      {/* ══════════ WHY BLI (Homepage Stats Style) ══════════ */}
      <section
        id="why-bli"
        ref={whyBliRef}
        className="py-12 sm:py-14 md:py-16 bg-gray-50"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-10 sm:mb-12">
            <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs lg:text-[13px] text-[#1C1825]">
              Why BLI
            </p>
            <h2 className="font-bold uppercase tracking-normal mb-3 text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
              <span className="block">Industry Leaders</span>
              <span className="block">Trust BLI</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connecting Lines */}
            <div
              className="hidden md:block absolute top-0 left-0 right-0 pointer-events-none"
              style={{ height: "60px" }}
            >
              <div
                className="absolute bg-gray-400"
                style={{
                  top: "0px",
                  left: "calc((100% - 120px) / 8)",
                  right: "calc((100% - 120px) / 8)",
                  height: "1.5px",
                }}
              />
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute bg-gray-400"
                  style={{
                    top: "0px",
                    left: `calc(${2 * i + 1} * (100% - 120px) / 8 + ${i * 40}px)`,
                    width: "1.5px",
                    height: "60px",
                    transform: "translateX(-0.75px)",
                  }}
                />
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
              {[
                { Icon: CpuSvg, value: "8+", label: "Industries Served" },
                {
                  Icon: ShoppingCartSvg,
                  value: "500+",
                  label: "Industry Clients",
                },
                { Icon: ShirtSvg, value: "99%", label: "Compliance Rate" },
                { Icon: WrenchSvg, value: "25+", label: "Years Experience" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center text-center pt-8 md:pt-[60px] pb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={whyBliInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.12,
                    ease: "easeOut",
                  }}
                >
                  <div className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] rounded-full bg-[#113C6A] flex items-center justify-center mb-6 text-white">
                    <stat.Icon />
                  </div>
                  <div className="font-bold leading-none tracking-tight text-[32px] sm:text-[38px] lg:text-[44px] text-black">
                    {stat.value}
                  </div>
                  <p className="font-light mt-2.5 text-sm sm:text-base lg:text-[20px] text-[#1C1825]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="w-full h-px bg-gray-200 mt-2" />
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#113C6A]">
        <div className="max-w-[1280px] mx-auto text-center">
          <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs text-[#1C1825]">
            Let's Connect
          </p>
          <h2 className="font-bold uppercase tracking-normal mb-3 text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
            <span className="block">Logistics Partner</span>
            <span className="block">For Your Industry</span>
          </h2>
          <p className="font-light text-[#1C1825] mb-8 text-sm sm:text-base md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[27px] max-w-2xl mx-auto">
            Our industry experts are ready to discuss your specific requirements
            and create a tailored solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#FF7300] text-white hover:bg-[#e56800] transition-all"
            >
              <span className="font-medium">Talk to Our Team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#F8FFFF] text-[#F8FFFF] hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all"
            >
              <span className="font-medium">View Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default memo(Industries);
