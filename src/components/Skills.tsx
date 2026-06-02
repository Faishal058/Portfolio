"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollRevealText } from "@/components/ScrollRevealText";

const skillCategories = [
  {
    category: "Frontend",
    description: "Building responsive, accessible, and high-performance user interfaces using modern frontend technologies.",
    skills: [
      { name: "React", level: 85 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 88 },
      { name: "Tailwind CSS", level: 85 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    category: "Backend",
    description: "Developing scalable backend systems, REST APIs, and business logic for modern web applications.",
    skills: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    category: "Database",
    description: "Designing efficient database architectures, managing data integrity, and optimizing query performance.",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  {
    category: "AI & Tools",
    description: "Applying AI, machine learning, analytics, and development tools to build intelligent software solutions.",
    skills: [
      { name: "Python", level: 85 },
      { name: "IBM Watson", level: 80 },
      { name: "Power BI", level: 75 },
      { name: "RPA", level: 70 },
      { name: "Git/GitHub", level: 90 },
    ],
  },
];



export const Skills = () => {
  const textRevealVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="skills" className="relative min-h-screen lg:h-screen lg:min-h-[680px] w-full flex items-center bg-white border-b border-neutral-100 overflow-hidden pt-24 lg:pt-20 pb-12 lg:py-0">
      <div className="container px-6 md:px-12 mx-auto relative z-10 pt-4 pb-12 lg:py-0">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 lg:mb-10">
          <ScrollRevealText
            text="05 // SKILLS & TECHNOLOGIES"
            as="h2"
            className="text-[#ff6b00] font-mono text-[10px] tracking-[0.25em] uppercase font-bold mb-3"
          />
          <ScrollRevealText
            text="Technical skills & core technologies."
            as="h3"
            className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-medium tracking-tight mb-4 lg:mb-6 font-serif leading-tight text-black"
            highlightKeywords={["Technical skills", "core technologies"]}
            delay={0.1}
          />
        </div>

        {/* Categories Grid - Symmetrical SaaS rounded cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="p-5 md:p-6 bg-[#fafafa] border border-neutral-100 hover:border-[#ff6b00]/20 hover:bg-white hover:shadow-md transition-all duration-300 rounded-[2rem] group"
            >
              <span className="text-neutral-400 font-mono text-[8px] font-bold block mb-1">CAT // 0{index + 1}</span>
              <h4 className="text-lg font-bold text-black mb-1.5 uppercase tracking-wide">
                {cat.category}
              </h4>
              <p className="text-neutral-400 text-xs font-light leading-relaxed mb-4 border-b border-neutral-100 pb-3">
                {cat.description}
              </p>

              <div className="space-y-3.5">
                {cat.skills.map((skill, i) => (
                  <div key={skill.name} className="relative flex flex-col">
                    <div className="flex justify-between items-baseline mb-0.5">
                      <span className="text-xs font-semibold text-neutral-600 group-hover:text-black transition-colors font-sans">
                        {skill.name}
                      </span>
                      <span className="text-[9px] font-mono text-[#ff6b00] font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Minimalist warm orange progress line */}
                    <div className="h-[2px] w-full bg-neutral-200/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.04, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
