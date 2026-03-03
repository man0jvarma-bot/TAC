"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import { 
  BookOpen, 
  Wrench, 
  LineChart, 
  Mic, 
  CheckCircle2, 
  TrendingUp, 
  Layers 
} from "lucide-react";

const cards = [
  {
    tag: "Phase 01 — Foundation",
    title: "Master The",
    highlight: "Systems.",
    description: "Before execution comes architecture. Master the structured frameworks across marketing, behavioral psychology, and revenue systems.",
    points: ["Consumer Psychology", "Offer Architecture", "Market Positioning"],
    advantage: "Develop the strategic mind of a Creative Director.",
    tools: "Miro • Notion • Market Intelligence",
    icon: BookOpen,
  },
  {
    tag: "Phase 02 — Simulation",
    title: "Build The",
    highlight: "Execution.",
    description: "Theory ends here. Collaborate in elite teams to execute real-world business simulations. Engage in hands-on tool experimentation.",
    points: ["Advanced UI/UX", "Cinematic Editing", "Conversion Copywriting"],
    advantage: "Build a premium, client-ready portfolio.",
    tools: "Figma • Premiere Pro • After Effects",
    icon: Wrench,
  },
  {
    tag: "Phase 03 — Analytics",
    title: "Optimize With",
    highlight: "Data.",
    description: "Refine your systems using deep analytics, performance metrics, and aggressive A/B testing feedback loops.",
    points: ["Media Buying", "Funnel Optimization", "Retention Scaling"],
    advantage: "Scale campaigns strictly on mathematical ROI.",
    tools: "Meta Ads • Google Analytics • Hotjar",
    icon: LineChart,
  },
  {
    tag: "Phase 04 — Validation",
    title: "Pitch To",
    highlight: "Founders.",
    description: "Skip the cold applications. Present your final, polished solutions directly to industry leaders and startup founders.",
    points: ["Executive Comm", "Live Pitching", "Negotiation Frameworks"],
    advantage: "Secure placements through our 50+ partner network.",
    tools: "Pitch Decks • Case Studies • Networking",
    icon: Mic,
  }
];

export default function TacExecutionPipeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="bg-[#FCF8E3] font-sans">
      
      {/* Header */}
      <div className="w-full text-center px-[5%] pt-32 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 border border-black/10 mb-6">
          <Layers className="w-4 h-4 text-[#1D1D1D]" />
          <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1D1D1D]">
            Our Methodology
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold text-[#1D1D1D] tracking-tighter leading-[1.05]">
          The Execution <br />
          <span className="font-serif italic font-medium text-[#FFC62A] tracking-normal">
            Pipeline.
          </span>
        </h2>
      </div>

      <div ref={sectionRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-[5%]">

          {cards.map((card, index) => {
            const step = 1 / cards.length;
            const start = index * step;
            const end = (index + 1) * step;

            // Natural exit: Shrink and Fade to Left
            const x = useTransform(smoothProgress, [start, end], ["0vw", "-100vw"]);
            const opacity = useTransform(smoothProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
            const scale = useTransform(smoothProgress, [start, end], [1, 0.7]);
            const rotate = useTransform(smoothProgress, [start, end], [0, -5]);
            const filter = useTransform(smoothProgress, [start, end], ["blur(0px)", "blur(10px)"]);

            return (
              <motion.div
                key={index}
                style={{
                  x,
                  opacity,
                  scale,
                  rotate,
                  filter,
                  zIndex: cards.length - index,
                }}
                className="absolute w-full max-w-[1100px] h-[500px] md:h-[600px]
                           bg-white border border-black/5 rounded-[3rem] 
                           shadow-[0_40px_100px_rgba(0,0,0,0.04)]
                           overflow-hidden flex flex-col justify-center"
              >
                <div className="relative z-10 px-8 py-10 md:px-16 md:py-0 flex flex-col md:flex-row gap-8 md:gap-12 items-center h-full">
                  
                  {/* Left Side */}
                  <div className="flex-1 w-full flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-[#1D1D1D] flex items-center justify-center text-[#FFC62A] shadow-sm">
                        <card.icon className="w-6 h-6" />
                      </div>
                      <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full bg-black/5 text-gray-500 border border-black/5">
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-semibold text-[#1D1D1D] tracking-tighter leading-[1.05] mb-6">
                      {card.title} <br />
                      <span className="font-serif italic font-medium text-[#FFC62A] tracking-normal">
                        {card.highlight}
                      </span>
                    </h3>

                    <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed font-medium">
                      {card.description}
                    </p>
                  </div>

                  {/* Right Side */}
                  <div className="flex-1 w-full flex flex-col justify-center border-t md:border-t-0 md:border-l border-black/5 pt-6 md:pt-0 md:pl-12">
                    <div className="mb-8">
                      <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-4">Core Focus</p>
                      <div className="space-y-4">
                        {card.points.map((point, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#365c47] flex-shrink-0" />
                            <span className="text-[#1D1D1D] font-semibold text-sm md:text-base">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 bg-[#FCF8E3] p-6 rounded-2xl border border-black/5">
                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 text-[#FFC62A] flex-shrink-0" />
                        <p className="text-[#1D1D1D] font-bold text-sm leading-tight">
                          {card.advantage}
                        </p>
                      </div>
                      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest pt-3 border-t border-black/5">
                        Stack: {card.tools}
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}