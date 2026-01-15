import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Curtains from "./pages/Curtains";
import Blinds from "./pages/Blinds";
import Upholstery from "./pages/Upholstery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BlackoutCurtains from "./pages/products/BlackoutCurtains";
import SheerCurtains from "./pages/products/SheerCurtains";
import MotorizedCurtains from "./pages/products/MotorizedCurtains";
import RollerBlinds from "./pages/products/RollerBlinds";
import RomanBlinds from "./pages/products/RomanBlinds";
import ZebraBlinds from "./pages/products/ZebraBlinds";
import VelvetCurtains from "./pages/products/VelvetCurtains";
import VenetianBlinds from "./pages/products/VenetianBlinds";
import VerticalBlinds from "./pages/products/VerticalBlinds";
import SunscreenBlinds from "./pages/products/SunscreenBlinds";
import Gallery from "./pages/Gallery";
import Quote from "./pages/Quote";
import FAQPage from "./pages/FAQ";
import AdminAuth from "./pages/admin/Auth";
import AdminDashboard from "./pages/admin/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/curtains" element={<Curtains />} />
          <Route path="/blinds" element={<Blinds />} />
          <Route path="/upholstery" element={<Upholstery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/blackout-curtains" element={<BlackoutCurtains />} />
          <Route path="/products/sheer-curtains" element={<SheerCurtains />} />
          <Route path="/products/motorized-curtains" element={<MotorizedCurtains />} />
          <Route path="/products/roller-blinds" element={<RollerBlinds />} />
          <Route path="/products/roman-blinds" element={<RomanBlinds />} />
          <Route path="/products/zebra-blinds" element={<ZebraBlinds />} />
          <Route path="/products/velvet-curtains" element={<VelvetCurtains />} />
          <Route path="/products/venetian-blinds" element={<VenetianBlinds />} />
          <Route path="/products/vertical-blinds" element={<VerticalBlinds />} />
          <Route path="/products/sunscreen-blinds" element={<SunscreenBlinds />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/admin/auth" element={<AdminAuth />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
