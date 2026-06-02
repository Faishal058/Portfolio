"use client";

import { motion } from "framer-motion";
import { ScrollRevealText } from "@/components/ScrollRevealText";
import { Code2, Brain, AppWindow, Cpu } from "lucide-react";

const stats = [
  { label: "PROJECTS BUILT", value: "15+" },
  { label: "TECHNOLOGIES USED", value: "10+" },
  { label: "GITHUB REPOSITORIES", value: "20+" },
  { label: "B.E CSE CGPA", value: "8.54" },
];

const highlights = [
  {
    icon: <Code2 className="w-4 h-4" />,
    title: "FULL STACK DEVELOPMENT",
    description: "Building responsive and scalable web applications using React, Tailwind CSS, Spring Boot, REST APIs, and modern backend architectures.",
  },
  {
    icon: <Brain className="w-4 h-4" />,
    title: "AI & MACHINE LEARNING",
    description: "Developing intelligent systems and computer vision applications using Python, TensorFlow, OpenCV, and IBM Watson technologies.",
  },
  {
    icon: <Cpu className="w-4 h-4" />,
    title: "SOFTWARE ENGINEERING",
    description: "Applying clean architecture, structured development practices, and problem-solving methodologies to create efficient software systems.",
  },
  {
    icon: <AppWindow className="w-4 h-4" />,
    title: "PRODUCT DEVELOPMENT",
    description: "Transforming ideas into modern digital products through structured engineering, responsive design, and real-world problem solving.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#fafafa] border-b border-neutral-100">
      <div className="container px-6 md:px-12 mx-auto">

        {/* Section Header */}
        <div className="max-w-4xl mb-12">
          <ScrollRevealText 
            text="01 // About Me"
            as="h2"
            className="text-[#ff6b00] font-mono text-[10px] tracking-[0.25em] uppercase font-bold mb-4"
          />
          
          <ScrollRevealText
            text="Engineering modern solutions through clean code and smart system design."
            as="h3"
            className="text-4xl md:text-5xl font-medium tracking-tight mb-8 font-serif leading-tight text-black"
            highlightKeywords={["clean code", "smart system design"]}
            delay={0.1}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <ScrollRevealText
              text="I’m Faishal Rahman Ansari, a Computer Engineering student passionate about full-stack development, artificial intelligence, and modern software engineering. Having completed my B.E in Computer Science & Engineering at Sambhram Institute of Technology with an 8.54 CGPA, I enjoy building scalable applications and intelligent systems that solve real-world problems."
              as="p"
              type="lines"
              className="text-[13px] text-neutral-500 leading-relaxed font-light"
              delay={0.2}
            />
            <ScrollRevealText
              text="My expertise includes full-stack web development, backend system design, AI integration, and database-driven application development using technologies such as React, Spring Boot, Node.js, PostgreSQL, and IBM Watson. I am passionate about developing scalable, efficient, and user-focused digital solutions that combine modern engineering practices with real-world impact."
              as="p"
              type="lines"
              className="text-[13px] text-neutral-500 leading-relaxed font-light"
              delay={0.3}
            />
          </div>
        </div>

        {/* Stats Grid - Premium white shadow panels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 md:p-8 bg-white border border-neutral-100/60 rounded-3xl shadow-sm hover:shadow-md hover:border-neutral-200 transition-all duration-300 group"
            >
              <div className="text-3xl md:text-4xl font-black text-black tracking-tight mb-2 font-serif group-hover:text-[#ff6b00] transition-colors">
                {stat.value}
              </div>
              <div className="text-[8px] text-neutral-400 uppercase tracking-widest font-mono font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Columns - Centered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-6 bg-white border border-neutral-100 rounded-3xl hover:border-[#ff6b00]/30 transition-all duration-300 shadow-sm"
            >
              <div className="p-2.5 border border-neutral-100 text-[#ff6b00] bg-[#fafafa] transition-all shrink-0 rounded-2xl w-fit mb-6">
                {item.icon}
              </div>
              <h4 className="text-[11px] uppercase tracking-widest font-bold text-black mb-3 font-sans">
                {item.title}
              </h4>
              <p className="text-neutral-500 text-xs leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
