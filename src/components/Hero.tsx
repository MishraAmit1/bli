import { ArrowRight, MessageSquare, Truck, Headset, Factory } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, useRef, memo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Memoized feature card component for better performance
const FeatureCard = memo(({ icon: Icon, title, description, color }: any) => (
  <motion.div
    className="p-4 md:p-5 rounded-xl shadow-sm border border-[#FFFDF7] bg-white transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#185EAA]/10"
    variants={{
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
    }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <div className={`w-10 h-10 md:w-12 md:h-12 bg-[#F8FFFF] flex items-center justify-center rounded-lg text-[${color}] mb-3`}>
      <Icon className="w-5 h-5 md:w-6 md:h-6" />
    </div>
    <h3 className="text-base md:text-lg font-semibold mb-1 text-[#21221C]">
      {title}
    </h3>
    <p className="text-[#21221C]/70 text-xs md:text-sm">
      {description}
    </p>
  </motion.div>
));

const Hero = () => {
  const isMobile = useIsMobile();
  const [introDone, setIntroDone] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMainVideoLoaded, setIsMainVideoLoaded] = useState(false);
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);

  // Respect user's reduced motion preference
  const prefersReducedMotion = useReducedMotion();

  // SEO structured data
  const heroSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "BLI Logistics Services",
    "description": "Comprehensive logistics solutions across India including Full Truck Load, Part Load, and 3PL services with 25+ years of experience.",
    "provider": {
      "@type": "Organization",
      "name": "BLI - Bansal Logistics of India"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Logistics Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Truck Load"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Part Load"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "3PL Solutions"
          }
        }
      ]
    }
  };

  // Fallback: if 'ended' event doesn't fire, show content after 5s
  useEffect(() => {
    const t = setTimeout(() => setIntroDone(true), 5000);
    return () => clearTimeout(t);
  }, []);

  // Handle video loading
  useEffect(() => {
    if (introVideoRef.current) {
      if (introVideoRef.current.readyState >= 3) {
        setIsVideoLoaded(true);
      } else {
        introVideoRef.current.addEventListener('loadeddata', () => setIsVideoLoaded(true));
      }
    }

    if (mainVideoRef.current) {
      if (mainVideoRef.current.readyState >= 3) {
        setIsMainVideoLoaded(true);
      } else {
        mainVideoRef.current.addEventListener('loadeddata', () => setIsMainVideoLoaded(true));
      }
    }

    return () => {
      if (introVideoRef.current) {
        introVideoRef.current.removeEventListener('loadeddata', () => setIsVideoLoaded(true));
      }
      if (mainVideoRef.current) {
        mainVideoRef.current.removeEventListener('loadeddata', () => setIsMainVideoLoaded(true));
      }
    };
  }, []);

  // Preload main video after intro video starts playing
  useEffect(() => {
    if (isVideoLoaded && !isMainVideoLoaded && mainVideoRef.current) {
      mainVideoRef.current.load();
    }
  }, [isVideoLoaded, isMainVideoLoaded]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0.05 : 0.15,
        delayChildren: prefersReducedMotion ? 0.1 : 0.3,
        duration: prefersReducedMotion ? 0.4 : 0.8
      },
    },
  };

  const itemVariants = {
    hidden: { y: prefersReducedMotion ? 10 : 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: prefersReducedMotion ? 0.3 : 0.6 }
    },
  };

  // Feature cards data
  const featureCards = [
    {
      icon: Truck,
      title: "Nationwide Logistics",
      description: "Seamless transportation across India, ensuring timely deliveries from metros to remote destinations.",
      color: "#185EAA"
    },
    {
      icon: Headset,
      title: "24/7 Support & Updates",
      description: "Round-the-clock customer service with proactive shipment updates, ensuring you're always informed at every step.",
      color: "#FF7729"
    },
    {
      icon: Factory,
      title: "Multi-Industry Expertise",
      description: "Customized solutions for e-commerce, manufacturing, defense, and infrastructure projects.",
      color: "#185EAA"
    }
  ];

  return (
    <>
      {/* SEO Enhancements */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(heroSchema)}
        </script>
      </Helmet>

      <motion.div
        className="relative w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* HERO BANNER */}
        <div className="relative overflow-hidden h-[55vh] sm:h-[60vh] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full bg-[#113C6A]">
          {!introDone ? (
            <div className="relative w-full h-full">
              {/* Loading placeholder */}
              {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#113C6A]">
                  <div className="w-16 h-16 border-4 border-[#FF7300] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              <video
                ref={introVideoRef}
                key="intro-video"
                autoPlay
                muted
                playsInline
                preload="auto"
                onEnded={() => setIntroDone(true)}
                className={`absolute inset-0 w-full h-full object-contain sm:object-cover ${isVideoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                style={{
                  minWidth: '100%',
                  minHeight: '100%',
                }}
                aria-label="BLI Logistics Introduction Video"
              >
                <source src="/lovable-uploads/L-2.mp4" type="video/mp4" />
              </video>

              {/* Overlay for better visibility on mobile */}
              <div className="absolute inset-0 bg-black/20 sm:bg-transparent" />
            </div>
          ) : (
            // Hero content - shows after intro
            <>
              {/* Background video */}
              <div className="relative w-full h-full">
                {/* Loading placeholder */}
                {!isMainVideoLoaded && (
                  <div className="absolute inset-0 bg-[#113C6A] flex items-center justify-center">
                    <img
                      src="/lovable-uploads/7.png"
                      alt="BLI Logistics"
                      className="w-full h-full object-cover opacity-80"
                      loading="eager"
                    />
                  </div>
                )}

                <video
                  ref={mainVideoRef}
                  key="hero-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className={`w-full h-full object-cover object-center opacity-80 ${isMainVideoLoaded ? 'opacity-80' : 'opacity-0'} transition-opacity duration-500`}
                  aria-label="BLI Logistics Services Video"
                >
                  <source src="/lovable-uploads/video1.mp4" type="video/mp4" />
                </video>
              </div>

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
                      <Link to="/contact">
                        <button
                          className="px-6 sm:px-8 py-3 min-h-[44px] bg-[#FF7729] text-white transition-all shadow-lg hover:shadow-xl hover:brightness-110 flex items-center justify-center group text-base font-medium rounded"
                          aria-label="Get a logistics quote"
                        >
                          Get a Quote
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>

                      <Link to="/services">
                        <button
                          className="px-6 sm:px-8 py-3 min-h-[44px] bg-[#185EAA] text-white hover:bg-[#113C6A] transition-all shadow-lg hover:shadow-xl hover:shadow-[#185EAA]/20 flex items-center justify-center group text-base font-medium rounded"
                          aria-label="Explore BLI logistics services"
                        >
                          Explore Our Services
                          <MessageSquare className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                        </button>
                      </Link>
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
            {/* Render feature cards from data array */}
            {featureCards.map((card, index) => (
              <FeatureCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                color={card.color}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default memo(Hero);