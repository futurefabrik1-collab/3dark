import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const icons = [
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
      <rect x="4" y="12" width="24" height="16" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12V6h4v6M16 12V8h4v4M24 12V10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
      <path d="M16 4L4 10l12 6l12-6-12-6zM4 22l12 6l12-6M4 16l12 6l12-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();
  const t = translations.industries[lang];

  return (
    <section id="industries" className="py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="p-6 border border-border bg-background hover:bg-surface-elevated transition-all duration-500 hover:border-primary/30 group"
            >
              <div className="mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                {icons[i]}
              </div>
              <h3 className="text-base font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                {industry.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
