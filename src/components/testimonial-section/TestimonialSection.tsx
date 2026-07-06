import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import ProofWallCarousel from "./ProofWallCarousel";
import {
  testimonials,
  proofWallImages,
  categories,
  type Testimonial,
} from "./testimonial-data";

/* ─── Featured Card (large, asymmetric) ─────────────────────── */
function FeaturedCard({
  item,
  isEn,
}: {
  item: Testimonial;
  isEn: boolean;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-200/50 transition-all duration-300 hover:border-orange-200/60 hover:shadow-xl hover:shadow-slate-200/60">
      <div className="grid md:grid-cols-[1.1fr_0.9fr]">
        {/* Text side */}
        <div className="flex flex-col justify-center p-6 lg:p-8">
          {/* Avatar & name */}
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
              {item.initials}
            </div>
            <div>
              <p className="font-bold text-slate-900">{item.name}</p>
              <p className="text-xs font-semibold text-orange-700">
                {isEn ? item.badge.en : item.badge.vn}
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="flex mb-2 gap-2">
            <span
              className="select-none font-serif text-5xl leading-none text-orange-200"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="text-sm leading-relaxed text-slate-600">
              {isEn ? item.quote.en : item.quote.vn}
            </p>
          </div>

          {/* Result */}
          <div className="border-t border-slate-100 pt-4">
            <p className="text-sm font-bold text-orange-600">
              {isEn ? item.result.en : item.result.vn}
            </p>
            {item.resultSub && (
              <p className="mt-0.5 text-xs text-slate-400">
                {isEn ? item.resultSub.en : item.resultSub.vn}
              </p>
            )}
          </div>
        </div>

        {/* Proof image */}
        <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
          <Image
            src={item.proofImage}
            alt={
              isEn
                ? `Proof screenshot — ${item.name}`
                : `Minh chứng — ${item.name}`
            }
            fill
            sizes="(max-width: 810px) 100vw, 45vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Standard Card (smaller, vertical) ─────────────────────── */
function StandardCard({
  item,
  isEn,
}: {
  item: Testimonial;
  isEn: boolean;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-200/50 transition-all duration-300 hover:border-orange-200/60 hover:shadow-xl hover:shadow-slate-200/60">
      {/* Proof thumbnail */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={item.proofImage}
          alt={
            isEn
              ? `Proof screenshot — ${item.name}`
              : `Minh chứng — ${item.name}`
          }
          fill
          sizes="(max-width: 810px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Avatar & name */}
        <div className="mb-3 flex items-center gap-2.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
            {item.initials}
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">{item.name}</p>
            <p className="text-xs font-semibold text-orange-700">
              {isEn ? item.badge.en : item.badge.vn}
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="flex gap-2 mb-3">
          <span
            className="select-none font-serif text-3xl leading-none text-orange-200"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p className="text-xs leading-relaxed text-slate-500">
            {isEn ? item.quote.en : item.quote.vn}
          </p>
        </div>

        {/* Result */}
        <p className="text-xs font-bold text-orange-600">
          {isEn ? item.result.en : item.result.vn}
        </p>
      </div>
    </div>
  );
}

/* ─── Main Section ──────────────────────────────────────────── */
export default function TestimonialSection() {
  const t = useTranslations("TestimonialSection");
  const locale = useLocale();
  const isEn = locale === "en";

  const featured = testimonials.filter((d) => d.featured);
  const standard = testimonials.filter((d) => !d.featured);

  return (
    <section className="bg-[#fffbf7]  py-16 sm:py-20 lg:py-24" id="testimonials">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ── Header ──────────────────────────────────────── */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-orange-600">
            {t("label")}
          </p>
          <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
        </div>

        {/* ── Featured cards ──────────────────────────────── */}
        <div className="mb-8 grid gap-8 lg:grid-cols-2">
          {featured.map((item) => (
            <FeaturedCard key={item.id} item={item} isEn={isEn} />
          ))}
        </div>

        {/* ── Standard cards ──────────────────────────────── */}
        <div className="mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {standard.map((item) => (
            <StandardCard key={item.id} item={item} isEn={isEn} />
          ))}
        </div>

        {/* ── Proof wall carousel ─────────────────────────── */}
        <ProofWallCarousel
          images={proofWallImages}
          title={t("proofWall.title")}
          subtitle={t("proofWall.subtitle")}
          viewAllText={t("proofWall.viewAll")}
          viewAllHref={`/${locale}/consultation/`}
          locale={locale}
        />
      </div>
    </section>
  );
}
