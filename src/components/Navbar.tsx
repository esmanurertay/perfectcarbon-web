"use client";
import React, { useState } from 'react';

export default function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const productBrands = [
    {
      name: "Van de Wiele Çözümleri",
      links: ["Carbon Rapier", "Carbon Rapier Başlıkları", "Carbon Rapier Dişli", "Kesim Makasları"]
    },
        {
      name: "Schönherr Alpha",
      links: ["Carbon Rapier", "Carbon Rapier Başlıkları", "Carbon Rapier Dişli", "Kesim Makasları"]
    },
    {
      name: "Dornier Sistemleri",
      links: ["Carbon Rapier", "Carbon Rapier Başlıkları", "Carbon Rapier Dişli", "Kesim Makasları"]
    }

  ];

  return (
    <nav className="w-full max-w-7xl mx-auto px-4 pt-6 fixed top-0 left-0 right-0 z-50">
      <div className="w-full h-16 bg-white/70 backdrop-blur-md border border-gray-100 rounded-full px-6 flex items-center justify-between shadow-sm relative">
        
        {/* Logo Bölümü */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center p-0.5">
            <div className="w-full h-0.5 bg-red-600 rounded-full"></div>
          </div>
          <span className="font-sans font-medium text-black text-sm tracking-tight">
            Perfect <span className="text-gray-500 font-normal">Carbon</span> Rapier
          </span>
        </div>

        {/* Navigasyon Linkleri */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-black transition-colors">Home</a>
          
          {/* Products - Mega Menu Tetikleyici Alan */}
          <div 
            className="relative h-16 flex items-center"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button className={`text-sm font-medium transition-colors flex items-center gap-1 ${isMegaMenuOpen ? 'text-red-600' : 'text-gray-400 hover:text-black'}`}>
              Products
              <svg className={`w-3 h-3 transform transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180 text-red-600' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* 🖥️ MEGA DROPDOWN MENU */}
            <div className={`absolute top-[60px] left-1/2 -translate-x-1/2 w-[850px] bg-gradient-to-r from-[#090909] to-red-500 rounded-[28px] p-8 shadow-[0_30px_70px_rgba(0,0,0,0.25)] border border-white/10 transition-all duration-300 transform origin-top z-[60]
              ${isMegaMenuOpen ? 'opacity-100 scale-100 visible pointer-events-auto' : 'opacity-0 scale-95 invisible pointer-events-none'}`}
            >
              {/* 3 Sütunlu Marka Grid Yapısı */}
              <div className="grid grid-cols-3 gap-8 text-white relative z-10">
                {productBrands.map((brand, bIdx) => (
                  <div key={bIdx} className="flex flex-col items-start text-left group/brand">
                    
                    <h3 className="text-sm font-semibold tracking-tight text-white mb-4 border-b border-white/5 pb-2 w-full group-hover/brand:text-white/90 transition-colors">
                      {brand.name}
                    </h3>

                    <ul className="flex flex-col items-start gap-2.5 w-full">
                      {brand.links.map((link, lIdx) => (
                        <li key={lIdx} className="w-full">
                          <a 
                            href="#products" 
                            className="text-xs text-white/70 hover:text-white transition-all flex items-center justify-between group/link w-full py-0.5"
                          >
                            <span>{link}</span>
                            <svg className="w-3 h-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </li>
                      ))}
                    </ul>

                  </div>
                ))}
              </div>

              {/* ALT BİLGİ ŞERİDİ */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40 animate-fade-in">
                
                {/* Sağ Taraf Buton Grubu */}
                <div className="flex items-center gap-5">
                  {/* Tüm Ürünleri Görme Yönlendirme Linki */}
                  <a 
                    href="/products" 
                    className="text-white/80 font-medium hover:text-white transition-colors flex items-center gap-1 group/btn text-[11px]"
                  >
                    Tüm Ürünleri Gör
                    <svg className="w-3 h-3 transform transition-transform group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  <span className="text-white/10 text-xs">|</span>

                  {/* Kataloğu İndirme Butonu (Filled Cam Efektli & Dosya İkonlu) */}
                  <a 
                    href="/catalog.pdf" 
                    download
                    className="bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-medium text-[11px] px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10 transition-all shadow-md active:scale-98"
                  >
                    {/* Minimalist Çizgisel Dosya İndirme İkonu */}
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Kataloğu İndir
                  </a>
                </div>
              </div>

            </div>
          </div>

          <a href="#about" className="text-sm font-medium text-gray-400 hover:text-black transition-colors">About</a>
          <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-black transition-colors">Contact</a>
        </div>

        {/* Sağ Taraf: Dil Seçimi ve CTA Butonu */}
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 p-0.5 rounded-full flex items-center text-[11px] font-bold">
            <span className="px-2.5 py-1 text-gray-400 cursor-pointer hover:text-black transition-colors">TR</span>
            <span className="px-2.5 py-1 bg-black text-white rounded-full cursor-pointer">EN</span>
          </div>
          
          <a href="#contact" className="bg-black hover:bg-neutral-900 text-white text-xs font-medium px-5 py-2.5 rounded-full flex items-center gap-1.5 transition-all shadow-sm">
            Get in touch
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
          </a>
        </div>

      </div>
    </nav>
  );
}