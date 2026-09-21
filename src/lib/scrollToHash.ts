/**
 * Scroll to the element a URL hash points at, waiting for it to exist.
 *
 * Sections are rendered by React after load, so a deep link like /#contact
 * cannot rely on the browser's native anchor jump — the target is not in the
 * DOM yet when the browser tries. This polls for up to ~2 s, then scrolls.
 */
export function scrollToHash(hash: string, behavior: ScrollBehavior = "smooth"): void {
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  if (!id) return;

  const deadline = performance.now() + 2000;
  const attempt = () => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior, block: "start" });
      // Images, fonts and entrance animations above the target can still shift
      // the layout after the first jump; correct once it has settled.
      window.setTimeout(() => {
        const top = el.getBoundingClientRect().top;
        const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
        if (Math.abs(top - margin) > 8) el.scrollIntoView({ behavior: "auto", block: "start" });
      }, behavior === "smooth" ? 1200 : 600);
      return;
    }
    if (performance.now() < deadline) requestAnimationFrame(attempt);
  };
  attempt();
}
