"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('Brands');

  return (
    /* Arka plan üstten alta doğru #090909'dan kırmızıya pürüzsüzce geçiyor */
    <section className="w-full bg-gradient-to-b from-[#090909] to-red-600 pt-16 pb-16 overflow-hidden relative">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Üst Küçük Başlık */}
        <span className="text-[10px] font-medium tracking-[0.25em] text-neutral-400 uppercase mb-10 block select-none">
          {t('title')}
        </span>

        {/* Sonsuz Kayar Alan */}
        <div className="flex gap-20 md:gap-32 whitespace-nowrap animate-marquee-slow py-2 group cursor-pointer">
          
          {/* 1. Set (Ana Liste) */}
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