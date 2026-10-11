import { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Luyện thi TestAS chuẩn cam kết đầu ra | KNI Education",
  description: "KNI Education - Học viện chuyên sâu luyện thi TestAS chuẩn hóa tại TP.HCM. Tỷ lệ đậu 95%, cam kết điểm số 100+, tư vấn du học Đức & xét tuyển VGU miễn phí.",
  alternates: {
    canonical: "https://kni.vn/vn/",
    languages: {
      vi: "https://kni.vn/vn/",
      en: "https://kni.vn/en/",
      "x-default": "https://kni.vn/vn/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icon-192.png",
  },
  openGraph: {
    title: "Luyện thi TestAS chuẩn cam kết đầu ra | KNI Education",
    description: "KNI Education cung cấp lộ trình luyện thi TestAS chuyên nghiệp, giáo viên Việt-Nam & Đức, tài liệu độc quyền. Đăng ký tư vấn miễn phí ngay.",
    url: "https://kni.vn/vn/",
    siteName: "KNI Education",
    images: [
      {
        url: "https://kni.vn/images/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "KNI Education TestAS Preparation",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luyện thi TestAS chuẩn cam kết đầu ra | KNI Education",
    description: "KNI Education cung cấp lộ trình luyện thi TestAS chuyên nghiệp, giáo viên Việt-Nam & Đức, tài liệu độc quyền. Đăng ký tư vấn miễn phí ngay.",
    images: ["https://kni.vn/images/twitter-image-home.jpg"],
  },
};

export default function RootPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://kni.vn/#website",
        "url": "https://kni.vn/",
        "name": "KNI Education",
        "inLanguage": ["vi-VN", "en-US"],
        "publisher": {
          "@id": "https://kni.vn/#organization",
        },
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://kni.vn/#organization",
        "url": "https://kni.vn/",
        "name": "KNI Education",
        "logo": "https://kni.vn/images/logo.avif",
        "description": "Học viện chuyên sâu luyện thi TestAS chuẩn hóa (Paper & Digital) tại TP.HCM. Tỷ lệ đậu 95%, cam kết điểm số 100+, tư vấn du học Đức và xét tuyển Đại học Việt Đức (VGU).",
        "founder": {
          "@type": "Person",
          "@id": "https://kni.vn/#founder",
          "name": "Khánh Nhật",
          "jobTitle": "Founder & TestAS Lead Instructor",
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Vietnamese-German University (VGU)",
          },
        },
        "knowsAbout": [
          {
            "@type": "DefinedTerm",
            "name": "TestAS",
            "description": "Standardized aptitude test for foreign students applying to German universities",
            "sameAs": "https://www.wikidata.org/wiki/Q1748834",
          },
          {
            "@type": "Organization",
            "name": "g.a.s.t. e.V.",
            "description": "Gesellschaft für Akademische Studienvorbereitung und Testentwicklung e.V.",
            "sameAs": "https://www.wikidata.org/wiki/Q1486749",
          },
          {
            "@type": "CollegeOrUniversity",
            "name": "Vietnamese-German University (VGU)",
            "sameAs": "https://www.wikidata.org/wiki/Q2524458",
          },
          {
            "@type": "Organization",
            "name": "German Academic Exchange Service (DAAD)",
            "sameAs": "https://www.wikidata.org/wiki/Q702842",
          },
        ],
        "sameAs": [
          "https://www.facebook.com/testascandidates",
          "https://www.instagram.com/khanhnhatinstitute/",
          "https://www.tiktok.com/@khanhnhat.institute",
        ],
      },
    ],
  };

  return (
    <html lang="vi">
      <body className="bg-slate-50 font-inter text-slate-900 antialiased min-h-screen flex flex-col justify-between">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Semantic Header */}
        <header role="banner" className="border-b border-slate-200 bg-white py-4 px-6 sm:px-8">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <a href="/vn/" className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
              <span className="text-orange-600 font-extrabold">KNI</span>
              <span>Academy</span>
            </a>
            <nav aria-label="Language Selector" className="flex items-center gap-2 text-sm font-medium">
              <span className="text-slate-500 hidden sm:inline">Ngôn ngữ / Language:</span>
              <a
                href="/vn/"
                className="px-3 py-1.5 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors"
                title="Tiếng Việt (Mặc định)"
              >
                Tiếng Việt
              </a>
              <a
                href="/en/"
                className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
                title="English Version"
              >
                English
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content & Navigation Hub */}
        <main id="main-content" className="max-w-4xl mx-auto px-6 py-12 sm:py-16 flex-1 text-center">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-orange-700 bg-orange-50 border border-orange-200 rounded-lg">
            Học viện luyện thi TestAS chuyên nghiệp
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Luyện Thi TestAS Chuẩn Hóa Cam Kết Đầu Ra
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            KNI Academy cung cấp lộ trình luyện thi TestAS (Paper-based &amp; Digital TestAS) chuyên sâu cho học sinh, sinh viên có nguyện vọng du học Đức hoặc xét tuyển vào Đại học Việt Đức (VGU). Chương trình bám sát cấu trúc đề thi chính thức của Viện Khảo thí g.a.s.t. e.V. với đội ngũ giảng viên giàu kinh nghiệm.
          </p>

          {/* Quick Language Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="/vn/"
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Vào trang chủ Tiếng Việt
            </a>
            <a
              href="/en/"
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-100 transition-colors"
            >
              Continue to English Homepage
            </a>
          </div>

          {/* Semantic Internal Navigation for Search Engines & Visitors */}
          <section aria-labelledby="section-navigation" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm text-left mb-8">
            <h2 id="section-navigation" className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
              Khám phá các chương trình &amp; Tài nguyên học tập
            </h2>
            <nav aria-label="Main Navigation Hub" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/vn/khoa-hoc-testas/"
                className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-orange-50/50 hover:border-orange-200 transition-colors group"
              >
                <div className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  Khóa học TestAS toàn diện &rarr;
                </div>
                <div className="text-sm text-slate-600 mt-1">
                  Lộ trình ôn luyện từ mất gốc đến nâng cao, cam kết điểm số 100+ cho mọi khối ngành.
                </div>
              </a>

              <a
                href="/vn/free-testas/"
                className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-orange-50/50 hover:border-orange-200 transition-colors group"
              >
                <div className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  Thi thử TestAS miễn phí &rarr;
                </div>
                <div className="text-sm text-slate-600 mt-1">
                  Trải nghiệm đề thi chuẩn hóa, kiểm tra tư duy logic và nhận đánh giá năng lực chi tiết.
                </div>
              </a>

              <a
                href="/vn/blog/"
                className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-orange-50/50 hover:border-orange-200 transition-colors group"
              >
                <div className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  Cẩm nang &amp; Lịch thi TestAS 2027 &rarr;
                </div>
                <div className="text-sm text-slate-600 mt-1">
                  Tổng hợp bí quyết làm bài, thủ tục đăng ký thi, hồ sơ APS và quy chế tuyển sinh VGU.
                </div>
              </a>

              <a
                href="/vn/contact/"
                className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-orange-50/50 hover:border-orange-200 transition-colors group"
              >
                <div className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  Tư vấn lộ trình du học &rarr;
                </div>
                <div className="text-sm text-slate-600 mt-1">
                  Đăng ký nhận tư vấn 1-1 miễn phí từ đội ngũ chuyên gia khảo thí của KNI Education.
                </div>
              </a>
            </nav>
          </section>

          <p className="text-xs text-slate-500">
            Trình duyệt đang tự động chuyển hướng đến trang tiếng Việt... Nếu chưa chuyển hướng, vui lòng bấm vào nút bên trên.
          </p>
        </main>

        {/* Semantic Footer */}
        <footer role="contentinfo" className="border-t border-slate-200 bg-white py-6 px-6 text-center text-sm text-slate-500">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>&copy; {new Date().getFullYear()} KNI Education. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="/vn/privacy-policy/" className="hover:text-slate-900 underline">
                Chính sách bảo mật
              </a>
              <a href="/vn/contact/" className="hover:text-slate-900 underline">
                Liên hệ
              </a>
            </div>
          </div>
        </footer>

        {/* Non-blocking defer client redirect for active browsers */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (!window.location.search.includes('no_redirect')) {
                  setTimeout(function() {
                    window.location.replace('/vn/');
                  }, 80);
                }
              } catch(e) {}
            `,
          }}
        />

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}