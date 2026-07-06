import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogPosts, BlogFrontmatter } from "@/src/utils/md-utils";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamic = "force-static";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getBlogPostBySlug(slug, locale);
  if (!post) return { title: "Not Found" };

  return {
    title: {
      absolute: `${post.frontmatter.title} | KNI Education`,
    },
    description: post.frontmatter.description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://kni.vn/${locale}/blog/${post.frontmatter.slug}/`,
      languages: {
        'en': `https://kni.vn/en/blog/${post.frontmatter.slug}/`,
        'vi': `https://kni.vn/vn/blog/${post.frontmatter.slug}/`,
        'x-default': `https://kni.vn/vn/blog/${post.frontmatter.slug}/`,
      },
    },
    openGraph: {
      title: `${post.frontmatter.title} | KNI Education`,
      description: post.frontmatter.description,
      url: `https://kni.vn/${locale}/blog/${post.frontmatter.slug}/`,
      siteName: "KNI Education",
      images: [
        {
          url: `https://kni.vn${post.frontmatter.image}`,
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        },
      ],
      locale: locale === "en" ? "en_US" : "vi_VN",
      type: "article",
      publishedTime: post.frontmatter.date,
      section: post.frontmatter.category,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.frontmatter.title} | KNI Education`,
      description: post.frontmatter.description,
      images: [`https://kni.vn${post.frontmatter.image}`],
    },
  };
}

export function generateStaticParams() {
  const posts = getAllBlogPosts() as BlogFrontmatter[];
  return posts.flatMap((post) =>
    ["vn", "en"].map((locale) => ({
      locale,
      slug: post.slug,
    }))
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function getRelatedArticles(
  currentSlug: string,
  locale: string
): (BlogFrontmatter & { slug: string })[] {
  const posts = getAllBlogPosts() as BlogFrontmatter[];
  return posts
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3);
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;

  const post = await getBlogPostBySlug(slug, locale);
  if (!post) notFound();

  const { frontmatter, html } = post;

  const t = await getTranslations({ locale, namespace: "Blog" });
  const ht = await getTranslations({ locale, namespace: "HomePage" });

  const relatedArticles = getRelatedArticles(frontmatter.slug, locale);

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
      {
        "@type": "ListItem",
        "position": 3,
        "name": frontmatter.title,
        "item": `https://kni.vn/${locale}/blog/${frontmatter.slug}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <section className="bg-white pt-32 pb-20 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link
                href={`/${locale}`}
                className="hover:text-orange-500 transition-colors"
              >
                {locale === "vn" ? "Trang chủ" : "Home"}
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li>
              <Link
                href={`/${locale}/blog`}
                className="hover:text-orange-500 transition-colors"
              >
                {t("title")}
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-900 font-medium truncate max-w-[200px]">
              {frontmatter.title}
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <div className="mb-10">
          {/* Featured Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl mb-8 bg-gray-100">
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
              {frontmatter.category}
            </span>
            <span className="text-sm text-gray-400">{formatDate(frontmatter.date)}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
            {frontmatter.title}
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            {frontmatter.description}
          </p>
        </div>

        {/* Article Content */}
        <article
          className="prose prose-lg prose-gray max-w-none mb-16"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* CTA Section */}
        <div className="mb-16">
          <div className="rounded-2xl bg-gray-900 px-6 py-12 text-center shadow-xl md:px-12 md:py-16">
            <h2 className="text-2xl font-bold text-gray-200 mb-4 md:text-3xl">
              {ht("cta.contact")}
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              {locale === "vn"
                ? "Đừng ngần ngại liên hệ để được tư vấn miễn phí về lộ trình ôn thi TestAS!"
                : "Don't hesitate to contact us for free TestAS preparation consultation!"}
            </p>
            <Link
              href={`/${locale}/consultation`}
              className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors shadow-md"
            >
              {ht("cta.registerNow")}{" "}
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="border-t border-gray-100 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {t("relatedArticles")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <article key={related.slug}>
                  <Link
                    href={`/${locale}/blog/${related.slug}`}
                    className="group block"
                  >
                    <div className="relative h-36 w-full overflow-hidden rounded-xl mb-3 bg-gray-100">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-orange-500 transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      {formatDate(related.date)}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Back to Blog Link */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold transition-colors"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {t("backToBlog")}
          </Link>
        </div>
      </div>

      {/* BreadcrumbList Structured Data */}
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        suppressHydrationWarning
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: locale === "vn" ? "Trang chủ" : "Home",
              item: `https://kni.vn/${locale === "vn" ? "" : locale}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: t("title"),
              item: `https://kni.vn/${locale === "vn" ? "" : locale}/blog/`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: frontmatter.title,
              item: `https://kni.vn/${locale === "vn" ? "" : locale}/blog/${frontmatter.slug}/`,
            },
          ],
        })}
      </Script>

      {/* FAQPage Structured Data */}
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        suppressHydrationWarning
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name:
                locale === "vn"
                  ? "TestAS thi bằng tiếng Anh hay tiếng Đức?"
                  : "Is TestAS in English or German?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  locale === "vn"
                    ? "Bạn có thể chọn thi bằng tiếng Anh hoặc tiếng Đức. Tùy vào chương trình bạn đăng ký mà sẽ có yêu cầu ngôn ngữ khác nhau."
                    : "You can choose to take the test in English or German, depending on the program you apply to.",
              },
            },
            {
              "@type": "Question",
              name:
                locale === "vn"
                  ? "TestAS bao nhiêu điểm để xét tuyển?"
                  : "What score is required for TestAS?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  locale === "vn"
                    ? "Điểm yêu cầu phụ thuộc vào từng trường đại học. Hầu hết các trường top đầu yêu cầu từ 1.2 đến 1.8."
                    : "Score requirements depend on each university. Most top universities require a score between 1.2 and 1.8.",
              },
            },
            {
              "@type": "Question",
              name:
                locale === "vn"
                  ? "Có cần IELTS để thi TestAS không?"
                  : "Is IELTS required for TestAS?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  locale === "vn"
                    ? "Không, TestAS không yêu cầu IELTS. Tuy nhiên, nhiều trường đại học tại Đức cũng yêu cầu chứng chỉ ngôn ngữ (IELTS hoặc TestDaF) riêng biệt khi nộp hồ sơ."
                    : "No, TestAS does not require IELTS. However, many German universities also require separate language certificates (IELTS or TestDaF) when applying.",
              },
            },
            {
              "@type": "Question",
              name:
                locale === "vn"
                  ? "TestAS Digital và Paper khác nhau như thế nào?"
                  : "What is the difference between TestAS Digital and Paper?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  locale === "vn"
                    ? "TestAS Digital thi trên máy tính với giao diện trực quan, có chức năng highlight và note. TestAS Paper thi trên giấy truyền thống. Nội dung và cấu trúc đề thi giống nhau hoàn toàn."
                    : "TestAS Digital is taken on a computer with a visual interface featuring highlight and note functions. TestAS Paper is the traditional paper-based test. The content and structure are exactly the same.",
              },
            },
          ],
        })}
      </Script>
    </section>
    </>
  );
}
