import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Features array with different icons
const features = [
  {
    title: "24/7 Support",
    description:
      "Real-time updates and round-the-clock assistance on every shipment.",
    icon: "https://cdn.prod.website-files.com/63ede56f5ceca72669fcaced/63f2009b0314aa349233739d_why%20choose.svg",
  },
  {
    title: "Pan-India Network",
    description:
      "500+ vehicles dispatching daily from hubs across Gujarat, Maharashtra & beyond.",
    icon: "https://cdn.prod.website-files.com/63ede56f5ceca72669fcaced/63f2009b0314aa349233739d_why%20choose.svg", // Same as Support
  },
  {
    title: "Live Tracking",
    description:
      "GPS-enabled fleet with milestone alerts and digital proof of delivery.",
    icon: "https://cdn.prod.website-files.com/63ede56f5ceca72669fcaced/63f2009b7d7541f38bb4c309_why%20choose-2.svg",
  },
  {
    title: "Cost Efficiency",
    description:
      "Optimised routing and shared-load options to cut freight costs.",
    icon: "https://cdn.prod.website-files.com/63ede56f5ceca72669fcaced/63f2009b7d75415a8cb4c30a_why%20choose-3.svg",
  },
];

const WhyBLI = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="bg-[#f5f5f5] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* ── Header ── */}
        <div className="mb-6 sm:mb-8 lg:mb-3">
          <motion.p
            className="font-semibold uppercase tracking-widest mb-2 sm:mb-3 text-[11px] sm:text-xs lg:text-[14px] lg:leading-[17px] text-[#1C1825]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            className="font-bold uppercase tracking-normal mb-3 text-[24px] leading-[30px] sm:text-[36px] sm:leading-[42px] lg:text-[52px] lg:leading-[60px] text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="block">Why Choose BLI</span>
            <span className="block">For Your Logistics</span>
          </motion.h2>
        </div>

        {/* ── Content Row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 relative">
          {/* ── Left description + CTA ── */}
          <motion.div
            className="lg:col-span-4 lg:pr-6 lg:self-start"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-light max-w-sm mb-5 sm:mb-6 text-sm sm:text-base lg:text-[20px] lg:leading-[29px] text-[#1C1825]">
              25+ years on Indian roads speed, safety, and scale from factory to
              warehouse.
            </p>

            <Link
              to="/about"
              className="group relative inline-flex items-center gap-2 sm:gap-2.5 border border-[#1a1a1a] px-5 sm:px-6 py-2 sm:py-2.5 hover:bg-[#1a1a1a] transition-all duration-300"
            >
              <span className="font-medium text-xs sm:text-sm text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                Learn More
              </span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </motion.div>

          {/* ── Middle items 0 & 1 ── */}
          <div className="lg:col-span-3 lg:col-start-6 lg:mt-[80px]">
            <motion.div
              className="pb-6 sm:pb-8 lg:pb-10 mb-6 sm:mb-8 lg:mb-10 border-b border-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <img
                  src={features[0].icon}
                  alt={features[0].title}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#1a1a1a] mb-1.5 sm:mb-2">
                    {features[0].title}
                  </h3>
                  <p className="font-light text-sm sm:text-base lg:text-[20px] lg:leading-[29px] text-[#1C1825]">
                    {features[0].description}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <img
                  src={features[1].icon}
                  alt={features[1].title}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#1a1a1a] mb-1.5 sm:mb-2">
                    {features[1].title}
                  </h3>
                  <p className="font-light text-sm sm:text-base lg:text-[20px] lg:leading-[29px] text-[#1C1825]">
                    {features[1].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Vertical Divider ── */}
          <div className="hidden lg:block lg:col-span-1 lg:col-start-9 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2" />
          </div>

          {/* ── Right ── */}
          <div className="lg:col-span-3 lg:col-start-10 lg:mt-[-20px]">
            <motion.div
              className="pb-6 sm:pb-8 lg:pb-10 mb-6 sm:mb-8 lg:mb-10 border-b border-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <img
                  src={features[2].icon}
                  alt={features[2].title}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#1a1a1a] mb-1.5 sm:mb-2">
                    {features[2].title}
                  </h3>
                  <p className="font-light text-sm sm:text-base lg:text-[20px] lg:leading-[29px] text-[#1C1825]">
                    {features[2].description}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <img
                  src={features[3].icon}
                  alt={features[3].title}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#1a1a1a] mb-1.5 sm:mb-2">
                    {features[3].title}
                  </h3>
                  <p className="font-light text-sm sm:text-base lg:text-[20px] lg:leading-[29px] text-[#1C1825]">
                    {features[3].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(WhyBLI);
