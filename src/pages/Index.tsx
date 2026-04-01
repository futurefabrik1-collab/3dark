import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShowreelSection from "@/components/ShowreelSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import AboutWorkSection from "@/components/AboutWorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import MethodEquipmentSection from "@/components/MethodEquipmentSection";
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
      
      <MethodEquipmentSection />
      <ProjectsSection />
      <ProcessSection />
      <ContactSection />
      <CookieConsent />
    </main>
  );
};

export default Index;
