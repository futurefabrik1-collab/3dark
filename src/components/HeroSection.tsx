import { motion } from "framer-motion";
import { getRandomEntranceAnimation } from "@/utils/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = translations.hero[lang];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background scanlines">
      {/* Industrial grid background */}
      <div className="absolute inset-0 industrial-grid opacity-20" />
      
      {/* Neon glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Background illustration */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.png"
          alt="3D Gaussian Splatting point cloud visualization"
          className="w-full h-full object-cover opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          {/* Brand Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.1em] uppercase text-primary text-glow mb-8 relative inline-block font-semibold"
          >
            3D-ARK
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-3 left-0 h-px bg-primary shadow-[0_0_10px_rgba(var(--glow),0.6)]"
            />
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.2] mb-8 text-foreground max-w-2xl"
          >
            {t.h2.replace(t.h2Highlight, "")}{" "}
            <span className="gradient-text">{t.h2Highlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl leading-relaxed mb-10"
          >
            {t.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex items-center gap-6"
          >
            <a
              href="#who-its-for"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-mono uppercase tracking-wider hover:bg-primary/90 transition-all neon-glow hover:shadow-[0_0_20px_rgba(var(--glow),0.5)]"
            >
              {t.cta}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-px">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-wider border-b border-border pb-0.5 hover:border-primary"
            >
              {t.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* Right: Video */}
        <motion.div
          {...getRandomEntranceAnimation(0.6)}
          className="relative"
        >
          <motion.div 
            className="aspect-[4/3] overflow-hidden neon-border bg-surface/50 backdrop-blur-sm relative group"
          >
            <video 
              src="/images/gen-4-turbo-camera-dolly.mp4" 
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </motion.div>
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-primary shadow-[0_0_5px_rgba(var(--glow),0.4)]" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-primary shadow-[0_0_5px_rgba(var(--glow),0.4)]" />
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
