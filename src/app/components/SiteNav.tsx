"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/videos";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 pt-4 font-mono text-xs uppercase tracking-[0.2em]">
      {categories.map((category) => {
        const href = `/work/${category.key}`;
        const active = pathname === href;
        return (
          <Link
            key={category.key}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`transition-colors hover:text-orange-400 ${
              active ? "text-orange-500" : "text-orange-400/70"
            }`}
          >
            {category.label}
          </Link>
        );
      })}
    </nav>
  );
}
