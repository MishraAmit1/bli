import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section
      id="contact-info"
      className="bg-gradient-to-b from-[#FFFDF7] to-[#113C6A] text-[#FFFDF7] relative py-[15px] md:py-[25px]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-[#F8FFFF] text-[#113C6A] rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#113C6A]">
            Contact Us Today
          </h2>
          <p className="text-[#0a213a]/90 text-lg max-w-2xl mx-auto">
            Have questions about our AI-powered sensor solutions? Reach out to our team and let's
            discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Felix's Contact Info */}
          <div className="bg-[#F8FFFF] rounded-xl shadow-xl p-6 md:p-8 border border-[#185EAA]/20">
            <div className="flex flex-col items-center text-center">
              <img
                src="/lovable-uploads/aa5291bd-2417-4c1e-9a02-0bcc71a92507.png"
                alt="Felix von Heland"
                className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
              />
              <h3 className="text-xl font-bold text-[#113C6A]">Felix von Heland</h3>
              <p className="text-[#21221C]/70 mb-4">CEO and Founder</p>
              <div className="flex flex-col space-y-3">
                <a
                  href="mailto:felix@wrlds.com"
                  className="flex items-center text-[#113C6A] hover:text-[#FF7729] transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2 text-[#185EAA]" />
                  felix@wrlds.com
                </a>
                <a
                  href="https://www.linkedin.com/in/felixvonheland/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#113C6A] hover:text-[#FF7729] transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-2 text-[#185EAA]" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Love's Contact Info */}
          <div className="bg-[#F8FFFF] rounded-xl shadow-xl p-6 md:p-8 border border-[#185EAA]/20">
            <div className="flex flex-col items-center text-center">
              <img
                src="/lovable-uploads/a9bb9110-964a-43b0-a5ab-7162140cd133.png"
                alt="Love Anderberg"
                className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
              />
              <h3 className="text-xl font-bold text-[#113C6A]">Love Anderberg</h3>
              <p className="text-[#21221C]/70 mb-4">COO</p>
              <div className="flex flex-col space-y-3">
                <a
                  href="mailto:love@wrlds.com"
                  className="flex items-center text-[#113C6A] hover:text-[#FF7729] transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2 text-[#185EAA]" />
                  love@wrlds.com
                </a>
                <a
                  href="https://www.linkedin.com/in/love-anderberg-67549a174/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#113C6A] hover:text-[#FF7729] transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-2 text-[#185EAA]" />
                  LinkedIn Profile
                </a>
                <a
                  href="tel:+46760149508"
                  className="flex items-center text-[#113C6A] hover:text-[#FF7729] transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2 text-[#185EAA]" />
                  076-014 95 08
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;