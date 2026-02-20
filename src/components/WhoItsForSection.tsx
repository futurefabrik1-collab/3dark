import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const userTypes = [
  {
    title: "For Industrial & Infrastructure Teams",
    description: "Communicate complex sites clearly.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
        <rect x="4" y="12" width="24" height="16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12V6h4v6M16 12V8h4v4M24 12V10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    link: "/industrial",
  },
  {
    title: "For Producers & Creative Directors",
    description: "Capture real environments for immersive storytelling.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
        <rect x="4" y="10" width="24" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 16l6 4V12l-6 4z" fill="currentColor" />
      </svg>
    ),
    link: "/producers",
  },
  {
    title: "For Cultural Institutions & Festivals",
    description: "Preserve spaces and create interactive archives.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
        <rect x="6" y="8" width="20" height="18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 8L16 4l10 4M12 14h8M12 18h8M12 22h4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    link: "/cultural",
  },
  {
    title: "For Marketing & Communication Leaders",
    description: "Turn real sites into high-impact digital assets.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 8v8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    link: "/marketing",
  },
];

const WhoItsForSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="who-its-for" className="py-32 px-6 bg-background">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Who It's For
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            Built for Teams That Need More Than Photos
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            Whether you're communicating complex industrial sites, capturing environments for production, 
            preserving cultural spaces, or creating compelling marketing assets — we deliver spatial intelligence 
            that drives real decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {userTypes.map((user, i) => (
            <motion.div
              key={user.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group p-8 border border-border bg-background hover:bg-surface-elevated transition-all duration-500 hover:border-primary/30"
            >
              <div className="mb-5 opacity-70 group-hover:opacity-100 transition-opacity">
                {user.icon}
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                {user.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                {user.description}
              </p>
              <a
                href={user.link}
                className="inline-flex items-center gap-2 text-xs text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
