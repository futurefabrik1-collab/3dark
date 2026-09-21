import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

type TeamMember = {
  name: string;
  role: { en: string; de: string };
  location: string;
  /** Public LinkedIn profile. Leave undefined to show the card without a link. */
  linkedin?: string;
  /** Square headshot in /images/webp/team/ (192px). Falls back to a silhouette. */
  photo?: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Mark Burnett",
    role: { en: "Creative Director", de: "Creative Director" },
    location: "Leipzig",
    linkedin: "https://www.linkedin.com/in/mark-burnett-27274631/",
    photo: "/images/webp/team/mark-burnett.webp",
  },
  {
    name: "Florian Manhardt",
    role: { en: "Capture & Post-Production", de: "Capture & Postproduktion" },
    location: "Leipzig",
    linkedin: "https://www.linkedin.com/in/florian-manhardt-33617483/",
  },
  {
    name: "Samsmeep Singh",
    role: { en: "Pipeline & Code", de: "Pipeline & Code" },
    location: "Leipzig",
    linkedin: "https://www.linkedin.com/in/samsmeep-singh-390024212/",
  },
  {
    name: "Sascha Geddert",
    role: { en: "VFX & GS Specialist", de: "VFX- & GS-Spezialist" },
    location: "Leipzig",
    linkedin: "https://www.linkedin.com/in/geddart/",
  },
  {
    name: "Sebastian Klose",
    role: { en: "Web & UX", de: "Web & UX" },
    location: "Leipzig",
    linkedin: "https://www.linkedin.com/in/sebastian-klose-0ba5b4154/",
  },
  {
    name: "Christian Rauschenbach",
    role: { en: "Web & UX", de: "Web & UX" },
    location: "Leipzig",
    linkedin: "https://www.linkedin.com/in/christian-rauschenbach-4a3b1484/",
  },
];

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const AboutWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const t = translations.about[lang];

  return (
    <section id="about" className="py-20 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 dark-only">
        <img src="/images/webp/urban-tunnel.webp" alt="" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-10 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background" />
      </div>
      <div className="absolute inset-0 opacity-5 dark-only">
        <img src="/images/webp/pattern-grid.webp" alt="" loading="lazy" decoding="async" className="w-full h-full object-cover mix-blend-overlay" />
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {TEAM.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
                className="bg-background p-5 flex gap-4 items-start group hover:bg-surface-elevated transition-colors duration-300"
              >
                {/* Avatar — photos sit in greyscale so mixed sources read as one set,
                    and come into colour on hover */}
                <div className="flex-shrink-0 w-12 h-12 bg-muted border border-border flex items-end justify-center overflow-hidden">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt=""
                      width={48}
                      height={48}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-300"
                    />
                  ) : (
                    <svg viewBox="0 0 40 48" fill="none" className="w-full opacity-25" aria-hidden="true">
                      <ellipse cx="20" cy="14" rx="8" ry="9" fill="currentColor"/>
                      <path d="M2 48c0-11 7-18 18-18s18 7 18 18H2z" fill="currentColor"/>
                    </svg>
                  )}
                </div>
                {/* Info */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground leading-snug break-words">{member.name}</p>
                  <p className="text-xs text-muted-foreground leading-snug mt-0.5 break-words hyphens-auto">{member.role[lang]}</p>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mt-1.5">{member.location}</p>
                </div>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.linkedinLabel.replace("{name}", member.name)}
                    title={t.linkedinLabel.replace("{name}", member.name)}
                    className="flex-shrink-0 -m-2 p-2 text-muted-foreground hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutWorkSection;
