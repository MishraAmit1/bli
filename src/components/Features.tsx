import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import {
  Activity, Shield, HardHat, Zap, ArrowRight,
  Box, Code, CheckCircle, Rocket, Microchip,
  Handshake, RefreshCcw, MessageSquare,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Cpu,
  Monitor,
  Home,
  Gift,
  UtensilsCrossed,
  Factory,
  ShoppingBag,
  Briefcase
} from "lucide-react";
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from 'react-router-dom';
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { useScrollHijack } from '@/hooks/useScrollHijack';
import Autoplay from "embla-carousel-autoplay";
import { AnimatedTruck } from './AnimatedTruck';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

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

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const hijackSectionRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [progressValue, setProgressValue] = useState(0);
  const [currentSprint, setCurrentSprint] = useState(1);
  const totalSprints = 3;
  const isMobile = useIsMobile();

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  const features = [
    {
      icon: <Cpu className="w-4 h-4 text-[#FFFDF7]" />,
      title: "Full Truck Load (FTL)",
      description: "Complete trucks for large-volume cargo and plant-to-plant transfers.",
      image: "/lovable-uploads/services1.jpg",
      overlayText: "Bulk • Dedicated",
      link: "/services/full-truckload",
      subFeatures: [
        { icon: <Zap className="w-3 h-3 text-yellow-500" />, text: "Direct routes" },
        { icon: <Shield className="w-3 h-3 text-blue-500" />, text: "Minimal handling Cost-efficient for high loads" }
      ]
    },
    {
      icon: <Monitor className="w-4 h-4 text-[#FFFDF7]" />,
      title: "Part Load (PTL)",
      description: "Pay only for the space you use—ideal for small or medium shipments.",
      image: "/lovable-uploads/services2.jpg",
      overlayText: "Shared • Affordable",
      link: "/services/part-load",
      subFeatures: [
        { icon: <CheckCircle className="w-3 h-3 text-green-500" />, text: "Shared truck costs" },
        { icon: <HardHat className="w-3 h-3 text-orange-500" />, text: "Flexible scheduling" }
      ]
    },
    {
      icon: <Home className="w-4 h-4 text-[#FFFDF7]" />,
      title: "3PL & Distribution",
      description: "From warehousing to last-mile, we manage the supply chain so you can focus on sales.",
      image: "/lovable-uploads/services3.png",
      overlayText: "End-to-End • Hassle-Free",
      link: "/services/3pl",
      subFeatures: [
        { icon: <Gift className="w-3 h-3 text-pink-500" />, text: "Route planning & reverse logistics" },
        { icon: <Zap className="w-3 h-3 text-yellow-500" />, text: "Multi-location coordination" }
      ]
    },
    {
      icon: <Gift className="w-4 h-4 text-[#FFFDF7]" />,
      title: "Warehousing Support",
      description: "Strategic hubs for both short- and long-term storage anywhere in India.",
      image: "/lovable-uploads/services4.png",
      overlayText: "Secure • Flexible",
      link: "/services/warehousing",
      subFeatures: [
        { icon: <Shield className="w-3 h-3 text-blue-500" />, text: "Inventory management" },
        { icon: <CheckCircle className="w-3 h-3 text-green-500" />, text: "Scalable space options" }
      ]
    },
    {
      icon: <UtensilsCrossed className="w-4 h-4 text-[#FFFDF7]" />,
      title: "Local & Regional Dispatch",
      description: "Quick, reliable deliveries within cities and regional zones.",
      image: "/lovable-uploads/services5.jpg",
      link: "/services/local-dispatch",
      overlayText: "Fast • Nearby",
      subFeatures: [
        { icon: <Zap className="w-3 h-3 text-yellow-500" />, text: "Light commercial vehicles" },
        { icon: <Shield className="w-3 h-3 text-blue-500" />, text: "Perfect for eCommerce & urgent loads" }
      ]
    },
    {
      icon: <Factory className="w-4 h-4 text-[#FFFDF7]" />,
      title: "Rail Freight Solutions",
      description: "Cost-efficient bulk shipping via India’s rail network.",
      image: "/lovable-uploads/services6.jpg",
      overlayText: "Heavy • Long-Distance",
      link: "/services/rail-freight",
      subFeatures: [
        { icon: <HardHat className="w-3 h-3 text-orange-500" />, text: "Stable rates, less fuel impact" },
        { icon: <RefreshCcw className="w-3 h-3 text-purple-500" />, text: "Ideal for heavy industrial goods" }
      ]
    },
    {
      icon: <ShoppingBag className="w-4 h-4 text-[#FFFDF7]" />,
      title: "Air Cargo Services",
      description: "Same-day or next-day air freight for urgent, high-value shipments.",
      image: "/lovable-uploads/services7.jpg",
      overlayText: "Express • Secure",
      link: "/services/air-cargo",
      subFeatures: [
        { icon: <Box className="w-3 h-3 text-gray-700" />, text: "Priority handling" },
        { icon: <ArrowRight className="w-3 h-3 text-[#FF7729]" />, text: "Major-city coverage" }
      ]
    },
    {
      icon: <Briefcase className="w-4 h-4 text-[#FFFDF7]" />,
      title: "Real-Time Support",
      description: "Stay informed with proactive updates and live tracking.",
      image: "/lovable-uploads/services8.png",
      overlayText: "Always-On • Transparent",
      link: "/services/real-time-support",
      subFeatures: [
        { icon: <Handshake className="w-3 h-3 text-green-600" />, text: "24/7 coordination" },
        { icon: <Gift className="w-3 h-3 text-pink-500" />, text: "Instant issue resolution" }
      ]
    }
  ];

  const { isHijacked } = useScrollHijack(hijackSectionRef, features.length);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const animateProgress = () => {
      setProgressValue(0);
      interval = setInterval(() => {
        setProgressValue(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setCurrentSprint(prev => prev < totalSprints ? prev + 1 : 1);
              animateProgress();
            }, 500);
            return 100;
          }
          return prev + 1;
        });
      }, 300); // Increased from 100ms to 300ms for slower speed (adjust as needed)
    };
    animateProgress();
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const sprintPhases = [
    {
      name: "Planning",
      icon: <CheckCircle className="h-4 w-4" />,
      description:
        "We begin with shipment goals, load type, timelines, and documentation needs — ensuring complete alignment before execution."
    },
    {
      name: "Route & Vehicle Allocation",
      icon: <Code className="h-4 w-4" />,
      description:
        "Smart route planning + right vehicle choice (FTL, PTL, specialized fleets) to balance cost and reliability."
    },
    {
      name: "Loading & Dispatch",
      icon: <Box className="h-4 w-4" />,
      description:
        "Standardized SOPs for safe loading, carton/pallet-level checks, and digital dispatch confirmations."
    },
    {
      name: "In-Transit Monitoring",
      icon: <RefreshCcw className="h-4 w-4" />,
      description:
        "Live tracking, exception alerts, and proactive updates so you stay informed at every milestone."
    },
    {
      name: "Delivery & Handover",
      icon: <RefreshCcw className="h-4 w-4" />,
      description:
        "Final-mile completion with proof of delivery, scan-based closure, and feedback loop for continuous improvement."
    }
  ];

  return (
    <>
      <section id="features" className="relative py-10 md:py-[70px] w-full">
        <div className="text-center mb-10 max-w-3xl mx-auto feature-item">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#113C6A] mb-3">
            Our Services
          </motion.h2>
          <h2 className="text-3xl font-bold mb-4 text-[#113C6A]"></h2>
          <p className="text-[#0a213a]/90 max-w-3xl mx-auto">
            End-to-end logistics and 3PL solutions designed for speed, reliability, and scale across India.
          </p>
          <AnimatedTruck />
        </div>

        <Carousel
          plugins={[plugin.current]}
          opts={{
            loop: true,
            // align: isMobile ? "center" : "start", // Center on mobile, start on desktop
            align: "start", // was: isMobile ? "center" : "start"
            containScroll: "keepSnaps", // Prevents partial slides from showing
            skipSnaps: false, // Enforce strict snapping
            dragFree: false, // Prevent drag-based peeking
            slidesToScroll: 1,
          }}
          className="relative w-full"
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.play()}
        >
          <div className={cn(
            "relative max-w-[1100px] mx-auto px-4",
            isMobile && "overflow-hidden" // Explicit overflow-hidden on mobile to clip any peek
          )}>
            <CarouselContent className={cn(
              "flex",
              isMobile ? "!ml-0 gap-0 px-0" : "gap-6 px-6 ml-1" // Padding on mobile to hide peek while keeping thinning
            )}>
              {features.map((feature, index) => (
                <CarouselItem
                  key={index}
                  className={cn(
                    "sm:basis-1/2 lg:basis-1/3",
                    isMobile && "basis-full !pl-0" // Slightly thinner (95% width) on mobile
                  )}
                >
                  <div className="group relative rounded-xl overflow-hidden shadow-lg border hover:border-[#FF7729] h-[420px] flex flex-col bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                    {/* Tag badge (optional) */}
                    <span className="absolute top-3 left-3 z-10 bg-[#FF7729] text-white text-xs font-medium px-2 py-1 rounded-full shadow">
                      {feature.overlayText}
                    </span>
                    {/* Image Section */}
                    <div className="relative w-full h-64 overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-sm font-medium tracking-wide">
                          Safe • Fast • Reliable
                        </span>
                      </div>
                    </div>
                    {/* Content Section */}
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      {/* Icon + Title */}
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="bg-[#113C6A] p-1 rounded-md flex items-center justify-center">
                            {feature.icon}
                          </span>
                          <h3 className="font-semibold text-[#113C6A] text-base">{feature.title}</h3>
                        </div>

                        {/* Short Description */}
                        <p className="text-black text-sm leading-snug mt-1">
                          {feature.description}
                        </p>

                        {/* Sub-feature points */}
                        <ul className="mt-3 text-xs text-gray-600 space-y-1">
                          {feature.subFeatures.map((sf, i) => (
                            <li key={i} className="flex items-center gap-1">
                              {sf.icon} {sf.text}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Footer with CTA */}
                      {/* Footer with CTA */}
                      <div className="mt-4 flex items-center justify-between">
                        <Link
                          to={feature.link} // Changed from `/services/${index}` to feature.link
                          className="flex items-center text-[#FF7729] text-sm font-medium hover:underline"
                        >
                          Read More <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className={cn(
                "absolute top-1/2 md:top-[40%] -translate-y-1/2 z-10",
                // Glassmorphism: fully transparent blur, subtle border
                "backdrop-blur-md bg-transparent border border-white/20",
                // Size: on mobile round & small, on desktop tall & slim
                "w-12 h-12 md:h-96 md:rounded-md rounded-full shadow-lg",
                // Flex center & hover effects
                "flex items-center justify-center",
                "hover:shadow-xl hover:scale-110",
                "transition-all duration-300",
                "group",
                isMobile ? "left-2" : "-left-14"
              )}
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </CarouselPrevious>

            <CarouselNext
              className={cn(
                "absolute top-1/2 md:top-[40%] -translate-y-1/2 z-10",
                "backdrop-blur-md bg-transparent border border-white/20",
                "w-12 h-12 md:h-96 md:rounded-md rounded-full shadow-lg",
                "flex items-center justify-center",
                "hover:shadow-xl hover:scale-110",
                "transition-all duration-300",
                "group",
                isMobile ? "right-2" : "-right-20"
              )}
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </CarouselNext>
            <div className="text-center md:mt-18 mt-14">
              <div className="flex justify-center">

                <Link to="/services">
                  <Button className="inline-flex items-center px-4 sm:px-6 py-3 bg-[#113C6A] hover:bg-[#185EAA] text-[#FFFDF7] rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto justify-center">
                    View All Services
                    <Briefcase className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Carousel>
      </section>

      <section id="technology" className="bg-[#] py-10 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* <div className="inline-block mb-2 px-3 py-1 bg-[#F8FFFF] text-[#113C6A] rounded-full text-sm font-medium">
              Our Approach
            </div> */}
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#113C6A] mb-3">
              Our Approach
            </motion.h2>
            <h2 className="text-3xl font-bold mb-4 text-[#113C6A]">End-to-End Logistics. On Time. Every Time</h2>
            <p className="text-[#0a213a]/90 max-w-3xl mx-auto">
              At BLI, every shipment follows a proven five-step workflow — from initial planning to final handover.
              Our approach is designed to:
              Reduce risks with upfront clarity,
              Maintain transparency through real-time updates,
              Optimize efficiency for cost and speed,
              ensuring your cargo arrives exactly when and where it’s needed.
            </p>
          </div>

          <div className="bg-[#F8FFFF] rounded-xl shadow-lg border border-[#185EAA]/20 p-8 mb-10 transition-all duration-300 hover:shadow-xl">
            <div className="bg-gradient-to-r from-[#F8FFFF] to-[#FFFDF7] rounded-lg p-6 mb-10 shadow-md border border-[#185EAA]/20">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <div className="flex items-center">
                    <h3 className="text-xl font-bold text-[#113C6A]">We start by understanding your shipment goals</h3>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-[#113C6A]/60 mr-2">Iterative Development</span>
                    <RefreshCcw className="h-5 w-5 text-[#185EAA] animate-rotate-slow" />
                  </div>
                </div>

                <p className="text-[#0a213a]/90 mb-4">We start by understanding your shipment goals, timelines, load type, and documentation needs — ensuring complete alignment before execution.</p>

                <div className="relative mb-2">
                  <Progress
                    value={progressValue}
                    className="h-3 bg-[#F8FFFF] [&>div]:bg-[#113C6A]"
                  />
                </div>

                <div className={cn("grid gap-1 mt-4 relative z-[50]", isMobile ? "grid-cols-2 gap-y-2" : "grid-cols-5")}>
                  {sprintPhases.map((phase, index) => (
                    <HoverCard key={index} openDelay={0} closeDelay={0}>
                      <HoverCardTrigger asChild>
                        <div
                          className={cn(
                            "text-center p-3 rounded cursor-pointer transition-all duration-300",
                            progressValue >= (index / sprintPhases.length) * 100 &&
                              progressValue < ((index + 1) / sprintPhases.length) * 100
                              ? "bg-[#185EAA]/10 border border-[#185EAA]/30 shadow-md scale-[1.02]"
                              : "bg-[#F8FFFF] hover:bg-[#FFFDF7] hover:shadow-lg hover:scale-105"
                          )}
                        >
                          <div className="flex flex-col items-center">
                            <div
                              className={cn(
                                "rounded-full p-2 mb-1 transition-transform duration-300",
                                progressValue >= (index / sprintPhases.length) * 100
                                  ? "bg-[#185EAA]/20 text-[#185EAA] scale-110 rotate-6"
                                  : "bg-[#FFFDF7] text-[#113C6A]/50 group-hover:scale-110"
                              )}
                            >
                              {phase.icon}
                            </div>
                            <span className="text-xs font-medium text-[#113C6A]">{phase.name}</span>
                          </div>
                        </div>
                      </HoverCardTrigger>

                      {/* Tooltip effect on hover - Made faster with motion animation */}
                      <HoverCardContent
                        side="top"
                        align="center"
                        className="z-[8999] w-64 shadow-xl border border-[#185EAA]/10 relative bg-white"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.1 }} // Fast fade-in for instant feel
                        >
                          <h4 className="text-sm font-semibold text-[#113C6A]">{phase.name}</h4>
                          <p className="text-xs text-[#0a213a]/70">
                            {phase.description}
                          </p>
                        </motion.div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-2">
                  <div className="flex items-center">
                    <div className="bg-[#FF7729]/20 rounded-full p-1 mr-2 shrink-0">
                      <CheckCircle className="h-4 w-4 text-[#FF7729]" />
                    </div>
                    <span className="text-sm text-[#113C6A]/80">Customer updates & support at every stage</span>
                  </div>
                  <div className="text-sm text-[#113C6A]/60 flex items-center mt-2 sm:mt-0">
                    <span className="mr-2">Continuous performance improvement</span>
                    <div className="flex space-x-1">
                      <span className="inline-block w-2 h-2 bg-[#185EAA]/30 rounded-full animate-pulse"></span>
                      <span className="inline-block w-2 h-2 bg-[#185EAA]/50 rounded-full animate-pulse animation-delay-200"></span>
                      <span className="inline-block w-2 h-2 bg-[#185EAA] rounded-full animate-pulse animation-delay-400"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FFFDF7] via-[#F8FFFF] to-[#FFFDF7] rounded-lg p-8 max-w-xl mx-auto text-center shadow-md hover:shadow-lg transition-all duration-300 border border-[#185EAA]/20">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-[#FF7729]/10 rounded-full animate-pulse-slow"></div>
                <div className="relative bg-[#F8FFFF] rounded-full p-4 border border-[#185EAA]/20 shadow-md">
                  <Rocket className="h-10 w-10 text-[#FF7729]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#113C6A]">Hitting the Market</h3>
              <p className="text-[#113C6A]/80">Ready to scale, produce, and launch</p>
              <div className="flex justify-center mt-4 space-x-2">
                <span className="inline-block w-3 h-3 rounded-full bg-[#185EAA]/30 animate-pulse"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-[#185EAA]/60 animate-pulse animation-delay-200"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-[#185EAA] animate-pulse animation-delay-400"></span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/tech-details" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center px-4 sm:px-6 bg-[#FF7729] text-[#FFFDF7] rounded-lg border border-[#FF7729] hover:bg-[#FF7729]/90 hover:shadow-md transition-all group py-3 w-full sm:w-auto justify-center">
                Learn More About Our Technology
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Button onClick={scrollToContact} className="inline-flex items-center px-4 sm:px-6 py-3 bg-[#113C6A] hover:bg-[#185EAA] text-[#FFFDF7] rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto justify-center">
                Contact Our Experts
                <MessageSquare className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;