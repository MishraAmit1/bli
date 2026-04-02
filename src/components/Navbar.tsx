import { useState, useEffect, useCallback, memo } from "react";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Truck,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const servicesData = [
  {
    to: "/services/full-truckload",
    title: "Full Truck Load (FTL)",
    description: "Dedicated trucks for large shipments",
  },
  {
    to: "/services/part-load",
    title: "Part Load (PTL)",
    description: "Cost-effective shared transport",
  },
  {
    to: "/services/3pl",
    title: "3PL & Distribution",
    description: "End-to-end supply chain solutions",
  },
  {
    to: "/services/warehousing",
    title: "Warehousing Support",
    description: "Strategic storage & inventory",
  },
  {
    to: "/services/local-dispatch",
    title: "Local & Regional Dispatch",
    description: "Reliable intra-city deliveries",
  },
  {
    to: "/services/rail-freight",
    title: "Rail Freight Solutions",
    description: "Bulk cargo via rail networks",
  },
  {
    to: "/services/air-cargo",
    title: "Air Cargo Services",
    description: "Time-critical air shipments",
  },
  {
    to: "/services/real-time-support",
    title: "Real-Time Support",
    description: "24/7 tracking & coordination",
  },
];

const networkData = {
  pickup: [
    {
      region: "Gujarat Belt",
      cities: ["Vapi (GIDC)", "Valsad", "Surat", "Ahmedabad"],
      to: "/services/part-load-transport/vapi",
    },
    {
      region: "Maharashtra",
      cities: ["Mumbai", "Bhiwandi", "Vasai", "Navi Mumbai"],
      to: "/services/part-load-transport/mumbai",
    },
    {
      region: "Micro Hubs",
      cities: ["Daman", "Silvassa"],
      to: "/services/part-load-transport/daman",
    },
  ],
  delivery: [
    {
      region: "Delhi NCR & North",
      cities: ["Delhi", "Noida", "Gurugram", "Ghaziabad"],
      to: "/services/part-load-transport/delhi-ncr",
    },
    {
      region: "Punjab & Haryana",
      cities: ["Ludhiana", "Amritsar", "Panipat", "Karnal"],
      to: "/services/part-load-transport/punjab-region",
    },
    {
      region: "East India",
      cities: ["Kolkata", "Patna", "Ranchi", "Guwahati"],
      to: "/services/part-load-transport/east-india",
    },
    {
      region: "Central & UP",
      cities: ["Lucknow", "Kanpur", "Indore", "Bhopal"],
      to: "/services/part-load-transport/lucknow",
    },
    {
      region: "South India",
      cities: ["Bangalore", "Chennai", "Hyderabad"],
      to: "/services/part-load-transport/south-india",
    },
  ],
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  );
  const [showTopBar, setShowTopBar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          setShowTopBar(window.scrollY <= 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenMobileDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const toggleMobileDropdown = useCallback((d: string) => {
    setOpenMobileDropdown((prev) => (prev === d ? null : d));
  }, []);
  const handleNavClick = useCallback(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const linkUnderline = `
    relative bg-transparent hover:bg-transparent
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:block
    after:h-[2px] after:w-full after:scale-x-0 after:origin-bottom-right
    after:transition-transform after:duration-300
    hover:after:scale-x-100 hover:after:origin-bottom-left
    after:bg-[#113C6A]
  `;

  return (
    <>
      {/* ── TOP BANNER ── */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-[101] transition-all duration-400 overflow-hidden bg-[#113C6A]",
          showTopBar ? "h-[40px] opacity-100" : "h-0 opacity-0",
        )}
      >
        <div className="w-full h-full px-4 sm:px-6 lg:px-8 mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center space-x-5 text-white/75 text-[13px]">
            <a
              href="tel:+919687448434"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={12} />
              <span>+91-968 744 8434</span>
            </a>
            <span className="w-px h-3.5 bg-white/20" />
            <a
              href="mailto:info@blirapid.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={12} />
              <span>info@blirapid.com</span>
            </a>
          </div>

          <a
            href="tel:+919687448434"
            className="flex md:hidden items-center gap-1.5 text-white/75 text-[13px]"
          >
            <Phone size={11} />
            <span>+91-968 744 8434</span>
          </a>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center gap-1.5 text-white/70 text-[13px]">
              <MapPin size={12} />
              <span>Pan India Network</span>
            </div>
            <span className="hidden sm:block w-px h-3.5 bg-white/20" />
            <div className="hidden sm:flex items-center space-x-1.5">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-[26px] h-[26px] rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white hover:text-[#113C6A] transition-all duration-200"
                >
                  <Icon size={11} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <nav
        className={cn(
          "fixed left-0 right-0 z-[100] transition-all duration-500 w-full bg-white",
          showTopBar ? "top-[40px]" : "top-0",
          isScrolled ? "shadow-md" : "shadow-sm",
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex items-center justify-between h-[76px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                aria-label="BLI Logistics - Home"
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              >
                <img
                  src="/lovable-uploads/9.png"
                  alt="BLI Logistics"
                  className="h-[52px] w-auto"
                  loading="eager"
                />
              </Link>
            </div>

            {/* ── CENTERED NAV ── */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <NavigationMenu>
                <NavigationMenuList className="space-x-1">
                  {[
                    { to: "/", label: "Home" },
                    { to: "/about", label: "About Us" },
                  ].map(({ to, label }) => (
                    <NavigationMenuItem key={to}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={to}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            linkUnderline,
                            "text-[15px] px-5 py-2.5 font-medium text-[#1a1a1a] hover:text-[#113C6A]",
                          )}
                        >
                          {label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}

                  {/* ========== SERVICES MEGA DROPDOWN ========== */}
                  {/* ========== SERVICES MEGA DROPDOWN ========== */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        linkUnderline,
                        "text-[15px] px-5 py-2.5 font-medium text-[#1a1a1a] hover:text-[#113C6A]",
                      )}
                    >
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[520px] bg-white rounded-lg shadow-2xl border border-gray-100/80 overflow-hidden">
                        <div className="p-5">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                            What We Offer
                          </div>
                          <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                            {servicesData.map((service) => (
                              <Link
                                key={service.to}
                                to={service.to}
                                className="px-3 py-2.5 rounded-md hover:bg-gray-50 transition-colors group"
                              >
                                <div className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#113C6A] transition-colors">
                                  {service.title}
                                </div>
                                <p className="text-[12px] text-gray-400 mt-0.5 leading-snug">
                                  {service.description}
                                </p>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-3 pt-3 border-t border-gray-100 px-3">
                            <Link
                              to="/services"
                              className="inline-flex items-center text-sm text-[#113C6A] hover:text-[#1a1a1a] font-medium transition-colors"
                            >
                              View all services
                              <ChevronRight className="ml-1 h-3.5 w-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* ========== NETWORK DROPDOWN ========== */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        linkUnderline,
                        "text-[15px] px-5 py-2.5 font-medium text-[#1a1a1a] hover:text-[#113C6A]",
                      )}
                    >
                      Network
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[640px] bg-white rounded-lg shadow-2xl border border-gray-100/80 overflow-hidden">
                        <div className="flex">
                          {/* Pickup Hubs */}
                          <div className="flex-1 p-5 border-r border-gray-100">
                            <div className="text-xs font-semibold text-[#113C6A] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#113C6A]" />
                              Pickup Hubs
                            </div>
                            <div className="space-y-3">
                              {networkData.pickup.map((hub) => (
                                <Link
                                  key={hub.region}
                                  to={hub.to}
                                  className="block px-3 py-2 rounded-md hover:bg-gray-50 transition-colors group"
                                >
                                  <div className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#113C6A] transition-colors">
                                    {hub.region}
                                  </div>
                                  <p className="text-[12px] text-gray-400 mt-0.5">
                                    {hub.cities.join(" · ")}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Delivery Zones */}
                          <div className="flex-1 p-5">
                            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                              Delivery Zones
                            </div>
                            <div className="space-y-1">
                              {networkData.delivery.map((zone) => (
                                <Link
                                  key={zone.region}
                                  to={zone.to}
                                  className="block px-3 py-2 rounded-md hover:bg-gray-50 transition-colors group"
                                >
                                  <div className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#113C6A] transition-colors">
                                    {zone.region}
                                  </div>
                                  <p className="text-[12px] text-gray-400 mt-0.5">
                                    {zone.cities.join(" · ")}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Bottom bar */}
                        <div className="bg-gray-50 px-5 py-3 flex items-center justify-between border-t border-gray-100">
                          <span className="text-xs text-gray-500">
                            25+ cities · Daily dispatch · Fixed routes
                          </span>
                          <Link
                            to="/network"
                            className="text-xs text-[#113C6A] hover:text-[#1a1a1a] font-medium flex items-center gap-1 transition-colors"
                          >
                            Full network map
                            <ArrowRight size={11} />
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {[
                    { to: "/industries", label: "Industries" },
                    { to: "/resources", label: "Resources" },
                    { to: "/contact", label: "Contact" },
                  ].map(({ to, label }) => (
                    <NavigationMenuItem key={to}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={to}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            linkUnderline,
                            "text-[15px] px-5 py-2.5 font-medium text-[#1a1a1a] hover:text-[#113C6A]",
                          )}
                        >
                          {label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right CTA — Clean Outlined Style */}
            <div className="hidden lg:block flex-shrink-0">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-5 py-2.5 border border-[#1a1a1a] hover:bg-[#1a1a1a] transition-all duration-300"
              >
                <span className="text-[14px] font-semibold text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                  Get Quote
                </span>
                <ArrowRight className="w-4 h-4 text-[#1a1a1a] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-[#1a1a1a] hover:bg-gray-50 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-gray-100"
            >
              <div className="bg-white px-4 pt-2 pb-5 space-y-0.5 max-h-[calc(100vh-8rem)] overflow-y-auto">
                <MobileNavItem to="/" onClick={handleNavClick}>
                  Home
                </MobileNavItem>
                <MobileNavItem to="/about" onClick={handleNavClick}>
                  About Us
                </MobileNavItem>

                {/* Services Accordion */}
                <MobileDropdown
                  label="Services"
                  isOpen={openMobileDropdown === "services"}
                  onToggle={() => toggleMobileDropdown("services")}
                >
                  <div className="pl-3 space-y-0.5 mt-1 border-l-2 border-[#113C6A]/20 ml-3">
                    {servicesData.map((service) => (
                      <Link
                        key={service.to}
                        to={service.to}
                        className="block px-3 py-2.5 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={handleNavClick}
                      >
                        <div className="text-sm font-medium">
                          {service.title}
                        </div>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="block px-3 py-2.5 rounded-md text-sm font-medium text-[#113C6A] hover:bg-gray-50 transition-colors"
                      onClick={handleNavClick}
                    >
                      View all services →
                    </Link>
                  </div>
                </MobileDropdown>

                {/* Network Accordion */}
                <MobileDropdown
                  label="Network"
                  isOpen={openMobileDropdown === "network"}
                  onToggle={() => toggleMobileDropdown("network")}
                >
                  <div className="pl-3 mt-1 border-l-2 border-[#113C6A]/20 ml-3">
                    <div className="px-3 py-2">
                      <span className="text-xs font-semibold text-[#113C6A] uppercase tracking-wider">
                        Pickup Hubs
                      </span>
                    </div>
                    {networkData.pickup.map((hub) => (
                      <Link
                        key={hub.region}
                        to={hub.to}
                        className="block px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
                        onClick={handleNavClick}
                      >
                        <div className="text-sm font-medium text-gray-700">
                          {hub.region}
                        </div>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {hub.cities.join(" · ")}
                        </p>
                      </Link>
                    ))}

                    <div className="px-3 py-2 mt-2">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Delivery Zones
                      </span>
                    </div>
                    {networkData.delivery.map((zone) => (
                      <Link
                        key={zone.region}
                        to={zone.to}
                        className="block px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
                        onClick={handleNavClick}
                      >
                        <div className="text-sm font-medium text-gray-700">
                          {zone.region}
                        </div>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {zone.cities.join(" · ")}
                        </p>
                      </Link>
                    ))}
                  </div>
                </MobileDropdown>

                <MobileNavItem to="/industries" onClick={handleNavClick}>
                  Industries
                </MobileNavItem>
                <MobileNavItem to="/resources" onClick={handleNavClick}>
                  Resources
                </MobileNavItem>
                <MobileNavItem to="/contact" onClick={handleNavClick}>
                  Contact
                </MobileNavItem>

                {/* Mobile CTA — Outlined Style */}
                <div className="pt-4">
                  <Link
                    to="/contact"
                    onClick={handleNavClick}
                    className="flex items-center justify-center gap-2 w-full py-3 border border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white text-[#1a1a1a] font-semibold transition-all duration-300 text-[15px]"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="pt-4 mt-3 border-t border-gray-100 flex items-center justify-center gap-4 text-[13px] text-gray-400">
                  <a
                    href="tel:+919687448434"
                    className="flex items-center gap-1.5 hover:text-[#113C6A] transition-colors"
                  >
                    <Phone size={13} />
                    +91-968 744 8434
                  </a>
                  <span className="w-px h-3.5 bg-gray-200" />
                  <a
                    href="mailto:info@blirapid.com"
                    className="flex items-center gap-1.5 hover:text-[#113C6A] transition-colors"
                  >
                    <Mail size={13} />
                    Email Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer */}
      <div
        className="transition-all duration-500"
        style={{ height: showTopBar ? "116px" : "76px" }}
      />
    </>
  );
};

/* ── Reusable Mobile Components ── */

const MobileDropdown = memo(({ label, isOpen, onToggle, children }: any) => (
  <div>
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full px-3 py-3 rounded-md text-[15px] font-medium text-[#1a1a1a] hover:bg-gray-50 transition-colors"
    >
      {label}
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronDown size={16} className="text-gray-400" />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
));

const MobileNavItem = memo(({ to, onClick, children }: any) => (
  <Link
    to={to}
    className="block px-3 py-3 rounded-md text-[15px] font-medium text-[#1a1a1a] hover:bg-gray-50 transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
));

export default memo(Navbar);
