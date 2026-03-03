"use client";
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Target, BarChart, Globe, Zap, MousePointerClick, Cpu, MessageSquare } from "lucide-react";

const marketingData = [
  {
    title: "Algorithmic Sovereignty",
    desc: "The future of marketing is no longer about human intuition but algorithmic mastery. In a world driven by machine learning, the ability to architect campaigns that speak the language of the algorithm is the only way to ensure brand survival and dominant visibility.",
    icon: <Cpu size={24} />,
  },
  {
    title: "Attention Economics",
    desc: "Human attention has become the world's most scarce and valuable commodity. Digital marketing is the science of capturing, retaining, and converting that attention into measurable equity. Those who control the narrative control the market share.",
    icon: <MousePointerClick size={24} />,
  },
  {
    title: "Performance Synergy",
    desc: "Integrating Paid Media with organic Growth Strategies creates a compounding effect. By leveraging real-time data analytics, TAC ensures that every marketing dollar spent is an investment into a self-optimizing ecosystem that scales horizontally across global markets.",
    icon: <BarChart size={24} />,
  },
  {
    title: "Cognitive Branding",
    desc: "Modern digital strategy transcends simple advertising; it enters the realm of cognitive psychology. We build frameworks that align consumer behavior with brand identity, ensuring that your digital footprint leaves a permanent psychological impact.",
    icon: <Zap size={24} />,
  }
];

const DigitalMarketingDeepDive = () => {
  return (
    <section className="min-h-screen w-full bg-[#1D1D1D] text-white px-[5%] py-24 flex flex-col items-center overflow-hidden font-sans">
      
      {/* Centered Heading Section */}
      <div className="max-w-4xl w-full text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center gap-3 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-[#FFC62A] animate-ping" />
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#FFC62A]">Industry Evolution</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-8"
        >
          Digital <span className="text-[#FFC62A] font-serif italic font-medium lowercase">Future.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg md:text-xl font-light leading-relaxed tracking-wide"
        >
          Traditional marketing is dead. We are entering an era of <strong>Integrated Intelligence</strong> where creative vision and data-driven execution merge to define global market leaders. Explore why Digital Marketing is the ultimate leverage for the next decade.
        </motion.p>
      </div>

      {/* High-Content Interactive Grid */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        
        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFC62A]/5 blur-[120px] rounded-full -z-10" />

        {marketingData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            className="group p-10 bg-[#2F2F2F]/40 border border-white/5 rounded-[32px] backdrop-blur-sm 
                       transition-all duration-500 hover:border-[#FFC62A]/30 hover:bg-[#2F2F2F]/60 cursor-default"
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="p-4 bg-[#1D1D1D] text-[#FFC62A] rounded-2xl group-hover:bg-[#FFC62A] group-hover:text-black transition-all duration-500 shadow-xl">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-[#FFC62A] transition-colors">
                {item.title}
              </h3>
            </div>
            
            <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light">
              {item.desc}
            </p>

            <div className="mt-8 flex items-center gap-2 text-[#FFC62A] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-[10px] font-bold uppercase tracking-widest">Part of TAC 8-Module Core</span>
              <div className="h-[1px] w-12 bg-[#FFC62A]" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-20 text-center"
      >
        <button className="relative px-12 py-5 bg-[#FFC62A] text-black font-black uppercase tracking-widest text-xs rounded-full overflow-hidden group">
          <span className="relative z-10">Secure Your Future in Marketing</span>
          <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
        </button>
      </motion.div>

    </section>
  );
};

export default DigitalMarketingDeepDive;