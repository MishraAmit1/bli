import { useState, useRef, useEffect, memo, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, useAnimation, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";

const projects = [
  {
    id: 1,
    title: "Electronics & Electrical Goods",
    brand: "Fragile • High-Value",
    description:
      "From bulbs and tube lights to cables and small appliances handled with zero-breakage SOPs.",
    tags: ["Shock-Safe Packing", "Scan-Based Handover", "ePOD"],
    imageUrl: "/lovable-uploads/5262afdb-dd24-4d5e-be66-7c6717adbca9.webp",
    link: "/projects/electronics",
  },
  {
    id: 2,
    title: "Toys, Gifts & Seasonal Items",
    brand: "Careful • Festive-Ready",
    description:
      "Corporate gifts and seasonal ranges delivered intact and on time for campaigns.",
    tags: ["Protective Packing", "Segregation", "Deadline Routing"],
    imageUrl: "/lovable-uploads/5262afdb-dd24-4d5e-be66-7c6717adbca9.webp",
    link: "/projects/toys",
  },
  {
    id: 3,
    title: "Food, Beverages & FMCG",
    brand: "Fresh • Ambient/Controlled",
    description:
      "Compliant handling for packaged foods & beverages with batch/lot visibility.",
    tags: ["Ambient/Temp Controlled", "FIFO", "Seal-Intact SOPs"],
    imageUrl: "/lovable-uploads/7.png",
    link: "/projects/fmcg",
  },
  {
    id: 4,
    title: "Home & Kitchen Plastics",
    brand: "Lightweight • High-Cube",
    description:
      "Princeware/Cello-type SKUs moved in volume with low-damage stacking.",
    tags: ["High-Cube Vehicles", "Space Optimization", "Stretch-Wrap"],
    imageUrl: "/lovable-uploads/5262afdb-dd24-4d5e-be66-7c6717adbca9.webp",
    link: "/projects/plastics",
  },
  {
    id: 5,
    title: "Apparel & Footwear",
    brand: "Clean • Store-Ready",
    description:
      "Carton-perfect moves for fashion, accessories, and footwear B2B & marketplace ready.",
    tags: ["Garment-Safe Handling", "No Crush", "Store Labeling"],
    imageUrl: "/lovable-uploads/d5ce901e-2ce0-4f2a-bce1-f0ca5d6192df.webp",
    link: "/projects/apparel",
  },
  {
    id: 6,
    title: "Industrial Supplies & Light Machinery",
    brand: "Heavy-Duty • Reliable",
    description:
      "Machines, tools, and spares delivered safely to plants and distributors.",
    tags: ["Bracing", "Lashing", "Time-Critical Runs"],
    imageUrl: "/lovable-uploads/services1.webp",
    link: "/projects/machinery",
  },
  {
    id: 7,
    title: "Automotive Spares & Accessories",
    brand: "SKU-Dense • Dealer-Ready",
    description:
      "Fast replenishment to workshops and retailers with part-level accuracy.",
    tags: ["Milk-Run Routing", "Dealer Network", "Scan In/Out"],
    imageUrl: "/lovable-uploads/services3.webp",
    link: "/projects/automotive",
  },
  {
    id: 8,
    title: "Marketplace & D2C Sellers",
    brand: "Flexible • Reverse-Ready",
    description:
      "First-mile to hub with seamless handoff to last-mile partners and easy returns.",
    tags: ["COD Workflows", "Prepaid Flow", "Reverse Pickups"],
    imageUrl: "/lovable-uploads/services2.webp",
    link: "/projects/marketplace",
  },
];

const ProjectCard = memo(({ project }: { project: (typeof projects)[0] }) => (
  <Link
    to={project.link}
    onClick={() => {
      if (project.link.startsWith("/")) window.scrollTo(0, 0);
    }}
    className="group flex-shrink-0 w-[28vw] min-w-[260px]"
  >
    {/* Image */}
    <div className="relative overflow-hidden h-[200px]">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <p className="absolute bottom-4 left-4 text-white/70 text-[11px] font-medium uppercase tracking-widest">
        {project.brand}
      </p>
    </div>

    {/* Content */}
    <div className="pt-5 pb-6 border-b border-gray-200">
      <h3 className="text-[#1a1a1a] text-base font-bold leading-snug mb-2 group-hover:text-[#FF7300] transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-500 text-sm font-light leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-gray-500 text-[11px] border border-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-1.5 text-[#1a1a1a] group-hover:text-[#FF7300] transition-colors duration-300">
        <span className="text-sm font-semibold">Learn more</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  </Link>
));

const Industries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const maxIndex = projects.length - 1;

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) goToNext();
    else if (distance < -50) goToPrev();
  }, [touchStart, touchEnd, goToNext, goToPrev]);

  const industriesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: project.title,
        description: project.description,
        url: `https://blirapid.com${project.link}`,
        provider: {
          "@type": "Organization",
          name: "BLI - Bansal Logistics of India",
        },
      },
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(industriesSchema)}
        </script>
      </Helmet>

      <section
        id="industries"
        ref={sectionRef}
        className="bg-white py-20 sm:py-24 md:py-28 w-full overflow-hidden"
      >
        {/* ── Header contained ── */}
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            {/* Left */}
            <div className="max-w-2xl">
              {/* Label above heading */}
              <p
                className="font-semibold uppercase tracking-widest mb-3"
                style={{
                  fontSize: "14px",
                  lineHeight: "17px",
                  color: "rgb(28, 24, 37)",
                }}
              >
                Industries We Serve
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
                <span className="block">Pan-India Logistics</span>
                <span className="block">For Every Industry</span>
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
                Trusted logistics partner for diverse sectors, combining
                reliability, compliance, and industry-specific expertise.
              </p>
            </div>

            {/* Right Talk to Expert */}
            <div className="flex-shrink-0">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 border border-[#1a1a1a] px-6 py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              >
                <span className="font-medium text-sm text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                  Talk to an Expert
                </span>
                <ArrowRight className="w-4 h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ── Slider full width, no padding ── */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Track */}
          <div className="overflow-hidden pl-5 sm:pl-8 lg:pl-12">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out gap-5"
              style={{
                transform: `translateX(-${currentIndex * (28 + 1.4)}vw)`,
              }}
            >
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Nav arrows bottom right */}
          <div className="flex items-center gap-2 justify-end mt-8 pr-5 sm:pr-8 lg:pr-12">
            <button
              onClick={goToPrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 border border-gray-200 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className="w-10 h-10 border border-gray-200 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default memo(Industries);
