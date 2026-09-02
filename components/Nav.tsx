"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/data/site";
import { Button } from "./Button";
import styles from "./Nav.module.css";

// Routes whose hero sits on a dark surface — the live site switches the header
// to its white variant on these. Exact matches only: the index pages have dark
// heroes, but the case studies under them are on white, where a white header
// would be invisible.
const DARK_ROUTES = ["/projects", "/builds"];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onDark = DARK_ROUTES.includes(pathname);

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

      <Button
        variant="ghost"
        tone={onDark ? "light" : "dark"}
        label="Toggle menu"
        className={styles.toggle}
        onClick={() => setOpen((v) => !v)}
      >
        <span data-open={open} />
        <span data-open={open} />
      </Button>
    </header>
  );
}
