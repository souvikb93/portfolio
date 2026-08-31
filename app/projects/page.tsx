import Image from "next/image";
import { WorkCard } from "@/components/WorkCard";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/site";
import styles from "./Projects.module.css";

export const metadata = { title: "Projects — Souvik B" };

const INTRO =
  "Over the past 5+ years, I’ve had the opportunity to design products across healthcare, finance, enterprise, and consumer domains while working with leading IT consultancies.";

export default function ProjectsPage() {
  return (
    <>
      <main>
        <section className={styles.hero}>
          <Image
            src="/images/gM2fq6noqljYPYZPLPvgiKwzUA.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroBg}
          />
          <div className={`container-narrow ${styles.heroInner}`}>
            <h1 className="t-page">
              Client
              <br />
              Projects
            </h1>
            <p className={styles.heroIntro}>{INTRO}</p>
          </div>
        </section>

        <section className={`section ${styles.work}`}>
          <div className={`container ${styles.grid}`}>
            {projects.map((p) => (
              <WorkCard key={p.title} project={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
