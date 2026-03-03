"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Film,
  Layers,
  Wind,
  Figma,
  Palette,
  Smartphone,
  Cpu,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

const tools = [
  {
    name: "Premiere Pro",
    icon: <Film size={18} />,
    color: "#EA77FF",
    id: "01",
    description: "Industry-standard video editing workflows used in agencies & studios."
  },
  {
    name: "After Effects",
    icon: <Wind size={18} />,
    color: "#9999FF",
    id: "02",
    description: "Motion graphics, VFX pipelines and advanced compositing systems."
  },
  {
    name: "DaVinci Resolve",
    icon: <Layers size={18} />,
    color: "#FFB347",
    id: "03",
    description: "Professional cinematic color grading and finishing."
  },
  {
    name: "Figma",
    icon: <Figma size={18} />,
    color: "#0ACF83",
    id: "04",
    description: "Conversion-focused UI systems and scalable design architecture."
  },
  {
    name: "Photoshop",
    icon: <Palette size={18} />,
    color: "#31A8FF",
    id: "05",
    description: "Brand identity creation, visual manipulation and asset design."
  },
  {
    name: "Meta Ads",
    icon: <Smartphone size={18} />,
    color: "#0668E1",
    id: "06",
    description: "Performance marketing frameworks and paid growth systems."
  },
  {
    name: "AI Strategy",
    icon: <Cpu size={18} />,
    color: "#FFC62A",
    id: "07",
    description: "Automation systems, prompt engineering and AI-assisted workflows."
  }
];

export default function TechStackDashboard() {
  const loop = [...tools, ...tools, ...tools];

  return (
    <section className="py-24 px-[5%] bg-[#FCF8E3] text-[#1D1D1D] overflow-hidden relative border-y border-black/5">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles size={12} className="text-[#FFC62A]" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400">
              Professional Tool Ecosystem
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4 leading-tight">
            The TAC <span className="italic font-serif text-[#FFC62A]">Stack.</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-500 text-sm md:text-base font-medium leading-relaxed">
            Our curriculum integrates production-grade tools used by creative
            studios, SaaS companies, and marketing agencies. Master the execution workflows used by elite global teams.
          </p>
        </div>

        {/* Infinite Tool Stream */}
        <div className="relative">

          {/* Edge Fade */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FCF8E3] via-[#FCF8E3]/80 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FCF8E3] via-[#FCF8E3]/80 to-transparent z-10" />

          <div className="flex overflow-hidden py-10">
            <motion.div
              animate={{ x: [0, -1200] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="flex gap-8"
            >
              {loop.map((tool, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="group flex flex-col justify-between bg-white/60 backdrop-blur-sm border border-black/5 rounded-[2rem] px-8 py-8 min-w-[300px] transition-all duration-500 hover:border-[#365c47]/20 hover:bg-[#365c47] hover:shadow-2xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="p-4 rounded-2xl bg-[#FCF8E3] group-hover:bg-white transition-all duration-500 shadow-sm"
                      style={{ color: tool.color }}
                    >
                      {tool.icon}
                    </div>

                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white/60">
                        Module {tool.id}
                      </span>
                      <h3 className="text-lg font-bold tracking-tight text-[#1D1D1D] group-hover:text-white transition-colors">
                        {tool.name}
                      </h3>
                    </div>
                  </div>

                  {/* Context Description */}
                  <p className="text-sm text-gray-500 font-medium leading-relaxed group-hover:text-white/80 transition-colors">
                    {tool.description}
                  </p>

                  {/* Interactive Reveal */}
                  <div className="flex items-center gap-2 mt-6 text-[#FFC62A] text-[9px] font-black tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span>Execution Workflow</span>
                    <ArrowUpRight size={14} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Context Section */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-gray-400 text-sm font-medium leading-relaxed">
            By the end of the program, students operate with the same stack used by top-tier creative teams — from 
            building scalable design systems to launching paid acquisition campaigns.
          </p>
        </div>

      </div>
    </section>
  );
}