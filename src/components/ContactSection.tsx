import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 px-6">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.3em] uppercase text-primary/60 mb-6"
        >
          Kontakt
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl md:text-4xl font-light text-foreground mb-4"
        >
          Bereit für Ihren <span className="gradient-text font-medium">Digital Twin</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-muted-foreground font-light mb-10"
        >
          Forschungsnah. Plattformbewusst. Produktionsorientiert.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="https://futurefabrik.de"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm tracking-widest text-primary hover:text-glow transition-all duration-300 border-b border-primary/30 pb-1 hover:border-primary"
          >
            futurefabrik.de
          </a>
          <p className="font-mono text-xs text-muted-foreground tracking-wider">
            Leipzig, Deutschland
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto mt-32 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} Future Fabrik
        </p>
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50">
          Gaussian Splatting & Digital Twins
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
