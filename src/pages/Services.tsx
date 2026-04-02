import { useEffect, useRef, useState, memo } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Helmet } from "react-helmet-async";
import Projects from "@/components/Projects";

const services = [
  {
    title: "Full Truck Load",
    description:
      "Dedicated trucks for bulk cargo and plant-to-plant transfers. Direct routes with minimal handling.",
    image: "/lovable-uploads/services1.webp",
    link: "/services/full-truckload",
  },
  {
    title: "Part Load",
    description:
      "Pay only for the space you use. Ideal for small and medium shipments with flexible scheduling.",
    image: "/lovable-uploads/services2.webp",
    link: "/services/part-load",
  },
  {
    title: "3PL & Distribution",
    description:
      "End-to-end supply chain from warehousing to last-mile. We handle logistics so you focus on growth.",
    image: "/lovable-uploads/services3.webp",
    link: "/services/3pl",
  },
  {
    title: "Warehousing",
    description:
      "Strategic storage hubs across India for short and long-term needs with inventory management.",
    image: "/lovable-uploads/services4.webp",
    link: "/services/warehousing",
  },
  {
    title: "Local & Regional Dispatch",
    description:
      "Quick intra-city and regional deliveries using light commercial vehicles for urgent loads.",
    image: "/lovable-uploads/services5.webp",
    link: "/services/local-dispatch",
  },
  {
    title: "Rail Freight",
    description:
      "Cost-efficient bulk shipping via India's rail network with stable rates and lower fuel impact.",
    image: "/lovable-uploads/services6.webp",
    link: "/services/rail-freight",
  },
  {
    title: "Air Cargo",
    description:
      "Same-day or next-day air freight for urgent, high-value shipments with priority handling.",
    image: "/lovable-uploads/services7.webp",
    link: "/services/air-cargo",
  },
  {
    title: "Real-Time Support",
    description:
      "24/7 coordination with live tracking, proactive updates, and instant issue resolution.",
    image: "/lovable-uploads/services8.webp",
    link: "/services/real-time-support",
  },
];

const faqs = [
  {
    question: "What logistics services does BLI offer across India?",
    answer:
      "BLI provides end-to-end logistics solutions including Full Truck Load (FTL), Part Truck Load (PTL), 3PL warehousing, local dispatch, rail freight, and real-time tracking. We operate from key hubs in Gujarat, Maharashtra, and beyond.",
  },
  {
    question: "How does BLI ensure on-time delivery for my shipments?",
    answer:
      "We use GPS-enabled fleet tracking, optimised route planning, and 24/7 operations centre to monitor every shipment. Our 98% on-time delivery rate is backed by 25+ years of on-ground experience across Indian roads.",
  },
  {
    question: "Which industries does BLI specialise in?",
    answer:
      "BLI serves chemicals, FMCG, textiles, automotive parts, pharmaceuticals, and industrial goods. Each industry has specific handling requirements that our trained team and specialised vehicles are equipped to meet.",
  },
  {
    question: "How can I get a quote for my logistics requirement?",
    answer:
      "You can contact us through our website's contact form or call our operations team. We'll assess your requirement and provide a competitive quote within 24 hours.",
  },
];

const navLinks = [
  { label: "Overview", id: "overview" },
  { label: "Our Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "FAQs", id: "faq" },
];

/* ── Service Card ── */
const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
    >
      <Link
        to={service.link}
        className="block group relative overflow-hidden h-[420px] sm:h-[460px]"
        aria-label={`Explore ${service.title}`}
      >
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out scale-105 group-hover:scale-100"
          loading={index < 3 ? "eager" : "lazy"}
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Left navy stripe */}
        <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-[#113C6A] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-20" />

        {/* Number top left */}
        <div className="absolute top-5 left-5 z-10">
          <span className="text-white/10 text-[72px] font-black leading-none group-hover:text-white/20 transition-colors duration-500">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Arrow top right */}
        <div className="absolute top-5 right-5 z-10 w-10 h-10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 z-10">
          <h3 className="text-xl sm:text-[22px] font-bold text-white leading-tight mb-0 group-hover:mb-3 transition-all duration-500">
            {service.title}
          </h3>
          <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[140px] group-hover:opacity-100 transition-all duration-500 ease-out">
            <p className="text-white/60 text-sm leading-relaxed font-light pt-1">
              {service.description}
            </p>
            <span className="inline-flex items-center text-sm font-semibold text-white mt-4 gap-1.5 border-b border-white/40 pb-0.5 hover:border-white transition-colors">
              Explore
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

/* ── FAQ Item ── */
const FAQItem = ({ faq, index }: { faq: (typeof faqs)[0]; index: number }) => {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full flex items-start justify-between gap-8 py-7 pr-4 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h3
          className="text-base sm:text-lg font-semibold leading-snug max-w-3xl transition-colors"
          style={{
            color: open ? "#113C6A" : "#1C1825",
          }}
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
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-96 opacity-100 pb-7" : "max-h-0 opacity-0"}`}
      >
        <p
          className="font-light max-w-3xl"
          style={{
            fontSize: "20px",
            lineHeight: "29px",
            color: "rgb(28, 24, 37)",
          }}
        >
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

/* ── Main Page ── */
const ServicesPage = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const overviewRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const sections = [
      { id: "overview", ref: overviewRef },
      { id: "services", ref: servicesRef },
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

  return (
    <PageLayout>
      <Helmet>
        <title>
          Logistics Services India | FTL, PTL, 3PL, Warehousing | BLI
        </title>
        <meta
          name="description"
          content="Comprehensive logistics services across India Full Truck Load, Part Load, 3PL, Warehousing, Rail & Air Freight. 24/7 support with real-time tracking."
        />
        <link rel="canonical" href="https://blirapid.com/services/" />
      </Helmet>

      {/* ── HERO ── */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] max-h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.dpworld.com/_next/image?url=https%3A%2F%2Fdpw-p-001.sitecorecontenthub.cloud%2Fapi%2Fpublic%2Fcontent%2FBanner-lvl2-desktop-36a8f01c497c48a089c6a987bf36444c%3Fv%3Ddfdddd44&w=1920&q=75"
            alt="BLI Logistics Services"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            loading="eager"
          />
        </div>

        {/* Content vertically centered */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/40 to-black/80 flex items-center">
          <div className="max-w-[1280px] w-full mx-auto px-5 sm:px-8 lg:px-12">
            {/* Breadcrumb */}
            <nav className="mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5">
                <li>
                  <Link
                    to="/"
                    className="text-white/90 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-white/70">
                  <ChevronRight className="w-3 h-3" />
                </li>
                <li>
                  <span className="text-white/80 text-xs sm:text-sm font-semibold">
                    All Services
                  </span>
                </li>
              </ol>
            </nav>
            {/* Heading */}
            <h1
              className="font-bold text-white uppercase tracking-normal mb-3"
              style={{
                fontSize: "52px",
                lineHeight: "60px",
              }}
            >
              <span className="block">End-To-End Logistics</span>
              <span className="block">Solutions</span>
            </h1>
            {/* Description */}
            <p
              className="font-light max-w-xl mt-5 tracking-wide text-white/90"
              style={{
                fontSize: "20px",
                lineHeight: "29px",
              }}
            >
              Keeping your supply chain moving from factory floor to warehouse
              door. Integrated logistics designed around your business from
              dispatch to delivery, everything stays connected.
            </p>
          </div>
        </div>
      </div>

      {/* ── STICKY NAV ── */}
      <nav
        className="bg-slate-100 border-b border-gray-200 sticky top-[57px] sm:top-[66px] z-50 overflow-x-auto"
        aria-label="Page sections"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
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
                  className={`relative py-4 px-1 mr-8 text-sm font-semibold transition-colors whitespace-nowrap ${
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

      {/* ── OVERVIEW ── */}
      <section
        id="overview"
        ref={overviewRef}
        className="py-20 sm:py-24 bg-white"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left */}
            <div className="lg:col-span-7">
              {/* Label above heading */}
              <p
                className="font-semibold uppercase tracking-widest mb-3"
                style={{
                  fontSize: "14px",
                  lineHeight: "17px",
                  color: "rgb(28, 24, 37)",
                }}
              >
                Why BLI
              </p>
              {/* Heading */}
              <h2
                className="font-bold uppercase tracking-normal mb-4"
                style={{
                  fontSize: "52px",
                  lineHeight: "60px",
                  color: "rgb(0, 0, 0)",
                }}
              >
                <span className="block">We Dont Just Ship.</span>
                <span className="block">We Deliver Trust.</span>
              </h2>
              {/* Description */}
              <p
                className="font-light max-w-lg mb-8"
                style={{
                  fontSize: "20px",
                  lineHeight: "29px",
                  color: "rgb(28, 24, 37)",
                }}
              >
                Every route planned, every truck dispatched, every delivery
                tracked our operations run on accountability, not promises.
              </p>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 border border-[#1a1a1a] px-6 py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              >
                <span className="font-medium text-sm text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                  Talk to Our Team
                </span>
                <ArrowRight className="w-4 h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>

            {/* Right stats */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-gray-200">
              {[
                { value: "25+", label: "Years on Road" },
                { value: "500+", label: "Fleet Vehicles" },
                { value: "25+", label: "Cities Covered" },
                { value: "98%", label: "On-Time Rate" },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 sm:p-7">
                  <div
                    className="font-bold leading-none mb-1.5"
                    style={{
                      fontSize: "52px",
                      lineHeight: "60px",
                      color: "rgb(0, 0, 0)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-light"
                    style={{
                      fontSize: "20px",
                      lineHeight: "29px",
                      color: "rgb(28, 24, 37)",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section
        id="services"
        ref={servicesRef}
        className="py-20 sm:py-24 bg-gray-50"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div className="text-center max-w-2xl mx-auto mb-14">
              {/* Label above heading */}
              <p
                className="font-semibold uppercase tracking-widest mb-3"
                style={{
                  fontSize: "14px",
                  lineHeight: "17px",
                  color: "rgb(28, 24, 37)",
                }}
              >
                What We Offer
              </p>
              {/* Heading */}
              <h2
                className="font-bold uppercase tracking-normal mb-3"
                style={{
                  fontSize: "52px",
                  lineHeight: "60px",
                  color: "rgb(0, 0, 0)",
                }}
              >
                <span className="block">One Partner.</span>
                <span className="block">Every Solution.</span>
              </h2>
              {/* Description */}
              <p
                className="font-light"
                style={{
                  fontSize: "20px",
                  lineHeight: "29px",
                  color: "rgb(28, 24, 37)",
                }}
              >
                Whatever your cargo and whatever the distance logistics
                solutions built for Indian roads.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Projects />

      {/* ── FAQ ── */}
      <section
        id="faq"
        ref={faqRef}
        className="py-20 sm:py-24 bg-white border-t border-gray-100"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              {/* Label above heading */}
              <p
                className="font-semibold uppercase tracking-widest mb-3"
                style={{
                  fontSize: "14px",
                  lineHeight: "17px",
                  color: "rgb(28, 24, 37)",
                }}
              >
                Got Questions?
              </p>
              {/* Heading */}
              <h2
                className="font-bold uppercase tracking-normal mb-3"
                style={{
                  fontSize: "52px",
                  lineHeight: "60px",
                  color: "rgb(0, 0, 0)",
                }}
              >
                <span className="block">Frequently Asked</span>
                <span className="block">Questions</span>
              </h2>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 border border-[#1a1a1a] px-6 py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 self-start sm:self-auto"
            >
              <span className="font-medium text-sm text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                Contact Us
              </span>
              <ArrowRight className="w-4 h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </Link>
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

export default memo(ServicesPage);
