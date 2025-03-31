import { useTranslations } from "next-intl";
import Image from "next/image";
import documentSrc from "@/public/images/documents.jpg";
import { Metadata } from "next";

import Head from "next/head";

// Define supported locales
const locales = ["en", "vn"];

// Generate static paths for each locale
export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

// Inside the component, before the return statement
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "KNI Education",
      url: "https://kni.vn",
      logo: "https://kni.vn/images/logo.png",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+84-123-456-789",
          contactType: "customer service",
          areaServed: "VN",
          availableLanguage: ["English", "Vietnamese"],
        },
      ],
      sameAs: [
        "https://facebook.com/kni-education",
        "https://twitter.com/kni-education",
        "https://instagram.com/kni-education",
      ],
    },
    {
      "@type": "WebPage",
      url: "https://kni.vn/free-testas",
      name: "Free TestAS Practice & Consultation | KNI Education",
      description:
        "Get free TestAS practice tests and book a consultation with KNI Education. Prepare for TestAS, VGU, and study in Germany with expert guidance.",
      inLanguage: "en-US",
      publisher: {
        "@type": "Organization",
        name: "KNI Education",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Free TestAS Practice & Consultation | KNI Education",
    template: "%s | KNI Education",
  },
  description:
    "Get free TestAS practice tests and book a consultation with KNI Education. Prepare for TestAS, VGU, and study in Germany with expert guidance.",
  keywords: [
    "TestAS practice",
    "free TestAS test",
    "TestAS preparation",
    "study in Germany",
    "VGU consultation",
    "KNI Education",
    "free trial class",
  ],
  openGraph: {
    title: "Free TestAS Practice & Consultation | KNI Education",
    description:
      "Prepare for TestAS with free practice tests and expert consultation from KNI Education. Start your journey to study in Germany today!",
    url: "https://kni.vn/free-testas",
    siteName: "KNI Education",
    images: [
      {
        url: "https://kni.vn/images/og-image.jpg", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "KNI Education - Free TestAS Practice",
      },
    ],
    locale: "vn_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free TestAS Practice & Consultation | KNI Education",
    description:
      "Prepare for TestAS with free practice tests and expert consultation from KNI Education. Start your journey to study in Germany today!",
    images: ["https://kni.vn/images/twitter-image.jpg"], // Replace with your actual image
  },
};

export default function FreeTestAS() {
  const t = useTranslations("FreeTestAS");

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      {/* Free TestAS Section */}
      <section className="min-h-screen bg-white snap-center py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div className="order-1">
              <p
                className="text-sm uppercase text-orange-600 font-semibold tracking-wider mb-2"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                {t("label")}
              </p>
              <h1
                className="text-4xl md:text-5xl font-bold text-black mb-6"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                {t("title")} <span className="text-orange-600">.</span>
              </h1>
              <p
                className="text-gray-600 mb-4 italic"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                &quot;{t("quote")}&quot;
              </p>
              <p
                className="text-gray-600 mb-4"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                {t("description.line1")}
              </p>
              <p
                className="text-gray-600 mb-6"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                {t("description.line2")}
              </p>
              <form
                className="space-y-4"
                data-aos="fade-right"
                data-aos-delay="600"
                action="https://formsubmit.co/bb03a141b18680d1cb60fdd8d49ee98b"
                method="POST"
              >
                <div>
                  <input type="hidden" name="_captcha" value="false" />
                  <label htmlFor="email" className="sr-only">
                    {t("freeTestAS.form.email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("form.email")}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="zalo" className="sr-only">
                    {t("freeTestAS.form.zalo")}
                  </label>
                  <input
                    type="text"
                    name="phone-number"
                    placeholder={t("form.zalo")}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 "
                    required
                    aria-required="true"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-600 text-white uppercase px-6 py-3 rounded-md hover:bg-orange-700 transition flex items-center cursor-pointer"
                  aria-label="Submit Free TestAS Form"
                >
                  {t("form.submit")} <span className="ml-2">→</span>
                </button>
              </form>
            </div>
            {/* Right: Image */}
            <div className="order-2">
              <Image
                src={documentSrc} // Replace with your actual image path
                width={500}
                height={500}
                alt="Free TestAS Image"
                className="rounded-lg shadow-md w-full"
                data-aos="fade-left"
                data-aos-delay="100"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}