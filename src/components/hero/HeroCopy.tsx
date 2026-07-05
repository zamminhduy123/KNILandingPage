import Link from "next/link";
import { useLocale } from "next-intl";

export default function HeroCopy() {
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <div className="flex max-w-4xl flex-col items-center justify-start text-center">
      <span className="mb-4 text-sm font-bold uppercase text-orange-600 sm:text-base">
        {isEn
          ? "TestAS Preparation · HCMC & Online"
          : "Luyện thi TestAS · TP.HCM & Online"}
      </span>

      <h1 className="mb-4 text-4xl sm:text-7xl md:text-3xl lg:text-6xl font-black leading-[1.25] text-slate-950">
        {isEn ? (
          <>
            Conquer TestAS.
            <br />
            Open the door to <span className="text-orange-600">VGU</span>{" "}
            &amp; <span className="text-orange-600">Germany</span>.
          </>
        ) : (
          <>
            Chinh phục TestAS.
            <br />
            Mở cánh cửa vào
            <br />
            <span className="text-orange-600">VGU</span>{" "}
            &amp; <span className="text-orange-600">du học Đức</span>.
          </>
        )}
      </h1>

      <p className="mb-9 max-w-sm lg:max-w-xl text-lg font-medium leading-relaxed text-slate-500">
        {isEn
          ? "Personalized classes, weakness-focused training, and a clear roadmap for students aiming for VGU, scholarships, and studying in Germany."
          : "Lớp học cá nhân hoá, luyện đúng điểm yếu, lộ trình rõ ràng cho học sinh hướng đến VGU, học bổng và du học Đức."}
      </p>

      <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row md:flex-col lg:flex-row">
        <Link
          href={`/${locale}/consultation`}
          className="inline-flex min-h-[62px] w-full items-center justify-center rounded-xl bg-orange-600 px-9 text-base font-bold text-white shadow-[0_14px_28px_rgba(234,88,12,0.22)] transition-colors duration-200 hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:w-auto"
        >
          {isEn ? "Book a trial class" : "Đăng ký học thử"}
          <svg
            className="ml-3 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
        <Link
          href={`/${locale}#roadmap`}
          className="inline-flex min-h-[62px] w-full items-center justify-center rounded-xl border border-slate-400 bg-white/80 px-9 text-base font-bold text-slate-800 transition-colors duration-200 hover:border-slate-600 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 sm:w-auto"
        >
          {isEn ? "View TestAS roadmap" : "Xem lộ trình TestAS"}
        </Link>
      </div>
    </div>
  );
}
