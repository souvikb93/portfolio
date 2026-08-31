import { PagePlaceholder } from "@/components/PagePlaceholder";

const titles: Record<string, string> = {
  access_now: "AccessNow — Accessibility-first Medicare product",
  aero_check: "Airbus — AI-powered manufacturing diagram validation",
  "aero_check-2": "Airbus — AI-powered manufacturing diagram validation",
  desi_aroma: "Desi Aroma — Service design for women empowerment",
  member_portal: "Member Portal — UnitedHealth Group mobile app",
};

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <PagePlaceholder
      eyebrow="Case study"
      title={titles[slug] ?? slug.replace(/_/g, " ")}
    />
  );
}
