import UserLandingPage from "@/components/UserLandingPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const Marketing = () => {
  const { lang } = useLanguage();
  const t = translations.userPages[lang].marketing;

  return (
    <UserLandingPage
      title={t.title}
      subtitle={t.subtitle}
      challenge={t.challenge}
      approach={t.approach}
      benefits={t.benefits}
      icon={
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary">
          <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="2" />
          <path d="M24 12v12l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      }
    />
  );
};

export default Marketing;
