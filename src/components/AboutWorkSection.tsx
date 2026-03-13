import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getRandomInViewAnimation } from "@/utils/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const AboutWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const t = translations.about[lang];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden parchment-bg">
      <div className="absolute inset-0">
        <img src="/images/webp/urban-tunnel.webp" alt="" className="w-full h-full object-cover opacity-10 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background" />
      </div>
      <div className="absolute inset-0 opacity-5">
        <img src="/images/webp/pattern-grid.webp" alt="" className="w-full h-full object-cover mix-blend-overlay" />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6">
            {t.sectionLabel}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto mb-6">
            {t.intro1}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            {t.intro2}
          </p>
        </motion.div>

        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="border-t border-border pt-10 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              {t.whoH2}
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              {t.whoPara}
            </p>
            <p className="text-sm text-muted-foreground/80 font-light leading-relaxed">
              {t.whoSub}
            </p>
          </div>
          <motion.div
            {...getRandomInViewAnimation(isInView, 0.4)}
            className="relative aspect-video overflow-hidden neon-border bg-background"
          >
            <iframe
              src="https://lumalabs.ai/embed/42e93363-cf57-43d4-b69c-539dfe439058?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=hidden&infoPosition=hidden&cinematicVideo=undefined&showMenu=false"
              width="1000"
              height="500"
              frameBorder="0"
              title="luma embed"
              className="w-full h-full border-0"
            />
          </motion.div>
        </motion.div>

        {/* The Method */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            {t.methodLabel}
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4 max-w-2xl">
            {t.methodH2}
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-10 max-w-2xl">
            {t.methodBody}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.benefits.map((b, i) => (
              <motion.div
                key={b.title}
                {...getRandomInViewAnimation(isInView, 0.6 + 0.1 * i)}
                className="p-6 border border-border hover:border-primary/30 transition-all duration-500"
              >
                <h3 className="text-sm font-medium text-foreground mb-2">{b.title}</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutWorkSection;
