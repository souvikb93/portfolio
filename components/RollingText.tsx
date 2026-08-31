"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// Framer "Rolling Text": cycles through words with a vertical roll.
// mode="wait" — the outgoing word fully leaves before the next enters (no overlap).
export function RollingText({
  words,
  interval = 2600,
  className,
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const widest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span
      className={className}
      style={{
        position: "relative",
        display: "inline-block",
        overflow: "hidden",
        whiteSpace: "nowrap",
        lineHeight: 1,
        verticalAlign: "bottom",
      }}
    >
      <span aria-hidden style={{ visibility: "hidden", display: "inline-block" }}>
        {widest}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "absolute", left: 0, top: 0, display: "inline-block" }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
