import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <Helmet>
        <title>Terms of Service | BLI - Bansal Logistics of India</title>
        <meta
          name="description"
          content="BLI Terms of Service - Read our terms and conditions for logistics services including FTL, PTL, warehousing, and freight services across India."
        />
        <link rel="canonical" href="https://blirapid.com/terms-of-service/" />
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
                  Terms of Service
                </span>
              </li>
            </ol>
          </nav>

          <h1
            className="font-bold text-[#1a1a1a] mb-4"
            style={{ fontSize: "42px", lineHeight: "50px" }}
          >
            Terms of Service
          </h1>
          <p className="text-gray-600 text-lg font-light max-w-3xl">
            Please read these terms carefully before using our logistics
            services.
          </p>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
          <div className="max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {/* Effective Date */}
              <div className="bg-gray-50 border-l-4 border-[#113C6A] p-4 mb-10">
                <p className="text-sm text-gray-600">
                  <strong className="text-[#1a1a1a]">Effective Date:</strong>{" "}
                  January 22, 2025
                </p>
              </div>

              {/* Important Notice */}
              <div className="bg-gray-50 border border-gray-200 p-6 mb-10">
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  <strong className="font-semibold text-[#1a1a1a]">
                    Important Notice:
                  </strong>{" "}
                  By using BLI - Bansal Logistics of India's services, you agree
                  to be bound by these Terms of Service. If you disagree with
                  any part of these terms, you may not access our services.
                </p>
              </div>

              {/* Section 1 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  1. Agreement to Terms
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  These Terms of Service ("Terms") constitute a legally binding
                  agreement between you ("Customer", "you", or "your") and BLI -
                  Bansal Logistics of India ("BLI", "we", "us", or "our"), a
                  logistics company registered in Gujarat, India (GST:
                  24AGIPB0188Q1Z6).
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  By accessing or using our logistics services, including but
                  not limited to Full Truck Load (FTL), Part Load (PTL), 3PL &
                  Distribution, Warehousing Support, and Rail & Air Freight
                  services, you agree to be bound by these Terms.
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  2. Our Services
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  BLI provides comprehensive logistics and transportation
                  services across India:
                </p>
                <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-1 ml-4">
                  <li>Full Truck Load (FTL) Services</li>
                  <li>Part Load (PTL) Services</li>
                  <li>3PL & Distribution Services</li>
                  <li>Warehousing Support</li>
                  <li>Rail & Air Freight</li>
                  <li>Real-time Tracking</li>
                </ul>
                <p className="text-gray-600 font-light leading-relaxed mt-4">
                  Service availability may vary by location and is subject to
                  our operational capacity and network coverage.
                </p>
              </section>

              {/* Section 3 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  3. Customer Responsibilities
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  As a customer of BLI services, you agree to:
                </p>
                <p className="text-gray-600 font-light leading-relaxed mb-2">
                  <strong className="font-semibold text-[#1a1a1a]">
                    Provide Accurate Information:
                  </strong>{" "}
                  Ensure all shipment details, addresses, and documentation are
                  accurate and complete.
                </p>
                <p className="text-gray-600 font-light leading-relaxed mb-2">
                  <strong className="font-semibold text-[#1a1a1a]">
                    Proper Packaging:
                  </strong>{" "}
                  Package goods appropriately to prevent damage during transit.
                </p>
                <p className="text-gray-600 font-light leading-relaxed mb-2">
                  <strong className="font-semibold text-[#1a1a1a]">
                    Timely Payment:
                  </strong>{" "}
                  Pay all charges as per agreed terms and conditions.
                </p>
                <p className="text-gray-600 font-light leading-relaxed mb-2">
                  <strong className="font-semibold text-[#1a1a1a]">
                    Legal Compliance:
                  </strong>{" "}
                  Ensure shipments comply with all applicable laws and
                  regulations.
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  <strong className="font-semibold text-[#1a1a1a]">
                    Insurance:
                  </strong>{" "}
                  Consider appropriate insurance for high-value or fragile
                  items.
                </p>
              </section>

              {/* Section 4 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  4. Prohibited Items
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  The following items are strictly prohibited from shipment:
                </p>
                <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-1 ml-4">
                  <li>Illegal substances or contraband</li>
                  <li>
                    Hazardous materials (unless properly declared and permitted)
                  </li>
                  <li>Weapons, explosives, or ammunition</li>
                  <li>Live animals (without proper permits)</li>
                  <li>Perishable goods (unless under special arrangement)</li>
                  <li>
                    Currency, precious metals, or jewelry (unless declared)
                  </li>
                </ul>
              </section>

              {/* Section 5 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  5. Pricing and Payment Terms
                </h2>

                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  5.1 Pricing
                </h3>
                <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-1 ml-4 mb-4">
                  <li>Prices are quoted based on shipment details provided</li>
                  <li>
                    Additional charges may apply for special handling,
                    insurance, or expedited delivery
                  </li>
                  <li>
                    GST and other applicable taxes will be added to the quoted
                    price
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  5.2 Payment
                </h3>
                <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-1 ml-4">
                  <li>Payment terms: As per agreement (Advance/Credit)</li>
                  <li>Accepted modes: Bank Transfer, Cheque, Online Payment</li>
                  <li>Late payments may incur additional charges</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  6. Liability and Insurance
                </h2>

                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  6.1 Limited Liability
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-2">
                  BLI's liability for loss or damage to goods is limited to:
                </p>
                <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-1 ml-4 mb-4">
                  <li>
                    ₹50 per kg for general cargo (unless higher value declared)
                  </li>
                  <li>
                    Actual value for insured shipments (subject to insurance
                    terms)
                  </li>
                  <li>
                    We are not liable for indirect or consequential losses
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  6.2 Exclusions
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-2">
                  BLI is not liable for loss or damage caused by:
                </p>
                <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-1 ml-4">
                  <li>
                    Force majeure events (natural disasters, strikes, etc.)
                  </li>
                  <li>Improper packaging by the customer</li>
                  <li>Inherent nature of goods</li>
                  <li>Government actions or regulatory delays</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  7. Claims and Disputes
                </h2>

                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  7.1 Claim Procedure
                </h3>
                <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-1 ml-4 mb-4">
                  <li>Report damage/loss within 24 hours of delivery</li>
                  <li>
                    Submit written claim within 7 days with supporting documents
                  </li>
                  <li>Provide photos, invoices, and proof of damage/loss</li>
                  <li>
                    Claims will be investigated and resolved within 30 days
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  7.2 Dispute Resolution
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-2">
                  Any disputes shall be resolved through:
                </p>
                <ol className="list-decimal list-inside text-gray-600 font-light leading-relaxed space-y-1 ml-4">
                  <li>Mutual discussion and negotiation</li>
                  <li>Mediation (if required)</li>
                  <li>Arbitration under Indian Arbitration Act</li>
                  <li>Jurisdiction: Courts of Vapi, Gujarat</li>
                </ol>
              </section>

              {/* Section 8 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  8. Intellectual Property
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  All content on our website and services, including but not
                  limited to BLI logo, trademarks, brand elements, website
                  content, designs, graphics, software, tracking systems, and
                  technology, are the property of BLI and protected by
                  intellectual property laws. Unauthorized use is strictly
                  prohibited.
                </p>
              </section>

              {/* Section 9 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  9. Termination
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  We reserve the right to terminate or suspend services for
                  violation of these Terms of Service, non-payment or delayed
                  payments, shipping prohibited items, fraudulent or illegal
                  activities, or at our discretion with proper notice.
                </p>
              </section>

              {/* Section 10 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  10. Modifications to Terms
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  BLI reserves the right to modify these Terms of Service at any
                  time. Changes will be effective upon posting on our website.
                  Continued use of our services after modifications constitutes
                  acceptance of the updated terms.
                </p>
                <p className="text-gray-600 font-light leading-relaxed bg-gray-50 p-4 border-l-4 border-gray-300">
                  <strong className="font-semibold text-[#1a1a1a]">
                    Note:
                  </strong>{" "}
                  We recommend reviewing these terms periodically for any
                  changes. Material changes will be notified via email to
                  registered customers.
                </p>
              </section>

              {/* Section 11 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  11. General Provisions
                </h2>

                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  11.1 Governing Law
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  These Terms shall be governed by the laws of India and the
                  State of Gujarat.
                </p>

                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  11.2 Entire Agreement
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  These Terms constitute the entire agreement between you and
                  BLI regarding the use of our services.
                </p>

                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  11.3 Severability
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  If any provision of these Terms is found invalid, the
                  remaining provisions shall continue in full force.
                </p>

                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  11.4 Waiver
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Failure to enforce any right or provision shall not constitute
                  a waiver of such right or provision.
                </p>
              </section>

              {/* Section 12 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  12. Contact Information
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  For questions about these Terms of Service, please contact us:
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
                  </a>{" "}
                  |{" "}
                  <a
                    href="tel:+919687448444"
                    className="text-[#113C6A] hover:underline"
                  >
                    +91-968 744 8444
                  </a>
                  <br />
                  Address: 206, Arihant Complex, Nr. Vishal Mega Mart, Vapi,
                  Gujarat - 396191
                  <br />
                  Website:{" "}
                  <a
                    href="https://blirapid.com"
                    className="text-[#113C6A] hover:underline"
                  >
                    blirapid.com
                  </a>
                </p>
              </section>

              {/* Acceptance Notice */}
              <div className="bg-gray-50 border border-gray-200 p-6 text-center mb-10">
                <h3 className="font-bold text-[#1a1a1a] mb-2">
                  By Using Our Services
                </h3>
                <p className="text-gray-600 text-sm font-light">
                  You acknowledge that you have read, understood, and agree to
                  be bound by these Terms of Service and our Privacy Policy.
                </p>
              </div>

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
                  End of Terms.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsOfService;
