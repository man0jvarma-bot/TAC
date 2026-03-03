"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, Lightbulb, HelpCircle, Award, NotebookText } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Mentorship",
    icon: <Users size={32} strokeWidth={1.5} />,
    desc: "Direct access to operators, founders, and industry experts who guide you through real execution challenges."
  },
  {
    id: 2,
    title: "Personal Projects",
    icon: <Lightbulb size={32} strokeWidth={1.5} />,
    desc: "Build real, portfolio-worthy projects that demonstrate applied skill — not theoretical understanding."
  },
  {
    id: 3,
    title: "Assignment & Quiz",
    icon: <HelpCircle size={32} strokeWidth={1.5} />,
    desc: "Structured challenges and assessments designed to sharpen decision-making and business thinking."
  },
  {
    id: 4,
    title: "Certificates",
    icon: <Award size={32} strokeWidth={1.5} />,
    desc: "Credentialed proof of execution backed by performance, not just attendance."
  },
  {
    id: 5,
    title: "Detailed Notes",
    icon: <NotebookText size={32} strokeWidth={1.5} />,
    desc: "Framework-driven documentation and insights that help you retain, apply, and scale your knowledge."
  },
];

const TacFeatures = () => {
  return (
    <section className="py-24 bg-[#1D1D1D] text-white overflow-hidden">
      
      {/* Heading (Remains standard) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16 text-center px-[5%]"
      >
        <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
          Why Choose <br />
          <span className="text-[#FFC62A] font-serif italic font-medium">
            TAC
          </span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          TAC blends structured execution, industry mentorship, and applied projects
          to build professionals who can think strategically and execute confidently.
        </p>
      </motion.div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full">
        
        {/* Optional Premium Touch: Gradient masks on the edges to fade out the cards smoothly */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#1D1D1D] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#1D1D1D] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <motion.div
          className="flex w-max"
          // Animating from -50% to 0% creates the RIGHT-scrolling effect
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25, // Adjust this to speed up or slow down the scroll
          }}
        >
          {/* We render TWO identical sets of cards.
            When Set 1 finishes sliding into view, it instantly snaps back to Set 2, creating an invisible loop.
          */}
          
          {/* Set 1 */}
          <div className="flex gap-8 pr-8">
            {features.map((item) => (
              <div
                key={`set1-${item.id}`}
                className="group relative flex flex-col items-center text-center
                           w-[220px] min-h-[230px] flex-shrink-0
                           bg-[#2A2A2A] rounded-2xl border border-white/10 p-6
                           transition-all duration-400
                           hover:bg-[#242424] hover:border-[#FFC62A]/50 cursor-pointer"
              >
                <div className="absolute inset-0 bg-[#FFC62A]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                <div className="text-[#FFC62A] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.desc}
                </p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#FFC62A] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>

          {/* Set 2 (Exact Duplicate) */}
          <div className="flex gap-8 pr-8">
            {features.map((item) => (
              <div
                key={`set2-${item.id}`}
                className="group relative flex flex-col items-center text-center
                           w-[220px] min-h-[230px] flex-shrink-0
                           bg-[#2A2A2A] rounded-2xl border border-white/10 p-6
                           transition-all duration-400
                           hover:bg-[#242424] hover:border-[#FFC62A]/50 cursor-pointer"
              >
                <div className="absolute inset-0 bg-[#FFC62A]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                <div className="text-[#FFC62A] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.desc}
                </p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#FFC62A] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>

        </motion.div>
      </div>

    </section>
  );
};

export default TacFeatures;