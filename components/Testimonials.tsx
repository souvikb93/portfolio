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
          <span>{t.name}</span>
          <span className="muted">{t.role}</span>
          <span className="muted">{t.company}</span>
        </div>
        {/* Live keeps both arrows under the attribution and shows them live
            even on a single quote — there are no dots, the arrows are the
            whole control. With one quote the modulo lands back on it. */}
        <div className={styles.nav}>
          <Button label="Previous testimonial" onClick={() => go(-1)}>
            ←
          </Button>
          <Button label="Next testimonial" onClick={() => go(1)}>
            →
          </Button>
        </div>
      </div>

      <blockquote className={styles.quote}>
        <p className="t-body">{t.quote}</p>
      </blockquote>
    </div>
  );
}
