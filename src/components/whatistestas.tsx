import { useTranslations } from "next-intl";

const SparkleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-orange-500 mr-1.5"
    aria-hidden="true"
  >
    <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
  </svg>
);

const TargetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const BoltIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const DocIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const UserGroupIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TrendUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-orange-600 mr-2.5"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

const AwardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-orange-600 mr-2.5"
  >
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const MentorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-orange-600 mr-2.5"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const RibbonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={20}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-white"
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);

const DotGridMini = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-orange-500/20"
    aria-hidden="true"
  >
    <circle cx="3" cy="3" r="1" fill="currentColor" />
    <circle cx="9" cy="3" r="1" fill="currentColor" />
    <circle cx="15" cy="3" r="1" fill="currentColor" />
    <circle cx="21" cy="3" r="1" fill="currentColor" />
    <circle cx="9" cy="9" r="1" fill="currentColor" />
    <circle cx="15" cy="9" r="1" fill="currentColor" />
    <circle cx="21" cy="9" r="1" fill="currentColor" />
    <circle cx="15" cy="15" r="1" fill="currentColor" />
    <circle cx="21" cy="15" r="1" fill="currentColor" />
    <circle cx="21" cy="21" r="1" fill="currentColor" />
  </svg>
);

export default function WhatIsTestAS() {
  const t = useTranslations("HomePage.whatIsTestAS");

  return (
    <section className="bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-base text-slate-500 max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Top 3 Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3 mb-6">
          {/* Card 1: Crucial */}
          <div className="group relative rounded-2xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:border-orange-200/60 hover:shadow-xl hover:shadow-slate-200/60 flex flex-col items-center text-center">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#fdf8f4] text-orange-600 shadow-inner transition-colors duration-300 group-hover:bg-orange-50">
              <TargetIcon />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {t("features.crucial.title")}
            </h3>
            <p className="text-sm leading-relaxed text-slate-500">
              {t("features.crucial.description")}
            </p>
            <div className="absolute bottom-4 right-4">
              <DotGridMini />
            </div>
          </div>

          {/* Card 2: Difficulty (Highlighted) */}
          <div className="group relative rounded-2xl border-2 border-orange-500/80 bg-white p-8 shadow-xl shadow-slate-200/60 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/80 flex flex-col items-center text-center">
            {/* Orange bookmark/ribbon on top-right */}
            <div className="absolute top-0 right-6 flex h-10 w-8 items-center justify-center bg-orange-600 rounded-b-md shadow-md">
              <RibbonIcon />
            </div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-orange-600 shadow-inner transition-colors duration-300 group-hover:bg-orange-100/55">
              <BoltIcon />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {t("features.difficulty.title")}
            </h3>
            <p className="text-sm leading-relaxed text-slate-500">
              {t("features.difficulty.description")}
            </p>
          </div>

          {/* Card 3: Sample */}
          <div className="group relative rounded-2xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:border-orange-200/60 hover:shadow-xl hover:shadow-slate-200/60 flex flex-col items-center text-center">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#fdf8f4] text-orange-600 shadow-inner transition-colors duration-300 group-hover:bg-orange-50">
              <DocIcon />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {t("features.sample.title")}
            </h3>
            <p className="text-sm leading-relaxed text-slate-500">
              {t("features.sample.description")}
            </p>
            <div className="absolute bottom-4 right-4">
              <DotGridMini />
            </div>
          </div>
        </div>

        {/* Bottom 2 Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {/* Card 4: Trusted */}
          <div className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:border-orange-200/60 hover:shadow-xl hover:shadow-slate-200/60 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            {/* Concentric Circle Icon Wrapper */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-orange-100 bg-[#fdf8f4] text-orange-600 shadow-sm transition-all duration-300 group-hover:border-orange-200 group-hover:bg-orange-50">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-orange-600 shadow-sm">
                <UserGroupIcon />
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {t("features.trusted.title")}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500 mb-3">
                {t("features.trusted.description")}
              </p>
              {/* Badge */}
              <span className="inline-block rounded-full border border-orange-200/50 bg-[#fdf8f4] px-3.5 py-1 text-xs font-semibold text-orange-700 shadow-xs">
                {t("features.trusted.badge")}
              </span>
            </div>
            <div className="absolute bottom-4 right-4 hidden sm:block">
              <DotGridMini />
            </div>
          </div>

          {/* Card 5: Competition */}
          <div className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:border-orange-200/60 hover:shadow-xl hover:shadow-slate-200/60 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            {/* Concentric Circle Icon Wrapper */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-orange-100 bg-[#fdf8f4] text-orange-600 shadow-sm transition-all duration-300 group-hover:border-orange-200 group-hover:bg-orange-50">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-orange-600 shadow-sm">
                <TrendUpIcon />
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {t("features.competition.title")}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500 mb-3">
                {t("features.competition.description")}
              </p>
              {/* Badge */}
              <span className="inline-block rounded-full border border-orange-200/50 bg-[#fdf8f4] px-3.5 py-1 text-xs font-semibold text-orange-700 shadow-xs">
                {t("features.competition.badge")}
              </span>
            </div>
            <div className="absolute bottom-4 right-4 hidden sm:block">
              <DotGridMini />
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators Bar */}
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-lg shadow-slate-200/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-8">
            {/* Item 1 */}
            <div className="flex items-center text-slate-800 font-bold text-sm">
              <MentorIcon />
              <span>{t("tags.expertGuidance")}</span>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-6 w-px bg-slate-200" aria-hidden="true" />

            {/* Item 2 */}
            <div className="flex items-center text-slate-800 font-bold text-sm">
              <ShieldCheckIcon />
              <span>{t("tags.provenResults")}</span>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-6 w-px bg-slate-200" aria-hidden="true" />

            {/* Item 3 */}
            <div className="flex items-center text-slate-800 font-bold text-sm">
              <AwardIcon />
              <span>{t("tags.studentSuccess")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}