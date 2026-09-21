import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const NotFound = () => {
  const { lang } = useLanguage();
  const seo = translations.seo[lang].notFound;
  const t = translations.notFound[lang];

  return (
    <>
      <Seo title={seo.title} description={seo.description} noindex />
      <Navbar />
      <main id="main" tabIndex={-1} className="bg-background min-h-[80vh] flex items-center px-6 outline-none">
        <div className="max-w-6xl mx-auto w-full pt-24 pb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">{t.label}</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6 break-words hyphens-auto">{t.h1}</h1>
          <p className="text-muted-foreground font-light mb-10 max-w-xl">{t.body}</p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 border border-primary px-6 py-3 font-mono text-sm tracking-[0.15em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {t.home}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default NotFound;
