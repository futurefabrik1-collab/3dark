import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import illustrationScan from "@/assets/illustration-scan.jpg";
import { getRandomInViewAnimation } from "@/utils/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import ConsentEmbed from "./ConsentEmbed";

// Third-party players only load after a click (see ConsentEmbed): before that
// we show a locally hosted poster, so no visitor data reaches YouTube/StorySplat
// until they ask for it — and the page no longer boots four iframes up front.
const youtubeEmbed = (id: string) =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;

type EmbedSpec = { kind: "film" | "scene"; src: string; poster: string };

const EMBEDS: Record<string, EmbedSpec> = {
  "Klärwerk Leipzig": {
    kind: "film",
    src: youtubeEmbed("3ibVve3ViK0"),
    poster: "/images/webp/posters/klaerwerk-leipzig.webp",
  },
  "Alice im Wonderland": {
    kind: "scene",
    src: "https://discover.storysplat.com/api/v2-html/43774b28-c045-485a-8117-db88189d727c",
    poster: "/images/webp/posters/alice-im-wonderland.webp",
  },
  "iBug Festival": {
    kind: "film",
    src: youtubeEmbed("ump032qGpK4"),
    poster: "/images/webp/posters/ibug-walkthrough.webp",
  },
  "MACHN Festival": {
    kind: "film",
    src: youtubeEmbed("SA-d86T98lg"),
    poster: "/images/webp/posters/machn-festival.webp",
  },
};

const STATIC_IMAGES: Record<string, string> = {
  "Babylon Berlin – Drachenburg": "/images/webp/babylon-berlin.webp",
  "Alfons Zitterbacke": "/images/webp/alfons-zitterbacke.webp",
  "Abandoned Buildings Leipzig": "/images/webp/abandoned-buildings-leipzig.webp",
};

const LOCAL_VIDEO_TITLE = "GS Social Media Tour";

const hasRealMedia = (title: string) =>
  title === LOCAL_VIDEO_TITLE || Boolean(EMBEDS[title]) || Boolean(STATIC_IMAGES[title]);

type EmbedStrings = (typeof translations.embed)["en"];

const renderProjectMedia = (title: string, e: EmbedStrings) => {
  if (title === LOCAL_VIDEO_TITLE) {
    return (
      <video
        src="/media/sxsw-future-fabrik-transformers-gorilla-small.mp4"
        controls
        playsInline
        preload="none"
        poster="/images/webp/posters/gs-social-media-tour.webp"
        className="w-full h-full object-cover bg-black"
      />
    );
  }

  const embed = EMBEDS[title];
  if (embed) {
    return (
      <ConsentEmbed
        src={embed.src}
        title={title}
        poster={embed.poster}
        cta={embed.kind === "scene" ? e.explore : e.playFilm}
        note={embed.kind === "scene" ? e.noteScene : e.noteYouTube}
        className="w-full h-full"
      />
    );
  }

  if (STATIC_IMAGES[title]) {
    return (
      <img
        src={STATIC_IMAGES[title]}
        alt={title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
    );
  }

  return (
    <div className="relative z-10 text-center p-4">
      <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
          <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
        {title}
      </p>
    </div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();
  const t = translations.projects[lang];
  const projects = translations.projectsList[lang];
  const e = translations.embed[lang];

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url(${illustrationScan})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            {t.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground max-w-xl">
            {t.h2}
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[52px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-14">
            {projects.map((project, i) => (
              <motion.div
                key={`${project.title}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.07 * Math.min(i, 8) }}
                className="grid grid-cols-1 md:grid-cols-[64px_1fr] gap-6 md:gap-10"
              >
                <div className="hidden md:flex items-start justify-end pr-4">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-primary bg-background relative z-10">
                    {project.year}
                  </span>
                </div>

                <div className={`grid grid-cols-1 ${project.showMedia ? "lg:grid-cols-2" : ""} gap-8`}>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="md:hidden font-mono text-[10px] tracking-[0.12em] text-primary mr-1">
                        {project.year}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary border border-primary/30 px-3 py-1">
                        {project.tag}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-primary/80 mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {project.showMedia && (
                    <motion.div
                      {...getRandomInViewAnimation(isInView, 0.1 * Math.min(i, 6) + 0.2)}
                      className={`aspect-video rounded-sm flex items-center justify-center overflow-hidden bg-black ${
                        hasRealMedia(project.title) ? "relative" : "media-placeholder"
                      }`}
                    >
                      {renderProjectMedia(project.title, e)}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
