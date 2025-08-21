import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, BarChart, AlertTriangle, Clock4, Rocket, Zap, Sparkles, ArrowRight, Award, Target, Shield, ChartBar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const AnimatedCounter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
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
  return <span ref={countRef} className="font-bold tabular-nums">
    {prefix}{count.toFixed(decimals)}{suffix}
  </span>;
};

const WhyWrlds = () => {
  const isMobile = useIsMobile();
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
  return <section id="why-wrlds" className="relative py-16 md:py-24 overflow-hidden">
    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants}>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#113C6A] mb-3">
          Why BLI?
        </motion.h2>
        <motion.p variants={itemVariants} className="text-[#0a213a]/90 text-lg max-w-3xl mx-auto">
          In a fast-moving economy where supply chain disruptions cost time and money, we deliver reliability, speed, and control — ensuring your business never stops moving.
        </motion.p>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants}>
        <motion.div variants={itemVariants} className="bg-[#F8FFFF] p-6 rounded-xl border border-[#185EAA]/20 text-center hover:bg-[#185EAA]/5 hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 text-4xl text-[#113C6A] font-bold">
            <AnimatedCounter end={95} suffix="%" />
          </div>
          <h3 className="text-[#113C6A] text-2xl lg:text-3xl font-bold mb-3">
            On-Time Deliveries
          </h3>
          <p className="text-[#0a213a]/90">Achieving industry-leading punctuality so your shipments arrive exactly when promised — no delays, no excuses.</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-[#F8FFFF] p-6 rounded-xl border border-[#185EAA]/20 text-center hover:bg-[#185EAA]/5 hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 text-4xl text-[#113C6A] font-bold">

            <AnimatedCounter end={15} suffix="+" />
          </div>
          <h3 className="text-[#113C6A] text-2xl lg:text-3xl font-bold mb-3">
            Nationwide Hubs
          </h3>
          <p className="text-[#0a213a]/90">
            Strategically located across India to reduce transit times, enable faster pickups, and provide broader coverage.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-[#F8FFFF] p-6 rounded-xl border border-[#185EAA]/20 text-center hover:bg-[#185EAA]/5 hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 text-4xl text-[#113C6A] font-bold">

            <AnimatedCounter end={24} suffix="/7" />
          </div>
          <h3 className="text-[#113C6A] text-2xl lg:text-3xl font-bold mb-3">
            Shipment Support
          </h3>
          <p className="text-[#0a213a]/90">
            Round-the-clock operations with proactive updates, ensuring you’re always informed and your shipments stay on track.
          </p>
        </motion.div>

      </motion.div>

      <motion.div className="mb-12" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants}>
        {/* <motion.div variants={itemVariants} className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-[#113C6A] mb-3">
            What WRLDS Does for You
          </h3>
          <p className="text-[#113C6A]/80 max-w-2xl mx-auto">
            We transform your ideas into market-ready solutions with tangible benefits for your business
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-[#F8FFFF] to-[#FFFDF7] p-6 rounded-xl border border-[#185EAA]/20 hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all">
            <div className="flex items-start">
              <div className="bg-[#FF7729]/20 rounded-full p-3 mr-4">
                <BarChart className="w-6 h-6 text-[#FF7729]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#113C6A] mb-2">New Revenue Products</h4>
                <p className="text-[#0a213a]/90">Create high-margin, sensor-enabled products for new revenue streams.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gradient-to-r from-[#F8FFFF] to-[#FFFDF7] p-6 rounded-xl border border-[#185EAA]/20 hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all">
            <div className="flex items-start">
              <div className="bg-[#185EAA]/20 rounded-full p-3 mr-4">
                <Sparkles className="w-6 h-6 text-[#185EAA]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#113C6A] mb-2">Innovation That Attracts</h4>
                <p className="text-[#0a213a]/90">Break through to dream clients with tech that makes you stand out.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gradient-to-r from-[#F8FFFF] to-[#FFFDF7] p-6 rounded-xl border border-[#185EAA]/20 hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all">
            <div className="flex items-start">
              <div className="bg-[#113C6A]/20 rounded-full p-3 mr-4">
                <Zap className="w-6 h-6 text-[#113C6A]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#113C6A] mb-2">Comfort-Zone Development</h4>
                <p className="text-[#0a213a]/90">We develop frontier tech while you stay in your comfort zone.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gradient-to-r from-[#F8FFFF] to-[#FFFDF7] p-6 rounded-xl border border-[#185EAA]/20 hover:shadow-lg hover:shadow-[#185EAA]/10 transition-all">
            <div className="flex items-start">
              <div className="bg-[#FF7729]/20 rounded-full p-3 mr-4">
                <Rocket className="w-6 h-6 text-[#FF7729]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#113C6A] mb-2">Brand-Building Leaps</h4>
                <p className="text-[#0a213a]/90">We enable hardware/software leaps that define your brand's future.</p>
              </div>
            </div>
          </motion.div>
        </motion.div> */}

        <motion.div variants={itemVariants} className="text-center mt-10">
          <Link
            to="/about"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center px-6 py-3 bg-[#113C6A] text-[#FFFDF7] rounded-lg hover:bg-[#185EAA] hover:shadow-lg hover:shadow-[#185EAA]/20 transition-all group"
          >
            Learn more about our logistics advantage
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>;
};

export default WhyWrlds;