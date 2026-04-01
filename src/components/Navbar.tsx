import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const { lang, toggle } = useLanguage();
  const { theme, toggleTheme } = useTheme();
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

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center border border-border hover:border-primary/60 transition-colors duration-200 text-muted-foreground hover:text-primary"
          >
            {theme === "dark" ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            )}
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
