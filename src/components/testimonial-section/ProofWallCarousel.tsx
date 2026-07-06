"use client";

import Image from "next/image";

type ProofWallCarouselProps = {
  images: string[];
  title: string;
  subtitle: string;
  viewAllText: string;
  viewAllHref: string;
  locale: string;
};

export default function ProofWallCarousel({
  images,
  title,
  subtitle,
  viewAllText,
  viewAllHref,
  locale,
}: ProofWallCarouselProps) {
  // Duplicate the images to ensure a seamless infinite scroll loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="overflow-hidden rounded-2xl bg-slate-900 p-4">
      {/* Header */}
      <div className="mb-3 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          
        </div>
        <p className="text-sm text-slate-400">{subtitle}</p>
      </div>

      {/* Seamless Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max gap-4 animate-[scroll-left_100s_linear_infinite] hover:[animation-play-state:paused]">
          {duplicatedImages.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] w-36 flex-none overflow-hidden rounded-xl sm:w-40"
            >
              <Image
                src={src}
                alt={
                  locale === "en"
                    ? `Student proof screenshot ${i + 1}`
                    : `Minh chứng học viên ${i + 1}`
                }
                fill
                sizes="(max-width: 640px) 144px, 160px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
