"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  Cpu, 
  MousePointerClick, 
  Share2, 
  ArrowUpRight, 
  CheckCircle2,
  TrendingUp,
  Zap
} from "lucide-react";

const marketingPillars = [
  {
    id: "ai",
    title: "AI-Powered Elevation",
    icon: <Cpu size={24} />,
    color: "#365c47",
    summary: "Leveraging Large Language Models to automate hyper-personalized customer journeys.",
    metrics: { label: "Efficiency Boost", value: "+140%" },
    features: [
      "Predictive intent scoring",
      "Automated creative production",
      "24/7 AI sales assistants",
      "Sentiment-driven retargeting"
    ],
    description: "In 2026, AI is no longer a tool—it's the core. We move beyond simple automation to 'Predictive Experience Design,' where the interface adapts in real-time to the user's emotional state and search intent."
  },
  {
    id: "content",
    title: "Organic Authority",
    icon: <Share2 size={24} />,
    color: "#FFC62A",
    summary: "Dominating search engines and social feeds through high-signal, expert-led content.",
    metrics: { label: "Trust Factor", value: "9.2/10" },
    features: [
      "Answer Engine Optimization (AEO)",
      "Founder-led content flywheels",
      "Short-form video dominance",
      "UGC conversion engines"
    ],
    description: "Traditional SEO has evolved into AEO. We focus on being the 'primary source' for AI answer engines (like Perplexity and SearchGPT) by building deep, authoritative content that robots want to cite."
  },
  {
    id: "performance",
    title: "Performance Max",
    icon: <MousePointerClick size={24} />,
    color: "#FFC62A",
    summary: "Scaling high-ticket revenue through data-backed paid acquisition and CRO.",
    metrics: { label: "Average ROAS", value: "5.8x" },
    features: [
      "Cross-platform identity resolution",
      "Creative testing frameworks",
      "Post-purchase LTV scaling",
      "Dynamic pricing optimization"
    ],
    description: "Performance marketing is now about creative differentiation. Since bidding is mostly automated by AI, we win through superior psychological hooks and technical infrastructure that solves the cookie-less attribution gap."
  },
  {
    id: "data",
    title: "Data Intelligence",
    icon: <BarChart3 size={24} />,
    color: "#365c47",
    summary: "Turning first-party data into a competitive moat that competitors can't replicate.",
    metrics: { label: "Data Accuracy", value: "99.9%" },
    features: [
      "First-party data integration",
      "Zero-click attribution models",
      "Privacy-first tracking (CDP)",
      "Revenue forecasting models"
    ],
    description: "Data is the new oil, but only if it's refined. We build custom data pipelines that unify your CRM, social, and web analytics into a single source of truth for high-velocity decision making."
  }
];

export default function MarketingGrowthEngine() {
  const [activeTab, setActiveTab] = useState(marketingPillars[0]);

  return (
    <section className="py-24 px-[5%] bg-[#111111] text-white overflow-hidden relative font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] mb-6"
          >
            Marketing <br />
            <span className="font-serif italic font-light text-[#FFC62A] glow-yellow">Ecosystem</span>
          </motion.h2>
          <p className="mt-8 max-w-2xl mx-auto text-white/40 text-lg md:text-xl font-medium leading-relaxed">
            Moving beyond disconnected campaigns to a unified, AI-driven engine built for 2026 performance standards.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_500px] gap-8 items-stretch">
          
          {/* Strategic Insights Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="bg-[#1A1A1A] rounded-[48px] p-8 md:p-16 h-full flex flex-col justify-between border border-white/5 relative overflow-hidden shadow-2xl"
              >
                {/* Visual Accent */}
                <div className="absolute -top-10 -right-10 opacity-[0.03] scale-[5] pointer-events-none rotate-12 text-white">
                  {activeTab.icon}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="w-16 h-16 rounded-2xl bg-[#FFC62A] text-black flex items-center justify-center shadow-[0_0_30px_rgba(255,198,42,0.2)]">
                      {activeTab.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FFC62A] mb-1 block">Strategy Module</span>
                      <h3 className="text-3xl font-black tracking-tighter text-white">{activeTab.title}</h3>
                    </div>
                  </div>

                  <p className="text-2xl md:text-4xl font-black leading-tight tracking-tighter text-white mb-10 max-w-3xl">
                    "{activeTab.summary}"
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {activeTab.features.map((feature, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1 text-[#FFC62A]"><CheckCircle2 size={18} /></div>
                        <span className="text-lg font-bold text-white/60 tracking-tight">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-10 border-t border-white/5 flex flex-wrap items-center justify-between gap-8">
                  <div className="flex gap-10">
                    <div>
                      <p className="text-[10px] font-black uppercase text-white/20 tracking-widest mb-2">{activeTab.metrics.label}</p>
                      <p className="text-4xl font-black text-white">{activeTab.metrics.value}</p>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-[10px] font-black uppercase text-white/20 tracking-widest mb-2">Priority Level</p>
                      <div className="flex gap-1 mt-3">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <div key={s} className={`h-1.5 w-6 rounded-full ${s <= 4 ? 'bg-[#FFC62A]' : 'bg-white/5'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <button className="bg-white text-black px-8 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] shadow-xl flex items-center gap-3 group transition-all hover:bg-[#FFC62A]">
                    Deploy Strategy <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Selector Navigation */}
          <div className="flex flex-col gap-3">
            {marketingPillars.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar)}
                className={`group relative p-8 rounded-[32px] text-left transition-all duration-500 flex items-center justify-between border-2
                  ${activeTab.id === pillar.id 
                    ? "bg-[#FFC62A] border-[#FFC62A] text-black shadow-[0_0_40px_rgba(255,198,42,0.1)]" 
                    : "bg-[#1A1A1A] border-white/5 text-white/40 hover:border-white/10 hover:text-white"
                  }`}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors
                    ${activeTab.id === pillar.id ? "bg-black text-[#FFC62A]" : "bg-white/5 text-white/20 group-hover:bg-white/10"}
                  `}>
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-black tracking-tighter text-lg leading-none mb-1">{pillar.title}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">View Analytics</span>
                  </div>
                </div>
                
                <div className={`transition-transform duration-500 ${activeTab.id === pillar.id ? 'rotate-45' : 'group-hover:translate-x-2'}`}>
                  <TrendingUp size={20} className={activeTab.id === pillar.id ? "text-black" : "text-white/10"} />
                </div>

                {activeTab.id === pillar.id && (
                  <motion.div 
                    layoutId="pillarHighlight"
                    className="absolute -left-[2px] top-1/4 bottom-1/4 w-[4px] bg-black rounded-full"
                  />
                )}
              </button>
            ))}

            {/* System Status Widget */}
            <div className="mt-auto bg-[#1A1A1A] border border-white/5 rounded-[32px] p-8 text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#365c47]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Zap className="absolute -bottom-4 -right-4 text-[#FFC62A]/5 scale-[4]" />
              
              <h5 className="text-[11px] font-black uppercase tracking-widest mb-4 flex items-center gap-2 relative z-10">
                <div className="w-2 h-2 rounded-full bg-[#FFC62A] animate-pulse shadow-[0_0_10px_#FFC62A]" />
                System Intelligence
              </h5>
              <p className="text-white/40 font-medium leading-relaxed mb-6 relative z-10">
                Predictive models are currently processing <span className="text-white">14.2M intent signals</span> per second. 
              </p>
              
              <div className="flex items-center gap-3 bg-white/5 self-start px-4 py-2 rounded-xl border border-white/5 relative z-10">
                <div className="text-[#FFC62A]"><TrendingUp size={14} /></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Node: Global-2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glow-yellow {
          text-shadow: 0 0 25px rgba(255, 198, 42, 0.3);
        }
      `}</style>
    </section>
  );
}