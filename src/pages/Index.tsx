import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShowreelSection from "@/components/ShowreelSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import AboutWorkSection from "@/components/AboutWorkSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <ShowreelSection />
      <WhoItsForSection />
      <AboutWorkSection />
      
      {/* OLD SECTIONS - PLACEHOLDERS */}
      <ServicesSection />
      <IndustriesSection />
      
      <ProjectsSection />
      <ProcessSection />
      <ContactSection />
      <CookieConsent />
    </main>
  );
};

export default Index;
