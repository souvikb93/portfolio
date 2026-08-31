import Link from "next/link";
import { HeaderBar } from "@/components/HeaderBar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { TextReveal } from "@/components/TextReveal";
import { WorkCard } from "@/components/WorkCard";
import { BuildCard } from "@/components/BuildCard";
import { Testimonials } from "@/components/Testimonials";
import { ClientLogos } from "@/components/Logos";
import { Footer } from "@/components/Footer";
import {
  intro,
  experience,
  aboutHeadline,
  about,
  projects,
  builds,
} from "@/data/site";
import styles from "./Home.module.css";

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Intro + experience */}
      <section className="section">
        <div className={`container ${styles.introGrid}`}>
          <div className={styles.introCopy}>
            <h2 className="t-h4">{intro.heading}</h2>
            <p className="t-body muted">{intro.body}</p>
          </div>
          <ul className={styles.expList}>
            {experience.map((e) => (
              <li key={e.title} className={styles.expRow}>
                <span className="t-h5">{e.title}</span>
                <span className="t-sub muted">{e.company}</span>
                <span className="t-body muted">{e.years}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section className={styles.about}>
        <div className={styles.overlap} aria-hidden />
        <div className={`container ${styles.aboutTop}`}>
          <HeaderBar no="(01)" title="(About Me)" />
          <TextReveal
            text={aboutHeadline}
            as="h2"
            halfOpacity
            className={`t-h2 ${styles.aboutHeadline}`}
          />
        </div>
        <div className={`container ${styles.aboutBottom}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.aboutPhoto}
            src="https://framerusercontent.com/images/XfjHiaFxSvcYATMJPAu4jDyH4s.gif"
            alt="Souvik"
          />
          <div className={styles.aboutRows}>
            {about.map((a) => (
              <div key={a.label} className={styles.aboutRow}>
                <h3 className="t-h6">{a.label}</h3>
                <p className="t-body muted">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client logo ticker */}
      <Marquee className={styles.ticker} speed={40}>
        <ClientLogos />
        <ClientLogos />
        <ClientLogos />
      </Marquee>

      {/* Client projects */}
      <section className={`section ${styles.portfolio}`}>
        <div className="container">
          <HeaderBar no="(02)" title="(Projects)" />
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
              <Link href="/projects" className={styles.pillLink}>
                See all (05)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Builds */}
      <section className={styles.builds}>
        <div className={styles.overlapDark} aria-hidden />
        <div className={`container ${styles.buildsTop}`}>
          <HeaderBar no="(03)" title="(Builds)" variant="white" />
          <div className={styles.buildsContent}>
            <TextReveal
              text="Expanding beyond traditional design roles by building and shipping AI-powered products that solve real user problems."
              as="h2"
              halfOpacity
              className={`t-h2 ${styles.buildsHeadline}`}
            />
            <div className={styles.buildsRow}>
              <Link href="/builds" className={styles.buildsLink}>
                Explore More →
              </Link>
              <div className={styles.plusRow} aria-hidden>
                <span />
                <span data-sm />
                <span />
              </div>
            </div>
          </div>
        </div>
        <div className={`container ${styles.buildList}`}>
          {builds.map((b) => (
            <BuildCard key={b.title} build={b} />
          ))}
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
    </main>
  );
}
