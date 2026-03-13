import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const Navbar = () => {
  const { lang, toggle } = useLanguage();
  const t = translations.nav[lang];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.work, href: "#projects" },
    { label: t.about, href: "#about" },
    { label: t.process, href: "#process" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-xl tracking-[0.15em] uppercase text-primary text-glow"
        >
          3D-ARK
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: lang toggle + mobile menu button */}
        <div className="flex items-center gap-4">
          {/* Language toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.15em] uppercase border border-border hover:border-primary/60 transition-colors duration-200 px-3 py-1.5 group"
          >
            <span className={lang === "en" ? "text-primary" : "text-muted-foreground group-hover:text-foreground transition-colors"}>
              EN
            </span>
            <span className="text-border">|</span>
            <span className={lang === "de" ? "text-primary" : "text-muted-foreground group-hover:text-foreground transition-colors"}>
              DE
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-foreground transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-background/98 backdrop-blur-sm border-b border-border"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
