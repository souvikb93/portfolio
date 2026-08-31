import { HeaderBar } from "@/components/HeaderBar";
import { BuildCard } from "@/components/BuildCard";
import { Footer } from "@/components/Footer";
import { builds } from "@/data/site";

export const metadata = { title: "Builds — Souvik B" };

export default function BuildsPage() {
  return (
    <>
      <main
        className="section"
        style={{ paddingTop: 140, background: "var(--dark-grey)", color: "var(--white)" }}
      >
        <div className="container">
          <HeaderBar no="(03)" title="(Builds)" variant="white" />
          <h1 className="t-h3" style={{ margin: "40px 0 32px", maxWidth: 820 }}>
            Building and shipping AI-powered products that solve real user problems.
          </h1>
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
            {builds.map((b) => (
              <BuildCard key={b.title} build={b} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
