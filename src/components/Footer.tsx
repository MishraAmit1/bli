import { ArrowRight, Linkedin, Instagram, Twitter, MapPin, Phone, Mail, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect, memo } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet-async";

// Memoized link component for better performance
const FooterLink = memo(({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link
      to={to}
      className="text-[#F8FFFF]/70 hover:text-[#FF7300] transition-colors duration-200 flex items-center group"
      onClick={() => window.scrollTo(0, 0)}
    >
      <span className="w-1.5 h-1.5 bg-[#FF7300] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      {children}
    </Link>
  </li>
));

// Memoized social link component
const SocialLink = memo(({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#185EAA]/20 backdrop-blur-sm border border-[#185EAA]/30 hover:bg-[#FF7300] hover:border-[#FF7300] transition-all duration-200 group"
  >
    <Icon size={20} className="group-hover:scale-110 transition-transform" />
  </a>
));

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const currentYear = new Date().getFullYear();

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = "service_a69cmrl";
  const EMAILJS_TEMPLATE_ID = "template_f9grud5";
  const EMAILJS_PUBLIC_KEY = "tuMby3K1-jT62DW4C";

  // Services and Quick Links data
  const services = [
    { to: "/services/full-truckload", label: "Full Truck Load" },
    { to: "/services/part-load", label: "Part Load" },
    { to: "/services/3pl", label: "3PL & Distribution" },
    { to: "/services/warehousing", label: "Warehousing Support" },
    { to: "/services/rail-freight", label: "Rail & Air Freight" }
  ];

  const quickLinks = [
    { to: "/about", label: "About Us" },
    { to: "/why-bli", label: "Why BLI" },
    { to: "/industries", label: "Industries We Serve" },
    { to: "/resources", label: "Case Studies" },
    { to: "/resources", label: "Insights & Blogs" },
    { to: "/resources/faqs", label: "FAQs" },
    { to: "/contact", label: "Contact Us" }
  ];

  const socialLinks = [
    { href: "https://linkedin.com/company/bli-logistics", icon: Linkedin, label: "LinkedIn" },
    { href: "https://instagram.com/bli_logistics", icon: Instagram, label: "Instagram" },
    { href: "https://twitter.com/bli_logistics", icon: Twitter, label: "Twitter" },
    { href: "https://facebook.com/blilogistics", icon: Facebook, label: "Facebook" }
  ];

  // Handle form submission with validation
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Get current date and time
      const currentDate = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'short'
      });

      const templateParams = {
        from_name: "Website Subscriber",
        from_email: email,
        message: `New subscription request from the BLI website footer.`,
        to_name: "BLI Team",
        to_email: "amitmishra7427@gmail.com", // Receiving email
        reply_to: email,
        date: currentDate,
        user_agent: navigator.userAgent,
        page_url: window.location.href
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Success! 🎉",
        description: "Thank you for subscribing to our newsletter. You'll receive updates soon!",
        variant: "default",
      });

      setEmail("");
    } catch (error) {
      console.error("Error sending subscription:", error);
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BLI – Bansal Logistics of India",
    "url": "https://blirapid.com",
    "logo": "https://blirapid.com/lovable-uploads/8.png",
    "description": "With 25+ years of legacy in logistics, BLI has built trust as a reliable partner for industries across India.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "206, Arihant Complex, Nr. Vishal Mega Mart",
      "addressLocality": "Vapi",
      "addressRegion": "Gujarat",
      "postalCode": "396191",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919687448434",
      "contactType": "customer service",
      "email": "info@blirapid.com",
      "availableLanguage": ["en", "hi", "gu"]
    },
    "sameAs": [
      "https://linkedin.com/company/bli-logistics",
      "https://instagram.com/bli_logistics",
      "https://twitter.com/bli_logistics",
      "https://facebook.com/blilogistics"
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <footer className="bg-[#113C6A] text-[#FFFFFF] md:pt-6 pb-8 w-full relative overflow-hidden" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF7300] rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#185EAA] rounded-full blur-3xl"></div>
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-12">
          {/* Top Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-12 border-b border-[#185EAA]/30">

            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img
                  src="/lovable-uploads/8.png"
                  alt="BLI Logistics Logo"
                  className="h-24 w-auto mb-6 filter brightness-0 invert"
                  width="180"
                  height="96"
                  loading="lazy"
                />
              </Link>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#FF7300] to-[#FF7729] bg-clip-text text-transparent">
                BLI – Bansal Logistics of India
              </h3>
              <p className="text-[#F8FFFF]/80 text-sm mb-8 leading-relaxed">
                With 25+ years of legacy in logistics, BLI has built trust as a
                reliable partner for industries across India.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start text-sm text-[#F8FFFF]/70 hover:text-[#FF7300] transition-colors">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 text-[#FF7300]" />
                  <address className="not-italic">
                    206, Arihant Complex, Nr. Vishal Mega Mart, <br /> Vapi, Gujarat – 396191
                  </address>
                </div>
                <div className="flex items-start text-sm text-[#F8FFFF]/70 hover:text-[#FF7300] transition-colors">
                  <Phone className="w-5 h-5 mr-3 mt-0.5 text-[#FF7300]" />
                  <div>
                    <a
                      href="tel:+919687448434"
                      className="hover:text-[#FF7300] transition-colors"
                      aria-label="Call us at +91-968 744 8434"
                    >
                      +91-968 744 8434
                    </a>
                    <span className="mx-2 text-[#185EAA]/50">|</span>
                    <a
                      href="tel:+919687448444"
                      className="hover:text-[#FF7300] transition-colors"
                      aria-label="Call us at +91-968 744 8444"
                    >
                      +91-968 744 8444
                    </a>
                  </div>
                </div>
                <div className="flex items-start text-sm text-[#F8FFFF]/70 hover:text-[#FF7300] transition-colors">
                  <Mail className="w-5 h-5 mr-3 mt-0.5 text-[#FF7300]" />
                  <a
                    href="mailto:info@blirapid.com"
                    className="hover:text-[#FF7300] transition-colors"
                    aria-label="Email us at info@blirapid.com"
                  >
                    info@blirapid.com
                  </a>
                </div>
              </div>
            </div>

            {/* Services and Quick Links Container - Same row on mobile */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-2">
              {/* Services */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#F8FFFF]">Services</h3>
                <ul className="space-y-3 text-sm">
                  {services.map((service, index) => (
                    <FooterLink key={index} to={service.to}>
                      {service.label}
                    </FooterLink>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#F8FFFF]">Quick Links</h3>
                <ul className="space-y-3 text-sm">
                  {quickLinks.map((link, index) => (
                    <FooterLink key={index} to={link.to}>
                      {link.label}
                    </FooterLink>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stay Connected */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-[#F8FFFF]">Stay Connected</h3>
              <p className="text-sm text-[#F8FFFF]/70 mb-6">
                Subscribe to get logistics trends, updates, and insights.
              </p>
              <form
                className="flex flex-col space-y-4"
                onSubmit={handleSubscribe}
                ref={formRef}
                aria-label="Newsletter subscription form"
              >
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-[#F8FFFF]/10 backdrop-blur-sm border border-[#185EAA]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7300] focus:border-transparent text-[#F8FFFF] placeholder-[#F8FFFF]/50 transition-all duration-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    aria-label="Email address"
                    aria-required="true"
                  />
                  <Mail className="absolute right-3 top-3.5 h-4 w-4 text-[#F8FFFF]/30" />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-[#FF7300] to-[#FF7729] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#FF7300]/30 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                  aria-label="Subscribe to newsletter"
                >
                  {isSubmitting ? "Subscribing..." : (
                    <>
                      Subscribe <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Social Links */}
              <div className="flex space-x-4 mt-8">
                {socialLinks.map((social, index) => (
                  <SocialLink
                    key={index}
                    href={social.href}
                    icon={social.icon}
                    label={`Follow us on ${social.label}`}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#F8FFFF]/60">
            <p>
              © {currentYear} BLI – Bansal Logistics of India. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex flex-wrap items-center justify-center md:justify-end gap-2 md:gap-4">
              <span>GST: <span className="font-semibold text-[#F8FFFF]/80">24AGIPB0188Q1Z6</span></span>
              <span className="hidden md:inline text-[#185EAA]/50">|</span>
              <Link
                to="/privacy-policy"
                className="hover:text-[#FF7300] transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Privacy Policy
              </Link>
              <span className="hidden md:inline text-[#185EAA]/50">|</span>
              <Link
                to="/terms-of-service"
                className="hover:text-[#FF7300] transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default memo(Footer);