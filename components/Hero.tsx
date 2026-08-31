"use client";

import { useEffect, useRef, useState } from "react";
import { RollingText } from "@/components/RollingText";
import { hero } from "@/data/site";
import styles from "./Hero.module.css";

const FRONT = "https://framerusercontent.com/images/4IHkJM71yAnl9Jgvb8a5FBV7HeM.jpg";
const BACK = "https://framerusercontent.com/images/XfjHiaFxSvcYATMJPAu4jDyH4s.gif";

// Home hero — sticky parallax card that flips (portrait ↔ gif), mirrors souvikb.net.
// Flip is driven by scroll progress through the 200vh section; falls back to a
// gentle timed flip if the page isn't scrolling.
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

    // gentle auto-flip while the hero is on screen and the user isn't scrolling
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

        <div className={`container ${styles.text}`}>
          <div className={styles.left}>
            <p className="t-h5">{hero.name}</p>
            <RollingText
              words={["Product", "UX/UI", "AI-native"]}
              className={`t-h1 ${styles.roll}`}
            />
          </div>
          <div className={styles.right}>
            <span className={styles.bigWord}>designer</span>
            <p className={`t-body ${styles.blurb}`}>{hero.blurb}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
