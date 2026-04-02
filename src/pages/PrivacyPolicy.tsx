import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      {/* ── HEADER ── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-12">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-[#113C6A] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="text-gray-300">
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                <span className="text-[#113C6A] font-medium">
                  Privacy Policy
                </span>
              </li>
            </ol>
          </nav>

          <h1
            className="font-bold text-[#1a1a1a] mb-4"
            style={{ fontSize: "42px", lineHeight: "50px" }}
          >
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg font-light max-w-3xl">
            Please read this Privacy Policy carefully to understand how we
            collect, use, and protect your personal information.
          </p>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
          <div className="max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {/* Section 1 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-600 font-light leading-relaxed">
                  BLI - Bansal Logistics of India ("we," "our," or "us") is
                  committed to protecting your privacy and personal information.
                  This Privacy Policy explains how we collect, use, disclose,
                  and safeguard your information when you use our logistics
                  services or visit our website at blirapid.com.
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  2. Who We Are and How to Contact Us
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  blirapid.com is a website operated by Bansal Logistics of
                  India ("we", "us", "our", the "Company"). We are a logistics
                  company registered in India, with our headquarters in Vapi,
                  Gujarat.
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  To contact us, please email{" "}
                  <a
                    href="mailto:info@blirapid.com"
                    className="text-[#113C6A] hover:underline"
                  >
                    info@blirapid.com
                  </a>{" "}
                  or telephone our customer service line on{" "}
                  <a
                    href="tel:+919687448434"
                    className="text-[#113C6A] hover:underline"
                  >
                    +91-968 744 8434
                  </a>
                  .
                </p>
              </section>

              {/* Section 3 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  3. Information We Collect
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  We collect information to provide better logistics services to
                  all our customers. The types of information we collect
                  include:
                </p>
                <p className="text-gray-600 font-light leading-relaxed mb-2">
                  <strong className="font-semibold text-[#1a1a1a]">
                    Personal Information:
                  </strong>{" "}
                  Name, email address, phone number, company name, GST number.
                </p>
                <p className="text-gray-600 font-light leading-relaxed mb-2">
                  <strong className="font-semibold text-[#1a1a1a]">
                    Shipping Information:
                  </strong>{" "}
                  Pickup and delivery addresses, shipment details, tracking
                  information.
                </p>
                <p className="text-gray-600 font-light leading-relaxed mb-2">
                  <strong className="font-semibold text-[#1a1a1a]">
                    Business Information:
                  </strong>{" "}
                  Company details, billing information, transaction history.
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  <strong className="font-semibold text-[#1a1a1a]">
                    Technical Information:
                  </strong>{" "}
                  IP address, browser type, device information, usage data.
                </p>
              </section>

              {/* Section 4 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  4. How We Use Your Information
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  We use the collected information for various purposes to
                  provide and improve our logistics services:
                </p>
                <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-1 ml-4">
                  <li>Process and manage your shipments and deliveries</li>
                  <li>Provide real-time tracking and updates</li>
                  <li>Generate invoices and process payments</li>
                  <li>Communicate about service updates and offers</li>
                  <li>Improve our logistics network and services</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  5. Information Sharing and Disclosure
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information. We
                  may share your information only in the following
                  circumstances:
                </p>
                <p className="text-gray-600 font-light leading-relaxed mb-2">
                  <strong className="font-semibold text-[#1a1a1a]">
                    Service Partners:
                  </strong>{" "}
                  With our logistics partners for delivery execution.
                </p>
                <p className="text-gray-600 font-light leading-relaxed mb-2">
                  <strong className="font-semibold text-[#1a1a1a]">
                    Legal Requirements:
                  </strong>{" "}
                  When required by law or government authorities.
                </p>
                <p className="text-gray-600 font-light leading-relaxed mb-2">
                  <strong className="font-semibold text-[#1a1a1a]">
                    Business Transfers:
                  </strong>{" "}
                  In case of merger, acquisition, or asset sale.
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  <strong className="font-semibold text-[#1a1a1a]">
                    With Consent:
                  </strong>{" "}
                  When you give us explicit permission to share.
                </p>
              </section>

              {/* Section 6 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  6. Data Security
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  We implement industry-standard security measures to protect
                  your personal information from unauthorized access,
                  disclosure, alteration, and destruction. These measures
                  include:
                </p>
                <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-1 ml-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure data storage with access controls</li>
                  <li>Regular security audits and updates</li>
                  <li>Employee training on data protection</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  7. Your Rights and Choices
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  You have the following rights regarding your personal
                  information:
                </p>
                <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-1 ml-4">
                  <li>Access and review your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>
                    Request deletion of your information (subject to legal
                    requirements)
                  </li>
                  <li>Opt-out of marketing communications</li>
                  <li>
                    Data portability (receive your data in a structured format)
                  </li>
                </ul>
              </section>

              {/* Section 8 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  8. Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance
                  your experience on our website. These help us remember your
                  preferences and settings, analyze website traffic and usage
                  patterns, and improve website functionality and user
                  experience.
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  You can control cookies through your browser settings.
                  However, disabling cookies may affect certain features of our
                  website.
                </p>
              </section>

              {/* Section 9 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  9. Data Retention
                </h2>
                <p className="text-gray-600 font-light leading-relaxed">
                  We retain your personal information for as long as necessary
                  to provide our logistics services, comply with legal
                  obligations (GST records, invoices), and resolve disputes and
                  enforce agreements.
                </p>
              </section>

              {/* Section 10 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  10. Changes to Privacy Policy
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or legal requirements. We will notify
                  you of any material changes by posting the updated policy on
                  our website, sending email notifications to registered users,
                  and updating the "Last Updated" date.
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  This policy was most recently updated on January 22, 2025.
                </p>
              </section>

              {/* Section 11 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  11. Contact Us
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or our data practices, please contact us:
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  <strong className="font-semibold text-[#1a1a1a]">
                    BLI - Bansal Logistics of India
                  </strong>
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:info@blirapid.com"
                    className="text-[#113C6A] hover:underline"
                  >
                    info@blirapid.com
                  </a>
                  <br />
                  Phone:{" "}
                  <a
                    href="tel:+919687448434"
                    className="text-[#113C6A] hover:underline"
                  >
                    +91-968 744 8434
                  </a>
                  <br />
                  Address: 206, Arihant Complex, Nr. Vishal Mega Mart, Vapi,
                  Gujarat - 396191
                </p>
              </section>

              {/* Footer */}
              <section className="pt-8 mt-12 border-t border-gray-200">
                <p className="text-gray-500 text-sm">
                  This policy version is dated January 22, 2025
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  © {new Date().getFullYear()} BLI - Bansal Logistics of India.
                  All rights reserved. GST: 24AGIPB0188Q1Z6
                </p>
                <p className="text-gray-500 text-sm mt-4 font-medium">
                  End of Policy.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
export default PrivacyPolicy;
