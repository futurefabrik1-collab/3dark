import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Gaussian Splatting visualization"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-full h-px bg-primary/20 animate-scan-line" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-mono text-xs tracking-[0.4em] uppercase text-primary/70 mb-8"
        >
          Gaussian Splatting · Digital Twins · Echtzeit
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6"
        >
          <span className="gradient-text font-medium">Future</span>{" "}
          <span className="text-foreground">Fabrik</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed"
        >
          Fotorealistische 3D-Digital-Twins aus realen Orten.
          <br className="hidden md:block" />
          Produktionsreif für Web, Echtzeit-Engines & Film.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex items-center justify-center gap-8"
        >
          <a
            href="#services"
            className="font-mono text-xs tracking-widest uppercase text-primary hover:text-glow transition-all duration-300 border-b border-primary/30 pb-1 hover:border-primary"
          >
            Entdecken
          </a>
          <a
            href="#contact"
            className="font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-all duration-300"
          >
            Kontakt
          </a>
        </motion.div>
      </div>

      {/* Bottom fade indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary/40 animate-pulse-glow" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
