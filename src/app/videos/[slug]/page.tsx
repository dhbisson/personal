import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVideoBySlug, videos } from "@/data/videos";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

function formatDate(iso: string) {
  const date = new Date(`${iso}T12:00:00Z`);
  return Number.isNaN(date.getTime()) ? iso : dateFormatter.format(date);
}

export function generateStaticParams() {
  return videos.map((video) => ({ slug: video.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/videos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const video = getVideoBySlug(slug);
  if (!video) return {};
  return {
    title: `${video.title} — David Hampton Bisson`,
    description: video.blurb,
  };
}

export default async function VideoPage({
  params,
}: PageProps<"/videos/[slug]">) {
  const { slug } = await params;
  const video = getVideoBySlug(slug);
  if (!video) notFound();

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-8 sm:px-10">
      <Link
        href={video.categories[0] ? `/work/${video.categories[0]}` : "/"}
        className="font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
      >
        ← Back
      </Link>

      <div className="relative mt-6 aspect-video w-full overflow-hidden bg-black">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="mt-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h1 className="font-mono text-sm uppercase tracking-[0.18em]">
          {video.title}
        </h1>
        <time
          dateTime={video.date}
          className="font-mono text-xs uppercase tracking-[0.18em] text-muted"
        >
          {formatDate(video.date)}
        </time>
      </div>

      <p className="mt-4 max-w-2xl whitespace-pre-line text-base leading-relaxed text-foreground/80">
        {video.blurb}
      </p>
    </main>
  );
}
