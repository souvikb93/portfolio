import { StudyPage } from "@/components/StudyPage";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { buildStudies } from "@/data/buildStudies";

export function generateStaticParams() {
  return Object.keys(buildStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const b = buildStudies[slug];
  return { title: b ? `${b.name} — Souvik B` : "Build — Souvik B" };
}

export default async function BuildDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const b = buildStudies[slug];

  if (!b) {
    return (
      <PagePlaceholder eyebrow="Build" title={slug.replace(/[_-]/g, " ")} />
    );
  }

  return (
    <StudyPage
      study={b}
      backHref="/builds"
      backLabel="Explore other builds"
    />
  );
}
