import Link from "next/link";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { StudyLayout } from "@/components/StudyLayout";
import { StudyIntro } from "@/components/StudyIntro";
import { ActionLink } from "@/components/ActionLink";
import { Footer } from "@/components/Footer";
import type { CaseStudy } from "@/data/caseStudies";
import { FigureGroup } from "./Figure";
import type { Block, Gallery, StudySection } from "@/data/caseStudies";
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
        {study.hero?.items[0] && (
          <section className={`sticky-hero ${styles.hero}`}>
            {/* The picture and the embed share one stage, sized the way
                object-fit:cover would size the picture. That keeps the embed in
                the picture's own coordinates, so it stays on the device it is
                covering however the viewport is shaped. */}
            <div
              className={styles.heroStage}
              style={
                {
                  "--hero-img-ar": study.hero.items[0].ratio,
                } as React.CSSProperties
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.heroBg}
                src={study.hero.items[0].src}
                alt={study.hero.items[0].alt}
              />
              {study.heroEmbed && (
                <iframe
                  className={styles.heroEmbed}
                  data-framed={study.heroEmbed.frame ? "true" : undefined}
                  src={study.heroEmbed.src}
                  title={study.heroEmbed.alt}
                  style={
                    study.heroEmbed.frame ?? {
                      aspectRatio: study.heroEmbed.ratio,
                      width: study.heroEmbed.width,
                    }
                  }
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
              )}
            </div>
          </section>
        )}

        <StudyIntro study={study} />

        {study.sections.map((sec, i) => (
          <Section key={`${sec.eyebrow}-${i}`} sec={sec} />
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

function BlockGrid({ blocks }: { blocks: Block[] }) {
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

/** Everything a section says: heading, prose, lists, findings, metrics, blocks. */
function SectionCopy({ sec }: { sec: StudySection }) {
  return (
    <>
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
              {/* Live sets a finding's plate beside its copy on some studies and
                  above it on others, so the finding carries its own layout. */}
              <StudyLayout
                variant={f.layout}
                ratio={f.ratio}
                plates={f.layout ? <Media galleries={f.media} /> : null}
                copy={
                  <>
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
                              <cite className="t-body2 muted">
                                {" "}
                                {f.quoteBy}
                              </cite>
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
                    {!f.layout && <Media galleries={f.media} />}
                    <FindingList label="Business Impact" value={f.impact} />
                  </>
                }
              />
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
    </>
  );
}

/** A section's plates, plus the small print beneath them. */
function SectionMedia({ sec }: { sec: StudySection }) {
  if (!sec.media?.length && !sec.caption) return null;
  return (
    <>
      <Media galleries={sec.media} />
      {sec.caption && <p className="t-body2 muted">{sec.caption}</p>}
    </>
  );
}

function Section({ sec }: { sec: StudySection }) {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container-study">
        <SectionEyebrow>{sec.eyebrow}</SectionEyebrow>
        <StudyLayout
          variant={sec.layout}
          ratio={sec.ratio}
          stickyCopy={sec.stickyCopy}
          copy={<SectionCopy sec={sec} />}
          plates={<SectionMedia sec={sec} />}
        />
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
