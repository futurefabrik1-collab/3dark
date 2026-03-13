import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getRandomInViewAnimation } from "@/utils/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();
  const t = translations.process[lang];

  return (
    <section id="process" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/virtual-production.png" alt="" className="w-full h-full object-cover opacity-10 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/98 to-background" />
      </div>
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            {t.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground max-w-xl">
            {t.h2}
          </h2>
          <p className="text-muted-foreground font-light mt-4 max-w-2xl">
            {t.body}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.steps.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="relative"
            >
              <p className="font-serif text-5xl text-primary/15 mb-4">0{i + 1}</p>
              <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              {i < t.steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8">
                  <svg width="32" height="8" viewBox="0 0 32 8" className="text-primary/30">
                    <path d="M0 4h28M24 0l4 4-4 4" stroke="currentColor" strokeWidth="1" fill="none" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
