import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import { Truck, Package, MapPin, Home, ArrowLeft, Navigation, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="min-h-[100vh] bg-gradient-to-b from-[#FFFDF7] to-[#F8FFFF] relative overflow-hidden py-40">

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Moving Truck Animation */}
          <div className="absolute top-20 animate-[drive_15s_linear_infinite]">
            <Truck className="h-16 w-16 text-[#FF7300]/20" />
          </div>

          {/* Floating Packages */}
          <div className="absolute top-40 right-20 animate-bounce">
            <Package className="h-12 w-12 text-[#185EAA]/20" />
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce delay-150">
            <Package className="h-10 w-10 text-[#FF7300]/20" />
          </div>
          <div className="absolute top-60 right-40 animate-bounce delay-300">
            <Package className="h-8 w-8 text-[#113C6A]/20" />
          </div>

          {/* Road/Path Pattern */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-32 opacity-10" viewBox="0 0 1440 120">
              <path
                fill="#113C6A"
                d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-4">
          <div className="text-center max-w-2xl mx-auto">

            {/* Lost Truck Illustration */}
            <div className="mb-8 relative">
              <div className="inline-flex items-center justify-center">
                {/* Main Truck with Question Mark */}
                <div className="relative">
                  <Truck className="h-32 w-32 text-[#185EAA]" strokeWidth={1.5} />
                  <div className="absolute -top-4 -right-4 bg-[#FF7300] rounded-full p-2 animate-pulse">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Confused GPS Pin */}
                <div className="ml-4 animate-[spin_3s_linear_infinite]">
                  <MapPin className="h-12 w-12 text-[#FF7300]" />
                </div>
              </div>

              {/* Question Marks */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <span className="text-6xl text-[#FF7300]/30 animate-pulse">?</span>
              </div>
            </div>

            {/* 404 Text */}
            <div className="mb-6">
              <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#113C6A] to-[#185EAA] bg-clip-text text-transparent">
                404
              </h1>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="h-1 w-8 bg-[#FF7300]"></div>
                <Navigation className="h-5 w-5 text-[#FF7300]" />
                <div className="h-1 w-8 bg-[#FF7300]"></div>
              </div>
            </div>
            <div className="absolute top-20 animate-[drive_15s_linear_infinite]">
              <Truck className="h-16 w-16 text-[#FF7300]/20" />
            </div>
            {/* Error Message */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#113C6A] mb-4">
              Oops! Delivery Route Not Found
            </h2>

            <p className="text-lg text-[#185EAA] mb-3">
              Looks like our truck took a wrong turn at <span className="font-semibold text-[#FF7300]">{location.pathname}</span>
            </p>

            <p className="text-[#113C6A]/70 mb-8 max-w-md mx-auto">
              Don't worry! Even the best logistics companies occasionally lose track.
              Let's get you back on the right route.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF7300] to-[#FF7729] text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Home className="h-5 w-5" />
                <span className="font-semibold">Back to Home</span>
              </Link>

              <button
                onClick={() => window.history.back()}
                className="group flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#185EAA] text-[#185EAA] rounded-lg hover:bg-[#185EAA] hover:text-white transition-all duration-200"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="font-semibold">Go Back</span>
              </button>
            </div>

            {/* Help Section */}
            <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-[#185EAA]/20">
              <p className="text-[#113C6A] font-semibold mb-3">
                Need immediate assistance?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <a
                  href="tel:+919687448434"
                  className="text-[#FF7300] hover:text-[#FF7729] font-medium flex items-center gap-2"
                >
                  <Package className="h-4 w-4" />
                  Track Your Shipment
                </a>
                <span className="text-[#185EAA]/30 hidden sm:block">|</span>
                <Link
                  to="/contact"
                  className="text-[#185EAA] hover:text-[#113C6A] font-medium flex items-center gap-2"
                >
                  <Truck className="h-4 w-4" />
                  Contact Support
                </Link>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="mt-8 text-xs text-[#113C6A]/50">
              <p>Fun Fact: BLI successfully delivers to 500+ destinations across India!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes drive {
          0% {
            transform: translateX(-100px);
          }
          100% {
            transform: translateX(calc(100vw + 100px));
          }
        }
      `}</style>
    </PageLayout>
  );
};

export default NotFound;