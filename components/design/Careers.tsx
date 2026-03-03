"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Rocket,
  Target,
  Plus,
  TrendingUp,
  Layers,
  Sparkles
} from "lucide-react";

const advantages = [
  {
    id: "freelance",
    colSpan: "lg:col-span-8",
    icon: Rocket,
    title: "Monetize from Month 1",
    highlight: "Freelance Mastery",
    desc: "We bridge the gap between technical skill and business acumen. Beyond mastering software, you learn the high-ticket sales psychology required to source global leads and negotiate premium retainers while still in training.",
    stats: [
      { label: "Lead Gen", value: "Live Training" },
      { label: "Portfolio", value: "8 Modules" }
    ],
  },
  {
    id: "mentorship",
    colSpan: "lg:col-span-4",
    icon: Users,
    title: "Senior Director",
    highlight: "Mentorship",
    desc: "Eliminate the guesswork of self-learning. Your projects undergo rigorous teardowns by industry veterans and growth leads who actively manage international accounts.",
    stats: [
      { label: "Support", value: "24/7 Portal" }
    ],
  },
  {
    id: "internship",
    colSpan: "lg:col-span-5",
    icon: Target,
    title: "Agency-Grade",
    highlight: "Execution",
    desc: "Bypass hypothetical scenarios. You are integrated into live agency briefs, managing real-world deadlines and client feedback loops to ensure high-performance delivery.",
    stats: [
      { label: "Experience", value: "Real Brands" }
    ],
  },
  {
    id: "jobs",
    colSpan: "lg:col-span-7",
    icon: Briefcase,
    title: "Global Talent",
    highlight: "Pipeline",
    desc: "Skip the noise of cold applications. Through the TACATHON showcase, your polished execution skills are presented directly to recruiters from companies like Meta, Google, and Amazon.",
    stats: [
      { label: "Placements", value: "Meta / Google" },
      { label: "Readiness", value: "Month 6" }
    ],
  }
];

export default function TacAdvantage() {
  return (
    <section className="py-24 px-[5%] bg-[#FCF8E3] text-[#1D1D1D] overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-black/10 bg-black/5"
          >
            <Sparkles size={12} className="text-[#1D1D1D]" />
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#1D1D1D]">
              The TAC ROI Pipeline
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-semibold text-[#1D1D1D] leading-tight tracking-tight mb-2">
            Beyond Education.
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif italic font-medium text-[#FFC62A]">
            Built for Profit.
          </h3>

          <p className="mt-8 text-gray-500 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            We engineer your transition from amateur to highly-paid professional through a curriculum focused on cinematic editing, visual design, and growth strategy.
          </p>
        </div>

        {/* ASYMMETRIC BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {advantages.map((adv, index) => (
            <motion.div
              key={adv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${adv.colSpan} group relative rounded-[2rem] h-full flex flex-col transition-all duration-500`}
            >
              <div className="bg-white/60 border border-black/5 rounded-[2rem] p-8 md:p-12 h-full flex flex-col justify-between relative z-10 transition-all duration-500 group-hover:bg-[#365c47] group-hover:border-[#365c47]/20 group-hover:shadow-xl">
                
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-10 h-10 rounded-xl bg-[#1D1D1D] flex items-center justify-center text-[#FFC62A] group-hover:bg-white group-hover:text-[#365c47] transition-all duration-500">
                      <adv.icon className="w-5 h-5" />
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-[#1D1D1D] flex items-center justify-center text-[#FFC62A] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-white group-hover:text-[#365c47] transition-all duration-500">
                      <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" />
                    </div>
                  </div>

                  <h4 className="text-2xl md:text-3xl font-semibold text-[#1D1D1D] mb-3 group-hover:text-white transition-colors leading-tight">
                    {adv.title} <br />
                    <span className="font-serif italic font-medium text-[#FFC62A]">
                      {adv.highlight}
                    </span>
                  </h4>

                  <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-1 group-hover:text-white/90 transition-colors">
                    {adv.desc}
                  </p>
                </div>

                {/* Card Footer Stats */}
                <div className="flex flex-wrap gap-3 pt-6 mt-4 border-t border-black/10 group-hover:border-white/20 transition-colors">
                  {adv.stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/40 px-4 py-2 rounded-lg border border-black/5 group-hover:bg-white/10 group-hover:border-white/10 transition-all">
                      <TrendingUp className="w-3.5 h-3.5 text-[#FFC62A]" />
                      <div>
                        <span className="text-[8px] font-bold text-[#1D1D1D]/60 uppercase tracking-widest block leading-none mb-1 group-hover:text-white/60">
                          {stat.label}
                        </span>
                        <span className="text-xs font-semibold text-[#1D1D1D] leading-none group-hover:text-white">
                          {stat.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}