import { ArrowLeft, Shield, Lock, Eye, Database, Mail, Globe, FileText, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

const PrivacyPolicy = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#113C6A] to-[#185EAA] pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF7300] rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF7300] rounded-full mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-[#F8FFFF]/80 text-lg">
              Your privacy is our priority. Learn how we protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              to="/"
              className="inline-flex items-center text-[#185EAA] hover:text-[#FF7300] mb-8 transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            {/* Last Updated */}
            <div className="bg-[#F8FFFF] border-l-4 border-[#FF7300] p-4 mb-8 rounded-r-lg">
              <p className="text-[#113C6A] flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-[#FF7300]" />
                <span className="font-semibold">Last updated: January 22, 2025</span>
              </p>
            </div>

            <div className="space-y-8">
              {/* Section 1 */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#113C6A] mb-3">1. Introduction</h2>
                    <p className="text-[#185EAA] leading-relaxed">
                      BLI - Bansal Logistics of India ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our logistics services or visit our website at blirapid.com.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                    <Database className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#113C6A] mb-3">2. Information We Collect</h2>
                    <p className="text-[#185EAA] mb-4">
                      We collect information to provide better logistics services to all our customers. The types of information we collect include:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">
                          <strong>Personal Information:</strong> Name, email address, phone number, company name, GST number
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">
                          <strong>Shipping Information:</strong> Pickup and delivery addresses, shipment details, tracking information
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">
                          <strong>Business Information:</strong> Company details, billing information, transaction history
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">
                          <strong>Technical Information:</strong> IP address, browser type, device information, usage data
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#113C6A] mb-3">3. How We Use Your Information</h2>
                    <p className="text-[#185EAA] mb-4">
                      We use the collected information for various purposes to provide and improve our logistics services:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Process and manage your shipments and deliveries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Provide real-time tracking and updates</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Generate invoices and process payments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Communicate about service updates and offers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Improve our logistics network and services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Comply with legal and regulatory requirements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#113C6A] mb-3">4. Information Sharing and Disclosure</h2>
                    <p className="text-[#185EAA] mb-4">
                      We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">
                          <strong>Service Partners:</strong> With our logistics partners for delivery execution
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">
                          <strong>Legal Requirements:</strong> When required by law or government authorities
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">
                          <strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">
                          <strong>With Consent:</strong> When you give us explicit permission to share
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                    <Lock className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#113C6A] mb-3">5. Data Security</h2>
                    <p className="text-[#185EAA]">
                      We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. These measures include:
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">SSL encryption for data transmission</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Secure data storage with access controls</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Regular security audits and updates</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Employee training on data protection</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#113C6A] mb-3">6. Your Rights and Choices</h2>
                    <p className="text-[#185EAA] mb-4">
                      You have the following rights regarding your personal information:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Access and review your personal information</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Request correction of inaccurate information</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Request deletion of your information (subject to legal requirements)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Opt-out of marketing communications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Data portability (receive your data in a structured format)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                    <AlertCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#113C6A] mb-3">7. Cookies and Tracking Technologies</h2>
                    <p className="text-[#185EAA]">
                      We use cookies and similar tracking technologies to enhance your experience on our website. These help us:
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Remember your preferences and settings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Analyze website traffic and usage patterns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Improve website functionality and user experience</span>
                      </li>
                    </ul>
                    <p className="text-[#185EAA] mt-4">
                      You can control cookies through your browser settings. However, disabling cookies may affect certain features of our website.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#113C6A] mb-3">8. Data Retention</h2>
                    <p className="text-[#185EAA]">
                      We retain your personal information for as long as necessary to:
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Provide our logistics services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Comply with legal obligations (GST records, invoices)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Resolve disputes and enforce agreements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 9 */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                    <AlertCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#113C6A] mb-3">9. Changes to Privacy Policy</h2>
                    <p className="text-[#185EAA]">
                      We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Posting the updated policy on our website</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Sending email notifications to registered users</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#185EAA]">Updating the "Last Updated" date</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 10 - Contact */}
              <div className="bg-gradient-to-r from-[#113C6A] to-[#185EAA] rounded-lg shadow-lg p-6 text-white">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">10. Contact Us</h2>
                    <p className="mb-4 text-[#F8FFFF]">
                      If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 space-y-2">
                      <p className="text-[#F8FFFF]">
                        <strong>BLI - Bansal Logistics of India</strong>
                      </p>
                      <p className="text-[#F8FFFF]">
                        📧 Email: <a href="mailto:info@blirapid.com" className="text-[#FF7300] hover:text-[#FF7729]">info@blirapid.com</a>
                      </p>
                      <p className="text-[#F8FFFF]">
                        📞 Phone: <a href="tel:+919687448434" className="text-[#FF7300] hover:text-[#FF7729]">+91-968 744 8434</a>
                      </p>
                      <p className="text-[#F8FFFF]">
                        📍 Address: 206, Arihant Complex, Nr. Vishal Mega Mart, Vapi, Gujarat - 396191
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="text-center py-8">
                <p className="text-[#185EAA] text-sm">
                  © {new Date().getFullYear()} BLI - Bansal Logistics of India. All rights reserved.
                </p>
                <p className="text-[#113C6A]/60 text-xs mt-2">
                  GST: 24AGIPB0188Q1Z6
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;