import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Klärwerk Leipzig",
    subtitle: "Digital Twin mit CAD-Integration",
    tag: "Industrie",
  },
  {
    title: "iBug Festival",
    subtitle: "3D Twin & Time Machine",
    tag: "Kultur",
  },
  {
    title: "MACHN Festival",
    subtitle: "3D Orientierungssystem",
    tag: "Events",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.3em] uppercase text-primary/60 mb-12"
        >
          Ausgewählte Projekte
        </motion.p>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * i }}
              className="group border-t border-border py-8 flex items-start md:items-center justify-between gap-4 flex-col md:flex-row"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-light text-foreground group-hover:text-primary transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 font-light">
                  {project.subtitle}
                </p>
              </div>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary/50 border border-primary/20 px-3 py-1 rounded-sm shrink-0">
                {project.tag}
              </span>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
