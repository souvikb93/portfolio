import { StudyPage } from "@/components/StudyPage";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { caseStudies } from "@/data/caseStudies";

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

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies[slug];

  if (!cs) {
    return (
      <PagePlaceholder
        eyebrow="Case study"
        title={slug.replace(/[_-]/g, " ")}
      />
    );
  }

  return (
    <StudyPage
      study={cs}
      backHref="/projects"
      backLabel="Explore other client projects"
    />
  );
}
