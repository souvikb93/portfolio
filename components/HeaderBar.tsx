import styles from "./HeaderBar.module.css";

// Framer "Header Bar" component: rule + roll-no / section title / signature.
export function HeaderBar({
  no,
  title,
  sig = "© SB",
  variant = "black",
}: {
  no: string;
  title: string;
  sig?: string;
  variant?: "black" | "white";
}) {
  return (
    <div className={styles.bar} data-variant={variant}>
      <div className={styles.line} />
      <div className={`t-meta ${styles.row}`}>
        <span className={styles.no}>
          <span className={styles.dot} /> {no}
        </span>
        <span>{title}</span>
        <span>{sig}</span>
      </div>
    </div>
  );
}
