import Link from "next/link";
import { Footer } from "@/components/Footer";
import styles from "./PagePlaceholder.module.css";

// Temporary shell for pages not yet ported from Framer.
export function PagePlaceholder({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <p className="t-body muted">{eyebrow}</p>
          <h1 className={`t-h2 ${styles.title}`}>{title}</h1>
          <p className="t-body muted measure">
            This page is still being ported from the Framer project.
          </p>
          <Link href="/" className={styles.link}>
            ← Back home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
