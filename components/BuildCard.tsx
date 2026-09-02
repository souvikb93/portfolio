import type { Build } from "@/data/site";
import { ActionLink } from "./ActionLink";
import styles from "./BuildCard.module.css";

// Framer "Service Card" (Builds section): step no + title + body + link.
// Single column in both places it is used — the home Builds band and /builds.
export function BuildCard({ build }: { build: Build }) {
  return (
    <article className={styles.card}>
      <div className={styles.left}>
        <span className="t-h1">{build.no}</span>
      </div>

      {build.video ? (
        <video
          className={styles.clip}
          src={build.video}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-label={`${build.title} preview`}
        />
      ) : (
        <div className={styles.clipPlaceholder} role="img" aria-label={`${build.title} preview coming soon`} />
      )}
      <div className={styles.body}>
        <h3 className="t-h3">{build.cardTitle}</h3>
        <div className={styles.copy}>
          <p className="t-sub">{build.tagline}</p>
          <p className="t-body">{build.body}</p>
        </div>
        <ActionLink href={build.href} tone="light">
          {build.cta}
        </ActionLink>
      </div>
    </article>
  );
}
