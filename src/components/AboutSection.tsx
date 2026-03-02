import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getRandomInViewAnimation } from "@/utils/animations";

const benefits = [
  { title: 'Underground-Locations mit komplexer Lichtarchitektur', desc: "Clubs, Keller, verlassene Räume – wo Licht zur Atmosphäre wird." },
  { title: "Ephemere Events und Installationen", desc: "Festivals, Pop-ups, Guerrilla-Kunst – bevor sie verschwinden." },
  { title: "Verlassene Räume und urbane Ruinen", desc: "Industriebrachen, besetzte Häuser, Orte des Verfalls." },
  { title: "Film-Sets mit atmosphärischer Tiefe", desc: "Virtual Production ohne Green Screen. Nur rohe, digitalisierte Realität." },
  { title: "Subkulturen und verborgene Räume", desc: "Was keine Institution jemals dokumentieren würde." },
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
            Was Wir Tun
          </p>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            3DARK erfasst das Unsichtbare. Wir archivieren Orte, die dem Vergessen geweiht sind – unterirdische Clubs, verwaiste Industrieruinen, ephemere Installationen, verbotene Räume. Mit Gaussian Splatting und volumetrischer Erfassung schaffen wir digitale Ewigkeit für das, was morgen schon Geschichte ist.
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
              Wer Wir Sind
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Wir sind keine Archivare im klassischen Sinne. Wir sind Jäger vergänglicher Momente. Geister in der Maschine. Seit dem Aufkommen von Gaussian Splatting kartieren wir, was andere ignorieren: Die Schattenseiten, die Zwischenräume, die Orte ohne Marketing-Budget.
            </p>
            <p className="text-sm text-muted-foreground/80 font-light leading-relaxed">
              Elusive by design. Obsessiv in der Ausführung. Wir dokumentieren nicht – wir konservieren Atmosphäre.
            </p>
          </div>
          <motion.div 
            {...getRandomInViewAnimation(isInView, 0.3)}
            className="media-placeholder aspect-video rounded-sm flex items-center justify-center"
          >
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
          </motion.div>
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
            Licht und Schatten in ihrer rohesten Form
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-10 max-w-2xl">
            Gaussian Splatting fängt nicht nur Geometrie – es fängt Seele. Die Lichtreflexe einer schäbigen Neonröhre. Der Staub in einem verlassenen Lagerhaus. Die Patina von Jahrzehnten auf Betonwänden. Wo klassische 3D-Scans steril wirken, liefert GS fotorealistischen Verfall.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                {...getRandomInViewAnimation(isInView, 0.5 + 0.1 * i)}
                className="p-6 border border-border hover:border-primary/30 transition-all duration-500"
              >
                <h3 className="text-sm font-medium text-foreground mb-2">{b.title}</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
