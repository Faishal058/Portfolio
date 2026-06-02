"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUp } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#ffffff] pt-24 pb-12 border-t border-neutral-100">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          {/* Logo & Brand */}
          <div className="flex flex-col items-center lg:items-start gap-3 max-w-sm text-center lg:text-left">
            <Link href="/" className="text-xl font-bold tracking-widest text-black flex items-center gap-1 font-serif">
              FAISHAL <span className="w-1.5 h-1.5 bg-[#ff6b00] rounded-full inline-block" />
            </Link>
            <p className="text-neutral-400 text-[10px] leading-relaxed uppercase tracking-wider font-sans">
              Computer Engineer & Full Stack Creator. Crafting high-value software products with maximum elegance and minimal clutter.
            </p>
          </div>

          {/* Quick Sitemap Links */}
          <div className="flex flex-wrap gap-8 text-[11px] font-bold uppercase tracking-widest text-neutral-400 justify-center">
            <a href="#about" className="hover:text-black transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-black transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-black transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-black transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-black transition-colors">
              Contact
            </a>
          </div>

          {/* Social Channels */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Faishal058"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-neutral-100 hover:border-black text-neutral-400 hover:text-black transition-colors bg-[#fafafa] rounded-full"
              aria-label="GitHub"
              data-magnetic="true"
            >
              <Github size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/faishal-rahman-ansari/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-neutral-100 hover:border-black text-neutral-400 hover:text-black transition-colors bg-[#fafafa] rounded-full"
              aria-label="LinkedIn"
              data-magnetic="true"
            >
              <Linkedin size={14} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-3 border border-[#ff6b00]/20 hover:border-[#ff6b00] text-[#ff6b00] hover:bg-[#ff6b00] hover:text-white transition-all bg-[#fafafa] rounded-full flex items-center justify-center"
              aria-label="Back to Top"
              data-magnetic="true"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Line & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-100 text-[9px] font-mono uppercase tracking-widest text-neutral-400">
          <p>© {new Date().getFullYear()} Faishal Rahman Ansari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
