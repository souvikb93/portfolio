import Link from "next/link";
import { HeaderBar } from "@/components/HeaderBar";
import { WorkCard } from "@/components/WorkCard";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/site";

export const metadata = { title: "Projects — Souvik B" };

export default function ProjectsPage() {
  return (
    <>
      <main className="section" style={{ paddingTop: 140 }}>
        <div className="container">
          <HeaderBar no="(02)" title="(Projects)" />
          <h1 className="t-h3" style={{ margin: "40px 0 64px" }}>
            Client Projects
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 40,
            }}
          >
            {projects.map((p) => (
              <WorkCard key={p.title} project={p} />
            ))}
          </div>
          <Link
            href="/"
            style={{
              display: "inline-block",
              marginTop: 48,
              fontSize: 14,
              borderBottom: "1px solid var(--black-16)",
              paddingBottom: 4,
            }}
          >
            ← Back home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
