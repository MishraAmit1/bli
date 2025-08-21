
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FireCatProject from "./pages/FireCatProject";
import SportRetailProject from "./pages/SportRetailProject";
import WorkwearProject from "./pages/WorkwearProject";
import HockeyProject from "./pages/HockeyProject";
import PetProject from "./pages/PetProject";
import TechDetails from "./pages/TechDetails";
import DevelopmentProcess from "./pages/DevelopmentProcess";
import About from "./pages/About";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import ContactForm from "./components/ContactForm";
import FullTruckload from "./pages/FullTruckload";
import PartLoad from "./pages/PartLoad";
import ThirdPartyLogistics from "./pages/ThirdPartyLogistics";
import WarehousingDistribution from "./pages/WarehousingDistribution";
import LocalRegionalDispatch from "./pages/LocalRegionalDispatch";
import RailFreightSolutions from "./pages/RailFreightSolutions";
import AirCargoServices from "./pages/AirCargoServices";
import RealTimeSupport from "./pages/RealTimeSupport";
import Services from "./pages/Services";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/full-truckload" element={<FullTruckload />} />
            <Route path="/services/part-load" element={<PartLoad />} />
            <Route path="/services/3pl" element={<ThirdPartyLogistics />} />
            <Route path="/services/warehousing" element={<WarehousingDistribution />} />
            <Route path="/services/local-dispatch" element={<LocalRegionalDispatch />} />
            <Route path="/services/rail-freight" element={<RailFreightSolutions />} />
            <Route path="/services/air-cargo" element={<AirCargoServices />} />
            <Route path="/services/real-time-support" element={<RealTimeSupport />} />
            <Route path="/projects/workwear" element={<WorkwearProject />} />
            <Route path="/projects/hockey" element={<HockeyProject />} />
            <Route path="/projects/pet-tracker" element={<PetProject />} />
            <Route path="/tech-details" element={<TechDetails />} />
            <Route path="/development-process" element={<DevelopmentProcess />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
