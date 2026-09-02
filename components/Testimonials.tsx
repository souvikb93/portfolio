"use client";

import { useState } from "react";
import { testimonials } from "@/data/site";
import { Button } from "./Button";
import styles from "./Testimonials.module.css";

// Framer "Testimonial Slider".
export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) =>
    setI((v) => (v + d + testimonials.length) % testimonials.length);

  return (
    <div className={styles.wrap}>
      <div className={styles.dots}>
        {testimonials.map((_, n) => (
          <span key={n} data-active={n === i} />
        ))}
      </div>
      <blockquote className={styles.quote}>
        <p className="t-body">“{t.quote}”</p>
        <footer>
          <span className="t-h5">{t.name}</span>
          <span className={`t-body muted`}>{t.role}</span>
        </footer>
      </blockquote>
      <div className={styles.nav}>
        <Button label="Previous" onClick={() => go(-1)}>
          ←
        </Button>
        <Button label="Next" onClick={() => go(1)}>
          →
        </Button>
      </div>
    </div>
  );
}
