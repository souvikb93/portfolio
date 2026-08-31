"use client";

import { motion } from "motion/react";
import styles from "./TextReveal.module.css";

// The motion components are created once at module scope. Calling
// motion.create() during render would produce a new component type on every
// render, remounting the whole heading and restarting the animation.
const MOTION_TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  p: motion.p,
  div: motion.div,
} as const;

export type RevealTag = keyof typeof MOTION_TAGS;

// Framer "TextStagger": word-by-word reveal on scroll into view.
export function TextReveal({
  text,
  className,
  as = "h2",
  halfOpacity = false,
}: {
  text: string;
  className?: string;
  as?: RevealTag;
  halfOpacity?: boolean;
}) {
  const words = text.trim().split(/\s+/);
  const MotionTag = MOTION_TAGS[as];

  return (
    <MotionTag
      className={`${styles.reveal} ${className ?? ""}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: 0.04 }}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          className={styles.word}
          variants={{
            hidden: { opacity: halfOpacity ? 0.15 : 0, y: "0.4em" },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {w}
        </motion.span>
      ))}
    </MotionTag>
  );
}
