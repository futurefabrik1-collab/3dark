import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getRandomInViewAnimation } from "@/utils/animations";

const benefits = [
  { title: 'Underground venues with complex lighting', desc: "Clubs, basements, adapted spaces — where the light defines the atmosphere." },
  { title: "Ephemeral events and installations", desc: "Festivals, pop-ups, guerrilla exhibitions — documented before they dismantle." },
  { title: "Abandoned industrial spaces", desc: "Factory floors, former warehouses, sites in transition." },
  { title: "Film and production environments", desc: "Location assets and set extensions for virtual production workflows." },
  { title: "Subcultural and informal spaces", desc: "Spaces that operate outside institutional documentation frameworks." },
];

const AboutWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden parchment-bg">
      {/* Background image with increased opacity */}
      <div className="absolute inset-0">
        <img 
          src="/images/urban-tunnel.png" 
          alt="" 
          className="w-full h-full object-cover opacity-10 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background" />
      </div>
      
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <img src="/images/pattern-grid.png" alt="" className="w-full h-full object-cover mix-blend-overlay" />
      </div>
      
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Combined Intro Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6">
            What We Do
          </p>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto mb-6">
            3DARK documents spaces that exist outside conventional frameworks — underground clubs, abandoned industrial sites, temporary installations, locations that have no place in institutional archives. We capture their geometry, their surface detail, and their specific sensory character before they close, are demolished, or simply move on.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            We capture real environments with advanced reconstruction pipelines and deliver them as production-ready spatial documents — optimised for web, real-time engines, and presentation contexts.
          </p>
        </motion.div>

        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="border-t border-border pt-10 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Who We Are
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              We came to this work through subcultures and alternative spaces — places built on DIY ethics, operating outside mainstream channels. That context shapes how we approach documentation. We understand the social function of the spaces we record, and that understanding is present in how we work.
            </p>
            <p className="text-sm text-muted-foreground/80 font-light leading-relaxed">
              Precise in method. Attentive to atmosphere. We record not just what a space looks like, but what it feels like to stand inside it.
            </p>
          </div>
          <motion.div 
            {...getRandomInViewAnimation(isInView, 0.4)}
            className="relative aspect-video overflow-hidden neon-border group"
          >
            <img 
              src="/images/art-installation.png" 
              alt="3DARK Art Installation" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </motion.div>
        </motion.div>

        {/* Why Gaussian Splatting */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            The Method
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4 max-w-2xl">
            Light, surface, and texture in their actual state
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-10 max-w-2xl">
            Gaussian Splatting captures the visual reality of a space with a fidelity that conventional 3D scanning cannot match. The specific quality of light through a dirty skylight. The patina of years of use on a concrete floor. The way a low ceiling changes the acoustic character of a room. These are not decorative details. They are the evidence of a space's social history.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                {...getRandomInViewAnimation(isInView, 0.6 + 0.1 * i)}
                className="p-6 border border-border hover:border-primary/30 transition-all duration-500"
              >
                <h3 className="text-sm font-medium text-foreground mb-2">{b.title}</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutWorkSection;
