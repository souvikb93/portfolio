"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/data/site";
import styles from "./Nav.module.css";

// Routes whose hero sits on a dark surface — the live site switches the header
// to its white variant on these.
const DARK_ROUTES = ["/projects", "/builds"];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onDark = DARK_ROUTES.some(
    (r) => pathname === r || pathname.startsWith(`${r}/`),
  );

  return (
    <header className={styles.header} data-on-dark={onDark}>
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
