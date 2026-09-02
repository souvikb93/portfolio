import type { Build, RichText } from "@/data/site";
import { ActionLink } from "./ActionLink";
import styles from "./BuildEntry.module.css";

/** Renders body copy with the emphasised runs the live site sets in bold. */
function Rich({ parts }: { parts: RichText }) {
  return (
    <>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          part
        ) : (
          <strong key={i} className={styles.em}>
            {part.b}
          </strong>
        ),
      )}
    </>
  );
}

/**
 * A build on the /builds index — a different layout from the home page's
 * BuildCard: a full-width stack of meta row, 8:1 preview clip, long-form copy
 * and a link, rather than the number/text two-column row.
 */
export function BuildEntry({ build }: { build: Build }) {
  return (
    <article className={styles.entry}>
      <div className={`t-meta ${styles.meta}`}>
        <span>({build.no})</span>
        <span className={styles.title}>{build.cardTitle}</span>
        <span>{build.year}</span>
      </div>

      {build.video ? (
        <video
          className={styles.media}
          src={build.video}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-label={`${build.title} preview`}
        />
      ) : (
        // Same footprint as a clip, so the rhythm holds until one is supplied.
        <div className={styles.mediaPlaceholder} role="img" aria-label={`${build.title} preview coming soon`} />
      )}

      <p className={`t-body ${styles.body}`}>
        <Rich parts={build.detail} />
      </p>

      <ActionLink href={build.href}>{build.cta}</ActionLink>
    </article>
  );
}
