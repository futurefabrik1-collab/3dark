import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sectors = [
  "Industrie & Infrastruktur",
  "Film, TV & Games",
  "Kultur & Events",
  "Bildung & Training",
  "Digitale Archivierung",
];

const SectorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6 bg-surface-elevated/50">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.3em] uppercase text-primary/60 mb-10"
        >
          Zielgruppen
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {sectors.map((sector) => (
            <span
              key={sector}
              className="font-mono text-[11px] tracking-wider text-secondary-foreground/70 border border-border px-4 py-2 rounded-sm hover:border-primary/40 hover:text-foreground transition-all duration-500"
            >
              {sector}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SectorsSection;
