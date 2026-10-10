import HeroSection from "@/src/components/hero/HeroSection";
import StatsBar from "@/src/components/stats-bar";
import WhyTestAS from "@/src/components/why-testas";
import WhatIsTestAS from "@/src/components/whatistestas";
import Preparation from "@/src/components/preparation";
import Tutor from "@/src/components/tutor";
import RoadMap from "@/src/components/roadmap";
import Pricing from "@/src/components/pricing";
import FAQ from "@/src/components/faq"
import TestimonialSection from "@/src/components/testimonial-section/TestimonialSection";
import LargeTestimonial from "@/src/components/large-testimonial";
import Cta from "@/src/components/cta";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { routing } from "@/src/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.home" });
  return {
    title: {
      absolute: t("title"),
    },
    description: t("description"),
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://kni.vn/${locale}/`,
      languages: {
        'en': 'https://kni.vn/en/',
        'vi': 'https://kni.vn/vn/',
        'x-default': 'https://kni.vn/vn/',
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `https://kni.vn/${locale}/`,
      siteName: "KNI Education",
      images: [
        {
          url: "https://kni.vn/images/og-image-home.jpg",
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
      images: [`https://kni.vn/images/twitter-image-home.jpg`],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const seoT = await getTranslations({ locale, namespace: "seo.home" });
  const faqT = await getTranslations({ locale, namespace: "FAQ" });

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://kni.vn/${locale}/#webpage`,
    name: seoT('title'),
    description: seoT('description'),
    url: `https://kni.vn/${locale}/`,
    inLanguage: locale === 'en' ? 'en-US' : 'vi-VN',
    isPartOf: {
      '@id': 'https://kni.vn/#website',
    },
    publisher: {
      '@id': 'https://kni.vn/#organization',
    },
  };

  const faqItems = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({
    '@type': 'Question',
    name: faqT(`items.${i}.q`),
    acceptedAnswer: {
      '@type': 'Answer',
      text: faqT(`items.${i}.a`),
    },
  }));

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <HeroSection />
      <StatsBar />
      <WhyTestAS />
      <WhatIsTestAS />
      {/* <BusinessCategories /> */}
      {/* <Preparation /> */}
      <Tutor />
      <RoadMap />
      <Pricing />
      <FAQ />
      {/* <FeaturesPlanet /> */}
      <TestimonialSection />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
