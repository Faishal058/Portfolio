"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { cn } from "@/lib/utils";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealTextProps {
  text: string;
  type?: "words" | "chars" | "lines";
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  highlightKeywords?: string[]; // Keywords that should sweep to brand orange
  once?: boolean;
}

export const ScrollRevealText = ({
  text,
  type = "words",
  as: Tag = "h2",
  className,
  delay = 0,
  highlightKeywords = [],
  once = true,
}: ScrollRevealTextProps) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    // 1. Initialize SplitType
    const split = new SplitType(containerRef.current, {
      types: type === "lines" ? "lines" : type === "chars" ? "words,chars" : "words",
      tagName: "span",
    });

    const targets = type === "lines" ? split.lines : type === "chars" ? split.chars : split.words;
    if (!targets || targets.length === 0) return;

    // Apply high-performance hardware acceleration properties
    targets.forEach((target) => {
      if (target) {
        target.style.willChange = "transform, opacity, filter";
        target.style.display = "inline-block";
        
        // Highlight important keywords
        if (highlightKeywords.length > 0 && target.textContent) {
          const cleanText = target.textContent.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
          const matches = highlightKeywords.some(kw => {
            const cleanKw = kw.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
            return cleanText === cleanKw || cleanText.includes(cleanKw);
          });
          if (matches) {
            target.classList.add("text-keyword-sweep");
          }
        }
      }
    });

    // 2. Set Initial State
    gsap.set(targets, {
      opacity: 0,
      y: 35,
      filter: "blur(8px)",
    });

    // Instantly reveal container now that elements are split and positioned
    gsap.set(containerRef.current, { opacity: 1 });

    // 3. Create ScrollTrigger Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 88%", // Starts animating when element enters 88% of viewport height
        toggleActions: once ? "play none none none" : "play none none reverse",
      },
    });

    tl.to(targets, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.15,
      ease: "power4.out",
      stagger: type === "chars" ? 0.025 : type === "lines" ? 0.08 : 0.045,
      delay: delay,
    });

    // If keywords sweep highlights are active, trigger their orange sweep
    const sweepElements = containerRef.current.querySelectorAll(".text-keyword-sweep");
    if (sweepElements.length > 0) {
      const isDark = typeof window !== "undefined" && document.documentElement.classList.contains("dark");
      const sweepColor = isDark ? "#c084fc" : "#ff6b00";
      
      tl.to(sweepElements, {
        color: sweepColor,
        duration: 0.75,
        ease: "power2.out",
        stagger: 0.08,
      }, "-=0.65");
    }

    // 4. Cleanup
    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, [text, type, delay, highlightKeywords, once]);

  return (
    <Tag ref={containerRef as any} className={cn("inline-block w-full opacity-0 [@media(prefers-reduced-motion:reduce)]:opacity-100", className)}>
      {text}
    </Tag>
  );
};
