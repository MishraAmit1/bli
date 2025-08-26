import React, { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, lazy, Suspense, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { PageLoader } from "./components/LoadingAnimation";

const About = lazy(() => import("./pages/About"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const ContactForm = lazy(() => import("./pages/ContactForm"));
const Services = lazy(() => import("./pages/Services"));
const Industries = lazy(() => import("./pages/Industries"));
const Resources = lazy(() => import("./pages/Resources"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const FAQs = lazy(() => import("./pages/FAQs"));
const Downloads = lazy(() => import("./pages/Downloads"));
const IndustryReports = lazy(() => import("./pages/IndustryReports"));
const TermsofService = lazy(() => import("./pages/TermsofService"));

// Lazy load service pages
const FullTruckload = lazy(() => import("./pages/FullTruckload"));
const PartLoad = lazy(() => import("./pages/PartLoad"));
const ThirdPartyLogistics = lazy(() => import("./pages/ThirdPartyLogistics"));
const WarehousingDistribution = lazy(() => import("./pages/WarehousingDistribution"));
const LocalRegionalDispatch = lazy(() => import("./pages/LocalRegionalDispatch"));
const RailFreightSolutions = lazy(() => import("./pages/RailFreightSolutions"));
const AirCargoServices = lazy(() => import("./pages/AirCargoServices"));
const RealTimeSupport = lazy(() => import("./pages/RealTimeSupport"));
// Define Props and State interfaces
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage?: string;
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: ''
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      errorMessage: error.toString()
    };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FFFDF7] to-[#F8FFFF]">
          <div className="text-center p-8 max-w-lg mx-auto">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FF7300]/10 rounded-full mb-4">
                <svg className="w-10 h-10 text-[#FF7300]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-[#113C6A] mb-4">Oops! Something went wrong</h1>
            <p className="text-[#185EAA] mb-8">We're sorry for the inconvenience. Our team has been notified.</p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#FF7300] to-[#FF7729] text-white rounded-lg hover:shadow-lg transition-all"
              >
                🔄 Refresh Page
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="w-full px-6 py-3 bg-white border-2 border-[#185EAA] text-[#185EAA] rounded-lg hover:bg-[#185EAA] hover:text-white transition-all"
              >
                🏠 Go to Homepage
              </button>
            </div>
            <div className="mt-8 pt-8 border-t border-[#185EAA]/20">
              <p className="text-sm text-[#185EAA] mb-2">Need immediate assistance?</p>
              <a href="tel:+919687448434" className="text-[#FF7300] font-semibold hover:underline">
                📞 +91-968 744 8434
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000,
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  }));
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary>
          <BrowserRouter>
            <ScrollToTop />
            <Toaster />
            <Sonner />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Main Routes - No lazy loading for homepage */}
                <Route path="/" element={<Index />} />

                {/* Service Routes */}
                <Route path="/services" element={<Services />} />
                <Route path="/services/full-truckload" element={<FullTruckload />} />
                <Route path="/services/part-load" element={<PartLoad />} />
                <Route path="/services/3pl" element={<ThirdPartyLogistics />} />
                <Route path="/services/warehousing" element={<WarehousingDistribution />} />
                <Route path="/services/local-dispatch" element={<LocalRegionalDispatch />} />
                <Route path="/services/rail-freight" element={<RailFreightSolutions />} />
                <Route path="/services/air-cargo" element={<AirCargoServices />} />
                <Route path="/services/real-time-support" element={<RealTimeSupport />} />

                {/* Company Routes */}
                <Route path="/about" element={<About />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/contact" element={<ContactForm />} />

                {/* Resource Routes */}
                <Route path="/resources" element={<Resources />} />
                <Route path="/resources/blogs" element={<Blogs />} />
                <Route path="/resources/blogs/:slug" element={<BlogPost />} />
                <Route path="/resources/faqs" element={<FAQs />} />
                <Route path="/resources/downloads" element={<Downloads />} />
                <Route path="/resources/reports" element={<IndustryReports />} />

                {/* Legal Routes */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsofService />} />
                <Route path="/terms" element={<TermsofService />} />

                {/* 404 - Always at the end */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ErrorBoundary>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;