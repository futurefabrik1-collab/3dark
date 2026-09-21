import { ReactNode, useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * One player at a time. Starting a video or scene stops whatever was playing
 * before (an embed goes back to its poster, a <video> pauses); previously every
 * player kept running, with sound, and there was no way back.
 */
type Playback = { key: object; stop: () => void };
let current: Playback | null = null;

export function claimPlayback(owner: HTMLVideoElement | Playback): void {
  const next: Playback = owner instanceof HTMLVideoElement ? { key: owner, stop: () => owner.pause() } : owner;
  if (current && current.key !== next.key) current.stop();
  current = next;
}

function releasePlayback(key: object): void {
  if (current?.key === key) current = null;
}

type ConsentEmbedProps = {
  /** iframe URL — only requested after the visitor clicks. */
  src: string;
  title: string;
  /** Local poster image, so nothing third-party loads before the click. */
  poster: string;
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
 * Two-click embed. Third-party players (YouTube, StorySplat) set cookies and
 * receive the visitor's IP as soon as their iframe loads, so the iframe is only
 * mounted once the visitor asks for it. Until then we show a locally hosted
 * poster — which is also far lighter than eager iframes.
 */
const ConsentEmbed = ({
  src,
  title,
  poster,
  cta,
  note,
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; xr-spatial-tracking",
  className,
  hints,
  onActivate,
}: ConsentEmbedProps) => {
  const [loaded, setLoaded] = useState(false);
  const token = useRef({}).current;
  const frame = useRef<HTMLIFrameElement>(null);
  const noteId = useId();
  const labelId = useId();
  const titleId = useId();

  useEffect(() => () => releasePlayback(token), [token]);

  useEffect(() => {
    if (loaded) frame.current?.focus();
  }, [loaded]);

  const activate = () => {
    claimPlayback({ key: token, stop: () => setLoaded(false) });
    setLoaded(true);
    onActivate?.();
  };

  if (loaded) {
    return (
      <div className={cn("relative bg-black", className)}>
        <iframe
          ref={frame}
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
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* The whole poster is the button (as before the privacy overlay was
          added): a tap anywhere starts it, not just on the small pill. Name and
          description are wired explicitly so the privacy note is announced as
          the description rather than folded into the button's name. */}
      <button
        type="button"
        onClick={activate}
        aria-labelledby={`${labelId} ${titleId}`}
        aria-describedby={noteId}
        className="group absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-5 p-2 sm:p-6 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
      >
        {hints}

        <span className="flex items-center gap-3 border border-white/80 bg-black/50 px-4 py-2 sm:px-5 sm:py-3 text-white transition-colors group-hover:bg-white group-hover:text-black">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          <span id={labelId} className="font-mono text-xs tracking-[0.2em] uppercase">{cta}</span>
          <span id={titleId} className="sr-only">{title}</span>
        </span>

        <span
          id={noteId}
          className="block max-w-md bg-black/70 px-2 py-1 sm:px-3 sm:py-2 font-sans text-[10px] leading-snug sm:text-xs sm:leading-relaxed text-white/95"
        >
          {note}
        </span>
      </button>
    </div>
  );
};

export default ConsentEmbed;
