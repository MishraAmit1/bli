import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleMobileDropdown = (dropdown) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Reusable underline hover styles
  const linkUnderline = `
    relative bg-transparent hover:bg-transparent
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:block
    after:h-[2px] after:w-full after:scale-x-0 after:origin-bottom-right
    after:transition-transform after:duration-300
    hover:after:scale-x-100 hover:after:origin-bottom-left
  `;

  // Services data for both desktop and mobile
  const servicesData = [
    {
      to: "/services/full-truckload",
      title: "Full Truck Load (FTL)",
      description: "Complete trucks for large-volume cargo and plant-to-plant transfers"
    },
    {
      to: "/services/part-load",
      title: "Part Load (PTL)",
      description: "Pay only for the space you use—ideal for small or medium shipments"
    },
    {
      to: "/services/3pl",
      title: "3PL & Distribution",
      description: "End-to-end supply chain management and coordination"
    },
    {
      to: "/services/warehousing",
      title: "Warehousing Support",
      description: "Strategic hubs for both short- and long-term storage"
    },
    {
      to: "/services/local-dispatch",
      title: "Local & Regional Dispatch",
      description: "Quick, reliable deliveries within cities and regional zones"
    },
    {
      to: "/services/rail-freight",
      title: "Rail Freight Solutions",
      description: "Cost-efficient bulk shipping via India's rail network"
    },
    {
      to: "/services/air-cargo",
      title: "Air Cargo Services",
      description: "Same-day or next-day air freight for urgent shipments"
    },
    {
      to: "/services/real-time-support",
      title: "Real-Time Support",
      description: "24/7 coordination with proactive updates and live tracking"
    }
  ];

  // Industries data for both desktop and mobile
  const industriesData = [
    {
      to: "/industries/ecommerce",
      title: "E-commerce & Retail",
      description: "Fast fulfillment and reverse logistics"
    },
    {
      to: "/industries/manufacturing",
      title: "Manufacturing",
      description: "Raw material and finished goods transport"
    },
    {
      to: "/industries/fmcg",
      title: "FMCG & Food",
      description: "Temperature-controlled and time-sensitive delivery"
    },
    {
      to: "/industries/automotive",
      title: "Automotive",
      description: "Parts distribution and JIT delivery"
    }
  ];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled
          ? "bg-[#FFFDF7]/80 border-b border-[#F8FFFF] shadow-sm backdrop-blur-md"
          : "bg-[#113C6A]/95 backdrop-blur"
      )}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={isScrolled ? "/lovable-uploads/7.png" : "/lovable-uploads/8.png"}
                alt="BLI Logistics Logo"
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "text-[#21221C]" : "text-[#FFFDF7]")}>
              <NavigationMenuList>

                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        linkUnderline,
                        isScrolled
                          ? "text-[#21221C] hover:text-[#185EAA] after:bg-[#185EAA]"
                          : "text-[#FFFDF7] hover:text-[#F8FFFF] after:bg-[#FF7729]"
                      )}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        linkUnderline,
                        isScrolled
                          ? "text-[#21221C] hover:text-[#185EAA] after:bg-[#185EAA]"
                          : "text-[#FFFDF7] hover:text-[#F8FFFF] after:bg-[#FF7729]"
                      )}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      linkUnderline,
                      isScrolled
                        ? "text-[#21221C] hover:text-[#185EAA] after:bg-[#185EAA]"
                        : "text-[#FFFDF7] hover:text-[#F8FFFF] after:bg-[#FF7729]"
                    )}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-4 p-6 w-[700px] bg-[#FFFDF7] 
                  relative left-1/2 -translate-x-1/2 shadow-lg rounded-md">
                      {/* Services columns */}
                      <div className="space-y-3">
                        {servicesData.slice(0, 4).map((service, index) => (
                          <li key={index} className="list-none">
                            <Link to={service.to} className="block p-3 rounded-md hover:bg-[#F8FFFF]">
                              <div className="font-medium text-[#21221C]">{service.title}</div>
                              <p className="text-sm text-[#113C6A]/80">{service.description}</p>
                            </Link>
                          </li>
                        ))}
                      </div>

                      <div className="space-y-3">
                        {servicesData.slice(4).map((service, index) => (
                          <li key={index} className="list-none">
                            <Link to={service.to} className="block p-3 rounded-md hover:bg-[#F8FFFF]">
                              <div className="font-medium text-[#21221C]">{service.title}</div>
                              <p className="text-sm text-[#113C6A]/80">{service.description}</p>
                            </Link>
                          </li>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      linkUnderline,
                      isScrolled
                        ? "text-[#21221C] hover:text-[#185EAA] after:bg-[#185EAA]"
                        : "text-[#FFFDF7] hover:text-[#F8FFFF] after:bg-[#FF7729]"
                    )}
                  >
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[420px] bg-[#FFFDF7]">
                      {industriesData.map((industry, index) => (
                        <li key={index}>
                          <Link to={industry.to} className="block p-3 space-y-1 rounded-md hover:bg-[#F8FFFF]">
                            <div className="font-medium text-[#21221C]">{industry.title}</div>
                            <p className="text-sm text-[#113C6A]/80">{industry.description}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/track-shipment">
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        linkUnderline,
                        isScrolled
                          ? "text-[#21221C] hover:text-[#185EAA] after:bg-[#185EAA]"
                          : "text-[#FFFDF7] hover:text-[#F8FFFF] after:bg-[#FF7729]"
                      )}
                    >
                      Track Shipment
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/resources">
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        linkUnderline,
                        isScrolled
                          ? "text-[#21221C] hover:text-[#185EAA] after:bg-[#185EAA]"
                          : "text-[#FFFDF7] hover:text-[#F8FFFF] after:bg-[#FF7729]"
                      )}
                    >
                      Resources
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" >
                    <button
                      className="px-4 py-2 rounded-md transition-colors shadow-sm bg-[#FF7729] text-[#FFFDF7] hover:brightness-110"
                    >
                      Get Quote
                    </button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={cn("focus:outline-none", isScrolled ? "text-[#21221C]" : "text-[#FFFDF7]")}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-3 pt-2 pb-3 space-y-1 shadow-sm overflow-y-auto max-h-[80vh]", isScrolled ? "bg-[#FFFDF7]/95 backdrop-blur-md" : "bg-[#113C6A]/95 backdrop-blur-md")}>
          {/* Home */}
          <Link
            to="/"
            className={cn(
              "block px-3 py-2.5 rounded-md text-sm font-medium",
              isScrolled ? "text-[#21221C] hover:bg-[#F8FFFF]" : "text-[#F8FFFF] hover:bg-[#185EAA]/30"
            )}
            onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
          >
            Home
          </Link>

          {/* About Us */}
          <Link
            to="/about"
            className={cn(
              "block px-3 py-2.5 rounded-md text-sm font-medium",
              isScrolled ? "text-[#21221C] hover:bg-[#F8FFFF]" : "text-[#F8FFFF] hover:bg-[#185EAA]/30"
            )}
            onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleMobileDropdown('services')}
              className={cn(
                "flex items-center justify-between w-full px-3 py-2.5 rounded-md text-sm font-medium",
                isScrolled ? "text-[#21221C] hover:bg-[#F8FFFF]" : "text-[#F8FFFF] hover:bg-[#185EAA]/30"
              )}
            >
              <span>Services</span>
              {openMobileDropdown === 'services' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            <div className={cn(
              "transition-all duration-300 overflow-hidden pl-4",
              openMobileDropdown === 'services' ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            )}>
              {servicesData.map((service, index) => (
                <Link
                  key={index}
                  to={service.to}
                  className={cn(
                    "block px-3 py-2 my-1 rounded-md text-sm border-l-2",
                    isScrolled
                      ? "text-[#21221C] hover:bg-[#F8FFFF] border-[#185EAA]/30"
                      : "text-[#F8FFFF] hover:bg-[#185EAA]/30 border-[#FF7729]/50"
                  )}
                  onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
                >
                  <div className="font-medium">{service.title}</div>
                  <p className={cn(
                    "text-xs mt-1",
                    isScrolled ? "text-[#113C6A]/70" : "text-[#F8FFFF]/70"
                  )}>
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Industries Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleMobileDropdown('industries')}
              className={cn(
                "flex items-center justify-between w-full px-3 py-2.5 rounded-md text-sm font-medium",
                isScrolled ? "text-[#21221C] hover:bg-[#F8FFFF]" : "text-[#F8FFFF] hover:bg-[#185EAA]/30"
              )}
            >
              <span>Industries</span>
              {openMobileDropdown === 'industries' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            <div className={cn(
              "transition-all duration-300 overflow-hidden pl-4",
              openMobileDropdown === 'industries' ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
            )}>
              {industriesData.map((industry, index) => (
                <Link
                  key={index}
                  to={industry.to}
                  className={cn(
                    "block px-3 py-2 my-1 rounded-md text-sm border-l-2",
                    isScrolled
                      ? "text-[#21221C] hover:bg-[#F8FFFF] border-[#185EAA]/30"
                      : "text-[#F8FFFF] hover:bg-[#185EAA]/30 border-[#FF7729]/50"
                  )}
                  onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
                >
                  <div className="font-medium">{industry.title}</div>
                  <p className={cn(
                    "text-xs mt-1",
                    isScrolled ? "text-[#113C6A]/70" : "text-[#F8FFFF]/70"
                  )}>
                    {industry.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Track Shipment */}
          <Link
            to="/track-shipment"
            className={cn(
              "block px-3 py-2.5 rounded-md text-sm font-medium",
              isScrolled ? "text-[#21221C] hover:bg-[#F8FFFF]" : "text-[#F8FFFF] hover:bg-[#185EAA]/30"
            )}
            onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
          >
            Track Shipment
          </Link>

          {/* Resources */}
          <Link
            to="/resources"
            className={cn(
              "block px-3 py-2.5 rounded-md text-sm font-medium",
              isScrolled ? "text-[#21221C] hover:bg-[#F8FFFF]" : "text-[#F8FFFF] hover:bg-[#185EAA]/30"
            )}
            onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
          >
            Resources
          </Link>

          {/* Get Quote Button */}
          <Link
            to="/contact"
            className="block mt-3"
            onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
          >
            <button
              className="w-full px-4 py-2.5 rounded-md text-sm font-medium transition-colors shadow-sm bg-[#FF7729] text-[#FFFDF7] hover:brightness-110"
            >
              Get Quote
            </button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;