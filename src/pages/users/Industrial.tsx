import UserLandingPage from "@/components/UserLandingPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const Industrial = () => {
  const { lang } = useLanguage();
  const t = translations.userPages[lang].industrial;

  return (
    <UserLandingPage
      title={t.title}
      subtitle={t.subtitle}
      challenge={t.challenge}
      approach={t.approach}
      benefits={t.benefits}
      icon={
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary">
          <rect x="6" y="18" width="36" height="24" stroke="currentColor" strokeWidth="2" />
          <path d="M12 18V9h6v9M24 18V12h6v6M36 18V15" stroke="currentColor" strokeWidth="2" />
        </svg>
      }
    />
  );
};

export default Industrial;
