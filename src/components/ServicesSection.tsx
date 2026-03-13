import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const solutions = [
  {
    image: "/images/service-urban-tunnel.png",
    label: "Spatial Documentation",
    detail: "We capture environments in detail — their geometry, surface texture, and light. Not a stylised rendering, but a precise spatial record. Useful for spaces that are too complex, too dark, or too temporary for conventional photographic documentation.",
  },
  {
    image: "/images/service-club-scan.png",
    label: "Accessible Archives",
    detail: "The result is a navigable environment, accessible from any browser. No specialist hardware. A QR code, a link — and the space exists again, in the form it held at the moment of capture.",
  },
  {
    image: "/images/service-virtual-production.png",
    label: "Production Assets",
    detail: "Spatial data ready for film and virtual production pipelines. Location scouting for places that no longer exist. Gaussian Splatting environments as VFX plates, set extensions, or game assets — the physical reality of a space, delivered as a production-ready file.",
  },
  {
    image: "/images/service-warehouse-ruins.png",
    label: "Cultural Record",
    detail: "Industrial ruins. Informal venues. Underground events. We document the spaces that communities build and inhabit — and that institutional archives consistently overlook. A record made for those who were there, and accessible to those who come after.",
  },
];

const SolutionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solutions" className="py-32 px-6 parchment-bg">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            What We Deliver
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground max-w-xl">
            Digital environments for spaces that resist conventional documentation
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group border border-border bg-background hover:bg-surface-elevated transition-all duration-500 hover:border-primary/30 overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.label}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                  {solution.label}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {solution.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
