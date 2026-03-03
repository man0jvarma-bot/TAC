"use client";
import React from "react";
import { ArrowRight, MessageSquare, Briefcase, HeartHandshake, Sparkles } from "lucide-react";

const admissionSteps = [
  {
    number: "01",
    title: "Discovery Call",
    icon: <MessageSquare size={16} />,
    description: "Assessing your background, intent, and career aspirations."
  },
  {
    number: "02",
    title: "Business Case",
    icon: <Briefcase size={16} />,
    description: "Showcasing strategic problem-solving through a real-world case."
  },
  {
    number: "03",
    title: "Culture Fit",
    icon: <HeartHandshake size={16} />,
    description: "Ensuring alignment with our execution-heavy studio environment."
  }
];

export default function AdmissionCriteria() {
  return (
    <section className="py-16 px-[5%] bg-[#FCF8E3] text-[#1D1D1D] overflow-hidden border-y border-black/5">
      <div className="max-w-7xl mx-auto">

        {/* Compact Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-black/10 bg-black/5">
            <Sparkles size={10} className="text-[#1D1D1D]" />
            <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-[#1D1D1D]">Admission Flow</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-2">
            Selection <span className="italic font-serif text-[#FFC62A]">Criteria.</span>
          </h2>
        </div>

        {/* Process Flow with Indicators */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {admissionSteps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Compact Box */}
              <div className="w-full bg-white/60 border border-black/5 rounded-[2rem] p-7 transition-all duration-500 hover:bg-[#365C47] hover:shadow-xl flex-1 flex flex-col justify-between min-h-[200px] cursor-default group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1D1D1D] flex items-center justify-center text-[#FFC62A] group-hover:bg-white group-hover:text-[#365C47] transition-all duration-300">
                      {step.icon}
                    </div>
                    <span className="text-xs font-bold text-black/10 group-hover:text-white/10 transition-colors">
                      Step {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 text-xs leading-relaxed font-medium group-hover:text-white/70 transition-colors">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 h-1 w-8 bg-[#FFC62A] rounded-full group-hover:w-full transition-all duration-500" />
              </div>

              {/* Arrow Indicator in Spacing */}
              {index !== admissionSteps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center px-4">
                  <div className="w-8 h-8 rounded-full bg-white border border-black/5 flex items-center justify-center text-[#FFC62A] shadow-sm">
                    <ArrowRight size={14} />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}