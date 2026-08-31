import styles from "./Logos.module.css";

// Client logos for the home ticker. Vector marks come from Logos.module.css
// (inline SVG data URIs lifted from the Framer export); Uptale is a bitmap.
const UPTALE_SRC =
  "https://framerusercontent.com/images/AMJQil5TFlctRDBIHCJVHaWRY.png?scale-down-to=512&width=1024&height=324";

export function ClientLogos() {
  return (
    <>
      <span className={styles.dell} role="img" aria-label="Dell" />
      <span className={styles.uhg} role="img" aria-label="UnitedHealth Group" />
      <span className={styles.lenovo} role="img" aria-label="Lenovo" />
      <span className={styles.google} role="img" aria-label="Google" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.uptale} src={UPTALE_SRC} alt="Uptale" />
      <span className={styles.airbus} role="img" aria-label="Airbus" />
    </>
  );
}
