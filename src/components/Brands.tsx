"use client";

import React from 'react';

// Üç ana markayı tekrar eden mimari
const premiumBrands = [
  'VAN DE WIELE',
  'DORNIER',
  'SCHONHERR',
  'VAN DE WIELE',
  'DORNIER',
  'SCHONHERR',
  'VAN DE WIELE',
  'DORNIER',
  'SCHONHERR',
];

export default function Brands() {
  return (
    /* Arka plan üstten alta doğru #090909'dan kırmızıya (bg-red-600 veya red-500) pürüzsüzce geçiyor */
    <section className="w-full bg-gradient-to-b from-[#090909] to-red-600 pt-16 pb-16 overflow-hidden relative">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Üst Küçük Başlık - Karanlık temada okunabilmesi için text-neutral-400 yapıldı */}
        <span className="text-[10px] font-medium tracking-[0.25em] text-neutral-400 uppercase mb-10 block select-none">
          Trusted by manufacturers worldwide
        </span>

        {/* Sonsuz Kayar Alan */}
          {/* Hareket Eden Ana Bant */}
          <div className="flex gap-20 md:gap-32 whitespace-nowrap animate-marquee-slow py-2 group cursor-pointer">
            
            {/* 1. Set (Ana Liste) - Normal hali loş beyaz/gri, hover olunca saf beyaz parlama */}
            {premiumBrands.map((brand, index) => (
              <span 
                key={`main-${index}`}
                className="text-2xl md:text-3xl font-light font-sans tracking-wide text-white/40 select-none transition-colors duration-500 hover:text-white"
              >
                {brand}
              </span>
            ))}

            {/* 2. Set (Sonsuz Döngü Kırılmasın Diye Tekrar Eden Liste) */}
            {premiumBrands.map((brand, index) => (
              <span 
                key={`repeat-${index}`}
                className="text-2xl md:text-3xl font-light font-sans tracking-wide text-white/40 select-none transition-colors duration-500 hover:text-white"
              >
                {brand}
              </span>
            ))}

          </div>

      </div>
    </section>
  );
}