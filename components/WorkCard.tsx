import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/site";
import styles from "./WorkCard.module.css";

// Framer "Work Card": image tile + roll-no / title / category / year.
export function WorkCard({ project }: { project: Project }) {
  return (
    <Link href={project.href} className={styles.card}>
      <div className={styles.media}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 810px) 100vw, 640px"
          className={styles.img}
        />
      </div>
      <div className={`t-meta ${styles.meta}`}>
        <span className={styles.no}>{project.no}</span>
        <div className={styles.text}>
          <span className={styles.title}>{project.title}</span>
          <span className={styles.category}>{project.category}</span>
        </div>
        <span className={styles.year}>{project.year}</span>
      </div>
    </Link>
  );
}
