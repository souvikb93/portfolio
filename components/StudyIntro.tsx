import { ActionLink } from "@/components/ActionLink";
import type { CaseStudy } from "@/data/caseStudies";
import styles from "./StudyIntro.module.css";

/**
 * The block that opens every case study: who the project is, what it claims,
 * what it was, and the facts about it.
 *
 * Its own component rather than a StudyLayout section, because Framer builds it
 * differently from everything below it — two equal columns split by a 1px rule,
 * 48px gaps, and its own type hierarchy:
 *
 *   name     /Headline/H3     the page's h1
 *   tagline  /Headline/Sub    brand orange
 *   summary  body, max 600px
 *   label    /Headline/Sub    primary ink
 *   value    /Paragraph/Body
 *
 * The name is the heading. We had it as a small grey line above the tagline,
 * which read as an eyebrow and left the study with no name at heading weight.
 */
export function StudyIntro({ study }: { study: CaseStudy }) {
  return (
    <header className={`${study.hero ? "over-hero" : ""} ${styles.intro}`}>
      <div className="container-study">
        <div className={styles.grid}>
          <div className={styles.lead}>
            <div className={styles.titles}>
              <h1 className={`t-h3 ${styles.name}`}>{study.name}</h1>
              <p className={`t-sub ${styles.tagline}`}>{study.headline}</p>
              {study.subtitle && (
                <p className="t-body2 muted">{study.subtitle}</p>
              )}
              <p className={`t-body muted ${styles.summary}`}>
                {study.summary}
              </p>
            </div>
            {study.cta && (
              <ActionLink href={study.cta.href}>{study.cta.label}</ActionLink>
            )}
          </div>

          <div className={styles.rule} aria-hidden="true" />

          <dl className={styles.facts}>
            {study.meta.map((m) => (
              <div key={m.label} className={styles.fact}>
                <dt className={`t-sub ${styles.label}`}>{m.label}</dt>
                <dd className={styles.value}>
                  {m.tags ? (
                    <ul className={styles.tags}>
                      {m.tags.map((t) => (
                        <li key={t} className={`t-body ${styles.tag}`}>
                          {t}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="t-body muted">{m.value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </header>
  );
}
