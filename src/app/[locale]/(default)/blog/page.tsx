import { setRequestLocale, getTranslations } from "next-intl/server";
import { getAllBlogPosts, BlogFrontmatter } from "@/src/utils/md-utils";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });
  return {
    title: {
      absolute: `${t("title")} – Blog KNI Education`,
    },
    description: t("subtitle"),
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://kni.vn/${locale}/blog/`,
      languages: {
        'en': `https://kni.vn/en/blog/`,
        'vi': `https://kni.vn/vn/blog/`,
        'x-default': `https://kni.vn/vn/blog/`,
      },
    },
    openGraph: {
      title: `${t("title")} – Blog KNI Education`,
      description: t("subtitle"),
      url: `https://kni.vn/${locale}/blog/`,
      siteName: "KNI Education",
      images: [
        {
          url: "https://kni.vn/images/og-image-blog.jpg",
          width: 1200,
          height: 630,
          alt: "KNI Education – Blog TestAS",
        },
      ],
      locale: locale === "en" ? "en_US" : "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} – Blog KNI Education`,
      description: t("subtitle"),
      images: ["https://kni.vn/images/twitter-image-blog.jpg"],
    },
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function getCategoryBadge(category: string): {
  className: string;
  label: string;
} {
  const label = category === "Pillar" ? "Pillar" : category;
  return {
    className: "bg-orange-100 text-orange-700",
    label,
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Blog" });
  const ht = await getTranslations({ locale, namespace: "HomePage" });

  const posts = getAllBlogPosts() as BlogFrontmatter[];

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": locale === "vn" ? "Trang chủ" : "Home",
        "item": `https://kni.vn/${locale}/`,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": t("title"),
        "item": `https://kni.vn/${locale}/blog/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <section className="bg-white pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Article Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              {locale === "vn" ? "Chưa có bài viết nào." : "No articles yet."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const badge = getCategoryBadge(post.category);
              return (
                <article
                  key={post.slug}
                  className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${badge.className}`}
                      >
                        {badge.label}
                      </span>
                      <span className="text-xs text-gray-400">
                        {formatDate(post.date)}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      <Link
                        href={`/${locale}/blog/${post.slug}`}
                        className="hover:text-orange-500 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-gray-600 line-clamp-3 flex-1">
                      {post.description}
                    </p>

                    <div className="mt-4">
                      <Link
                        href={`/${locale}/blog/${post.slug}`}
                        className="inline-flex items-center text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                      >
                        {t("readMore")}
                        <svg
                          className="ml-1 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
    </>
  );
}
