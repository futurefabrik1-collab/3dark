import UserLandingPage from "@/components/UserLandingPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const Cultural = () => {
  const { lang } = useLanguage();
  const t = translations.userPages[lang].cultural;

  return (
    <UserLandingPage
      title={t.title}
      subtitle={t.subtitle}
      challenge={t.challenge}
      approach={t.approach}
      benefits={t.benefits}
      icon={
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary">
          <rect x="9" y="12" width="30" height="27" stroke="currentColor" strokeWidth="2" />
          <path d="M9 12L24 6l15 6M18 21h12M18 27h12M18 33h6" stroke="currentColor" strokeWidth="2" />
        </svg>
      }
    />
  );
};

export default Cultural;
