"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/data/site";
import styles from "./Nav.module.css";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} aria-label="Souvik B — home">
        sb
      </Link>

      <nav className={styles.links} data-open={open}>
        {nav.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={styles.link}
              data-active={active}
              onClick={() => setOpen(false)}
            >
              <span className={styles.linkLabel}>{item.label}</span>
              <span className={styles.linkNo}>{item.no}</span>
            </Link>
          );
        })}
      </nav>

      <button
        className={styles.toggle}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span data-open={open} />
        <span data-open={open} />
      </button>
    </header>
  );
}
