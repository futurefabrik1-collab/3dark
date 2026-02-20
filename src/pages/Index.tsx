import HeroSection from "@/components/HeroSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <WhoItsForSection />
      <HowWeWorkSection />
      
      {/* OLD SECTIONS - PLACEHOLDERS */}
      <AboutSection />
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
