import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { lang } = useLanguage();
  const t = translations.cookie[lang];

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
    // Disable Google Analytics
    window['ga-disable-G-451DTY0R49'] = true;
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto bg-background border border-border shadow-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-foreground mb-2">
                  {t.title}
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  {t.body}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={declineCookies}
                  className="px-4 py-2 text-xs text-muted-foreground hover:text-foreground border border-border hover:border-foreground transition-colors"
                >
                  {t.decline}
                </button>
                <button
                  onClick={acceptCookies}
                  className="px-6 py-2 text-xs bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                >
                  {t.accept}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
