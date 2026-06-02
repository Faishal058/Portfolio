"use client";

import React, { useEffect, useState } from "react";

export const PageLoader = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Lock scroll to prevent scrolling during initial load
    document.body.style.overflow = "hidden";

    const duration = 2200; // Elegant 2.2 seconds load duration
    const startTime = performance.now();
    let frameId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);

      // Luxurious easeOutQuart deceleration curve
      const easedProgress = 1 - Math.pow(1 - t, 4);
      const currentProgress = Math.floor(easedProgress * 100);

      setProgress(currentProgress);

      if (t < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setIsComplete(true);
        // After transition (1000ms), unlock scrolling and unmount loader
        const timer = setTimeout(() => {
          document.body.style.overflow = "";
          setShouldRender(false);
        }, 1000);
        return () => clearTimeout(timer);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = "";
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes preloaderExit {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100vh);
          }
        }
        .preloader-exit-wipe {
          animation: preloaderExit 1000ms cubic-bezier(0.85, 0, 0.15, 1) forwards !important;
        }
      `}} />

      <div
        id="global-preloader"
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAF8F5] dark:bg-black transition-colors duration-500 ${
          isComplete ? "preloader-exit-wipe" : ""
        }`}
        style={{ pointerEvents: isComplete ? "none" : "auto" }}
      >
        <div className="relative w-72 md:w-96 flex flex-col items-center px-4 overflow-hidden text-center">
          <div className="mt-10 flex justify-center items-baseline gap-3 w-full">
            <h2
              id="preloader-counter"
              className="text-8xl md:text-9xl font-black text-black dark:text-white tracking-tighter font-serif"
            >
              {progress}
            </h2>
            <span
              id="preloader-total"
              style={{
                letterSpacing: progress > 80 ? "0.3em" : "0.1em",
              }}
              className="text-neutral-400 dark:text-neutral-600 font-mono text-sm transition-all duration-500"
            >
              / 100
            </span>
          </div>

          {/* Elegant horizontal red line in between */}
          <div className="w-full h-[1px] bg-red-500 my-4 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>

          <p className="text-[8px] font-mono uppercase tracking-[0.45em] text-neutral-500 dark:text-neutral-400 opacity-50 text-center w-full">
            Faishal Rahman Ansari // Portfolio
          </p>
        </div>
      </div>
    </>
  );
};

