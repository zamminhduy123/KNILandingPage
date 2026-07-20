import HeroCopy from "./HeroCopy";
import HeroOrbitalLayer from "./HeroOrbitalLayer";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf5] pt-[72px]">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        // style={{
        //   background:
        //     "radial-gradient(ellipse 58% 42% at 50% 44%, rgba(249,115,22,0.14) 0%, rgba(251,146,60,0.06) 42%, transparent 76%), radial-gradient(ellipse 70% 28% at 50% 90%, rgba(249,115,22,0.16) 0%, rgba(251,191,36,0.07) 44%, transparent 78%)",
        // }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-orange-100/70"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex sm:min-h-[calc(100svh-72px)] max-w-7xl items-center sm:items-start justify-center px-6 sm:px-8">
        <HeroOrbitalLayer />

        <div className="relative z-20 pt-16 mx-auto flex max-w-4xl flex-col justify-start items-center text-center">
          <HeroCopy />
        </div>
      </div>
    </section>
  );
}
