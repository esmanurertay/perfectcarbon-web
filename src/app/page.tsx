import React from 'react';
import { FiMail, FiActivity, FiArrowUpRight } from 'react-icons/fi';

export default function PremiumComingSoon() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col justify-between items-center px-6 py-12 relative overflow-hidden font-sans selection:bg-red-600 selection:text-white">
      
      {/* İnce ve Akıllı Işık Hüzmesi */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-red-600/10 to-transparent blur-[120px] pointer-events-none" />

      {/* 1. ÜST ALAN: Minimal Logo */}
      <header className="w-full max-w-5xl flex justify-between items-center z-10">
        <div className="text-sm font-semibold tracking-[0.2em] text-white uppercase flex items-center gap-1.5">
          Perfectcarbon<span className="w-1 h-1 rounded-full bg-red-600"></span>
        </div>
        <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase flex items-center gap-2">
          <FiActivity className="text-red-600 animate-pulse" /> Precision Engineered
        </div>
      </header>

      {/* 2. ORTA ALAN: Sinematik Mesaj ve Mail Yönlendirmesi */}
      <section className="w-full max-w-3xl text-center my-auto flex flex-col items-center z-10">
        <div className="w-8 h-[2px] bg-red-600 mb-8 rounded-full" />
        
        <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
          Where carbon composite meets <br />
          <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-500">
            extreme weaving performance.
          </span>
        </h1>
        
        <p className="mt-6 text-sm sm:text-base text-zinc-500 max-w-xl leading-relaxed font-light">
          We are refining our digital platform. The new international spare parts catalog for high-speed carpet loom machinery will be available shortly.
        </p>

        {/* Yenilenen Mail İletişim Alanı */}
        <div className="mt-12 flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
            For urgent RFQs and technical inquiries:
          </span>
          <a 
            href="mailto:info@perfectcarbonrapier.com" 
            className="group flex items-center gap-3 py-1 text-sm md:text-lg font-mono text-red-500 hover:text-white border-b border-zinc-800 hover:border-red-600 pb-1 transition-all duration-300"
          >
            <FiMail className="text-zinc-500 group-hover:text-red-600 transition-colors" />
            info@perfectcarbonrapier.com
            <FiArrowUpRight className="text-xs text-zinc-600 group-hover:text-red-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>
      </section>

      {/* 3. ALT ALAN: Temiz Footer */}
      <footer className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-zinc-600 font-light z-10 border-t border-zinc-900/60 pt-6">
        <div className="tracking-wide">
          &copy; {new Date().getFullYear()} PERFECTCARBON. All rights reserved.
        </div>
        <div className="flex items-center gap-6 font-mono tracking-widest uppercase text-[10px]">
          <span>Rapier Components</span>
          <span className="text-zinc-800">|</span>
          <span>Carbon Fiber Tech</span>
        </div>
      </footer>

    </main>
  );
}