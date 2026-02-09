import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Kontakt
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Bereit für Ihren <span className="gradient-text">Digital Twin</span>?
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              Ob Industrie, Kultur oder Film – wir finden die passende Lösung für Ihr Projekt.
              Forschungsnah. Plattformbewusst. Produktionsorientiert.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-primary/30 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">Leipzig, Deutschland</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-primary/30 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <a href="https://futurefabrik.de" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                  futurefabrik.de
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Placeholder for contact form or iframe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="aspect-square media-placeholder rounded-sm flex items-center justify-center">
              <div className="relative z-10 text-center p-8">
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                  Kontaktformular
                </p>
                <p className="text-xs text-muted-foreground/50 mt-1">
                  Platzhalter
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-32 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} Future Fabrik
        </p>
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50">
          Gaussian Splatting · Digital Twins · Leipzig
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
