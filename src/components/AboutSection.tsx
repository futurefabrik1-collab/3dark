import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import illustrationScan from "@/assets/illustration-scan.jpg";

const benefits = [
  { title: 'Fotorealismus statt \u201eCG-Look\u201c', desc: "Feine Lichtstimmungen, Materialdetails und echten Fotografie-Charakter – kein steriler 3D-Render." },
  { title: "Interaktiv im Browser", desc: "Perfekt via QR-Code auf Print, Plakaten oder in Präsentationen – kein Download, keine App." },
  { title: "Echtzeit in Unreal / Unity", desc: "Je nach Optimierung und Zielhardware direkt in Game-Engines einsetzbar." },
  { title: "Storytelling-Ready", desc: "Kamerafahrten, Reframing und Social-Media-Clips aus einem einzigen Scan." },
  { title: "Digital-Twin-kompatibel", desc: "Kombination mit CAD, BIM und Planungsständen für Industrie und Architektur." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary/60 mb-6">
            Was wir tun
          </p>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            Wir scannen Orte, Anlagen, Ausstellungen und Kulturräume als fotorealistische
            3D Gaussian Splats – schnell erfassbar, beeindruckend in der Darstellung und ideal
            für Marketing, Planung, Archivierung und interaktive Erlebnisse. Seit unseren
            ersten GS-Projekten arbeiten wir kontinuierlich mit neuen Papers, Tools und
            Workflows, um Qualität, Performance und Clean-Up immer weiter zu pushen.
          </p>
        </motion.div>

        {/* What you get */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="border-t border-border pt-10 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Was ihr bekommt
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Interaktive 3D-Modelle (Web/QR), Renderings, Videos, Engine-Integration
              (Unreal/Unity) und optimierte Assets für reale Produktionspipelines.
            </p>
            <p className="text-sm text-muted-foreground/80 font-light leading-relaxed">
              Unser Anspruch: nicht nur scannen, sondern ein belastbares Produktionsasset liefern.
              Wir testen laufend neue Papers, Tools und Workflows, optimieren für Zielplattformen
              und achten auf saubere Übergaben – strukturierte Daten, klare Benennung,
              nachvollziehbare Pipelines.
            </p>
          </div>
          <div className="media-placeholder aspect-video rounded-sm flex items-center justify-center">
            <div className="relative z-10 text-center p-6">
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                  <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                Showreel · Platzhalter
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Gaussian Splatting */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Warum Gaussian Splatting?
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4 max-w-2xl">
            Extrem realistische Raumwirkung – inklusive feiner Lichtstimmungen und Materialdetails
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-10 max-w-2xl">
            Im Vergleich zu klassischen Meshes kann GS je nach Use-Case schneller in der Erfassung
            sein und wirkt besonders stark bei volumetrischen, komplexen oder detailreichen Szenen –
            Industrie, Architektur, Kunst, Clubräume.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + 0.1 * i }}
                className="p-6 border border-border hover:border-primary/30 transition-all duration-500"
              >
                <h3 className="text-sm font-medium text-foreground mb-2">{b.title}</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <img
            src={illustrationScan}
            alt="Technical illustration of Gaussian Splatting scan process"
            className="w-full max-w-2xl mx-auto rounded-sm opacity-80"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
