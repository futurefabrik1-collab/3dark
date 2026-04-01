import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const TEAM = [
  { name: "Mark Burnett", role: "Founder & Lead Developer", location: "Leipzig" },
  { name: "Florian Manhardt", role: "3D Capture Specialist", location: "Leipzig" },
  { name: "Samsmeep Singh", role: "Software Engineer", location: "Leipzig" },
  { name: "Sascha Geddert", role: "Creative Director", location: "Leipzig" },
  { name: "Sebastian Mücke", role: "Project Manager", location: "Leipzig" },
  { name: "Christian Rauschenbach", role: "Post-Production Artist", location: "Leipzig" },
];

const AboutWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const t = translations.about[lang];

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

        {/* Who We Are — Team Grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border pt-12"
        >
          <h2 className="text-xl font-serif text-foreground mb-8">
            {t.whoH2}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
            {TEAM.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
                className="bg-background p-5 flex gap-4 items-start group hover:bg-surface-elevated transition-colors duration-300"
              >
                {/* Avatar */}
                <div className="flex-shrink-0 w-10 h-10 bg-muted border border-border flex items-end justify-center overflow-hidden">
                  <svg viewBox="0 0 40 48" fill="none" className="w-full opacity-25">
                    <ellipse cx="20" cy="14" rx="8" ry="9" fill="currentColor"/>
                    <path d="M2 48c0-11 7-18 18-18s18 7 18 18H2z" fill="currentColor"/>
                  </svg>
                </div>
                {/* Info */}
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground leading-snug truncate">{member.name}</p>

                  <p className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground/50 mt-1">{member.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutWorkSection;
