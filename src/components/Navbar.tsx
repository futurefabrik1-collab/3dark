import { useState, useEffect, useRef, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, type Lang } from "@/i18n/translations";
import { useTheme } from "@/contexts/ThemeContext";
import { scrollToHash } from "@/lib/scrollToHash";

const SECTIONS = [
  { key: "work", hash: "#projects" },
  { key: "about", hash: "#about" },
  { key: "process", hash: "#process" },
  { key: "contact", hash: "#contact" },
] as const;

/**
 * Site header, used on every route. On the homepage the links scroll to their
 * section; elsewhere they go to "/#section" and ScrollManager takes over.
 */
const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations.nav[lang];
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  // Hash to scroll to once the mobile menu has finished closing. Scrolling while
  // the menu's height animation runs cancels the smooth scroll, which is why the
  // mobile links used to close the menu and go nowhere.
  const pendingHash = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const goTo = (hash: string) => {
    if (onHome) {
      window.history.pushState(null, "", hash);
      scrollToHash(hash);
    } else {
      navigate("/" + hash);
    }
  };

  const onDesktopLink = (e: MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    goTo(hash);
  };

  const onMobileLink = (e: MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    pendingHash.current = hash;
    setMenuOpen(false);
  };

  const onMenuClosed = () => {
    const hash = pendingHash.current;
    pendingHash.current = null;
    if (hash) goTo(hash);
  };

  const onLogo = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!onHome) return; // normal <Link> navigation to "/"
    e.preventDefault();
    window.history.pushState(null, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const langButton = (code: Lang) => {
    const active = lang === code;
    return (
      <button
        type="button"
        lang={code}
        aria-pressed={active}
        onClick={() => setLang(code)}
        className={`h-10 min-w-10 px-2 font-mono text-[11px] tracking-[0.15em] uppercase transition-colors duration-200 ${
          active
            ? "text-primary font-bold underline underline-offset-4 decoration-2"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {code.toUpperCase()}
      </button>
    );
  };

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        solid ? "bg-background/95 backdrop-blur-sm border-b border-border/50" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          onClick={onLogo}
          aria-label={t.home}
          className="font-serif text-xl tracking-[0.15em] uppercase text-primary"
        >
          3D-ARK
        </Link>

        <nav aria-label={t.mainNav} className="hidden md:flex items-center gap-8">
          {SECTIONS.map((s) => (
            <a
              key={s.hash}
              href={onHome ? s.hash : "/" + s.hash}
              onClick={(e) => onDesktopLink(e, s.hash)}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {t[s.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <div role="group" aria-label={t.language} className="flex items-center border border-border">
            {langButton("en")}
            <span className="text-border" aria-hidden="true">|</span>
            {langButton("de")}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t.darkMode}
            aria-pressed={theme === "dark"}
            className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary/60 transition-colors duration-200 text-muted-foreground hover:text-primary"
          >
            {theme === "dark" ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          <button
            ref={menuButton}
            type="button"
            className="md:hidden w-11 h-11 -mr-2 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={t.menu}
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-px bg-foreground transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence onExitComplete={onMenuClosed}>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <nav aria-label={t.mainNav} className="flex flex-col px-6 py-2">
              {SECTIONS.map((s) => (
                <a
                  key={s.hash}
                  href={onHome ? s.hash : "/" + s.hash}
                  onClick={(e) => onMobileLink(e, s.hash)}
                  className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors py-3"
                >
                  {t[s.key]}
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
