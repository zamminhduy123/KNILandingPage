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

function getFaqEntities(slug: string, locale: string) {
  if (slug === "xet-tuyen-vgu-bang-testas") {
    return [
      {
        "@type": "Question",
        name: locale === "vn"
          ? "Đang học lớp 12 chưa có bằng tốt nghiệp THPT có được thi TestAS vào VGU không?"
          : "Can current 12th graders without high school diplomas register for VGU TestAS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: locale === "vn"
            ? "Được. VGU khuyến khích học sinh lớp 12 tham gia thi đợt tháng 5 hoặc tháng 6. Bạn chỉ cần nộp CCCD và học bạ hiện có khi đăng ký, sau đó bổ sung giấy chứng nhận tốt nghiệp THPT sau kỳ thi quốc gia."
            : "Yes. Current 12th graders are encouraged to sit May or June sessions. You submit national ID and current transcripts, later supplementing provisional graduation certificates after national exams.",
        },
      },
      {
        "@type": "Question",
        name: locale === "vn"
          ? "Nếu điểm thi TestAS không đạt, tôi có thể xét tuyển VGU bằng phương thức khác không?"
          : "If my TestAS score is unsatisfactory, can I apply via another mode?",
        acceptedAnswer: {
          "@type": "Answer",
          text: locale === "vn"
            ? "Có. VGU xét tuyển theo 5 phương thức độc lập. Nếu kết quả TestAS chưa đạt mong muốn, bạn hoàn toàn có thể nộp học bạ THPT (Phương thức 2) hoặc điểm thi tốt nghiệp THPT (Phương thức 5)."
            : "Yes. VGU operates five independent modes. Unsatisfactory TestAS scores do not penalize your eligibility for GPA transcript admission (Mode 2) or graduation exam admission (Mode 5).",
        },
      },
      {
        "@type": "Question",
        name: locale === "vn"
          ? "Chứng chỉ TestAS có giá trị bao lâu và có dùng đi du học Đức được không?"
          : "How long are TestAS certificates valid, and can they be used in Germany?",
        acceptedAnswer: {
          "@type": "Answer",
          text: locale === "vn"
            ? "Chứng chỉ TestAS có giá trị vô thời hạn và được công nhận quốc tế. Kết quả này được dùng để xét tuyển vào VGU và dùng làm hồ sơ APS, xin visa du học trực tiếp tại Đức."
            : "TestAS certificates never expire and hold full international recognition. Scores are fully valid for APS certificates, German student visas, and direct university applications across Germany.",
        },
      },
      {
        "@type": "Question",
        name: locale === "vn"
          ? "Đề thi Digital TestAS tại VGU dùng ngôn ngữ gì?"
          : "What language is the Digital TestAS at VGU conducted in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: locale === "vn"
            ? "Toàn bộ bài thi Digital TestAS tổ chức tại VGU được thực hiện bằng tiếng Anh, đánh giá tư duy logic và năng lực học thuật chuyên ngành."
            : "All exams administered at VGU are conducted entirely in English. The exam evaluates academic aptitude, logic, and data analysis rather than English grammar.",
        },
      },
      {
        "@type": "Question",
        name: locale === "vn"
          ? "Chưa có chứng chỉ IELTS thì có được đăng ký thi TestAS không?"
          : "Can I register if I do not yet have an IELTS score?",
        acceptedAnswer: {
          "@type": "Answer",
          text: locale === "vn"
            ? "Được. Thí sinh chưa có IELTS 5.0 trở lên có thể đăng ký bài thi tiếng Anh VGU ETEST 4 kỹ năng do trường tổ chức. Đạt từ 75/100 điểm là đủ điều kiện ngoại ngữ."
            : "Yes. Simply indicate this during registration. VGU will schedule the 4-skill VGU ETEST exam (fee: 1,000,000 VND). Scoring >= 75/100 fulfills the language prerequisite.",
        },
      },
    ];
  }

  if (slug === "digital-testas-la-gi-so-sanh-paper-va-digital") {
    return [
      {
        "@type": "Question",
        name: locale === "vn"
          ? "Giá trị của chứng chỉ Digital TestAS có khác gì Paper TestAS không?"
          : "Is Digital TestAS recognized the same as Paper TestAS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: locale === "vn"
            ? "Không khác nhau. Cả hai dạng chứng chỉ đều do Viện TestDaF cấp, có giá trị quốc tế ngang nhau và đều có thời hạn vĩnh viễn. Các trường đại học tại Đức và VGU chấp nhận cả hai hình thức thi."
            : "Yes, absolutely. Both formats are issued by the TestDaF Institute, carry identical international validity, and never expire. German universities and VGU accept both without preference.",
        },
      },
      {
        "@type": "Question",
        name: locale === "vn"
          ? "Em có thể mang máy tính bỏ túi vào phòng thi Digital TestAS không?"
          : "Can I bring a personal calculator into the Digital TestAS room?",
        acceptedAnswer: {
          "@type": "Answer",
          text: locale === "vn"
            ? "Không. Cả hai hình thức thi TestAS đều nghiêm cấm thí sinh mang máy tính bỏ túi cá nhân vào phòng thi. Với bài thi Digital, hệ thống sẽ tích hợp sẵn máy tính cơ bản trên phần mềm ở những phần thi cho phép tính toán."
            : "No. Personal calculators are strictly forbidden for both formats. For Digital TestAS, an integrated on-screen basic calculator is provided automatically during sections where calculations are permitted.",
        },
      },
      {
        "@type": "Question",
        name: locale === "vn"
          ? "Em có được chuyển đổi giữa bài thi tiếng Anh và tiếng Đức không?"
          : "Can I switch test languages during the exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: locale === "vn"
            ? "Không. Khi đăng ký dự thi trực tuyến trên hệ thống testas.de, bạn phải chọn trước ngôn ngữ làm bài (tiếng Anh hoặc tiếng Đức). Đề thi hiển thị đúng ngôn ngữ bạn đã đăng ký từ đầu và không thể thay đổi trong lúc thi."
            : "No. You must choose your testing language (English or German) during registration on testas.de. The test software will only present the exam in the language selected beforehand.",
        },
      },
    ];
  }

  return [
    {
      "@type": "Question",
      name: locale === "vn"
        ? "TestAS thi bằng tiếng Anh hay tiếng Đức?"
        : "Is TestAS in English or German?",
      acceptedAnswer: {
        "@type": "Answer",
        text: locale === "vn"
          ? "Bạn có thể chọn thi bằng tiếng Anh hoặc tiếng Đức. Tùy vào chương trình bạn đăng ký mà sẽ có yêu cầu ngôn ngữ khác nhau."
          : "You can choose to take the test in English or German, depending on the program you apply to.",
      },
    },
    {
      "@type": "Question",
      name: locale === "vn"
        ? "TestAS bao nhiêu điểm để xét tuyển?"
        : "What score is required for TestAS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: locale === "vn"
          ? "Điểm yêu cầu phụ thuộc vào từng trường đại học. Hầu hết các trường top đầu yêu cầu điểm chuẩn hóa từ 100 đến 115 trở lên."
          : "Score requirements depend on each university. Most top universities require a standard score between 100 and 115 or higher.",
      },
    },
    {
      "@type": "Question",
      name: locale === "vn"
        ? "Có cần IELTS để thi TestAS không?"
        : "Is IELTS required for TestAS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: locale === "vn"
          ? "Không, TestAS không yêu cầu IELTS. Tuy nhiên, nhiều trường đại học tại Đức cũng yêu cầu chứng chỉ ngôn ngữ (IELTS hoặc TestDaF) riêng biệt khi nộp hồ sơ."
          : "No, TestAS does not require IELTS. However, many German universities also require separate language certificates (IELTS or TestDaF) when applying.",
      },
    },
    {
      "@type": "Question",
      name: locale === "vn"
        ? "TestAS Digital và Paper khác nhau như thế nào?"
        : "What is the difference between TestAS Digital and Paper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: locale === "vn"
          ? "TestAS Digital thi trên máy tính với thời gian rút ngắn 3.5 tiếng, cơ chế làm bài một chiều và không dùng giấy nháp. TestAS Paper thi trên giấy truyền thống cho phép lật xem trước và dùng giấy nháp."
          : "TestAS Digital is taken on a computer lasting 3.5 hours with one-way navigation and no scratch paper. TestAS Paper is the traditional paper-based format with free navigation and physical scratch paper.",
      },
    },
  ];
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;

  const post = await getBlogPostBySlug(slug, locale);
  if (!post) notFound();

  const { frontmatter, html, headings } = post;

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

          {/* Article Header - Featured Image Banner */}
          <div className="mb-10">
            <div className="relative h-64 sm:h-[420px] md:h-[480px] w-full overflow-hidden rounded-2xl mb-8 bg-slate-50 border border-slate-100 flex items-center justify-center p-3 sm:p-6 shadow-sm">
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            </div>
          </div>

          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            
            {/* Left Column: Article Content (2/3 width) */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                  {frontmatter.category}
                </span>
                <span className="text-sm text-gray-400">{formatDate(frontmatter.date)}</span>
              </div>

              <h1 className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
                {frontmatter.title}
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {frontmatter.description}
              </p>

              <hr className="border-t border-slate-100 my-8" />

              {/* Article Content */}
              <article
                className="prose prose-lg prose-slate max-w-none mb-16 prose-headings:text-slate-900 prose-headings:font-bold prose-a:text-orange-600 hover:prose-a:text-orange-700"
                dangerouslySetInnerHTML={{ __html: html }}
              />

              {/* Custom Styles for Inline Images and Tables */}
              <style dangerouslySetInnerHTML={{ __html: `
                .prose img {
                  max-height: 580px;
                  width: auto;
                  max-width: 100%;
                  object-fit: contain;
                  border-radius: 1rem;
                  margin-top: 1.5rem;
                  margin-bottom: 1.5rem;
                  margin-left: auto;
                  margin-right: auto;
                  display: block;
                  background-color: #f8fafc;
                  border: 1px solid #e2e8f0;
                  box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.05);
                }
                .blog-table-wrapper {
                  overflow-x: auto;
                  margin-top: 2rem;
                  margin-bottom: 2rem;
                  border-radius: 0.75rem;
                  border: 1px solid #e2e8f0;
                  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.03);
                  background: #ffffff;
                }
                .blog-table {
                  width: 100%;
                  min-width: 520px;
                  border-collapse: collapse;
                  font-size: 0.875rem;
                  line-height: 1.5;
                  text-align: left;
                }
                .blog-table th {
                  background-color: #f8fafc;
                  color: #0f172a;
                  font-weight: 700;
                  padding: 0.85rem 1rem;
                  border-bottom: 2px solid #cbd5e1;
                  border-right: 1px solid #e2e8f0;
                  white-space: nowrap;
                }
                .blog-table th:last-child {
                  border-right: none;
                }
                .blog-table td {
                  padding: 0.85rem 1rem;
                  color: #334155;
                  border-top: 1px solid #e2e8f0;
                  border-right: 1px solid #e2e8f0;
                  vertical-align: top;
                }
                .blog-table td:last-child {
                  border-right: none;
                }
                .blog-table tbody tr:nth-child(even) {
                  background-color: #f8fafc;
                }
                .blog-table tbody tr:hover {
                  background-color: #f1f5f9;
                }
              ` }} />
            </div>

            {/* Right Column: Sidebar (1/3 width) */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                
                {/* Author Card */}
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    {locale === "vn" ? "Tác giả bài viết" : "Author"}
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden bg-orange-100 flex-shrink-0 border border-slate-100">
                      <Image
                        src="/images/tutor-sig.jpg"
                        alt="KNI Mentor"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {locale === "vn" ? "Cựu Sinh Viên VGU" : "VGU Alumnus"}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {locale === "vn" ? "4 Năm Học Bổng VGU" : "4-Year Scholarship Holder"}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {locale === "vn" 
                      ? "Người sáng lập KNI Education, với hơn 3 năm đào tạo TestAS thực chiến, hỗ trợ hàng trăm học viên đạt điểm cao xét học bổng VGU & du học Đức."
                      : "Founder of KNI Education, with 3+ years of TestAS training, supporting hundreds of students in VGU admissions and study in Germany."}
                  </p>
                </div>

                {/* Table of Contents (Mục lục) */}
                {headings.length > 0 && (
                  <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                      {locale === "vn" ? "Mục lục bài viết" : "Table of Contents"}
                    </h3>
                    <nav className="space-y-2.5 text-xs">
                      {headings.map((heading) => (
                        <a
                          key={heading.id}
                          href={`#${heading.id}`}
                          className="block text-slate-600 hover:text-orange-600 transition-colors font-medium leading-relaxed"
                        >
                          {heading.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Sidebar CTA */}
                <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-xl">
                  <h4 className="font-bold text-base text-white mb-2">
                    {locale === "vn" ? "Tư vấn TestAS miễn phí" : "Free TestAS Consultation"}
                  </h4>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    {locale === "vn"
                      ? "Nhận lộ trình học cá nhân hóa giúp tối ưu hóa điểm số của bạn tại VGU & du học Đức."
                      : "Receive a personalized study roadmap to optimize your scores for VGU admissions."}
                  </p>
                  <Link
                    href={`/${locale}/consultation`}
                    className="block w-full text-center bg-orange-600 text-white font-semibold py-2.5 rounded-lg hover:bg-orange-700 transition-colors text-xs"
                  >
                    {locale === "vn" ? "Đăng ký ngay" : "Register Now"}
                  </Link>
                </div>

              </div>
            </div>

          </div>

          {/* CTA Section */}
          <div className="mt-16 max-w-3xl">
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
                className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
              >
                {ht("cta.registerNow")}{" "}
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="border-t border-gray-100 pt-12 mt-16">
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
                      <div className="relative h-36 w-full overflow-hidden rounded-xl mb-3 bg-slate-50 border border-slate-100 p-2">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform"
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
          mainEntity: getFaqEntities(frontmatter.slug, locale),
        })}
      </Script>
    </section>
    </>
  );
}
