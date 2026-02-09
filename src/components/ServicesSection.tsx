import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
        <path d="M10 16h12M16 10v12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    label: "3D Assets",
    detail: "Realtime-optimierte 3D-Modelle in verschiedenen LOD-Stufen. Von browserf\u00e4hig bis filmtauglich \u2013 ein Scan, alle Formate. High-Fidelity oder Realtime/Compressed je nach Einsatz.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
        <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 16h24M16 4v24" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    label: "Digital Twins",
    detail: "Vollständige digitale Zwillinge von Gebäuden, Anlagen und Geländen. Kombinierbar mit CAD, BIM und Planungsständen für Industrie, Architektur und Dokumentation.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
        <path d="M6 26L16 6l10 20H6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="16" cy="18" r="3" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    label: "Virtual Environments",
    detail: "Begehbare virtuelle Welten für Web, VR und Echtzeit-Engines. Interaktive Erlebnisse, die über reine 3D-Ansichten hinausgehen – Zeitreisen, Orientierungssysteme, spielerische Navigation.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
        <path d="M8 8h16v16H8z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 12h8v8h-8z" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
    label: "Digital Archiving",
    detail: "Dauerhaft zugängliche 3D-Dokumentation von Gebäuden, Denkmälern, Kulturerbe und bedrohten Orten. Hochdetaillierte Zeitzeugnisse für Forschung, Ausstellungen und VR.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
        <rect x="4" y="8" width="24" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 14l4 2.5L13 19V14z" fill="currentColor" />
      </svg>
    ),
    label: "Cinematic Renderings",
    detail: "Camera-Paths, Kamerafahrten und filmreife Stills aus 3D-Scans. Lichtsteuerung und Post-Produktion für Social-Media-Clips, Ads und Präsentationen.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
        <path d="M16 4l12 7v10l-12 7L4 21V11l12-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 11v10M10 15h12" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    label: "XR Experiences",
    detail: "Native Integration in Unreal & Unity für Games, Simulationen, VR/AR-Anwendungen und immersive Installationen. Optimierte Assets und Engine-spezifische Workflows.",
  },
];

const deliverables = [
  "Interaktiver Web-Viewer + QR-Workflow",
  "Camera-Paths / Cinematic Renderings",
  "Engine-Integration (Unreal/Unity)",
  "High-Fidelity & Realtime-Varianten",
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-32 px-6 parchment-bg">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Leistungen
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground max-w-xl">
            Von der Erfassung bis zur Auslieferung – alles aus einer Hand
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group p-8 border border-border bg-background hover:bg-surface-elevated transition-all duration-500 hover:border-primary/30"
            >
              <div className="mb-5 opacity-70 group-hover:opacity-100 transition-opacity">
                {service.icon}
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                {service.label}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {service.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Typical deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 border-t border-border pt-10"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary/60 mb-6">
            Typische Deliverables
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliverables.map((d) => (
              <div key={d} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                <p className="text-sm text-muted-foreground font-light">{d}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
