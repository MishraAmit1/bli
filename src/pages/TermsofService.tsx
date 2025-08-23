import { ArrowLeft, FileText, Scale, CheckCircle, AlertTriangle, Users, Package, Truck, Ban, Shield, Clock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

const TermsofService = () => {
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
                            <Scale className="h-8 w-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
                        <p className="text-[#F8FFFF]/80 text-lg">
                            Please read these terms carefully before using our logistics services.
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

                        {/* Effective Date */}
                        <div className="bg-[#F8FFFF] border-l-4 border-[#FF7300] p-4 mb-8 rounded-r-lg">
                            <p className="text-[#113C6A] flex items-center">
                                <Clock className="h-5 w-5 mr-2 text-[#FF7300]" />
                                <span className="font-semibold">Effective Date: January 22, 2025</span>
                            </p>
                        </div>

                        {/* Important Notice */}
                        <div className="bg-gradient-to-r from-[#FF7300]/10 to-[#FF7729]/10 border border-[#FF7300] rounded-lg p-6 mb-8">
                            <div className="flex items-start">
                                <AlertTriangle className="h-6 w-6 text-[#FF7300] mr-3 mt-1" />
                                <div>
                                    <h3 className="font-bold text-[#113C6A] mb-2">Important Notice</h3>
                                    <p className="text-[#185EAA] text-sm">
                                        By using BLI - Bansal Logistics of India's services, you agree to be bound by these Terms of Service.
                                        If you disagree with any part of these terms, you may not access our services.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {/* Section 1 - Agreement */}
                            <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                                <div className="flex items-start mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                                        <FileText className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-[#113C6A] mb-3">1. Agreement to Terms</h2>
                                        <p className="text-[#185EAA] leading-relaxed mb-4">
                                            These Terms of Service ("Terms") constitute a legally binding agreement between you ("Customer", "you", or "your")
                                            and BLI - Bansal Logistics of India ("BLI", "we", "us", or "our"), a logistics company registered in Gujarat, India
                                            (GST: 24AGIPB0188Q1Z6).
                                        </p>
                                        <p className="text-[#185EAA] leading-relaxed">
                                            By accessing or using our logistics services, including but not limited to Full Truck Load (FTL), Part Load (PTL),
                                            3PL & Distribution, Warehousing Support, and Rail & Air Freight services, you agree to be bound by these Terms.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2 - Services */}
                            <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                                <div className="flex items-start mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                                        <Truck className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-[#113C6A] mb-3">2. Our Services</h2>
                                        <p className="text-[#185EAA] mb-4">
                                            BLI provides comprehensive logistics and transportation services across India:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div className="flex items-start">
                                                <CheckCircle className="h-4 w-4 text-[#FF7300] mr-2 mt-1" />
                                                <span className="text-[#185EAA] text-sm">Full Truck Load (FTL) Services</span>
                                            </div>
                                            <div className="flex items-start">
                                                <CheckCircle className="h-4 w-4 text-[#FF7300] mr-2 mt-1" />
                                                <span className="text-[#185EAA] text-sm">Part Load (PTL) Services</span>
                                            </div>
                                            <div className="flex items-start">
                                                <CheckCircle className="h-4 w-4 text-[#FF7300] mr-2 mt-1" />
                                                <span className="text-[#185EAA] text-sm">3PL & Distribution Services</span>
                                            </div>
                                            <div className="flex items-start">
                                                <CheckCircle className="h-4 w-4 text-[#FF7300] mr-2 mt-1" />
                                                <span className="text-[#185EAA] text-sm">Warehousing Support</span>
                                            </div>
                                            <div className="flex items-start">
                                                <CheckCircle className="h-4 w-4 text-[#FF7300] mr-2 mt-1" />
                                                <span className="text-[#185EAA] text-sm">Rail & Air Freight</span>
                                            </div>
                                            <div className="flex items-start">
                                                <CheckCircle className="h-4 w-4 text-[#FF7300] mr-2 mt-1" />
                                                <span className="text-[#185EAA] text-sm">Real-time Tracking</span>
                                            </div>
                                        </div>
                                        <p className="text-[#185EAA] mt-4">
                                            Service availability may vary by location and is subject to our operational capacity and network coverage.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3 - User Responsibilities */}
                            <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                                <div className="flex items-start mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                                        <Users className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-[#113C6A] mb-3">3. Customer Responsibilities</h2>
                                        <p className="text-[#185EAA] mb-4">
                                            As a customer of BLI services, you agree to:
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                                                <span className="text-[#185EAA]">
                                                    <strong>Provide Accurate Information:</strong> Ensure all shipment details, addresses, and documentation are accurate and complete
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                                                <span className="text-[#185EAA]">
                                                    <strong>Proper Packaging:</strong> Package goods appropriately to prevent damage during transit
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                                                <span className="text-[#185EAA]">
                                                    <strong>Timely Payment:</strong> Pay all charges as per agreed terms and conditions
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                                                <span className="text-[#185EAA]">
                                                    <strong>Legal Compliance:</strong> Ensure shipments comply with all applicable laws and regulations
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                                                <span className="text-[#185EAA]">
                                                    <strong>Insurance:</strong> Consider appropriate insurance for high-value or fragile items
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Section 4 - Prohibited Items */}
                            <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                                <div className="flex items-start mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                                        <Ban className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-[#113C6A] mb-3">4. Prohibited Items</h2>
                                        <p className="text-[#185EAA] mb-4">
                                            The following items are strictly prohibited from shipment:
                                        </p>
                                        <div className="bg-[#F8FFFF] p-4 rounded-lg">
                                            <ul className="space-y-2">
                                                <li className="flex items-start">
                                                    <span className="text-[#FF7300] mr-2">✗</span>
                                                    <span className="text-[#185EAA]">Illegal substances or contraband</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-[#FF7300] mr-2">✗</span>
                                                    <span className="text-[#185EAA]">Hazardous materials (unless properly declared and permitted)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-[#FF7300] mr-2">✗</span>
                                                    <span className="text-[#185EAA]">Weapons, explosives, or ammunition</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-[#FF7300] mr-2">✗</span>
                                                    <span className="text-[#185EAA]">Live animals (without proper permits)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-[#FF7300] mr-2">✗</span>
                                                    <span className="text-[#185EAA]">Perishable goods (unless under special arrangement)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-[#FF7300] mr-2">✗</span>
                                                    <span className="text-[#185EAA]">Currency, precious metals, or jewelry (unless declared)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 5 - Pricing and Payment */}
                            <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                                <div className="flex items-start mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                                        <Package className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-[#113C6A] mb-3">5. Pricing and Payment Terms</h2>
                                        <div className="space-y-3">
                                            <div>
                                                <h3 className="font-semibold text-[#113C6A] mb-2">5.1 Pricing</h3>
                                                <ul className="space-y-2">
                                                    <li className="text-[#185EAA] text-sm">• Prices are quoted based on shipment details provided</li>
                                                    <li className="text-[#185EAA] text-sm">• Additional charges may apply for special handling, insurance, or expedited delivery</li>
                                                    <li className="text-[#185EAA] text-sm">• GST and other applicable taxes will be added to the quoted price</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-[#113C6A] mb-2">5.2 Payment</h3>
                                                <ul className="space-y-2">
                                                    <li className="text-[#185EAA] text-sm">• Payment terms: As per agreement (Advance/Credit)</li>
                                                    <li className="text-[#185EAA] text-sm">• Accepted modes: Bank Transfer, Cheque, Online Payment</li>
                                                    <li className="text-[#185EAA] text-sm">• Late payments may incur additional charges</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 6 - Liability */}
                            <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                                <div className="flex items-start mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                                        <Shield className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-[#113C6A] mb-3">6. Liability and Insurance</h2>
                                        <div className="space-y-3">
                                            <div>
                                                <h3 className="font-semibold text-[#113C6A] mb-2">6.1 Limited Liability</h3>
                                                <p className="text-[#185EAA] text-sm mb-2">
                                                    BLI's liability for loss or damage to goods is limited to:
                                                </p>
                                                <ul className="space-y-2">
                                                    <li className="text-[#185EAA] text-sm">• ₹50 per kg for general cargo (unless higher value declared)</li>
                                                    <li className="text-[#185EAA] text-sm">• Actual value for insured shipments (subject to insurance terms)</li>
                                                    <li className="text-[#185EAA] text-sm">• We are not liable for indirect or consequential losses</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-[#113C6A] mb-2">6.2 Exclusions</h3>
                                                <p className="text-[#185EAA] text-sm">
                                                    BLI is not liable for loss or damage caused by:
                                                </p>
                                                <ul className="space-y-2 mt-2">
                                                    <li className="text-[#185EAA] text-sm">• Force majeure events (natural disasters, strikes, etc.)</li>
                                                    <li className="text-[#185EAA] text-sm">• Improper packaging by the customer</li>
                                                    <li className="text-[#185EAA] text-sm">• Inherent nature of goods</li>
                                                    <li className="text-[#185EAA] text-sm">• Government actions or regulatory delays</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 7 - Claims */}
                            <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                                <div className="flex items-start mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                                        <AlertTriangle className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-[#113C6A] mb-3">7. Claims and Disputes</h2>
                                        <div className="space-y-3">
                                            <div>
                                                <h3 className="font-semibold text-[#113C6A] mb-2">7.1 Claim Procedure</h3>
                                                <ul className="space-y-2">
                                                    <li className="text-[#185EAA] text-sm">• Report damage/loss within 24 hours of delivery</li>
                                                    <li className="text-[#185EAA] text-sm">• Submit written claim within 7 days with supporting documents</li>
                                                    <li className="text-[#185EAA] text-sm">• Provide photos, invoices, and proof of damage/loss</li>
                                                    <li className="text-[#185EAA] text-sm">• Claims will be investigated and resolved within 30 days</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-[#113C6A] mb-2">7.2 Dispute Resolution</h3>
                                                <p className="text-[#185EAA] text-sm">
                                                    Any disputes shall be resolved through:
                                                </p>
                                                <ol className="list-decimal list-inside space-y-1 mt-2">
                                                    <li className="text-[#185EAA] text-sm">Mutual discussion and negotiation</li>
                                                    <li className="text-[#185EAA] text-sm">Mediation (if required)</li>
                                                    <li className="text-[#185EAA] text-sm">Arbitration under Indian Arbitration Act</li>
                                                    <li className="text-[#185EAA] text-sm">Jurisdiction: Courts of Vapi, Gujarat</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 8 - Intellectual Property */}
                            <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                                <div className="flex items-start mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                                        <FileText className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-[#113C6A] mb-3">8. Intellectual Property</h2>
                                        <p className="text-[#185EAA] mb-3">
                                            All content on our website and services, including but not limited to:
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                                                <span className="text-[#185EAA]">BLI logo, trademarks, and brand elements</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                                                <span className="text-[#185EAA]">Website content, designs, and graphics</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-[#FF7300] rounded-full mt-2 mr-3"></span>
                                                <span className="text-[#185EAA]">Software, tracking systems, and technology</span>
                                            </li>
                                        </ul>
                                        <p className="text-[#185EAA] mt-3">
                                            are the property of BLI and protected by intellectual property laws. Unauthorized use is strictly prohibited.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 9 - Termination */}
                            <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                                <div className="flex items-start mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                                        <AlertTriangle className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-[#113C6A] mb-3">9. Termination</h2>
                                        <p className="text-[#185EAA] mb-3">
                                            We reserve the right to terminate or suspend services:
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="text-[#185EAA] text-sm">• For violation of these Terms of Service</li>
                                            <li className="text-[#185EAA] text-sm">• For non-payment or delayed payments</li>
                                            <li className="text-[#185EAA] text-sm">• For shipping prohibited items</li>
                                            <li className="text-[#185EAA] text-sm">• For fraudulent or illegal activities</li>
                                            <li className="text-[#185EAA] text-sm">• At our discretion with proper notice</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Section 10 - Modifications */}
                            <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                                <div className="flex items-start mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                                        <Clock className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-[#113C6A] mb-3">10. Modifications to Terms</h2>
                                        <p className="text-[#185EAA]">
                                            BLI reserves the right to modify these Terms of Service at any time. Changes will be effective upon posting on our website.
                                            Continued use of our services after modifications constitutes acceptance of the updated terms.
                                        </p>
                                        <div className="bg-[#F8FFFF] p-4 rounded-lg mt-4">
                                            <p className="text-[#185EAA] text-sm">
                                                <strong>Note:</strong> We recommend reviewing these terms periodically for any changes.
                                                Material changes will be notified via email to registered customers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 11 - General Provisions */}
                            <div className="bg-white rounded-lg shadow-sm p-6 border border-[#185EAA]/10">
                                <div className="flex items-start mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#FF7300] to-[#FF7729] rounded-lg flex items-center justify-center mr-4">
                                        <Scale className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-[#113C6A] mb-3">11. General Provisions</h2>
                                        <div className="space-y-3">
                                            <div>
                                                <h3 className="font-semibold text-[#113C6A] mb-2">11.1 Governing Law</h3>
                                                <p className="text-[#185EAA] text-sm">
                                                    These Terms shall be governed by the laws of India and the State of Gujarat.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-[#113C6A] mb-2">11.2 Entire Agreement</h3>
                                                <p className="text-[#185EAA] text-sm">
                                                    These Terms constitute the entire agreement between you and BLI regarding the use of our services.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-[#113C6A] mb-2">11.3 Severability</h3>
                                                <p className="text-[#185EAA] text-sm">
                                                    If any provision of these Terms is found invalid, the remaining provisions shall continue in full force.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-[#113C6A] mb-2">11.4 Waiver</h3>
                                                <p className="text-[#185EAA] text-sm">
                                                    Failure to enforce any right or provision shall not constitute a waiver of such right or provision.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Section */}
                            <div className="bg-gradient-to-r from-[#113C6A] to-[#185EAA] rounded-lg shadow-lg p-6 text-white">
                                <div className="flex items-start mb-4">
                                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4">
                                        <Mail className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold mb-3">12. Contact Information</h2>
                                        <p className="mb-4 text-[#F8FFFF]">
                                            For questions about these Terms of Service, please contact us:
                                        </p>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 space-y-2">
                                            <p className="text-[#F8FFFF]">
                                                <strong>BLI - Bansal Logistics of India</strong>
                                            </p>
                                            <p className="text-[#F8FFFF]">
                                                📧 Email: <a href="mailto:info@blirapid.com" className="text-[#FF7300] hover:text-[#FF7729]">info@blirapid.com</a>
                                            </p>
                                            <p className="text-[#F8FFFF]">
                                                📞 Phone: <a href="tel:+919687448434" className="text-[#FF7300] hover:text-[#FF7729]">+91-968 744 8434</a> |
                                                <a href="tel:+919687448444" className="text-[#FF7300] hover:text-[#FF7729]"> +91-968 744 8444</a>
                                            </p>
                                            <p className="text-[#F8FFFF]">
                                                📍 Address: 206, Arihant Complex, Nr. Vishal Mega Mart, Vapi, Gujarat - 396191
                                            </p>
                                            <p className="text-[#F8FFFF]">
                                                🌐 Website: <a href="https://www.blirapid.com" className="text-[#FF7300] hover:text-[#FF7729]">www.blirapid.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Acceptance Box */}
                            <div className="bg-gradient-to-r from-[#FF7300]/10 to-[#FF7729]/10 border-2 border-dashed border-[#FF7300] rounded-lg p-6 text-center">
                                <CheckCircle className="h-12 w-12 text-[#FF7300] mx-auto mb-3" />
                                <h3 className="font-bold text-[#113C6A] mb-2">By Using Our Services</h3>
                                <p className="text-[#185EAA] text-sm">
                                    You acknowledge that you have read, understood, and agree to be bound by these Terms of Service
                                    and our Privacy Policy.
                                </p>
                            </div>

                            {/* Footer Note */}
                            <div className="text-center py-8">
                                <p className="text-[#185EAA] text-sm">
                                    © {new Date().getFullYear()} BLI - Bansal Logistics of India. All rights reserved.
                                </p>
                                <p className="text-[#113C6A]/60 text-xs mt-2">
                                    GST: 24AGIPB0188Q1Z6 | CIN: Coming Soon
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default TermsofService;