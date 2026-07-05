import { useTranslations } from "next-intl";

const TrendUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PersonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const TargetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

type StatItem = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

export default function StatsBar() {
  const t = useTranslations("StatsBar");

  const stats: StatItem[] = [
    {
      icon: <TrendUpIcon />,
      value: t("stat1.value"),
      label: t("stat1.label"),
    },
    {
      icon: <UsersIcon />,
      value: t("stat2.value"),
      label: t("stat2.label"),
    },
    {
      icon: <MapPinIcon />,
      value: t("stat3.value"),
      label: t("stat3.label"),
    },
    {
      icon: <PersonIcon />,
      value: t("stat4.value"),
      label: t("stat4.label"),
    },
    {
      icon: <TargetIcon />,
      value: t("stat5.value"),
      label: t("stat5.label"),
    },
  ];

  return (
    <section aria-label="Thống kê KNI" className="relative bg-gradient-to-b from-[#fffaf5] to-white py-10 sm:py-12 overflow-hidden">
      {/* Faint orange radial glow at the top */}
      {/* <div 
        className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.08)_0%,_transparent_75%)] pointer-events-none" 
        aria-hidden="true"
      /> */}
      
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-2 sm:px-4 border-slate-100 lg:border-r lg:last:border-r-0 border-[#ffedd5]"
            >
              {/* Icon */}
              <span className="text-orange-500 shrink-0">{stat.icon}</span>

              {/* Value + Label */}
              <div>
                <p className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-slate-500 leading-tight">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
