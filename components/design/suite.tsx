"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video, Palette, Megaphone, Target,
  Users, Zap, Briefcase, Layout, ArrowRight,
  Sparkles, CheckCircle2, Terminal, MousePointer2
} from "lucide-react";

const courses = [
  { id: 1, title: "Editing", icon: <Video size={20}/>, heading: "Cinematic Storytelling", stack: ["Premiere", "Resolve"], description: "Engineer emotion through structured pacing, cinematic transitions, and professional color science.", outcomes: ["Narrative Pacing", "Color Grading"], build: "Edit a full cinematic brand film.", impact: "High Retention", leverage: "Agency Editor Roles" },
  { id: 2, title: "Motion", icon: <Zap size={20}/>, heading: "VFX & Systems", stack: ["After Effects", "C4D"], description: "Master motion systems and compositing logic used in modern digital campaigns.", outcomes: ["Keyframe Theory", "Lottie/Web"], build: "Design an animated launch sequence.", impact: "Visual Recall", leverage: "Motion Designer Roles" },
  { id: 3, title: "Visuals", icon: <Palette size={20}/>, heading: "Identity Design", stack: ["Illustrator", "Photoshop"], description: "Build scalable visual systems rooted in typography science and brand psychology.", outcomes: ["Layout Systems", "Typography"], build: "Create a startup identity system.", impact: "Visual Trust", leverage: "Creative Direction" },
  { id: 4, title: "UI/UX", icon: <Layout size={20}/>, heading: "Product Design", stack: ["Figma", "Framer"], description: "Design structured product systems using usability frameworks and architecture.", outcomes: ["Figma Systems", "Wireframing"], build: "Ship an interactive prototype.", impact: "User Clarity", leverage: "Product Designer" },
  { id: 5, title: "Ads", icon: <Megaphone size={20}/>, heading: "Performance Growth", stack: ["Meta", "Google Ads"], description: "Engineer growth through creative testing, funnel optimization and scalable ad systems.", outcomes: ["Creative Testing", "CRO Strategy"], build: "Launch live campaigns.", impact: "Revenue Growth", leverage: "Growth Marketing" },
  { id: 6, title: "Sales", icon: <Users size={20}/>, heading: "High-Ticket closing", stack: ["Hubspot", "Sales Logic"], description: "Master closing systems, negotiation frameworks and enterprise retention logic.", outcomes: ["Closing Logic", "Retainers"], build: "Simulate deal closures.", impact: "Contract Value", leverage: "Sales Strategy" },
  { id: 7, title: "GTM", icon: <Target size={20}/>, heading: "Market Execution", stack: ["GTM", "Analytics"], description: "Map product-market fit using KPI engineering and growth funnel data-driven systems.", outcomes: ["Growth Funnels", "Market Analysis"], build: "Construct a GTM plan.", impact: "Penetration Rate", leverage: "Ops Pathways" },
  { id: 8, title: "Career", icon: <Briefcase size={20}/>, heading: "The Placement", stack: ["Placement Suite"], description: "Convert execution proof into positioning through validated portfolio proof.", outcomes: ["Pitch Prep", "Portfolio Proof"], build: "Final hiring panel presentation.", impact: "Direct Access", leverage: "Execution Credibility" }
];

const creativeIcons = ["Premiere Pro", "After Effects", "Photoshop", "Illustrator", "Figma", "Framer", "C4D", "Blender"];
const growthIcons = ["Meta Ads", "Google Ads", "Hubspot", "GTM", "GA4", "Klaviyo", "Shopify", "LinkedIn"];

export default function RealisticKnowledgeHub() {
  const [active, setActive] = useState(1);
  const selected = courses.find((c) => c.id === active);

  const ModuleNav = ({ items }: { items: typeof courses }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((course) => (
        <motion.button
          key={course.id}
          onClick={() => setActive(course.id)}
          whileHover={{ y: -5 }}
          className={`p-6 rounded-[32px] border-2 text-left transition-all duration-500
            ${active === course.id ? "bg-[#365c47] border-[#365c47] text-white" : "bg-[#2F2F2F] border-white/5 text-white/40 hover:border-[#FFC62A]/20"}`}
        >
          <div className="mb-4">{course.icon}</div>
          <span className="text-[10px] font-bold uppercase tracking-widest block opacity-40">Course 0{course.id}</span>
          <span className="text-sm font-bold uppercase">{course.title}</span>
        </motion.button>
      ))}
    </div>
  );

  return (
    <section className="py-24 px-[5%] bg-[#1D1D1D] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        
        {/* CENTERED REFINED HEADER */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles size={12} className="text-[#FFC62A]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#FFC62A]">The Portfolio System</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-tight mb-2 uppercase">
            Inside The 
            <span className="font-serif italic font-medium text-[#FFC62A] lowercase ml-3">
                8 courses.
            </span>
          </h2>
          
          <p className="max-w-xl mx-auto text-white/40 text-sm md:text-base font-medium leading-relaxed mt-6">
            A unified system engineered to install high-performance, 
            job-ready execution skills through professional studio scenarios.
          </p>
        </div>

        {/* PHASE 01: CREATIVE ENGINE */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-10 border-b border-white/5 pb-6">
            <div className="space-y-1">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#365c47]">First Phase</span>
              <h4 className="text-2xl font-bold uppercase tracking-tight">Creative <span className="italic font-serif text-white/40 font-normal">Foundation.</span></h4>
            </div>
          </div>

          <ModuleNav items={courses.slice(0, 4)} />

          {/* INFINITE LOOP RIGHT */}
          <div className="mt-8 relative py-8 border-y border-white/5 overflow-hidden group">
            <motion.div 
              animate={{ x: [-2000, 0] }} 
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="flex gap-16 items-center whitespace-nowrap"
            >
              {[...creativeIcons, ...creativeIcons].map((icon, i) => (
                <div key={i} className="flex items-center gap-4 opacity-20 group-hover:opacity-60 transition-opacity">
                  <Terminal size={14} className="text-[#FFC62A]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em]">{icon}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ACTIVE COCKPIT PANEL */}
        <div className="mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="bg-[#2F2F2F] rounded-[48px] border border-white/5 p-8 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div className="grid xl:grid-cols-2 gap-16">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="px-4 py-2 bg-[#365c47] text-white rounded-xl font-bold text-[10px] uppercase tracking-widest">Active Course Node</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFC62A] animate-pulse" />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-semibold tracking-tighter leading-none mb-6">
                    {selected?.title} <br/>
                    <span className="font-serif italic font-medium text-[#FFC62A] lowercase">{selected?.heading}</span>
                  </h3>
                  <p className="text-lg text-white/50 leading-relaxed mb-8">{selected?.description}</p>
                </div>

                <div className="space-y-8 bg-black/20 p-8 rounded-[40px] border border-white/5 relative z-10">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">Target Build</span>
                      <p className="text-sm font-bold leading-snug">{selected?.build}</p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">Business Impact</span>
                      <p className="text-sm font-bold leading-snug">{selected?.impact}</p>
                    </div>
                  </div>
                  <div className="pt-8 border-t border-white/5">
                     <span className="text-[9px] font-bold uppercase tracking-widest text-white/30 block mb-3">Professional Stack</span>
                     <div className="flex gap-3">
                        {selected?.stack.map((s, i) => (
                          <span key={i} className="px-4 py-2 bg-white/5 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-white/5">{s}</span>
                        ))}
                     </div>
                  </div>
                  <motion.button whileTap={{ scale: 0.98 }} className="w-full bg-[#FFC62A] text-black py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-white transition-all shadow-[0_20px_40px_rgba(255,198,42,0.1)]">
                    Download Full Syllabus <ArrowRight size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PHASE 02: REVENUE OPERATIONS */}
        <div>
          <div className="flex justify-between items-end mb-10 border-b border-white/5 pb-6">
            <div className="space-y-1">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#365c47]">Second Phase</span>
              <h4 className="text-2xl font-bold uppercase tracking-tight">Revenue <span className="italic font-serif text-white/40 font-normal">Operations.</span></h4>
            </div>
          </div>

          <ModuleNav items={courses.slice(4, 8)} />

          {/* INFINITE LOOP LEFT */}
          <div className="mt-8 relative py-8 border-y border-white/5 overflow-hidden group">
            <motion.div 
              animate={{ x: [0, -2000] }} 
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="flex gap-16 items-center whitespace-nowrap"
            >
              {[...growthIcons, ...growthIcons].map((icon, i) => (
                <div key={i} className="flex items-center gap-4 opacity-20 group-hover:opacity-60 transition-opacity">
                  <MousePointer2 size={14} className="text-[#FFC62A]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em]">{icon}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}