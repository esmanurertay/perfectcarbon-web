"use client";
import React, { useState } from 'react';

export default function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

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
        <a href="#home" className="flex items-center gap-2 cursor-pointer">
          <div className="w-auto h-12 relative">
            <img src="/images/perfect-logo 1.svg" alt="Perfect Carbon Rapier Logo" className="w-auto h-12 object-cover" />
          </div>
        </a>

        {/* Navigasyon Linkleri (Masaüstü) */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium text-black transition-colors hover:text-red-600">Home</a>
          <a href="#about" className="text-sm font-medium text-gray-400 hover:text-black transition-colors">About</a>

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
                            onClick={() => setIsMegaMenuOpen(false)}
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
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-end text-[11px] text-white/40">
                <div className="flex items-center gap-5">
                  <a 
                    href="#products" 
                    onClick={() => setIsMegaMenuOpen(false)}
                    className="text-white/80 font-medium hover:text-white transition-colors flex items-center gap-1 group/btn text-[11px]"
                  >
                    Tüm Ürünleri Gör
                    <svg className="w-3 h-3 transform transition-transform group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <span className="text-white/10 text-xs">|</span>
                  <a 
                    href="/catalog.pdf" 
                    download
                    className="bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-medium text-[11px] px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10 transition-all shadow-md active:scale-98"
                  >
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Kataloğu İndir
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-black transition-colors">Contact</a>
        </div>

        {/* Sağ Taraf: Dil Seçimi, CTA ve Hamburger Butonu */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="bg-gray-100 p-0.5 rounded-full flex items-center text-[11px] font-bold">
            <span className="px-2.5 py-1 text-gray-400 cursor-pointer hover:text-black transition-colors">TR</span>
            <span className="px-2.5 py-1 bg-black text-white rounded-full cursor-pointer">EN</span>
          </div>
          
          <a href="#contact" className="hidden sm:flex bg-black hover:bg-neutral-900 text-white text-xs font-medium px-5 py-2.5 rounded-full items-center gap-1.5 transition-all shadow-sm">
            Get in touch
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
          </a>

          {/* 📱 Hamburger Mobil Menü Butonu */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden items-center justify-center w-10 h-10 rounded-full bg-gray-50 border border-gray-100 text-black hover:bg-gray-100 transition-colors"
            aria-label="Toggle Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 📱 MOBİL DROPDOWN PANEL (Kaydırma Hatası Giderildi) */}
      <div className={`md:hidden absolute top-[90px] left-4 right-4 bg-white border border-gray-100 rounded-[24px] p-5 shadow-xl transition-all duration-300 transform origin-top max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar
        ${isMobileMenuOpen ? 'opacity-100 scale-100 visible pointer-events-auto' : 'opacity-0 scale-95 invisible pointer-events-none'}`}
      >
        <div className="flex flex-col gap-4">
          <a 
            href="#home" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-sm font-medium text-black px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-sm font-medium text-gray-500 px-3 py-2 rounded-xl hover:bg-gray-50 hover:text-black transition-colors"
          >
            About
          </a>

          {/* Mobil Products Akordeon Menü */}
          <div className="flex flex-col">
            <button 
              onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              className="text-sm font-medium text-gray-500 px-3 py-2 rounded-xl hover:bg-gray-50 hover:text-black transition-colors flex items-center justify-between w-full"
            >
              <span>Products</span>
              <svg className={`w-3 h-3 transform transition-transform duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Mobil Alt Ürün Listesi */}
            <div className={`transition-all duration-300 overflow-hidden ${isMobileProductsOpen ? 'max-h-[600px] mt-2 opacity-100 pl-4' : 'max-h-0 opacity-0'}`}>
              {productBrands.map((brand, bIdx) => (
                <div key={bIdx} className="mb-4 text-left">
                  <h4 className="text-xs font-semibold text-gray-900 mb-1.5">{brand.name}</h4>
                  <ul className="flex flex-col gap-1">
                    {brand.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <a 
                          href="#products"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileProductsOpen(false);
                          }}
                          className="text-xs text-gray-500 hover:text-black py-1 block"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-sm font-medium text-gray-500 px-3 py-2 rounded-xl hover:bg-gray-50 hover:text-black transition-colors"
          >
            Contact
          </a>

          {/* Sadece küçük ekranlarda beliren alt "Get in touch" butonu */}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="sm:hidden w-full bg-black hover:bg-neutral-900 text-white text-xs font-medium py-3 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center mt-2"
          >
            Get in touch
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}