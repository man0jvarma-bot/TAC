"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Layers, 
  Command, 
  Framer, 
  ArrowRight, 
  Fingerprint, 
  Globe 
} from "lucide-react";

export default function KineticMosaic() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="py-20 px-[5%] bg-[#FFF9E6] text-[#111111] overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        
        {/* REFINED HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-10 mb-16">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-[1px] bg-[#365c47]/30" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#365c47]">Creative Intelligence</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.9] uppercase">
              The Art <br />
              <span className="font-serif italic font-light text-[#365c47] lowercase">of Impact</span>
            </h2>
          </div>
          <div className="lg:pl-16">
            <p className="text-lg md:text-xl font-medium text-black/50 leading-relaxed max-w-md">
              We design digital systems that bridge the gap between <span className="text-black">pure aesthetics</span> and <span className="text-black">raw performance</span>.
            </p>
          </div>
        </div>

        {/* THE KINETIC GRID - Sized for Decency */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* CARD 1: IDENTITY */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-white rounded-[32px] p-8 flex flex-col justify-between border border-black/5 shadow-sm group relative overflow-hidden h-[400px]"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF9E6] flex items-center justify-center mb-6">
                <Fingerprint size={24} className="text-[#365c47]" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight leading-none mb-3">Identity <br /> Systems</h3>
              <p className="text-sm text-black/40 font-semibold leading-snug">Visual languages built for market leadership and long-term equity.</p>
            </div>
            
            <div className="mt-8 transition-transform duration-500 group-hover:translate-x-2">
               <div className="w-12 h-12 rounded-full bg-[#FFC62A] flex items-center justify-center shadow-lg shadow-[#FFC62A]/20">
                 <ArrowRight size={20} />
               </div>
            </div>
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
          </motion.div>

          {/* RIGHT SIDE NESTED GRID */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* SUB-CARD: MOTION */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="bg-black rounded-[32px] p-8 text-white flex flex-col justify-between overflow-hidden relative h-[190px]"
            >
              <div className="relative z-10">
                <span className="text-[8px] font-black tracking-widest text-[#FFC62A] uppercase opacity-80">Module 01</span>
                <h4 className="text-xl font-black uppercase mt-1 tracking-tight">Motion UI Lab</h4>
              </div>
              <Framer size={60} className="absolute -bottom-4 -right-4 text-white/10 rotate-12" />
              <p className="relative z-10 text-white/40 text-[13px] font-medium max-w-[200px]">Physics-based interfaces that feel alive.</p>
            </motion.div>

            {/* SUB-CARD: STRATEGY */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="bg-[#365c47] rounded-[32px] p-8 text-white flex flex-col justify-between h-[190px]"
            >
              <div className="flex justify-between items-start">
                <Globe size={24} className="text-[#FFC62A]" />
                <div className="px-2 py-1 bg-white/10 rounded text-[8px] font-black uppercase tracking-widest">Live</div>
              </div>
              <div>
                <h4 className="text-xl font-black uppercase tracking-tight">Global GTM</h4>
                <p className="text-white/40 text-[13px] mt-1">Scaling across borders with intent.</p>
              </div>
            </motion.div>

            {/* THE "MAIN STAGE" CARD */}
            <motion.div 
              className="md:col-span-2 bg-[#FFC62A] rounded-[40px] p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group shadow-xl shadow-[#FFC62A]/10 h-auto md:h-[190px]"
            >
               <div className="flex-1 relative z-10">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-[0.8] mb-4">
                    Full Stack <br /> Creative
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Design', 'Code', 'Data'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-black text-white rounded-lg text-[9px] font-black uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
               </div>

               <div className="relative h-full aspect-square bg-white/20 backdrop-blur-lg rounded-[24px] border border-white/30 flex items-center justify-center group-hover:rotate-3 transition-transform duration-700">
                  <Sparkles size={32} className="text-black" />
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute -top-3 -right-3 w-10 h-10 bg-black rounded-lg flex items-center justify-center text-[#FFC62A]"
                  >
                    <Command size={18} />
                  </motion.div>
               </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM NAV */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-black/5 pt-10">
           <p className="text-[11px] font-bold tracking-widest text-black/30 uppercase">
             Trusted by <span className="text-black">50+ Global Partners</span>
           </p>
           
           <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-4 bg-black text-[#FFC62A] px-7 py-3.5 rounded-2xl shadow-lg transition-all"
           >
             <span className="font-black uppercase text-[10px] tracking-[0.2em]">Start a Project</span>
             <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
           </motion.button>
        </div>

      </div>
    </section>
  );
}