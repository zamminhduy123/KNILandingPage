import HeroCopy from "./HeroCopy";
import HeroOrbitalLayer, { HeroBenefitCards } from "./HeroOrbitalLayer";
import HeroVideo from "./HeroVideo";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf5] pt-[72px]">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-orange-100/70"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-start px-6 pt-12 pb-16 sm:px-8 sm:pt-16 sm:pb-24">
        <HeroOrbitalLayer />

        <div className="relative z-20 mx-auto flex w-full max-w-4xl flex-col items-center justify-start text-center">
          <HeroCopy />

          <div className="mt-10 flex w-full justify-center sm:mt-12">
            <HeroVideo />
          </div>

          <HeroBenefitCards />
        </div>
      </div>
    </section>
  );
}
