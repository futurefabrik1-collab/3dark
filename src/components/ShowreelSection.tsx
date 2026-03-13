import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getRandomInViewAnimation } from "@/utils/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const ShowreelSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();
  const t = translations.showreel[lang];

  return (
    <section id="showreel" className="py-32 px-6 relative overflow-hidden bg-background">
      <div className="absolute inset-0">
        <img src="/images/art-installation.png" alt="" className="w-full h-full object-cover opacity-10 mix-blend-screen" />
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
          <div className="neon-border overflow-hidden">
            <iframe
              src="https://discover.storysplat.com/api/v2-html/43774b28-c045-485a-8117-db88189d727c"
              width="100%"
              height="500"
              frameBorder="0"
              allow="accelerometer; gyroscope; xr-spatial-tracking"
              allowFullScreen
              className="block w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowreelSection;
