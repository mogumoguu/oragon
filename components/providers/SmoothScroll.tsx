"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Keep Lenis in sync with content-height changes (images loading, fonts
    // swapping, sections revealing on scroll). Without this Lenis can cache a
    // stale scroll limit, so scrolling appears to "stop" partway down the page
    // until a reload. Re-measure whenever the document height changes.
    const resize = () => lenis.resize();
    const ro = new ResizeObserver(resize);
    ro.observe(document.body);
    window.addEventListener("load", resize);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("load", resize);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
