"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const curriculumSections = [
  {
    eyebrow: "Industry-Driven & Industry Ready",
    titlePrefix: "Master Skills With Our Industry-Aligned\n",
    titleHighlight: "Curriculum.",
    bullets: [
      "The courses are crafted with input from top creators, studios, agencies, and MNCs.",
      "You'll work on live projects for actual brands, juggle deadlines, get feedback from clients, and deliver outcomes that make impact."
    ],
    cards: [
      {
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        titlePrefix: "Learn Designing With India's",
        highlight: "Top Creators",
        titleSuffix: "",
        desc: "Work on real projects for films, web series, viral campaigns, and brand launches. Master design tools and workflows under the mentorship of professionals from top agencies."
      },
      {
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
        titlePrefix: "Master Editing With",
        highlight: "Pros Behind The Cut.",
        titleSuffix: "",
        desc: "From blockbuster films to trending reels, learn editing by doing. Collaborate on live projects with editors behind hit web series, YouTube channels, and cinematic content."
      },
      {
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
        titlePrefix: "Digital Marketing With",
        highlight: "Real Campaigns",
        titleSuffix: "",
        desc: "Launch and scale actual campaigns for clients and your own ventures. Learn digital marketing through crafting strategy, content, ads, and analytics for real cases."
      }
    ]
  },
  {
    eyebrow: "Real-World Proof of Work",
    titlePrefix: "Build A Portfolio That Screams\n",
    titleHighlight: "'Hire Me'.",
    bullets: [
      "At TAC, you learn by doing and apply what you learn in real time.",
      "Every brief, edit, and design adds to a portfolio built on actual client work from day one."
    ],
    cards: [
      {
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
        titlePrefix: "Start With",
        highlight: "Dropshipping Challenge",
        titleSuffix: " From Month 1",
        desc: "Launch a revenue-generating store with zero inventory. We provide seed funding, real-world briefs, and expert support so you can earn while learning."
      },
      {
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
        titlePrefix: "",
        highlight: "Create For Real Brands.",
        titleSuffix: " Not Just For Practice.",
        desc: "At TAC, you'll work on real client projects across industries—solving business problems, building your portfolio, and earning as you learn."
      },
      {
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
        titlePrefix: "",
        highlight: "TACATHON:",
        titleSuffix: " Sprint Like Bolt. Solve Like Morpheus.",
        desc: "From ideation to MVP to go-to-market, develop and polish your venture. Then present to 50+ industry leaders and potential clients at TACATHON — and land real projects or funding."
      }
    ]
  },
  {
    eyebrow: "Direct Industry Access",
    titlePrefix: "Talk And Learn From Tomorrow's Recruiters\n",
    titleHighlight: "Today.",
    bullets: [
      "At TAC, you're not waiting for placements, you're already in the room. Build connections while building skills.",
      "Get face time with industry recruiters, startup founders, and creative leads who could be your future employers."
    ],
    cards: [
      {
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80",
        titlePrefix: "Crack Design Briefs With",
        highlight: "McCann's Art Director",
        titleSuffix: "",
        desc: "Work on real visual and video projects guided by McCann's top creative mind. From storyboarding to final delivery, build industry-ready work that makes your portfolio stand out."
      },
      {
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80",
        titlePrefix: "Master Editing & UI With",
        highlight: "Adobe And Figma Experts",
        titleSuffix: "",
        desc: "Learn advanced workflows in Premiere Pro and Figma straight from the teams behind the tools. Dive into real case studies and apply pro techniques to real-world projects."
      },
      {
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
        titlePrefix: "Scale Campaigns With",
        highlight: "Zomato's Growth Lead",
        titleSuffix: "",
        desc: "Get hands-on with growth strategies from the brains behind Zomato's success. Learn A/B testing, analytics, and customer acquisition by launching live, data-driven campaigns."
      }
    ]
  }
];

export default function IndustryCurriculum() {
  return (
    <section className="py-32 px-[5%] bg-[#1A1A1A] text-white overflow-hidden relative font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-28">
        
        {curriculumSections.map((section, sectionIndex) => (
          <motion.div 
            key={sectionIndex}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col relative"
          >
            <div
              className={`flex flex-col ${
                sectionIndex % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } justify-between items-start gap-12 mb-16`}
            >
              <div className="lg:w-3/5">
                {section.eyebrow && (
                  <p className="text-[11px] font-black uppercase tracking-widest text-white/50 mb-6">
                    {section.eyebrow}
                  </p>
                )}
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.05] whitespace-pre-line">
                  {section.titlePrefix}
                  <span className="font-serif italic font-light text-[#FFC62A] tracking-normal">
                    {section.titleHighlight}
                  </span>
                </h2>
              </div>
              
              <div className="lg:w-2/5 flex flex-col gap-6 pt-2">
                {section.bullets.map((bullet, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <ChevronRight size={18} className="text-[#FFC62A] flex-shrink-0 mt-1" />
                    <p className="text-base font-normal text-white/70 leading-relaxed tracking-tight">
                      {bullet}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.cards.map((card, cardIndex) => (
                <motion.div
                  key={cardIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: cardIndex * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="flex flex-col gap-6 group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-[24px] aspect-[16/10] bg-[#111111]">
                    <img
                      src={card.image}
                      alt={card.highlight}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 transform-gpu group-hover:scale-105"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[24px] pointer-events-none group-hover:ring-[#FFC62A]/30 transition-colors duration-500" />
                  </div>

                  <div className="flex flex-col gap-3 px-1">
                    <h3 className="text-xl font-black text-white leading-snug tracking-tighter">
                      {card.titlePrefix && <span>{card.titlePrefix} </span>}
                      <span className="font-serif italic font-light text-[#FFC62A] tracking-normal">
                        {card.highlight}
                      </span>
                      {card.titleSuffix && <span>{card.titleSuffix}</span>}
                    </h3>
                    <p className="text-sm font-normal text-white/50 leading-relaxed tracking-tight group-hover:text-white/80 transition-colors duration-500">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {sectionIndex !== curriculumSections.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="absolute -bottom-14 left-0 w-full h-[1px] bg-gradient-to-r from-white/20 to-transparent origin-left"
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}