import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const iconUrl =
  "https://cdn.prod.website-files.com/63ede56f5ceca72669fcaced/63f2009b0314aa349233739d_why%20choose.svg";

const features = [
  {
    title: "24/7 Support",
    description:
      "Real-time updates and round-the-clock assistance on every shipment.",
  },
  {
    title: "Pan-India Network",
    description:
      "500+ vehicles dispatching daily from hubs across Gujarat, Maharashtra & beyond.",
  },
  {
    title: "Live Tracking",
    description:
      "GPS-enabled fleet with milestone alerts and digital proof of delivery.",
  },
  {
    title: "Cost Efficiency",
    description:
      "Optimised routing and shared-load options to cut freight costs.",
  },
];

const WhyBLI = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="bg-[#f5f5f5] py-20 sm:py-24 md:py-28">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0">
          {/* ── Left — Heading ── */}
          <motion.div
            className="lg:col-span-3 lg:pr-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#1a1a1a] leading-[1.12]">
              Why choose BLI
              <br />
              for your logistics
            </h2>

            <p className="text-gray-500 text-[15px] leading-relaxed mt-5 max-w-xs font-light">
              25+ years on Indian roads — speed, safety, and scale from factory
              to warehouse.
            </p>

            <div className="mt-7">
              <Link to="/about">
                <button className="group inline-flex items-center gap-3 border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white font-semibold text-[15px] px-6 py-3 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* ── Middle — offset down ── */}
          <div className="lg:col-span-4 lg:col-start-5 lg:mt-[140px]">
            <motion.div
              className="pb-10 mb-10 border-b border-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <div className="flex items-start gap-5">
                <img
                  src={iconUrl}
                  alt={features[0].title}
                  className="w-14 h-14 flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-1.5">
                    {features[0].title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed font-light">
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
              <div className="flex items-start gap-5">
                <img
                  src={iconUrl}
                  alt={features[1].title}
                  className="w-14 h-14 flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-1.5">
                    {features[1].title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed font-light">
                    {features[1].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right — near top, with vertical line ── */}
          <div className="lg:col-span-4 lg:col-start-9 relative lg:mt-[10px]">
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gray-300" />

            <div className="lg:pl-10">
              <motion.div
                className="pb-10 mb-10 border-b border-gray-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
              >
                <div className="flex items-start gap-5">
                  <img
                    src={iconUrl}
                    alt={features[2].title}
                    className="w-14 h-14 flex-shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-1.5">
                      {features[2].title}
                    </h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed font-light">
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
                <div className="flex items-start gap-5">
                  <img
                    src={iconUrl}
                    alt={features[3].title}
                    className="w-14 h-14 flex-shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-1.5">
                      {features[3].title}
                    </h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed font-light">
                      {features[3].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(WhyBLI);
