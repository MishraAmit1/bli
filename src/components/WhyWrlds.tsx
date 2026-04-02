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
        {/* ── Header ── */}
        <div className="mb-3">
          {/* Label above heading */}
          <motion.p
            className="font-semibold uppercase tracking-widest mb-3"
            style={{
              fontSize: "14px",
              lineHeight: "17px",
              color: "rgb(28, 24, 37)",
            }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.p>

          {/* Heading */}
          <motion.h2
            className="font-bold uppercase tracking-normal mb-3"
            style={{
              fontSize: "52px",
              lineHeight: "60px",
              color: "rgb(0, 0, 0)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="block">Why Choose BLI</span>
            <span className="block">For Your Logistics</span>
          </motion.h2>
        </div>

        {/* ── Content Row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 relative">
          {/* ── Left description + CTA ── */}
          <motion.div
            className="lg:col-span-4 lg:pr-6 lg:self-start"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Description */}
            <p
              className="font-light max-w-sm mb-6"
              style={{
                fontSize: "20px",
                lineHeight: "29px",
                color: "rgb(28, 24, 37)",
              }}
            >
              25+ years on Indian roads speed, safety, and scale from factory to
              warehouse.
            </p>

            <Link
              to="/about"
              className="group relative inline-flex items-center gap-2.5 border border-[#1a1a1a] px-6 py-2.5"
            >
              <span className="font-medium text-sm text-[#1a1a1a]">
                Learn More
              </span>
              <ArrowRight className="w-4 h-4 text-[#FF7300] group-hover:translate-x-1.5 transition-all duration-300" />
            </Link>
          </motion.div>

          {/* ── Middle items 0 & 1 ── */}
          <div className="lg:col-span-3 lg:col-start-6 lg:mt-[80px]">
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
                  className="w-16 h-16 flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                    {features[0].title}
                  </h3>
                  <p
                    className="font-light"
                    style={{
                      fontSize: "20px",
                      lineHeight: "29px",
                      color: "rgb(28, 24, 37)",
                    }}
                  >
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
                  className="w-16 h-16 flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                    {features[1].title}
                  </h3>
                  <p
                    className="font-light"
                    style={{
                      fontSize: "20px",
                      lineHeight: "29px",
                      color: "rgb(28, 24, 37)",
                    }}
                  >
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
              className="pb-10 mb-10 border-b border-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            >
              <div className="flex items-start gap-5">
                <img
                  src={iconUrl}
                  alt={features[2].title}
                  className="w-16 h-16 flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                    {features[2].title}
                  </h3>
                  <p
                    className="font-light"
                    style={{
                      fontSize: "20px",
                      lineHeight: "29px",
                      color: "rgb(28, 24, 37)",
                    }}
                  >
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
                  className="w-16 h-16 flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                    {features[3].title}
                  </h3>
                  <p
                    className="font-light"
                    style={{
                      fontSize: "20px",
                      lineHeight: "29px",
                      color: "rgb(28, 24, 37)",
                    }}
                  >
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
