import { useTranslations } from "next-intl";
import Image from "next/image";
import ConsultSrc from "@/public/images/consultant.jpg";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/src/i18n/routing";
import { Metadata } from "next";
import { use } from "react";
import ConsultationForm from "@/src/components/brevo/consultation-form";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.consultation" });
  return {
    title: {
      absolute: t("title"),
    },
    description: t("description"),
    keywords: [
      "tư vấn TestAS",
      "học thử TestAS",
      "tư vấn du học Đức",
      "VGU tư vấn",
      "KNI Education",
    ],
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://kni.vn/${locale}/consultation/`,
      languages: {
        'en': `https://kni.vn/en/consultation/`,
        'vi': `https://kni.vn/vn/consultation/`,
        'x-default': `https://kni.vn/vn/consultation/`,
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `https://kni.vn/${locale}/consultation/`,
      siteName: "KNI Education",
      images: [
        {
          url: "https://kni.vn/images/og-image-consultation.jpg",
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
      images: ["https://kni.vn/images/twitter-image-consultation.jpg"],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Consultation({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Consultation" });
  const seoT = await getTranslations({ locale, namespace: "seo.consultation" });

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: seoT('title'),
    description: seoT('description'),
    url: `https://kni.vn/${locale}/consultation/`,
    inLanguage: locale === 'en' ? 'en-US' : 'vi-VN',
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'KNI Education',
      url: 'https://kni.vn/',
      logo: 'https://kni.vn/images/logo.avif',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="min-h-screen bg-white snap-center py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Form */}
          <div className="order-1"
              data-aos="fade-right"
              data-aos-delay="100">
            <h1
              className="text-3xl md:text-4xl font-bold text-black mb-2"
            >
              {t("title")}{" "}{t("free")}<span className="text-black">.</span>
            </h1>
            <p
              className="text-gray-600 mb-2"
            >
              {t("description.line1")}{" "}{t("description.line2")}{" "}{t("description.line3")}
            </p>
            <p
              className="text-[#ff914d] font-bold mb-2"
            >
              {t("description.line4")}
            </p>
            <ConsultationForm />
          </div>

          {/* Right: Image */}
          <div className="order-2 flex justify-end">
            <Image
              src={ConsultSrc}
              width={400}
              height={400}
              alt="Tư vấn miễn phí luyện thi TestAS tại KNI Education"
              className="rounded-lg shadow-md"
              data-aos="fade-left"
              data-aos-delay="100"
              priority
              placeholder="blur"
              blurDataURL={"public/images/consultation_blur.jpg"}
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
