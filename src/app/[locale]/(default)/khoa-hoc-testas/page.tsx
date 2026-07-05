import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Metadata } from "next";
import {
  FaCheckCircle,
  FaBook,
  FaLanguage,
  FaClipboardCheck,
  FaChalkboardTeacher,
  FaClock,
  FaUsers,
} from "react-icons/fa";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.course" });
  return {
    title: {
      absolute: t("title"),
    },
    description: t("description"),
    keywords: [
      "khóa học TestAS",
      "luyện thi TestAS",
      "trung tâm TestAS",
      "học TestAS TPHCM",
      "TestAS course Vietnam",
    ],
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://kni.vn/${locale}/khoa-hoc-testas/`,
      languages: {
        'en': `https://kni.vn/en/khoa-hoc-testas/`,
        'vi': `https://kni.vn/vn/khoa-hoc-testas/`,
        'x-default': `https://kni.vn/vn/khoa-hoc-testas/`,
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `https://kni.vn/${locale}/khoa-hoc-testas/`,
      siteName: "KNI Education",
      images: [
        {
          url: "https://kni.vn/images/og-image-course.jpg",
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
      images: ["https://kni.vn/images/twitter-image-course.jpg"],
    },
  };
}

const courseSteps = [
  {
    icon: FaBook,
    titleKey: "step1_title",
    descKey: "step1_desc",
  },
  {
    icon: FaChalkboardTeacher,
    titleKey: "step2_title",
    descKey: "step2_desc",
  },
  {
    icon: FaLanguage,
    titleKey: "step3_title",
    descKey: "step3_desc",
  },
  {
    icon: FaClipboardCheck,
    titleKey: "step4_title",
    descKey: "step4_desc",
  },
];

const CourseCard = ({
  icon: Icon,
  title,
  price,
  features,
  highlight,
  locale,
  enrollText,
}: {
  icon: React.ComponentType<any>;
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
  locale: string;
  enrollText: string;
}) => (
  <div
    className={`rounded-2xl p-8 ${
      highlight
        ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl shadow-orange-500/20"
        : "bg-white border border-gray-200 shadow-sm"
    }`}
  >
    <div className="flex items-center gap-3 mb-4">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${
          highlight ? "bg-white/20" : "bg-orange-100"
        }`}
      >
        <Icon className={`w-6 h-6 ${highlight ? "text-white" : "text-orange-600"}`} />
      </div>
      <h3 className={`text-xl font-bold ${highlight ? "text-white" : "text-gray-900"}`}>{title}</h3>
    </div>
    <p className={`text-3xl font-bold mb-6 ${highlight ? "text-white" : "text-orange-500"}`}>{price}</p>
    <ul className="space-y-3 mb-8">
      {features.map((feat, i) => (
        <li key={i} className="flex items-start gap-2">
          <FaCheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${highlight ? "text-white" : "text-green-500"}`} />
          <span className={highlight ? "text-white/90" : "text-gray-600"}>{feat}</span>
        </li>
      ))}
    </ul>
    <a
      href={`/${locale}/consultation`}
      className={`block w-full text-center py-3 rounded-full font-bold transition ${
        highlight ? "bg-white text-orange-600 hover:bg-gray-100" : "bg-orange-500 text-white hover:bg-orange-600"
      }`}
    >
      {enrollText}
    </a>
  </div>
);

export default async function CoursePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("CoursePage");
  const localePath = locale === "vn" ? "" : `/${locale}`;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white min-h-[80vh] flex items-center py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-400 font-semibold tracking-wider uppercase mb-3">{t("heroLabel")}</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{t("heroTitle")}</h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">{t("heroSubtitle")}</p>
              <div className="flex flex-wrap gap-6">
                <a
                  href={`${localePath}/consultation`}
                  className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition flex items-center gap-2"
                >
                  {t("enrollNow")} <span>→</span>
                </a>
                <a
                  href={`${localePath}/free-testas`}
                  className="border border-gray-600 text-white px-8 py-4 rounded-full font-bold hover:border-orange-500 transition"
                >
                  {t("freePractice")}
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <Image
                  src="/images/tutor-main.avif"
                  width={400}
                  height={550}
                  alt={t("heroImageAlt")}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "100+", labelKey: "stat1_label" },
              { num: "95%", labelKey: "stat2_label" },
              { num: "2+", labelKey: "stat3_label" },
              { num: "4", labelKey: "stat4_label" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-orange-500 mb-1">{stat.num}</p>
                <p className="text-sm text-gray-500">{t(stat.labelKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Steps */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold tracking-wider uppercase mb-3">{t("curriculumLabel")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("curriculumTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <p className="text-sm text-orange-500 font-semibold mb-2">{t("stepLabel")} {i + 1}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{t(step.titleKey)}</h3>
                  <p className="text-gray-600 text-sm">{t(step.descKey)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Options */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold tracking-wider uppercase mb-3">{t("optionsLabel")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("optionsTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CourseCard
              icon={FaUsers}
              title={t("onlineGroupTitle")}
              price={t("onlineGroupPrice")}
              features={[t("feature1"), t("feature2"), t("feature3"), t("featureOnline")]}
              locale={locale}
              enrollText={t("enrollNow")}
            />
            <CourseCard
              icon={FaChalkboardTeacher}
              title={t("inPersonTitle")}
              price={t("inPersonPrice")}
              features={[t("feature1"), t("feature2"), t("feature3"), t("featureInPerson")]}
              highlight
              locale={locale}
              enrollText={t("enrollNow")}
            />
            <CourseCard
              icon={FaClock}
              title={t("oneOnOneTitle")}
              price={t("oneOnOnePrice")}
              features={[t("feature1"), t("feature2"), t("feature3"), t("featureOneOnOne")]}
              locale={locale}
              enrollText={t("enrollNow")}
            />
          </div>
        </div>
      </section>

      {/* Why KNI / Tutor */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-orange-400 font-semibold tracking-wider uppercase mb-3">{t("whyLabel")}</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("whyTitle")}</h2>
              <ul className="space-y-4 mb-8">
                {[t("whyItem1"), t("whyItem2"), t("whyItem3"), t("whyItem4")].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-orange-500 w-6 h-6 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`${localePath}/ve-nhat`}
                className="inline-block border border-gray-600 text-white px-6 py-3 rounded-full hover:border-orange-500 transition"
              >
                {t("learnMore")} →
              </a>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <Image
                  src="/images/tutor-like.jpg"
                  width={400}
                  height={300}
                  alt={t("tutorImageAlt")}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-lg">
                  <Image src="/images/VGU.png" width={60} height={60} alt="VGU" className="rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t("ctaTitle")}</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{t("ctaSubtitle")}</p>
          <a
            href={`${localePath}/consultation`}
            className="inline-block bg-white text-orange-600 px-10 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition text-lg"
          >
            {t("enrollNow")} <span className="ml-2">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
