"use client";

import { useState } from "react";
import Image from "next/image";
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
      <div className={styles.person}>
        <Image
          className={styles.photo}
          src={t.photo}
          alt={t.name}
          width={212}
          height={253}
        />
        <div className={styles.who}>
          <span className="t-body">{t.name}</span>
          <span className="t-body muted">{t.role}</span>
          <span className="t-body muted">{t.company}</span>
        </div>
        {testimonials.length > 1 && (
          <div className={styles.dots}>
            {testimonials.map((_, n) => (
              <span key={n} data-active={n === i} />
            ))}
          </div>
        )}
      </div>

      <blockquote className={styles.quote}>
        <p className="t-body">{t.quote}</p>
      </blockquote>

      <div className={styles.nav} data-multiple={testimonials.length > 1}>
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
