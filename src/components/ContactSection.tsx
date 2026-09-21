import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ContactForm from "./ContactForm";
import { getRandomInViewAnimation } from "@/utils/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();
  const t = translations.contact[lang];

  return (
    <section id="contact" className="py-20 md:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
              {t.sectionLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              {t.h2} <span className="gradient-text">{t.h2Highlight}</span>
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              {t.body}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-primary/30 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">{t.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-primary/30 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="1" stroke="currentColor" strokeWidth="2" />
                    <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">
                  {t.emailLabel}:{" "}
                  <a href="mailto:contact@futurefabrik.com" className="text-primary underline-offset-4 hover:underline">
                    contact@futurefabrik.com
                  </a>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div {...getRandomInViewAnimation(isInView, 0.2)}>
            <div className="bg-card border border-border rounded-sm p-8">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default ContactSection;
