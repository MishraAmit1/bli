import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Full Truck Load",
    description:
      "Dedicated trucks for bulk cargo and plant-to-plant transfers. Direct routes with minimal handling for maximum efficiency.",
    image: "/lovable-uploads/services1.webp",
    link: "/services/full-truckload",
  },
  {
    title: "Part Load",
    description:
      "Pay only for the space you use. Ideal for small and medium shipments with flexible scheduling across India.",
    image: "/lovable-uploads/services2.webp",
    link: "/services/part-load",
  },
  {
    title: "3PL & Distribution",
    description:
      "End-to-end supply chain management from warehousing to last-mile delivery. We handle logistics so you focus on growth.",
    image: "/lovable-uploads/services3.webp",
    link: "/services/3pl",
  },
  {
    title: "Warehousing",
    description:
      "Strategic storage hubs across India for short and long-term needs. Inventory management with scalable space options.",
    image: "/lovable-uploads/services4.webp",
    link: "/services/warehousing",
  },
  {
    title: "Local & Regional Dispatch",
    description:
      "Quick intra-city and regional deliveries using light commercial vehicles. Built for eCommerce and urgent consignments.",
    image: "/lovable-uploads/services5.webp",
    link: "/services/local-dispatch",
  },
  {
    title: "Rail Freight",
    description:
      "Cost-efficient bulk shipping via India's rail network. Stable rates and lower carbon footprint for heavy industrial goods.",
    image: "/lovable-uploads/services6.webp",
    link: "/services/rail-freight",
  },
];

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
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
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

        {/* Left orange stripe */}
        <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-[#FF7300] scale-y-0 group-hover:scale-y-100 transition-transform duration-600 origin-top z-20" />

        {/* Number — top left */}
        <div className="absolute top-5 left-5 z-10">
          <span className="text-white/10 text-[72px] font-black leading-none group-hover:text-white/20 transition-colors duration-500">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Arrow — top right */}
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
            <span className="inline-flex items-center text-sm font-semibold text-[#FF7300] mt-4 gap-1.5">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-20 sm:py-24 md:py-28" ref={sectionRef}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <motion.p
            className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            What We Do
          </motion.p>

          {/* ✅ Fixed: br hata ke span blocks use kiye with gap */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#1a1a1a] uppercase tracking-wide mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="block">Logistics Solutions</span>
            <span className="block mt-2 sm:mt-3">That Move India</span>
          </motion.h2>

          <motion.p
            className="text-[15px] sm:text-base text-gray-500 font-light leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From factory gates to warehouse floors reliable logistics solutions
            backed by 25+ years on Indian roads.
          </motion.p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
        {/* ── View All ── */}
        <motion.div
          className="text-center mt-14 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="/services"
            className="group relative inline-flex items-center gap-2.5 border border-[#1a1a1a] px-6 py-2.5"
          >
            {/* Text */}
            <span className="font-medium text-sm text-[#1a1a1a]">
              View All Services
            </span>

            {/* Arrow — slides right + orange on hover */}
            <ArrowRight className="w-4 h-4 text-[#1a1a1a] group-hover:text-[#FF7300] group-hover:translate-x-1.5 transition-all duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Features);
