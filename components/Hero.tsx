"use client";

import { useEffect, useRef } from "react";
import { hero, intro, experience } from "@/data/site";
import styles from "./Hero.module.css";

const FRONT = "/images/hero-front.jpg";
const BACK = "/images/hero-back.gif";

// Home hero — mirrors souvikb.net: a card that stays sticky for 200vh while two
// full-height type panels scroll past it (panel 1: name + display words,
// panel 2: the intro statement + experience list). The card travels diagonally
// and rotates toward its back face, all driven by scroll progress.
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // The card's motion is driven entirely by scroll progress through the hero,
  // so scrolling back up reverses it exactly. Progress is written to a CSS
  // custom property and the transform is composed in CSS; nothing animates on
  // its own. Writing the property directly (rather than through state) keeps
  // this off React's render path.
  useEffect(() => {
    // Written straight from the scroll handler. Scroll events are already
    // coalesced by the browser and this is a single custom-property write, so
    // deferring to requestAnimationFrame would only add a frame of lag.
    const apply = () => {
      const el = ref.current;
      const card = cardRef.current;
      if (!el || !card) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
      card.style.setProperty("--p", p.toFixed(4));
    };

    window.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("resize", apply);
    apply();
    return () => {
      window.removeEventListener("scroll", apply);
      window.removeEventListener("resize", apply);
    };
  }, []);

  return (
    <section ref={ref} className={styles.hero}>
      {/* Sticky card layer — stays put across both panels. */}
      <div className={styles.stage}>
        <div className={styles.cardPerspective}>
          <div ref={cardRef} className={styles.card}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.face} src={FRONT} alt="Souvik" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={`${styles.face} ${styles.back}`} src={BACK} alt="" />
          </div>
          <span className={styles.badge}>Hi</span>
        </div>
      </div>

      {/* Type layer — two 100vh panels stacked behind the card. */}
      <div className={styles.panels}>
        <div className={styles.panel}>
          <div className={styles.panelInner}>
            <div className={styles.left}>
              <span className={styles.wordWrap}>
                <p className={`t-h5 ${styles.name}`}>{hero.name}</p>
                <span className={styles.displayWord}>{hero.role}</span>
              </span>
            </div>
            <div className={styles.right}>
              <span className={styles.wordWrap}>
                <span className={`${styles.displayWord} ${styles.displayWordAlt}`}>
                  designer
                </span>
                <p className={`t-body ${styles.blurb}`}>{hero.blurb}</p>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.panel}>
          <div className={`container ${styles.panelTwo}`}>
            <div className={styles.introCopy}>
              <h2 className="t-h4">{intro.heading}</h2>
              <p className="t-body muted">{intro.body}</p>
            </div>
            <ul className={styles.expList}>
              {experience.map((e) => (
                <li key={e.title} className={styles.expRow}>
                  <span className="t-h5">{e.title}</span>
                  <span className={styles.expMeta}>
                    <span className="t-sub">{e.company}</span>
                    <span className="t-body muted">{e.years}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
