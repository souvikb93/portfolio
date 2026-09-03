import Link from "next/link";
import { SectionEyebrow } from "@/components/SectionEyebrow";
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
            {study.heroEmbed && (
              <iframe
                className={styles.heroEmbed}
                src={study.heroEmbed.src}
                title={study.heroEmbed.alt}
                style={{ aspectRatio: study.heroEmbed.ratio, width: study.heroEmbed.width }}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            )}
          </section>
        )}

        <header className={`${study.hero ? "over-hero" : ""} ${styles.head}`}>
          <div className="container-study">
            <p className="t-body muted">{study.name}</p>
            {study.subtitle && (
              <p className="t-body2 muted">{study.subtitle}</p>
            )}
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
            {sec.bullets && (
              <ul className={styles.bullets}>
                {sec.bullets.map((x) => (
                  <li key={x} className="t-body muted">
                    {x}
                  </li>
                ))}
              </ul>
            )}

            {sec.findings && (
              <div className={styles.findings}>
                {sec.findings.map((f) => (
                  <article key={f.no ?? f.title} className={styles.finding}>
                    <h3 className="t-h5">
                      {f.no ? `${f.no} · ` : ""}
                      {f.title}
                    </h3>
                    {f.caption && <p className="t-body2 muted">{f.caption}</p>}
                    {f.quote && (
                      <>
                        <p className="t-body2 muted">User Quote</p>
                        <blockquote className={styles.quote}>
                          <p className="t-body">
                            &quot;{f.quote}&quot;
                            {f.quoteBy && f.quoteInline && (
                              <cite className="t-body2 muted"> {f.quoteBy}</cite>
                            )}
                          </p>
                          {f.quoteBy && !f.quoteInline && (
                            <cite className={`t-body2 muted ${styles.cite}`}>
                              {f.quoteBy}
                            </cite>
                          )}
                        </blockquote>
                      </>
                    )}
                    <FindingList
                      label={f.supportLabel ?? "Supporting Findings"}
                      value={f.support}
                    />
                    <Media galleries={f.media} />
                    <FindingList label="Business Impact" value={f.impact} />
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
                    {m.note && <p className="t-body2 muted">{m.note}</p>}
                    {m.source && <p className="t-body2 muted">{m.source}</p>}
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
            {backLabel}
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
        <article key={b.no ?? b.title} className={styles.block}>
          {/* Live sets these as one line, "02 · Title", not a number above a
              heading — keeping them separate broke the reading order. Some
              groups (Aero Check's three core requirements) carry no numeral. */}
          <h3 className="t-h6">
            {b.no ? `${b.no} · ` : ""}
            {b.title}
          </h3>
          {b.body && <p className="t-body muted">{b.body}</p>}
          {b.bullets && (
            <>
              <p className="t-body2 muted">Solution Highlights</p>
              <ul className={styles.bullets}>
                {b.bullets.map((x) => (
                  <li key={x} className="t-body muted">
                    {x}
                  </li>
                ))}
              </ul>
            </>
          )}
          <Media galleries={b.media} />
          {b.caption && <p className="t-body2 muted">{b.caption}</p>}
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
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
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

/** A finding's supporting points — prose on some studies, a list on others. */
function FindingList({
  label,
  value,
}: {
  label: string;
  value?: string | string[];
}) {
  if (!value) return null;
  return (
    <>
      <p className="t-body2 muted">{label}</p>
      {Array.isArray(value) ? (
        <ul className={styles.bullets}>
          {value.map((x) => (
            <li key={x} className="t-body muted">
              {x}
            </li>
          ))}
        </ul>
      ) : (
        <p className="t-body muted">{value}</p>
      )}
    </>
  );
}
