import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  { label: "Interaktive Web-Viewer", detail: "QR-fähig, browserbasiert" },
  { label: "Cinematic Renderings", detail: "Filmreife Videos & Stills" },
  { label: "Unity / Unreal", detail: "Engine-Integration" },
  { label: "High-Fidelity Assets", detail: "Realtime-optimierte Varianten" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-32 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.3em] uppercase text-primary/60 mb-12"
        >
          Leistungen
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-background p-8 group hover:bg-surface-elevated transition-colors duration-500"
            >
              <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                {service.label}
              </h3>
              <p className="text-sm text-muted-foreground font-light">
                {service.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
