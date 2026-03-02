import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getRandomInViewAnimation } from "@/utils/animations";

const ShowreelSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="showreel" className="py-32 px-6 relative overflow-hidden bg-background">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images/art-installation.png" 
          alt="" 
          className="w-full h-full object-cover opacity-10 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      
      {/* Industrial grid overlay */}
      <div className="absolute inset-0 industrial-grid opacity-10" />
      
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Showreel
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground max-w-2xl mx-auto mb-4">
            Gaussian Splatting in Aktion
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            Erleben Sie unsere digitalen Environments – von Underground-Locations bis zu industriellen Digital Twins
          </p>
        </motion.div>

        {/* Full-width video placeholder */}
        <motion.div
          {...getRandomInViewAnimation(isInView, 0.3)}
          className="mt-12"
        >
          <div className="aspect-[21/9] media-placeholder rounded-sm flex items-center justify-center neon-border group relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <img src="/images/pattern-grid.png" alt="" className="w-full h-full object-cover" />
            </div>
            
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto mb-4 group-hover:border-primary/60 transition-all duration-500 group-hover:scale-110">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary ml-1">
                  <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                </svg>
              </div>
              <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                Showreel · Gaussian Splatting in Aktion
              </p>
              <p className="text-xs text-muted-foreground/50 mt-1">
                Video Platzhalter · 21:9
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowreelSection;
