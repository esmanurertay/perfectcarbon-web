"use client";

import React, { useEffect, useState, useRef } from 'react';

// Sayı sayma animasyonu için yardımcı bileşen
function AnimatedNumber({ value, duration = 1500, startAnimate }: { value: string; duration?: number; startAnimate: boolean }) {
  const [count, setCount] = useState("");
  
  useEffect(() => {
    // Eğer ekranda değilse sayıyı sıfırla veya başlangıç haline getir
    if (!startAnimate) {
      setCount("");
      return;
    }

    const isPlus = value.includes('+');
    const isFloat = value.includes('.');
    const cleanValue = value.replace(/[+,]/g, '');
    const target = parseFloat(cleanValue);

    if (isNaN(target)) {
      setCount(value);
      return;
    }

    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Apple tarzı yumuşak yavaşlayan geçiş eğrisi
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = start + easeProgress * (target - start);

      let formatted = "";
      if (isFloat) {
        formatted = current.toFixed(1);
      } else {
        formatted = Math.floor(current).toLocaleString('en-US');
      }

      if (isPlus) formatted += "+";
      setCount(formatted);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration, startAnimate]);

  // Animasyon başlamadıysa ilk an kaba durmasın diye boşluk yerine 0 veya ham değeri fısıldayabiliriz
  return <span>{count || (value.includes('+') ? "0+" : "0")}</span>;
}

const statItems = [
  {
    id: 1,
    value: '240',
    unit: 'g/m',
    label: 'Our lightest carbon rapier',
  },
  {
    id: 2,
    value: '5,800',
    unit: 'MPa',
    label: 'Tensile strength',
  },
  {
    id: 3,
    value: '2.5',
    unit: 'x',
    label: 'Longer than steel',
  },
  {
    id: 4,
    value: '40+',
    unit: '',
    label: 'Countries delivered',
  },
];

export default function Stats() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          // Ekrandan çıkınca durumu false yap ki yukarı/aşağı kaydırınca animasyon baştan başlasın
          setIsInView(false);
        }
      },
      { 
        threshold: 0.1, // Görünürlük hassasiyeti %10
        rootMargin: "0px 0px -50px 0px" // Alt sınırdan biraz pay bırakarak çıkış hissini netleştirir
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white pt-12 pb-24 px-6 md:px-12 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-start text-left">
        
        {/* Üst Küçük Künye */}
        <span className={`text-xs font-bold tracking-[0.2em] text-red-600 uppercase mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Stats
        </span>

        {/* Bölüm Başlığı */}
        <h2 className={`text-4xl md:text-5xl font-normal font-sans text-black tracking-tight mb-16 transition-all duration-700 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Excellence in numbers
        </h2>

        {/* İstatistik Ana Paneli */}
        <div className={`w-full bg-neutral-50/60 border border-neutral-100 rounded-[32px] p-8 md:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 relative transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isInView ? 'opacity-100 scale-100 translate-y-0 shadow-[0_20px_50px_rgba(0,0,0,0.02)]' : 'opacity-0 scale-[0.98] translate-y-12'}`}
        >
          
          {statItems.map((item, index) => {
            // Sırayla açılma gecikmeleri
            const delayClasses = ['delay-[200ms]', 'delay-[350ms]', 'delay-[500ms]', 'delay-[650ms]'];
            
            return (
              <div 
                key={item.id} 
                className={`flex flex-col items-start text-left relative w-full group transition-all duration-700 ${isInView ? delayClasses[index] : 'delay-0'}
                  ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              >
                
                {/* Dikey Çizgiler */}
                {index !== 0 && (
                  <div className={`hidden lg:block absolute left-[-12px] top-1/2 -translate-y-1/2 w-[1px] bg-neutral-200 transition-all duration-1000 ${isInView ? delayClasses[index] : 'delay-0'} ${isInView ? 'h-24' : 'h-0'}`} />
                )}

                {/* Sayı ve Birim */}
                <div className="flex items-baseline gap-0.5 mb-3 select-none">
                  <span className="text-5xl md:text-6xl font-normal tracking-tight text-black font-sans transition-transform duration-300 group-hover:scale-[1.03] inline-block min-w-[3ch]">
                    <AnimatedNumber value={item.value} startAnimate={isInView} />
                  </span>
                  {item.unit && (
                    <span className={`text-sm md:text-base font-medium text-red-600 font-sans ml-0.5 transition-all duration-500 ${isInView ? delayClasses[index] : 'delay-0'} ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-70'}`}>
                      {item.unit}
                    </span>
                  )}
                </div>

                {/* Alt Açıklama Metni */}
                <p className="text-xs md:text-sm text-gray-400 font-normal leading-relaxed max-w-[180px]">
                  {item.label}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}