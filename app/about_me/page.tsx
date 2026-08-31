import Image from "next/image";
import { HeaderBar } from "@/components/HeaderBar";
import { TextReveal } from "@/components/TextReveal";
import { Footer } from "@/components/Footer";
import { aboutPage, techStack, edges } from "@/data/site";
import styles from "./About.module.css";

export const metadata = { title: "About — Souvik B" };

export default function AboutPage() {
  return (
    <>
      <main>
        {/* Intro */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <TextReveal
                text={aboutPage.headline}
                as="h1"
                halfOpacity
                className="t-h3"
              />
              <p className="t-body muted">{aboutPage.intro}</p>
            </div>
            <div className={styles.photo}>
              <Image
                src={aboutPage.photo}
                alt="Souvik"
                fill
                sizes="340px"
                className={styles.photoImg}
              />
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="section">
          <div className="container">
            <h2 className="t-h4">{techStack.heading}</h2>
            <p className="t-body muted measure mt-3">
              {techStack.intro}
            </p>
            <ul className={styles.stackList}>
              {techStack.items.map((s) => (
                <li key={s.name} className={styles.stackRow}>
                  <span className="t-body fw-500">
                    {s.name}
                  </span>
                  <span className="t-body muted">{s.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Exploring the edges */}
        <section className="section">
          <div className="container">
            <HeaderBar no="(02)" title="(Explorations)" />
            <h2 className="t-h4 mt-10">
              {edges.heading}
            </h2>
            <p className="t-body muted measure mt-3">
              {edges.intro}
            </p>
            <div className={styles.edgeGrid}>
              {edges.items.map((e) => (
                <article key={e.no} className={styles.edgeCard}>
                  <span className="t-h3">{e.no}</span>
                  <h3 className="t-h5">{e.title}</h3>
                  <p className="t-body muted">{e.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
