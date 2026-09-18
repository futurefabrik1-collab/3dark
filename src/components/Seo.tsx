import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.3dark.de";

type SeoProps = {
  title: string;
  description: string;
  /** Path only, e.g. "/who-its-for/industrial". Defaults to the current route. */
  path?: string;
  /** Set to true on pages that should not be indexed (legal pages, 404). */
  noindex?: boolean;
};

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Per-route <title>, description and canonical.
 *
 * The site is a client-side SPA served from a single index.html, so without
 * this every route inherited the homepage's canonical — which told Google the
 * landing pages were duplicates of "/" and kept them out of the index.
 *
 * NOTE: this only fixes the JavaScript-rendered pass. Crawlers that do not run
 * JS still receive an empty shell; prerendering is the remaining fix.
 */
const Seo = ({ title, description, path, noindex = false }: SeoProps) => {
  const location = useLocation();
  const url = `${SITE_URL}${path ?? location.pathname}`;

  useEffect(() => {
    document.title = title;

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (noindex) {
      setMeta('meta[name="robots"]', "name", "robots", "noindex, follow");
    } else if (robots) {
      robots.remove();
    }
  }, [title, description, url, noindex]);

  return null;
};

export default Seo;
