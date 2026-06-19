import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
        404 — Page not found
      </p>
      <Link
        href="/"
        className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted underline-offset-8 transition-colors hover:text-foreground hover:underline"
      >
        ← Back home
      </Link>
    </main>
  );
}
