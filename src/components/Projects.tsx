"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollRevealText } from "@/components/ScrollRevealText";
import { Github, Layers, Database, Compass, BarChart3, TrendingUp, Store, ArrowUpRight, Brain } from "lucide-react";

const categories = ["All", "AI & ML", "Full Stack", "Data Analytics"];

const projects = [
  {
    title: "PRIVACY-PRESERVING PARKINSON'S DETECTION",
    description: "Designed an AI-powered Parkinson’s Disease detection framework using speech-based biomarkers, Mel-spectrograms, and CNN-LSTM networks. Integrated machine unlearning techniques to enhance data privacy and evaluated robustness against adversarial attacks, balancing diagnostic performance with patient data protection.",
    category: "AI & ML",
    tech: ["TensorFlow", "Python", "DeepLearning", "CNN", "LSTM", "Librosa", "ScikitLearn", "MachineLearning"],
    github: "https://github.com/Faishal058",
    icon: <Brain className="w-6 h-6 text-[#ff6b00]" />,
    features: [
      "Speech-based disease detection",
      "CNN-LSTM deep learning architecture",
      "Privacy-preserving machine unlearning",
      "Adversarial attack evaluation",
    ],
  },
  {
    title: "WEALTHWISE",
    description: "A portfolio management and financial analytics platform designed to help users monitor investments, track financial growth, and gain data-driven insights through an interactive dashboard and secure account management system.",
    category: "Full Stack",
    tech: ["Java", "SpringBoot", "PostgreSQL", "React"],
    github: "https://github.com/Faishal058/VTU_INTERN_2026_Team8_JAVA.git",
    deployment: "https://wealthwise-financials.vercel.app",
    icon: <Layers className="w-6 h-6 text-[#ff6b00]" />,
    features: ["Financial portfolio tracking", "Analytics dashboard", "Secure user management"],
  },
  {
    title: "AIRBNB HOTEL BOOKING ANALYSIS",
    description: "Performed exploratory data analysis on Airbnb booking datasets to identify pricing factors, customer preferences, and market trends. Developed visual reports and analytical models to generate insights that support strategic business and hospitality decisions.",
    category: "Data Analytics",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "ScikitLearn"],
    github: "https://github.com/Faishal058/VOIS_AICTE_Oct2025_FaishalRahmanAnsari.git",
    icon: <TrendingUp className="w-6 h-6 text-[#ff6b00]" />,
    features: [
      "Exploratory Data Analysis (EDA)",
      "Data visualization dashboards",
      "Market trend identification",
      "Predictive analytics insights",
    ],
  },
  {
    title: "NSAP SCHEME CLASSIFIER",
    description: "Designed and deployed an AI-driven classification system using IBM Watson AutoAI to automate welfare scheme recommendations under India's National Social Assistance Programme (NSAP). Leveraged machine learning and cloud deployment capabilities to streamline applicant evaluation, improve decision accuracy, and support efficient public service delivery.",
    category: "AI & ML",
    tech: ["IBMWatson", "AutoAI", "MachineLearning", "IBMCloud", "Python"],
    github: "https://github.com/Faishal058/NSAP-Scheme-Classifier.git",
    icon: <Database className="w-6 h-6 text-[#ff6b00]" />,
    features: [
      "Automated welfare scheme classification",
      "IBM Watson AutoAI model optimization",
      "Real-time prediction and deployment",
      "High-accuracy eligibility recommendations",
    ],
  },
  {
    title: "NETFLIX CONTENT TRENDS ANALYSIS",
    description: "Performed exploratory data analysis on Netflix's content library to identify growth patterns, genre trends, and regional content contributions. Developed visual dashboards and business insights to support data-driven decision-making and content strategy recommendations.",
    category: "Data Analytics",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "DataAnalytics"],
    github: "https://github.com/Faishal058/VOIS_AICTE_Oct2025_MajorProject_Faishal-Rahman-Ansari.git",
    icon: <BarChart3 className="w-6 h-6 text-[#ff6b00]" />,
    features: [
      "Exploratory Data Analysis (EDA)",
      "Data visualization and reporting",
      "Trend identification and forecasting",
      "Business intelligence insights",
    ],
  },
  {
    title: "VOIS CUSTOMER INSIGHTS & CONVERSATIONAL ANALYTICS",
    description: "Engineered an enterprise-grade customer insights and conversational data analytics platform during the AICTE-VOIS internship program. Leveraged Python, natural language processing (NLP), and Large Language Models (LLMs) to perform exploratory data analysis, extract sentiment scores, classify user intents, and generate automated business intelligence reports.",
    category: "Data Analytics",
    tech: ["Python", "Pandas", "LLMs", "NLP", "DataAnalytics", "Matplotlib", "Seaborn"],
    github: "https://github.com/Faishal058/VOIS_AICTE_Oct2025_MajorProject_Faishal-Rahman-Ansari.git",
    icon: <BarChart3 className="w-6 h-6 text-[#ff6b00]" />,
    features: [
      "Exploratory data analysis & business trend forecasting",
      "LLM-based automatic conversational intent tagging",
      "Interactive data visualization & sentiment scoring",
      "Automated business intelligence insight generation",
    ],
  },
  {
    title: "QUICK-NEEDS",
    description: "Front-end of a local vendor grocery web application designed during a hackathon to upscale the profits of local vendors. Features an intuitive user-friendly interface for customers and vendors, a vendor-approved customer registration system, and a time slot planning system for scheduled weekly/monthly deliveries.",
    category: "Full Stack",
    tech: ["HTML", "CSS", "JavaScript", "Hackathon"],
    github: "https://github.com/Faishal058/Quick-Needs.git",
    icon: <Store className="w-6 h-6 text-[#ff6b00]" />,
    features: [
      "Easy and user-friendly interface",
      "Vendor-approved customer registration",
      "Custom weekly/monthly time slot plans",
      "Local vendor business enablement",
    ],
  },
];

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, filter: "blur(6px)", scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      viewport={{ once: true, margin: "0px" }}
      className="group relative border border-neutral-100 bg-white flex flex-col justify-between overflow-hidden p-5 md:p-6 hover:border-[#ff6b00]/30 hover:shadow-xl transition-all duration-500 rounded-[2.5rem] min-h-[380px] lg:min-h-[380px] xl:min-h-[400px]"
      data-cursor="project"
    >
      {/* SaaS Card Header */}
      <div className="relative w-full h-16 flex items-center justify-between mb-4 border-b border-neutral-100 pb-3">
        <div className="p-2.5 border border-neutral-100 bg-[#fafafa] group-hover:bg-[#ff6b00] group-hover:border-white transition-all duration-300 rounded-2xl shrink-0">
          {/* Mapped custom styling for icons on hover */}
          <div className="group-hover:text-white group-hover:filter group-hover:brightness-0 group-hover:invert transition-all">
            {project.icon}
          </div>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-bold uppercase tracking-wider text-black bg-[#fafafa] px-3 py-1 border border-neutral-100 rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Details */}
      <div>
        <h3 className="text-lg lg:text-xl font-bold text-black mb-2 font-sans tracking-tight uppercase leading-snug group-hover:text-[#ff6b00] transition-colors">
          {project.title}
        </h3>
        <p className="text-neutral-500 text-xs font-light leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Feature listings */}
        <ul className="space-y-1 mb-4 lg:mb-5">
          {project.features.map((feat) => (
            <li key={feat} className="text-[9px] font-mono text-neutral-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#ff6b00] rounded-full inline-block" />
              {feat}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech list & Action links */}
      <div className="flex items-end justify-between border-t border-neutral-100 pt-4">
        <div className="flex flex-wrap gap-x-2 gap-y-1 max-w-[70%]">
          {project.tech.map((t) => (
            <span key={t} className="text-[9px] font-mono text-zinc-400">
              #{t.replace(/[\s&/]/g, "")}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-neutral-100 hover:border-black text-neutral-400 hover:text-black bg-[#fafafa] transition-all rounded-full flex items-center justify-center shadow-sm"
              aria-label={`View ${project.title} on GitHub`}
              data-magnetic="true"
            >
              <Github size={13} />
            </a>
          )}
          {project.deployment && (
            <a
              href={project.deployment}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-[#ff6b00]/20 hover:border-[#ff6b00] text-[#ff6b00] bg-[#ff6b00]/5 transition-all rounded-full flex items-center justify-center shadow-sm"
              aria-label={`View live deployment of ${project.title}`}
              data-magnetic="true"
            >
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Show only first 3 projects under "All" tab unless showAll is toggled
  const filteredProjects =
    activeTab === "All"
      ? (showAll ? projects : projects.slice(0, 3))
      : projects.filter((p) => p.category === activeTab);

  const textRevealVariants = {
    hidden: { y: "30px", opacity: 0, filter: "blur(6px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="projects" className="relative min-h-screen w-full flex items-center bg-[#fafafa] border-b border-neutral-100 overflow-hidden pt-24 lg:pt-28 pb-24">
      <div className="container px-6 md:px-12 mx-auto relative z-10 pt-4">

        {/* Section Header & Minimal SaaS Underline Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 lg:mb-10 gap-6">
          <div className="max-w-xl">
            <ScrollRevealText
              text="03 // FEATURED PROJECTS"
              as="h2"
              className="text-[#ff6b00] font-mono text-[10px] tracking-[0.25em] uppercase font-bold mb-3"
            />
            <ScrollRevealText
              text="Selected projects & engineering solutions."
              as="h3"
              className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-medium tracking-tight uppercase font-serif leading-tight text-black"
              highlightKeywords={["Selected projects", "engineering solutions"]}
              delay={0.1}
            />
          </div>

          {/* Minimal tab controller */}
          <div className="flex gap-2 border-b border-neutral-100 pb-2 self-start lg:self-auto">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  // Reset showAll when switching categories for a consistent UX
                  setShowAll(false);
                }}
                className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${activeTab === tab ? "text-[#ff6b00]" : "text-neutral-400 hover:text-neutral-600"
                  }`}
                data-magnetic="true"
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeSaaSTab"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#ff6b00]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column SaaS Rounded Card Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More/Less toggle button when viewing "All" and there are more than 3 projects */}
        {activeTab === "All" && projects.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 border border-neutral-100 hover:border-black text-black font-bold uppercase tracking-wider text-[10px] bg-white hover:bg-neutral-50 transition-all duration-350 rounded-full flex items-center gap-2 shadow-sm"
              data-magnetic="true"
            >
              <span>{showAll ? "Show Less" : "Show All Projects"}</span>
              <ArrowUpRight
                size={12}
                className={`transform transition-transform duration-350 ${
                  showAll ? "rotate-[135deg]" : ""
                } text-[#ff6b00]`}
              />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
