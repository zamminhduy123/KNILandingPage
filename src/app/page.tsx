import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Luyện thi TestAS chuẩn cam kết đầu ra | KNI Education",
  description: "KNI Education cung cấp lộ trình luyện thi TestAS chuyên nghiệp, giáo viên Việt-Nam & Đức, tài liệu độc quyền. Đăng ký tư vấn miễn phí ngay.",
  alternates: {
    canonical: "https://kni.vn/",
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
    url: "https://kni.vn/",
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

// Redirect the user to the default locale when `/` is requested
export default function RootPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://kni.vn/#website",
        "url": "https://kni.vn/",
        "name": "KNI Education"
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://kni.vn/#organization",
        "url": "https://kni.vn/",
        "name": "KNI Education",
        "logo": "https://kni.vn/images/logo.avif",
        "sameAs": [
          "https://www.facebook.com/testascandidates",
          "https://www.instagram.com/khanhnhatinstitute/",
          "https://www.tiktok.com/@khanhnhat.institute"
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: 'window.location.replace("/vn/");',
        }}
      />
      <main style={{ padding: '4rem 2rem', textAlign: 'center', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem', lineHeight: '1.2' }}>
          Luyện Thi TestAS Chất Lượng Cao | KNI Education
        </h1>
        <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          KNI Education cung cấp lộ trình luyện thi TestAS chuyên nghiệp, giáo viên Việt-Nam &amp; Đức, cùng tài liệu học tập độc quyền. Đăng ký tư vấn và kiểm tra năng lực TestAS miễn phí để bắt đầu lộ trình du học Đức hoặc xét tuyển Đại học Việt Đức (VGU) của bạn ngay hôm nay.
        </p>
        <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem' }}>
          Đang tự động chuyển hướng đến trang chủ tiếng Việt... / Redirecting to the Vietnamese homepage...
        </p>
        <p>
          Nếu trình duyệt không tự động chuyển hướng, vui lòng click{' '}
          <a href="/vn/" style={{ color: '#ea580c', fontWeight: 'bold', textDecoration: 'underline' }}>
            vào đây để tiếp tục
          </a>.
        </p>
      </main>
    </>
  );
}