// src/components/PTLLocationPage.tsx
import { useEffect, useState, useRef, memo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Clock,
  Package,
  Truck,
  CheckCircle,
  Phone,
  Factory,
  Shield,
  Zap,
  Building2,
  ChevronRight,
  ChevronDown,
  MessageCircle,
  Timer,
  Box,
  Warehouse,
  IndianRupee,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Helmet } from "react-helmet-async";
import {
  getLocationBySlug,
  getPickupLocations,
  getDeliveryLocations,
  getRegionPages,
} from "@/data/ptlLocations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ═══════════════ SUB-COMPONENTS ═══════════════ */

const StatsCard = memo(
  ({
    icon: Icon,
    value,
    label,
  }: {
    icon: any;
    value: string;
    label: string;
  }) => (
    <div className="bg-white p-4 sm:p-5 lg:p-6 border border-gray-200">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF7300] mb-2 sm:mb-3" />
      <div className="font-bold leading-none mb-1 text-[28px] sm:text-[32px] lg:text-[36px] text-black">
        {value}
      </div>
      <div className="font-light text-xs sm:text-sm text-[#1C1825]">
        {label}
      </div>
    </div>
  ),
);

const ProcessStep = memo(
  ({ step, title, desc }: { step: string; title: string; desc: string }) => (
    <div className="bg-gray-50 p-4 sm:p-5 border border-gray-200">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF7300] text-white flex items-center justify-center mx-auto mb-3 font-bold text-base sm:text-lg">
        {step}
      </div>
      <div className="text-sm sm:text-base font-bold text-[#113C6A] mb-1">
        {title}
      </div>
      <div className="text-xs sm:text-sm text-gray-500 font-light">{desc}</div>
    </div>
  ),
);

const WhyChooseCard = memo(
  ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
    <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white border border-gray-200">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#113C6A] flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
      </div>
      <div>
        <div className="font-bold text-sm sm:text-base text-[#113C6A] mb-1">
          {title}
        </div>
        <div className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
          {desc}
        </div>
      </div>
    </div>
  ),
);

const NetworkLink = memo(
  ({ to, name, state }: { to: string; name: string; state: string }) => (
    <Link
      to={to}
      className="group flex items-center justify-between p-3 sm:p-4 bg-white border border-gray-200 hover:border-[#FF7300] transition-all duration-300"
    >
      <div>
        <span className="text-sm sm:text-base font-semibold text-[#1a1a1a] group-hover:text-[#113C6A] transition-colors">
          {name}
        </span>
        <span className="text-xs text-gray-400 ml-2">{state}</span>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#FF7300] group-hover:translate-x-1 transition-all" />
    </Link>
  ),
);

/* ═══════════════ MAIN COMPONENT ═══════════════ */

const PTLLocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = getLocationBySlug(slug || "");

  const [showAllDelivery, setShowAllDelivery] = useState(false);
  const [showAllPickup, setShowAllPickup] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-80px" });
  const processInView = useInView(processRef, { once: true, margin: "-80px" });
  const whyChooseInView = useInView(whyChooseRef, {
    once: true,
    margin: "-80px",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowAllDelivery(false);
    setShowAllPickup(false);
  }, [slug]);

  if (!location) {
    return (
      <PageLayout>
        <Helmet>
          <title>Location Not Found | BLI Part Load Services</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center">
          <h1 className="font-bold uppercase tracking-normal mb-3 sm:mb-4 text-[28px] leading-[34px] sm:text-[40px] sm:leading-[46px] lg:text-[52px] lg:leading-[60px] text-black">
            Location Not Found
          </h1>
          <p className="font-light mb-6 sm:mb-8 text-sm sm:text-base lg:text-[20px] lg:leading-[29px] text-[#1C1825]">
            The location you're looking for doesn't exist.
          </p>
          <Link
            to="/services/part-load"
            className="group inline-flex items-center gap-2.5 border border-[#1a1a1a] px-5 sm:px-6 py-2 sm:py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
          >
            <span className="font-medium text-xs sm:text-sm text-[#1a1a1a] group-hover:text-white transition-colors">
              Back to Part Load
            </span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7300] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </Link>
        </div>
      </PageLayout>
    );
  }

  const allDeliveryLocations = getDeliveryLocations().filter(
    (loc) => loc.slug !== location.slug,
  );
  const allPickupLocations = getPickupLocations().filter(
    (loc) => loc.slug !== location.slug,
  );
  const regionPages = getRegionPages();

  const initialCount = 5;
  const deliveryToShow = showAllDelivery
    ? allDeliveryLocations
    : allDeliveryLocations.slice(0, initialCount);
  const pickupToShow = showAllPickup
    ? allPickupLocations
    : allPickupLocations.slice(0, initialCount);

  const getRelatedRegion = () => {
    if (location.region === "Delhi NCR") return "delhi-ncr";
    if (
      location.region === "Punjab" ||
      location.state === "Punjab" ||
      location.state === "Haryana"
    )
      return "punjab-region";
    if (
      location.region === "East India" ||
      ["West Bengal", "Bihar", "Jharkhand", "Odisha"].includes(location.state)
    )
      return "east-india";
    if (
      location.region === "South India" ||
      [
        "Karnataka",
        "Tamil Nadu",
        "Telangana",
        "Andhra Pradesh",
        "Kerala",
      ].includes(location.state)
    )
      return "south-india";
    return null;
  };

  const relatedRegionSlug = getRelatedRegion();
  const relatedRegion = relatedRegionSlug
    ? getLocationBySlug(relatedRegionSlug)
    : null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Part Load Transport ${location.type === "pickup" ? "from" : "to"} ${location.name}`,
    description: location.metaDescription,
    provider: {
      "@type": "Organization",
      name: "BLI - Bansal Logistics of India",
      url: "https://blirapid.com",
    },
    areaServed: { "@type": "City", name: location.name },
  };

  const faqSchema =
    location.faqs && location.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: location.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const processSteps = [
    { step: "1", title: "Booking", desc: "Confirm order" },
    { step: "2", title: "Pickup", desc: "Factory/warehouse" },
    { step: "3", title: "Consolidate", desc: "Hub sorting" },
    { step: "4", title: "Dispatch", desc: "Line haul" },
    { step: "5", title: "Sort", desc: "Destination hub" },
    { step: "6", title: "Deliver", desc: "Door delivery" },
  ];

  const whyChooseItems = [
    {
      icon: Truck,
      title: "Strong Local Presence",
      desc: `Deep coverage across ${location.name} and nearby areas`,
    },
    {
      icon: Timer,
      title: "Fast Pickup & Placement",
      desc: "Quick response, minimal waiting time",
    },
    {
      icon: Zap,
      title: "Daily Dispatch Network",
      desc: "Fixed route planning for predictable movement",
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      desc: "Stay informed throughout the journey",
    },
    {
      icon: IndianRupee,
      title: "Optimized Cost Structure",
      desc: "Load consolidation reduces transport cost",
    },
    {
      icon: Shield,
      title: "Insured & Safe",
      desc: "Cargo insurance up to ₹50 lakhs available",
    },
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>{location.metaTitle}</title>
        <meta name="description" content={location.metaDescription} />
        <link
          rel="canonical"
          href={`https://blirapid.com/services/part-load-transport/${location.slug}`}
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      {/* ══════════ HERO ══════════ */}
      <section
        ref={heroRef}
        className="relative w-full min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] overflow-hidden bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12">
          {/* Breadcrumb */}
          <nav className="mb-4 sm:mb-5" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#113C6A] text-xs sm:text-sm font-semibold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="text-gray-300">
                <ChevronRight className="w-3 h-3" />
              </li>
              <li>
                <Link
                  to="/services/part-load"
                  className="text-gray-400 hover:text-[#113C6A] text-xs sm:text-sm font-semibold transition-colors"
                >
                  Part Load
                </Link>
              </li>
              <li className="text-gray-300">
                <ChevronRight className="w-3 h-3" />
              </li>
              <li>
                <span className="text-[#113C6A] text-xs sm:text-sm font-semibold">
                  {location.name}
                </span>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left – Content */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span
                  className={`inline-block px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider ${
                    location.type === "pickup"
                      ? "bg-green-600/10 text-green-700 border border-green-200"
                      : location.type === "delivery"
                        ? "bg-[#FF7300]/10 text-[#FF7300] border border-orange-200"
                        : "bg-[#113C6A]/10 text-[#113C6A] border border-blue-200"
                  }`}
                >
                  {location.type === "pickup"
                    ? "Pickup Hub"
                    : location.type === "delivery"
                      ? "Delivery Zone"
                      : "Region"}
                </span>
                <span className="text-xs sm:text-sm text-gray-400 font-light">
                  {location.region} · {location.state}
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-bold uppercase tracking-normal mb-3 sm:mb-4 text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[48px] lg:leading-[56px] text-black">
                <span className="block">Part Load Transport</span>
                <span className="block">
                  {location.type === "pickup"
                    ? "from"
                    : location.type === "delivery"
                      ? "to"
                      : "–"}{" "}
                  {location.name}
                </span>
              </h1>

              {/* Description */}
              <p className="font-light mb-6 sm:mb-8 text-sm sm:text-base lg:text-[20px] lg:leading-[29px] text-[#1C1825] max-w-2xl">
                {location.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mb-6 sm:mb-8">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 sm:gap-2.5 bg-[#FF7300] text-white px-5 sm:px-6 py-2 sm:py-2.5 hover:bg-[#e56800] transition-all duration-300"
                >
                  <span className="font-medium text-xs sm:text-sm">
                    Get Quote for {location.name}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+919687448434"
                  className="group inline-flex items-center gap-2 sm:gap-2.5 border border-[#1a1a1a] px-5 sm:px-6 py-2 sm:py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="font-medium text-xs sm:text-sm text-[#1a1a1a] group-hover:text-white transition-colors">
                    +91-968 744 8434
                  </span>
                </a>
                <a
                  href="https://wa.me/919687448434"
                  className="inline-flex items-center gap-2 sm:gap-2.5 bg-green-600 text-white px-5 sm:px-6 py-2 sm:py-2.5 hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="font-medium text-xs sm:text-sm">
                    WhatsApp
                  </span>
                </a>
              </div>

              {/* Key Highlights */}
              {location.keyHighlights && location.keyHighlights.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {location.keyHighlights.slice(0, 6).map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#113C6A]/5 border border-[#113C6A]/10 text-xs sm:text-sm text-[#113C6A] font-medium"
                    >
                      <CheckCircle className="w-3 h-3 text-[#FF7300]" />
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Right – Stats */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-px bg-gray-200">
                <StatsCard
                  icon={Package}
                  value={location.monthlyShipments || "5,000+"}
                  label="Monthly Shipments"
                />
                <StatsCard
                  icon={Warehouse}
                  value={`${location.warehousePartners || "20"}+`}
                  label="Partners"
                />
                <StatsCard
                  icon={Timer}
                  value={`${location.averageTransitDays || "2-4"} Days`}
                  label="Avg. Transit"
                />
                <StatsCard
                  icon={MapPin}
                  value={`${location.routes?.length || "15"}+`}
                  label="Active Routes"
                />
              </div>

              {/* Quick Info */}
              <div className="mt-px bg-[#113C6A] p-5 sm:p-6 text-white">
                <div className="space-y-3">
                  {[
                    { label: "Starting Rate", value: "₹12/kg" },
                    { label: "Min. Weight", value: "50 kg" },
                    { label: "Pickup Speed", value: "2-4 Hours" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-sm border-b border-white/10 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-white/70 font-light">
                        {item.label}
                      </span>
                      <span className="font-bold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════ MAIN CONTENT ══════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* ── Left Content ── */}
            <div className="lg:col-span-8 space-y-8 sm:space-y-10 lg:space-y-12">
              {/* About Section */}
              <motion.div
                ref={aboutRef}
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 border border-gray-200 p-5 sm:p-6 lg:p-8"
              >
                <h2 className="font-bold uppercase tracking-normal mb-4 sm:mb-5 text-[20px] leading-[26px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] text-black flex items-center gap-2 sm:gap-3">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF7300]" />
                  About PTL{" "}
                  {location.type === "pickup"
                    ? "from"
                    : location.type === "delivery"
                      ? "to"
                      : "in"}{" "}
                  {location.name}
                </h2>
                <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-gray-600 font-light">
                  {location.longDescription.split("\n\n").map((para, i) => (
                    <p key={i}>{para.trim()}</p>
                  ))}
                </div>
              </motion.div>

              {/* Industrial Areas */}
              {location.industrialAreas &&
                location.industrialAreas.length > 0 && (
                  <div className="bg-white border border-gray-200 p-5 sm:p-6 lg:p-8">
                    <h2 className="font-bold uppercase tracking-normal mb-4 sm:mb-5 text-[20px] leading-[26px] sm:text-[24px] sm:leading-[30px] text-black flex items-center gap-2 sm:gap-3">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF7300]" />
                      {location.type === "pickup"
                        ? "Pickup Zones"
                        : "Delivery Zones"}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {location.industrialAreas.map((area, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 text-sm"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-[#FF7300] flex-shrink-0" />
                          <span className="text-gray-700 font-light">
                            {area}
                          </span>
                        </div>
                      ))}
                    </div>
                    {location.type === "pickup" && (
                      <div className="mt-5 p-4 bg-green-50 border border-green-200 flex items-start gap-3">
                        <Zap className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-green-800 font-light leading-relaxed">
                          <strong className="font-bold">
                            Same-day pickup available
                          </strong>{" "}
                          — Vehicle placement within 2-4 hours for bookings
                          before 2 PM
                        </p>
                      </div>
                    )}
                  </div>
                )}

              {/* Routes Table */}
              {location.routes && location.routes.length > 0 && (
                <div className="bg-white border border-gray-200 p-5 sm:p-6 lg:p-8">
                  <h2 className="font-bold uppercase tracking-normal mb-4 sm:mb-5 text-[20px] leading-[26px] sm:text-[24px] sm:leading-[30px] text-black flex items-center gap-2 sm:gap-3">
                    <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF7300]" />
                    {location.type === "pickup"
                      ? `Routes from ${location.name}`
                      : `Routes to ${location.name}`}
                  </h2>
                  <div className="overflow-x-auto -mx-2 sm:-mx-4">
                    <table className="w-full text-sm min-w-[500px]">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          <th className="text-left py-3 px-3 font-bold text-[#113C6A] text-xs uppercase tracking-wider">
                            Route
                          </th>
                          <th className="text-left py-3 px-3 font-bold text-[#113C6A] text-xs uppercase tracking-wider">
                            Distance
                          </th>
                          <th className="text-left py-3 px-3 font-bold text-[#113C6A] text-xs uppercase tracking-wider">
                            Transit
                          </th>
                          <th className="text-left py-3 px-3 font-bold text-[#113C6A] text-xs uppercase tracking-wider">
                            Frequency
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {location.routes.map((route, i) => (
                          <tr
                            key={i}
                            className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                          >
                            <td className="py-3 px-3">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-[#113C6A] text-sm">
                                  {location.type === "pickup"
                                    ? location.name
                                    : route.to.replace("From ", "")}
                                </span>
                                <ArrowRight className="w-3 h-3 text-[#FF7300]" />
                                {route.slug ? (
                                  <Link
                                    to={`/services/part-load-transport/${route.slug}`}
                                    className="text-[#113C6A] hover:text-[#FF7300] font-semibold text-sm transition-colors"
                                  >
                                    {location.type === "pickup"
                                      ? route.to
                                      : location.name}
                                  </Link>
                                ) : (
                                  <span className="font-semibold text-gray-700 text-sm">
                                    {location.type === "pickup"
                                      ? route.to
                                      : location.name}
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="py-3 px-3 text-gray-500 font-light text-sm">
                              {route.distance || "—"}
                            </td>
                            <td className="py-3 px-3">
                              <span className="inline-flex items-center gap-1.5 text-gray-700 text-sm font-light">
                                <Clock className="w-3 h-3 text-[#FF7300]" />
                                {route.transitTime}
                              </span>
                            </td>
                            <td className="py-3 px-3">
                              <span
                                className={`px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                                  route.frequency === "Daily"
                                    ? "bg-green-600/10 text-green-700 border border-green-200"
                                    : "bg-gray-100 text-gray-600 border border-gray-200"
                                }`}
                              >
                                {route.frequency}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Industries */}
              {location.industries && location.industries.length > 0 && (
                <div className="bg-white border border-gray-200 p-5 sm:p-6 lg:p-8">
                  <h2 className="font-bold uppercase tracking-normal mb-4 sm:mb-5 text-[20px] leading-[26px] sm:text-[24px] sm:leading-[30px] text-black flex items-center gap-2 sm:gap-3">
                    <Factory className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF7300]" />
                    Industries We Serve
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {location.industries.map((industry, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-3 bg-[#FF7300]/5 border border-orange-200 text-sm"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#FF7300] flex-shrink-0" />
                        <span className="text-gray-700 font-light">
                          {industry}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Service Features */}
              {location.serviceFeatures &&
                location.serviceFeatures.length > 0 && (
                  <div className="bg-white border border-gray-200 p-5 sm:p-6 lg:p-8">
                    <h2 className="font-bold uppercase tracking-normal mb-4 sm:mb-5 text-[20px] leading-[26px] sm:text-[24px] sm:leading-[30px] text-black flex items-center gap-2 sm:gap-3">
                      <Box className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF7300]" />
                      Service Features
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {location.serviceFeatures.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 text-sm"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-[#113C6A] flex-shrink-0" />
                          <span className="text-gray-700 font-light">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* How PTL Works */}
              <motion.div
                ref={processRef}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 border border-gray-200 p-5 sm:p-6 lg:p-8"
              >
                <h2 className="font-bold uppercase tracking-normal mb-5 sm:mb-6 text-[20px] leading-[26px] sm:text-[24px] sm:leading-[30px] text-black flex items-center gap-2 sm:gap-3">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF7300]" />
                  How Our PTL Process Works
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-gray-200">
                  {processSteps.map((item, i) => (
                    <ProcessStep key={i} {...item} />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-500 font-light mt-5 text-center">
                  End-to-end visibility and coordination at every stage
                </p>
              </motion.div>

              {/* Why Choose BLI */}
              <motion.div
                ref={whyChooseRef}
                initial={{ opacity: 0, y: 30 }}
                animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-white border border-gray-200 p-5 sm:p-6 lg:p-8"
              >
                <h2 className="font-bold uppercase tracking-normal mb-5 sm:mb-6 text-[20px] leading-[26px] sm:text-[24px] sm:leading-[30px] text-black flex items-center gap-2 sm:gap-3">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF7300]" />
                  Why Choose BLI?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200">
                  {whyChooseItems.map((item, i) => (
                    <WhyChooseCard key={i} {...item} />
                  ))}
                </div>
              </motion.div>

              {/* FAQs */}
              {location.faqs && location.faqs.length > 0 && (
                <div className="bg-white border border-gray-200 p-5 sm:p-6 lg:p-8">
                  <h2 className="font-bold uppercase tracking-normal mb-4 sm:mb-5 text-[20px] leading-[26px] sm:text-[24px] sm:leading-[30px] text-black">
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible className="space-y-3">
                    {location.faqs.map((faq, i) => (
                      <AccordionItem
                        key={i}
                        value={`faq-${i}`}
                        className="border border-gray-200 px-4 sm:px-5"
                      >
                        <AccordionTrigger className="text-left text-[#113C6A] font-semibold hover:no-underline py-4 text-sm sm:text-base">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 font-light pb-4 text-sm leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}

              {/* Nearby Areas */}
              {location.nearbyAreas && location.nearbyAreas.length > 0 && (
                <div className="bg-white border border-gray-200 p-5 sm:p-6 lg:p-8">
                  <h2 className="font-bold uppercase tracking-normal mb-4 sm:mb-5 text-[20px] leading-[26px] sm:text-[24px] sm:leading-[30px] text-black flex items-center gap-2 sm:gap-3">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF7300]" />
                    Nearby Areas We Cover
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {location.nearbyAreas.map((area, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-700 font-light"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-5 sm:space-y-6">
                {/* Quote Card */}
                <div className="bg-white border border-gray-200 p-5 sm:p-6">
                  <h3 className="font-bold text-[#113C6A] mb-4 text-base sm:text-lg">
                    Get Instant PTL Quote
                  </h3>
                  <div className="space-y-3 mb-5 text-sm">
                    {[
                      { label: "Starting Rate", value: "₹12/kg" },
                      { label: "Min. Weight", value: "50 kg" },
                      { label: "Pickup Speed", value: "2-4 Hours" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between py-2 border-b border-gray-100 last:border-0"
                      >
                        <span className="text-gray-500 font-light">
                          {item.label}
                        </span>
                        <span className="font-bold text-[#113C6A]">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2.5">
                    <Link
                      to="/contact"
                      className="block w-full text-center py-2.5 bg-[#FF7300] text-white font-semibold hover:bg-[#e56800] transition-colors text-sm"
                    >
                      Request Quote
                    </Link>
                    <a
                      href="tel:+919687448434"
                      className="flex items-center justify-center w-full py-2.5 border border-gray-200 text-[#113C6A] hover:bg-gray-50 transition-colors text-sm font-semibold"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/919687448434"
                      className="flex items-center justify-center w-full py-2.5 bg-green-600 text-white hover:bg-green-700 transition-colors text-sm font-semibold"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </a>
                  </div>
                </div>

                {/* Network Navigation */}
                {location.type === "pickup" &&
                  allDeliveryLocations.length > 0 && (
                    <div className="bg-white border border-gray-200 p-5">
                      <h3 className="font-bold text-[#113C6A] mb-3 text-sm flex items-center gap-2">
                        <Truck className="w-4 h-4 text-[#FF7300]" />
                        We Deliver To
                      </h3>
                      <div className="space-y-px bg-gray-200">
                        {deliveryToShow.map((loc) => (
                          <NetworkLink
                            key={loc.slug}
                            to={`/services/part-load-transport/${loc.slug}`}
                            name={loc.name}
                            state={loc.state}
                          />
                        ))}
                      </div>
                      {allDeliveryLocations.length > initialCount && (
                        <button
                          onClick={() => setShowAllDelivery(!showAllDelivery)}
                          className="w-full mt-3 pt-3 border-t border-gray-200 flex items-center justify-center gap-1.5 text-xs text-[#FF7300] hover:text-[#e56800] font-semibold transition-colors"
                        >
                          {showAllDelivery ? (
                            <>
                              Show Less
                              <ChevronDown className="w-3.5 h-3.5 rotate-180" />
                            </>
                          ) : (
                            <>
                              View Full Network ({allDeliveryLocations.length})
                              <ChevronDown className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  )}

                {location.type === "delivery" &&
                  allPickupLocations.length > 0 && (
                    <div className="bg-white border border-gray-200 p-5">
                      <h3 className="font-bold text-[#113C6A] mb-3 text-sm flex items-center gap-2">
                        <Package className="w-4 h-4 text-green-600" />
                        We Pickup From
                      </h3>
                      <div className="space-y-px bg-gray-200">
                        {pickupToShow.map((loc) => (
                          <NetworkLink
                            key={loc.slug}
                            to={`/services/part-load-transport/${loc.slug}`}
                            name={loc.name}
                            state={loc.state}
                          />
                        ))}
                      </div>
                      {allPickupLocations.length > initialCount && (
                        <button
                          onClick={() => setShowAllPickup(!showAllPickup)}
                          className="w-full mt-3 pt-3 border-t border-gray-200 flex items-center justify-center gap-1.5 text-xs text-[#FF7300] hover:text-[#e56800] font-semibold transition-colors"
                        >
                          {showAllPickup ? (
                            <>
                              Show Less
                              <ChevronDown className="w-3.5 h-3.5 rotate-180" />
                            </>
                          ) : (
                            <>
                              View Full Network ({allPickupLocations.length})
                              <ChevronDown className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  )}

                {location.type === "region" && (
                  <>
                    {allPickupLocations.length > 0 && (
                      <div className="bg-white border border-gray-200 p-5">
                        <h3 className="font-bold text-[#113C6A] mb-3 text-sm flex items-center gap-2">
                          <Package className="w-4 h-4 text-green-600" />
                          Pickup Hubs
                        </h3>
                        <div className="space-y-px bg-gray-200">
                          {pickupToShow.map((loc) => (
                            <NetworkLink
                              key={loc.slug}
                              to={`/services/part-load-transport/${loc.slug}`}
                              name={loc.name}
                              state={loc.state}
                            />
                          ))}
                        </div>
                        {allPickupLocations.length > initialCount && (
                          <button
                            onClick={() => setShowAllPickup(!showAllPickup)}
                            className="w-full mt-3 pt-3 border-t border-gray-200 flex items-center justify-center gap-1.5 text-xs text-[#FF7300] hover:text-[#e56800] font-semibold transition-colors"
                          >
                            {showAllPickup ? (
                              <>
                                Show Less{" "}
                                <ChevronDown className="w-3.5 h-3.5 rotate-180" />
                              </>
                            ) : (
                              <>
                                View All ({allPickupLocations.length}){" "}
                                <ChevronDown className="w-3.5 h-3.5" />
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    )}
                    {allDeliveryLocations.length > 0 && (
                      <div className="bg-white border border-gray-200 p-5">
                        <h3 className="font-bold text-[#113C6A] mb-3 text-sm flex items-center gap-2">
                          <Truck className="w-4 h-4 text-[#FF7300]" />
                          Delivery Zones
                        </h3>
                        <div className="space-y-px bg-gray-200">
                          {deliveryToShow.map((loc) => (
                            <NetworkLink
                              key={loc.slug}
                              to={`/services/part-load-transport/${loc.slug}`}
                              name={loc.name}
                              state={loc.state}
                            />
                          ))}
                        </div>
                        {allDeliveryLocations.length > initialCount && (
                          <button
                            onClick={() => setShowAllDelivery(!showAllDelivery)}
                            className="w-full mt-3 pt-3 border-t border-gray-200 flex items-center justify-center gap-1.5 text-xs text-[#FF7300] hover:text-[#e56800] font-semibold transition-colors"
                          >
                            {showAllDelivery ? (
                              <>
                                Show Less{" "}
                                <ChevronDown className="w-3.5 h-3.5 rotate-180" />
                              </>
                            ) : (
                              <>
                                View All ({allDeliveryLocations.length}){" "}
                                <ChevronDown className="w-3.5 h-3.5" />
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    )}
                  </>
                )}

                {/* Related Region */}
                {location.type === "delivery" && relatedRegion && (
                  <Link
                    to={`/services/part-load-transport/${relatedRegion.slug}`}
                    className="group block bg-[#113C6A]/5 border border-[#113C6A]/10 p-5 hover:border-[#FF7300]/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-gray-500 font-light mb-1">
                          Explore Region
                        </div>
                        <div className="font-bold text-[#113C6A] group-hover:text-[#FF7300] transition-colors text-sm">
                          {relatedRegion.name}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#FF7300] group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                )}

                {/* Regions Quick Links */}
                {regionPages.length > 0 && location.type !== "region" && (
                  <div className="bg-white border border-gray-200 p-5">
                    <h3 className="font-bold text-[#113C6A] mb-3 text-sm flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#113C6A]" />
                      Explore Regions
                    </h3>
                    <div className="space-y-px bg-gray-200">
                      {regionPages.map((region) => (
                        <NetworkLink
                          key={region.slug}
                          to={`/services/part-load-transport/${region.slug}`}
                          name={region.name.replace(" Region", "")}
                          state=""
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Trust Stats */}
                <div className="bg-[#113C6A] p-5 text-white">
                  <h3 className="font-bold mb-4 text-sm sm:text-base">
                    Trusted by 1,000+ Businesses
                  </h3>
                  <div className="space-y-3">
                    {[
                      { value: "25+", label: "Years of Experience" },
                      { value: "500+", label: "Cities Served" },
                      { value: "98%", label: "On-Time Delivery" },
                      { value: "1L+", label: "Shipments / Month" },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-2 border-b border-white/10 last:border-0"
                      >
                        <span className="text-xl sm:text-2xl font-bold text-[#FF7300]">
                          {stat.value}
                        </span>
                        <span className="text-xs text-white/70 font-light">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white border border-gray-200 p-5">
                  <h3 className="font-bold text-[#113C6A] mb-3 text-sm">
                    Explore More
                  </h3>
                  <div className="space-y-1">
                    {[
                      {
                        to: "/services/part-load",
                        label: "Part Load Overview",
                      },
                      {
                        to: "/services/full-truckload",
                        label: "Full Truck Load",
                      },
                      { to: "/services/3pl", label: "3PL Solutions" },
                      { to: "/contact", label: "Get Custom Quote" },
                    ].map((link, i) => (
                      <Link
                        key={i}
                        to={link.to}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#FF7300] p-2 hover:bg-gray-50 transition-colors font-light"
                      >
                        <ArrowRight className="w-3 h-3" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ BOTTOM CTA ══════════ */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#113C6A]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="font-bold uppercase tracking-normal mb-3 sm:mb-4 text-[24px] leading-[30px] sm:text-[32px] sm:leading-[38px] lg:text-[40px] lg:leading-[48px] text-white">
            Ready to Ship{" "}
            {location.type === "pickup"
              ? "from"
              : location.type === "delivery"
                ? "to"
                : "via"}{" "}
            {location.name}?
          </h2>
          <p className="font-light mb-8 sm:mb-10 text-sm sm:text-base text-white/80">
            Get instant pricing and schedule your pickup today
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 sm:gap-2.5 bg-[#FF7300] text-white px-5 sm:px-6 py-2.5 sm:py-3 hover:bg-[#e56800] transition-all duration-300"
            >
              <span className="font-semibold text-sm">Get Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919687448434"
              className="inline-flex items-center gap-2 sm:gap-2.5 bg-white/10 border border-white/20 text-white px-5 sm:px-6 py-2.5 sm:py-3 hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold text-sm">Call Now</span>
            </a>
            <a
              href="https://wa.me/919687448434"
              className="inline-flex items-center gap-2 sm:gap-2.5 bg-green-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="font-semibold text-sm">WhatsApp</span>
            </a>
          </div>
          <p className="text-white/50 text-xs sm:text-sm font-light mt-6 sm:mt-8">
            BLI Rapid — Big Enough to Move the World. Small Enough to Care.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default memo(PTLLocationPage);
