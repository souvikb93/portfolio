import Link from "next/link";
import { HeaderBar } from "@/components/HeaderBar";
import { Footer } from "@/components/Footer";
import type { CaseStudy } from "@/data/caseStudies";
import { FigureGroup } from "./Figure";
import type { Gallery } from "@/data/caseStudies";
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
  const s = study.sections;

  return (
    <>
      <main className={styles.page}>
        {study.hero && (
          <div className="container-study">
            <FigureGroup gallery={study.hero} />
          </div>
        )}

        <header className={styles.head}>
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

        {s.objective && (
          <Section eyebrow="Objective">
            <h2 className="t-h4">{s.objective.title}</h2>
            <p className="t-body muted">{s.objective.body}</p>
            <Media galleries={s.objective.media} />
          </Section>
        )}

        {s.discovery && (
          <Section eyebrow="Discovery">
            <h2 className="t-h4">{s.discovery.title}</h2>
            <p className="t-body muted">{s.discovery.body}</p>
            <BlockGrid blocks={s.discovery.blocks} />
            <Media galleries={s.discovery.media} />
          </Section>
        )}

        {s.synthesis && (
          <Section eyebrow="Synthesis">
            <h2 className="t-h4">{s.synthesis.title}</h2>
            <p className="t-body muted">{s.synthesis.body}</p>
            <div className={styles.findings}>
              {s.synthesis.findings.map((f) => (
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
            <Media galleries={s.synthesis.media} />
          </Section>
        )}

        {s.solution && (
          <Section eyebrow="Solution">
            <h2 className="t-h4">{s.solution.title}</h2>
            <p className="t-body muted">{s.solution.body}</p>
            <BlockGrid blocks={s.solution.blocks} />
            <Media galleries={s.solution.media} />
          </Section>
        )}

        {s.impact && (
          <Section eyebrow="Impact">
            <h2 className="t-h4">{s.impact.title}</h2>
            <div className={styles.metrics}>
              {s.impact.metrics.map((m) => (
                <div key={m.value} className={styles.metric}>
                  <span className="t-h3">{m.value}</span>
                  <p className="t-body muted">{m.label}</p>
                </div>
              ))}
            </div>
            <Media galleries={s.impact.media} />
          </Section>
        )}

        {s.reflection && (
          <Section eyebrow="Reflection">
            <h2 className="t-h4">{s.reflection.title}</h2>
            <p className="t-body muted">{s.reflection.body}</p>
            <BlockGrid blocks={s.reflection.blocks} />
            <Media galleries={s.reflection.media} />
          </Section>
        )}

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
  blocks: { no: string; title: string; body: string }[];
}) {
  return (
    <div className={styles.blockGrid}>
      {blocks.map((b) => (
        <article key={b.no} className={styles.block}>
          <span className="t-body2 muted">{b.no}</span>
          <h3 className="t-h6">{b.title}</h3>
          <p className="t-body muted">{b.body}</p>
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
