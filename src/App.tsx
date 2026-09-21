import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import ScrollManager from "@/components/ScrollManager";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Industrial from "./pages/users/Industrial";
import Producers from "./pages/users/Producers";
import Cultural from "./pages/users/Cultural";
import Marketing from "./pages/users/Marketing";

const App = () => (
  <ErrorBoundary>
    {/* Honour prefers-reduced-motion for every framer-motion animation */}
    <MotionConfig reducedMotion="user">
    <ThemeProvider>
      <LanguageProvider>
        <Toaster />
        <BrowserRouter>
          <ScrollManager />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/who-its-for/industrial" element={<Industrial />} />
            <Route path="/who-its-for/producers" element={<Producers />} />
            <Route path="/who-its-for/cultural" element={<Cultural />} />
            <Route path="/who-its-for/marketing" element={<Marketing />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
    </MotionConfig>
  </ErrorBoundary>
);

export default App;
