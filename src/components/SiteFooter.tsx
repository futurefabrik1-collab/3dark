import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

/**
 * Page footer shared by every route (it used to live inside the homepage's
 * contact section, so the legal pages had none). The legal links are required
 * to be easy to find (§ 5 DDG, Art. 12 DSGVO), so they are real, legible links
 * rather than faded 10px labels.
 */
const SiteFooter = () => {
  const { lang } = useLanguage();
  const t = translations.contact[lang];

  return (
    <footer className="px-6 pb-12">
      <div className="max-w-6xl mx-auto pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
              <span className="whitespace-nowrap">© {new Date().getFullYear()} 3DARK</span> —{" "}
              <span className="whitespace-nowrap">{t.serviceBy}</span>
            </p>
            <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground">
              <span className="whitespace-nowrap">Burnett &amp; Manhardt GbR</span> ·{" "}
              <span className="whitespace-nowrap">Klingenstraße 22</span> ·{" "}
              <span className="whitespace-nowrap">04229 Leipzig</span>
            </p>
          </div>
          <nav aria-label={t.legalNotice} className="flex items-center gap-6">
            <Link
              to="/impressum"
              className="text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline transition-colors py-2"
            >
              {t.legalNotice}
            </Link>
            <Link
              to="/datenschutz"
              className="text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline transition-colors py-2"
            >
              {t.privacy}
            </Link>
          </nav>
        </div>
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mt-6">
          {t.footerTagline}
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
