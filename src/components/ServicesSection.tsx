import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const images = [
  "/images/service-urban-tunnel.png",
  "/images/service-club-scan.png",
  "/images/service-virtual-production.png",
  "/images/service-warehouse-ruins.png",
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();
  const t = translations.services[lang];

  return (
    <section id="solutions" className="py-32 px-6 parchment-bg">
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group border border-border bg-background hover:bg-surface-elevated transition-all duration-500 hover:border-primary/30 overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={images[i]}
                  alt={card.label}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                  {card.label}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {card.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
