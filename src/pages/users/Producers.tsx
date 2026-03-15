import UserLandingPage from "@/components/UserLandingPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const Producers = () => {
  const { lang } = useLanguage();
  const t = translations.userPages[lang].producers;

  return (
    <UserLandingPage
      title={t.title}
      subtitle={t.subtitle}
      challenge={t.challenge}
      approach={t.approach}
      benefits={t.benefits}
      icon={
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary">
          <rect x="6" y="15" width="36" height="21" rx="1" stroke="currentColor" strokeWidth="2" />
          <path d="M18 24l9 6V18l-9 6z" fill="currentColor" />
        </svg>
      }
    />
  );
};

export default Producers;
