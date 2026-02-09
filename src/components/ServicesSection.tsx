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
    label: "Interaktive Web-Viewer",
    detail: "Browserbasierte 3D-Viewer mit QR-Code-Zugang. Kein Download, keine App – Ihr Digital Twin direkt im Browser. Optimiert für Desktop und Mobile.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
        <rect x="4" y="8" width="24" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 14l4 2.5L13 19V14z" fill="currentColor" />
      </svg>
    ),
    label: "Cinematic Renderings",
    detail: "Filmreife Videos und Stills aus Ihren 3D-Scans. Kamerapfade, Lichtsteuerung und professionelle Post-Produktion für Marketing und Dokumentation.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
        <path d="M6 26L16 6l10 20H6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 14v6M16 22v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Unity & Unreal Engine",
    detail: "Native Integration in Echtzeit-Engines. Optimierte Assets für Games, Simulationen, VR/AR-Anwendungen und interaktive Erlebnisse.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
        <path d="M8 8h16v16H8z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 12h8v8h-8z" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
    label: "High-Fidelity Assets",
    detail: "Realtime-optimierte 3D-Modelle in verschiedenen LOD-Stufen. Von browserfähig bis filmtauglich – ein Scan, alle Formate.",
  },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
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
      </div>
    </section>
  );
};

export default ServicesSection;
