import { useState, useRef, useEffect, TouchEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Electronics & Electrical Goods",
    brand: "Fragile • High-Value",
    description: "From bulbs and tube lights to cables and small appliances—handled with zero-breakage SOPs.",
    tags: ["Shock-Safe Packing", "Scan-Based Handover", "ePOD"],
    imageUrl: "/lovable-uploads/6739bd63-bf19-4abd-bb23-0b613bbf7ac8.png",
    link: "/projects/electronics"
  },
  {
    id: 2,
    title: "Toys, Gifts & Seasonal Items",
    brand: "Careful • Festive-Ready",
    description: "Corporate gifts and seasonal ranges delivered intact and on time for campaigns.",
    tags: ["Protective Packing", "Segregation", "Deadline Routing"],
    imageUrl: "/lovable-uploads/af5ee2ce-3942-48bb-a2ad-3b49b419daf9.png",
    link: "/projects/toys"
  },
  {
    id: 3,
    title: "Food, Beverages & FMCG",
    brand: "Fresh • Ambient/Controlled",
    description: "Compliant handling for packaged foods & beverages with batch/lot visibility.",
    tags: ["Ambient/Temp Controlled", "FIFO", "Seal-Intact SOPs"],
    imageUrl: "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png",
    link: "/projects/fmcg"
  },
  {
    id: 4,
    title: "Home & Kitchen Plastics",
    brand: "Lightweight • High-Cube",
    description: "Princeware/Cello-type SKUs moved in volume with low-damage stacking.",
    tags: ["High-Cube Vehicles", "Space Optimization", "Stretch-Wrap"],
    imageUrl: "/lovable-uploads/5262afdb-dd24-4d5e-be66-7c6717adbca9.png",
    link: "/projects/plastics"
  },
  {
    id: 5,
    title: "Apparel & Footwear",
    brand: "Clean • Store-Ready",
    description: "Carton-perfect moves for fashion, accessories, and footwear—B2B & marketplace ready.",
    tags: ["Garment-Safe Handling", "No Crush", "Store Labeling"],
    imageUrl: "/lovable-uploads/d5ce901e-2ce0-4f2a-bce1-f0ca5d6192df.png",
    link: "/projects/apparel"
  },
  {
    id: 6,
    title: "Industrial Supplies & Light Machinery",
    brand: "Heavy-Duty • Reliable",
    description: "Machines, tools, and spares delivered safely to plants and distributors.",
    tags: ["Bracing", "Lashing", "Time-Critical Runs"],
    imageUrl: "/lovable-uploads/services1.jpg",
    link: "/projects/machinery"
  },
  {
    id: 7,
    title: "Automotive Spares & Accessories",
    brand: "SKU-Dense • Dealer-Ready",
    description: "Fast replenishment to workshops and retailers with part-level accuracy.",
    tags: ["Milk-Run Routing", "Dealer Network", "Scan In/Out"],
    imageUrl: "/lovable-uploads/services3.png",
    link: "/projects/automotive"
  },
  {
    id: 8,
    title: "Marketplace & D2C Sellers",
    brand: "Flexible • Reverse-Ready",
    description: "First-mile to hub with seamless handoff to last-mile partners and easy returns.",
    tags: ["COD Workflows", "Prepaid Flow", "Reverse Pickups"],
    imageUrl: "/lovable-uploads/services2.jpg",
    link: "/projects/marketplace"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const minSwipeDistance = 50;

  useEffect(() => {
    if (isInView && !isHovering) {
      const interval = setInterval(() => {
        setActiveProject(prev => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }, {
      threshold: 0.2
    });

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveProject(prev => (prev + 1) % projects.length);
    } else if (isRightSwipe) {
      setActiveProject(prev => (prev - 1 + projects.length) % projects.length);
    }
  };

  const getCardAnimationClass = (index: number) => {
    if (index === activeProject) return "scale-100 opacity-100 z-20";
    if (index === (activeProject + 1) % projects.length) return "translate-x-[70%] scale-95 opacity-60 z-10";
    if (index === (activeProject - 1 + projects.length) % projects.length) return "translate-x-[-70%] scale-95 opacity-60 z-10";
    return "scale-90 opacity-0";
  };

  return (
    <section id="projects" ref={projectsRef} className="bg-[#] py-[50px] w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className={`text-center mb-10 max-w-3xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#113C6A] mb-3">
            Industries We Serve
          </motion.h2>
          <h2 className="text-3xl font-bold mb-4 text-[#113C6A]">Pan-India Logistics for Every Industry, Every Scale</h2>
          <p className="text-[#0a213a]/90">
            Trusted logistics partner for diverse sectors, combining reliability, compliance, and industry-specific expertise.
          </p>
          {isMobile && (
            <div className="flex items-center justify-center mt-4 animate-pulse-slow">
              <div className="flex items-center text-[#185EAA]">
                <ChevronLeft size={16} />
                <p className="text-sm mx-1">Swipe to navigate</p>
                <ChevronRight size={16} />
              </div>
            </div>
          )}
        </div>

        <div
          className="relative h-[550px] overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={carouselRef}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute top-0 w-full max-w-md transform transition-all duration-500 ${getCardAnimationClass(index)}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Card className="overflow-hidden sm:h-[420px] border border-[#185EAA]/20 shadow-sm hover:shadow-lg hover:shadow-[#185EAA]/10 flex flex-col bg-[#F8FFFF]">
                  <div
                    className="relative bg-[#113C6A] p-6 flex items-center justify-center h-52 overflow-hidden"
                    style={{
                      backgroundImage: `url(${project.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-[#113C6A]/70"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center">
                      <h3 className="text-2xl font-bold text-[#FFFDF7] mb-2">{project.title.toUpperCase()}</h3>
                      <div className="w-12 h-1 bg-[#FF7729] mb-2"></div>
                      <p className="text-[#FFFDF7]/90 text-sm">{project.brand}</p>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow bg-[#F8FFFF]">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-1 text-[#113C6A] group-hover:text-[#185EAA] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#0a213a]/90 text-sm font-medium">{project.brand}</p>
                    </div>

                    <p className="text-[#0a213a]/90 text-sm mb-4 flex-grow">{project.description}</p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-[#F8FFFF] text-[#0a213a]/90 rounded-full text-xs animate-pulse-slow border border-[#185EAA]/20"
                            style={{ animationDelay: `${idx * 300}ms` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={project.link}
                        className="text-[#185EAA] flex items-center hover:underline relative overflow-hidden group"
                        onClick={() => {
                          if (project.link.startsWith('/')) {
                            window.scrollTo(0, 0);
                          }
                        }}
                      >
                        <span className="relative z-10">Learn more</span>
                        <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#FF7729] transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {!isMobile && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#F8FFFF]/90 rounded-full flex items-center justify-center text-[#113C6A] hover:bg-[#F8FFFF] hover:text-[#185EAA] z-30 shadow-md transition-all duration-300 hover:scale-110 border border-[#185EAA]/20"
                onClick={() => setActiveProject(prev => (prev - 1 + projects.length) % projects.length)}
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#F8FFFF]/90 rounded-full flex items-center justify-center text-[#113C6A] hover:bg-[#F8FFFF] hover:text-[#185EAA] z-30 shadow-md transition-all duration-300 hover:scale-110 border border-[#185EAA]/20"
                onClick={() => setActiveProject(prev => (prev + 1) % projects.length)}
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="absolute bottom-20 left-0 right-0 flex justify-center items-center space-x-3 z-30">
            {projects.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeProject === idx
                  ? 'bg-[#FF7729] w-5'
                  : 'bg-[#185EAA]/30 hover:bg-[#185EAA]/50'
                  }`}
                onClick={() => setActiveProject(idx)}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className=" text-center">
          <p className="text-sm text-[#113C6A]/80 mb-4 font-medium">
            Ready to take the next step with BLI ?
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/industries"
              className="px-6 py-3 rounded-lg border border-[#113C6A] text-[#113C6A] font-medium hover:bg-[#113C6A] hover:text-white transition-colors"
              onClick={() => window.scrollTo(0, 0)}
            >
              More Details
            </Link>
            <Link
              to="/book-call"
              className="px-6 py-3 rounded-lg bg-[#FF7729] text-white font-medium shadow-md hover:bg-[#e8651f] transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;