import { useRef, useEffect, useState, memo } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Helmet } from "react-helmet-async";

import client1 from "../../public/lovable-uploads/clinets/1.png";
import client2 from "../../public/lovable-uploads/clinets/2.png";
import client3 from "../../public/lovable-uploads/clinets/3.png";
import client4 from "../../public/lovable-uploads/clinets/4.png";
import client5 from "../../public/lovable-uploads/clinets/5.png";
import client6 from "../../public/lovable-uploads/clinets/6.png";
import client7 from "../../public/lovable-uploads/clinets/7.png";
import client8 from "../../public/lovable-uploads/clinets/8.png";
import client9 from "../../public/lovable-uploads/clinets/9.png";
import client10 from "../../public/lovable-uploads/clinets/10.png";
import client11 from "../../public/lovable-uploads/clinets/11.png";
import client12 from "../../public/lovable-uploads/clinets/12.png";
import client13 from "../../public/lovable-uploads/clinets/13.png";
import client14 from "../../public/lovable-uploads/clinets/14.png";
import client15 from "../../public/lovable-uploads/clinets/15.png";
import client16 from "../../public/lovable-uploads/clinets/16.png";
import client17 from "../../public/lovable-uploads/clinets/17.png";
import client18 from "../../public/lovable-uploads/clinets/18.png";
import client19 from "../../public/lovable-uploads/clinets/19.png";
import client20 from "../../public/lovable-uploads/clinets/20.png";

const clientNames = [
  "Client 1",
  "Client 2",
  "Client 3",
  "Client 4",
  "Client 5",
  "Client 6",
  "Client 7",
  "Client 8",
  "Client 9",
  "Client 10",
  "Client 11",
  "Client 12",
  "Client 13",
  "Client 14",
  "Client 15",
  "Client 16",
  "Client 17",
  "Client 18",
  "Client 19",
  "Client 20",
];

const LogoItem = memo(({ brand, index }: { brand: any; index: number }) => (
  <div
    className="flex-shrink-0 mx-2 sm:mx-3 group"
    style={{
      animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
      animationDelay: `${index * 0.2}s`,
    }}
  >
    <div className="bg-white px-4 sm:px-5 lg:px-6 py-3 sm:py-4 group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 flex items-center gap-3 sm:gap-4 min-w-fit">
      <div className="flex-shrink-0">
        <img
          src={brand.logo}
          alt={brand.name || `BLI Client ${index + 1}`}
          className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
          loading="lazy"
          width="80"
          height="80"
        />
      </div>
    </div>
  </div>
));

const InfiniteSliderRow = memo(
  ({
    brands,
    direction,
    speed,
    waveOffset = 0,
    isInView,
  }: {
    brands: any[];
    direction: string;
    speed: number;
    waveOffset?: number;
    isInView: boolean;
  }) => {
    const duplicateCount = 5;
    const infiniteBrands: any[] = [];

    for (let i = 0; i < duplicateCount; i++) {
      infiniteBrands.push(
        ...brands.map((brand, index) => ({
          ...brand,
          uniqueId: `${brand.name}-${i}-${index}`,
        })),
      );
    }

    const animationClass = isInView
      ? direction === "left"
        ? "animate-scroll-left"
        : "animate-scroll-right"
      : "pause-animation";

    return (
      <div
        className="overflow-hidden py-2 sm:py-3 lg:py-4"
        style={{
          transform: `translateY(${Math.sin(waveOffset) * 5}px)`,
        }}
      >
        <div
          className={`flex items-center ${animationClass}`}
          style={{
            animationDuration: `${speed}s`,
            width: `${infiniteBrands.length * 160}px`,
          }}
        >
          {infiniteBrands.map((brand, index) => (
            <LogoItem key={brand.uniqueId} brand={brand} index={index} />
          ))}
        </div>
      </div>
    );
  },
);

const BrandLogoSlider = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const [hasStartedAnimating, setHasStartedAnimating] = useState(false);

  useEffect(() => {
    if (isInView && !hasStartedAnimating) {
      controls.start("visible");
      setHasStartedAnimating(true);
    } else if (!isInView && hasStartedAnimating) {
      controls.stop();
    }
  }, [isInView, controls, hasStartedAnimating]);

  const brands = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
    client11,
    client12,
    client13,
    client14,
    client15,
    client16,
    client17,
    client18,
    client19,
    client20,
  ].map((logo, index) => ({
    name: clientNames[index] || "",
    logo,
  }));

  const chunkSize = Math.ceil(brands.length / 3);
  const row1Brands = brands.slice(0, chunkSize);
  const row2Brands = brands.slice(chunkSize, chunkSize * 2);
  const row3Brands = brands.slice(chunkSize * 2);

  const clientsSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BLI - Bansal Logistics of India",
    description: "Trusted logistics partner for businesses across India",
    knowsAbout: "Logistics, Transportation, Supply Chain Management",
    member: brands.map((brand, index) => ({
      "@type": "Organization",
      name: brand.name || `BLI Client ${index + 1}`,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(clientsSchema)}
        </script>
      </Helmet>

      <div
        ref={containerRef}
        className="w-full bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 pb-16 sm:pb-18 lg:pb-20 pt-4 relative overflow-hidden"
        aria-label="BLI Clients Showcase"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-48 sm:w-60 lg:w-72 h-48 sm:h-60 lg:h-72 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-purple-200 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* ── Header ── */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Label */}
            <motion.p
              className="font-semibold uppercase tracking-widest mb-2 sm:mb-3 text-[11px] sm:text-xs lg:text-[14px] lg:leading-[17px] text-[#1C1825]"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              Our Clients
            </motion.p>

            {/* Heading */}
            <motion.h2
              className="font-bold uppercase tracking-normal mb-3 sm:mb-4 text-[24px] leading-[30px] sm:text-[36px] sm:leading-[42px] lg:text-[52px] lg:leading-[60px] text-black"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.1 },
                },
              }}
            >
              <span className="block">Trusted By</span>
              <span className="block">Leading Businesses</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="font-light max-w-2xl mx-auto text-sm sm:text-base lg:text-[20px] lg:leading-[29px] text-[#1C1825]"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.2 },
                },
              }}
            >
              Trusted by leading businesses across India. We partner with
              companies that value reliability, efficiency, and excellence in
              logistics.
            </motion.p>
          </div>

          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <InfiniteSliderRow
              brands={row1Brands}
              direction="left"
              speed={40}
              waveOffset={0}
              isInView={isInView}
            />
            <InfiniteSliderRow
              brands={row2Brands}
              direction="right"
              speed={25}
              waveOffset={Math.PI}
              isInView={isInView}
            />
            <InfiniteSliderRow
              brands={row3Brands}
              direction="left"
              speed={35}
              waveOffset={Math.PI / 2}
              isInView={isInView}
            />
          </div>
        </div>

        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-20%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-20%); }
            100% { transform: translateX(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-6px) rotate(1deg); }
          }
          .animate-scroll-left {
            animation: scroll-left linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right linear infinite;
          }
          .pause-animation {
            animation-play-state: paused !important;
          }
          .animate-scroll-left, .animate-scroll-right {
            transition: transform 0.3s ease-out;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-scroll-left, .animate-scroll-right {
              animation-duration: 100s !important;
            }
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-2px); }
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default memo(BrandLogoSlider);
