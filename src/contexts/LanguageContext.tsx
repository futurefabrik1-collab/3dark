import { createContext, useContext, useState, ReactNode } from "react";
import type { Lang } from "@/i18n/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  toggle: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem("3dark-lang");
      if (stored === "en" || stored === "de") return stored;
    } catch {}
    // Default to DE if browser language is German, otherwise EN
    const browserLang = navigator.language?.toLowerCase();
    return browserLang?.startsWith("de") ? "de" : "en";
  });

  const toggle = () => {
    setLang((prev) => {
      const next = prev === "en" ? "de" : "en";
      try { localStorage.setItem("3dark-lang", next); } catch {}
      return next;
    });
  };

  const handleSetLang = (l: Lang) => {
    setLang(l);
    try { localStorage.setItem("3dark-lang", l); } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
