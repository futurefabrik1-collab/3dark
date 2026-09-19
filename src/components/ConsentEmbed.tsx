import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

type ConsentEmbedProps = {
  /** iframe URL — only requested after the visitor clicks. */
  src: string;
  title: string;
  /** Local poster image, so nothing third-party loads before the click. */
  poster: string;
  posterAlt?: string;
  /** Button label, e.g. "Play film" / "Click to explore". */
  cta: string;
  /** Short privacy note naming the provider the click will contact. */
  note: string;
  allow?: string;
  /** Sizing comes from the caller (aspect ratio or fixed height). */
  className?: string;
  /** Optional content above the button, e.g. navigation hints for a 3D scene. */
  hints?: ReactNode;
  onActivate?: () => void;
};

/**
 * Two-click embed. Third-party players (YouTube, StorySplat, splat viewers) set
 * cookies and receive the visitor's IP as soon as their iframe loads, so the
 * iframe is only mounted once the visitor asks for it. Until then we show a
 * locally hosted poster — which is also far lighter than five eager iframes.
 */
const ConsentEmbed = ({
  src,
  title,
  poster,
  posterAlt = "",
  cta,
  note,
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; xr-spatial-tracking",
  className,
  hints,
  onActivate,
}: ConsentEmbedProps) => {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className={cn("relative bg-black", className)}>
        <iframe
          src={src}
          title={title}
          allow={allow}
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-black", className)}>
      <img
        src={poster}
        alt={posterAlt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      <button
        type="button"
        onClick={() => {
          setLoaded(true);
          onActivate?.();
        }}
        aria-label={`${cta}: ${title}`}
        className="group absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
      >
        {hints}

        <span className="flex items-center gap-3 border border-white/80 bg-black/40 px-6 py-3 text-white transition-colors group-hover:bg-white group-hover:text-black">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          <span className="font-mono text-xs tracking-[0.2em] uppercase">{cta}</span>
        </span>

        <span className="max-w-md font-sans text-xs leading-relaxed text-white/75">{note}</span>
      </button>
    </div>
  );
};

export default ConsentEmbed;
