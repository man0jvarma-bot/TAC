"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3, Globe, Search, Workflow,
  Target, Mail, MessageSquare, Zap, Sparkles
} from "lucide-react";

const marketingTools = [
  { name: "GA4", category: "Analytics", icon: <BarChart3 />, color: "#22c55e" },
  { name: "Meta Ads", category: "Paid Media", icon: <Target />, color: "#FFC62A" },
  { name: "SEMrush", category: "SEO Strategy", icon: <Search />, color: "#1D1D1D" },
  { name: "Zapier", category: "Automation", icon: <Workflow />, color: "#22c55e" },
  { name: "Klaviyo", category: "Email Mkt", icon: <Mail />, color: "#FFC62A" },
  { name: "GTM", category: "Tagging", icon: <Zap />, color: "#1D1D1D" },
  { name: "Ads Manager", category: "Distribution", icon: <Globe />, color: "#22c55e" },
  { name: "Social Ops", category: "Engagement", icon: <MessageSquare />, color: "#FFC62A" },
];

export function ToolStackSection() {
  return (
    <section className="relative py-24 bg-[#FCF8E3] overflow-hidden border-y border-black/5">
      {/* 5% Horizontal Padding applied to the wrapper */}
      <div className="relative z-10 w-full px-[5%]">

        {/* Centered Branded Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-black/10 bg-black/5"
          >
            <Sparkles size={12} className="text-[#1D1D1D]" />
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#1D1D1D]">Curriculum Stack</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-[#1D1D1D] tracking-tighter leading-[0.9] mb-2">
            The Marketing
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif italic font-medium text-[#FFC62A] lowercase relative inline-block">
            system.
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFC62A]/20 rounded-full" />
          </h3>

          <p className="mt-8 text-gray-500 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Master the exact professional toolkit used by global growth operators
            to architect high-performance digital campaigns.
          </p>
        </div>

        {/* Spawning Grid - Fills the container between the 5% margins */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {marketingTools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.21, 0.45, 0.32, 0.9]
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-white/60 backdrop-blur-sm border border-black/5 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:bg-white hover:border-[#FFC62A]/30"
            >
              <div className="flex flex-col gap-8 h-full justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
                  style={{ backgroundColor: `${tool.color}15`, color: tool.color }}
                >
                  {React.cloneElement(tool.icon as React.ReactElement<any>, { size: 24, strokeWidth: 1.5 })}
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] font-black text-gray-400 mb-1.5">
                    {tool.category}
                  </p>
                  <h4 className="text-lg font-black text-[#1D1D1D] tracking-tighter uppercase transition-colors group-hover:text-[#FFC62A]">
                    {tool.name}
                  </h4>
                </div>
              </div>

              <span className="absolute top-6 right-6 text-[10px] font-mono font-bold text-black/10">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}