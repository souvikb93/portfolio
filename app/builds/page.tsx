import Image from "next/image";
import { BuildEntry } from "@/components/BuildEntry";
import { Footer } from "@/components/Footer";
import { liveBuilds } from "@/data/site";
import styles from "./Builds.module.css";

export const metadata = { title: "Builds — Souvik B" };

const INTRO =
  "A collection of products I’ve built from idea to execution using modern AI tools. From identifying the problem and defining user journeys to designing the experience and shipping a functional product, these builds reflect my passion for turning ideas into reality.";

export default function BuildsPage() {
  return (
    <>
      <main className={styles.page}>
        <section className={`sticky-hero ${styles.hero}`}>
          <Image
            src="/images/QMPpU75EPMKUWpqueYj7rlfygDE.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroBg}
          />
          <div className={`container-narrow ${styles.heroInner}`}>
            <h1 className="t-page">
              AI Powered
              <br />
              Builds
            </h1>
            <p className={styles.heroIntro}>{INTRO}</p>
          </div>
        </section>

        <section className={`over-hero ${styles.list}`}>
          <div className="container-narrow">
            {liveBuilds.map((b) => (
              <BuildEntry key={b.title} build={b} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
