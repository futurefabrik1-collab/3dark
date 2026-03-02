import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HowWeWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6 parchment-bg relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="/images/urban-tunnel.png" 
          alt="" 
          className="w-full h-full object-cover opacity-5 mix-blend-screen"
        />
      </div>
      
      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6">
            Wie wir arbeiten
          </p>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            Wir erfassen reale Umgebungen mit fortschrittlichen Rekonstruktions-Pipelines und verwandeln sie in 
            produktionsreife Digital Twins, optimiert für Web, Echtzeit-Engines und Präsentationsumgebungen.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
