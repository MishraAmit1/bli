import React, { useRef } from "react";
import { Mail, Linkedin, Phone, UserCircle, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";

const contactPersons = [
  {
    name: "Prince Bansal",
    position: "Business Development",
    email: "info@blirapid.com",
    linkedin: "https://in.linkedin.com/in/prince-bansal-p4",
    phone: "+91-743 394 0011",
    icon: UserCircle,
  },
  {
    name: "Customer Support Team",
    position: "24/7 Logistics Support",
    email: "info@blirapid.com",
    linkedin: "https://www.linkedin.com/company/bli-logistics",
    phone: "+91-968 744 8434",
    icon: Users,
  },
];

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BLI - Bansal Logistics of India",
  url: "https://blirapid.com",
  logo: "https://blirapid.com/lovable-uploads/8.png",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-968 744 8434",
      contactType: "customer service",
      email: "info@blirapid.com",
      areaServed: "IN",
      availableLanguage: ["en", "hi", "gu"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "206, Arihant Complex, Nr. Vishal Mega Mart",
    addressLocality: "Vapi",
    addressRegion: "Gujarat",
    postalCode: "396191",
    addressCountry: "IN",
  },
};

const ContactInfo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>

      <section
        id="contact-info"
        ref={sectionRef}
        className="bg-white py-20 sm:py-24 md:py-28"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* ── Header ── */}
          <div className="mb-14 sm:mb-16">
            <motion.p
              className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              Get In Touch
            </motion.p>

            <motion.h2
              id="contact-heading"
              className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#1a1a1a] uppercase tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="block">Contact Us</span>
              <span className="block mt-2 sm:mt-3">Today</span>
            </motion.h2>

            <motion.p
              className="text-[15px] text-gray-500 font-light leading-relaxed mt-4 max-w-xl"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have questions about our logistics services? Reach out for quick
              quotes, shipment tracking, or to discuss your transportation
              needs.
            </motion.p>
          </div>

          {/* ── Cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactPersons.map((person, index) => {
              const Icon = person.icon;
              return (
                <motion.div
                  key={index}
                  className="border border-gray-200 p-8 hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                >
                  <div className="flex flex-col items-start gap-5">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gray-50 border border-gray-200 flex items-center justify-center">
                      <Icon
                        className="w-7 h-7 text-[#1a1a1a]"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Name + Position */}
                    <div>
                      <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">
                        {person.name}
                      </h3>
                      <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                        {person.position}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gray-100" />

                    {/* Contact links */}
                    <div className="flex flex-col gap-3 w-full">
                      <a
                        href={`mailto:${person.email}`}
                        className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#FF7300] transition-colors duration-300 group"
                        aria-label={`Email ${person.name}`}
                      >
                        <Mail className="w-4 h-4 text-gray-400 group-hover:text-[#FF7300] transition-colors duration-300 flex-shrink-0" />
                        {person.email}
                      </a>

                      <a
                        href={`tel:${person.phone}`}
                        className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#FF7300] transition-colors duration-300 group"
                        aria-label={`Call ${person.name}`}
                      >
                        <Phone className="w-4 h-4 text-gray-400 group-hover:text-[#FF7300] transition-colors duration-300 flex-shrink-0" />
                        {person.phone}
                      </a>

                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#FF7300] transition-colors duration-300 group"
                        aria-label={`LinkedIn profile of ${person.name}`}
                      >
                        <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-[#FF7300] transition-colors duration-300 flex-shrink-0" />
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
