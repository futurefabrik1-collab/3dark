import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import illustrationTwin from "@/assets/illustration-twin.jpg";

const projects = [
  {
    title: "Klärwerk Leipzig",
    subtitle: "Digital Twin mit CAD-Integration",
    description: "Vollständige Erfassung des Industriestandorts als interaktiver Digital Twin. Integration mit bestehenden CAD-Daten für Planungs- und Wartungszwecke.",
    tag: "Industrie",
    year: "2024",
  },
  {
    title: "iBug Festival",
    subtitle: "3D Twin & Time Machine",
    description: "Dokumentation des Street-Art-Festivals über mehrere Jahre. Die 'Time Machine' ermöglicht es, verschiedene Jahrgänge virtuell zu erleben.",
    tag: "Kultur",
    year: "2023",
  },
  {
    title: "MACHN Festival",
    subtitle: "3D Orientierungssystem",
    description: "Interaktives 3D-Leitsystem für Festivalbesucher. Browserbasiert, QR-Code-zugänglich und optimiert für mobile Endgeräte.",
    tag: "Events",
    year: "2024",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Ausgewählte Projekte
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground max-w-xl">
            Referenzen, die für sich sprechen
          </h2>
        </motion.div>

        {/* Project cards with media placeholders */}
        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 * i }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center border-t border-border pt-12"
            >
              {/* Media placeholder */}
              <div className={`lg:col-span-3 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-video media-placeholder rounded-sm flex items-center justify-center">
                  <div className="relative z-10 text-center p-6">
                    <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                        <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                      {project.title} · GS Viewer
                    </p>
                    <p className="text-[11px] text-muted-foreground/50 mt-1">
                      Iframe / Video Platzhalter
                    </p>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className={`lg:col-span-2 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary border border-primary/30 px-3 py-1">
                    {project.tag}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-primary/80 mb-4">
                  {project.subtitle}
                </p>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 relative"
        >
          <img
            src={illustrationTwin}
            alt="Digital twin concept illustration"
            className="w-full max-w-2xl mx-auto rounded-sm opacity-80"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
