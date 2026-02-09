import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sectors = [
  {
    name: "Industrie & Infrastruktur",
    description: "Digitale Zwillinge für Fabriken, Kraftwerke und Infrastrukturprojekte. Perfekt für Planung, Wartung und Dokumentation.",
    icon: "⚙️",
  },
  {
    name: "Film, TV & Games",
    description: "Fotorealistische Sets und Environments. Location Scouting und virtuelle Produktion auf höchstem Niveau.",
    icon: "🎬",
  },
  {
    name: "Kultur & Events",
    description: "Festivals, Ausstellungen und historische Stätten digital bewahren und weltweit zugänglich machen.",
    icon: "🏛️",
  },
  {
    name: "Bildung & Training",
    description: "Interaktive Lernumgebungen und Trainingsszenarien in fotorealistischer 3D-Qualität.",
    icon: "📚",
  },
  {
    name: "Architektur & Immobilien",
    description: "Bestandsgebäude, Baustellen und Neubauprojekte als navigierbare 3D-Erfahrung für Kunden und Partner.",
    icon: "🏗️",
  },
  {
    name: "Digitale Archivierung",
    description: "Dauerhaft zugängliche 3D-Dokumentation von Gebäuden, Denkmälern und kulturellem Erbe.",
    icon: "🗄️",
  },
];

const SectorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6 parchment-bg">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Zielgruppen
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground max-w-xl">
            Branchenübergreifend einsetzbar
          </h2>
          <p className="text-muted-foreground font-light mt-4 max-w-lg">
            Unsere Technologie passt sich Ihrer Branche an – nicht umgekehrt. 
            Entdecken Sie, wie Digital Twins Ihren Bereich transformieren.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group p-6 border border-border hover:border-primary/30 bg-background transition-all duration-500"
            >
              <span className="text-2xl mb-4 block">{sector.icon}</span>
              <h3 className="text-sm font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                {sector.name}
              </h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                {sector.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
