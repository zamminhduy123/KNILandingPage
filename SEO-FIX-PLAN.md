# SEO Fix Plan — KNI Education

> Audit date: 2026-07-05
> Framework: Next.js 15 (App Router, Static Export)
> Locale: `vn` (default), `en`
> Domain: `kni.vn`

---

## Scope

- **Excluded:** `ve-nhat/` page — currently disabled, no navigation link. No SEO work needed.
- **In scope:** 9 active pages + layout + sitemap + manifest + structured data.

---

## Phase 1 — Add SEO strings to i18n files

**Files:** `messages/en.json`, `messages/vn.json`

Add `seo` blocks per page. Pattern:

```json
"seo": {
  "home": {
    "title": "TestAS Preparation | KNI Education — Luyện thi TestAS Đức chất lượng cao",
    "description": "KNI Education cung cấp lộ trình luyện thi TestAS chuyên nghiệp, giáo viên Việt-Nam & Đức, tài liệu độc quyền. Đăng ký tư vấn miễn phí ngay.",
    "ogTitle": "Luyện thi TestAS cùng KNI Education",
    "ogDescription": "Lộ trình cá nhân hóa, 100% học viên đạt mục tiêu điểm số.",
    "ogImageAlt": "KNI Education TestAS Preparation"
  },
  "consultation": {
    "title": "Tư vấn TestAS miễn phí | KNI Education",
    "description": "Đặt lịch tư vấn miễn phí với chuyên gia giáo dục Đức từ KNI. Đánh giá trình độ, lộ trình học cá nhân hóa.",
    "ogTitle": "Tư vấn TestAS miễn phí — KNI Education",
    "ogDescription": "Đăng ký tư vấn ngay, nhận lộ trình học cá nhân hóa trong 24h.",
    "ogImageAlt": "Tư vấn TestAS miễn phí KNI Education"
  },
  "contact": {
    "title": "Liên hệ KNI Education — Tư vấn du học Đức & TestAS",
    "description": "Liên hệ KNI Education qua hotline, email hoặc đến trực tiếp văn phòng. Hỗ trợ tư vấn du học Đức và luyện thi TestAS.",
    "ogTitle": "Liên hệ KNI Education",
    "ogDescription": "Văn phòng tại TP.HCM & Hà Nội. Hotline: +84-91-839-1099.",
    "ogImageAlt": "Liên hệ KNI Education"
  },
  "freeTestas": {
    "title": "Làm thử TestAS miễn phí | KNI Education — Đánh giá trình độ ngay",
    "description": "Làm bài test thử TestAS hoàn toàn miễn phí, nhận kết quả phân tích trình độ và lộ trình học cá nhân hóa từ KNI Education.",
    "ogTitle": "Làm thử TestAS miễn phí — KNI Education",
    "ogDescription": "Bài test thử chuẩn đề thi thật, phân tích chi tiết điểm mạnh/yếu.",
    "ogImageAlt": "Làm thử TestAS miễn phí KNI Education"
  },
  "course": {
    "title": "Khóa học TestAS | KNI Education — Lộ trình từ A1 đến B1",
    "description": "Khám phá các khóa học TestAS từ cơ bản đến nâng cao tại KNI Education. Giáo viên bản xứ, tài liệu độc quyền, cam kết đầu ra.",
    "ogTitle": "Khóa học TestAS — KNI Education",
    "ogDescription": "Lộ trình A1→B1, cam kết đầu ra, học viên 9.0/10 hài lòng.",
    "ogImageAlt": "Khóa học TestAS KNI Education"
  },
  "privacyPolicy": {
    "title": "Chính sách bảo mật | KNI Education",
    "description": "Chính sách bảo mật thông tin cá nhân của KNI Education. Chúng tôi cam kết bảo vệ dữ liệu khách hàng theo quy định pháp luật.",
    "ogTitle": "Chính sách bảo mật — KNI Education",
    "ogDescription": "Chính sách bảo mật thông tin cá nhân KNI Education.",
    "ogImageAlt": "Chính sách bảo mật KNI Education"
  },
  "thankYou": {
    "title": "Cảm ơn bạn | KNI Education — Chúng tôi sẽ liên hệ sớm nhất",
    "description": "Cảm ơn bạn đã đăng ký. Đội ngũ KNI Education sẽ liên hệ tư vấn trong vòng 24 giờ.",
    "ogTitle": "Cảm ơn bạn — KNI Education",
    "ogDescription": "Đã nhận được đăng ký của bạn. Chúng tôi sẽ liên hệ sớm nhất.",
    "ogImageAlt": "Cảm ơn bạn KNI Education"
  },
  "thankYouFreeConsult": {
    "title": "Đăng ký thành công | KNI Education — Tư vấn miễn phí TestAS",
    "description": "Đăng ký tư vấn miễn phí TestAS thành công. KNI Education sẽ liên hệ trong 24h.",
    "ogTitle": "Đăng ký thành công — KNI Education",
    "ogDescription": "Đã nhận đăng ký tư vấn. Liên hệ trong 24h.",
    "ogImageAlt": "Đăng ký thành công KNI Education"
  }
}
```

Apply to **both** `messages/en.json` and `messages/vn.json` with appropriate translations.

---

## Phase 2 — Fix page-level metadata (generateMetadata)

### 2.1 Home page

**File:** `src/app/[locale]/(default)/page.tsx`

**Changes:**
- Replace hardcoded title/description with `t("seo.home.title")` and `t("seo.home.description")`
- Add `ogTitle`, `ogDescription`, `ogImageAlt` from i18n
- Add `robots: { index: true, follow: true }`
- Keep dynamic canonical (already correct)
- Add `template` to metadata for consistent title suffix

```tsx
// Before:
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'KNI Education - Trang chủ',  // hardcoded VN
    description: '...',  // hardcoded VN
    // ...
  };
}

// After:
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('seo.home');
  const canonical = locale === 'vn' ? '/' : `/${locale}/`;
  return {
    title: t('title'),
    description: t('description'),
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://kni.vn${canonical}`,
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [
        {
          url: `https://kni.vn${canonical}images/og-home.jpg`,  // locale-aware URL
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
      locale: locale === 'vn' ? 'vi_VN' : 'en_US',
      type: 'website',
      siteName: 'KNI Education',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [`https://kni.vn${canonical}images/og-home.jpg`],
    },
  };
}
```

### 2.2 Consultation page

**File:** `src/app/[locale]/(default)/consultation/page.tsx`

**Changes:**
- Title from `t("seo.consultation.title")`
- Description from `t("seo.consultation.description")`
- OG URLs: `https://kni.vn/${locale}/consultation/` (was hardcoded `https://kni.vn/consultation/`)
- Twitter URLs: same fix
- Add `robots: { index: true, follow: true }`
- OG locale dynamic

```tsx
// Before: ogUrl hardcoded
ogUrl: 'https://kni.vn/consultation/',  // WRONG
twitterUrl: 'https://kni.vn/consultation/',  // WRONG

// After: locale-aware
const canonical = `/${locale}/consultation/`;
ogUrl: `https://kni.vn${canonical}`,
twitterUrl: `https://kni.vn${canonical}`,
```

### 2.3 Contact page

**File:** `src/app/[locale]/(default)/contact/page.tsx`

**Changes:**
- Same pattern as consultation
- OG URL: `https://kni.vn/${locale}/contact/` (was hardcoded)
- Title from `t("seo.contact.title")`
- Add `robots`

### 2.4 Free-TESTAS page

**File:** `src/app/[locale]/(default)/free-testas/page.tsx`

**Changes:**
- OG URL: `https://kni.vn/${locale}/free-testas/` (was hardcoded)
- Title from `t("seo.freeTestas.title")`
- Add `robots`
- **Fix structured data** (see Phase 3)
- **Replace `<Head>` + `dangerouslySetInnerHTML` with `<Script>`** (see Phase 4)

### 2.5 Privacy-Policy page

**File:** `src/app/[locale]/(default)/privacy-policy/page.tsx`

**Changes:**
- Canonical: `https://kni.vn/${locale}/privacy-policy/` (was hardcoded, missing locale)
- OG URL: `https://kni.vn/${locale}/privacy-policy/` (was hardcoded)
- Title already uses `t("title")` but wrap with template pattern:
  ```tsx
  title: { default: t('title'), template: `%s | KNI Education` }
  ```
- Add `ogTitle`, `ogDescription` from i18n
- Already has `robots` — good, keep it

### 2.6 Course (khoa-hoc-testas) page

**File:** `src/app/[locale]/(default)/khoa-hoc-testas/page.tsx`

**Changes:**
- **Add `params` destructuring to `generateMetadata`**:
  ```tsx
  export async function generateMetadata({
    params,
  }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const canonical = `/${locale}/khoa-hoc-testas/`;
    return {
      title: t("seo.course.title"),  // i18n
      description: t("seo.course.description"),
      robots: { index: true, follow: true },
      alternates: {
        canonical: `https://kni.vn${canonical}`,
      },
      openGraph: {
        title: t("seo.course.ogTitle"),
        description: t("seo.course.ogDescription"),
        images: [
          { url: `https://kni.vn${canonical}images/og-course.jpg`, width: 1200, height: 630, alt: t("seo.course.ogImageAlt") },
        ],
        locale: locale === 'vn' ? 'vi_VN' : 'en_US',
        type: 'website',
        siteName: 'KNI Education',
      },
      twitter: {
        card: 'summary_large_image',
        title: t("seo.course.ogTitle"),
        description: t("seo.course.ogDescription"),
        images: [`https://kni.vn${canonical}images/og-course.jpg`],
      },
    };
  }
  ```
- This makes the page truly localized for both locales

### 2.7 Thank-You pages (both)

**Files:** `src/app/[locale]/(default)/thank-you/page.tsx` + `thank-you-free-consult/page.tsx`

**Changes:**
- Add `robots: { index: false, follow: true }` — thank-you pages should NOT be indexed
- OG URLs: `https://kni.vn/${locale}/thank-you/` and `https://kni.vn/${locale}/thank-you-free-consult/`
- Title from i18n

### 2.8 Blog listing

**File:** `src/app/[locale]/(default)/blog/page.tsx`

**Changes:**
- OG URL already uses locale — good, keep it
- Add `ogTitle`, `ogDescription`, `ogImageAlt` from i18n (if not already present)
- Already has `robots` — good

### 2.9 Blog post (dynamic)

**File:** `src/app/[locale]/(default)/blog/[slug]/page.tsx`

**Changes:**
- Add `robots: { index: true, follow: true }` (optional, defaults to true)
- OG URL already locale-aware — good
- Consider adding keywords from frontmatter

---

## Phase 3 — Fix Structured Data (JSON-LD)

### 3.1 free-testas/page.tsx structured data

**File:** `src/app/[locale]/(default)/free-testas/page.tsx` (lines 67–103)

**Fixes:**

| Field | Current (wrong) | Should be |
|-------|-----------------|-----------|
| `telephone` | `+84-123-456-789` | `+84-91-839-1099` |
| `facebook` | `facebook.com/kni-education` | `facebook.com/testascandidates` |
| `twitter` | `twitter.com/kni-education` | *(remove — no Twitter account)* |
| `instagram` | `instagram.com/kni-education` | `instagram.com/khanhnhatinstitute/` |
| `tiktok` | *(missing)* | `tiktok.com/@khanhnhat.institute` |
| `logo` | `.webp` | `.avif` (match layout.tsx line 86) |
| `inLanguage` | hardcoded `"en-US"` | dynamic: `locale === 'vn' ? 'vi-VN' : 'en-US'` |

### 3.2 Add WebPage schema to homepage

**File:** `src/app/[locale]/(default)/page.tsx`

Add `WebPage` structured data alongside existing layout-level `EducationalOrganization`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: t('seo.home.title'),
      description: t('seo.home.description'),
      url: 'https://kni.vn/',
      publisher: {
        '@type': 'Organization',
        name: 'KNI Education',
        url: 'https://kni.vn/',
      },
    }),
  }}
/>
```

### 3.3 Add WebPage schema to consultation and contact pages

Same pattern, with respective page URLs and titles.

### 3.4 Add WebSite schema to layout.tsx

**File:** `src/app/[locale]/(default)/layout.tsx` (alongside existing EducationalOrganization)

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'KNI Education',
      url: 'https://kni.vn/',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://kni.vn/{search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    }),
  }}
/>
```

### 3.5 Add BreadcrumbList to blog listing page

**File:** `src/app/[locale]/(default)/blog/page.tsx`

Add `BreadcrumbList` schema: Home → Blog

### 3.6 Add AggregateRating schema for reviews

**File:** Where reviews data is available (likely `reviews.tsx` or its parent page)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "9.0",
    "reviewCount": "44",
    "bestRating": "10",
    "worstRating": "1"
  }
}
```

---

## Phase 4 — Replace `<Head>` with `<Script>` (free-testas)

**File:** `src/app/[locale]/(default)/free-testas/page.tsx` (lines 115-120)

**Before:**
```tsx
<Head>
  <script
    dangerouslySetInnerHTML={{
      __html: `{ "json": ... }`,
    }}
  />
</Head>
```

**After:**
```tsx
import Script from 'next/script';

<Script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(schemaObject),
  }}
/>
```

Or better, extract to a variable and use `JSON.stringify` directly:
```tsx
const freeTestasSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  // ...
};

<Script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(freeTestasSchema) }}
/>
```

---

## Phase 5 — Fix Hreflang (layout.tsx)

**File:** `src/app/[locale]/(default)/layout.tsx` (lines 56-58)

**Problem:** Hreflang links always point to the homepage (`/`), not the current page.

**Fix:** Since this is a layout, we need to pass the current path down. The cleanest approach:

Option A — Keep layout-level static hreflang (current approach) but accept it only works for the homepage. For sub-pages, each page's `generateMetadata` `alternates` already handles canonical URLs, which is the most critical signal.

Option B (recommended) — Add a context or prop to pass the current pathname to the layout, then generate dynamic hreflang:

```tsx
// layout.tsx
export default function DefaultLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <html lang={locale} dir="ltr" suppressHydrationWarning>
      <link rel="alternate" hrefLang="en" href={`https://kni.vn${pathname !== '/' ? `/${locale}` : ''}${pathname === '/' ? '' : pathname}`} />
      <link rel="alternate" hrefLang="vi" href={`https://kni.vn${pathname !== '/' ? `/${locale}` : ''}${pathname === '/' ? '' : pathname}`} />
      <link rel="alternate" hrefLang="x-default" href={`https://kni.vn${pathname === '/' ? '' : pathname}`} />
    </html>
  );
}
```

Actually, for simplicity and since the layout doesn't have access to the current route path, **Option A is acceptable** for this project. The `alternates.canonical` on each page is the stronger signal. The layout-level hreflang handles the homepage, and the sitemap handles the rest. **Defer this fix** — low impact.

---

## Phase 6 — Noindex Thank-You Pages

**Files:**
- `src/app/[locale]/(default)/thank-you/page.tsx`
- `src/app/[locale]/(default)/thank-you-free-consult/page.tsx`

Add to each `generateMetadata`:

```tsx
robots: {
  index: false,
  follow: true,
},
```

---

## Phase 7 — Sitemap Updates

**File:** `public/sitemap.xml`

**Changes:**
- Verify all 10+ URLs are present: `/`, `/free-testas/`, `/consultation/`, `/contact/`, `/privacy-policy/`, `/blog/`, `/blog/[slug]/`, `/khoa-hoc-testas/`, `/ve-nhat/`, `/thank-you/`, `/thank-you-free-consult/`
- Ensure `<lastmod>` dates are current
- Add missing blog post URLs if they exist

**Long-term recommendation:** Migrate to `next-sitemap` for automated generation:

```bash
npm install next-sitemap
```

Add to `next.config.js`:
```js
const nextConfig = {
  output: "export",
  trailingSlash: true,
  // ...
};

module.exports = nextConfig;
```

Add `next-sitemap.config.js`:
```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kni.vn/',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/thank-you/*', '/thank-you-free-consult/*'],
  additionalItems: async () => {
    // Dynamic blog post URLs from markdown
  },
};
```

Update `package.json`:
```json
"scripts": {
  "postbuild": "next-sitemap"
}
```

---

## Phase 8 — Manifest & Favicon

**File:** `public/manifest.json`

**Changes:**
- Add `192x192` icon
- Add `515x512` icon
- Add `apple-touch-icon` link in layout

```json
{
  "icons": [
    { "src": "/icon.png", "sizes": "32x32", "type": "image/png" },
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

**File:** `src/app/[locale]/(default)/layout.tsx`

Add:
```tsx
<link rel="apple-touch-icon" href="/icon-192.png" />
<link rel="icon" href="/icon.png" sizes="32x32" type="image/png" />
<link rel="icon" href="/icon-192.png" sizes="192x192" type="image/png" />
<link rel="icon" href="/icon-512.png" sizes="512x512" type="image/png" />
```

---

## Phase 9 — Accessibility / Minor SEO Boosters

### 9.1 Review image alt text

**File:** `src/components/reviews.tsx` (lines 76, 102, 125)

Replace repetitive `"Học viên KNI chia sẻ trải nghiệm luyện thi TestAS"` with varied, unique alt text. Pull from review data if available, or use variations:

```tsx
alt={`Học viên ${review.name} chia sẻ về khóa học TestAS`}
```

### 9.2 Language toggle aria-label

**File:** `src/components/ui/header.tsx` (lines 116-130)

Add `aria-label` to language toggle links:

```tsx
aria-label={locale === 'vn' ? 'Switch to English' : 'Chuyển sang tiếng Việt'}
```

### 9.3 Not-found page

Create `src/app/[locale]/not-found.tsx`:

```tsx
import { Link } from '@/i18n/routing';

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">404 — Page Not Found</h1>
        <p className="mt-4">The page you're looking for doesn't exist.</p>
        <Link href="/" className="btn mt-6">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
```

### 9.4 Remove dead code

Delete `src/components/hero-home.tsx` — never rendered, replaced by `hero/HeroSection.tsx`.

### 9.5 LCP image priority

Check hero section images. Add `fetchPriority="high"` to the hero LCP image:

```tsx
<Image src={...} fetchPriority="high" />
```

---

## Execution Order (by dependency)

| Step | Phase | Effort | Depends On | Status |
|------|-------|--------|------------|--------|
| 1 | Phase 1 (i18n strings) | Medium | — | **✅ DONE** |
| 2 | Phase 2 | Medium | Phase 1 (i18n strings exist) | ⬜ |
| 3 | Phase 3 | Medium | — (can run in parallel with Phase 2) | ⬜ |
| 4 | Phase 4 | Small | Phase 3 (fixes same file) | **✅ DONE** — Already uses plain `<script>` with `JSON.stringify(structuredData)`. No `<Head>` or `dangerouslySetInnerHTML` anti-pattern present. |
| 5 | Phase 5 (Hreflang) | Low | — | **✅ Deferred** — Layout-level static hreflang acceptable for current scale; sitemap alternates handle it |
| 6 | Phase 6 (Noindex thank-you) | Small | — | **✅ DONE** — Both pages already had `robots: { index: false, follow: true }` |
| 7 | Phase 7 (Sitemap) | Small | — | **✅ DONE** — All pages present, hreflang alternates consistent, lastmod current |
| 8 | Phase 8 (Manifest + Favicon) | Small | Generate new icon files | **✅ DONE** — Added 192x192 & 512x512 icons, updated layout with apple-touch-icon, WebSite + AggregateRating schemas already present |
| 9 | Phase 9 (Minor boosters) | Small | — | **✅ DONE** — Added 404 page (`not-found.tsx`), language toggle `aria-label` already present, removed dead code `hero-home.tsx`, reviews alt text already unique |
| 10 | Phase 10 (HTTP -> HTTPS 301 Redirect) | Small | — | **✅ DONE** — Added 301 redirects across `middleware.js`, `vercel.json`, `public/_redirects`, and `public/.htaccess` to stack HTTP/www backlink equity onto `https://kni.vn` |

---

## Verification Checklist (after fixes)

- [ ] Run `next build` — no errors
- [ ] Check each page source: `<title>`, `<meta name="description">`, `<link rel="canonical">`
- [ ] Check Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:locale`
- [ ] Check Twitter card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] Validate structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Validate hreflang with [hreflang-tests.com](https://www.hreflang-tests.com/)
- [ ] Run Lighthouse audit — target ≥90 for SEO score
- [ ] Check sitemap.xml at `https://kni.vn/sitemap.xml` — all pages present
- [ ] Test both locales (`/vn/` and `/en/`) for consistency
- [ ] Submit sitemap to Google Search Console

---

## Not Done (Deliberate Exclusions)

| Item | Reason |
|------|--------|
| `ve-nhat/` SEO metadata | Page is disabled, no navigation link |
| Dynamic `robots.ts` | Static export, no staging environment to worry about |
| `next-sitemap` migration | Manual sitemap maintenance is acceptable for current page count (~10); re-evaluate when blog posts exceed 50 |
| Product/Service schema for pricing | Low priority; add when courses have distinct SKUs/pricing tiers |
| Visible breadcrumb navigation | Nice-to-have, not a ranking factor |
| `fetchPriority="high"` on hero images | Low impact for static site; defer to Phase 9 if Core Web Vitals are weak |
