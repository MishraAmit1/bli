import { useRef, useEffect, useState, memo } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Import all client logos
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

// Define client names for better SEO and accessibility
const clientNames = [
    "Client 1", "Client 2", "Client 3", "Client 4", "Client 5",
    "Client 6", "Client 7", "Client 8", "Client 9", "Client 10",
    "Client 11", "Client 12", "Client 13", "Client 14", "Client 15",
    "Client 16", "Client 17", "Client 18", "Client 19", "Client 20"
];

// Memoized logo item component
const LogoItem = memo(({ brand, index }) => (
    <div
        className="flex-shrink-0 mx-3 group"
        style={{
            animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
            animationDelay: `${index * 0.2}s`
        }}
    >
        <div className="bg-white px-6 py-4 group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 flex items-center gap-4 min-w-fit">
            <div className="flex-shrink-0">
                <img
                    src={brand.logo}
                    alt={brand.name || `BLI Client ${index + 1}`}
                    className="h-20 w-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    width="80"
                    height="80"
                />
            </div>
        </div>
    </div>
));

// Memoized infinite slider row component
const InfiniteSliderRow = memo(({ brands, direction, speed, waveOffset = 0, isInView }) => {
    // Create enough duplicates for truly seamless infinite scroll
    const duplicateCount = 5;
    const infiniteBrands = [];

    for (let i = 0; i < duplicateCount; i++) {
        infiniteBrands.push(...brands.map((brand, index) => ({
            ...brand,
            uniqueId: `${brand.name}-${i}-${index}`
        })));
    }

    // Pause animation when not in view
    const animationClass = isInView
        ? (direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right')
        : 'pause-animation';

    return (
        <div
            className="overflow-hidden py-4"
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
                    <LogoItem
                        key={brand.uniqueId}
                        brand={brand}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
});

const BrandLogoSlider = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.2 });
    const controls = useAnimation();
    const [hasStartedAnimating, setHasStartedAnimating] = useState(false);

    // Start animations when in view
    useEffect(() => {
        if (isInView && !hasStartedAnimating) {
            controls.start("visible");
            setHasStartedAnimating(true);
        } else if (!isInView && hasStartedAnimating) {
            // Optional: pause animations when out of view
            controls.stop();
        }
    }, [isInView, controls, hasStartedAnimating]);

    // Create brands array with names
    const brands = [
        client1, client2, client3, client4, client5,
        client6, client7, client8, client9, client10,
        client11, client12, client13, client14, client15,
        client16, client17, client18, client19, client20
    ].map((logo, index) => ({
        name: clientNames[index] || '',
        logo
    }));

    // Split brands into 3 equal chunks for rows
    const chunkSize = Math.ceil(brands.length / 3);
    const row1Brands = brands.slice(0, chunkSize);
    const row2Brands = brands.slice(chunkSize, chunkSize * 2);
    const row3Brands = brands.slice(chunkSize * 2);

    // SEO structured data
    const clientsSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "BLI - Bansal Logistics of India",
        "description": "Trusted logistics partner for businesses across India",
        "knowsAbout": "Logistics, Transportation, Supply Chain Management",
        "member": brands.map((brand, index) => ({
            "@type": "Organization",
            "name": brand.name || `BLI Client ${index + 1}`
        }))
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
                className="w-full bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 pb-20 pt-4 relative overflow-hidden"
                aria-label="BLI Clients Showcase"
            >
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#113C6A] mb-3"
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                        >
                            Our Clients
                        </motion.h2>
                        <motion.p
                            className="text-[#0a213a]/90 max-w-3xl mx-auto px-4 text-lg leading-relaxed"
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                            }}
                        >
                            Trusted by leading businesses across India. We partner with companies that value reliability, efficiency, and excellence in logistics.
                        </motion.p>
                    </div>

                    <div className="md:space-y-4">
                        {/* Row 1: Left to Right */}
                        <InfiniteSliderRow
                            brands={row1Brands}
                            direction="left"
                            speed={40}
                            waveOffset={0}
                            isInView={isInView}
                        />

                        {/* Row 2: Right to Left (faster) */}
                        <InfiniteSliderRow
                            brands={row2Brands}
                            direction="right"
                            speed={25}
                            waveOffset={Math.PI}
                            isInView={isInView}
                        />

                        {/* Row 3: Left to Right */}
                        <InfiniteSliderRow
                            brands={row3Brands}
                            direction="left"
                            speed={35}
                            waveOffset={Math.PI / 2}
                            isInView={isInView}
                        />
                    </div>
                </div>

                {/* Enhanced CSS animations */}
                <style>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-20%);
            }
          }
          
          @keyframes scroll-right {
            0% {
              transform: translateX(-20%);
            }
            100% {
              transform: translateX(0);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-6px) rotate(1deg);
            }
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
          
          /* Smooth wave effect */
          .animate-scroll-left, .animate-scroll-right {
            transition: transform 0.3s ease-out;
          }
          
          /* Reduce animation in prefers-reduced-motion mode */
          @media (prefers-reduced-motion: reduce) {
            .animate-scroll-left, .animate-scroll-right {
              animation-duration: 100s !important;
            }
            
            @keyframes float {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-2px);
              }
            }
          }
        `}</style>
            </div>
        </>
    );
};

export default memo(BrandLogoSlider);