"use client";

import { motion } from "motion/react";

// Framer "TextStagger": word-by-word reveal on scroll into view.
export function TextReveal({
  text,
  className,
  as: Tag = "h2",
  halfOpacity = false,
}: {
  text: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  halfOpacity?: boolean;
}) {
  const words = text.trim().split(/\s+/);
  const MotionTag = motion.create(Tag as "h2");

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: 0.04 }}
      style={{ display: "inline-block" }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", marginRight: "0.28em" }}
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
