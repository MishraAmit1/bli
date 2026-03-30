// src/components/PTLLocationPage.tsx
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
  Headphones,
  IndianRupee,
  Timer,
  Box,
  Warehouse,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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

const PTLLocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = getLocationBySlug(slug || "");

  // State for expand/collapse
  const [showAllDelivery, setShowAllDelivery] = useState(false);
  const [showAllPickup, setShowAllPickup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset expand state when location changes
    setShowAllDelivery(false);
    setShowAllPickup(false);
  }, [slug]);

  if (!location) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#113C6A] mb-4">
              Location Not Found
            </h1>
            <Link
              to="/services/part-load"
              className="text-[#FF7300] hover:underline"
            >
              ← Back to Part Load Services
            </Link>
          </div>
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

  // Initial items to show
  const initialCount = 5;
  const deliveryToShow = showAllDelivery
    ? allDeliveryLocations
    : allDeliveryLocations.slice(0, initialCount);
  const pickupToShow = showAllPickup
    ? allPickupLocations
    : allPickupLocations.slice(0, initialCount);

  // Find related region for current location
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

      {/* ─── Hero Section ─── */}
      <section className="pt-6 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-[#113C6A] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              to="/services/part-load"
              className="hover:text-[#113C6A] transition-colors"
            >
              Part Load
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#113C6A] font-medium">{location.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left – Text */}
            <div className="lg:col-span-3">
              {/* Badge row */}
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`px-2.5 py-1 rounded text-xs font-semibold tracking-wide uppercase ${
                    location.type === "pickup"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : location.type === "delivery"
                        ? "bg-orange-50 text-[#FF7300] border border-orange-200"
                        : "bg-blue-50 text-[#113C6A] border border-blue-200"
                  }`}
                >
                  {location.type === "pickup"
                    ? "Pickup Hub"
                    : location.type === "delivery"
                      ? "Delivery Zone"
                      : "Region"}
                </span>
                <span className="text-sm text-gray-500">
                  {location.region} · {location.state}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-[#113C6A] tracking-wide font-inter">
                Part Load Transport{" "}
                {location.type === "pickup"
                  ? "from"
                  : location.type === "delivery"
                    ? "to"
                    : "–"}{" "}
                {location.name}
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
                {location.description}
              </p>

              {/* CTA row */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-5 py-2.5 bg-[#FF7300] text-white font-semibold rounded hover:bg-[#e56800] transition-colors text-sm group"
                >
                  Get Quote for {location.name}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+919687448434"
                  className="inline-flex items-center px-5 py-2.5 border border-[#113C6A]/20 text-[#113C6A] rounded hover:bg-[#F8FFFF] transition-colors text-sm font-medium"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  +91-968 744 8434
                </a>
                <a
                  href="https://wa.me/919687448434"
                  className="inline-flex items-center px-5 py-2.5 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  WhatsApp
                </a>
              </div>

              {/* Key highlights as inline pills */}
              {location.keyHighlights && location.keyHighlights.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {location.keyHighlights.slice(0, 6).map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F8FFFF] border border-[#113C6A]/10 rounded-full text-xs text-[#113C6A] font-medium"
                    >
                      <CheckCircle className="w-3 h-3 text-[#FF7300]" />
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Right – Stats grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    icon: Package,
                    value: location.monthlyShipments || "5,000+",
                    label: "Monthly Shipments",
                  },
                  {
                    icon: Warehouse,
                    value: `${location.warehousePartners || "20"}+`,
                    label: "Partners",
                  },
                  {
                    icon: Timer,
                    value: `${location.averageTransitDays || "2-4"} Days`,
                    label: "Avg. Transit",
                  },
                  {
                    icon: MapPin,
                    value: `${location.routes?.length || "15"}+`,
                    label: "Active Routes",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-[#F8FFFF] border border-[#113C6A]/10 rounded-lg p-4"
                  >
                    <stat.icon className="w-5 h-5 text-[#FF7300] mb-2" />
                    <div className="text-xl font-bold text-[#113C6A]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Quick info box */}
              <div className="mt-3 bg-[#113C6A] rounded-lg p-4 text-white">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-white/70">Starting Rate</span>
                  <span className="font-bold">₹12/kg</span>
                </div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-white/70">Min. Weight</span>
                  <span className="font-bold">50 kg</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">Pickup Speed</span>
                  <span className="font-bold">2-4 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ─── Left Content ─── */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-[#113C6A] mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#FF7300]" />
                  About PTL{" "}
                  {location.type === "pickup"
                    ? "from"
                    : location.type === "delivery"
                      ? "to"
                      : "in"}{" "}
                  {location.name}
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-4 text-[15px]">
                  {location.longDescription.split("\n\n").map((para, i) => (
                    <p key={i}>{para.trim()}</p>
                  ))}
                </div>
              </div>

              {/* Industrial / Pickup / Delivery Areas */}
              {location.industrialAreas &&
                location.industrialAreas.length > 0 && (
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-[#113C6A] mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#FF7300]" />
                      {location.type === "pickup"
                        ? "Pickup Zones & Industrial Areas"
                        : "Delivery Zones & Industrial Areas"}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {location.industrialAreas.map((area, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-2.5 bg-gray-50 rounded text-sm border border-gray-100"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-[#FF7300] flex-shrink-0" />
                          <span className="text-gray-700">{area}</span>
                        </div>
                      ))}
                    </div>
                    {location.type === "pickup" && (
                      <div className="mt-4 p-3 bg-green-50 border border-green-100 rounded flex items-start gap-2">
                        <Zap className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-green-800">
                          <strong>Same-day pickup available</strong> — Vehicle
                          placement within 2-4 hours for bookings before 2 PM
                        </p>
                      </div>
                    )}
                  </div>
                )}

              {/* Routes Table */}
              {location.routes && location.routes.length > 0 && (
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold text-[#113C6A] mb-4 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-[#FF7300]" />
                    {location.type === "pickup"
                      ? `PTL Routes from ${location.name}`
                      : `PTL Routes to ${location.name}`}
                  </h2>
                  <div className="overflow-x-auto -mx-2">
                    <table className="w-full text-sm min-w-[500px]">
                      <thead>
                        <tr className="border-b-2 border-[#113C6A]/10">
                          <th className="text-left py-3 px-3 font-semibold text-[#113C6A]">
                            Route
                          </th>
                          <th className="text-left py-3 px-3 font-semibold text-[#113C6A]">
                            Distance
                          </th>
                          <th className="text-left py-3 px-3 font-semibold text-[#113C6A]">
                            Transit
                          </th>
                          <th className="text-left py-3 px-3 font-semibold text-[#113C6A]">
                            Frequency
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {location.routes.map((route, i) => (
                          <tr
                            key={i}
                            className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                          >
                            <td className="py-3 px-3">
                              <div className="flex items-center gap-1.5">
                                <span className="font-medium text-[#113C6A]">
                                  {location.type === "pickup"
                                    ? location.name
                                    : route.to.replace("From ", "")}
                                </span>
                                <ArrowRight className="w-3 h-3 text-[#FF7300]" />
                                {route.slug ? (
                                  <Link
                                    to={`/services/part-load-transport/${route.slug}`}
                                    className="text-[#113C6A] hover:text-[#FF7300] font-medium transition-colors"
                                  >
                                    {location.type === "pickup"
                                      ? route.to
                                      : location.name}
                                  </Link>
                                ) : (
                                  <span className="font-medium text-gray-700">
                                    {location.type === "pickup"
                                      ? route.to
                                      : location.name}
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="py-3 px-3 text-gray-500">
                              {route.distance || "—"}
                            </td>
                            <td className="py-3 px-3">
                              <span className="inline-flex items-center gap-1 text-gray-700">
                                <Clock className="w-3 h-3 text-[#FF7300]" />
                                {route.transitTime}
                              </span>
                            </td>
                            <td className="py-3 px-3">
                              <span
                                className={`px-2 py-0.5 rounded text-xs font-medium ${
                                  route.frequency === "Daily"
                                    ? "bg-green-50 text-green-700 border border-green-200"
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
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold text-[#113C6A] mb-4 flex items-center gap-2">
                    <Factory className="w-5 h-5 text-[#FF7300]" />
                    Industries We Serve in {location.name}
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {location.industries.map((industry, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 bg-orange-50/50 border border-orange-100 rounded text-sm"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#FF7300] flex-shrink-0" />
                        <span className="text-gray-700">{industry}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Service Features */}
              {location.serviceFeatures &&
                location.serviceFeatures.length > 0 && (
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-[#113C6A] mb-4 flex items-center gap-2">
                      <Box className="w-5 h-5 text-[#FF7300]" />
                      Service Features
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {location.serviceFeatures.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-3 bg-gray-50 rounded text-sm border border-gray-100"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-[#113C6A] flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* How PTL Works */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-[#113C6A] mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#FF7300]" />
                  How Our PTL Process Works
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {[
                    { step: "1", title: "Booking", desc: "Confirm order" },
                    { step: "2", title: "Pickup", desc: "Factory/warehouse" },
                    { step: "3", title: "Consolidate", desc: "Hub sorting" },
                    { step: "4", title: "Dispatch", desc: "Line haul" },
                    { step: "5", title: "Sort", desc: "Destination hub" },
                    { step: "6", title: "Deliver", desc: "Door delivery" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="text-center p-3 bg-gray-50 rounded border border-gray-100"
                    >
                      <div className="w-8 h-8 bg-[#FF7300] text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                        {item.step}
                      </div>
                      <div className="text-sm font-semibold text-[#113C6A]">
                        {item.title}
                      </div>
                      <div className="text-xs text-gray-500">{item.desc}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  End-to-end visibility and coordination at every stage
                </p>
              </div>

              {/* Why Choose BLI */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-[#113C6A] mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#FF7300]" />
                  Why Choose BLI for PTL in {location.name}?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
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
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded border border-gray-100"
                    >
                      <div className="w-9 h-9 bg-[#113C6A] rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#113C6A] text-sm">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {location.faqs && location.faqs.length > 0 && (
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold text-[#113C6A] mb-4">
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible className="space-y-2">
                    {location.faqs.map((faq, i) => (
                      <AccordionItem
                        key={i}
                        value={`faq-${i}`}
                        className="border border-gray-100 rounded px-4"
                      >
                        <AccordionTrigger className="text-left text-[#113C6A] font-medium hover:no-underline py-4 text-sm">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pb-4 text-sm">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}

              {/* Nearby Areas */}
              {location.nearbyAreas && location.nearbyAreas.length > 0 && (
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold text-[#113C6A] mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#FF7300]" />
                    Nearby Areas We Cover
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {location.nearbyAreas.map((area, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-sm text-gray-700"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ─── Sidebar ─── */}
            <div className="space-y-6">
              {/* Sticky wrapper */}
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Quote Card */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-[#113C6A] mb-4">
                    Get Instant PTL Quote
                  </h3>
                  <div className="space-y-2.5 mb-5 text-sm">
                    <div className="flex justify-between py-2 border-b border-gray-50">
                      <span className="text-gray-500">Starting Rate</span>
                      <span className="font-bold text-[#113C6A]">₹12/kg</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-50">
                      <span className="text-gray-500">Min. Weight</span>
                      <span className="font-bold text-[#113C6A]">50 kg</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-500">Pickup Speed</span>
                      <span className="font-bold text-[#113C6A]">
                        2-4 Hours
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Link
                      to="/contact"
                      className="block w-full text-center py-2.5 bg-[#FF7300] text-white font-semibold rounded hover:bg-[#e56800] transition-colors text-sm"
                    >
                      Request Quote
                    </Link>
                    <a
                      href="tel:+919687448434"
                      className="flex items-center justify-center w-full py-2.5 border border-gray-200 text-[#113C6A] rounded hover:bg-gray-50 transition-colors text-sm font-medium"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/919687448434"
                      className="flex items-center justify-center w-full py-2.5 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </a>
                  </div>
                </div>

                {/* ─── Contextual Network Navigation ─── */}

                {/* Pickup pages → Show "We Deliver To" with expand */}
                {location.type === "pickup" &&
                  allDeliveryLocations.length > 0 && (
                    <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                      <h3 className="font-bold text-[#113C6A] mb-3 text-sm flex items-center gap-2">
                        <Truck className="w-4 h-4 text-[#FF7300]" />
                        We Deliver To
                      </h3>
                      <div className="space-y-0.5">
                        {deliveryToShow.map((loc) => (
                          <Link
                            key={loc.slug}
                            to={`/services/part-load-transport/${loc.slug}`}
                            className="flex items-center justify-between p-2 rounded hover:bg-gray-50 text-sm group transition-colors"
                          >
                            <div>
                              <span className="text-gray-700 group-hover:text-[#113C6A] font-medium">
                                {loc.name}
                              </span>
                              <span className="text-gray-400 text-xs ml-1.5">
                                {loc.state}
                              </span>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#FF7300]" />
                          </Link>
                        ))}
                      </div>

                      {/* Expand/Collapse Button */}
                      {allDeliveryLocations.length > initialCount && (
                        <button
                          onClick={() => setShowAllDelivery(!showAllDelivery)}
                          className="w-full mt-3 pt-3 border-t border-gray-100 flex items-center justify-center gap-1.5 text-xs text-[#FF7300] hover:text-[#e56800] font-medium transition-colors"
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

                {/* Delivery pages → Show "We Pickup From" with expand */}
                {location.type === "delivery" &&
                  allPickupLocations.length > 0 && (
                    <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                      <h3 className="font-bold text-[#113C6A] mb-3 text-sm flex items-center gap-2">
                        <Package className="w-4 h-4 text-green-600" />
                        We Pickup From
                      </h3>
                      <div className="space-y-0.5">
                        {pickupToShow.map((loc) => (
                          <Link
                            key={loc.slug}
                            to={`/services/part-load-transport/${loc.slug}`}
                            className="flex items-center justify-between p-2 rounded hover:bg-gray-50 text-sm group transition-colors"
                          >
                            <div>
                              <span className="text-gray-700 group-hover:text-[#113C6A] font-medium">
                                {loc.name}
                              </span>
                              <span className="text-gray-400 text-xs ml-1.5">
                                {loc.state}
                              </span>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#FF7300]" />
                          </Link>
                        ))}
                      </div>

                      {/* Expand/Collapse Button */}
                      {allPickupLocations.length > initialCount && (
                        <button
                          onClick={() => setShowAllPickup(!showAllPickup)}
                          className="w-full mt-3 pt-3 border-t border-gray-100 flex items-center justify-center gap-1.5 text-xs text-[#FF7300] hover:text-[#e56800] font-medium transition-colors"
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

                {/* Region pages → Show both with expand */}
                {location.type === "region" && (
                  <>
                    {allPickupLocations.length > 0 && (
                      <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                        <h3 className="font-bold text-[#113C6A] mb-3 text-sm flex items-center gap-2">
                          <Package className="w-4 h-4 text-green-600" />
                          Pickup Hubs
                        </h3>
                        <div className="space-y-0.5">
                          {pickupToShow.map((loc) => (
                            <Link
                              key={loc.slug}
                              to={`/services/part-load-transport/${loc.slug}`}
                              className="flex items-center justify-between p-2 rounded hover:bg-gray-50 text-sm group transition-colors"
                            >
                              <span className="text-gray-700 group-hover:text-[#113C6A] font-medium">
                                {loc.name}
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#FF7300]" />
                            </Link>
                          ))}
                        </div>
                        {allPickupLocations.length > initialCount && (
                          <button
                            onClick={() => setShowAllPickup(!showAllPickup)}
                            className="w-full mt-3 pt-3 border-t border-gray-100 flex items-center justify-center gap-1.5 text-xs text-[#FF7300] hover:text-[#e56800] font-medium transition-colors"
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
                      <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                        <h3 className="font-bold text-[#113C6A] mb-3 text-sm flex items-center gap-2">
                          <Truck className="w-4 h-4 text-[#FF7300]" />
                          Delivery Zones
                        </h3>
                        <div className="space-y-0.5">
                          {deliveryToShow.map((loc) => (
                            <Link
                              key={loc.slug}
                              to={`/services/part-load-transport/${loc.slug}`}
                              className="flex items-center justify-between p-2 rounded hover:bg-gray-50 text-sm group transition-colors"
                            >
                              <span className="text-gray-700 group-hover:text-[#113C6A] font-medium">
                                {loc.name}
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#FF7300]" />
                            </Link>
                          ))}
                        </div>
                        {allDeliveryLocations.length > initialCount && (
                          <button
                            onClick={() => setShowAllDelivery(!showAllDelivery)}
                            className="w-full mt-3 pt-3 border-t border-gray-100 flex items-center justify-center gap-1.5 text-xs text-[#FF7300] hover:text-[#e56800] font-medium transition-colors"
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

                {/* Related Region Link — for delivery hubs */}
                {location.type === "delivery" && relatedRegion && (
                  <Link
                    to={`/services/part-load-transport/${relatedRegion.slug}`}
                    className="block bg-[#F8FFFF] rounded-lg p-4 border border-[#113C6A]/10 hover:border-[#FF7300]/30 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">
                          Explore Region
                        </div>
                        <div className="font-semibold text-[#113C6A] group-hover:text-[#FF7300] transition-colors">
                          {relatedRegion.name}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#FF7300] group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                )}

                {/* Regions Quick Links — show on all location pages */}
                {regionPages.length > 0 && location.type !== "region" && (
                  <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-[#113C6A] mb-3 text-sm flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#113C6A]" />
                      Explore Regions
                    </h3>
                    <div className="space-y-0.5">
                      {regionPages.map((region) => (
                        <Link
                          key={region.slug}
                          to={`/services/part-load-transport/${region.slug}`}
                          className="flex items-center justify-between p-2 rounded hover:bg-gray-50 text-sm group transition-colors"
                        >
                          <span className="text-gray-700 group-hover:text-[#113C6A] font-medium">
                            {region.name.replace(" Region", "")}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#FF7300]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Trust bar */}
                <div className="bg-[#113C6A] rounded-lg p-5 text-white">
                  <h3 className="font-bold mb-3 text-sm">
                    Trusted by 1,000+ Businesses
                  </h3>
                  <div className="space-y-2.5">
                    {[
                      { value: "25+", label: "Years of Experience" },
                      { value: "500+", label: "Cities Served" },
                      { value: "98%", label: "On-Time Delivery" },
                      { value: "1L+", label: "Shipments / Month" },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-1.5 border-b border-white/10 last:border-0"
                      >
                        <span className="text-xl font-bold text-[#FF7300]">
                          {stat.value}
                        </span>
                        <span className="text-xs text-white/60">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick links */}
                <div className="bg-white rounded-lg p-5 border border-gray-100">
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
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#FF7300] p-2 rounded hover:bg-gray-50 transition-colors"
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

      {/* ─── Bottom CTA ─── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#113C6A]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Ship{" "}
            {location.type === "pickup"
              ? "from"
              : location.type === "delivery"
                ? "to"
                : "via"}{" "}
            {location.name}?
          </h2>
          <p className="text-white/70 mb-8">
            Get instant pricing and schedule your pickup today
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#FF7300] text-white font-semibold rounded hover:bg-[#e56800] transition-colors group"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919687448434"
              className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 text-white rounded hover:bg-white/20 transition-colors"
            >
              <Phone className="mr-2 w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/919687448434"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="mr-2 w-4 h-4" />
              WhatsApp
            </a>
          </div>
          <p className="text-white/40 text-sm mt-6">
            BLI Rapid — Big Enough to Move the World. Small Enough to Care.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default PTLLocationPage;
