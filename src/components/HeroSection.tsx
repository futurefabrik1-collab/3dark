import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      
      {/* Background illustration */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Technical blueprint illustration of Gaussian Splatting"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6"
          >
            Gaussian Splatting · Digital Twins · Leipzig
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-8 text-foreground"
          >
            <span className="gradient-text">Future</span>{" "}
            Fabrik
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground font-light max-w-lg leading-relaxed mb-6"
          >
            Fotorealistische 3D-Digital-Twins aus realen Orten – 
            produktionsreif für Web, Echtzeit-Engines und Film.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-sm text-muted-foreground/80 font-light leading-relaxed mb-10 max-w-md"
          >
            Wir nutzen Gaussian Splatting, um aus Hunderten von Fotos fotorealistische, 
            interaktive 3D-Welten zu erzeugen – schneller und detailreicher als je zuvor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex items-center gap-6"
          >
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
            >
              Leistungen entdecken
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-px">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light border-b border-border pb-0.5 hover:border-foreground"
            >
              Kontakt aufnehmen
            </a>
          </motion.div>
        </div>

        {/* Right: Video/iframe placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/3] media-placeholder rounded-sm flex items-center justify-center">
            <div className="relative z-10 text-center p-8">
              <div className="w-16 h-16 rounded-full border-2 border-primary/40 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary ml-1">
                  <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                </svg>
              </div>
              <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                Gaussian Splatting Demo
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                Interaktiver 3D-Viewer · Platzhalter
              </p>
            </div>
          </div>
          {/* Decorative sketch marks */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary/30" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary/30" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground/50">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/40 to-transparent animate-pulse-gentle" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
