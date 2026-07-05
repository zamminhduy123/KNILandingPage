"use client";

import { useTranslations, useLocale } from "next-intl";

const OrangeCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-orange-600 mr-3 shrink-0"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const VideoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-orange-500 mr-2.5 shrink-0"
  >
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="7" x2="7" y2="7" />
    <line x1="2" y1="17" x2="7" y2="17" />
    <line x1="17" y1="17" x2="22" y2="17" />
    <line x1="17" y1="7" x2="22" y2="7" />
  </svg>
);

const ClipboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-orange-500 mr-2.5 shrink-0"
  >
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
  </svg>
);

const ChatBubbleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-orange-500 mr-2.5 shrink-0"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const BooksIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-orange-500 mr-2.5 shrink-0"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-orange-500 mr-2.5 shrink-0"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const TargetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-orange-500 mr-2.5 shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-orange-600 mr-2.5 shrink-0"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

const HeadsetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-orange-600 mr-2.5 shrink-0"
  >
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

const PersonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-orange-600 mr-2.5 shrink-0"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CompassIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-orange-600 mr-2.5 shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

export default function Pricing() {
  const t = useTranslations("HomePage.pricing");
  const locale = useLocale();
  const localePath = locale === "vn" ? "" : `/${locale}`;

  // Mapping right card items to their respective icons
  const valueIcons = [
    <VideoIcon key="vid" />,
    <ClipboardIcon key="clip" />,
    <ChatBubbleIcon key="chat" />,
    <BooksIcon key="books" />,
    <HeartIcon key="heart" />,
    <TargetIcon key="target" />
  ];

  return (
    <section className="bg-[#fffbf7] py-16 sm:py-24 border-t border-slate-100/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl max-w-4xl mx-auto">
            {t("title")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto items-stretch">
          
          {/* Card Left: Core Course */}
          <div className="group relative rounded-2xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 flex flex-col justify-between transition-all duration-300 hover:border-orange-200/60 hover:shadow-xl hover:shadow-slate-200/60">
            <div>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h3 className="text-xl font-bold text-slate-900">
                  {t("cardLeft.title")}
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700 shadow-xs">
                  <span className="text-orange-500">★</span> {t("cardLeft.popular")}
                </span>
              </div>
              <p className="text-4xl font-extrabold text-slate-950 mt-5">
                {t("cardLeft.price")}
              </p>
              
              {/* Features List */}
              <div className="mt-8 border-t border-slate-100">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="flex items-center py-3.5 border-b border-slate-100 last:border-b-0"
                  >
                    <OrangeCheckIcon />
                    <span className="text-sm font-medium text-slate-600">
                      {t(`cardLeft.features.${i}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={`/${locale}/consultation`}
              className="w-full bg-orange-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center gap-2 mt-8 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              <span>{t("cardLeft.btn")}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Card Right: Real Value & Price Breakdown */}
          <div className="group relative rounded-2xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 flex flex-col justify-between transition-all duration-300 hover:border-orange-200/60 hover:shadow-xl hover:shadow-slate-200/60">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {t("cardRight.title")}
              </h3>
              
              {/* Values List */}
              <div className="mt-8 border-t border-slate-100">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="flex items-center justify-between py-3.5 border-b border-slate-100 last:border-b-0"
                  >
                    <div className="flex items-center text-slate-600 text-sm font-medium">
                      {valueIcons[i]}
                      <span>{t(`cardRight.items.${i}.label`)}</span>
                    </div>
                    <span className="text-sm font-medium text-slate-400">
                      {t(`cardRight.items.${i}.val`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Breakdown Footer */}
            <div className="mt-8 pt-6 border-t border-dashed border-slate-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-400">
                  {t("cardRight.totalLabel")}
                </span>
                <span className="text-sm font-bold text-slate-400 line-through">
                  {t("cardRight.totalValue")}
                </span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-lg font-bold text-slate-900">
                  {t("cardRight.tuitionLabel")}
                </span>
                <span className="text-3xl font-extrabold text-orange-600">
                  {t("cardRight.tuitionValue")}
                </span>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Trust Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-6xl mx-auto">
          <div className="group bg-white border border-slate-100 text-slate-800 rounded-full px-5 py-2.5 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold shadow-sm transition-all duration-300 hover:border-orange-200/50 hover:shadow-md">
            <ShieldCheckIcon />
            <span>{t("bottomRow.f1")}</span>
          </div>
          <div className="group bg-white border border-slate-100 text-slate-800 rounded-full px-5 py-2.5 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold shadow-sm transition-all duration-300 hover:border-orange-200/50 hover:shadow-md">
            <HeadsetIcon />
            <span>{t("bottomRow.f2")}</span>
          </div>
          <div className="group bg-white border border-slate-100 text-slate-800 rounded-full px-5 py-2.5 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold shadow-sm transition-all duration-300 hover:border-orange-200/50 hover:shadow-md">
            <PersonIcon />
            <span>{t("bottomRow.f3")}</span>
          </div>
          <div className="group bg-white border border-slate-100 text-slate-800 rounded-full px-5 py-2.5 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold shadow-sm transition-all duration-300 hover:border-orange-200/50 hover:shadow-md">
            <CompassIcon />
            <span>{t("bottomRow.f4")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
