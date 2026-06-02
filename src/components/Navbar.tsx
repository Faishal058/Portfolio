"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X, Download, Sun, Moon } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeLogoIndex, setActiveLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogoIndex((prev) => (prev + 1) % 7);
    }, 1200); // 1.2s per character cycles with calm luxury rhythm
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || (document.documentElement.classList.contains("dark") ? "dark" : "light");
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 30);
  });

  useEffect(() => {
    const sections = ["about", "experience", "projects", "skills", "contact"];
    const observers: IntersectionObserver[] = [];

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -45% 0px", // Focuses scroll detection in the center of the viewport
      threshold: 0.05,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const mainObserver = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (el) {
        mainObserver.observe(el);
      }
    });
    observers.push(mainObserver);

    // Specifically observe Certifications to keep "projects" highlighted (bridges the projects-skills gap)
    const certsEl = document.getElementById("certifications");
    if (certsEl) {
      const certsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("projects");
          }
        });
      }, observerOptions);
      certsObserver.observe(certsEl);
      observers.push(certsObserver);
    }

    // Specifically observe Hero to clear highlights at the very top of the page
    const heroEl = document.getElementById("hero");
    if (heroEl) {
      const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("");
          }
        });
      }, observerOptions);
      heroObserver.observe(heroEl);
      observers.push(heroObserver);
    }

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, x: "-50%" },
          hidden: { y: "-150%", x: "-50%" },
        }}
        animate={hidden && !mobileOpen ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-[50] flex items-center justify-between w-[92%] max-w-4xl px-8 py-3.5 transition-all duration-300 rounded-full border",
          theme === "dark"
            ? scrolled
              ? "bg-neutral-950/80 border-neutral-900/50 shadow-md backdrop-blur-md"
              : "bg-neutral-950/40 border-neutral-900/30 shadow-sm backdrop-blur-sm"
            : scrolled
              ? "bg-white/95 border-neutral-200 shadow-md backdrop-blur-md"
              : "bg-white/80 border-neutral-200/50 shadow-sm backdrop-blur-sm"
        )}
      >
        <Link
          href="/"
          className="relative inline-flex items-center gap-1 font-serif group"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.04,
                }
              }
            }}
            className="flex items-center relative text-base font-bold tracking-widest"
          >
            {/* Sequential letter staggered reveal & Continuous character cycling */}
            <span className="flex items-center">
              {['F', 'A', 'I', 'S', 'H', 'A', 'L'].map((char, index) => {
                const isActive = index === activeLogoIndex;
                return (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.45,
                          ease: [0.16, 1, 0.3, 1]
                        }
                      }
                    }}
                     animate={isActive ? {
                       color: theme === "dark" ? "#8b5cf6" : "#ff6b00",
                       scale: 1.18,
                       y: -1.5,
                       textShadow: theme === "dark" ? "0 0 12px rgba(139, 92, 246, 0.6)" : "0 0 12px rgba(255, 107, 0, 0.5)",
                     } : {
                       color: theme === "dark" ? "#ffffff" : "#141311",
                       scale: 1,
                       y: 0,
                       textShadow: "0 0 0px rgba(139, 92, 246, 0)",
                     }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>

            {/* Pulsing orange dot with outer halo */}
            <span className="relative flex h-1.5 w-1.5 ml-1.5 self-center">
              <motion.span
                animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inline-flex h-full w-full rounded-full bg-[#ff6b00]"
              />
              <motion.span
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ff6b00]"
              />
            </span>

            {/* Hover thin underline drawing left to right */}
            <motion.span
              variants={{
                initial: { scaleX: 0 },
                hover: { scaleX: 1 }
              }}
              initial="initial"
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
              className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-[#ff6b00]"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-[11px] font-bold uppercase tracking-widest relative py-1 transition-colors duration-300 font-sans",
                activeSection === item.href.slice(1)
                  ? "text-[#ff6b00]"
                  : theme === "dark"
                    ? "text-neutral-400 hover:text-white"
                    : "text-neutral-500 hover:text-black"
              )}
            >
              {item.name}
              {activeSection === item.href.slice(1) && (
                <motion.span
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute bottom-[-5px] left-0 right-0 h-[1.5px] bg-[#ff6b00] origin-center"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            href="/Faishal_Resume.pdf"
            download
            whileHover={{ scale: 1.04, y: -1.5, boxShadow: "0 8px 16px -4px rgba(230, 81, 0, 0.25)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className={cn(
              "hidden md:inline-flex items-center gap-1.5 px-6 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 rounded-full group",
              theme === "dark"
                ? "bg-white text-black hover:bg-neutral-100"
                : "bg-black text-white hover:bg-neutral-800"
            )}
            data-magnetic="true"
          >
            <Download size={11} className="text-[#ff6b00] group-hover:translate-y-0.5 transition-transform duration-300" />
            <span>Resume</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "md:hidden p-1.5 transition-colors",
              theme === "dark" ? "text-neutral-400 hover:text-white" : "text-neutral-600 hover:text-black"
            )}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Floating Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={cn(
          "fixed bottom-24 right-8 z-[60] p-3 rounded-full flex items-center justify-center border shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-md theme-toggle-glow",
          theme === "dark"
            ? "text-neutral-300 border-neutral-850 bg-neutral-950/80 hover:bg-neutral-900"
            : "text-neutral-700 border-neutral-200/80 bg-white/95 hover:bg-neutral-50"
        )}
        aria-label="Toggle theme"
      >
        <motion.div
          key={theme}
          initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {theme === "light" ? (
            <Moon size={16} className="text-neutral-700" />
          ) : (
            <Sun size={16} className="text-neutral-300" />
          )}
        </motion.div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[45] md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white dark:bg-neutral-950 border-l border-neutral-100 dark:border-neutral-900 flex flex-col pt-24 px-8 justify-between pb-12 shadow-2xl"
            >
              <div className="flex flex-col gap-6">
                <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-neutral-400">Navigation</span>
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "text-lg font-bold uppercase tracking-wider block",
                        activeSection === item.href.slice(1) ? "text-[#ff6b00]" : "text-neutral-800 dark:text-neutral-200"
                      )}
                    >
                      <span className="text-neutral-300 dark:text-neutral-700 font-mono text-sm mr-3">0{i + 1}.</span>
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-6">
                <motion.a
                  href="/Faishal_Resume.pdf"
                  download
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                >
                  <Download size={14} />
                  Download Resume
                </motion.a>

                <div className="flex gap-6 justify-center text-[9px] font-mono tracking-widest uppercase">
                  <a
                    href="https://github.com/Faishal058"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/faishal-rahman-ansari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
