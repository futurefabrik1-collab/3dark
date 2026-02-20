import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HowWeWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6 parchment-bg">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6">
            How We Work
          </p>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            We capture real-world environments using advanced reconstruction pipelines and transform them into 
            production-ready digital twins optimized for web, real-time engines and presentation environments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
