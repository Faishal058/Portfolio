"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ScrollRevealText } from "@/components/ScrollRevealText";
import { Github, Linkedin, Mail, ArrowUpRight, CheckCircle2, ChevronRight, FileText, Smartphone, DollarSign, MessageSquare } from "lucide-react";

// Premium Interactive SaaS Dashboard Preview
const SaaSPreview = () => {
  const [activeTask, setActiveTask] = useState(0);

  const tasks = [
    { id: 0, title: "Build scalable real-time collaboration systems", status: "Done", time: "WebSocket" },
    { id: 1, title: "Optimize AI model performance pipelines", status: "Active", time: "TensorFlow" },
    { id: 2, title: "Develop secure backend API architecture", status: "Done", time: "PostgreSQL" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="relative w-full max-w-md lg:max-w-[28rem] xl:max-w-[32rem] 2xl:max-w-xl mx-auto p-4 md:p-5 bg-white border border-neutral-100 rounded-3xl shadow-xl shadow-neutral-100/50 flex flex-col gap-4"
    >

      {/* SaaS Dashboard Header */}
      <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-red-500 flex items-center justify-center text-white text-xs font-bold font-serif shadow-md">
            F
          </div>
          <div>
            <h4 className="text-xs font-bold text-black uppercase tracking-wider font-sans">FAISHAL_ENGINE</h4>
            <span className="text-[9px] text-zinc-400 font-mono">Engineering Workspace</span>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
        </div>
      </div>

      {/* Main SaaS Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">

        {/* Left pane: Milestones & Workflow Tracker */}
        <div className="flex flex-col gap-3">
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-400">Milestones</span>

          <div className="flex flex-col gap-2">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => setActiveTask(task.id)}
                className={`p-2.5 border rounded-2xl flex items-center justify-between transition-all duration-300 ${activeTask === task.id
                  ? "bg-black border-black text-white"
                  : "bg-[#fafafa] border-neutral-100 hover:bg-neutral-50 text-neutral-850"
                  }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <CheckCircle2 size={12} className={activeTask === task.id ? "text-orange-400" : "text-neutral-400"} />
                  <span className="text-[10px] font-bold truncate tracking-wide">{task.title}</span>
                </div>
                <span className="text-[8px] font-mono opacity-50 shrink-0">{task.status}</span>
              </div>
            ))}
          </div>

          {/* Workflow progress block */}
          <div className="p-3 bg-[#fafafa] border border-neutral-100 rounded-2xl flex flex-col gap-1.5">
            <div className="flex justify-between items-baseline">
              <span className="text-[9px] font-bold uppercase tracking-wider text-black">B.Tech CSE Core (8.54 CGPA)</span>
              <span className="text-[10px] font-mono text-[#ff6b00] font-bold">85.4%</span>
            </div>
            <div className="h-[3px] bg-neutral-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "85.4%" }}
                className="h-full bg-gradient-to-r from-orange-500 to-red-500"
              />
            </div>
          </div>
        </div>

        {/* Right pane: Invoice summary & Messaging */}
        <div className="flex flex-col gap-3">
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-400">GitHub Activity</span>

          {/* Invoice Card */}
          <div className="p-3.5 bg-[#fafafa] border border-neutral-100 rounded-2xl flex items-center gap-4">
            <div className="p-2.5 bg-white rounded-xl border border-neutral-100 text-[#ff6b00] shadow-sm flex items-center justify-center">
              <Github size={14} />
            </div>
            <div>
              <span className="text-[8px] font-mono uppercase tracking-widest text-zinc-400 block mb-0.5">GITHUB ACTIVITY</span>
              <h5 className="text-[11px] font-bold text-black tracking-tight font-sans">20+ Software Repos</h5>
            </div>
          </div>

          {/* Recruiter Live Sync */}
          <div className="p-3 bg-[#fafafa] border border-neutral-100 rounded-2xl flex flex-col gap-2.5 h-[6.8rem] overflow-hidden">
            <div className="flex items-center gap-1.5 text-zinc-400">
              <MessageSquare size={10} />
              <span className="text-[8px] font-mono uppercase tracking-widest">Recruiter Sync Channel</span>
            </div>
            <div className="flex flex-col gap-1.5 text-[9px] leading-snug">
              <div className="bg-white p-2 border border-neutral-100 rounded-xl rounded-tl-none self-start max-w-[90%]">
                <span className="font-bold text-black">Recruiter: </span>Strong full-stack foundation with impressive AI project integration.
              </div>
              <div className="bg-black text-white p-2 rounded-xl rounded-tr-none self-end max-w-[90%] mr-16 shadow-sm">
                Available for opportunities
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Mobile Preview Device Card */}
      <div className="absolute -bottom-16 -right-4 sm:-bottom-18 sm:-right-6 hidden sm:flex w-36 p-2.5 bg-white/20 dark:bg-zinc-950/20 backdrop-blur-[4px] border border-neutral-100 dark:border-white/10 rounded-2xl shadow-xl shadow-neutral-200/50 dark:shadow-black/40 flex-col gap-1.5 pointer-events-none animate-float">
        <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 mb-0.5">
          <Smartphone size={10} />
          <span className="text-[8px] font-mono uppercase tracking-widest">ENGINEERING</span>
        </div>
        <div className="h-[2px] bg-[#ff6b00] w-2/3" />
        <span className="text-[9px] font-bold text-black dark:text-white mt-0.5 uppercase tracking-wide leading-none">PRODUCT DEV</span>
        <div className="bg-zinc-100/50 dark:bg-zinc-900/40 p-1.5 rounded-lg text-[8px] leading-normal font-semibold text-zinc-600 dark:text-zinc-300">
          Transforming ideas into modern products via clean design & real problem solving.
        </div>
      </div>
    </motion.div>
  );
};

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen lg:h-screen lg:min-h-[680px] w-full flex items-center bg-[#ffffff] overflow-hidden pt-24 lg:pt-20 border-b border-neutral-100"
    >
      <div className="absolute inset-0 grid-outline-cols opacity-20 pointer-events-none" />

      <div className="container px-6 md:px-12 mx-auto relative z-10 pt-4 pb-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* Left Text Column: Massive Serif Typography */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">

            {/* SaaS Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#ff6b00]/10 bg-[#ff6b00]/5 text-[#ff6b00] text-[9px] font-bold uppercase tracking-[0.2em] mb-4 lg:mb-5 rounded-full"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ff6b00]"></span>
              </span>
              Faishal Rahman Ansari
            </motion.div>

             {/* Sub-label */}
            <ScrollRevealText
              text="FULL STACK & AI ENGINEER"
              as="p"
              delay={0.05}
              className="text-[#ff6b00] font-mono text-[10px] tracking-[0.3em] uppercase font-bold mb-2 lg:mb-3"
            />

            {/* Huge Serif Headline */}
            <ScrollRevealText
              text="Building scalable software, AI-powered systems & modern digital products."
              as="h1"
              className="text-4xl sm:text-6xl lg:text-[3.2rem] xl:text-[4.2rem] 2xl:text-[4.6rem] font-medium tracking-tight mb-5 lg:mb-6 leading-[1.1] text-black font-serif"
              highlightKeywords={["AI-powered systems"]}
              delay={0.15}
            />

            {/* Tagline */}
            <ScrollRevealText
              text="Focused on building scalable applications, interactive platforms, and AI-driven systems using modern development practices, clean architecture, and performance-oriented engineering."
              as="p"
              type="lines"
              delay={0.4}
              className="text-sm md:text-base lg:text-sm xl:text-base text-zinc-500 max-w-lg leading-relaxed font-light mb-6 lg:mb-8"
            />

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap items-center gap-3 lg:gap-4 w-full sm:w-auto"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -2, boxShadow: "0 10px 20px -5px rgba(230, 81, 0, 0.25)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="w-full sm:w-auto text-center px-9 py-3.5 bg-black text-white font-bold uppercase tracking-wider text-[10px] rounded-full flex items-center justify-center gap-1.5 shadow-md shadow-zinc-200/50 group"
                data-magnetic="true"
              >
                <span>View Projects</span>
                <ArrowUpRight size={12} className="text-[#ff6b00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </motion.a>

              <motion.a
                href="/Faishal_Resume.pdf"
                download
                whileHover={{ scale: 1.04, y: -2, borderColor: "#ff6b00", color: "#ff6b00" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="w-full sm:w-auto text-center px-8 py-3.5 border border-neutral-200 bg-white text-neutral-600 font-bold uppercase tracking-wider text-[10px] rounded-full flex items-center justify-center gap-1.5 transition-colors duration-300 group"
                data-magnetic="true"
              >
                <FileText size={11} className="text-neutral-400 group-hover:text-[#ff6b00] group-hover:rotate-6 transition-all duration-300" />
                <span>Resume</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2, borderColor: "#ff6b00", color: "#ff6b00" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="w-full sm:w-auto text-center px-8 py-3.5 border border-neutral-200 bg-white text-neutral-600 font-bold uppercase tracking-wider text-[10px] rounded-full flex items-center justify-center gap-1.5 transition-colors duration-300"
                data-magnetic="true"
              >
                <span>Contact</span>
              </motion.a>
            </motion.div>

            {/* Social profiles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex items-center gap-3 mt-6 lg:mt-8"
            >
              <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-neutral-400 mr-2">Digital Core:</span>
              <a
                href="https://github.com/Faishal058"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-neutral-100 text-neutral-400 hover:text-black hover:border-black bg-white transition-all rounded-full flex items-center justify-center shadow-sm"
                aria-label="GitHub"
                data-magnetic="true"
              >
                <Github size={13} />
              </a>
              <a
                href="https://www.linkedin.com/in/faishal-rahman-ansari/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-neutral-100 text-neutral-400 hover:text-black hover:border-black bg-white transition-all rounded-full flex items-center justify-center shadow-sm"
                aria-label="LinkedIn"
                data-magnetic="true"
              >
                <Linkedin size={13} />
              </a>
              <a
                href="mailto:faishalrahman729580@gmail.com"
                className="p-2 border border-neutral-100 text-neutral-400 hover:text-black hover:border-black bg-white transition-all rounded-full flex items-center justify-center shadow-sm"
                aria-label="Email"
                data-magnetic="true"
              >
                <Mail size={13} />
              </a>
            </motion.div>

          </div>

          {/* Right SaaS Dashboard Column */}
          <div className="lg:col-span-6 relative z-10 flex items-center justify-center lg:-translate-y-6">
            <SaaSPreview />
          </div>

        </div>
      </div>
    </section>
  );
};
