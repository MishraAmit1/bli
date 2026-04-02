import { memo, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SafeReliable = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const truckY = useTransform(scrollYProgress, [0.15, 0.55], [-120, 30]);
  const truckX = useTransform(scrollYProgress, [0.15, 0.55], [-20, 60]);
  const miniTruckX = useTransform(scrollYProgress, [0.1, 0.65], [400, -60]);
  const manY = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const boxY = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f0f1f6] py-20 sm:py-24 md:py-28 overflow-hidden relative"
    >
      {/* Mini truck */}
      <motion.div
        className="absolute top-[28%] sm:top-[22%] right-[3%] z-[5] pointer-events-none"
        style={{ x: miniTruckX }}
      >
        <img
          src="https://cdn.prod.website-files.com/63ede56f5ceca72669fcaced/63f1f1dde1e45ab1ef4ad094_mini%20track.png"
          alt=""
          className="w-28 sm:w-36 md:w-44 lg:w-48 opacity-80"
          loading="lazy"
        />
      </motion.div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="relative">
          {/* ── Heading z-[1] so truck passes OVER it ── */}
          <div className="relative z-[1] mb-6 sm:mb-8">
            <motion.h2
              className="font-bold uppercase tracking-normal"
              style={{
                fontSize: "52px",
                lineHeight: "60px",
                color: "rgb(0, 0, 0)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Safe & Reliable
            </motion.h2>
            <motion.h2
              className="font-bold uppercase tracking-normal lg:ml-[100px] mt-1"
              style={{
                fontSize: "52px",
                lineHeight: "60px",
                color: "rgb(0, 0, 0)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              Logistic Solutions
            </motion.h2>
          </div>

          {/* Images + Text */}
          <div className="relative z-[2]">
            <motion.img
              src="https://cdn.prod.website-files.com/63ede56f5ceca72669fcaced/63f1f1dde1e45a53384ad08c_track%20road.png"
              alt=""
              className="absolute inset-0 w-full h-full object-contain object-center opacity-20 pointer-events-none z-[1]"
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.2 } : {}}
              transition={{ duration: 1 }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-0">
              {/* Image group */}
              <div className="lg:col-span-7 relative min-h-[250px] sm:min-h-[300px] md:min-h-[340px]">
                {/* Truck z-[30] highest so it overlaps heading */}
                <motion.img
                  src="https://cdn.prod.website-files.com/63ede56f5ceca72669fcaced/63f1f1de63ea2217e333ebca_track.png"
                  alt="Logistics truck"
                  className="relative z-[30] w-[75%] sm:w-[70%] md:w-[68%] mx-auto lg:ml-[14%]"
                  loading="lazy"
                  style={{ y: truckY, x: truckX }}
                />

                {/* Man */}
                <motion.img
                  src="https://cdn.prod.website-files.com/63ede56f5ceca72669fcaced/63f2f5ea222b9b7f59eacfc7_logi%20man.png"
                  alt="Delivery person"
                  className="absolute bottom-[5%] left-[0%] sm:left-[3%] w-[16%] sm:w-[13%] md:w-[11%] z-[25]"
                  loading="lazy"
                  style={{ y: manY }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />

                {/* Boxes */}
                <motion.img
                  src="https://cdn.prod.website-files.com/63ede56f5ceca72669fcaced/63f1f1de85872a1b3a8a7003_dibba.png"
                  alt="Package boxes"
                  className="absolute bottom-[0%] left-[12%] sm:left-[14%] w-[14%] sm:w-[11%] md:w-[9%] z-[25]"
                  loading="lazy"
                  style={{ y: boxY }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                />
              </div>

              {/* Text + CTA */}
              <motion.div
                className="lg:col-span-5 lg:pb-8 lg:pl-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <p
                  className="font-light mb-8"
                  style={{
                    fontSize: "20px",
                    lineHeight: "29px",
                    color: "rgb(28, 24, 37)",
                  }}
                >
                  Road transportation plays a crucial role in India's supply
                  chain. Coordinated logistics from origin to destination makes
                  all the difference.
                </p>

                <Link to="/about">
                  <button className="group inline-flex items-center gap-3 border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white font-semibold text-[15px] px-6 py-3 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(SafeReliable);
