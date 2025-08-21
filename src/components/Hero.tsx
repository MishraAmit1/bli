import { ArrowRight, MessageSquare, Truck, Headset, Factory } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BrandLogoSlider from "./BrandLogoSlider";

const Hero = () => {
  const isMobile = useIsMobile();
  const [introDone, setIntroDone] = useState(false);

  // Fallback: agar 'ended' event na aaye to ~5s baad content dikha do
  useEffect(() => {
    const t = setTimeout(() => setIntroDone(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="relative w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* HERO BANNER */}
      <div className="relative overflow-hidden h-[55vh] sm:h-[60vh] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full bg-[#113C6A] pt-16">
        {!introDone ? (
          <div className="relative w-full h-full">
            <video
              key="intro-video"
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={() => setIntroDone(true)}
              className="absolute inset-0 w-full h-full object-contain sm:object-cover"
              style={{
                minWidth: '100%',
                minHeight: '100%',
              }}
            >
              <source src="/lovable-uploads/L-2.mp4" type="video/mp4" />
            </video>
            {/* Optional: Add a dark overlay for better visibility on mobile */}
            <div className="absolute inset-0 bg-black/20 sm:bg-transparent" />
          </div>
        ) : (
          // Hero content - intro ke baad dikhega
          <>
            {/* Background video */}
            <video
              key="hero-video"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover object-center opacity-80"
            // poster="/lovable-uploads/L.jpg"
            >
              <source src="/lovable-uploads/video1.mp4" type="video/mp4" />
              <img
                src="/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png"
                alt="WRLDS Technologies Connected People"
                className="w-full h-full object-cover opacity-80"
              />
            </video>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#113C6A]/90 via-[#0c366e]/65 to-[#113C6A]/5" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center pt-8 sm:pt-12 md:pt-16">
              <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
                <motion.div
                  className="max-w-[69rem] text-center px-2 sm:px-4"
                  variants={itemVariants}
                >
                  <motion.h1
                    className="glow-heading text-2xl sm:text-4xl md:text-7xl font-bold leading-tight text-white"
                    variants={itemVariants}
                  >
                    Your Logistics Partner for Every Mile in India
                  </motion.h1>

                  <motion.p
                    className="text-[#F8FFFF]/90 mt-4 sm:mt-6 max-w-xl mx-auto text-sm sm:text-lg"
                    variants={itemVariants}
                  >
                    We deliver full truckload, part load, and 3PL solutions backed by 25+ years of experience.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 justify-center items-center"
                    variants={itemVariants}
                  >
                    <button
                      className="px-6 sm:px-8 py-3 min-h-[44px] bg-[#FF7729] text-white transition-all shadow-lg hover:shadow-xl hover:brightness-110 flex items-center justify-center group text-base font-medium rounded"
                      onClick={(e) => {
                        e.preventDefault();
                        const projectsSection = document.getElementById("projects");
                        if (projectsSection) projectsSection.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Get a Quote
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      className="px-6 sm:px-8 py-3 min-h-[44px] bg-[#185EAA] text-white hover:bg-[#113C6A] transition-all shadow-lg hover:shadow-xl hover:shadow-[#185EAA]/20 flex items-center justify-center group text-base font-medium rounded"
                      onClick={scrollToContact}
                    >
                      Explore Our Services
                      <MessageSquare className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* FEATURE CARDS */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          {/* Card 1 */}
          <motion.div
            className="p-4 md:p-5 rounded-xl shadow-sm border border-[#FFFDF7] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#185EAA]/10"
            variants={itemVariants}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F8FFFF] flex items-center justify-center rounded-lg text-[#185EAA] mb-3">
              <Truck className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 text-[#21221C]">
              Nationwide Logistics
            </h3>
            <p className="text-[#21221C]/70 text-xs md:text-sm">
              Seamless transportation across India, ensuring timely deliveries from metros to remote destinations.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="p-4 md:p-5 rounded-xl shadow-sm border border-[#FFFDF7] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#185EAA]/10"
            variants={itemVariants}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F8FFFF] flex items-center justify-center rounded-lg text-[#FF7729] mb-3">
              <Headset className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 text-[#21221C]">
              24/7 Support & Updates
            </h3>
            <p className="text-[#21221C]/70 text-xs md:text-sm">
              Round-the-clock customer service with proactive shipment updates, ensuring you're always informed at every step.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="p-4 md:p-5 rounded-xl shadow-sm border border-[#FFFDF7] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#185EAA]/10"
            variants={itemVariants}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F8FFFF] flex items-center justify-center rounded-lg text-[#185EAA] mb-3">
              <Factory className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 text-[#21221C]">
              Multi-Industry Expertise
            </h3>
            <p className="text-[#21221C]/70 text-xs md:text-sm">
              Customized solutions for e-commerce, manufacturing, defense, and infrastructure projects.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;