import { Link } from "react-router-dom";
import { useState, memo } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet-async";
import {
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  ArrowRight,
} from "lucide-react";

// Memoized link component
const FooterLink = memo(
  ({ to, children }: { to: string; children: React.ReactNode }) => (
    <li>
      <Link
        to={to}
        className="text-white/60 hover:text-white transition-colors text-sm"
        onClick={() => window.scrollTo(0, 0)}
      >
        {children}
      </Link>
    </li>
  ),
);

// Memoized social link component
const SocialLink = memo(
  ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:border-white hover:text-white transition-all duration-200"
    >
      <Icon size={18} />
    </a>
  ),
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = "service_fmc9z7b";
  const EMAILJS_TEMPLATE_ID = "template_xij7ws5";
  const EMAILJS_PUBLIC_KEY = "JpElQajspgFk5S0-l";

  const services = [
    { to: "/services/full-truckload", label: "Full Truck Load" },
    { to: "/services/part-load", label: "Part Load" },
    { to: "/services/3pl", label: "3PL & Distribution" },
    { to: "/services/warehousing", label: "Warehousing Support" },
    { to: "/services/rail-freight", label: "Rail & Air Freight" },
  ];

  const company = [
    { to: "/about", label: "About Us" },
    { to: "/industries", label: "Industries" },
    { to: "/resources", label: "Resources" },
    { to: "/resources/faqs", label: "FAQs" },
    { to: "/contact", label: "Contact Us" },
  ];

  const socialLinks = [
    {
      href: "https://linkedin.com/company/bli-logistics",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://instagram.com/bli_logistics",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://twitter.com/bli_logistics",
      icon: Twitter,
      label: "Twitter",
    },
    {
      href: "https://facebook.com/blilogistics",
      icon: Facebook,
      label: "Facebook",
    },
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

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
      const currentDate = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "short",
      });

      const templateParams = {
        from_name: "Website Subscriber",
        from_email: email,
        message: `New subscription request from the BLI website footer.`,
        to_name: "BLI Team",
        to_email: "amitmishra7427@gmail.com",
        reply_to: email,
        date: currentDate,
        user_agent: navigator.userAgent,
        page_url: window.location.href,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BLI – Bansal Logistics of India",
    url: "https://blirapid.com",
    logo: "https://blirapid.com/lovable-uploads/8.png",
    description:
      "With 25+ years of legacy in logistics, BLI has built trust as a reliable partner for industries across India.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "206, Arihant Complex, Nr. Vishal Mega Mart",
      addressLocality: "Vapi",
      addressRegion: "Gujarat",
      postalCode: "396191",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919687448434",
      contactType: "customer service",
      email: "info@blirapid.com",
    },
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <footer className="bg-[#113C6A]">
        {/* Main Footer */}
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img
                  src="/lovable-uploads/11.png"
                  alt="BLI Logistics"
                  className="h-14 w-auto mb-6"
                  loading="lazy"
                />
              </Link>
              <p className="text-white/70 text-sm font-light leading-relaxed mb-6 max-w-sm">
                With 25+ years of legacy in logistics, BLI has built trust as a
                reliable partner for industries across India.
              </p>

              {/* Contact */}
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-white">Address</p>
                <address className="not-italic font-light text-white/70">
                  206, Arihant Complex, Nr. Vishal Mega Mart,
                  <br />
                  Vapi, Gujarat – 396191
                </address>

                <p className="font-semibold text-white pt-3">Phone</p>
                <div className="font-light text-white/70">
                  <a
                    href="tel:+919687448434"
                    className="hover:text-white transition-colors"
                  >
                    +91-968 744 8434
                  </a>
                  {" | "}
                  <a
                    href="tel:+919687448444"
                    className="hover:text-white transition-colors"
                  >
                    +91-968 744 8444
                  </a>
                </div>

                <p className="font-semibold text-white pt-3">Email</p>
                <a
                  href="mailto:info@blirapid.com"
                  className="font-light text-white/70 hover:text-white transition-colors"
                >
                  info@blirapid.com
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-2.5">
                {services.map((service, index) => (
                  <FooterLink key={index} to={service.to}>
                    {service.label}
                  </FooterLink>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-2.5">
                {company.map((link, index) => (
                  <FooterLink key={index} to={link.to}>
                    {link.label}
                  </FooterLink>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Newsletter
              </h3>
              <p className="text-sm text-white/70 font-light mb-4">
                Subscribe for logistics updates and insights.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 bg-white/10 border border-white/20 focus:outline-none focus:border-white text-white text-sm placeholder-white/40"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-white/40 text-white hover:bg-white hover:text-[#113C6A] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  <span className="font-medium text-sm">
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </span>
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social, index) => (
                  <SocialLink
                    key={index}
                    href={social.href}
                    icon={social.icon}
                    label={social.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
              <p>
                © {currentYear} BLI – Bansal Logistics of India. All rights
                reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span className="text-xs">GST: 24AGIPB0188Q1Z6</span>
                <span className="hidden md:inline text-white/20">|</span>
                <Link
                  to="/privacy-policy"
                  className="hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Privacy Policy
                </Link>
                <span className="hidden md:inline text-white/20">|</span>
                <Link
                  to="/terms-of-service"
                  className="hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default memo(Footer);
