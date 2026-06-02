"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ScrollRevealText } from "@/components/ScrollRevealText";
import { Mail, MapPin, Send, Github, Linkedin, Phone } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "e47b2c01-70bf-40bd-b6de-3023e387063d", // Fallback key placeholder
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Faishal Rahman Portfolio",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("Web3Forms Submission Failed:", result);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Web3Forms Submission Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const textRevealVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="contact" className="relative min-h-screen lg:h-screen lg:min-h-[700px] w-full flex items-center bg-[#fafafa] border-b border-neutral-100 overflow-hidden pt-24 lg:pt-20 pb-12 lg:py-0">
      <div className="container px-6 md:px-12 mx-auto relative z-10 pt-4 pb-12 lg:py-0">

        {/* Section Header */}
        <div className="max-w-2xl mb-8 lg:mb-10">
          <ScrollRevealText 
            text="06 // Get in Touch"
            as="h2"
            className="text-[#ff6b00] font-mono text-[10px] tracking-[0.25em] uppercase font-bold mb-3"
          />
          <ScrollRevealText
            text="Let's build something meaningful together"
            as="h3"
            className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-medium tracking-tight mb-4 lg:mb-6 font-serif leading-tight text-black"
            highlightKeywords={["build something", "meaningful together"]}
            delay={0.1}
          />
        </div>

        {/* Symmetric dashboard grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto border border-neutral-100 bg-white rounded-[2.5rem] p-5 md:p-8 lg:p-10 shadow-sm">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-6 lg:space-y-8">
              <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-neutral-400 font-bold">Contact Information</span>

              <div className="space-y-4 lg:space-y-5">
                <a
                  href="mailto:faishalrahman729580@gmail.com"
                  className="flex items-start gap-4 text-neutral-500 hover:text-black transition-colors group"
                >
                  <div className="p-3 border border-neutral-100 bg-[#fafafa] group-hover:bg-[#ff6b00] group-hover:text-white group-hover:border-white transition-all rounded-2xl shrink-0">
                    <Mail size={14} />
                  </div>
                  <div>
                    <span className="text-[8px] font-mono uppercase tracking-widest text-neutral-400 block mb-0.5 font-bold">Email</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-black">faishalrahman729580@gmail.com</span>
                  </div>
                </a>

                <a
                  href="tel:+919162038134"
                  className="flex items-start gap-4 text-neutral-500 hover:text-black transition-colors group"
                >
                  <div className="p-3 border border-neutral-100 bg-[#fafafa] group-hover:bg-[#ff6b00] group-hover:text-white group-hover:border-white transition-all rounded-2xl shrink-0">
                    <Phone size={14} />
                  </div>
                  <div>
                    <span className="text-[8px] font-mono uppercase tracking-widest text-neutral-400 block mb-0.5 font-bold">Phone</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-black">+91 916-203-8134</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-neutral-500">
                  <div className="p-3 border border-neutral-100 bg-[#fafafa] rounded-2xl shrink-0">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <span className="text-[8px] font-mono uppercase tracking-widest text-neutral-400 block mb-0.5 font-bold">Location</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-black font-sans">Bangalore, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-8 pt-6 border-t border-neutral-100 flex flex-col gap-3">
              <span className="text-[8px] font-mono uppercase tracking-[0.25em] text-neutral-400 font-bold">Connect Online</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Faishal058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-neutral-100 text-neutral-450 hover:text-black hover:border-black bg-[#fafafa] transition-all rounded-full"
                  data-magnetic="true"
                >
                  <Github size={13} />
                </a>
                <a
                  href="https://www.linkedin.com/in/faishal-rahman-ansari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-neutral-100 text-neutral-455 hover:text-black hover:border-black bg-[#fafafa] transition-all rounded-full"
                  data-magnetic="true"
                >
                  <Linkedin size={13} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5">
              {/* Honeypot Spam Protection Field */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[8px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-100 text-black focus:outline-none focus:border-[#ff6b00] transition-colors rounded-2xl placeholder:text-neutral-300 text-xs font-semibold text-center"
                    placeholder="ENTER YOUR FULL NAME"
                    autoComplete="off"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[8px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-100 text-black focus:outline-none focus:border-[#ff6b00] transition-colors rounded-2xl placeholder:text-neutral-300 text-xs font-semibold text-center"
                    placeholder="ENTER YOUR EMAIL ADDRESS"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-[8px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-100 text-black focus:outline-none focus:border-[#ff6b00] transition-colors rounded-2xl placeholder:text-neutral-300 text-xs font-semibold text-center"
                  placeholder="PROJECT, OPPORTUNITY, COLLABORATION...."
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[8px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-100 text-black focus:outline-none focus:border-[#ff6b00] transition-colors rounded-2xl placeholder:text-neutral-300 text-xs font-semibold resize-none text-center"
                  placeholder="TELL ME ABOUT YOUR PROJECT, OPPORTUNITY, COLLABORATION OR IDEA...."
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 font-bold uppercase tracking-wider text-[10px] transition-all rounded-full flex items-center justify-center gap-2 shadow-md ${
                  submitStatus === "success"
                    ? "bg-emerald-600 text-white shadow-emerald-250/20"
                    : submitStatus === "error"
                    ? "bg-rose-600 text-white shadow-rose-250/20"
                    : "bg-black text-white hover:bg-neutral-800 shadow-zinc-200/50"
                }`}
                data-magnetic="true"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Dispatching...
                  </span>
                ) : submitStatus === "success" ? (
                  <span>Message Sent Successfully!</span>
                ) : submitStatus === "error" ? (
                  <span>Failed to Send. Please Check Key / Restart Server!</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send size={11} className="text-[#ff6b00]" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
