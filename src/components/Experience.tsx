"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollRevealText } from "@/components/ScrollRevealText";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    period: "Feb 2026 - May 2026 ",
    title: "Java Full Stack Developer Intern",
    company: "Genesis Industry Ready Internship Program",
    location: "Bangalore, India",
    description:
      "Worked within an Agile SDLC environment to develop responsive frontend interfaces and scalable backend services using React, Spring Boot, Hibernate, and REST APIs. Collaborated through Git-based workflows while gaining hands-on experience in full-stack application development and software engineering practices.",
    tech: ["Spring Boot", "React", "REST APIs", "Agile", "Git"],
    icon: <Briefcase className="w-4 h-4" />,
  },
  {
    period: "Sep 2025 — Oct 2025",
    title: "Conversational Data Analytics with LLMs Intern",
    company: "Edunet Foundation — AICTE–VOIS for Tech Program",
    location: "Remote • Bangalore, India",
    description:
      "Worked on conversational data analytics and Large Language Model (LLM) applications through real-world case studies and project-based learning. Explored data analysis workflows, AI-driven insights, and practical business problem-solving across multiple domains.",
    tech: ["LLMs", "Data Analytics", "Artificial Intelligence", "Python", "Conversational AI"],
    icon: <Briefcase className="w-4 h-4" />,
  },
  {
    period: "Jul 2025 — Aug 2025",
    title: "AI & Cloud Intern",
    company: "Edunet Foundation — IBM SkillsBuild Internship",
    location: "Remote • Bangalore, India",
    description:
      "Worked on AI-driven applications and cloud-based workflows using Python, machine learning models, and REST API integrations. Gained practical experience in intelligent automation, data processing, and scalable cloud technologies through project-based learning and industry mentorship.",
    tech: ["Artificial Intelligence", "Cloud Computing", "Python", "Machine Learning", "IBM SkillsBuild"],
    icon: <Briefcase className="w-4 h-4" />,
  },
];

const education = {
  period: "2022 – 2026",
  title: "B.E in Computer Science & Engineering",
  institution: "Sambhram Institute of Technology",
  location: "Bengaluru, India",
  description:
    "Graduated with an 8.54 CGPA while building strong foundations in software engineering, database systems, machine learning, data structures, algorithms, and full-stack application development.",
  skills: ["Data Structures & Algorithms", "DBMS", "Operating System", "Computer Networks", "Software Engineering"],
  icon: <GraduationCap className="w-4 h-4" />,
};

export const Experience = () => {
  const textRevealVariants = {
    hidden: { y: "30px", opacity: 0, filter: "blur(6px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="experience" className="relative min-h-screen lg:h-screen lg:min-h-[700px] w-full flex items-center bg-white border-b border-neutral-100 overflow-hidden pt-24 lg:pt-20 pb-12 lg:py-0">
      <div className="container px-6 md:px-12 mx-auto relative z-10 pt-4 pb-12 lg:py-0">

        {/* Section Header */}
        <div className="max-w-3xl mb-8 lg:mb-10">
          <ScrollRevealText 
            text="02 // EXPERIENCE & EDUCATION"
            as="h2"
            className="text-[#ff6b00] font-mono text-[10px] tracking-[0.25em] uppercase font-bold mb-3"
          />
          <ScrollRevealText
            text="Professional journey & technical experience."
            as="h3"
            className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-medium tracking-tight mb-4 lg:mb-6 font-serif leading-tight text-black"
            highlightKeywords={["journey", "technical experience"]}
            delay={0.1}
          />
        </div>

        {/* Split Grid: Experience Left, Certifications Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">

          {/* Left Column: Timeline list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px" }}
            className="lg:col-span-7 flex flex-col gap-6 lg:gap-8 xl:gap-10 relative pl-8"
          >
            {/* Draw vertical timeline line smoothly on scroll */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 top-1.5 w-[1px] bg-neutral-200 origin-top"
            />

            {experiences.map((exp) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className="relative group flex flex-col items-start"
              >
                {/* Custom animated orange bullet with outer pulsing ring */}
                <div className="absolute -left-[37px] top-1 flex items-center justify-center">
                  <motion.div 
                    className="w-2.5 h-2.5 rounded-full bg-neutral-200 group-hover:bg-[#ff6b00] border-2 border-white relative z-10 transition-colors duration-300"
                    whileHover={{ scale: 1.3 }}
                  />
                  <span className="absolute w-5 h-5 rounded-full bg-[#ff6b00]/10 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300 pointer-events-none" />
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-1.5 text-neutral-400 font-mono text-[9px] uppercase tracking-wider font-bold">
                  <div className="flex items-center gap-1">
                    <Calendar size={10} className="text-[#ff6b00]" />
                    <span>{exp.period}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <MapPin size={10} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <h4 className="text-sm lg:text-base font-bold text-black mb-0.5 group-hover:text-[#ff6b00] transition-colors duration-300 font-sans">
                  {exp.title}
                </h4>
                <p className="text-zinc-500 font-semibold text-xs mb-2">{exp.company}</p>
                {Array.isArray(exp.description) ? (
                  exp.description.map((p, pIdx) => (
                    <p key={pIdx} className="text-neutral-500 text-xs leading-relaxed font-light mb-1.5 last:mb-3">{p}</p>
                  ))
                ) : (
                  <p className="text-neutral-500 text-xs leading-relaxed font-light mb-3">{exp.description}</p>
                )}

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, tIdx) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + tIdx * 0.04 }}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="px-2.5 py-1 bg-[#fafafa] border border-neutral-100 text-neutral-500 text-[9px] font-mono rounded-md hover:border-[#ff6b00]/25 hover:bg-[#ff6b00]/5 hover:text-black transition-all duration-300 cursor-default"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Education */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Education Block */}
            <div className="flex flex-col gap-3">
              <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-neutral-400 font-bold">Education</span>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
                className="p-5 md:p-6 border border-neutral-100 bg-[#fafafa] hover:bg-white hover:border-[#ff6b00]/20 hover:shadow-lg transition-all duration-300 group rounded-[2rem]"
              >
                <div className="flex items-start gap-3.5 mb-3.5">
                  <motion.div 
                    whileHover={{ rotate: 8, scale: 1.05 }}
                    className="p-2.5 border border-neutral-100 bg-[#fafafa] group-hover:bg-[#ff6b00] group-hover:border-white transition-all duration-300 shrink-0 rounded-2xl cursor-default"
                  >
                    <div className="text-[#ff6b00] group-hover:text-white group-hover:filter group-hover:brightness-0 group-hover:invert transition-all">
                      {education.icon}
                    </div>
                  </motion.div>
                  <div>
                    <span className="text-[9px] font-mono text-zinc-400 font-bold uppercase tracking-wider block mb-0.5">{education.period}</span>
                    <h4 className="text-sm font-bold text-black group-hover:text-[#ff6b00] transition-colors duration-300 leading-snug font-sans">
                      {education.title}
                    </h4>
                  </div>
                </div>

                <p className="text-zinc-500 font-semibold text-xs mb-2">{education.institution}</p>
                <p className="text-neutral-500 text-xs leading-relaxed font-light mb-3">{education.description}</p>

                <div className="flex flex-wrap gap-2">
                  {education.skills.map((s, sIdx) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + sIdx * 0.04 }}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="px-2.5 py-1 bg-white border border-neutral-100 text-neutral-500 text-[8px] font-mono rounded-md hover:border-[#ff6b00]/25 hover:bg-[#ff6b00]/5 hover:text-black transition-all duration-300 cursor-default"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
