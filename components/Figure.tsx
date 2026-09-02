import type { Gallery } from "@/data/caseStudies";
import styles from "./Figure.module.css";

/**
 * Case-study imagery. `layout` mirrors the arrangements the live site uses
 * inside its 1152px body column:
 *   wide          one 1110px plate, centred
 *   grid3         three 352px tiles, 48px gaps
 *   grid2         two 552px tiles, 48px gaps
 *   half          a single 552px tile, left-aligned
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
        } as React.CSSProperties;
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
