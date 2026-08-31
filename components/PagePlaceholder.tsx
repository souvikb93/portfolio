import Link from "next/link";
import { Footer } from "@/components/Footer";

// Temporary shell for pages not yet ported from Framer.
export function PagePlaceholder({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <>
      <main style={{ minHeight: "80svh", display: "flex", alignItems: "center" }}>
        <div className="container">
          <p className="t-body muted">{eyebrow}</p>
          <h1 className="t-h2" style={{ margin: "12px 0 24px", maxWidth: 800 }}>
            {title}
          </h1>
          <p className="t-body muted" style={{ maxWidth: 520 }}>
            This page is still being ported from the Framer project.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              marginTop: 24,
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
