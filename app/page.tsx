import { HeaderBar } from "@/components/HeaderBar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { TextReveal } from "@/components/TextReveal";
import { WorkCard } from "@/components/WorkCard";
import { BuildCard } from "@/components/BuildCard";
import { Testimonials } from "@/components/Testimonials";
import { ClientLogos } from "@/components/Logos";
import { Footer } from "@/components/Footer";
import { AskSouvik } from "@/components/AskSouvik";
import { ActionLink } from "@/components/ActionLink";
import { projects, liveBuilds } from "@/data/site";
import styles from "./Home.module.css";

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Client logo ticker */}
      <Marquee className={styles.ticker} speed={40}>
        <ClientLogos />
        <ClientLogos />
        <ClientLogos />
      </Marquee>

      {/* Builds */}
      <section className={styles.builds}>
        <div className={`container ${styles.buildsTop}`}>
          <HeaderBar no="(02)" title="(Builds)" variant="white" />
          <video
            className={styles.buildsIntroClip}
            src="/video/builds-intro.mp4"
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            aria-hidden
          />
          <div className={styles.buildsContent}>
            <div className={styles.buildsHeadlineWrap}>
              <TextReveal
                text="Expanding beyond traditional design roles by building and shipping AI-powered products that solve real user problems."
                as="h2"
                halfOpacity
                className={`t-h2 ${styles.buildsHeadline}`}
              />
            </div>
            <div className={`${styles.buildsRow} ${styles.buildsRowWrap}`}>
              <ActionLink href="/builds" tone="light">
                Explore More
              </ActionLink>
              <div className={styles.plusRow} aria-hidden>
                <span />
                <span data-sm />
                <span />
              </div>
            </div>
          </div>
        </div>
        <div className={`container ${styles.buildList}`}>
          {liveBuilds.map((b) => (
            <BuildCard key={b.title} build={b} />
          ))}
        </div>
      </section>

      {/* Client projects */}
      <section className={`section ${styles.portfolio}`}>
        <div className="container">
          <HeaderBar no="(03)" title="(Projects)" />
          <div className={styles.portfolioBody}>
            <div className={styles.portfolioAside}>
              <h3 className="t-h4">Client Projects</h3>
              <div className={styles.rule} />
            </div>
            <div className={styles.projectStack}>
              {projects.map((p) => (
                <div key={p.title} className={styles.projectSlot}>
                  <WorkCard project={p} />
                </div>
              ))}
            </div>
            <div className={styles.portfolioAsideEnd}>
              <ActionLink href="/projects">See all (05)</ActionLink>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`section ${styles.testimonials}`}>
        <div className="container">
          <HeaderBar no="(04)" title="(Testimonial)" />
          <div className={styles.testiInner}>
            <Testimonials />
          </div>
        </div>
      </section>

      <Footer />

      {/* Chat lives on the home page only. */}
      <AskSouvik />
    </main>
  );
}
