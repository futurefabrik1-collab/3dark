import { motion } from "framer-motion";
import ContactSection from "./ContactSection";

interface UserLandingPageProps {
  title: string;
  subtitle?: string;
  challenge: {
    title: string;
    description: string;
  };
  approach: {
    title: string;
    description: string;
  };
  benefits: {
    title: string;
    items: string[];
  };
  ctaText?: string;
  icon?: React.ReactNode;
}

const UserLandingPage = ({
  title,
  subtitle,
  challenge,
  approach,
  benefits,
  ctaText = "Discuss Your Project",
  icon,
}: UserLandingPageProps) => {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-surface/30 to-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {icon && <div className="mb-6 opacity-70">{icon}</div>}
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
              {subtitle || "Digital Twin Solutions"}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
              {title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              {challenge.title}
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              {challenge.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-6 parchment-bg">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              {approach.title}
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              {approach.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
              {benefits.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 border border-border bg-background"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-0.5 flex-shrink-0">
                    <path d="M4 10l4 4L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
                  </svg>
                  <span className="text-sm text-foreground font-light">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 parchment-bg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Ready to Transform Your Environment?
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
            >
              {ctaText}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
};

export default UserLandingPage;
