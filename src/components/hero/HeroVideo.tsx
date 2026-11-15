"use client";

import { useRef, useState } from "react";
import { useLocale } from "next-intl";

const VSL_YOUTUBE_ID = "eMO9CunjD78";

export default function HeroVideo() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const isEn = useLocale() === "en";

  // Browsers only allow autoplay when muted; unmute via the YouTube IFrame API.
  const unmute = () => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: "unMute", args: [] }),
      "*"
    );
    setIsMuted(false);
  };

  return (
    <div className="relative aspect-video w-full max-w-[720px] overflow-hidden rounded-2xl border-[5px] border-white bg-slate-950 shadow-[0_24px_60px_rgba(232,112,42,0.18),0_10px_28px_rgba(15,23,42,0.1)] lg:max-w-[600px] xl:max-w-[720px]">
      <iframe
        ref={iframeRef}
        className="h-full w-full border-0"
        src={`https://www.youtube-nocookie.com/embed/${VSL_YOUTUBE_ID}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`}
        title={isEn ? "KNI Education TestAS introduction video" : "Video giới thiệu lộ trình TestAS KNI Education"}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
      />

      {isMuted && (
        <button
          type="button"
          onClick={unmute}
          className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-sm font-bold text-white shadow-[0_8px_20px_rgba(232,112,42,0.4)] transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
          {isEn ? "Tap to unmute" : "Bật tiếng"}
        </button>
      )}
    </div>
  );
}
