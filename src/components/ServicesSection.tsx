import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const solutions = [
  {
    image: "/images/service-urban-tunnel.png",
    label: "Digitale Schatten Realer Orte",
    detail: "Wir erschaffen nicht nur 3D-Modelle – wir klonen Atmosphäre. Jede Fuge, jeder Riss, jede Lichtreflexion. Perfekt für Räume, die zu komplex, zu dunkel oder zu flüchtig für konventionelle Dokumentation sind.",
  },
  {
    image: "/images/service-club-scan.png",
    label: "Begehbare Erinnerungen",
    detail: "Keine Downloads. Kein VR-Headset. Nur ein QR-Code – und der Club, den sie abgerissen haben, lebt wieder. Im Browser. In Echtzeit. Für immer.",
  },
  {
    image: "/images/service-virtual-production.png",
    label: "Film-Ready Dystopie",
    detail: "Location-Scouting für Orte, die nicht mehr existieren. Oder nie hätten existieren dürfen. Gaussian-Splatting-Assets für Virtual Production, VFX-Plates und Game-Environments. Kein Green Screen. Nur rohe, digitalisierte Realität.",
  },
  {
    image: "/images/service-warehouse-ruins.png",
    label: "Archive des Vergessens",
    detail: "Industrieruinen. Besetzte Häuser. Illegale Raves. Guerrilla-Ausstellungen. Wir archivieren, was keine Institution jemals dokumentieren würde – und geben es der Ewigkeit zurück.",
  },
];

const SolutionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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
            Lösungen
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground max-w-xl">
            Digitale Umgebungen für das Unmögliche
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group border border-border bg-background hover:bg-surface-elevated transition-all duration-500 hover:border-primary/30 overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.label}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                  {solution.label}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {solution.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
