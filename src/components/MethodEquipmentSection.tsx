import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const MethodEquipmentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();
  const t = translations.process[lang];

  return (
    <section id="process" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/webp/virtual-production.webp" alt="" className="w-full h-full object-cover opacity-10 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/98 to-background" />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">

        {/* Process steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            {t.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground max-w-xl mb-4">
            {t.h2}
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mb-12">
            {t.body}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.steps.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
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
        </motion.div>

        {/* Method & Equipment placeholders */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border pt-16 grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Method */}
          <div className="border border-dashed border-border p-10 flex flex-col items-start gap-4">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary">Coming Soon</span>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground">The Method</h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Placeholder — detailed breakdown of our capture and reconstruction workflow goes here.
            </p>
            <div className="w-full mt-4 grid grid-cols-3 gap-3">
              {["Capture", "Reconstruct", "Deliver"].map((step) => (
                <div key={step} className="h-16 border border-dashed border-border flex items-center justify-center">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground/50">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment */}
          <div className="border border-dashed border-border p-10 flex flex-col items-start gap-4">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary">Coming Soon</span>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground">Equipment</h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Placeholder — camera systems, hardware, and software stack listed here.
            </p>
            <div className="w-full mt-4 grid grid-cols-2 gap-3">
              {["Cameras", "Processing", "Software", "Output"].map((cat) => (
                <div key={cat} className="h-16 border border-dashed border-border flex items-center justify-center">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground/50">{cat}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MethodEquipmentSection;
