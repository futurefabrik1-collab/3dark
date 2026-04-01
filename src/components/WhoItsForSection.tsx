import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const icons = [
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
      <rect x="4" y="12" width="24" height="16" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12V6h4v6M16 12V8h4v4M24 12V10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
      <rect x="4" y="10" width="24" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 16l6 4V12l-6 4z" fill="currentColor" />
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
      <rect x="6" y="8" width="20" height="18" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 8L16 4l10 4M12 14h8M12 18h8M12 22h4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 8v8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
];

const links = [
  "/who-its-for/industrial",
  "/who-its-for/producers",
  "/who-its-for/cultural",
  "/who-its-for/marketing",
];

const WhoItsForSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();
  const t = translations.whoItsFor[lang];

  return (
    <section id="who-its-for" className="py-32 px-6 relative overflow-hidden bg-background">
      <div className="absolute inset-0">
        <img src="/images/webp/warehouse-ruins.webp" alt="" className="w-full h-full object-cover opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            {t.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            {t.h2}
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            {t.body}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.users.map((user, i) => (
            <motion.a
              key={user.title}
              href={links[i]}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group p-8 border border-border bg-background hover:bg-surface-elevated transition-all duration-500 hover:border-primary/30 cursor-pointer block"
            >
              <div className="mb-5 opacity-70 group-hover:opacity-100 transition-opacity">
                {icons[i]}
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                {user.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                {user.description}
              </p>
              <div className="mb-6">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary/60 mb-3">
                  {t.deliversLabel}
                </p>
                <ul className="space-y-2">
                  {user.deliverables.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground font-light leading-relaxed">
                      <span className="text-primary mt-0.5 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="inline-flex items-center gap-2 text-xs text-primary group-hover:gap-3 transition-all duration-300 font-mono tracking-widest uppercase">
                {t.learnMore}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border pt-10"
        >
          <p className="text-muted-foreground font-light text-sm">{t.cta}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-6 py-3 border border-primary text-primary font-mono text-xs tracking-widest uppercase hover:bg-primary hover:text-background transition-all duration-300 shrink-0"
          >
            {t.ctaButton}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
