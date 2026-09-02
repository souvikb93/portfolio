import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/site";
import { MIRROR_LIVE } from "@/data/fidelity";
import styles from "./WorkCard.module.css";

// Framer "Work Card": image tile + roll-no / title / category / year.
export function WorkCard({ project }: { project: Project }) {
  return (
    <Link href={project.href} className={styles.card}>
      <div className={styles.media}>
        <Image
          src={project.image}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 810px) 100vw, 640px"
          className={styles.img}
        />
        <div className={styles.frontWrap}>
          <Image
            src={project.imageFg}
            alt={(MIRROR_LIVE && project.titleHome) || project.title}
            fill
            sizes="(max-width: 810px) 70vw, 400px"
            className={styles.front}
          />
        </div>
      </div>
      <div className={`t-meta ${styles.meta}`}>
        <span className={styles.no}>{project.no}</span>
        <div className={styles.text}>
          <span className={styles.title}>{(MIRROR_LIVE && project.titleHome) || project.title}</span>
          <span className={styles.category}>
            {(MIRROR_LIVE && project.categoryHome) || project.category}
          </span>
        </div>
        <span className={styles.year}>{(MIRROR_LIVE && project.yearHome) || project.year}</span>
      </div>
    </Link>
  );
}
