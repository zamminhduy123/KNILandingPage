import type { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/src/utils/md-utils';
import { routing } from '@/src/i18n/routing';

export const dynamic = 'force-static';

const BASE_URL = 'https://kni.vn';

// Route folders are `vn` / `en`, but hreflang must use ISO 639-1 codes (`vi`, not `vn`).
const HREFLANG: Record<string, string> = { vn: 'vi', en: 'en' };

// Default locale first so entries (and x-default) read naturally.
const LOCALES = [
  routing.defaultLocale,
  ...routing.locales.filter((l) => l !== routing.defaultLocale),
];

// Indexable pages only. thank-you / thank-you-free-consult are noindex, so they stay out.
const STATIC_PAGES = [
  '',
  'khoa-hoc-testas',
  'free-testas',
  'contact',
  'consultation',
  'blog',
  'privacy-policy',
];

const urlFor = (locale: string, path: string) =>
  `${BASE_URL}/${locale}/${path ? `${path}/` : ''}`;

type Entry = MetadataRoute.Sitemap[number];

/**
 * One <url> per locale version. Every entry lists ALL versions (itself included)
 * plus x-default — Google requires the alternates to be reciprocal, and each
 * language version must appear as its own <url>, not only as an alternate.
 */
function localizedEntries(
  path: string,
  lastModifiedByLocale: Record<string, string | undefined>,
  locales: string[] = LOCALES
): Entry[] {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[HREFLANG[locale] ?? locale] = urlFor(locale, path);
  }
  languages['x-default'] = urlFor(
    locales.includes(routing.defaultLocale) ? routing.defaultLocale : locales[0],
    path
  );

  return locales.map((locale) => {
    const entry: Entry = {
      url: urlFor(locale, path),
      alternates: { languages },
    };
    // Only emit <lastmod> when we have a real date; a made-up constant is worse than none.
    const lastModified = lastModifiedByLocale[locale];
    if (lastModified) entry.lastModified = lastModified;
    return entry;
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const postsByLocale = Object.fromEntries(
    LOCALES.map((locale) => [locale, getAllBlogPosts(locale)])
  );

  const postDate = (p: { date: string; updated?: string }) => p.updated || p.date;

  // Static pages: no reliable per-page modified date at build time, so omit <lastmod>.
  // The blog index is the exception: it changes whenever a post is added or updated.
  const newestPostByLocale = Object.fromEntries(
    LOCALES.map((locale) => [
      locale,
      postsByLocale[locale].map(postDate).sort().at(-1),
    ])
  );

  const entries: MetadataRoute.Sitemap = [];

  for (const page of STATIC_PAGES) {
    entries.push(
      ...localizedEntries(page, page === 'blog' ? newestPostByLocale : {})
    );
  }

  // Blog posts: only list a locale if that translation actually exists.
  const slugs = Array.from(
    new Set(LOCALES.flatMap((l) => postsByLocale[l].map((p) => p.slug)))
  );

  for (const slug of slugs) {
    const available = LOCALES.filter((l) =>
      postsByLocale[l].some((p) => p.slug === slug)
    );
    const lastModifiedByLocale = Object.fromEntries(
      available.map((l) => [
        l,
        postDate(postsByLocale[l].find((p) => p.slug === slug)!),
      ])
    );
    entries.push(
      ...localizedEntries(`blog/${slug}`, lastModifiedByLocale, available)
    );
  }

  return entries;
}
