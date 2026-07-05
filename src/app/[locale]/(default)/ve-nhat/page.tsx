import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Script from "next/script";
import {
  IoIosSchool,
} from "react-icons/io";
import {
  FaGoogleScholar,
} from "react-icons/fa6";
import {
  FcEngineering,
} from "react-icons/fc";
import {
  FaTrophy,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

export default async function MentorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("MentorPage");
  const localePath = locale === "vn" ? "" : `/${locale}`;

  return (
    <>
      {/* Person Structured Data */}
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Nhật",
          jobTitle: "TestAS Instructor",
          worksFor: {
            "@type": "EducationalOrganization",
            name: "KNI Education",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Van Lang University (VGU)",
          },
          description:
            "Cựu sinh viên VGU MEN, TestAS 125/130, kỹ sư robot ABB. 2 năm kinh nghiệm luyện thi TestAS.",
          knowsAbout: ["TestAS", "Education", "Robotics", "German Education"],
        })}
      </Script>

      {/* Hero Section */}
      <section className="min-h-[60vh] bg-gray-900 snap-center flex items-center relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20 md:py-28">
            {/* Left: Photo */}
            <div
              className="order-1 flex justify-center md:justify-end"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Image
                src="/images/tutor-main.avif"
                width={500}
                height={600}
                alt={t("heroImageAlt")}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>

            {/* Right: Text */}
            <div className="order-2 text-center md:text-left">
              <p
                className="text-sm uppercase text-orange-400 font-semibold tracking-wider mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {t("heroLabel")}
              </p>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {t("heroTitle")}
              </h1>
              <p
                className="text-xl md:text-2xl text-gray-300 mb-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {t("heroSubtitle")}
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <a
                  href={`${localePath}/consultation`}
                  className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition font-semibold uppercase text-sm tracking-wider"
                >
                  {t("ctaTitle")}{" "}
                  <span className="ml-2">→</span>
                </a>
                <a
                  href={`${localePath}/`}
                  className="inline-flex items-center justify-center border-2 border-gray-500 text-gray-300 px-8 py-3 rounded-md hover:border-orange-400 hover:text-orange-400 transition font-semibold uppercase text-sm tracking-wider"
                >
                  {t("exploreTitle")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="min-h-screen bg-white snap-center py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Images */}
            <div className="relative order-2 md:order-1">
              <Image
                src="/images/tutor-main.avif"
                width={500}
                height={550}
                alt={t("bioAltGrad")}
                className="rounded-lg shadow-lg"
                data-aos="fade-right"
                data-aos-delay="100"
              />
              <Image
                src="/images/tutor-like.jpg"
                width={320}
                height={200}
                alt={t("bioAltLike")}
                className="absolute bottom-0 right-0 shadow-lg border-4 border-amber-50"
                data-aos="fade-right"
                data-aos-delay="200"
              />
              <div
                className="absolute top-4 right-4 transform bg-white rounded-full p-3 shadow-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Image
                  src="/images/VGU.png"
                  width={80}
                  height={80}
                  alt={t("bioAltBadge")}
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Right: Bio Text */}
            <div className="order-1 md:order-2">
              <p
                className="text-sm uppercase text-orange-600 font-semibold tracking-wider mb-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                {t("bioLabel")}
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-black mb-6"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                {t("bioTitle")}
              </h2>
              <div
                className="text-gray-600 space-y-4 mb-8"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <p>{t("bioDescription")}</p>
              </div>

              {/* Quick Stats */}
              <div
                className="grid grid-cols-2 gap-4"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-orange-500">125/130</p>
                  <p className="text-sm text-gray-500">{t("bioStat1")}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-orange-500">4</p>
                  <p className="text-sm text-gray-500">{t("bioStat2")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy Quote */}
      <section className="bg-gray-50 snap-center py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 w-full text-center">
          <p
            className="text-sm uppercase text-orange-600 font-semibold tracking-wider mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("philosophyLabel")}
          </p>
          <blockquote
            className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8 border-l-4 border-orange-500 pl-6 text-left"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {t("philosophyQuote")}
          </blockquote>
          <div
            className="flex items-center justify-center md:justify-start space-x-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              src="/images/tutor-sig.jpg"
              width={50}
              height={50}
              alt="Chữ ký Nhật"
              className="rounded-full"
            />
            <div className="text-left">
              <p className="text-black font-semibold">Nhật</p>
              <p className="text-gray-500 text-sm">
                {t("philosophySignature")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-white snap-center py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <p
            className="text-sm uppercase text-orange-600 font-semibold tracking-wider mb-2 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("achievementsLabel")}
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-black mb-12 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("achievementsTitle")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: IoIosSchool,
                title: t("achievement1"),
              },
              {
                icon: FaGoogleScholar,
                title: t("achievement2"),
              },
              {
                icon: FcEngineering,
                title: t("achievement3"),
              },
              {
                icon: FaTrophy,
                title: t("achievement4"),
              },
              {
                icon: FaUsers,
                title: t("achievement5"),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={300 + i * 100}
              >
                <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center bg-orange-100 rounded-full">
                  <item.icon
                    className={`text-orange-600`}
                    size={22}
                  />
                </div>
                <p className="text-gray-700 font-medium text-left leading-relaxed">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn From Nhật */}
      <section className="bg-gray-50 snap-center py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="order-2 md:order-1">
              <Image
                src="/images/tutor-secondary.avif"
                width={500}
                height={400}
                alt={t("whyAltImage")}
                className="rounded-lg shadow-lg"
                data-aos="fade-right"
                data-aos-delay="100"
              />
            </div>

            {/* Right: Content */}
            <div className="order-1 md:order-2">
              <p
                className="text-sm uppercase text-orange-600 font-semibold tracking-wider mb-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                {t("whyLabel")}
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-black mb-8"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                {t("whyTitle")}
              </h2>

              <ul
                className="space-y-4"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                {[
                  t("whyItem1"),
                  t("whyItem2"),
                  t("whyItem3"),
                  t("whyItem4"),
                ].map((point, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <FaLightbulb className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-900 snap-center py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 w-full text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("ctaTitle")}
          </h2>
          <p
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("ctaSubtitle")}
          </p>
          <a
            href={`${localePath}/consultation`}
            className="inline-flex items-center bg-orange-500 text-white px-10 py-4 rounded-md hover:bg-orange-600 transition font-semibold uppercase text-sm tracking-wider"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {t("ctaButton")}{" "}
            <span className="ml-2">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
