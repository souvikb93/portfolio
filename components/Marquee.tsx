"use client";

import { ReactNode } from "react";
import styles from "./Marquee.module.css";

// Framer "Ticker" component.
export function Marquee({
  children,
  speed = 40,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  return (
    <div className={`${styles.wrap} ${className ?? ""}`}>
      <div className={styles.track} style={{ animationDuration: `${speed}s` }}>
        <div className={styles.group}>{children}</div>
        <div className={styles.group} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
