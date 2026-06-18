import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { use } from "react";
import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PrivacyPolicy" });
  return {
    title: `${t("title")} | KNI Education`,
    description: t("intro").substring(0, 160),
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function PrivacyPolicy({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("PrivacyPolicy");

  return (
    <section className="bg-white pt-32 pb-20 min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Page Header */}
        <div className="border-b border-gray-100 pb-6 mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-3 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-sm text-gray-500 italic">
            {t("lastUpdated")}
          </p>
        </div>

        {/* Policy Content */}
        <div className="text-gray-700 space-y-8 leading-relaxed">
          <p className="text-lg text-gray-600">
            {t("intro")}
          </p>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              {t("section1.title")}
            </h2>
            <p>{t("section1.p1")}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>{t("section1.li1")}</li>
              <li>{t("section1.li2")}</li>
              <li>{t("section1.li3")}</li>
              <li>{t("section1.li4")}</li>
            </ul>
            <p>{t("section1.p2")}</p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              {t("section2.title")}
            </h2>
            <p>{t("section2.p1")}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>{t("section2.li1")}</li>
              <li>{t("section2.li2")}</li>
              <li>{t("section2.li3")}</li>
              <li>{t("section2.li4")}</li>
              <li>{t("section2.li5")}</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              {t("section3.title")}
            </h2>
            <p>{t("section3.p1")}</p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              {t("section4.title")}
            </h2>
            <p>{t("section4.p1")}</p>
            <p>{t("section4.p2")}</p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              {t("section5.title")}
            </h2>
            <p>{t("section5.p1")}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>{t("section5.li1")}</li>
              <li>{t("section5.li2")}</li>
              <li>{t("section5.li3")}</li>
              <li>{t("section5.li4")}</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-3 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-gray-900">
              {t("section6.title")}
            </h2>
            <p className="mb-4">{t("section6.p1")}</p>
            <ul className="space-y-2 text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <li>
                <strong className="text-gray-900">{t("section6.li1").split(":")[0]}:</strong>
                {t("section6.li1").substring(t("section6.li1").indexOf(":") + 1)}
              </li>
              <li>
                <strong className="text-gray-900">{t("section6.li2").split(":")[0]}:</strong>
                {t("section6.li2").substring(t("section6.li2").indexOf(":") + 1)}
              </li>
              <li>
                <strong className="text-gray-900">{t("section6.li3").split(":")[0]}:</strong>
                {t("section6.li3").substring(t("section6.li3").indexOf(":") + 1)}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
