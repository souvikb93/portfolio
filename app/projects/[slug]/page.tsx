import Link from "next/link";
import { HeaderBar } from "@/components/HeaderBar";
import { Footer } from "@/components/Footer";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { caseStudies } from "@/data/caseStudies";
import styles from "./CaseStudy.module.css";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies[slug];
  return { title: cs ? `${cs.name} — Souvik B` : "Case study — Souvik B" };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies[slug];

  if (!cs) {
    const titles: Record<string, string> = {
      aero_check: "Airbus — AI-powered manufacturing diagram validation",
      "aero_check-2": "Airbus — AI-powered manufacturing diagram validation",
      desi_aroma: "Desi Aroma — Service design for women empowerment",
      member_portal: "Member Portal — UnitedHealth Group mobile app",
    };
    return (
      <PagePlaceholder
        eyebrow="Case study"
        title={titles[slug] ?? slug.replace(/_/g, " ")}
      />
    );
  }

  const s = cs.sections;

  return (
    <>
      <main className={styles.page}>
        <header className={styles.head}>
          <div className="container">
            <p className="t-body muted">{cs.name}</p>
            <h1 className={`t-h3 ${styles.headline}`}>{cs.headline}</h1>
            <p className="t-body muted" style={{ maxWidth: 720 }}>
              {cs.summary}
            </p>
            <dl className={styles.meta}>
              {cs.meta.map((m) => (
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
          </Section>
        )}

        {s.discovery && (
          <Section eyebrow="Discovery">
            <h2 className="t-h4">{s.discovery.title}</h2>
            <p className="t-body muted">{s.discovery.body}</p>
            <div className={styles.blockGrid}>
              {s.discovery.blocks.map((b) => (
                <article key={b.no} className={styles.block}>
                  <span className="t-body2 muted">{b.no}</span>
                  <h3 className="t-h6">{b.title}</h3>
                  <p className="t-body muted">{b.body}</p>
                </article>
              ))}
            </div>
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
          </Section>
        )}

        {s.solution && (
          <Section eyebrow="Solution">
            <h2 className="t-h4">{s.solution.title}</h2>
            <p className="t-body muted">{s.solution.body}</p>
            <div className={styles.blockGrid}>
              {s.solution.blocks.map((b) => (
                <article key={b.no} className={styles.block}>
                  <span className="t-body2 muted">{b.no}</span>
                  <h3 className="t-h6">{b.title}</h3>
                  <p className="t-body muted">{b.body}</p>
                </article>
              ))}
            </div>
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
          </Section>
        )}

        {s.reflection && (
          <Section eyebrow="Reflection">
            <h2 className="t-h4">{s.reflection.title}</h2>
            <p className="t-body muted">{s.reflection.body}</p>
            <div className={styles.blockGrid}>
              {s.reflection.blocks.map((b) => (
                <article key={b.no} className={styles.block}>
                  <span className="t-body2 muted">{b.no}</span>
                  <h3 className="t-h6">{b.title}</h3>
                  <p className="t-body muted">{b.body}</p>
                </article>
              ))}
            </div>
          </Section>
        )}

        <div className={`container ${styles.next}`}>
          <Link href="/projects" className={styles.link}>
            Explore other client projects →
          </Link>
        </div>
      </main>
      <Footer />
    </>
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
      <div className="container">
        <HeaderBar no={`(${eyebrow})`} title="" />
        <div className={styles.sectionBody}>{children}</div>
      </div>
    </section>
  );
}
