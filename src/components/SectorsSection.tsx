import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const icons = ["🎬", "⚙️", "📣", "🏛️", "🏗️", "📚"];

const SectorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();
  const t = translations.sectors[lang];

  return (
    <section className="py-32 px-6 parchment-bg">
      <div ref={ref} className="max-w-6xl mx-auto">
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
          <p className="text-muted-foreground font-light mt-4 max-w-lg">
            {t.body}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((sector, i) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group p-6 border border-border hover:border-primary/30 bg-background transition-all duration-500"
            >
              <span className="text-2xl mb-4 block">{icons[i]}</span>
              <h3 className="text-sm font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                {sector.name}
              </h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed mb-3">
                {sector.description}
              </p>
              <p className="font-mono text-[10px] tracking-wider text-primary/50 uppercase">
                {sector.roles}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
