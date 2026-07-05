import Image from "next/image";
import { useTranslations } from "next-intl";

const SparkleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-orange-500"
    aria-hidden="true"
  >
    <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
  </svg>
);

const GraduationCapIcon = () => (
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
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

const MedalIcon = () => (
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
  >
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const PlaneIcon = () => (
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
  >
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
  </svg>
);

const DotGrid = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-orange-500/30"
    aria-hidden="true"
  >
    <circle cx="4" cy="4" r="1.5" fill="currentColor" />
    <circle cx="12" cy="4" r="1.5" fill="currentColor" />
    <circle cx="20" cy="4" r="1.5" fill="currentColor" />
    <circle cx="28" cy="4" r="1.5" fill="currentColor" />
    
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <circle cx="20" cy="12" r="1.5" fill="currentColor" />
    <circle cx="28" cy="12" r="1.5" fill="currentColor" />
    
    <circle cx="20" cy="20" r="1.5" fill="currentColor" />
    <circle cx="28" cy="20" r="1.5" fill="currentColor" />
    
    <circle cx="28" cy="28" r="1.5" fill="currentColor" />
  </svg>
);

type CardProps = {
  imageSrc: string;
  imageAlt: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

function WhyCard({ imageSrc, imageAlt, icon, title, description }: CardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-200/50 transition-all duration-300 hover:border-orange-200/60 hover:shadow-xl hover:shadow-slate-200/60">
      {/* Image Container with Icon */}
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Icon Overlay */}
        <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-orange-600 shadow-md transition-colors duration-300 group-hover:bg-orange-50">
          {icon}
        </div>
      </div>

      {/* Content Area */}
      <div className="relative p-6 pr-10">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <div className="mt-2 h-0.5 w-8 bg-orange-600" />
        <p className="mt-4 text-sm leading-relaxed text-slate-500">{description}</p>

        {/* Decorative Dot Grid */}
        <div className="absolute bottom-4 right-4">
          <DotGrid />
        </div>
      </div>
    </div>
  );
}

export default function WhyTestAS() {
  const t = useTranslations("WhyTestAS");

  return (
    <section className="bg-white pb-16">
      <div className="border-t border-slate-100 pt-16 sm:pt-20 max-w-3xl mx-auto"></div>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {t("title")}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <WhyCard
            imageSrc="/images/why-vgu.jpg"
            imageAlt="Học viên KNI mong muốn xét tuyển vào trường Đại học Việt Đức VGU"
            icon={<GraduationCapIcon />}
            title={t("card1.title")}
            description={t("card1.desc")}
          />
          <WhyCard
            imageSrc="/images/why-scholarship.jpg"
            imageAlt="Học viên KNI đạt kết quả TestAS cao để giành học bổng du học"
            icon={<MedalIcon />}
            title={t("card2.title")}
            description={t("card2.desc")}
          />
          <WhyCard
            imageSrc="/images/why-germany.jpg"
            icon={<PlaneIcon />}
            imageAlt="Cơ hội học tập và định cư tại Đức cùng KNI Education"
            title={t("card3.title")}
            description={t("card3.desc")}
          />
        </div>
      </div>
    </section>
  );
}
