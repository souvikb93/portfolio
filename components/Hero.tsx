"use client";

import { useEffect, useRef, useState } from "react";
import { hero, intro, experience } from "@/data/site";
import styles from "./Hero.module.css";

const FRONT = "/images/hero-front.jpg";
const BACK = "/images/hero-back.gif";

// Home hero — mirrors souvikb.net: a card that stays sticky for 200vh while two
// full-height type panels scroll past it (panel 1: name + display words,
// panel 2: the intro statement + experience list). The card flips
// portrait <-> gif on scroll progress, with a gentle idle flip as a fallback.
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    let scrolledRecently = false;
    let idleTimer = 0;

    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const prog = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
      setFlipped(prog > 0.5);
      scrolledRecently = true;
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => (scrolledRecently = false), 1200);
    };

    const loop = window.setInterval(() => {
      if (!scrolledRecently) setFlipped((f) => !f);
    }, 4200);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearInterval(loop);
      window.clearTimeout(idleTimer);
    };
  }, []);

  return (
    <section ref={ref} className={styles.hero}>
      {/* Sticky card layer — stays put across both panels. */}
      <div className={styles.stage}>
        <div className={styles.cardPerspective}>
          <div className={styles.card} data-flipped={flipped}>
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
                  <span className="t-sub">{e.title}</span>
                  <span className="t-sub muted">{e.company}</span>
                  <span className="t-meta muted">{e.years}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
