"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollRevealText } from "@/components/ScrollRevealText";
import { Trophy, Award } from "lucide-react";

const certifications = [
  {
    title: "1st Place — Invincia 2024 Hackathon",
    issuer: "Presidency University",
    description: "Awarded 1st place for building an innovative hyperlocal vendor delivery platform (Quick Needs).",
    icon: <Trophy className="w-4 h-4" />,
  },
  {
    title: "AWS APAC Solutions Architecture",
    issuer: "Forage Virtual Experience",
    description: "Designed scalable, high-availability hosting environments using AWS Elastic Beanstalk and RDS.",
    icon: <Award className="w-4 h-4" />,
  },
  {
    title: "Getting Started with AI",
    issuer: "IBM Skills Build",
    description: "Acquired AI foundations covering neural networks, model training, and supervised pipelines.",
    icon: <Award className="w-4 h-4" />,
  },
  {
    title: "Journey to Cloud — Cloud Basics",
    issuer: "IBM Skills Build",
    description: "Studied fundamental architectures of virtualized cloud instances and containerization models.",
    icon: <Award className="w-4 h-4" />,
  },
];

export const Certifications = () => {
  const textRevealVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="certifications" className="py-28 relative overflow-hidden bg-white border-b border-neutral-100">
      <div className="container px-6 md:px-12 mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <ScrollRevealText
            text="04 // Certifications & Achievements"
            as="h2"
            className="text-[#ff6b00] font-mono text-[10px] tracking-[0.25em] uppercase font-bold mb-4"
          />
          <ScrollRevealText
            text="Professional certifications & Technical Achievements"
            as="h3"
            className="text-4xl md:text-5xl font-medium tracking-tight mb-8 font-serif leading-tight text-black"
            highlightKeywords={["certifications", "Technical Achievements"]}
            delay={0.1}
          />
        </div>

        {/* 4-Column Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 border border-neutral-100 bg-[#fafafa] hover:bg-white hover:border-[#ff6b00]/30 hover:shadow-lg transition-all duration-500 group flex flex-col justify-between rounded-[2rem] min-h-[220px]"
            >
              <div>
                <div className="p-2.5 border border-neutral-100 bg-[#fafafa] group-hover:bg-[#ff6b00] group-hover:border-white transition-all duration-300 rounded-2xl shrink-0 w-fit mb-6">
                  <div className="text-[#ff6b00] group-hover:text-white group-hover:filter group-hover:brightness-0 group-hover:invert transition-all">
                    {cert.icon}
                  </div>
                </div>
                <h4 className="text-[11px] uppercase tracking-wider font-bold text-black mb-1.5 leading-snug font-sans">
                  {cert.title}
                </h4>
                <span className="text-[9px] font-mono text-zinc-400 block mb-3">{cert.issuer}</span>
                <p className="text-neutral-500 text-[11px] font-light leading-relaxed">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
