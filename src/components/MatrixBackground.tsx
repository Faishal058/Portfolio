"use client";

import React, { useEffect, useRef } from "react";

export const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || 800);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || 800;
    };

    window.addEventListener("resize", handleResize);

    // Subtle matrix columns setup
    const fontSize = 10;
    const columns = Math.floor(width / 28);
    const yPositions = Array(columns).fill(0).map(() => Math.random() * -500);
    
    const chars = "01010101011010101010<>/{}[];:+-*".split("");

    const render = () => {
      const isDark = document.documentElement.classList.contains("dark");
      
      // Clear background with translucent overlay for smooth decay trailing
      ctx.fillStyle = isDark 
        ? "rgba(3, 0, 20, 0.06)" // Translucent Deep Space Black
        : "rgba(250, 248, 245, 0.06)"; // Translucent Warm Ivory
        
      ctx.fillRect(0, 0, width, height);

      // Render glowing symbols
      ctx.font = "bold 9px 'JetBrains Mono', monospace";

      for (let i = 0; i < yPositions.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * 28;
        const y = yPositions[i];

        // Glowing themed color selection
        ctx.fillStyle = isDark
          ? "rgba(139, 92, 246, 0.08)" // Soft Neon Purple
          : "rgba(230, 81, 0, 0.04)"; // Soft Cinematic Orange

        ctx.fillText(char, x, y);

        // Reset drops when exiting viewport
        if (y > height + 50) {
          yPositions[i] = -fontSize;
        } else {
          yPositions[i] += 4; // Gentle descending speed
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
};
