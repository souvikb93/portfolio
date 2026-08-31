import Link from "next/link";
import styles from "./ActionLink.module.css";

export type ActionLinkTone = "dark" | "light";

/**
 * The site's single link/button primitive — the underlined 16/20.2 action used
 * for "Explore More", "View Project" and "See all (05)".
 *
 * `tone` picks the surface it sits on: "dark" for text on a light background,
 * "light" for text on a dark one. Hover / press / focus states are defined
 * once here rather than per usage.
 */
export function ActionLink({
  href,
  children,
  tone = "dark",
  className,
}: {
  href: string;
  children: React.ReactNode;
  tone?: ActionLinkTone;
  className?: string;
}) {
  const external = /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      className={`t-link ${styles.action} ${className ?? ""}`}
      data-tone={tone}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
