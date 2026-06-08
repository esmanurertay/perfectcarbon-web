"use client";

import React, { useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    brand: 'Van de Wiele',
    name: 'Karbon Mekik Grubu',
    spec: 'Uyum: RCE, Active',
    meta: '750 RPM Max',
    position: 'top-[16%] left-[4%] lg:left-[8%]',
    size: 'w-[250px]',
    delay: 'delay-100',
    speed: 'animate-float',
    image: '/images/vdw-mekik.png'
  },
  {
    id: 2,
    brand: 'Dornier',
    name: 'Yüksek Devir Dişli Seti',
    spec: 'Uyum: AWS, PTS',
    meta: 'Ultra-Durable',
    position: 'bottom-[12%] left-[6%] lg:left-[12%]',
    size: 'w-[230px]',
    delay: 'delay-300',
    speed: 'animate-float [animation-delay:2s]',
    image: '/images/dornier-disli.png'
  },
  {
    id: 3,
    brand: 'Schönherr',
    name: 'Hassas Kesim Makasları',
    spec: 'Bıçak: Karbon Kompozit',
    meta: '0.02mm Tolerans',
    position: 'top-[22%] right-[4%] lg:right-[8%]',
    size: 'w-[240px]',
    delay: 'delay-200',
    speed: 'animate-float [animation-delay:1s]',
    image: '/images/schonherr-makas.png'
  },
  {
    id: 4,
    brand: 'Van de Wiele',
    name: 'Teknolojik Şiş Grubu',
    spec: 'Uyum: Shaggylogic',
    meta: 'Weight: -35%',
    position: 'bottom-[16%] right-[5%] lg:right-[14%]',
    size: 'w-[260px]',
    delay: 'delay-500',
    speed: 'animate-float [animation-delay:3s]',
    image: '/images/vdw-sis.png'
  }
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col justify-center items-center overflow-hidden pt-36 pb-24 px-6">
      
      {/* SPATIAL BACKGROUND */}
      <div className="absolute w-[700px] h-[700px] bg-gradient-to-tr from-red-500/10 via-rose-500/5 to-transparent rounded-full blur-[140px] pointer-events-none z-0 animate-pulse-glow" />
      <div className="absolute w-[500px] h-[500px] bg-neutral-100 rounded-full blur-[100px] pointer-events-none z-0 -translate-x-40 translate-y-20" />

      {/* 3D FLOATING CANVAS */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block">
        {products.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={item.id}
              className={`absolute ${item.position} ${item.size} pointer-events-auto opacity-0 animate-fade-in-up ${item.delay} transition-all duration-700 ease-in-out`}
              onMouseEnter={() => {
                setIsHovered(true);
                setActiveIndex(index);
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div 
                className={`w-full backdrop-blur-xl border rounded-[24px] p-4 transition-all duration-700 ease-in-out group/card ${item.speed}
                  ${isActive 
                    ? 'bg-white border-red-500/30 shadow-[0_30px_60px_rgba(220,38,38,0.08)] -translate-y-2 scale-100 opacity-100 blur-0 z-30' 
                    : 'bg-white/40 border-neutral-100 shadow-[0_12px_40px_rgba(0,0,0,0.01)] scale-90 opacity-40 blur-[2px] z-20 hover:opacity-100 hover:blur-0 hover:scale-100 hover:border-red-500/30'
                  }`}
              >
                
                {/* Resim Alanı - Görseller max-h-16 ve p-6 ile küçültüldü */}
                <div className="w-full h-28 bg-white rounded-xl border border-neutral-50/50 flex items-center justify-center p-6 relative overflow-hidden shadow-[inset_0_2px_8px_rgba(0,0,0,0.01)]">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className={`max-w-full max-h-16 object-contain filter drop-shadow-sm transition-transform duration-500 z-10
                      ${isActive ? 'scale-105' : 'scale-100'}`}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-[9px] font-mono text-neutral-200 tracking-widest uppercase select-none z-0">
                    {item.brand.split(' ')[0]}
                  </div>
                  
                  <span className={`absolute top-2 right-2 text-[8px] font-mono px-1.5 py-0.5 rounded border transition-colors duration-500
                    ${isActive ? 'bg-red-50 text-red-500 border-red-100' : 'bg-neutral-50 text-neutral-400 border-neutral-100'}`}>
                    {item.meta}
                  </span>
                </div>

                {/* Kimlik & Teknik Bilgiler */}
                <div className="mt-3.5 flex flex-col items-start text-left">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[9px] font-bold tracking-widest text-neutral-900 uppercase">
                      {item.brand}
                    </span>
                    <span className={`w-1 h-1 rounded-full transition-colors ${isActive ? 'bg-red-500' : 'bg-neutral-300'}`}></span>
                    <span className="text-[9px] font-medium text-neutral-400">
                      {item.spec.split(':')[0]}
                    </span>
                  </div>
                  
                  <h3 className={`text-sm font-medium tracking-tight leading-snug transition-colors duration-500
                    ${isActive ? 'text-red-600' : 'text-black'}`}>
                    {item.name}
                  </h3>
                  
                  <p className="text-[11px] text-neutral-400 mt-0.5 font-sans truncate w-full">
                    {item.spec}
                  </p>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* MAIN TEXT AREA */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center justify-center pointer-events-auto">
        
        {/* Üst Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-md border border-neutral-200/60 rounded-full mb-8 opacity-0 animate-fade-in-up shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
          <span className="text-[9px] font-bold tracking-[0.2em] text-neutral-600 uppercase">
            Van de Wiele • Dornier • Schönherr Components
          </span>
        </div>

        {/* Sinematik Başlık */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-normal font-sans text-black tracking-tight leading-[1.02] mb-8 opacity-0 animate-fade-in-up delay-100">
          Perfecting <br />
          the core of <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-red-600 to-black font-semibold">weaving</span>
          <span className="text-red-600">.</span>
        </h1>

        {/* Açıklama Metni */}
        <p className="text-base sm:text-lg text-neutral-400 font-normal max-w-xl leading-relaxed mb-12 opacity-0 animate-fade-in-up delay-200">
          Yüksek performanslı dokuma makineleri için mikrometre düzeyinde hassasiyet. Karbon fiber teknolojisiyle üretilen dayanıklı yedek parçalar.
        </p>

        {/* İnteraktif Aksiyon Butonları */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto opacity-0 animate-fade-in-up delay-300">
          <button className="w-full sm:w-auto bg-black hover:bg-neutral-900 text-white text-sm font-medium px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 group">
            Ürün Kataloğunu Keşfet
            <svg className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button className="w-full sm:w-auto border border-neutral-200 hover:border-neutral-300 bg-white/40 backdrop-blur-md text-neutral-800 text-sm font-medium px-8 py-4 rounded-full transition-all hover:bg-white hover:-translate-y-0.5">
            Teknik Detay Alın
          </button>
        </div>

      </div>

      {/* MOBILE BREAKOUT - Mobil görünümdeki resim alanları da max-h-16 ile küçültüldü */}
      <div className="w-full mt-16 md:hidden relative z-30 opacity-0 animate-fade-in-up delay-300">
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory px-2">
          {products.map((item) => (
            <div key={item.id} className="w-[250px] shrink-0 bg-neutral-50 border border-neutral-100 rounded-2xl p-4 snap-start">
              <div className="w-full h-24 bg-white border border-neutral-100/50 rounded-xl flex items-center justify-center p-4 text-[10px] text-neutral-300 font-mono">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="max-w-full max-h-14 object-contain filter drop-shadow-sm"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="mt-3 text-left">
                <span className="text-[9px] font-bold text-red-600 uppercase tracking-wider block">{item.brand}</span>
                <span className="text-sm font-medium text-black block truncate mt-0.5">{item.name}</span>
                <span className="text-[11px] text-neutral-400 block mt-0.5">{item.spec}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}