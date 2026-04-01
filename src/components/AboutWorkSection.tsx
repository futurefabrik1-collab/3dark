import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const TEAM = [
  { name: "Name Placeholder", role: "Founder & Lead Developer" },
  { name: "Name Placeholder", role: "3D Capture Specialist" },
  { name: "Name Placeholder", role: "Software Engineer" },
  { name: "Name Placeholder", role: "Creative Director" },
  { name: "Name Placeholder", role: "Project Manager" },
  { name: "Name Placeholder", role: "Post-Production Artist" },
];

const AvatarPlaceholder = () => (
  <div className="w-full aspect-[3/4] bg-muted border border-border flex items-end justify-center overflow-hidden">
    <svg viewBox="0 0 120 160" fill="none" className="w-3/4 opacity-20" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="48" rx="28" ry="30" fill="currentColor"/>
      <path d="M10 160c0-38 22-62 50-62s50 24 50 62H10z" fill="currentColor"/>
    </svg>
  </div>
);

const AboutWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const t = translations.about[lang];

  const [index, setIndex] = useState(0);
  const visible = 3; // cards visible at once on desktop
  const max = TEAM.length - visible;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(max, i + 1));

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden parchment-bg">
      <div className="absolute inset-0">
        <img src="/images/webp/urban-tunnel.webp" alt="" className="w-full h-full object-cover opacity-10 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background" />
      </div>
      <div className="absolute inset-0 opacity-5">
        <img src="/images/webp/pattern-grid.webp" alt="" className="w-full h-full object-cover mix-blend-overlay" />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6">
            {t.sectionLabel}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            {t.intro1}
          </p>
        </motion.div>

        {/* Who We Are — Team Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border pt-12 mb-20"
        >
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground">
              {t.whoH2}
            </h2>
            {/* Prev / Next */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                disabled={index === 0}
                aria-label="Previous"
                className="w-9 h-9 flex items-center justify-center border border-border hover:border-primary/60 text-muted-foreground hover:text-primary disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button
                onClick={next}
                disabled={index >= max}
                aria-label="Next"
                className="w-9 h-9 flex items-center justify-center border border-border hover:border-primary/60 text-muted-foreground hover:text-primary disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel track */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: `calc(-${index} * (100% / ${visible} + 1rem / ${visible}))` }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {TEAM.map((member, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[calc(33.333%-0.89rem)] min-w-[220px] border border-border bg-background hover:border-primary/30 transition-colors duration-300"
                >
                  <AvatarPlaceholder />
                  <div className="p-5">
                    <p className="text-sm font-medium text-foreground mb-1">{member.name}</p>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-primary">{member.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2 mt-6">
            {Array.from({ length: max + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === index ? "bg-primary w-4" : "bg-border hover:bg-muted-foreground"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutWorkSection;
