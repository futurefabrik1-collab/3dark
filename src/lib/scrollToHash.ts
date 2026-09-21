/** True when the visitor has asked the OS for reduced motion. */
export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Smooth scrolling, unless the visitor prefers reduced motion. */
export const scrollBehavior = (): ScrollBehavior => (prefersReducedMotion() ? "auto" : "smooth");

let pendingCorrection: number | undefined;
let stopCorrectionListeners: (() => void) | undefined;

function cancelCorrection() {
  window.clearTimeout(pendingCorrection);
  pendingCorrection = undefined;
  stopCorrectionListeners?.();
  stopCorrectionListeners = undefined;
}

/**
 * Scroll to the element a URL hash points at, waiting for it to exist, and
 * move keyboard/screen-reader focus to it.
 *
 * Sections are rendered by React after load, so a deep link like /#contact
 * cannot rely on the browser's native anchor jump — the target is not in the
 * DOM yet when the browser tries. This polls for up to ~2 s, then scrolls.
 */
export function scrollToHash(hash: string, behavior: ScrollBehavior = scrollBehavior()): void {
  let id: string;
  try {
    id = decodeURIComponent(hash.replace(/^#/, ""));
  } catch {
    return; // malformed escape such as "#%E0%A4%A" — not a section of ours
  }
  if (!id) return;

  cancelCorrection();
  if (behavior === "smooth" && prefersReducedMotion()) behavior = "auto";

  const deadline = performance.now() + 2000;
  const attempt = () => {
    const el = document.getElementById(id);
    if (!el) {
      if (performance.now() < deadline) requestAnimationFrame(attempt);
      return;
    }

    el.scrollIntoView({ behavior, block: "start" });

    // Native in-page links move focus to their target; do the same so keyboard
    // and screen-reader users continue from the section they asked for.
    if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });

    // Images, fonts and entrance animations above the target can still shift
    // the layout after the first jump; correct once it has settled — unless
    // the visitor has started scrolling on their own in the meantime.
    const stop = () => cancelCorrection();
    const events = ["wheel", "touchstart", "keydown", "mousedown"] as const;
    events.forEach((ev) => window.addEventListener(ev, stop, { passive: true, once: true }));
    stopCorrectionListeners = () => events.forEach((ev) => window.removeEventListener(ev, stop));

    pendingCorrection = window.setTimeout(() => {
      stopCorrectionListeners?.();
      stopCorrectionListeners = undefined;
      const top = el.getBoundingClientRect().top;
      const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
      if (Math.abs(top - margin) > 8) el.scrollIntoView({ behavior: "auto", block: "start" });
    }, behavior === "smooth" ? 1200 : 600);
  };
  attempt();
}
