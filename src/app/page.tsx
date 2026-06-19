export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center px-6 py-16 text-center">
      <p className="text-base leading-relaxed text-foreground/80">
        Versatile video professional with 20+ years spanning the full
        production lifecycle — from concept and shoot through edit, color grade,
        and final delivery. Extensive hands-on experience producing, directing,
        and shooting documentary, broadcast, educational, and promotional
        content on professional camera platforms (RED, Arri Alexa, DSLR) with
        deep expertise in Premiere Pro, Avid Media Composer, and After Effects.
        Proven ability to manage crews and workflows on
        simultaneous multi-platform productions, train junior staff, and
        communicate clearly with clients at every stage. Passionate about using
        storytelling craft to advance meaningful missions.
      </p>
      <a
        href="/David_Bisson_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-muted underline-offset-8 transition-colors hover:text-foreground hover:underline"
      >
        Résumé →
      </a>
    </main>
  );
}
