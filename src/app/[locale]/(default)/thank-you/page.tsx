import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/src/i18n/routing";
import { use } from "react";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.thankYou" });
  return {
    title: {
      absolute: t("title"),
    },
    description: t("description"),
    robots: { index: false, follow: true },
    alternates: {
      canonical: `https://kni.vn/${locale}/thank-you/`,
      languages: {
        'en': `https://kni.vn/en/thank-you/`,
        'vi': `https://kni.vn/vn/thank-you/`,
        'x-default': `https://kni.vn/vn/thank-you/`,
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `https://kni.vn/${locale}/thank-you/`,
      siteName: "KNI Education",
      images: [
        {
          url: "https://kni.vn/images/og-image-thank-you.jpg",
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
      images: ["https://kni.vn/images/twitter-image-thank-you.jpg"],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function ThankYouPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("ThankYou");

  return (
    <div className=" bg-white flex items-center justify-center pt-24 pb-6">
      <div className="max-w-7xl p-8 w-full text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">
          {t("title")} <span className="text-orange-600">!</span>
        </h1>
        <p className="text-gray-600 mb-2">{t("subtitle")}</p>
        <p className="text-gray-600 mb-4 font-bold">{t("checkSpam")}</p>
        <h2 className="text-2xl font-semibold text-orange-600 mb-4">
          {t("freeVideoTitle")}
        </h2>
        <p className="text-gray-600 mb-6">{t("freeVideoDescription")}</p>
        <p className="text-gray-600 mb-6">{t("contactPrompt")}</p>

        {/* Register Now Button */}
        <Link
          href={`/${locale}/consultation`}
          className="inline-block bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors"
        >
          {t("registerNow")}
        </Link>
      </div>
    </div>
  );
}
