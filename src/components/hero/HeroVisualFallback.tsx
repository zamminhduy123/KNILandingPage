export default function HeroVisualFallback() {
  return (
    <div className="relative w-full h-[360px] sm:h-[400px] lg:h-[520px] mx-auto select-none flex items-center justify-center">
      {/* Soft background wash — one, not three */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/60 via-transparent to-transparent rounded-3xl pointer-events-none" />

      {/* Central Score Card */}
      <div className="absolute z-10 top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400 mb-3">
          TestAS Score
        </span>
        <div className="text-5xl font-extrabold text-slate-900 tabular-nums">
          114
        </div>
        <span className="text-sm text-slate-400 font-medium mt-1">/ 130</span>
        <div className="w-full h-px bg-slate-100 my-4" />
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          <span className="text-xs font-semibold text-slate-600">Top 5% — KNI Academy</span>
        </div>
      </div>

      {/* Opportunity labels — clean pills, not full cards */}
      <div className="absolute bottom-[18%] left-[8%] sm:left-[12%] bg-white rounded-lg px-4 py-2.5 shadow-md shadow-slate-200/40 border border-slate-100">
        <span className="text-xs font-semibold text-slate-700">🎓 VGU</span>
      </div>

      <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 bg-white rounded-lg px-4 py-2.5 shadow-md shadow-slate-200/40 border border-slate-100">
        <span className="text-xs font-semibold text-slate-700">🏆 Học bổng</span>
      </div>

      <div className="absolute bottom-[18%] right-[8%] sm:right-[12%] bg-white rounded-lg px-4 py-2.5 shadow-md shadow-slate-200/40 border border-slate-100">
        <span className="text-xs font-semibold text-slate-700">🇩🇪 Du học Đức</span>
      </div>

      {/* Thin connecting lines — just CSS borders, not SVG glowing paths */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M 50 40 L 22 78" stroke="#e2e8f0" strokeWidth="0.4" fill="none" />
        <path d="M 50 40 L 50 88" stroke="#e2e8f0" strokeWidth="0.4" fill="none" />
        <path d="M 50 40 L 78 78" stroke="#e2e8f0" strokeWidth="0.4" fill="none" />
      </svg>
    </div>
  );
}
