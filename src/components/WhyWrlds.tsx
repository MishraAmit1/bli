import { useState, useEffect, useRef, memo } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Memoized AnimatedCounter component
const AnimatedCounter = memo(({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
  label
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label?: string;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(countRef, {
    once: true,
    margin: "-100px"
  });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const startAnimation = (timestamp: number) => {
      startTime = timestamp;
      animate(timestamp);
    };

    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(startAnimation);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);

  return (
    <span
      ref={countRef}
      className="font-bold tabular-nums"
      aria-label={label ? `${label}: ${prefix}${end}${suffix}` : `${prefix}${end}${suffix}`}
    >
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
});

// Memoized StatCard component
const StatCard = memo(({
  value,
  suffix,
  title,
  description,
  variants
}: {
  value: number;
  suffix: string;
  title: string;
  description: string;
  variants: any;
}) => (
  <motion.div
    variants={variants}
    className="bg-[#F8FFFF] p-6 rounded-xl border border-[#185EAA]/20 text-center hover:bg-[#185EAA]/5 hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all"
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 text-4xl text-[#113C6A] font-bold">
      <AnimatedCounter
        end={value}
        suffix={suffix}
        label={title}
      />
    </div>
    <h3 className="text-[#113C6A] text-2xl lg:text-3xl font-bold mb-3">
      {title}
    </h3>
    <p className="text-[#0a213a]/90">{description}</p>
  </motion.div>
));

const WhyBLI = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  // Start animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  // Stats data for better maintainability
  const stats = [
    {
      value: 95,
      suffix: "%",
      title: "On-Time Deliveries",
      description: "Achieving industry-leading punctuality so your shipments arrive exactly when promised — no delays, no excuses."
    },
    {
      value: 15,
      suffix: "+",
      title: "Nationwide Hubs",
      description: "Strategically located across India to reduce transit times, enable faster pickups, and provide broader coverage."
    },
    {
      value: 24,
      suffix: "/7",
      title: "Shipment Support",
      description: "Round-the-clock operations with proactive updates, ensuring you're always informed and your shipments stay on track."
    }
  ];

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "BLI Logistics Services",
    "provider": {
      "@type": "Organization",
      "name": "BLI - Bansal Logistics of India"
    },
    "description": "Reliable logistics services with 95% on-time deliveries, 15+ nationwide hubs, and 24/7 shipment support.",
    "serviceType": "Logistics and Transportation",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section
        id="why-bli"
        ref={sectionRef}
        className="relative py-16 md:py-24 overflow-hidden"
        aria-label="Why choose BLI for logistics services"
      >
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#113C6A] mb-3"
            >
              Why BLI?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-[#0a213a]/90 text-lg max-w-3xl mx-auto"
            >
              In a fast-moving economy where supply chain disruptions cost time and money, we deliver reliability, speed, and control — ensuring your business never stops moving.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                title={stat.title}
                description={stat.description}
                variants={itemVariants}
              />
            ))}
          </motion.div>

          {/* Additional CTA Section */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.6 } }
            }}
          >
            <Link
              to="/why-bli"
              className="inline-flex items-center md:px-6 px-4 py-3 bg-[#FF7300] text-white rounded-lg hover:bg-[#FF7729] transition-colors group"
              aria-label="Learn more about why to choose BLI"
            >
              Learn More About Our Advantages
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-[#F8FFFF] opacity-50 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-[#F8FFFF] opacity-30 rounded-tr-full"></div>
      </section>
    </>
  );
};

export default memo(WhyBLI);