import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, MessageCircle, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";

const FAQs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const faqCategories = [
    {
      title: "General",
      icon: "📋",
      count: 4,
      description: "Basic information about BLI Rapid services and operations",
      faqs: [
        {
          question: "What services does BLI Rapid offer?",
          answer:
            "BLI Rapid provides comprehensive logistics solutions including full truckload (FTL), part load (PTL), and 3PL services. We specialize in last-mile delivery, warehouse management, inventory optimization, and supply chain consulting across India.",
        },
        {
          question: "Which industries do you serve?",
          answer:
            "We serve diverse industries including FMCG, e-commerce, manufacturing, automotive, healthcare, pharmaceuticals, textiles, and food & beverage. Our solutions are customized to meet specific industry requirements.",
        },
        {
          question: "What geographic areas do you cover?",
          answer:
            "BLI Rapid operates pan-India with a network covering all major cities and tier-2/tier-3 towns. We have strategically located hubs in Delhi NCR, Mumbai, Bangalore, Chennai, Kolkata, Pune, and Ahmedabad.",
        },
        {
          question: "How do I get started with BLI Rapid?",
          answer:
            "Simply contact our sales team through the 'Get Quote' button, call our customer service, or fill out our online inquiry form. We'll assess your requirements and provide a customized logistics solution.",
        },
      ],
    },
    {
      title: "Shipments & Operations",
      icon: "🚛",
      count: 6,
      description:
        "Information about shipment booking, tracking, and operational procedures",
      faqs: [
        {
          question: "How do I request a shipment?",
          answer:
            "You can request shipments through our online portal, mobile app, customer service hotline (available 24/7), or by contacting your dedicated account manager. Provide pickup/delivery details, cargo specifications, and preferred delivery timeline.",
        },
        {
          question: "What tracking options are available?",
          answer:
            "We offer comprehensive tracking through GPS-enabled vehicles, real-time updates via SMS/email, online tracking portal, mobile app notifications, and dedicated customer service support for status updates.",
        },
        {
          question: "What are your delivery timeframes?",
          answer:
            "Delivery times vary by service type: Express (same-day/next-day within cities), Standard (2-3 days for metro-to-metro), Economy (3-5 days for long distances). Interstate deliveries typically take 2-7 days depending on origin-destination.",
        },
        {
          question: "Do you handle special cargo requirements?",
          answer:
            "Yes, we manage specialized cargo including fragile items, hazardous materials, temperature-controlled goods, oversized cargo, and high-value shipments with appropriate handling protocols and insurance coverage.",
        },
        {
          question: "What documentation is required for shipments?",
          answer:
            "Standard requirements include commercial invoice, packing list, transport challan, and relevant permits. For interstate movement, we handle e-way bills. Specialized cargo may require additional certifications.",
        },
        {
          question: "Can I modify or cancel a shipment after booking?",
          answer:
            "Modifications are possible before pickup, subject to availability and route planning. Cancellations are accepted with minimal charges if done before pickup. Post-pickup changes incur additional costs.",
        },
      ],
    },
    {
      title: "Billing & Invoicing",
      icon: "💰",
      count: 5,
      description: "Pricing, payment methods, and billing information",
      faqs: [
        {
          question: "How is pricing calculated?",
          answer:
            "Pricing considers multiple factors: distance, weight, dimensions (volumetric weight), service type (express/standard), fuel surcharge, toll charges, loading/unloading requirements, and any special handling needs.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept bank transfers (NEFT/RTGS), cheques, digital payments (UPI, net banking), credit terms for verified corporate clients, and cash on delivery for select services.",
        },
        {
          question: "When will I receive my invoice?",
          answer:
            "Invoices are generated immediately after delivery confirmation and sent via email within 24 hours. Corporate clients receive consolidated monthly invoices. All invoices include detailed service breakdowns.",
        },
        {
          question: "Do you offer credit terms?",
          answer:
            "Yes, we provide flexible credit terms (15-45 days) for established corporate clients after credit verification. Terms depend on business volume, payment history, and company credentials.",
        },
        {
          question: "How can I get a detailed cost breakdown?",
          answer:
            "Detailed quotations include base freight, fuel surcharge, toll charges, handling charges, insurance, taxes, and any additional services. Request detailed estimates through our sales team.",
        },
      ],
    },
    {
      title: "Support & Claims",
      icon: "🛡️",
      count: 5,
      description: "Customer support, insurance claims, and issue resolution",
      faqs: [
        {
          question: "How do I file a claim for damaged goods?",
          answer:
            "Report damage immediately upon delivery, document with photographs, fill out our claim form within 24 hours, and submit supporting documents. Our claims team will investigate and process compensation as per policy.",
        },
        {
          question: "What is your insurance coverage?",
          answer:
            "We provide comprehensive transit insurance covering loss, damage, and theft. Coverage includes full cargo value replacement, subject to policy terms. Premium insurance options available for high-value goods.",
        },
        {
          question: "How quickly are claims processed?",
          answer:
            "Standard claims are processed within 15-30 days after documentation submission. Complex cases may take longer. We provide regular updates throughout the claims process.",
        },
        {
          question: "What if my shipment is delayed?",
          answer:
            "Delays are proactively communicated with reasons and revised ETAs. We offer compensation for delays caused by our operations as per service level agreements. Real-time updates keep you informed.",
        },
        {
          question: "How can I provide feedback?",
          answer:
            "Share feedback through our website, mobile app, customer service helpline, or email. We value your input for continuous service improvement and respond to all feedback within 48 hours.",
        },
      ],
    },
  ];

  const popularQuestions = [
    "How do I track my shipment?",
    "What are your delivery charges?",
    "Do you provide insurance coverage?",
    "How do I get a quote?",
    "What areas do you serve?",
    "How do I file a complaint?",
  ];

  const quickLinks = [
    { label: "Track Shipment", href: "/track-shipment" },
    { label: "Get Quote", href: "/contact" },
    { label: "File a Claim", href: "/resources/claims" },
    { label: "Service Areas", href: "/services" },
  ];

  // Filter FAQs based on search query
  const filteredFAQs = faqCategories
    .map((category) => {
      const filteredQuestions = category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      );

      return {
        ...category,
        faqs: filteredQuestions,
        count: filteredQuestions.length,
      };
    })
    .filter((category) => category.count > 0);

  const scrollToCategory = (categoryTitle: string) => {
    setActiveCategory(categoryTitle);
    const element = document.getElementById(
      categoryTitle.toLowerCase().replace(/\s+/g, "-"),
    );
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Generate all FAQs for structured data
  const allFAQs = faqCategories.flatMap((category) => category.faqs);

  // Structured Data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "BLI Rapid Logistics - Frequently Asked Questions",
    description:
      "Find answers to common questions about BLI Rapid logistics services, shipping, tracking, billing, and customer support.",
    mainEntity: allFAQs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://blirapid.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources",
        item: "https://blirapid.com/resources",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "FAQs",
        item: "https://blirapid.com/resources/faqs",
      },
    ],
  };

  return (
    <PageLayout>
      <Helmet>
        <title>
          Logistics FAQs - Shipping, Tracking & Support Questions | BLI Rapid
        </title>
        <meta
          name="description"
          content="Get answers to frequently asked questions about BLI Rapid logistics services including shipping procedures, tracking options, billing, claims, and customer support."
        />
        <link rel="canonical" href="https://blirapid.com/resources/faqs/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* ── HERO ── */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] max-h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/services3.webp"
            alt="BLI FAQs"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/40 to-black/80 flex items-center">
          <div className="max-w-[1280px] w-full mx-auto px-5 sm:px-8 lg:px-12">
            <nav className="mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5">
                <li>
                  <Link
                    to="/"
                    className="text-white/90 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-white/70">
                  <ChevronRight className="w-3 h-3" />
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-white/90 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Resources
                  </Link>
                </li>
                <li className="text-white/70">
                  <ChevronRight className="w-3 h-3" />
                </li>
                <li>
                  <span className="text-white/80 text-xs sm:text-sm font-semibold">
                    FAQs
                  </span>
                </li>
              </ol>
            </nav>

            <h1
              className="font-bold text-white uppercase tracking-normal mb-3"
              style={{ fontSize: "52px", lineHeight: "60px" }}
            >
              <span className="block">Frequently Asked</span>
              <span className="block">Questions</span>
            </h1>
            <p
              className="font-light max-w-xl mt-5 text-white/90"
              style={{ fontSize: "20px", lineHeight: "29px" }}
            >
              Find quick answers to common questions about our logistics
              services and operations.
            </p>
          </div>
        </div>
      </div>

      {/* ── SEARCH BAR ── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-8">
          <div className="relative max-w-2xl mx-auto">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <Input
              placeholder="Search for answers..."
              className="pl-12 h-14 text-base border-gray-200 focus:border-[#113C6A] bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search frequently asked questions"
            />
          </div>
        </div>
      </div>

      {/* ── CATEGORY CARDS ── */}
      <section ref={sectionRef} className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <p
              className="font-semibold uppercase tracking-widest mb-3"
              style={{
                fontSize: "14px",
                lineHeight: "17px",
                color: "rgb(28, 24, 37)",
              }}
            >
              Browse By Topic
            </p>
            <h2
              className="font-bold uppercase tracking-normal"
              style={{
                fontSize: "52px",
                lineHeight: "60px",
                color: "rgb(0, 0, 0)",
              }}
            >
              Categories
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {faqCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => scrollToCategory(category.title)}
                className={`group bg-white p-6 sm:p-8 text-left transition-all duration-300 relative ${
                  activeCategory === category.title
                    ? "bg-[#113C6A]"
                    : "hover:bg-gray-50"
                }`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] transition-transform duration-500 origin-left ${
                    activeCategory === category.title
                      ? "bg-[#FF7300] scale-x-100"
                      : "bg-[#113C6A] scale-x-0 group-hover:scale-x-100"
                  }`}
                />

                <div className="text-3xl sm:text-4xl mb-4" aria-hidden="true">
                  {category.icon}
                </div>

                <h3
                  className={`text-base sm:text-lg font-bold mb-2 transition-colors ${
                    activeCategory === category.title
                      ? "text-white"
                      : "text-[#1a1a1a] group-hover:text-[#113C6A]"
                  }`}
                >
                  {category.title}
                </h3>

                <p
                  className={`text-sm font-light ${
                    activeCategory === category.title
                      ? "text-white/70"
                      : "text-gray-500"
                  }`}
                >
                  {category.count} questions
                </p>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* FAQ Content */}
            <main className="flex-1">
              {filteredFAQs.length > 0 ? (
                <div className="space-y-16">
                  {filteredFAQs.map((category, categoryIndex) => (
                    <div
                      key={categoryIndex}
                      id={category.title.toLowerCase().replace(/\s+/g, "-")}
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <span className="text-3xl" aria-hidden="true">
                          {category.icon}
                        </span>
                        <div>
                          <h2
                            className="font-bold uppercase tracking-normal"
                            style={{
                              fontSize: "32px",
                              lineHeight: "38px",
                              color: "rgb(0, 0, 0)",
                            }}
                          >
                            {category.title}
                          </h2>
                          <p className="text-sm text-gray-400 mt-1">
                            {category.count} questions
                          </p>
                        </div>
                      </div>

                      <div>
                        {category.faqs.map((faq, faqIndex) => (
                          <FAQItem
                            key={faqIndex}
                            faq={faq}
                            index={faqIndex}
                            defaultOpen={faqIndex === 0 && categoryIndex === 0}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gray-50 border border-gray-200">
                  <p className="text-gray-500 mb-6">
                    No questions match your search criteria.
                  </p>
                  <button
                    className="group inline-flex items-center gap-2.5 border border-[#1a1a1a] px-6 py-2.5 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                    onClick={() => setSearchQuery("")}
                  >
                    <span className="font-medium text-sm">Clear Search</span>
                  </button>
                </div>
              )}
            </main>

            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Popular Questions */}
                <div className="bg-white border border-gray-200 p-6">
                  <h3 className="font-bold text-[#1a1a1a] text-lg mb-4">
                    Popular Questions
                  </h3>
                  <ul className="space-y-0">
                    {popularQuestions.map((question, index) => (
                      <li
                        key={index}
                        className="border-b border-gray-100 last:border-b-0"
                      >
                        <button
                          className="w-full text-left py-3 text-sm text-gray-600 hover:text-[#113C6A] transition-colors"
                          onClick={() => setSearchQuery(question)}
                        >
                          {question}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Support */}
                <div className="bg-[#113C6A] p-6">
                  <div className="text-center">
                    <MessageCircle
                      className="h-12 w-12 mx-auto mb-4 text-white/80"
                      aria-hidden="true"
                    />
                    <h3 className="font-bold text-white text-lg mb-2">
                      Still Need Help?
                    </h3>
                    <p className="text-sm text-white/70 mb-6 font-light">
                      Can't find what you're looking for? Our support team is
                      here to help.
                    </p>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center gap-2.5 w-full border border-white/40 px-6 py-2.5 hover:bg-white hover:text-[#113C6A] text-white transition-all duration-300"
                    >
                      <span className="font-medium text-sm">
                        Contact Support
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white border border-gray-200 p-6">
                  <h3 className="font-bold text-[#1a1a1a] text-lg mb-4">
                    Quick Links
                  </h3>
                  <ul className="space-y-0">
                    {quickLinks.map((link, index) => (
                      <li
                        key={index}
                        className="border-b border-gray-100 last:border-b-0"
                      >
                        <Link
                          to={link.href}
                          className="flex items-center justify-between py-3 text-sm text-gray-600 hover:text-[#113C6A] transition-colors group"
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      {/* ── CTA SECTION ── */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#113C6A]">
        <div className="max-w-[1280px] mx-auto text-center">
          <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs text-[#1C1825]">
            Need More Help?
          </p>
          <h2 className="font-bold uppercase tracking-normal mb-3 text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
            <span className="block">Didn't Find</span>
            <span className="block">Your Answer?</span>
          </h2>
          <p className="font-light text-[#1C1825] mb-8 text-sm sm:text-base md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[27px] max-w-2xl mx-auto">
            Our customer support team is available 24/7 to assist you with any
            questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#FF7300] text-white hover:bg-[#e56800] transition-all"
            >
              <span className="font-medium">Contact Support</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#F8FFFF] text-[#F8FFFF] hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all"
            >
              <span className="font-medium">Live Chat</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

/* ── FAQ Item Component ── */
const FAQItem = ({
  faq,
  index,
  defaultOpen = false,
}: {
  faq: { question: string; answer: string };
  index: number;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full flex items-start justify-between gap-8 py-7 pr-4 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h3
          className="text-base sm:text-lg font-semibold leading-snug max-w-3xl transition-colors"
          style={{ color: open ? "#113C6A" : "#1C1825" }}
        >
          {faq.question}
        </h3>
        <span
          className={`flex-shrink-0 mt-1 transition-transform duration-500 ${
            open ? "rotate-180" : ""
          }`}
        >
          <svg viewBox="0 0 48 48" width="20" height="20" fill="none">
            <path
              d="M4 16.2C4 15.97 4.08 15.74 4.24 15.55C4.6 15.13 5.23 15.09 5.65 15.45L24.04 31.32C24.18 31.44 24.44 31.43 24.57 31.31L42.31 14.87C42.72 14.49 43.35 14.52 43.72 14.92C44.09 15.32 44.07 15.96 43.67 16.33L25.94 32.77C25.06 33.59 23.65 33.61 22.74 32.83L4.35 16.96C4.12 16.76 4 16.48 4 16.2Z"
              fill={open ? "#113C6A" : "#9ca3af"}
              stroke={open ? "#113C6A" : "#9ca3af"}
              strokeWidth="2"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100 pb-7" : "max-h-0 opacity-0"
        }`}
      >
        <p
          className="font-light max-w-3xl"
          style={{
            fontSize: "20px",
            lineHeight: "29px",
            color: "rgb(28, 24, 37)",
          }}
        >
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

export default FAQs;
