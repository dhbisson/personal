// Areas of work. Order here = display order of the sections on /videos.
export const categories = [
  { key: "editing", label: "Editing" },
  { key: "directing", label: "Directing" },
  { key: "cinematography", label: "Cinematography" },
  { key: "producing", label: "Producing" },
  { key: "awards", label: "Awards" },
] as const;

export type CategoryKey = (typeof categories)[number]["key"];

export type Video = {
  /** URL slug for the video's detail page, e.g. /videos/sample-reel */
  slug: string;
  /** YouTube video ID — the part after `watch?v=` or `youtu.be/`. */
  youtubeId: string;
  title: string;
  blurb: string;
  /** Optional short caption shown under the thumbnail on listing pages. */
  caption?: string;
  /** ISO date string (YYYY-MM-DD) the piece was released. */
  date: string;
  /** Areas of work this piece belongs to; it appears under each one. */
  categories: CategoryKey[];
};

// Edit this list to manage the portfolio. Videos are shown newest-first.
export const videos: Video[] = [
  {
    slug: "teresa-flowers-photography",
    youtubeId: "kJM00ycstX0",
    title: "Teresa Flowers Photography",
    blurb: `Teresa Flowers Photography Promo

Producer - David Bisson
Cinematographer - David Bisson
Editor - David Bisson

Models - (not David Bisson)`,
    caption: "Photography Studio Promo",
    date: "2026-06-01",
    categories: ["editing", "directing", "cinematography", "producing"],
  },
  {
    slug: "suwa-30-years",
    youtubeId: "ixwoaCTIinA",
    title: "SUWA — 30 Years of Protecting Wilderness",
    blurb: `30 Year Anniversary Fundraiser for the Southern Utah Wilderness Alliance

Producer - David Bisson
Cinematographer - David Bisson
Editor - David Bisson`,
    caption: "SUWA 30th Anniversary Fundraiser",
    date: "2026-06-01",
    categories: ["editing", "directing", "cinematography", "producing"],
  },
  {
    slug: "revolver",
    youtubeId: "LGbJteyxtVw",
    title: "Revolver",
    blurb: `Band - Revolver

Cinematographer - David Bisson
Producer - David Bisson`,
    caption: "Band Performance — Revolver",
    date: "2026-06-01",
    categories: ["editing", "directing", "cinematography", "producing"],
  },
  {
    slug: "purewash-2",
    youtubeId: "Iqpc-St38Ew",
    title: "PureWash 2",
    blurb: `Produced by David Bisson for Dagadak`,
    caption: "Product Promo — Dagadak",
    date: "2026-06-01",
    categories: ["editing", "directing", "cinematography", "producing"],
  },
  {
    slug: "enders-game-sandboxr",
    youtubeId: "0qJyz5zSmmg",
    title: "Ender's Game — A 3D Printing Experience with Sandboxr",
    blurb: `Sandboxr Promo for Ender's Game - for The Good Line

Producer - David Bisson
Cinematographer - David Bisson
Editor - David Bisson`,
    caption: "Sandboxr Promo — Ender's Game",
    date: "2026-06-01",
    categories: ["editing", "directing", "cinematography", "producing"],
  },
  {
    slug: "independent-study-superhero",
    youtubeId: "FoeEdF2osh0",
    title: "Independent Study SuperHero",
    blurb: `Independent Study SuperHero
Aurora Advertising Award - Best of Show

I made this myself for $50 in one day and it won awards and was broadcast.`,
    caption: "Aurora Advertising Best of Show Winner",
    date: "2026-06-01",
    categories: ["directing", "awards"],
  },
  {
    slug: "nobody-knows-you",
    youtubeId: "ox-xIvlTJIQ",
    title: "Nobody Knows You, Nobody Gives a Damn",
    blurb: `Nobody Knows you, Nobody Gives a Damn

Sundance Film Festival Selection
Cinematographer - David Bisson
Producer - David Bisson`,
    caption: "Sundance Selection",
    date: "2009-01-01",
    categories: ["producing", "cinematography", "awards"],
  },
  {
    slug: "coppelia-backstage",
    youtubeId: "A3VIQ0REl88",
    title: "Coppelia — A Backstage Look",
    blurb: `BYU Copellia - A Backstage Look

Cinematographer - David Bisson`,
    caption: "BYU Coppélia — Backstage Look",
    date: "2026-06-01",
    categories: ["producing", "cinematography"],
  },
  {
    slug: "penny-dreadful",
    youtubeId: "MkxnQ4LkUw8",
    title: "Penny Dreadful",
    blurb: `Penny Dreadful - Audience award winner at Clermont-Ferrand international Short Film Festival

Co-Producer - David Bisson`,
    caption: "Audience Choice Award — Clermont-Ferrand International Short Film Festival",
    date: "2026-06-01",
    categories: ["producing", "awards"],
  },
  {
    slug: "mali-basketball",
    youtubeId: "lVEQmfUmNOI",
    title: "Mali Basketball",
    blurb: `Mali Basketbal Doc
Editor - David Bisson`,
    caption: "Mali Basketball — Documentary",
    date: "2026-06-01",
    categories: ["editing"],
  },
  {
    slug: "levis-go-forth",
    youtubeId: "mtIFZbp8pR4",
    title: "Levi's Go Forth — Spec Ad",
    blurb: `Levi's Go Forth - Spec for ThinkingBox
Co-Videograoher - David Bisson`,
    caption: "Levi's Go Forth — Spec Ad",
    date: "2026-06-01",
    categories: ["cinematography"],
  },
  {
    slug: "ewc-chess-hype-tease",
    youtubeId: "SZLxvo4ihBA",
    title: "eSports World Cup 2025",
    blurb: `eSports World Cup 2025
Chess Hype Tease
Editor - David Bisson`,
    caption: "eSports World Cup 2025 — Chess Hype Tease",
    date: "2025-07-29",
    categories: ["editing"],
  },
];

export function getVideoBySlug(slug: string): Video | undefined {
  return videos.find((video) => video.slug === slug);
}

/**
 * Videos belonging to a given area of work. Videos that live ONLY in this
 * category (unique to it) float to the top; the rest follow, each group
 * ordered newest-first.
 */
export function videosByCategory(key: CategoryKey): Video[] {
  return videos
    .filter((video) => video.categories.includes(key))
    .sort((a, b) => {
      const aUnique = a.categories.length === 1;
      const bUnique = b.categories.length === 1;
      if (aUnique !== bUnique) return aUnique ? -1 : 1;
      return b.date.localeCompare(a.date);
    });
}
