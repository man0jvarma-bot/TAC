"use client";
import React from 'react';
import { Mail, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const TacFooterLight = () => {
  return (
    <footer className="w-full bg-[#FCF8E3] px-[5%] py-16 border-t border-black/5 text-[#1D1D1D]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* 1. Brand Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-black tracking-tighter uppercase">
            TAC<span className="text-[#FFC62A] font-serif italic font-medium lowercase">.</span>
          </h2>
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] leading-relaxed">
            The Art Code <br />
            Built for Execution.
          </p>
          <div className="flex gap-4 mt-2">
            <Instagram size={18} className="text-gray-400 hover:text-[#FFC62A] cursor-pointer transition-colors" />
            <Linkedin size={18} className="text-gray-400 hover:text-[#FFC62A] cursor-pointer transition-colors" />
          </div>
        </div>

        {/* 2. Contact Section */}
        <div className="flex flex-col gap-4 md:items-center">
          <div className="text-left md:text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#FFC62A] mb-2">Get in Touch</p>
            <a 
              href="mailto:hello@theartcode.com" 
              className="group flex items-center gap-2 text-lg font-medium hover:text-[#FFC62A] transition-colors"
            >
              <Mail size={20} className="text-gray-400 group-hover:text-[#FFC62A]" />
              hello@theartcode.com
            </a>
          </div>
        </div>

        {/* 3. More Options Section */}
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Explore</p>
            <ul className="text-sm space-y-2 text-gray-600">
              <li className="hover:text-[#1D1D1D] cursor-pointer flex items-center gap-1 group transition-colors">
                Academy <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </li>
              <li className="hover:text-[#1D1D1D] cursor-pointer flex items-center gap-1 group transition-colors">
                Knowledge Hub <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Legal</p>
            <ul className="text-sm space-y-2 text-gray-600">
              <li className="hover:text-[#1D1D1D] cursor-pointer transition-colors">Privacy</li>
              <li className="hover:text-[#1D1D1D] cursor-pointer transition-colors">Terms</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-gray-500 uppercase tracking-widest">
          © 2026 The Art Code. All Rights Reserved.
        </p>
        <p className="text-[10px] text-gray-500 uppercase tracking-widest">
          Placements at Meta / Google / Amazon
        </p>
      </div>
    </footer>
  );
};

export default TacFooterLight;