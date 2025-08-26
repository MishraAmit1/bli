import { motion } from 'framer-motion';

// Small inline loading animation for components
export const LoadingAnimation = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative flex items-center space-x-2">
        {/* Truck Icon with packages */}
        <motion.div
          className="flex items-center"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Packages */}
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-[#FF7300] rounded-sm mr-1"
              animate={{
                y: [0, -8, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Arrow */}
        <motion.div
          className="text-[#185EAA]"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.div>

        {/* Destination Pin */}
        <motion.div
          className="w-4 h-4 text-[#113C6A]"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -10, 10, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          📍
        </motion.div>
      </div>
    </div>
  );
};

// Full page loader with BLI branding
export const PageLoader = () => (
  <div className="fixed inset-0 bg-gradient-to-b from-[#113C6A] to-[#185EAA] flex items-center justify-center z-50">
    <div className="text-center">
      <div className="relative">
        {/* Animated Truck SVG */}
        <div className="w-32 h-32 mx-auto mb-6">
          <svg viewBox="0 0 120 80" className="w-full h-full">
            {/* Truck Body */}
            <motion.rect
              x="10" y="30" width="50" height="30"
              fill="#FFFDF7"
              rx="2"
              initial={{ x: -120 }}
              animate={{ x: 10 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* Truck Cabin */}
            <motion.rect
              x="60" y="20" width="25" height="40"
              fill="#FF7300"
              rx="2"
              initial={{ x: -60 }}
              animate={{ x: 60 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            />

            {/* Window */}
            <motion.rect
              x="65" y="25" width="15" height="15"
              fill="#185EAA"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            />

            {/* Wheels */}
            <motion.circle
              cx="25" cy="65" r="6"
              fill="#113C6A"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="45" cy="65" r="6"
              fill="#113C6A"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="70" cy="65" r="6"
              fill="#113C6A"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />

            {/* BLI Text on truck */}
            <motion.text
              x="35" y="48"
              fill="#FF7300"
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              BLI
            </motion.text>

            {/* Motion Lines */}
            <motion.line
              x1="0" y1="55" x2="10" y2="55"
              stroke="#FF7300"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
            />
            <motion.line
              x1="0" y1="45" x2="8" y2="45"
              stroke="#FF7300"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 0.5 }}
            />
          </svg>
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-white text-xl font-bold mb-3">Loading BLI Logistics</h3>
          <div className="flex items-center justify-center space-x-1">
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-[#FF7300] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Loading Progress Bar */}
          <div className="mt-4 w-48 h-1 bg-white/20 rounded-full overflow-hidden mx-auto">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF7300] to-[#FF7729]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

// Small spinner for buttons and inline loading
export const Spinner = ({ size = "sm", color = "white" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  const colorClasses = {
    white: "border-white",
    orange: "border-[#FF7300]",
    blue: "border-[#185EAA]"
  };

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-t-transparent rounded-full animate-spin`} />
  );
};

export default LoadingAnimation;