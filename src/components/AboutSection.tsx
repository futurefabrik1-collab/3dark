import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6">
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary/60 mb-6">
            Was wir tun
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-snug mb-8 text-foreground">
            Wir scannen reale Orte und liefern nutzbare digitale Assets für{" "}
            <span className="gradient-text font-medium">Web</span>,{" "}
            <span className="gradient-text font-medium">Echtzeit-Engines</span>,{" "}
            Film, Planung und Archivierung.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-border pt-8"
        >
          <p className="text-muted-foreground font-light leading-relaxed">
            Gaussian Splatting erzeugt eine fotografische Raumwirkung mit extrem hohem
            Realismus. Im Vergleich zu klassischen Mesh-Pipelines ist die Erfassung
            schneller und die visuelle Wirkung deutlich näher an realer Fotografie.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
