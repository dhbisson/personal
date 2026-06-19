import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VideoGrid } from "@/app/components/VideoGrid";
import { categories, videosByCategory, type CategoryKey } from "@/data/videos";

function getCategory(key: string) {
  return categories.find((category) => category.key === key);
}

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.key }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[category]">): Promise<Metadata> {
  const { category } = await params;
  const match = getCategory(category);
  if (!match) return {};
  return {
    title: `${match.label} — David Hampton Bisson`,
    description: `${match.label} work by David Hampton Bisson.`,
  };
}

export default async function CategoryPage({
  params,
}: PageProps<"/work/[category]">) {
  const { category } = await params;
  const match = getCategory(category);
  if (!match) notFound();

  const items = videosByCategory(match.key as CategoryKey);

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-8 sm:px-10">
      <h1 className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-muted">
        {match.label}
      </h1>
      {items.length === 0 ? (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Coming soon.
        </p>
      ) : (
        <VideoGrid items={items} />
      )}
    </main>
  );
}
