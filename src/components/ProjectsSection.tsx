import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import illustrationScan from "@/assets/illustration-scan.jpg";
import { getRandomInViewAnimation } from "@/utils/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const youtubeEmbed = (url: string) => {
  const match = url.match(/(?:youtu\.be\/|v=)([A-Za-z0-9_-]{11})/);
  const id = match?.[1];
  return id ? `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1` : url;
};

const renderProjectMedia = (title: string) => {
  if (title === "GS Social Media Tour") {
    return (
      <video
        src="/media/sxsw-future-fabrik-transformers-gorilla-small.mp4"
        controls
        playsInline
        className="w-full h-full object-cover bg-black"
      />
    );
  }

  if (title === "Klärwerk Leipzig") {
    return (
      <iframe
        src={youtubeEmbed("https://youtu.be/3ibVve3ViK0")}
        title="Klärwerk Leipzig"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full border-0"
      />
    );
  }

  if (title === "Alice im Wonderland") {
    return (
      <iframe
        src="https://discover.storysplat.com/api/v2-html/43774b28-c045-485a-8117-db88189d727c"
        title="Alice im Wonderland"
        allow="accelerometer; gyroscope; xr-spatial-tracking"
        allowFullScreen
        className="w-full h-full border-0"
      />
    );
  }

  if (title === "iBug Festival") {
    return (
      <iframe
        src={youtubeEmbed("https://youtu.be/ump032qGpK4")}
        title="iBug Festival"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full border-0"
      />
    );
  }

  if (title === "MACHN Festival") {
    return (
      <iframe
        src={youtubeEmbed("https://www.youtube.com/watch?v=SA-d86T98lg&t")}
        title="MACHN Festival"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full border-0"
      />
    );
  }

  const staticImages: Record<string, string> = {
    "Babylon Berlin – Drachenburg": "/images/webp/babylon-berlin.webp",
    "Alfons Zitterbacke": "/images/webp/alfons-zitterbacke.webp",
    "Abandoned Buildings Leipzig": "/images/webp/abandoned-buildings-leipzig.webp",
  };

  if (staticImages[title]) {
    return (
      <img
        src={staticImages[title]}
        alt={title}
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
                      className="aspect-video media-placeholder rounded-sm flex items-center justify-center overflow-hidden bg-black"
                    >
                      {renderProjectMedia(project.title)}
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
