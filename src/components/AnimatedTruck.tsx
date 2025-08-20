import { motion } from "framer-motion";
import { Truck } from "lucide-react";

export const AnimatedTruck = () => {
    return (
        <div className="relative w-full h-8 overflow-hidden">
            <motion.div
                className="absolute"
                initial={{ x: "-100%" }}
                animate={{ x: "100vw" }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "linear"
                }}
            >
                <Truck className="text-[#FF7729] w-8 h-8" />
            </motion.div>
        </div>
    );
};