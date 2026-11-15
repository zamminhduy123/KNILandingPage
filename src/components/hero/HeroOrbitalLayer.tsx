"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "next-intl";
import type { ReactNode } from "react";

const cardShell =
  "rounded-[24px] border-2 border-orange-100/70 bg-white/80";

type FloatCardProps = {
  children: ReactNode;
  className: string;
  delay?: number;
  distance?: number;
};

function FloatCard({
  children,
  className,
  delay = 0,
  distance = 10,
}: FloatCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={`${className} pointer-events-auto transition-transform duration-300 max-[1366px]:scale-[0.88]`}
    >
      <motion.div
        className="will-change-transform"
        animate={shouldReduceMotion ? undefined : { y: [0, -distance, 0] }}
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 7.5,
                delay,
                ease: "easeInOut",
                repeat: Infinity,
              }
        }
      >
        <motion.div
          className="will-change-transform"
          whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.02 }}
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                }
          }
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

function GlowOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      className={`absolute rounded-full border border-orange-200/70 bg-white/80 shadow-[0_0_26px_rgba(255,144,77,0.32)] ${className}`}
      animate={shouldReduceMotion ? undefined : { opacity: [0.5, 1, 0.55], scale: [0.92, 1.08, 0.92] }}
      transition={
        shouldReduceMotion
          ? undefined
          : { duration: 5.8, delay, ease: "easeInOut", repeat: Infinity }
      }
    />
  );
}

function OrbitField() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <svg
        className="absolute inset-x-[-10%] top-[6%] hidden h-[78%] w-[120%] text-orange-400/35 lg:block"
        fill="none"
        viewBox="0 0 1500 760"
        preserveAspectRatio="none"
      >
        <path
          d="M45 485C264 232 528 554 742 398C971 231 1166 152 1456 270"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M86 382C330 181 603 266 780 352C1014 466 1209 536 1414 352"
          stroke="currentColor"
          strokeDasharray="12 16"
          strokeWidth="1.1"
        />
        <path
          d="M20 573C260 680 536 609 744 496C1009 352 1234 258 1480 403"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      <GlowOrb className="left-[7%] top-[48%] h-5 w-5" />
      <GlowOrb className="left-[12%] bottom-[14%] h-7 w-7" delay={0.8} />
      <GlowOrb className="right-[8%] top-[24%] h-9 w-9" delay={1.4} />
      <GlowOrb className="right-[11%] bottom-[16%] h-11 w-11" delay={2.1} />
    </div>
  );
}

function ScoreCard() {
  const bars = [38, 54, 68, 78, 88, 98];

  return (
    <div className={`${cardShell} w-[250px] p-6`}>
      <p className="mb-4 text-sm font-bold uppercase text-slate-500">TESTAS SCORE</p>
      <div className="mb-5 flex items-baseline gap-2">
        <span className="text-[3.85rem] font-black leading-none text-slate-950">114</span>
        <span className="text-xl font-semibold text-slate-400">/130</span>
      </div>
      <p className="mb-1 text-sm font-bold uppercase text-slate-500">PERCENTILE</p>
      <div className="flex items-end justify-between gap-4">
        <span className="text-[2.25rem] font-black leading-none text-orange-600">97%</span>
        <div className="flex h-10 items-end gap-2 pb-1">
          {bars.map((height, index) => (
            <span
              key={index}
              className="w-[5px] rounded-full bg-orange-400"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function RadarCard() {
  const outer = "M 30 8 L 50.9 23.2 L 42.9 47.8 L 17.1 47.8 L 9.1 23.2 Z";
  const mid = "M 30 19 L 40.5 26.6 L 36.5 38.9 L 23.6 38.9 L 19.6 26.6 Z";
  const data = "M 30 15.7 L 46.7 24.6 L 37.1 39.8 L 21.0 42.5 L 17.5 25.9 Z";

  return (
    <div className={`${cardShell} w-[230px] p-5`}>
      <p className="mb-2 text-sm font-bold text-slate-700">Phân tích điểm yếu</p>
      <div className="flex justify-center">
        <svg viewBox="0 0 76 76" className="h-[138px] w-[138px]">
          <g transform="translate(8 8)">
            <line x1="30" y1="30" x2="30" y2="8" stroke="#fed7aa" strokeWidth="0.5" />
            <line x1="30" y1="30" x2="50.9" y2="23.2" stroke="#fed7aa" strokeWidth="0.5" />
            <line x1="30" y1="30" x2="42.9" y2="47.8" stroke="#fed7aa" strokeWidth="0.5" />
            <line x1="30" y1="30" x2="17.1" y2="47.8" stroke="#fed7aa" strokeWidth="0.5" />
            <line x1="30" y1="30" x2="9.1" y2="23.2" stroke="#fed7aa" strokeWidth="0.5" />
            <path d={outer} fill="none" stroke="#fed7aa" strokeWidth="0.5" />
            <path d={mid} fill="none" stroke="#fed7aa" strokeWidth="0.5" />
            <path
              d={data}
              fill="rgba(255,144,77,0.18)"
              stroke="#FF904D"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
            <circle cx="30" cy="15.7" r="1.6" fill="#FF904D" />
            <circle cx="46.7" cy="24.6" r="1.6" fill="#FF904D" />
            <circle cx="37.1" cy="39.8" r="1.6" fill="#FF904D" />
            <circle cx="21" cy="42.5" r="1.6" fill="#FF904D" />
            <circle cx="17.5" cy="25.9" r="1.6" fill="#FF904D" />
          </g>
          <text x="37" y="8" className="fill-slate-500 text-[5px]">Logic</text>
          <text x="54" y="28" className="fill-slate-500 text-[5px]">Text</text>
          <text x="47" y="62" className="fill-slate-500 text-[5px]">Quantitative</text>
          <text x="4" y="62" className="fill-slate-500 text-[5px]">Reading</text>
          <text x="0" y="28" className="fill-slate-500 text-[5px]">Lang</text>
        </svg>
      </div>
    </div>
  );
}

function ProgressCard() {
  const progressBars = [100, 100, 85, 60, 30];

  return (
    <div className={`${cardShell} w-[220px] p-6`}>
      <p className="mb-5 text-lg font-semibold text-slate-700">
        <span className="font-bold text-orange-600">KNI</span> luyện tập
      </p>
      <div className="relative mx-auto mb-5 h-[104px] w-[104px]">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
          <path
            stroke="#ffdec7"
            strokeWidth="4"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            stroke="#FF904D"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="97, 100"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-black text-orange-600">97%</span>
        </div>
      </div>
      <p className="mb-4 text-center text-sm font-medium text-slate-500">Hoàn thành mục tiêu</p>
      <div className="flex justify-center gap-2">
        {progressBars.map((width, index) => (
          <span key={index} className="h-[6px] flex-1 overflow-hidden rounded-full bg-orange-100">
            <span className="block h-full rounded-full bg-orange-400" style={{ width: `${width}%` }} />
          </span>
        ))}
      </div>
    </div>
  );
}

type BenefitCardProps = {
  emoji: string;
  title: string;
  subtitle: string;
};

function BenefitCard({ emoji, title, subtitle }: BenefitCardProps) {
  return (
    <div className={`${cardShell} flex min-h-[88px] w-full items-center gap-4 px-5 py-4 text-left sm:min-h-[92px]`}>
      <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-orange-50 text-3xl leading-none">
        {emoji}
      </span>
      <div className="min-w-0">
        <p className="text-base font-black leading-tight text-slate-900 sm:text-lg">{title}</p>
        <p className="mt-1 text-sm font-medium leading-snug text-slate-500">{subtitle}</p>
      </div>
    </div>
  );
}

export function HeroBenefitCards() {
  const locale = useLocale();
  const isEn = locale === "en";
  const shouldReduceMotion = useReducedMotion();

  const items = [
    {
      emoji: "🎓",
      title: "VGU",
      subtitle: "Vietnamese-German University",
      delay: 0,
    },
    {
      emoji: "🏆",
      title: isEn ? "Scholarship" : "Học bổng",
      subtitle: isEn ? "Valuable scholarship opportunities" : "Cơ hội học bổng giá trị",
      delay: 0.5,
    },
    {
      emoji: "🇩🇪",
      title: isEn ? "Study in Germany" : "Du học Đức",
      subtitle: isEn ? "A solid path for your future" : "Hành trang vững chắc cho tương lai",
      delay: 1.0,
    },
  ];

  return (
    <div className="mt-8 flex w-full max-w-[740px] flex-wrap items-stretch justify-center gap-3 sm:mt-10 lg:gap-4">
      {items.map((item) => (
        <motion.div
          key={item.title}
          className="w-full max-w-[340px] sm:w-[224px] lg:w-[230px]"
          animate={shouldReduceMotion ? undefined : { y: [0, -5, 0] }}
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 7,
                  delay: item.delay,
                  ease: "easeInOut",
                  repeat: Infinity,
                }
          }
          whileHover={shouldReduceMotion ? undefined : { y: -4 }}
        >
          <BenefitCard emoji={item.emoji} title={item.title} subtitle={item.subtitle} />
        </motion.div>
      ))}
    </div>
  );
}

function TabletCards() {
  return (
    <div className="absolute inset-x-0 top-[356px] z-10 hidden px-4 md:block lg:hidden">
      <div className="mx-auto flex items-start justify-between">
        <FloatCard className="origin-top-left scale-[0.65] -rotate-6" distance={6}>
          <ScoreCard />
        </FloatCard>
        <FloatCard className="origin-top-right scale-[0.65] rotate-6" delay={0.7} distance={6}>
          <ProgressCard />
        </FloatCard>
      </div>
    </div>
  );
}

export default function HeroOrbitalLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 mx-auto max-w-7xl">
      <OrbitField />

      <div className="hidden md:block">
        <FloatCard className="absolute sm:left-0 md:left-[2%] top-[80px] w-[250px] -rotate-6" distance={12}>
          <ScoreCard />
        </FloatCard>

        <FloatCard className="absolute left-[5%] top-[410px] w-[230px] rotate-3" delay={0.8} distance={10}>
          <RadarCard />
        </FloatCard>

        <FloatCard className="absolute right-[8%] top-[230px] w-[220px] rotate-6" delay={0.4} distance={14}>
          <ProgressCard />
        </FloatCard>
      </div>

      {/* <TabletCards /> */}
    </div>
  );
}
