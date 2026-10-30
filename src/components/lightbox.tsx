import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export interface GalleryImage {
  src: string;
  alt: string;
}

/* Full-screen lightbox gallery.
 * - Rendered through a React portal to document.body so it is never clipped or
 *   trapped by ancestor stacking contexts / transforms (e.g. the <Reveal>
 *   wrapper's transform) — it is a true viewport-level fixed overlay.
 * - Opens with a fade + gentle scale-in; closes with a fade-out.
 * - Prev/Next arrows, close button, image counter.
 * - Keyboard: Escape (close), ArrowLeft/Right (nav), Tab (focus trap).
 * - Touch swipe navigation on mobile.
 * - Focus is trapped while open and restored to the triggering element on close.
 * - Background page scroll is locked while open and restored on close.
 * - Respects prefers-reduced-motion (instant transitions, no movement).
 * The backdrop is always dark so the photograph stays the visual focus in
 * both themes; controls are always dirty-white for contrast. */
export function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: GalleryImage[];
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const [direction, setDirection] = useState(0);
  const [closing, setClosing] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const prevFocus = useRef<HTMLElement | null>(null);
  const touchX = useRef<number | null>(null);

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const requestClose = useCallback(() => {
    if (prefersReduced) {
      onClose();
      return;
    }
    setClosing(true);
    window.setTimeout(() => onClose(), 200);
  }, [onClose, prefersReduced]);

  // Focus management: store trigger, focus close on open, restore on unmount.
  useEffect(() => {
    prevFocus.current = document.activeElement as HTMLElement;
    const t = window.setTimeout(() => closeRef.current?.focus(), 60);
    return () => {
      window.clearTimeout(t);
      prevFocus.current?.focus();
    };
  }, []);

  // Keyboard navigation + scroll lock.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          requestClose();
          break;
        case "ArrowRight":
          next();
          break;
        case "ArrowLeft":
          prev();
          break;
        case "Tab": {
          const els = Array.from(
            overlayRef.current?.querySelectorAll<HTMLButtonElement>("button:not([disabled])") ?? [],
          );
          if (els.length === 0) return;
          const first = els[0]!;
          const last = els[els.length - 1]!;
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
          break;
        }
      }
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [next, prev, requestClose]);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    if (t) touchX.current = t.clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const t = e.changedTouches[0];
    if (!t) return;
    const dx = t.clientX - touchX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
    touchX.current = null;
  };

  const current = images[index];
  if (!current) return null;
  const animClass = prefersReduced
    ? ""
    : direction === 0
      ? "anim-scale"
      : direction > 0
        ? "anim-next"
        : "anim-prev";

  // The lightbox only ever mounts after a client click, so document.body is
  // guaranteed to exist. Portalling to body escapes any ancestor transform /
  // overflow / stacking-context that would otherwise clip the fixed overlay.
  return createPortal(
    <div
      ref={overlayRef}
      className={`lightbox-overlay ${closing ? "lb-closing" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      onClick={(e) => {
        if (e.target === e.currentTarget) requestClose();
      }}
    >
      <button
        ref={closeRef}
        type="button"
        className="lightbox-close"
        onClick={requestClose}
        aria-label="Close gallery"
      >
        <span aria-hidden="true">✕</span>
      </button>

      <button
        type="button"
        className="lightbox-nav lightbox-prev"
        onClick={prev}
        aria-label="Previous image"
      >
        <span aria-hidden="true">←</span>
      </button>

      <div
        className="lightbox-stage"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onClick={(e) => {
          if (e.target === e.currentTarget) requestClose();
        }}
      >
        <img
          key={index}
          src={current.src}
          alt={current.alt}
          className={`lightbox-img ${animClass}`}
        />
      </div>

      <button
        type="button"
        className="lightbox-nav lightbox-next"
        onClick={next}
        aria-label="Next image"
      >
        <span aria-hidden="true">→</span>
      </button>

      <div className="lightbox-counter" aria-live="polite">
        {index + 1} / {images.length}
      </div>
    </div>,
    document.body,
  );
}
