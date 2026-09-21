import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { getRandomEntranceAnimation } from "@/utils/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = translations.hero[lang];
  const reduceMotion = useReducedMotion();

  // The showreel plays only while it is on screen, and never for visitors who
  // ask for reduced motion (they get the poster and a play button). On phones
  // it sits below the fold, so nothing is downloaded until it scrolls into view.
  // The pause button satisfies WCAG 2.2.2 (moving content must be stoppable).
  const video = useRef<HTMLVideoElement>(null);
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const [playing, setPlaying] = useState(false);
  const paused = userPaused ?? Boolean(reduceMotion);

  useEffect(() => {
    const el = video.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !paused) void el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [paused]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background scanlines">
      {/* Industrial grid background */}
      <div className="absolute inset-0 industrial-grid opacity-20" />
      
      {/* Background illustration */}
      <div className="absolute inset-0">
        <img
          src="/images/webp/hero-bg.webp"
          alt=""
          className="w-full h-full object-cover opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          {/* Brand Title */}
          <motion.h1
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.1em] uppercase text-primary mb-8 relative inline-block font-semibold"
          >
            3D-ARK
            <motion.span
              aria-hidden="true"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-3 left-0 h-px bg-primary block"
            />
          </motion.h1>

          <motion.h2
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.2] mb-8 text-foreground max-w-2xl"
          >
            {t.h2.replace(t.h2Highlight, "")}{" "}
            <span className="gradient-text">{t.h2Highlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl leading-relaxed mb-4"
          >
            {t.body}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-10"
          >
            {t.differentiator}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="flex items-center gap-6"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 border border-primary text-primary font-mono text-sm tracking-widest uppercase hover:bg-primary hover:text-background transition-all duration-300"
            >
              {t.ctaButton}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
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
            {/* 960x540, no audio, ~5 MB. The 1080p master (/images/3dark-trailer.mp4,
                53 MB) used to autoplay here for every visitor, mobile data included. */}
            <video
              ref={video}
              src="/media/hero-trailer.mp4"
              poster="/images/webp/posters/hero-trailer.webp"
              loop
              muted
              playsInline
              preload="metadata"
              aria-label={t.videoLabel}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <button
              type="button"
              onClick={() => setUserPaused(playing)}
              aria-label={playing ? t.pauseVideo : t.playVideo}
              className="absolute bottom-3 right-3 z-10 w-10 h-10 flex items-center justify-center bg-black/55 text-white border border-white/40 hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
            >
              {playing ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="5" y="4" width="4" height="16" /><rect x="15" y="4" width="4" height="16" /></svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="6 4 20 12 6 20 6 4" /></svg>
              )}
            </button>
          </motion.div>
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-primary" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-primary" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">{t.scroll}</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/40 to-transparent animate-pulse-gentle" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
