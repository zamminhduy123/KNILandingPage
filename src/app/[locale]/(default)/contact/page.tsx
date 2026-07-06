import { useTranslations } from "next-intl";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { routing } from "@/src/i18n/routing";
import { FaEnvelope, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { use } from "react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.contact" });
  return {
    title: {
      absolute: t("title"),
    },
    description: t("description"),
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://kni.vn/${locale}/contact/`,
      languages: {
        'en': `https://kni.vn/en/contact/`,
        'vi': `https://kni.vn/vn/contact/`,
        'x-default': `https://kni.vn/vn/contact/`,
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `https://kni.vn/${locale}/contact/`,
      siteName: "KNI Education",
      images: [
        {
          url: "https://kni.vn/images/og-image-contact.jpg",
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
      images: ["https://kni.vn/images/twitter-image-contact.jpg"],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Contact({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Contact" });
  const seoT = await getTranslations({ locale, namespace: "seo.contact" });

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: seoT('title'),
    description: seoT('description'),
    url: `https://kni.vn/${locale}/contact/`,
    inLanguage: locale === 'en' ? 'en-US' : 'vi-VN',
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'KNI Education',
      url: 'https://kni.vn/',
      logo: 'https://kni.vn/images/logo.avif',
    },
  };

  const contactItems = [
    {
      icon: <FaPhone className="text-orange-600 text-2xl" />,
      label: t("items.1.label"),
      value: t("items.1.value"),
      isHighlighted: false,
    },
    {
      icon: <FaEnvelope className="text-orange-600 text-2xl" />,
      label: t("items.2.label"),
      value: t("items.2.value"),
      isHighlighted: false,
    },
    {
      icon: <FaMapMarkerAlt className="text-orange-600 text-2xl" />,
      label: t("items.3.label"),
      value: t("items.3.value"),
      isHighlighted: false,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section id="contact" className="min-h-[50vh] bg-white snap-center pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <h2
          className="text-4xl md:text-5xl font-bold text-black text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className={`border border-gray-200 p-6 text-center ${
                item.isHighlighted ? "bg-red-600 text-white" : "bg-white"
              }`}
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <p
                className={`text-sm uppercase mb-2 ${
                  item.isHighlighted ? "text-white" : "text-gray-600"
                }`}
              >
                {item.label}
              </p>
              <p
                className={`${
                  item.isHighlighted ? "text-white" : "text-black"
                }`}
              >
                {item.value}
              </p>
            </div>
          ))}
          <div
            key={"social"}
            className="bg-white border border-gray-200 p-6 text-center flex flex-col justify-center "
            data-aos="fade-up"
            data-aos-delay={`${(3 + 1) * 100}`}
          >
            <div className="flex items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@khanhnhat.institute"
                className="mx-auto mb-4 text-black-500 hover:scale-110 transition-all cursor-pointer"
                style={{ transitionDuration: "200ms" }}
              >
                <AiFillTikTok size={48} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/testascandidates"
                className="mx-auto mb-4 text-blue-500 hover:scale-110 transition-all cursor-pointer"
                style={{ transitionDuration: "200ms" }}
              >
                <FaSquareFacebook size={48} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/khanhnhatinstitute/"
                className="mx-auto mb-4 text-red-500 hover:scale-110 transition-all cursor-pointer"
                style={{ transitionDuration: "200ms" }}
              >
                <FaSquareInstagram size={48} />
              </a>
            </div>
            <p>{t("SocialMedia")}</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
