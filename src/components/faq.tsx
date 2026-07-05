"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

type FAQItem = {
  q: string;
  a: string;
};

function FAQRow({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        id={`faq-btn-${index}`}
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span
          className={`text-sm sm:text-base font-medium transition-colors duration-200 ${
            open ? "text-orange-600" : "text-slate-900"
          }`}
        >
          {item.q}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
            open
              ? "border-orange-200 bg-orange-50 text-orange-600"
              : "border-slate-200 bg-white text-slate-400"
          }`}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d={open ? "M2 8.5L6 4.5L10 8.5" : "M2 4.5L6 8.5L10 4.5"}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-btn-${index}`}
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-11 text-sm leading-relaxed text-slate-500">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const t = useTranslations("FAQ");
  const locale = useLocale();
  const localePath = locale === "vn" ? "" : `/${locale}`;

  // next-intl doesn't support array translation keys directly, so we define the items inline
  const items: FAQItem[] = [
    { q: t("items.0.q"), a: t("items.0.a") },
    { q: t("items.1.q"), a: t("items.1.a") },
    { q: t("items.2.q"), a: t("items.2.a") },
    { q: t("items.3.q"), a: t("items.3.a") },
    { q: t("items.4.q"), a: t("items.4.a") },
    { q: t("items.5.q"), a: t("items.5.a") },
    { q: t("items.6.q"), a: t("items.6.a") },
    { q: t("items.7.q"), a: t("items.7.a") },
    { q: t("items.8.q"), a: t("items.8.a") },
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-600">
            {t("label")}
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-base text-slate-500">{t("subtitle")}</p>
        </div>

        {/* Accordion list */}
        <div className="rounded-2xl border border-slate-100 bg-white px-6 shadow-lg shadow-slate-200/50">
          {items.map((item, i) => (
            <FAQRow key={i} item={item} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <a
            href={`/${locale}/consultation`}
            className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
