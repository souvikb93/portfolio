"use client";

import { useEffect, useRef } from "react";

/**
 * Publishes scroll progress as a --p custom property (0 -> 1 across the first
 * viewport of scrolling) so descendants can drive transforms from it in CSS.
 *
 * Used by the index pages to run the hero dim and the diagonal curtain off a
 * single progress value, so both stay in step and reverse exactly on scroll up.
 */
export function ScrollStage({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Written straight from the scroll handler — one custom-property write,
    // already coalesced by the browser; a rAF hop would only add a frame.
    const apply = () => {
      const el = ref.current;
      if (!el) return;
      const span = window.innerHeight;
      const p = span > 0
        ? Math.min(Math.max(-el.getBoundingClientRect().top / span, 0), 1)
        : 0;
      el.style.setProperty("--p", p.toFixed(4));
    };

    window.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("resize", apply);
    apply();
    return () => {
      window.removeEventListener("scroll", apply);
      window.removeEventListener("resize", apply);
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
