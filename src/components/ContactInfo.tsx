import React, { useRef } from 'react';
import { Mail, Linkedin, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ContactInfo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // BLI contact information
  const contactPersons = [
    {
      name: "Prince Bansal",
      position: "Managing Director",
      image: "/lovable-uploads/7.png", // Replace with actual image
      email: "info@blirapid.com",
      linkedin: "https://www.linkedin.com/company/bli-logistics",
      phone: "+91-968 744 8434"
    },
    {
      name: "Customer Support Team",
      position: "24/7 Logistics Support",
      image: "/lovable-uploads/7.png", // Replace with actual image
      email: "info@blirapid.com",
      linkedin: "https://www.linkedin.com/company/bli-logistics",
      phone: "+91-968 744 8444"
    }
  ];

  // Structured data for SEO
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BLI - Bansal Logistics of India",
    "url": "https://www.blirapid.com",
    "logo": "https://www.blirapid.com/lovable-uploads/8.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-968 744 8434",
        "contactType": "customer service",
        "email": "info@blirapid.com",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi", "gu"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "206, Arihant Complex, Nr. Vishal Mega Mart",
      "addressLocality": "Vapi",
      "addressRegion": "Gujarat",
      "postalCode": "396191",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/bli-logistics",
      "https://www.facebook.com/blilogistics",
      "https://twitter.com/blilogistics"
    ]
  };

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
        className="bg-gradient-to-b from-[#FFFDF7] to-[#113C6A] text-[#FFFDF7] relative py-[30px] md:py-[50px]"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10 md:mb-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="inline-block mb-3 px-3 py-1 bg-[#F8FFFF] text-[#113C6A] rounded-full text-sm font-medium"
              variants={itemVariants}
            >
              Get In Touch
            </motion.div>
            <motion.h2
              id="contact-heading"
              className="text-3xl md:text-4xl font-bold mb-4 text-[#113C6A]"
              variants={itemVariants}
            >
              Contact Us Today
            </motion.h2>
            <motion.p
              className="text-[#0a213a]/90 text-lg max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Have questions about our logistics services? Reach out to our team for quick quotes, shipment tracking, or to discuss your transportation needs.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Contact Cards */}
            {contactPersons.map((person, index) => (
              <motion.div
                key={index}
                className="bg-[#F8FFFF] rounded-xl shadow-xl p-6 md:p-8 border border-[#185EAA]/20 hover:shadow-2xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-[#F8FFFF] shadow-md"
                  />
                  <h3 className="text-xl font-bold text-[#113C6A]">{person.name}</h3>
                  <p className="text-[#21221C]/70 mb-4">{person.position}</p>
                  <div className="flex flex-col space-y-3">
                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center text-[#113C6A] hover:text-[#FF7300] transition-colors"
                      aria-label={`Email ${person.name}`}
                    >
                      <Mail className="w-5 h-5 mr-2 text-[#185EAA]" />
                      {person.email}
                    </a>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#113C6A] hover:text-[#FF7300] transition-colors"
                      aria-label={`LinkedIn profile of ${person.name}`}
                    >
                      <Linkedin className="w-5 h-5 mr-2 text-[#185EAA]" />
                      LinkedIn Profile
                    </a>
                    <a
                      href={`tel:${person.phone}`}
                      className="flex items-center text-[#113C6A] hover:text-[#FF7300] transition-colors"
                      aria-label={`Call ${person.name}`}
                    >
                      <Phone className="w-5 h-5 mr-2 text-[#185EAA]" />
                      {person.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;