import Image from "next/image";
import Link from "next/link";
import type { Video } from "@/data/videos";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
});

function formatDate(iso: string) {
  const date = new Date(`${iso}T12:00:00Z`);
  return Number.isNaN(date.getTime()) ? iso : dateFormatter.format(date);
}

export function VideoGrid({ items }: { items: Video[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
      {items.map((video) => (
        <li key={video.slug}>
          <Link
            href={`/videos/${video.slug}`}
            aria-label={video.title}
            className="group relative block aspect-video w-full overflow-hidden bg-foreground/5"
          >
            <Image
              src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt=""
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />

            {/* Translucent info panel, slides in from the left on hover */}
            <div
              className="absolute inset-0 flex -translate-x-full flex-col justify-end gap-2 bg-background/80 p-6 backdrop-blur-[2px] transition-transform duration-500 ease-out group-hover:translate-x-0 group-focus-visible:translate-x-0"
            >
              <h2 className="font-mono text-xs uppercase tracking-[0.18em]">
                {video.title}
              </h2>
              <time
                dateTime={video.date}
                className="font-mono text-xs uppercase tracking-[0.18em] text-muted"
              >
                {formatDate(video.date)}
              </time>
              <span className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground">
                View →
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
