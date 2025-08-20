import client1 from "../../public/lovable-uploads/clinets/1.png"
import client2 from "../../public/lovable-uploads/clinets/2.png"
import client4 from "../../public/lovable-uploads/clinets/4.png"
import client5 from "../../public/lovable-uploads/clinets/5.png"
import client6 from "../../public/lovable-uploads/clinets/6.png"
import client7 from "../../public/lovable-uploads/clinets/7.png"
import client8 from "../../public/lovable-uploads/clinets/8.png"
import client9 from "../../public/lovable-uploads/clinets/9.png"
import client3 from "../../public/lovable-uploads/clinets/3.png"
import client10 from "../../public/lovable-uploads/clinets/10.png"
import client11 from "../../public/lovable-uploads/clinets/11.png"
import client12 from "../../public/lovable-uploads/clinets/12.png"
import client13 from "../../public/lovable-uploads/clinets/13.png"
import client14 from "../../public/lovable-uploads/clinets/14.png"
import client15 from "../../public/lovable-uploads/clinets/15.png"
import client16 from "../../public/lovable-uploads/clinets/16.png"
import client17 from "../../public/lovable-uploads/clinets/17.png"
import client18 from "../../public/lovable-uploads/clinets/18.png"
import client19 from "../../public/lovable-uploads/clinets/19.png"
import client20 from "../../public/lovable-uploads/clinets/20.png"
import { motion } from "framer-motion";

const BrandLogoSlider = () => {
    // Brand data with square logo placeholders for better icon display
    // const brands = [
    //     { name: 'Prince Ware', logo: client1 },
    //     { name: 'CELLO', logo: client2 },
    //     { name: 'Luminous', logo: client3 },
    //     { name: 'Mondelez', logo: client4 },
    //     { name: 'Budweiser', logo: client5 },
    //     { name: 'H & M', logo: client6 },
    //     { name: 'Coca-Cola', logo: client7 },
    //     { name: 'Cadbury', logo: client8 },
    //     { name: 'SYSKA LED', logo: client9 },
    //     { name: 'Panasonic', logo: client10 },
    //     { name: 'Marico', logo: client11 },
    //     { name: "Kellogg's", logo: client12 },
    //     { name: 'Unilever', logo: client13 },
    //     { name: 'ITC', logo: client14 },
    //     { name: 'JSW', logo: client15 },
    //     { name: 'IPM', logo: client16 },
    //     { name: 'Formulla Bharat', logo: client17 },
    //     { name: 'OBOON', logo: client18 },
    //     { name: 'GHARI', logo: client19 },
    //     { name: 'RNPL', logo: client20 }
    // ];
    const brands = [
        { name: '', logo: client1 },
        { name: '', logo: client2 },
        { name: '', logo: client3 },
        { name: '', logo: client4 },
        { name: '', logo: client5 },
        { name: '', logo: client6 },
        { name: '', logo: client7 },
        { name: '', logo: client8 },
        { name: '', logo: client9 },
        { name: '', logo: client10 },
        { name: '', logo: client11 },
        { name: '', logo: client12 },
        { name: '', logo: client13 },
        { name: '', logo: client14 },
        { name: '', logo: client15 },
        { name: '', logo: client16 },
        { name: '', logo: client17 },
        { name: '', logo: client18 },
        { name: '', logo: client19 },
        { name: '', logo: client20 },
    ];
    const LogoItem = ({ brand, index }) => (
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
                        alt={brand.name}
                        className="h-20 w-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                    />
                </div>
                <span className="font-bold text-gray-900 text-lg whitespace-nowrap tracking-tight">
                    {brand.name}
                </span>
            </div>
        </div>
    );

    const InfiniteSliderRow = ({ brands, direction, speed, waveOffset = 0 }) => {
        // Create enough duplicates for truly seamless infinite scroll
        const duplicateCount = 5;
        const infiniteBrands = [];

        for (let i = 0; i < duplicateCount; i++) {
            infiniteBrands.push(...brands.map((brand, index) => ({
                ...brand,
                uniqueId: `${brand.name}-${i}-${index}`
            })));
        }
        return (
            <div
                className="overflow-hidden py-4"
                style={{
                    transform: `translateY(${Math.sin(waveOffset) * 5}px)`,
                }}
            >
                <div
                    className={`flex items-center ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
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
            </div >
        );
    };
    // Split brands into 3 rows
    // Split brands into 3 equal chunks for rows
    const chunkSize = Math.ceil(brands.length / 3);
    const row1Brands = brands.slice(0, chunkSize);
    const row2Brands = brands.slice(chunkSize, chunkSize * 2);
    const row3Brands = brands.slice(chunkSize * 2);

    return (
        <div className="w-full bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-[#113C6A] mb-6">

                    </h2>
                    <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#113C6A] mb-3">
                        Our Clients
                    </motion.h2>
                    <p className="text-[#0a213a]/90 max-w-3xl mx-auto px-4 text-lg leading-relaxed">
                        Forward-thinking brands trust AppFuture to drive scalable growth and engagement.
                        We partner with companies ready to embrace the future of digital marketing.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Row 1: Left to Right */}
                    <InfiniteSliderRow
                        brands={row1Brands}
                        direction="left"
                        speed={40}
                        waveOffset={0}
                    />

                    {/* Row 2: Right to Left (faster) */}
                    <InfiniteSliderRow
                        brands={row2Brands}
                        direction="right"
                        speed={25}
                        waveOffset={Math.PI}
                    />

                    {/* Row 3: Left to Right */}
                    <InfiniteSliderRow
                        brands={row3Brands}
                        direction="left"
                        speed={35}
                        waveOffset={Math.PI / 2}
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
        
        /* Smooth wave effect */
        .animate-scroll-left, .animate-scroll-right {
          transition: transform 0.3s ease-out;
        }
        
        /* Ensure smooth performance */
        * {
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          -webkit-transform: translate3d(0, 0, 0);
          -moz-transform: translate3d(0, 0, 0);
        }
      `}</style>
        </div>
    );
};

export default BrandLogoSlider;