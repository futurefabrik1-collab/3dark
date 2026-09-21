import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { scrollToHash } from "@/lib/scrollToHash";

/**
 * Router-level scroll + focus handling. BrowserRouter does none of this on its
 * own, which meant:
 *  - clicking "Impressum" in the footer opened the page scrolled to its bottom;
 *  - deep links such as https://www.3dark.de/#contact landed at the top.
 *
 * On a forward navigation we jump to the hash target (or the top) and move
 * focus to the new page's <main id="main"> so screen readers announce it.
 * Back/forward (POP) is left to the browser's own scroll restoration.
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const first = useRef(true);

  useEffect(() => {
    const isFirst = first.current;
    first.current = false;

    if (hash) {
      scrollToHash(hash, isFirst ? "auto" : "smooth");
      return;
    }
    if (isFirst || navigationType === "POP") return;

    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [pathname, hash, navigationType]);

  return null;
};

export default ScrollManager;
