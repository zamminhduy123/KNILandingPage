import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { routing } from "@/src/i18n/routing";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });
  const ogLocale = locale === "en" ? "en_US" : "vi_VN";
  return {
    title: `${t("title")} – Blog KNI Education`,
    description: t("subtitle"),
    alternates: {
      canonical: `https://kni.vn/${locale === "vn" ? "" : locale}/blog/`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${t("title")} – Blog KNI Education`,
      description: t("subtitle"),
      url: `https://kni.vn/${locale === "vn" ? "" : locale}/blog/`,
      siteName: "KNI Education",
      images: [
        {
          url: "https://kni.vn/images/og-image-blog.jpg",
          width: 1200,
          height: 630,
          alt: "KNI Education – Blog TestAS",
        },
      ],
      locale: ogLocale,
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function BlogLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <>{children}</>;
}
