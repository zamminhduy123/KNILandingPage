import { useTranslations } from "next-intl";
import Image from "next/image";
import documentSrc from "@/public/images/documents.jpg";
import documentBlurSrc from "@/public/images/documents_blur.jpg";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/src/i18n/routing";
import { use } from "react";
import { Metadata } from "next";
import BrevoForm from "@/src/components/brevo/form";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.freeTestas" });
  return {
    title: {
      absolute: t("title"),
    },
    description: t("description"),
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://kni.vn/${locale}/free-testas/`,
      languages: {
        'en': `https://kni.vn/en/free-testas/`,
        'vi': `https://kni.vn/vn/free-testas/`,
        'x-default': `https://kni.vn/vn/free-testas/`,
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `https://kni.vn/${locale}/free-testas/`,
      siteName: "KNI Education",
      images: [
        {
          url: "https://kni.vn/images/og-image-free-testas.jpg",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
      locale: locale === "en" ? "en_US" : "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["https://kni.vn/images/twitter-image-free-testas.jpg"],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function FreeTestAS({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("FreeTestAS");

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "name": "KNI Education",
        "url": "https://kni.vn",
        "logo": "https://kni.vn/images/logo.avif",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+84-91-839-1099",
            "contactType": "customer service",
            "areaServed": "VN",
            "availableLanguage": ["English", "Vietnamese"],
          },
        ],
        "sameAs": [
          "https://www.facebook.com/testascandidates",
          "https://www.instagram.com/khanhnhatinstitute/",
          "https://www.tiktok.com/@khanhnhat.institute",
        ],
      },
      {
        "@type": "WebPage",
        "url": `https://kni.vn/${locale}/free-testas/`,
        "name": locale === "vn" ? "Làm thử TestAS miễn phí | KNI Education" : "Free TestAS Practice Test | KNI Education",
        "description": locale === "vn" 
          ? "Làm bài test thử TestAS hoàn toàn miễn phí, nhận kết quả phân tích trình độ và lộ trình học cá nhân hóa."
          : "Take a practice TestAS exam completely for free and receive level analysis and a personalized study plan.",
        "inLanguage": locale === "en" ? "en-US" : "vi-VN",
        "publisher": {
          "@type": "EducationalOrganization",
          "name": "KNI Education",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Free TestAS Section */}
      <section className="min-h-screen bg-white snap-center py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div data-aos="fade-right" data-aos-delay="100">
              <BrevoForm />
            </div>

            {/* Right: Image */}
            <div className="order-2 flex justify-end">
              <Image
                src={documentSrc}
                width={500}
                height={500}
                alt={
                  locale === "en"
                    ? "Free TestAS practice tests 2026 - KNI Education"
                    : "Đề thi thử TestAS miễn phí 2026 - KNI Education"
                }
                className="rounded-lg shadow-md"
                data-aos="fade-left"
                data-aos-delay="100"
                priority
                placeholder="blur"
                blurDataURL={"public/images/documents_blur.jpg"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
