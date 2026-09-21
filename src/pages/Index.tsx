import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShowreelSection from "@/components/ShowreelSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import AboutWorkSection from "@/components/AboutWorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import MethodEquipmentSection from "@/components/MethodEquipmentSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import Seo from "@/components/Seo";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const Index = () => {
  const { lang } = useLanguage();
  const seo = translations.seo[lang].home;

  return (
    <>
      <Seo title={seo.title} description={seo.description} path="/" />
      <Navbar />
      <main id="main" tabIndex={-1} className="bg-background min-h-screen outline-none">
      <HeroSection />
      <ShowreelSection />
      <WhoItsForSection />
      <AboutWorkSection />
      <MethodEquipmentSection />
      <ProjectsSection />
      <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
