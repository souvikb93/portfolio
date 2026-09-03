import type { Gallery } from "@/data/caseStudies";
import styles from "./Figure.module.css";

/**
 * Case-study imagery. `layout` mirrors the arrangements the live site uses
 * inside its 1152px body column:
 *   wide          one 1110px plate, centred
 *   grid3         three 352px tiles, 48px gaps
 *   grid2         two 552px tiles, 48px gaps
 *   half          a single 552px tile, left-aligned
 *   halfRight     the same, aligned to the right of the column
 *   portraitPair  two 252px portraits, left-aligned
 *   center        one tile, centred at its natural width
 *   full          edge-to-edge, breaking out of the column
 */
export function FigureGroup({ gallery }: { gallery: Gallery }) {
  return (
    <div className={styles.group} data-layout={gallery.layout}>
      {gallery.items.map((item) => {
        const style = {
          aspectRatio: item.ratio,
          maxWidth: item.width,
          borderRadius: item.radius,
        } as React.CSSProperties;
        if (item.kind === "embed") {
          // Live embeds two interactive prototypes on the member portal study.
          // Sandboxed: scripts run (both need them), but nothing else is granted.
          return (
            <iframe
              key={item.src}
              className={styles.item}
              data-rounded={item.rounded ? "true" : undefined}
              style={style}
              src={item.src}
              title={item.alt}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            />
          );
        }
        return item.kind === "video" ? (
          <video
            key={item.src}
            className={styles.item}
            data-rounded={item.rounded ? "true" : undefined}
            style={style}
            src={item.src}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            aria-label={item.alt}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={item.src}
            className={styles.item}
            data-rounded={item.rounded ? "true" : undefined}
            style={style}
            src={item.src}
            alt={item.alt}
            loading="lazy"
          />
        );
      })}
    </div>
  );
}
