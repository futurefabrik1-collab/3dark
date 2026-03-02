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

const AboutWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden parchment-bg">
      {/* Background image with increased opacity */}
      <div className="absolute inset-0">
        <img 
          src="/images/urban-tunnel.png" 
          alt="" 
          className="w-full h-full object-cover opacity-10 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background" />
      </div>
      
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <img src="/images/pattern-grid.png" alt="" className="w-full h-full object-cover mix-blend-overlay" />
      </div>
      
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Combined Intro Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6">
            Was Wir Tun
          </p>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto mb-6">
            3DARK erfasst das Unsichtbare. Wir archivieren Orte, die dem Vergessen geweiht sind – unterirdische Clubs, verwaiste Industrieruinen, ephemere Installationen, verbotene Räume. Mit Gaussian Splatting und volumetrischer Erfassung schaffen wir digitale Ewigkeit für das, was morgen schon Geschichte ist.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            Wir erfassen reale Umgebungen mit fortschrittlichen Rekonstruktions-Pipelines und verwandeln sie in produktionsreife Digital Twins, optimiert für Web, Echtzeit-Engines und Präsentationsumgebungen.
          </p>
        </motion.div>

        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
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
            {...getRandomInViewAnimation(isInView, 0.4)}
            className="relative aspect-video overflow-hidden neon-border group"
          >
            <img 
              src="/images/art-installation.png" 
              alt="3DARK Art Installation" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </motion.div>
        </motion.div>

        {/* Why Gaussian Splatting */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
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
                {...getRandomInViewAnimation(isInView, 0.6 + 0.1 * i)}
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

export default AboutWorkSection;
