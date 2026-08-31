import Link from "next/link";
import type { Build } from "@/data/site";
import styles from "./BuildCard.module.css";

// Framer "Service Card" (Builds section): step no + title + body + link.
export function BuildCard({ build }: { build: Build }) {
  const external = build.href.startsWith("http");
  return (
    <article className={styles.card}>
      <div className={styles.left}>
        <span className="t-h1">{build.no}</span>
      </div>
      <div className={styles.body}>
        <h3 className="t-h3">{build.title}</h3>
        <div className={styles.copy}>
          <p className="t-sub">{build.tagline}</p>
          <p className="t-body">{build.body}</p>
        </div>
        <Link
          href={build.href}
          className={styles.link}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
        >
          {build.href.includes("tracka") ? "View Project" : "Explore Now"} →
        </Link>
      </div>
    </article>
  );
}
