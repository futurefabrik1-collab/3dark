import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const solutions = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
        <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 16h24M16 4v24" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    label: "Digitale Schatten Realer Orte",
    detail: "Wir erschaffen nicht nur 3D-Modelle – wir klonen Atmosphäre. Jede Fuge, jeder Riss, jede Lichtreflexion. Perfekt für Räume, die zu komplex, zu dunkel oder zu flüchtig für konventionelle Dokumentation sind.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
        <path d="M6 26L16 6l10 20H6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="16" cy="18" r="3" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    label: "Begehbare Erinnerungen",
    detail: "Keine Downloads. Kein VR-Headset. Nur ein QR-Code – und der Club, den sie abgerissen haben, lebt wieder. Im Browser. In Echtzeit. Für immer.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
        <rect x="4" y="8" width="24" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 14l4 2.5L13 19V14z" fill="currentColor" />
      </svg>
    ),
    label: "Film-Ready Dystopie",
    detail: "Location-Scouting für Orte, die nicht mehr existieren. Oder nie hätten existieren dürfen. Gaussian-Splatting-Assets für Virtual Production, VFX-Plates und Game-Environments. Kein Green Screen. Nur rohe, digitalisierte Realität.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
        <path d="M8 8h16v16H8z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 12h8v8h-8z" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
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
              className="group p-8 border border-border bg-background hover:bg-surface-elevated transition-all duration-500 hover:border-primary/30"
            >
              <div className="mb-5 opacity-70 group-hover:opacity-100 transition-opacity">
                {solution.icon}
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                {solution.label}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {solution.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
