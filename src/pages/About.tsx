import { useEffect, useRef, useState, memo, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Helmet } from "react-helmet-async";

/* ═══════════════ CUSTOM SVG ICONS ═══════════════ */

const ShieldSvg = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 27.5C15 27.5 25 22.5 25 15V6.25L15 2.5L5 6.25V15C5 22.5 15 27.5 15 27.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 15L13.5 18.5L20.5 11.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ZapSvg = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.25 2.5L5 17.5H15L13.75 27.5L25 12.5H15L16.25 2.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeartSvg = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.05 5.82C25.4036 5.17332 24.6346 4.66261 23.7878 4.31804C22.941 3.97347 22.0329 3.80194 21.1175 3.8125C19.0575 3.8125 17.1725 4.735 15.9375 6.2325C14.7025 4.735 12.8175 3.8125 10.7575 3.8125C8.6375 3.8125 6.645 4.6925 5.195 6.2325C2.0625 9.5375 2.32 14.975 5.9075 18.56L15.0425 27.695C15.29 27.9425 15.6175 28.08 15.9575 28.08C16.2975 28.08 16.625 27.9425 16.8725 27.695L26.0075 18.56C29.595 14.975 29.855 9.5375 26.72 6.2325"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UsersSvg = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.25 13.75C14.0114 13.75 16.25 11.5114 16.25 8.75C16.25 5.98858 14.0114 3.75 11.25 3.75C8.48858 3.75 6.25 5.98858 6.25 8.75C6.25 11.5114 8.48858 13.75 11.25 13.75Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.75 26.25V23.75C3.75 21.6789 5.42893 20 7.5 20H15C17.0711 20 18.75 21.6789 18.75 23.75V26.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 3.88C21.1867 4.15732 22.2403 4.82018 23.0014 5.76388C23.7626 6.70759 24.1875 7.87779 24.1875 9.0875C24.1875 10.2972 23.7626 11.4674 23.0014 12.4111C22.2403 13.3548 21.1867 14.0177 20 14.295"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.25 26.25V23.75C26.2421 22.549 25.8145 21.3889 25.0557 20.4532C24.2969 19.5175 23.2502 18.8598 22.0725 18.5825"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AwardSvg = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 18.75C19.1421 18.75 22.5 15.3921 22.5 11.25C22.5 7.10786 19.1421 3.75 15 3.75C10.8579 3.75 7.5 7.10786 7.5 11.25C7.5 15.3921 10.8579 18.75 15 18.75Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.2563 17.3687L8.75 26.25L15 22.5L21.25 26.25L19.7437 17.3625"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GlobeSvg = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M2.5 15H27.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M15 2.5C18.1066 5.91424 19.8766 10.3767 19.8766 15C19.8766 19.6233 18.1066 24.0858 15 27.5C11.8934 24.0858 10.1234 19.6233 10.1234 15C10.1234 10.3767 11.8934 5.91424 15 2.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const TruckSvg = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.75 2.5V15C18.75 16.375 17.625 17.5 16.25 17.5H2.5V7.5C2.5 4.7375 4.7375 2.5 7.5 2.5H18.75Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.5 17.5V21.25C27.5 23.325 25.825 25 23.75 25H22.5C22.5 23.625 21.375 22.5 20 22.5C18.625 22.5 17.5 23.625 17.5 25H12.5C12.5 23.625 11.375 22.5 10 22.5C8.625 22.5 7.5 23.625 7.5 25H6.25C4.175 25 2.5 23.325 2.5 21.25V17.5H16.25C17.625 17.5 18.75 16.375 18.75 15V6.25H21.05C21.95 6.25 22.775 6.73751 23.225 7.51251L25.3625 11.25H23.75C23.0625 11.25 22.5 11.8125 22.5 12.5V16.25C22.5 16.9375 23.0625 17.5 23.75 17.5H27.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 27.5C11.3807 27.5 12.5 26.3807 12.5 25C12.5 23.6193 11.3807 22.5 10 22.5C8.61929 22.5 7.5 23.6193 7.5 25C7.5 26.3807 8.61929 27.5 10 27.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M20 27.5C21.3807 27.5 22.5 26.3807 22.5 25C22.5 23.6193 21.3807 22.5 20 22.5C18.6193 22.5 17.5 23.6193 17.5 25C17.5 26.3807 18.6193 27.5 20 27.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const PackageSvg = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.25 20V10C26.2497 9.51774 26.1229 9.04396 25.8823 8.62627C25.6417 8.20858 25.2959 7.86165 24.8788 7.62L16.1288 2.62C15.7112 2.37821 15.2387 2.25 14.7575 2.25C14.2763 2.25 13.8038 2.37821 13.3862 2.62L4.63625 7.62C4.21909 7.86165 3.87331 8.20858 3.63273 8.62627C3.39214 9.04396 3.26531 9.51774 3.265 10V20C3.26531 20.4823 3.39214 20.956 3.63273 21.3737C3.87331 21.7914 4.21909 22.1384 4.63625 22.38L13.3862 27.38C13.8038 27.6218 14.2763 27.75 14.7575 27.75C15.2387 27.75 15.7112 27.6218 16.1288 27.38L24.8788 22.38C25.2959 22.1384 25.6417 21.7914 25.8823 21.3737C26.1229 20.956 26.2497 20.4823 26.25 20Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.63751 8.575L14.75 15.0125L25.8625 8.575"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.75 27.85V15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockSvg = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 7.5V15L20 17.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BuildingSvg = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 27.5H25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 27.5V5C5 3.625 6.125 2.5 7.5 2.5H22.5C23.875 2.5 25 3.625 25 5V27.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 7.5H12.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 7.5H20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 12.5H12.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 12.5H20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 17.5H12.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 17.5H20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 27.5V22.5H17.5V27.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ═══════════════ ANIMATED COUNTER ═══════════════ */
const AnimatedCounter = ({
  end,
  suffix = "",
  duration = 2000,
  isInView,
}: {
  end: number;
  suffix?: string;
  duration?: number;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

/* ═══════════════ DATA ═══════════════ */

const navLinks = [
  { label: "Overview", id: "overview" },
  { label: "Our Journey", id: "journey" },
  { label: "Leadership", id: "leadership" },
  { label: "Why Us", id: "why-us" },
  { label: "Capabilities", id: "capabilities" },
];

const milestones = [
  {
    id: 1,
    year: "1999",
    title: "Humble Beginnings",
    brand: "The Start",
    desc: "Regional logistics provider in Western India, offering dependable freight movement for lightweight goods.",
    image: "/lovable-uploads/services1.webp",
    tags: ["Western India", "Freight", "Regional"],
  },
  {
    id: 2,
    year: "2005",
    title: "Foundation of BLI",
    brand: "Incorporation",
    desc: "Officially incorporated as Bansal Logistics of India, expanding routes across Gujarat and Maharashtra.",
    image: "/lovable-uploads/services2.webp",
    tags: ["Gujarat", "Maharashtra", "Expansion"],
  },
  {
    id: 3,
    year: "2010",
    title: "Western Stronghold",
    brand: "Growth Phase",
    desc: "Established major hubs in Vapi, Surat, Ahmedabad, and Mumbai for manufacturers.",
    image: "/lovable-uploads/services3.webp",
    tags: ["Vapi", "Surat", "Mumbai"],
  },
  {
    id: 4,
    year: "2015",
    title: "North & Central",
    brand: "Expansion",
    desc: "Extended reach into Delhi NCR, UP Border, Jammu, Nagpur, and Raipur.",
    image: "/lovable-uploads/services4.webp",
    tags: ["Delhi NCR", "Jammu", "Nagpur"],
  },
  {
    id: 5,
    year: "2018",
    title: "Pan-India Network",
    brand: "Nationwide",
    desc: "Operations expanded into South & East India with hubs in Bangalore, Chennai, Hyderabad, Kolkata.",
    image: "/lovable-uploads/services5.webp",
    tags: ["South India", "East India", "Pan-India"],
  },
  {
    id: 6,
    year: "2023",
    title: "Tech Integration",
    brand: "Digital Era",
    desc: "Integrated technology for faster vehicle turnaround, warehouse management, real-time tracking.",
    image: "/lovable-uploads/services1.webp",
    tags: ["Technology", "Tracking", "WMS"],
  },
  {
    id: 7,
    year: "2025",
    title: "BLI Rapid Launch",
    brand: "Future Ready",
    desc: "Introduced BLI Rapid — a new-age digital logistics identity for speed, scale, and reliability.",
    image: "/lovable-uploads/services2.webp",
    tags: ["Digital", "Speed", "Scale"],
  },
];

const values = [
  {
    icon: ShieldSvg,
    title: "Reliability",
    description:
      "Delivering on every promise, every time. Consistent performance across 25+ years.",
  },
  {
    icon: ZapSvg,
    title: "Agility",
    description:
      "Quick responses and adaptive solutions. Vehicle turnaround in 2-4 hours.",
  },
  {
    icon: HeartSvg,
    title: "Trust",
    description:
      "Decades of consistent, transparent service. Building lasting relationships.",
  },
  {
    icon: UsersSvg,
    title: "Service First",
    description:
      "Client success at the heart of all we do. 24/7 support & dedicated management.",
  },
];

const whyChooseUs = [
  {
    icon: AwardSvg,
    title: "25+ Years Legacy",
    description:
      "Proven expertise in logistics and supply chain management across India.",
  },
  {
    icon: GlobeSvg,
    title: "Pan-India Reach",
    description:
      "15+ strategic hubs covering all major industrial belts nationwide.",
  },
  {
    icon: TruckSvg,
    title: "500+ Verified Fleet",
    description:
      "Access to every vehicle type from Tata Ace to heavy trailers.",
  },
  {
    icon: PackageSvg,
    title: "Industry Expertise",
    description:
      "Multi-sector solutions for plastics, steel, FMCG, electronics & more.",
  },
  {
    icon: ClockSvg,
    title: "24/7 Operations",
    description:
      "Always available, zero shipment delays, round-the-clock support.",
  },
  {
    icon: ZapSvg,
    title: "Tech Integration",
    description:
      "Real-time tracking, faster turnaround, and digital-first operations.",
  },
];

const leaders = [
  {
    name: "Mr. Naresh Bansal",
    role: "Founder & Chairman",
    image: "/lovable-uploads/team1.webp",
  },
  {
    name: "Mr. Prince Bansal",
    role: "Director, Strategy & Growth",
    image: "/lovable-uploads/team2.webp",
  },
];

/* ═══════════════ SUB COMPONENTS ═══════════════ */

const MilestoneCard = memo(
  ({ milestone }: { milestone: (typeof milestones)[0] }) => (
    <div className="group flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[28vw] min-w-[260px]">
      <div className="relative overflow-hidden h-[180px] sm:h-[200px]">
        <img
          src={milestone.image}
          alt={milestone.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#FF7300] text-white px-2 py-0.5 text-[10px] sm:text-[11px] font-bold">
          {milestone.year}
        </div>
        <p className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white/70 text-[10px] sm:text-[11px] font-medium uppercase tracking-widest">
          {milestone.brand}
        </p>
      </div>
      <div className="pt-4 sm:pt-5 pb-5 sm:pb-6 border-b border-gray-200">
        <h3 className="text-[#1a1a1a] text-sm sm:text-base font-bold leading-snug mb-1.5 sm:mb-2 group-hover:text-[#113C6A] transition-colors duration-300">
          {milestone.title}
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed mb-3 sm:mb-4 line-clamp-2">
          {milestone.desc}
        </p>
        <div className="flex flex-wrap gap-1 sm:gap-1.5">
          {milestone.tags.map((tag, idx) => (
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

const About = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const maxIndex = milestones.length - 1;

  const overviewRef = useRef<HTMLElement>(null);
  const journeyRef = useRef<HTMLElement>(null);
  const leadershipRef = useRef<HTMLElement>(null);
  const whyUsRef = useRef<HTMLElement>(null);
  const capabilitiesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.location.hash === "#why-choose-us") {
      setTimeout(() => {
        const element = document.getElementById("why-us");
        if (element) {
          const yOffset = -100;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const sections = [
      { id: "overview", ref: overviewRef },
      { id: "journey", ref: journeyRef },
      { id: "leadership", ref: leadershipRef },
      { id: "why-us", ref: whyUsRef },
      { id: "capabilities", ref: capabilitiesRef },
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

  const overviewInView = useInView(overviewRef, {
    once: true,
    margin: "-80px",
  });
  const leadershipInView = useInView(leadershipRef, {
    once: true,
    margin: "-80px",
  });
  const whyUsInView = useInView(whyUsRef, { once: true, margin: "-80px" });
  const capabilitiesInView = useInView(capabilitiesRef, {
    once: true,
    margin: "-80px",
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "BLI - Bansal Logistics of India",
      alternateName: "BLI Rapid",
      description:
        "For over 25 years, BLI has been a trusted logistics partner in India.",
      foundingDate: "1999",
      numberOfEmployees: { "@type": "QuantitativeValue", value: "500+" },
      areaServed: "India",
    },
  };

  return (
    <PageLayout>
      <Helmet>
        <title>
          About BLI - 25+ Years of Logistics Excellence | Bansal Logistics of
          India
        </title>
        <meta
          name="description"
          content="Learn about BLI's 25+ year journey in logistics. From humble beginnings to pan-India coverage with 500+ vehicles, 15+ hubs serving diverse industries."
        />
        <link rel="canonical" href="https://blirapid.com/about/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* ══════════ HERO ══════════ */}
      <div className="relative w-full h-[50vh] min-h-[420px] sm:h-[55vh] lg:h-[65vh] lg:max-h-[550px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/services3.webp"
            alt="About BLI Logistics"
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
                    About Us
                  </span>
                </li>
              </ol>
            </nav>
            <h1 className="font-bold text-white uppercase tracking-normal mb-2 sm:mb-3 text-[32px] leading-[38px] sm:text-[40px] sm:leading-[46px] md:text-[44px] md:leading-[52px] lg:text-[48px] lg:leading-[56px]">
              <span className="block">About</span>
              <span className="block">BLI Rapid</span>
            </h1>
            <p className="font-light max-w-xl mt-3 sm:mt-4 tracking-wide text-white/90 text-sm sm:text-base md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[27px]">
              Built on Legacy. Designed for the Future. Combining 25+ years of
              trusted expertise with a future-ready digital approach.
            </p>
            <div className="mt-5 sm:mt-6">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 sm:gap-2.5 border border-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
              >
                <span className="font-medium text-xs sm:text-sm text-white group-hover:text-[#1a1a1a] transition-colors duration-300">
                  Partner with Us
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
              Who We Are
            </p>
            <h2 className="font-bold uppercase tracking-normal mb-3 text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
              <span className="block">25+ Years of</span>
              <span className="block">Logistics Excellence</span>
            </h2>
            <p className="font-light text-sm sm:text-base md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[27px] text-[#1C1825]">
              For over 25 years, Bansal Logistics of India (BLI) has been a
              trusted partner in the movement of goods across the country. What
              began as a regional transport service has today grown into a
              pan-India logistics partner serving diverse industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════ OUR PURPOSE ══════════ */}
      <section className="py-12 sm:py-14 md:py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left — Image */}
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src="/lovable-uploads/services2.webp"
                alt="BLI Logistics Operations"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Right — Content */}
            <div>
              <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs lg:text-[13px] text-[#1C1825]">
                Our Purpose
              </p>
              <h2 className="font-bold uppercase tracking-normal mb-4 text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
                <span className="block">Moving India</span>
                <span className="block">Forward</span>
              </h2>
              <p className="font-light text-sm sm:text-base md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[27px] text-[#1C1825] mb-6">
                We exist to simplify the movement of goods and empower business
                growth. With a pan-India network of 15+ hubs and 500+ verified
                vehicles, we connect industries with their markets — faster,
                safer, and smarter.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 mt-0.5 text-[#1C1825]"
                  >
                    <path
                      d="M4 20V18.6C4 15.2397 4 13.5595 4.65396 12.2761C5.2292 11.1471 6.14708 10.2292 7.27606 9.65396C8.55953 9 10.2397 9 13.6 9H20M20 9L15 14M20 9L15 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <span className="font-semibold text-sm sm:text-base text-black">
                      Our Mission:
                    </span>
                    <span className="font-light text-sm sm:text-base text-[#1C1825] ml-1">
                      Deliver reliable, scalable, and customer-first logistics
                      solutions across India.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 mt-0.5 text-[#1C1825]"
                  >
                    <path
                      d="M4 20V18.6C4 15.2397 4 13.5595 4.65396 12.2761C5.2292 11.1471 6.14708 10.2292 7.27606 9.65396C8.55953 9 10.2397 9 13.6 9H20M20 9L15 14M20 9L15 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <span className="font-semibold text-sm sm:text-base text-black">
                      Our Vision:
                    </span>
                    <span className="font-light text-sm sm:text-base text-[#1C1825] ml-1">
                      Be recognized as India's most trusted logistics partner
                      for seamless supply chain solutions.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ══════════ JOURNEY SLIDER ══════════ */}
      <section
        id="journey"
        ref={journeyRef}
        className="bg-gray-50 py-12 sm:py-14 md:py-16 w-full overflow-hidden"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-5 mb-8 sm:mb-9">
            <div className="max-w-2xl">
              <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs lg:text-[13px] text-[#1C1825]">
                Our Journey
              </p>
              <h2 className="font-bold uppercase tracking-normal mb-2 text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
                <span className="block">Milestones That</span>
                <span className="block">Define Us</span>
              </h2>
              <p className="font-light max-w-lg text-sm sm:text-base md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[27px] text-[#1C1825]">
                From a regional transport service to a pan-India logistics
                leader — explore our journey of growth and innovation.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 sm:gap-2.5 border border-[#1a1a1a] px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              >
                <span className="font-medium text-xs sm:text-sm text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                  Partner with Us
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
              {milestones.map((m) => (
                <MilestoneCard key={m.id} milestone={m} />
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
      {/* ══════════ SCALE & CAPABILITIES ══════════ */}
      <section
        id="capabilities"
        ref={capabilitiesRef}
        className="bg-gray-50 py-12 sm:py-14 md:py-16"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-10 sm:mb-12">
            <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs lg:text-[13px] text-[#1C1825]">
              Scale & Capabilities
            </p>
            <h2 className="font-bold uppercase tracking-normal mb-3 text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
              <span className="block">Built On Trust,</span>
              <span className="block">Measured In Results</span>
            </h2>
          </div>

          <div className="relative">
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
              {[
                {
                  Icon: TruckSvg,
                  value: 500,
                  suffix: "+",
                  label: "Verified Vehicles",
                },
                {
                  Icon: BuildingSvg,
                  value: 15,
                  suffix: "+",
                  label: "Key Hubs Nationwide",
                },
                {
                  Icon: PackageSvg,
                  value: 4,
                  suffix: "",
                  label: "Service Modes",
                },
                {
                  Icon: ClockSvg,
                  value: 25,
                  suffix: "+",
                  label: "Years of Excellence",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center text-center pt-8 md:pt-[60px] pb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
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
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2000}
                      isInView={capabilitiesInView}
                    />
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
      {/* ══════════ LEADERSHIP ══════════ */}
      <section
        id="leadership"
        ref={leadershipRef}
        className="py-12 sm:py-14 md:py-16 bg-white"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs lg:text-[13px] text-[#1C1825]">
              Meet The Team
            </p>
            <h2 className="font-bold uppercase tracking-normal mb-3 text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
              <span className="block">Our Leadership</span>
            </h2>
          </div>
          <motion.div
            className="grid grid-cols-2 gap-3 sm:gap-5 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={leadershipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {leaders.map((leader, i) => (
              <div key={i} className="group relative overflow-hidden">
                <div className="relative aspect-[5/5] overflow-hidden bg-gray-100">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <h3 className="font-bold text-white text-sm sm:text-base leading-tight">
                      {leader.name}
                    </h3>
                    <p className="text-[#FF7300] font-medium text-[11px] sm:text-xs mt-0.5">
                      {leader.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ══════════ WHY CHOOSE US ══════════ */}
      <section
        id="why-us"
        ref={whyUsRef}
        className="py-12 sm:py-14 md:py-16 bg-white"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-5 mb-8 sm:mb-10">
            <div className="max-w-2xl">
              <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs lg:text-[13px] text-[#1C1825]">
                Why Partner With Us
              </p>
              <h2 className="font-bold uppercase tracking-normal text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
                <span className="block">What Sets Us Apart</span>
              </h2>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 sm:gap-2.5 border border-[#1a1a1a] px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              >
                <span className="font-medium text-xs sm:text-sm text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                  Get in Touch
                </span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden bg-[#f5f5f5] px-5 sm:px-6 md:px-7 lg:px-8 pt-8 sm:pt-9 lg:pt-10 pb-5 sm:pb-6 min-h-[200px] sm:min-h-[220px] flex flex-col justify-end cursor-default transition-colors duration-500 hover:bg-[#113C6A]"
              >
                <img
                  src="https://cdn.prod.website-files.com/63ede56f5ceca72669fcaced/63f1f1de63ea2217e333ebca_track.png"
                  alt=""
                  className="absolute top-[8%] right-[-8%] w-[75%] opacity-[0.04] group-hover:opacity-[0.12] group-hover:invert transition-all duration-700 pointer-events-none select-none"
                  loading="lazy"
                  aria-hidden="true"
                />
                <div className="relative z-10 mb-3 sm:mb-4 text-[#1a1a1a] group-hover:text-white transition-colors duration-500">
                  <item.icon />
                </div>
                <h3 className="relative z-10 font-bold text-[#1a1a1a] group-hover:text-white transition-colors duration-500 leading-tight mb-0 group-hover:mb-2 text-lg sm:text-xl lg:text-[22px]">
                  {item.title}
                </h3>
                <div className="relative z-10 max-h-0 overflow-hidden opacity-0 group-hover:max-h-[100px] group-hover:opacity-100 transition-all duration-500 ease-out">
                  <p className="text-white/80 text-xs sm:text-[13px] lg:text-[14px] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ══════════ CTA ══════════ */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#113C6A]">
        <div className="max-w-[1280px] mx-auto text-center">
          <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs text-[#1C1825]">
            Let's Connect
          </p>
          <h2 className="font-bold uppercase tracking-normal mb-3 text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
            <span className="block">Partner With</span>
            <span className="block">BLI Today</span>
          </h2>
          <p className="font-light text-[#1C1825] mb-8 text-sm sm:text-base md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[27px] max-w-2xl mx-auto">
            Experience logistics that are fast, scalable, and built on trust.
            Join thousands of businesses who rely on our proven expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#FF7300] text-white hover:bg-[#e56800] transition-all"
            >
              <span className="font-medium">Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#113C6A] text-[#113C6A] hover:bg-[#113C6A] hover:text-white transition-all"
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

export default memo(About);
