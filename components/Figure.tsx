import type { Gallery, Place } from "@/data/caseStudies";
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
 *   tilePair      two natural-width tiles side by side, 10px apart
 *   columns       labelled before/after columns, each stacking its own plates
 *   stage         one fixed frame with plates placed absolutely inside it
 */
export function FigureGroup({ gallery }: { gallery: Gallery }) {
  if (gallery.layout === "columns") return <ColumnPair gallery={gallery} />;
  if (gallery.layout === "stage") return <Stage gallery={gallery} />;
  return (
    <div className={styles.group} data-layout={gallery.layout}>
      {(gallery.items ?? []).map((item) => {
        const style = {
          aspectRatio: item.ratio,
          maxWidth: item.width,
          borderRadius: item.radius,
          // Layouts whose track is sized to its content cannot resolve a
          // replaced element's `width: 100%` — they read the design width off
          // this instead. See --embed-w below for the same problem on iframes.
          "--tile-w": item.width,
        } as React.CSSProperties;
        // A plate can carry its own small print, as the trade-off modals do.
        const wrap = (el: React.ReactNode) =>
          item.caption ? (
            <figure key={item.src} className={styles.figure}>
              {el}
              <figcaption className="t-body2 muted">{item.caption}</figcaption>
            </figure>
          ) : (
            el
          );

        if (item.kind === "embed") {
          // Live embeds interactive prototypes on several studies. Sandboxed:
          // scripts run (they all need them), but nothing else is granted.
          // These are fixed-width interactive layouts. Below the breakpoint they
          // keep their design width and scroll sideways inside their own box,
          // rather than shrinking their labels past legibility.
          //
          // `centre`/`wide` size their grid area to fit-content, and a replaced
          // element's `width: 100%` against an indefinite size falls back to the
          // iframe's intrinsic 300px. So an embed hands its design width to CSS
          // as a variable, which the phone rule can still cap.
          return wrap(
            <div key={item.src} className={styles.embedScroll}>
              <iframe
                className={styles.item}
                data-rounded={item.rounded ? "true" : undefined}
                style={{ ...style, "--embed-w": item.width } as React.CSSProperties}
                src={item.src}
                title={item.alt}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          );
        }
        return wrap(
          item.kind === "video" ? (
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
          )
        );
      })}
    </div>
  );
}

/**
 * The before/after pairs the solution blocks run: a label over each column,
 * and each column stacking its own plates. A row-grid cannot express this —
 * the columns hold different numbers of plates at different sizes.
 */
function ColumnPair({ gallery }: { gallery: Gallery }) {
  const label = gallery.labelSize === "lead" ? "t-h5" : "t-sub";
  return (
    <div
      className={styles.columns}
      style={{ gridTemplateColumns: `repeat(${gallery.columns?.length ?? 2}, 1fr)` }}
    >
      {(gallery.columns ?? []).map((col) => (
        <div key={col.label} className={styles.column}>
          <p className={label}>{col.label}</p>
          {col.rows.map((row, i) => (
            <FigureGroup key={i} gallery={row} />
          ))}
        </div>
      ))}
    </div>
  );
}

/** A placed plate's box, as percentages of the frame it sits in. */
function placeStyle(place: Place, stage: { width: number; height: number }) {
  const x = (v?: number) => (v === undefined ? undefined : `${(v / stage.width) * 100}%`);
  const y = (v?: number) => (v === undefined ? undefined : `${(v / stage.height) * 100}%`);
  return {
    top: y(place.top),
    right: x(place.right),
    bottom: y(place.bottom),
    left: x(place.left),
    width: x(place.width),
    height: y(place.height),
  } as React.CSSProperties;
}

/**
 * One frame with its plates placed absolutely inside it, the way the live
 * page overlaps a phone with the panel that explains it, or fans three
 * breakpoints out over each other. Sizes are the live px, converted to
 * percentages so the whole composition scales down as one piece.
 */
function Stage({ gallery }: { gallery: Gallery }) {
  const stage = gallery.stage ?? { width: 1, height: 1 };
  return (
    <div className={styles.group} data-layout="stage">
      <div
        className={styles.stage}
        style={{ width: stage.width, aspectRatio: `${stage.width} / ${stage.height}` }}
      >
        {(gallery.items ?? []).map((item) => {
          const style = {
            aspectRatio: item.ratio,
            borderRadius: item.radius,
            ...placeStyle(item.place ?? {}, stage),
          };
          return item.kind === "embed" ? (
            <iframe
              key={item.src}
              className={styles.placed}
              style={style}
              src={item.src}
              title={item.alt}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={item.src}
              className={styles.placed}
              style={style}
              src={item.src}
              alt={item.alt}
              loading="lazy"
            />
          );
        })}
      </div>
    </div>
  );
}
