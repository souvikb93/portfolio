import Link from "next/link";
import { HeaderBar } from "@/components/HeaderBar";
import { Footer } from "@/components/Footer";
import type { CaseStudy } from "@/data/caseStudies";
import { FigureGroup } from "./Figure";
import { ScrollStage } from "./ScrollStage";
import type { Block, Gallery } from "@/data/caseStudies";
import styles from "./StudyPage.module.css";

// Shared long-form study layout used by /projects/[slug] and /builds/[slug].
export function StudyPage({
  study,
  backHref,
  backLabel,
}: {
  study: CaseStudy;
  backHref: string;
  backLabel: string;
}) {

  return (
    <>
      <main className={styles.page}>
        <ScrollStage>
        {study.hero?.items[0] && (
          <section className={`sticky-hero ${styles.hero}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.heroBg}
              src={study.hero.items[0].src}
              alt={study.hero.items[0].alt}
            />
          </section>
        )}

        <header className={`${study.hero ? "over-hero" : ""} ${styles.head}`}>
          <div className="container-study">
            <p className="t-body muted">{study.name}</p>
            <h1 className={`t-h3 ${styles.headline}`}>{study.headline}</h1>
            <p className={`t-body muted ${styles.summary}`}>{study.summary}</p>
            <dl className={styles.meta}>
              {study.meta.map((m) => (
                <div key={m.label}>
                  <dt className="t-body2 muted">{m.label}</dt>
                  <dd className="t-body">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>
        </ScrollStage>

        {study.sections.map((sec, i) => (
          <Section key={`${sec.eyebrow}-${i}`} eyebrow={sec.eyebrow}>
            {sec.title && <h2 className="t-h4">{sec.title}</h2>}
            {sec.body && <p className="t-body muted">{sec.body}</p>}

            {sec.findings && (
              <div className={styles.findings}>
                {sec.findings.map((f) => (
                  <article key={f.no} className={styles.finding}>
                    <h3 className="t-h5">
                      {f.no} · {f.title}
                    </h3>
                    {f.quote && (
                      <blockquote className={styles.quote}>
                        “{f.quote}”
                        {f.quoteBy && (
                          <cite className="t-body2 muted"> — {f.quoteBy}</cite>
                        )}
                      </blockquote>
                    )}
                    {f.support && (
                      <p className="t-body muted">
                        <strong>Findings.</strong> {f.support}
                      </p>
                    )}
                    {f.impact && (
                      <p className="t-body muted">
                        <strong>Business impact.</strong> {f.impact}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            )}

            {sec.metrics && (
              <div className={styles.metrics}>
                {sec.metrics.map((m) => (
                  <div key={m.value} className={styles.metric}>
                    <span className="t-h3">{m.value}</span>
                    <p className="t-body muted">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            {sec.blocks && <BlockGrid blocks={sec.blocks} />}
            <Media galleries={sec.media} />
            {sec.caption && <p className="t-body2 muted">{sec.caption}</p>}
          </Section>
        ))}

        <div className={`container-study ${styles.next}`}>
          <Link href={backHref} className={styles.link}>
            {backLabel} →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

function BlockGrid({
  blocks,
}: {
  blocks: Block[];
}) {
  return (
    <div className={styles.blockGrid}>
      {blocks.map((b) => (
        <article key={b.no} className={styles.block}>
          <span className="t-body2 muted">{b.no}</span>
          <h3 className="t-h6">{b.title}</h3>
          <p className="t-body muted">{b.body}</p>
          <Media galleries={b.media} />
        </article>
      ))}
    </div>
  );
}

function Section({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container-study">
        <HeaderBar no={`(${eyebrow})`} title="" />
        <div className={styles.sectionBody}>{children}</div>
      </div>
    </section>
  );
}

/** Renders a section's figure groups, if it has any. */
function Media({ galleries }: { galleries?: Gallery[] }) {
  if (!galleries?.length) return null;
  return (
    <>
      {galleries.map((g, i) => (
        <FigureGroup key={i} gallery={g} />
      ))}
    </>
  );
}
