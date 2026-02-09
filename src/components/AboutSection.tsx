import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import illustrationScan from "@/assets/illustration-scan.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <img
              src={illustrationScan}
              alt="Technical illustration of 3D scanning process"
              className="w-full rounded-sm"
            />
            <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-primary/30" />
            <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-primary/30" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Was wir tun
            </p>
            <h2 className="text-3xl md:text-4xl font-serif leading-snug mb-6 text-foreground">
              Wir scannen reale Orte und liefern nutzbare digitale Assets
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              Gaussian Splatting erzeugt eine fotografische Raumwirkung mit extrem hohem
              Realismus. Im Vergleich zu klassischen Mesh-Pipelines ist die Erfassung
              schneller und die visuelle Wirkung deutlich näher an realer Fotografie.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              Unsere Digital Twins sind mehr als bloße 3D-Modelle – sie sind vollständig
              interaktive, browserbasierte Erlebnisse, die Architektur, Industrie und
              Kultur in eine neue Dimension bringen. Von der Planung bis zur Archivierung
              liefern wir produktionsreife Assets für jede Plattform.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              {[
                { value: "< 1 Tag", label: "Scan-Dauer" },
                { value: "50+", label: "Projekte" },
                { value: "4K+", label: "Auflösung" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <p className="text-2xl font-serif text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-mono tracking-wider mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
