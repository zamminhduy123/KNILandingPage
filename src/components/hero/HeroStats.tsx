import { useLocale } from "next-intl";

export default function HeroStats() {
  const locale = useLocale();
  const isEn = locale === "en";

  const cards = [
    {
      emoji: "🎓",
      title: "VGU",
      subtitle: isEn ? "Vietnamese-German University" : "Vietnamese-German University",
      className: "lg:-translate-y-5 lg:-rotate-[4deg]",
    },
    {
      emoji: "🏆",
      title: isEn ? "Scholarship" : "Học bổng",
      subtitle: isEn ? "Valuable scholarship opportunities" : "Cơ hội học bổng giá trị",
      className: "lg:translate-y-5",
    },
    {
      emoji: "🇩🇪",
      title: isEn ? "Study in Germany" : "Du học Đức",
      subtitle: isEn ? "A solid path for your future" : "Hành trang vững chắc cho tương lai",
      className: "lg:-translate-y-4 lg:rotate-[4deg]",
    },
  ];

  return (
    <div className="mt-14 flex w-full max-w-[860px] flex-col justify-center gap-4 sm:flex-row lg:mt-20 lg:gap-9">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`flex min-h-[96px] flex-1 items-center gap-4 rounded-[22px] border border-orange-100/90 bg-white/95 px-6 py-5 text-left shadow-[0_18px_48px_rgba(249,115,22,0.12)] backdrop-blur-sm ${card.className}`}
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-50 text-3xl leading-none">
            {card.emoji}
          </span>
          <div>
            <p className="text-lg font-black leading-tight text-slate-900">{card.title}</p>
            <p className="mt-1 max-w-[160px] text-sm font-medium leading-snug text-slate-500">
              {card.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
