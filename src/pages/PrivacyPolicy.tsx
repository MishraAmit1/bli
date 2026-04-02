import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Mail,
  Globe,
  FileText,
  AlertCircle,
  ChevronRight,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "introduction",
      icon: FileText,
      title: "1. Introduction",
      content: (
        <p className="text-gray-600 font-light leading-relaxed">
          BLI - Bansal Logistics of India ("we," "our," or "us") is committed to
          protecting your privacy and personal information. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you use our logistics services or visit our website at
          blirapid.com.
        </p>
      ),
    },
    {
      id: "information-collect",
      icon: Database,
      title: "2. Information We Collect",
      content: (
        <>
          <p className="text-gray-600 font-light leading-relaxed mb-4">
            We collect information to provide better logistics services to all
            our customers. The types of information we collect include:
          </p>
          <ul className="space-y-3">
            {[
              {
                label: "Personal Information",
                desc: "Name, email address, phone number, company name, GST number",
              },
              {
                label: "Shipping Information",
                desc: "Pickup and delivery addresses, shipment details, tracking information",
              },
              {
                label: "Business Information",
                desc: "Company details, billing information, transaction history",
              },
              {
                label: "Technical Information",
                desc: "IP address, browser type, device information, usage data",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#113C6A] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-600 font-light">
                  <strong className="font-semibold text-[#1a1a1a]">
                    {item.label}:
                  </strong>{" "}
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      id: "how-we-use",
      icon: Eye,
      title: "3. How We Use Your Information",
      content: (
        <>
          <p className="text-gray-600 font-light leading-relaxed mb-4">
            We use the collected information for various purposes to provide and
            improve our logistics services:
          </p>
          <ul className="space-y-2">
            {[
              "Process and manage your shipments and deliveries",
              "Provide real-time tracking and updates",
              "Generate invoices and process payments",
              "Communicate about service updates and offers",
              "Improve our logistics network and services",
              "Comply with legal and regulatory requirements",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#113C6A] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-600 font-light">{item}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      id: "information-sharing",
      icon: Globe,
      title: "4. Information Sharing and Disclosure",
      content: (
        <>
          <p className="text-gray-600 font-light leading-relaxed mb-4">
            We do not sell, trade, or rent your personal information. We may
            share your information only in the following circumstances:
          </p>
          <ul className="space-y-3">
            {[
              {
                label: "Service Partners",
                desc: "With our logistics partners for delivery execution",
              },
              {
                label: "Legal Requirements",
                desc: "When required by law or government authorities",
              },
              {
                label: "Business Transfers",
                desc: "In case of merger, acquisition, or asset sale",
              },
              {
                label: "With Consent",
                desc: "When you give us explicit permission to share",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#113C6A] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-600 font-light">
                  <strong className="font-semibold text-[#1a1a1a]">
                    {item.label}:
                  </strong>{" "}
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      id: "data-security",
      icon: Lock,
      title: "5. Data Security",
      content: (
        <>
          <p className="text-gray-600 font-light leading-relaxed mb-4">
            We implement industry-standard security measures to protect your
            personal information from unauthorized access, disclosure,
            alteration, and destruction. These measures include:
          </p>
          <ul className="space-y-2">
            {[
              "SSL encryption for data transmission",
              "Secure data storage with access controls",
              "Regular security audits and updates",
              "Employee training on data protection",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#113C6A] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-600 font-light">{item}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      id: "your-rights",
      icon: Shield,
      title: "6. Your Rights and Choices",
      content: (
        <>
          <p className="text-gray-600 font-light leading-relaxed mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="space-y-2">
            {[
              "Access and review your personal information",
              "Request correction of inaccurate information",
              "Request deletion of your information (subject to legal requirements)",
              "Opt-out of marketing communications",
              "Data portability (receive your data in a structured format)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#113C6A] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-600 font-light">{item}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      id: "cookies",
      icon: AlertCircle,
      title: "7. Cookies and Tracking Technologies",
      content: (
        <>
          <p className="text-gray-600 font-light leading-relaxed mb-4">
            We use cookies and similar tracking technologies to enhance your
            experience on our website. These help us:
          </p>
          <ul className="space-y-2">
            {[
              "Remember your preferences and settings",
              "Analyze website traffic and usage patterns",
              "Improve website functionality and user experience",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#113C6A] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-600 font-light">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 font-light leading-relaxed mt-4">
            You can control cookies through your browser settings. However,
            disabling cookies may affect certain features of our website.
          </p>
        </>
      ),
    },
    {
      id: "data-retention",
      icon: FileText,
      title: "8. Data Retention",
      content: (
        <>
          <p className="text-gray-600 font-light leading-relaxed mb-4">
            We retain your personal information for as long as necessary to:
          </p>
          <ul className="space-y-2">
            {[
              "Provide our logistics services",
              "Comply with legal obligations (GST records, invoices)",
              "Resolve disputes and enforce agreements",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#113C6A] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-600 font-light">{item}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      id: "changes",
      icon: AlertCircle,
      title: "9. Changes to Privacy Policy",
      content: (
        <>
          <p className="text-gray-600 font-light leading-relaxed mb-4">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will notify you
            of any material changes by:
          </p>
          <ul className="space-y-2">
            {[
              "Posting the updated policy on our website",
              "Sending email notifications to registered users",
              'Updating the "Last Updated" date',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#113C6A] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-600 font-light">{item}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>Privacy Policy | BLI - Bansal Logistics of India</title>
        <meta
          name="description"
          content="BLI Privacy Policy - Learn how we collect, use, and protect your personal information. Your privacy is our priority in logistics services across India."
        />
        <link rel="canonical" href="https://blirapid.com/privacy-policy/" />
      </Helmet>

      {/* ── HERO ── */}
      <div className="relative w-full h-[40vh] sm:h-[45vh] max-h-[400px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/services3.webp"
            alt="Privacy Policy"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/50 to-black/80 flex items-center">
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
                  <span className="text-white/80 text-xs sm:text-sm font-semibold">
                    Privacy Policy
                  </span>
                </li>
              </ol>
            </nav>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[#113C6A] flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h1
                className="font-bold text-white uppercase tracking-normal"
                style={{ fontSize: "48px", lineHeight: "56px" }}
              >
                Privacy Policy
              </h1>
            </div>
            <p
              className="font-light max-w-xl text-white/90"
              style={{ fontSize: "18px", lineHeight: "27px" }}
            >
              Your privacy is our priority. Learn how we protect your
              information.
            </p>
          </div>
        </div>
      </div>

      {/* ── LAST UPDATED STRIP ── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-4">
          <div className="flex items-center gap-2 text-sm">
            <AlertCircle className="w-4 h-4 text-[#113C6A]" />
            <span className="font-semibold text-[#1a1a1a]">Last updated:</span>
            <span className="text-gray-500">January 22, 2025</span>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="space-y-6">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="bg-white border border-gray-200 p-6 sm:p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#113C6A]/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-5 h-5 text-[#113C6A]" />
                  </div>
                  <h2
                    className="font-bold text-[#1a1a1a]"
                    style={{ fontSize: "22px", lineHeight: "28px" }}
                  >
                    {section.title}
                  </h2>
                </div>
                <div className="pl-14">{section.content}</div>
              </div>
            ))}

            {/* ── CONTACT SECTION ── */}
            <div className="bg-[#113C6A] p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h2
                  className="font-bold text-white"
                  style={{ fontSize: "22px", lineHeight: "28px" }}
                >
                  10. Contact Us
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-white/80 font-light leading-relaxed mb-6">
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or our data practices, please contact us:
                </p>

                <div className="bg-white/10 p-5 space-y-3">
                  <p className="text-white font-semibold">
                    BLI - Bansal Logistics of India
                  </p>
                  <div className="space-y-2">
                    <a
                      href="mailto:info@blirapid.com"
                      className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>info@blirapid.com</span>
                    </a>
                    <a
                      href="tel:+919687448434"
                      className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>+91-968 744 8434</span>
                    </a>
                    <div className="flex items-start gap-2 text-white/80">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>
                        206, Arihant Complex, Nr. Vishal Mega Mart, Vapi,
                        Gujarat - 396191
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── FOOTER NOTE ── */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} BLI - Bansal Logistics of India. All
              rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-1">GST: 24AGIPB0188Q1Z6</p>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#113C6A]">
        <div className="max-w-[1280px] mx-auto text-center">
          <p className="font-semibold uppercase tracking-widest mb-2 text-[11px] sm:text-xs text-[#1C1825]">
            Have Questions?
          </p>
          <h2 className="font-bold uppercase tracking-normal mb-3 text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px] text-black">
            <span className="block">We're Here</span>
            <span className="block">To Help</span>
          </h2>
          <p className="font-light text-[#1C1825] mb-8 text-sm sm:text-base md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[27px] max-w-2xl mx-auto">
            If you have any questions about our privacy practices or how we
            handle your data, our team is ready to assist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#1a1a1a] text-white hover:bg-[#333] transition-all"
            >
              <span className="font-medium">Contact Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#F8FFFF] text-[#F8FFFF] hover:bg-[#F8FFFF] hover:text-[#113C6A] transition-all"
            >
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
