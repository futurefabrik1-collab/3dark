import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { getRandomInViewAnimation } from "@/utils/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import ConsentEmbed from "./ConsentEmbed";

/**
 * What the showreel slot plays. Swap this one constant to change it.
 *
 *  - "scene": an interactive 3D viewer (orbit/zoom/pan hints, ESC to leave)
 *  - "film":  a video player
 *
 * The interactive ibug scene used to live at
 * https://splatpipe-cdn.b-cdn.net/IBUG_2025_v6/index.html, but that CDN zone now
 * answers 404, so the slot shows our ibug walkthrough film until the scene is
 * hosted again. To restore it: set kind to "scene" and src to the new URL.
 */
const SHOWREEL: { kind: "scene" | "film"; src: string; poster: string; title: string } = {
  kind: "film",
  src: "https://www.youtube-nocookie.com/embed/ump032qGpK4?autoplay=1&rel=0&modestbranding=1",
  poster: "/images/webp/posters/ibug-walkthrough.webp",
  title: "ibug Festival — 360° walkthrough",
};

const HINT_ICONS = {
  orbit: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/>
    </svg>
  ),
  zoom: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a4 4 0 00-4 4v6a4 4 0 008 0V6a4 4 0 00-4-4z"/>
      <path d="M8 12a4 4 0 008 0M12 16v4M8 20h8"/>
      <path d="M10 8h.01M14 8h.01"/>
    </svg>
  ),
  pan: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  ),
};

const ShowreelSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();
  const t = translations.showreel[lang];
  const e = translations.embed[lang];
  const [active, setActive] = useState(false);
  // Remounting the embed is how we "leave" a scene: it drops the iframe and
  // puts the poster back.
  const [embedKey, setEmbedKey] = useState(0);

  const isScene = SHOWREEL.kind === "scene";

  const exitViewer = () => {
    setActive(false);
    setEmbedKey((k) => k + 1);
  };

  useEffect(() => {
    if (!active || !isScene) return;
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") exitViewer();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, isScene]);

  const hints = isScene ? (
    <span className="flex items-center gap-8 md:gap-12">
      {([
        ["orbit", e.hintOrbit],
        ["zoom", e.hintZoom],
        ["pan", e.hintPan],
      ] as const).map(([icon, label]) => (
        <span key={icon} className="flex flex-col items-center gap-2 text-white/80">
          <span className="w-10 h-10 flex items-center justify-center border border-white/30 rounded-sm">
            {HINT_ICONS[icon]}
          </span>
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase whitespace-nowrap">{label}</span>
        </span>
      ))}
    </span>
  ) : undefined;

  return (
    <section id="showreel" className="py-20 md:py-32 px-6 relative overflow-hidden bg-background">
      <div className="absolute inset-0 dark-only">
        <img src="/images/webp/art-installation.webp" alt="" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-10 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      <div className="absolute inset-0 industrial-grid opacity-10" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            {t.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground max-w-2xl mx-auto mb-4">
            {t.h2}
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            {t.body}
          </p>
        </motion.div>

        <motion.div
          {...getRandomInViewAnimation(isInView, 0.3)}
          className="mt-12"
        >
          <div className="neon-border overflow-hidden relative">
            <ConsentEmbed
              key={embedKey}
              src={SHOWREEL.src}
              title={SHOWREEL.title}
              poster={SHOWREEL.poster}
              cta={isScene ? e.explore : e.playFilm}
              note={isScene ? e.noteScene : e.noteYouTube}
              hints={hints}
              onActivate={() => setActive(true)}
              className="aspect-video w-full"
            />

            {/* Scene mode only: a way back out of the viewer */}
            <AnimatePresence>
              {active && isScene && (
                <motion.button
                  type="button"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  onClick={exitViewer}
                  className="absolute top-3 right-3 flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:border-foreground transition-colors z-10"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                  {e.exitViewer}
                  <span className="text-muted-foreground ml-1">ESC</span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowreelSection;
