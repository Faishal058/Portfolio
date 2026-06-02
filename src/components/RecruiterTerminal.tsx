"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from "lucide-react";

export const RecruiterTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<
    { type: "input" | "output" | "system"; text: string | React.ReactNode }[]
  >([
    { type: "system", text: "Faishal Core Platform OS v2.1.0" },
    { type: "system", text: "Client Console successfully initialized." },
    { type: "system", text: "Enter 'help' to check active API directives." },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isOpen]);

  const commands: Record<string, () => void> = {
    help: () => {
      addOutput(
        <div className="flex flex-col gap-1 text-neutral-500 font-mono text-[11px]">
          <div><span className="text-[#ff6b00] w-24 inline-block font-bold">about</span> : Display personal background overview</div>
          <div><span className="text-[#ff6b00] w-24 inline-block font-bold">skills</span> : Show complete frontend/backend stacks</div>
          <div><span className="text-[#ff6b00] w-24 inline-block font-bold">projects</span> : List key deployed software solutions</div>
          <div><span className="text-[#ff6b00] w-24 inline-block font-bold">contact</span> : Check direct synchronization pathways</div>
          <div><span className="text-[#ff6b00] w-24 inline-block font-bold">resume</span> : Download printable PDF resume</div>
          <div><span className="text-[#ff6b00] w-24 inline-block font-bold">clear</span> : Flush terminal command history</div>
        </div>
      );
    },
    about: () => {
      addOutput(
        "Faishal Rahman Ansari. Computer Engineer and Full Stack Developer based in Bangalore, India. Architecting SaaS interfaces with beautiful typography and clean, editorial whitespaces."
      );
    },
    skills: () => {
      addOutput(
        <div className="flex flex-col gap-1 text-neutral-500 font-mono text-[11px]">
          <div><span className="text-black font-bold">Frontend:</span> React, HTML5, CSS3, Tailwind CSS, JavaScript</div>
          <div><span className="text-black font-bold">Backend:</span> Java, Spring Boot, Node.js, Hibernate</div>
          <div><span className="text-black font-bold">Database:</span> MySQL, PostgreSQL</div>
          <div><span className="text-black font-bold">AI & Tools:</span> Python, IBM Watson AutoAI, Power BI, Git</div>
        </div>
      );
    },
    projects: () => {
      addOutput("Active SaaS Products: IntelliCode Arena (React/Spring Boot), Traffic Sign Detection (Python/CNN), WealthWise (Java/PostgreSQL), NSAP Classifier (IBM AutoAI). Scroll up to check case studies.");
    },
    contact: () => {
      addOutput(
        <div className="flex flex-col gap-1 text-neutral-500 font-mono text-[11px]">
          <div>Email: faishalrahman729580@gmail.com</div>
          <div>Phone: +91 916-203-8134</div>
          <div>GitHub: /Faishal058</div>
          <div>LinkedIn: /in/faishal-rahman-ansari/</div>
        </div>
      );
    },
    resume: () => {
      addOutput("Downloading printable PDF resume...");
      const link = document.createElement("a");
      link.href = "/Faishal_Resume.pdf";
      link.download = "Faishal_Resume.pdf";
      link.click();
    },
    clear: () => {
      setHistory([]);
    },
  };

  const addOutput = (text: string | React.ReactNode) => {
    setHistory((prev) => [...prev, { type: "output", text }]);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    setHistory((prev) => [...prev, { type: "input", text: input }]);
    setInput("");

    if (commands[cmd]) {
      commands[cmd]();
    } else {
      addOutput(`Unknown system directive: '${cmd}'. Type 'help' to review list.`);
    }
  };

  if (!isOpen) {
    return (
      <motion.button
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2.5 px-5 py-3.5 bg-black text-white hover:bg-neutral-800 transition-all duration-300 rounded-full shadow-lg shadow-neutral-200/50"
        data-magnetic="true"
      >
        <TerminalIcon size={14} className="text-[#ff6b00]" />
        <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Terminal</span>
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`fixed z-50 flex flex-col bg-white border border-neutral-200 shadow-2xl overflow-hidden transition-all duration-300 ${
        isExpanded
          ? "inset-6 md:inset-12 rounded-[2rem]"
          : "bottom-8 right-8 w-full max-w-[420px] h-[480px] rounded-[2rem]"
      }`}
    >
      {/* Terminal Window Header */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-[#fafafa] border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff6b00]" />
          <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-bold">faishal@saas-core:~</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 text-neutral-400 hover:text-black transition-colors"
            aria-label="Maximize window"
          >
            <Maximize2 size={10} />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-neutral-400 hover:text-black transition-colors"
            aria-label="Close window"
          >
            <X size={10} />
          </button>
        </div>
      </div>

      {/* Terminal Window Body */}
      <div
        className="flex-1 overflow-y-auto p-5 font-mono text-[11px] leading-relaxed text-neutral-700 bg-white"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="flex flex-col gap-3">
          {history.map((entry, i) => (
            <div key={i} className={`${entry.type === "system" ? "text-neutral-400" : ""}`}>
              {entry.type === "input" && (
                <div className="flex gap-2 text-[#ff6b00] font-bold">
                  <span>❯</span>
                  <span className="text-black">{entry.text}</span>
                </div>
              )}
              {entry.type !== "input" && (
                <div className="text-neutral-500 pl-4 border-l border-neutral-100 py-0.5">
                  {entry.text}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Terminal Window Input */}
      <form onSubmit={handleCommand} className="flex items-center gap-2 px-5 py-4 bg-[#fafafa] border-t border-neutral-100">
        <span className="text-[#ff6b00] font-bold">❯</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-black font-mono text-[11px] placeholder:text-neutral-350"
          placeholder="ENTER API DIRECTIVE (help, about, skills...)"
          autoComplete="off"
          spellCheck="false"
        />
      </form>
    </motion.div>
  );
};
