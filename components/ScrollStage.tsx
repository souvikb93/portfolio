"use client";

import { useEffect, useRef } from "react";

/**
 * Publishes scroll progress as a --p custom property (0 -> 1 across the first
 * viewport of scrolling) so descendants can drive transforms from it in CSS.
 *
 * Used by the index pages to run the hero dim and the diagonal curtain off a
 * single progress value, so both stay in step and reverse exactly on scroll up.
 */
export function ScrollStage({
  children,
  mode = "leave",
  className,
}: {
  children: React.ReactNode;
  /**
   * "leave"  progress as the stage scrolls out of the top — for page heroes.
   * "enter"  progress as the stage rises into view from the bottom — for bands
   *          further down the page, which would otherwise sit at 0 until their
   *          top reached the viewport top and then jump.
   */
  mode?: "leave" | "enter";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Written straight from the scroll handler — one custom-property write,
    // already coalesced by the browser; a rAF hop would only add a frame.
    const apply = () => {
      const el = ref.current;
      if (!el) return;
      const span = window.innerHeight;
      if (span <= 0) return;
      const top = el.getBoundingClientRect().top;
      const raw = mode === "enter" ? (span - top) / span : -top / span;
      const p = Math.min(Math.max(raw, 0), 1);
      el.style.setProperty("--p", p.toFixed(4));
    };

    window.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("resize", apply);
    apply();
    return () => {
      window.removeEventListener("scroll", apply);
      window.removeEventListener("resize", apply);
    };
  }, [mode]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
