import Image from "next/image";
import type { Project } from "@/data/site";
import { ActionLink } from "./ActionLink";
import styles from "./ProjectCard.module.css";

/**
 * Card on the /projects index. Two image layers, as on the live site: a
 * defocused backdrop filling the tile, and a sharp inset centred on top. Only
 * the inset scales on hover — the tile clips, so the card never changes size.
 *
 * The home page uses WorkCard instead, which is a single-image tile.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={`t-meta ${styles.meta}`}>
        <span className={styles.no}>{project.no}</span>
        <span className={styles.text}>
          <span className={styles.title}>{project.title}</span>
          <span className={styles.category}>{project.category}</span>
        </span>
        <span className={styles.year}>{project.year}</span>
      </div>

      <div className={styles.tile}>
        <Image
          className={styles.back}
          src={project.image}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 810px) 100vw, 576px"
        />
        <div className={styles.frontWrap}>
          <Image
            className={styles.front}
            src={project.imageFg}
            alt={project.title}
            fill
            sizes="(max-width: 810px) 70vw, 400px"
          />
        </div>
      </div>

      <p className={`t-body ${styles.blurb}`}>{project.blurb}</p>
      <ActionLink href={project.href}>View Project</ActionLink>
    </article>
  );
}
