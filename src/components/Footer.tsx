import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const EMAILJS_SERVICE_ID = "service_i3h66xg";
      const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
      const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";

      const templateParams = {
        from_name: "Website Subscriber",
        from_email: email,
        message: `New subscription request from the website footer.`,
        to_name: 'WRLDS Team',
        reply_to: email
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default"
      });

      setEmail("");
    } catch (error) {
      console.error("Error sending subscription:", error);
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-[#113C6A] text-[#FFFDF7] pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-[#185EAA]/50">
          {/* Logo + About */}
          <div className="lg:col-span-2">
            <img
              src="/lovable-uploads/8.png"
              alt="WRLDS Technologies Logo"
              className="h-32 w-auto -ml-16"
            />
            <p className="text-[#F8FFFF]/80 mb-6">
              WRLDS Technologies provides an end-to-end platform for the creation and deployment of
              AI-powered smart sensor devices, giving customers 100% ownership while handling the complete technological development.
            </p>
            <p className="text-[#F8FFFF]/80 mb-6">
              206 - Arihant Complex, <br />
              Nr. Vishal Mega Mart, Vapi Gujarat
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/wrldstechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#185EAA] flex items-center justify-center text-[#FFFDF7] transition-colors hover:bg-[#FF7729]"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFFDF7]">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-[#F8FFFF]/80 hover:text-[#FF7729] transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-[#F8FFFF]/80 hover:text-[#FF7729] transition-colors">Careers</Link></li>
              <li><Link to="/privacy-policy" className="text-[#F8FFFF]/80 hover:text-[#FF7729] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFFDF7]">Get in Touch</h3>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 bg-[#F8FFFF] border border-[#185EAA]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#185EAA] text-[#113C6A] placeholder-[#113C6A]/60"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#FF7729] text-[#FFFDF7] rounded-md hover:bg-[#e56721] transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#F8FFFF]/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} WRLDS Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-[#F8FFFF]/70 hover:text-[#FF7729] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;