import { useState, useEffect, useCallback, memo } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, ChevronRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const servicesData = [
  {
    to: "/services/full-truckload",
    title: "Full Truck Load (FTL)",
    description: "Complete trucks for large-volume cargo"
  },
  {
    to: "/services/part-load",
    title: "Part Load (PTL)",
    description: "Pay only for the space you use"
  },
  {
    to: "/services/3pl",
    title: "3PL & Distribution",
    description: "End-to-end supply chain management"
  },
  {
    to: "/services/warehousing",
    title: "Warehousing Support",
    description: "Strategic storage solutions"
  },
  {
    to: "/services/local-dispatch",
    title: "Local & Regional Dispatch",
    description: "Quick, reliable deliveries within cities"
  },
  {
    to: "/services/rail-freight",
    title: "Rail Freight Solutions",
    description: "Cost-efficient bulk shipping"
  },
  {
    to: "/services/air-cargo",
    title: "Air Cargo Services",
    description: "Express air freight solutions"
  },
  {
    to: "/services/real-time-support",
    title: "Real-Time Support",
    description: "24/7 coordination with live tracking"
  }
];

// Memoized NavLink component
const NavLink = memo(({ to, children, className, onClick, isScrolled }: any) => (
  <Link
    to={to}
    className={className}
    onClick={onClick}
    aria-label={`Navigate to ${children}`}
  >
    {children}
  </Link>
));

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenMobileDropdown(null);
  }, [location.pathname]);
  // Prevent body scroll ONLY when mobile menu is open (not for dropdowns)
  // Replace the existing useEffect for body scroll with this:
  useEffect(() => {
    if (isMenuOpen) {
      // Disable body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Enable body scroll when mobile menu is closed
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);

  const toggleMobileDropdown = useCallback((dropdown: string) => {
    setOpenMobileDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const handleNavClick = useCallback(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Reusable underline hover styles
  const linkUnderline = `
    relative bg-transparent hover:bg-transparent
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:block
    after:h-[2px] after:w-full after:scale-x-0 after:origin-bottom-right
    after:transition-transform after:duration-300
    hover:after:scale-x-100 hover:after:origin-bottom-left
  `;

  return (
    <>
      {/* SEO: Skip navigation link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#FF7300] text-white px-4 py-2 rounded z-50">
        Skip to main content
      </a>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 w-full",
          isScrolled
            ? "bg-[#FFFDF7]/95 border-b border-[#F8FFFF] shadow-sm backdrop-blur-md"
            : "bg-[#113C6A]"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo with preload */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="flex items-center"
                aria-label="BLI Logistics - Home"
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              >
                <img
                  src={isScrolled ? "/lovable-uploads/7.png" : "/lovable-uploads/8.png"}
                  alt="BLI - Bansal Logistics of India"
                  className="h-20 w-auto"
                  width="120"
                  height="80"
                  loading="eager"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              <NavigationMenu className={cn(isScrolled ? "text-[#21221C]" : "text-[#FFFDF7]")}>
                <NavigationMenuList>
                  {/* Home */}
                  <NavigationMenuItem>
                    <NavLink to="/">
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
                    </NavLink>
                  </NavigationMenuItem>

                  {/* About */}
                  <NavigationMenuItem>
                    <NavLink to="/about">
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
                    </NavLink>
                  </NavigationMenuItem>

                  {/* Services Dropdown */}
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
                      <div className="w-[600px] bg-[#FFFDF7] shadow-xl rounded-lg p-6">
                        {/* Header */}
                        <div className="mb-4 pb-3 border-b border-[#185EAA]/20">
                          <Link
                            to="/services"
                            className="inline-flex items-center text-[#FF7300] hover:text-[#FF7729] font-semibold transition-colors"
                          >
                            View All Services
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>

                        {/* Services Grid - UPDATED TO SHOW ALL 8 SERVICES */}
                        <ul className="grid grid-cols-2 gap-3">
                          {/* First Column - 4 services */}
                          <div className="space-y-3">
                            {servicesData.slice(0, 4).map((service, index) => (
                              <li key={index} className="list-none">
                                <Link
                                  to={service.to}
                                  className="block p-3 rounded-lg hover:bg-[#F8FFFF] transition-colors group"
                                >
                                  <div className="font-medium text-[#113C6A] group-hover:text-[#FF7300] transition-colors">
                                    {service.title}
                                  </div>
                                  <p className="text-sm text-[#185EAA]/70 mt-1">
                                    {service.description}
                                  </p>
                                </Link>
                              </li>
                            ))}
                          </div>

                          {/* Second Column - 4 services */}
                          <div className="space-y-3">
                            {servicesData.slice(4, 8).map((service, index) => (
                              <li key={index} className="list-none">
                                <Link
                                  to={service.to}
                                  className="block p-3 rounded-lg hover:bg-[#F8FFFF] transition-colors group"
                                >
                                  <div className="font-medium text-[#113C6A] group-hover:text-[#FF7300] transition-colors">
                                    {service.title}
                                  </div>
                                  <p className="text-sm text-[#185EAA]/70 mt-1">
                                    {service.description}
                                  </p>
                                </Link>
                              </li>
                            ))}
                          </div>
                        </ul>

                        {/* CTA */}
                        <div className="mt-4 pt-3 border-t border-[#185EAA]/20">
                          <Link
                            to="/contact"
                            className="inline-flex items-center text-sm text-[#185EAA] hover:text-[#FF7300] transition-colors"
                          >
                            <Phone className="mr-2 h-4 w-4" />
                            Need help? Call +91-968 744 8434
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Industries */}
                  <NavigationMenuItem>
                    <NavLink to="/industries">
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          linkUnderline,
                          isScrolled
                            ? "text-[#21221C] hover:text-[#185EAA] after:bg-[#185EAA]"
                            : "text-[#FFFDF7] hover:text-[#F8FFFF] after:bg-[#FF7729]"
                        )}
                      >
                        Industries
                      </NavigationMenuLink>
                    </NavLink>
                  </NavigationMenuItem>

                  {/* Resources */}
                  <NavigationMenuItem>
                    <NavLink to="/resources">
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
                    </NavLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* CTA Button */}
              <Link to="/contact" className="ml-4">
                <button
                  className="px-6 py-2.5 bg-gradient-to-r from-[#FF7300] to-[#FF7729] text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  aria-label="Get a quote for logistics services"
                >
                  Get Quote
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className={cn(
                  "p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2",
                  isScrolled
                    ? "text-[#21221C] focus:ring-[#185EAA]"
                    : "text-[#FFFDF7] focus:ring-[#FF7729]"
                )}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className={cn(
                "px-4 pt-2 pb-4 space-y-1 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto", // Main menu scroll
                isScrolled ? "bg-[#FFFDF7]/95" : "bg-[#113C6A]/95"
              )}>
                {/* Mobile Navigation Items */}
                <MobileNavItem
                  to="/"
                  onClick={handleNavClick}
                  isScrolled={isScrolled}
                >
                  Home
                </MobileNavItem>

                <MobileNavItem
                  to="/about"
                  onClick={handleNavClick}
                  isScrolled={isScrolled}
                >
                  About Us
                </MobileNavItem>

                {/* Services Dropdown Mobile */}
                <div>
                  <button
                    onClick={() => toggleMobileDropdown('services')}
                    className={cn(
                      "flex items-center justify-between w-full px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                      isScrolled
                        ? "text-[#21221C] hover:bg-[#F8FFFF]"
                        : "text-[#F8FFFF] hover:bg-[#185EAA]/30"
                    )}
                    aria-expanded={openMobileDropdown === 'services'}
                  >
                    <span>Services</span>
                    {openMobileDropdown === 'services' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </button>

                  <AnimatePresence>
                    {openMobileDropdown === 'services' && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-1 mt-1 max-h-[40vh] overflow-y-auto"> {/* Services dropdown scroll */}
                          <Link
                            to="/services"
                            className={cn(
                              "block px-3 py-2 rounded-md text-sm font-medium",
                              isScrolled
                                ? "bg-[#FF7300] text-white"
                                : "bg-[#FF7729] text-white"
                            )}
                            onClick={handleNavClick}
                          >
                            View All Services →
                          </Link>

                          {/* Show all 8 services in mobile menu */}
                          {servicesData.map((service, index) => (
                            <Link
                              key={index}
                              to={service.to}
                              className={cn(
                                "block px-3 py-2 rounded-md text-sm",
                                isScrolled
                                  ? "text-[#21221C] hover:bg-[#F8FFFF]"
                                  : "text-[#F8FFFF] hover:bg-[#185EAA]/30"
                              )}
                              onClick={handleNavClick}
                            >
                              <div className="font-medium">{service.title}</div>
                              <p className={cn(
                                "text-xs mt-0.5",
                                isScrolled ? "text-[#113C6A]/70" : "text-[#F8FFFF]/70"
                              )}>
                                {service.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <MobileNavItem
                  to="/industries"
                  onClick={handleNavClick}
                  isScrolled={isScrolled}
                >
                  Industries
                </MobileNavItem>

                <MobileNavItem
                  to="/resources"
                  onClick={handleNavClick}
                  isScrolled={isScrolled}
                >
                  Resources
                </MobileNavItem>

                {/* Mobile CTA */}
                <div className="pt-4">
                  <Link
                    to="/contact"
                    onClick={handleNavClick}
                    className="block"
                  >
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-[#FF7300] to-[#FF7729] text-white font-semibold rounded-lg shadow-lg">
                      Get Quote
                    </button>
                  </Link>
                </div>

                {/* Quick Contact - Mobile */}
                <div className={cn(
                  "pt-4 mt-4 border-t",
                  isScrolled ? "border-[#185EAA]/20" : "border-[#FF7729]/30"
                )}>
                  <a
                    href="tel:+919687448434"
                    className={cn(
                      "flex items-center justify-center space-x-2 text-sm",
                      isScrolled ? "text-[#185EAA]" : "text-[#FF7729]"
                    )}
                  >
                    <Phone size={16} />
                    <span>+91-968 744 8434</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer to prevent content jump */}
      <div className="h-16" />
    </>
  );
};

// Memoized Mobile Nav Item Component
const MobileNavItem = memo(({ to, onClick, isScrolled, children }: any) => (
  <Link
    to={to}
    className={cn(
      "block px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
      isScrolled
        ? "text-[#21221C] hover:bg-[#F8FFFF]"
        : "text-[#F8FFFF] hover:bg-[#185EAA]/30"
    )}
    onClick={onClick}
  >
    {children}
  </Link>
));

export default memo(Navbar);
