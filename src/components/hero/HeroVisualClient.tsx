"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import HeroVisualFallback from "./HeroVisualFallback";

// Dynamically import the 3D canvas with ssr: false
const HeroVisual3D = dynamic(() => import("./HeroVisual3D"), {
  ssr: false,
  loading: () => <HeroVisualFallback />,
});

export default function HeroVisualClient() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if the screen is mobile sized (< 768px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // To prevent hydration mismatch, render the fallback during SSR (isMobile is null)
  // or if the client is on a mobile device.
  if (isMobile === null || isMobile) {
    return <HeroVisualFallback />;
  }

  return <HeroVisual3D />;
}
