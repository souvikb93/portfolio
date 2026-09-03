import styles from "./SectionEyebrow.module.css";

/**
 * The small label above a case-study section heading ("Challenge", "Discovery").
 *
 * Deliberately not HeaderBar: that is the home and about pages' numbered bar
 * ("(02) (Builds) © SB"). Measured on the live study pages, this is plain
 * heading-face text at 18/26 in the primary ink, sitting 26px above the title.
 */
export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className={`t-sub ${styles.eyebrow}`}>{children}</p>;
}
