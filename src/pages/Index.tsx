import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShowreelSection from "@/components/ShowreelSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import AboutWorkSection from "@/components/AboutWorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import MethodEquipmentSection from "@/components/MethodEquipmentSection";
import ContactSection from "@/components/ContactSection";
import CookieConsent from "@/components/CookieConsent";
import Seo from "@/components/Seo";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const Index = () => {
  const { lang } = useLanguage();
  const seo = translations.seo[lang].home;

  return (
    <main className="bg-background min-h-screen">
      <Seo title={seo.title} description={seo.description} path="/" />
      <Navbar />
      <HeroSection />
      <ShowreelSection />
      <WhoItsForSection />
      <AboutWorkSection />
      
      <MethodEquipmentSection />
      <ProjectsSection />
      <ContactSection />
      <CookieConsent />
    </main>
  );
};

export default Index;
