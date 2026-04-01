import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { getRandomInViewAnimation } from "@/utils/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const NAV_HINTS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/>
      </svg>
    ),
    label: "Drag to orbit",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 00-4 4v6a4 4 0 008 0V6a4 4 0 00-4-4z"/>
        <path d="M8 12a4 4 0 008 0M12 16v4M8 20h8"/>
        <path d="M10 8h.01M14 8h.01"/>
      </svg>
    ),
    label: "Scroll to zoom",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    label: "Right-click to pan",
  },
];

const ShowreelSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();
  const t = translations.showreel[lang];
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="showreel" className="py-32 px-6 relative overflow-hidden bg-background">
      <div className="absolute inset-0">
        <img src="/images/webp/art-installation.webp" alt="" className="w-full h-full object-cover opacity-10 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      <div className="absolute inset-0 industrial-grid opacity-10" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            {t.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground max-w-2xl mx-auto mb-4">
            {t.h2}
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            {t.body}
          </p>
        </motion.div>

        <motion.div
          {...getRandomInViewAnimation(isInView, 0.3)}
          className="mt-12"
        >
          <div className="neon-border overflow-hidden relative">
            {/* iframe — pointer events locked unless active */}
            <iframe
              src="https://splatpipe-cdn.b-cdn.net/IBUG_2025_v6/index.html"
              width="100%"
              height="500"
              frameBorder="0"
              allow="accelerometer; gyroscope; xr-spatial-tracking"
              allowFullScreen
              className="block w-full"
              style={{ pointerEvents: active ? "auto" : "none" }}
            />

            {/* Inactive overlay */}
            <AnimatePresence>
              {!active && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setActive(true)}
                  className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
                  style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(2px)" }}
                >
                  {/* Nav hints */}
                  <div className="flex items-center gap-8 md:gap-12 mb-8">
                    {NAV_HINTS.map((hint) => (
                      <div key={hint.label} className="flex flex-col items-center gap-2 text-white/70">
                        <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-sm">
                          {hint.icon}
                        </div>
                        <span className="font-mono text-[10px] tracking-[0.15em] uppercase whitespace-nowrap">
                          {hint.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Click to activate CTA */}
                  <div className="flex items-center gap-3 border border-primary/70 px-6 py-3 text-primary hover:bg-primary/10 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                    <span className="font-mono text-xs tracking-[0.2em] uppercase">
                      Click to explore
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Active: escape button */}
            <AnimatePresence>
              {active && (
                <motion.button
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setActive(false)}
                  className="absolute top-3 right-3 flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:border-foreground transition-colors z-10"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                  Exit viewer
                  <span className="text-muted-foreground/50 ml-1">ESC</span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowreelSection;
