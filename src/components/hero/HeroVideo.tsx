"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "next-intl";

const VSL_YOUTUBE_ID = "eMO9CunjD78";

export default function HeroVideo() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const isEn = useLocale() === "en";

  const command = (func: string) =>
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*"
    );

  const unmute = () => {
    command("unMute");
    setIsMuted(false);
  };

  // Try autoplay WITH sound. Browsers block it for most visitors (always on
  // Safari/iOS and first visits), so if the player isn't playing unmuted
  // shortly after load, fall back to muted autoplay + unmute on interaction.
  useEffect(() => {
    let playing = false;
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== "https://www.youtube-nocookie.com" || typeof e.data !== "string") return;
      let info;
      try { info = JSON.parse(e.data)?.info; } catch { return; }
      if (info?.playerState === 1) playing = true;
      if (typeof info?.muted === "boolean") setIsMuted(info.muted);
    };
    window.addEventListener("message", onMessage);
    const fallback = setTimeout(() => {
      if (playing) return;
      command("mute");
      command("playVideo");
      setIsMuted(true);
    }, 2500);
    return () => {
      window.removeEventListener("message", onMessage);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!isMuted) return;
    const events = ["pointerdown", "keydown"] as const;
    events.forEach((e) => document.addEventListener(e, unmute, { once: true }));
    return () => events.forEach((e) => document.removeEventListener(e, unmute));
  }, [isMuted]);

  return (
    <motion.div
      className="relative w-full max-w-[720px] lg:max-w-[600px] xl:max-w-[720px]"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 48, scale: 0.92, rotateX: 14, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformPerspective: 1200 }}
    >
      {/* Orange glow that blooms in behind the frame */}
      <motion.div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(255,144,77,0.45),transparent_70%)] blur-2xl"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
        aria-hidden="true"
      />

      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-[5px] border-white bg-slate-950 shadow-[0_24px_60px_rgba(232,112,42,0.18),0_10px_28px_rgba(15,23,42,0.1)]">
        <iframe
          ref={iframeRef}
          className="h-full w-full border-0"
          src={`https://www.youtube-nocookie.com/embed/${VSL_YOUTUBE_ID}?autoplay=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`}
          title={isEn ? "KNI Education TestAS introduction video" : "Video giới thiệu lộ trình TestAS KNI Education"}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          // Subscribe to player state events (YouTube IFrame API postMessage protocol)
          onLoad={() =>
            iframeRef.current?.contentWindow?.postMessage(
              JSON.stringify({ event: "listening", id: VSL_YOUTUBE_ID, channel: "widget" }),
              "*"
            )
          }
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
    </motion.div>
  );
}
