import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import SectorsSection from "@/components/SectorsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <SectorsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
