import type { SectionRatio, SectionVariant } from "@/data/caseStudies";
import styles from "./StudyLayout.module.css";

/**
 * How a case-study section arranges its copy against its plates.
 *
 * A section sets its copy beside a plate on the right, beside a plate on the
 * left, or across the full column with the plates below it. The column split is
 * a separate choice from the side: the Framer project runs Context at 1fr/1fr
 * with a 40px gap and Research at 1fr/1.5fr with a 10px gap, both plate-right.
 * Ratios live in the stylesheet, each labelled with the section it came from.
 */
export function StudyLayout({
  variant = "stacked",
  ratio = "even",
  stickyCopy,
  copy,
  plates,
}: {
  variant?: SectionVariant;
  ratio?: SectionRatio;
  stickyCopy?: boolean;
  copy: React.ReactNode;
  plates: React.ReactNode;
}) {
  return (
    <div className={styles.body} data-variant={variant} data-ratio={ratio}>
      <div className={styles.copy} data-sticky={stickyCopy ? "true" : undefined}>
        {copy}
      </div>
      {plates && <div className={styles.plates}>{plates}</div>}
    </div>
  );
}
