import { PagePlaceholder } from "@/components/PagePlaceholder";

const titles: Record<string, string> = {
  tracka: "Tracka — Career application toolkit",
  "tracka-2": "Tracka — Career application toolkit",
};

export default async function BuildDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <PagePlaceholder
      eyebrow="Build"
      title={titles[slug] ?? slug.replace(/-/g, " ")}
    />
  );
}
