"use client";

import React, { useEffect, useState, useRef } from 'react';

export default function CTA() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false); // Tekrar tetiklenebilirlik için
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white pt-32 pb-40 px-6 overflow-hidden relative">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Ana Slogan - Görseldeki devasa, temiz Apple başlığı */}
        <h2 className={`text-4xl sm:text-5xl md:text-6xl font-normal font-sans text-black tracking-tight leading-[1.1] max-w-3xl transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)
          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          Ready to push your loom further?
        </h2>

        {/* Alt Açıklama Metni - Halı dokuma yedek parça odağına göre güncellendi */}
        <p className={`text-sm sm:text-base text-gray-400 font-normal max-w-xl mt-6 leading-relaxed transition-all duration-1000 delay-200
          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Tezgah duruş sürelerinizi sıfıra indirmek ve üretim verimliliğinizi maksimuma çıkarmak için mühendislik ekibimizle görüşün.
        </p>

        {/* Apple Tarzı İkonik Siyah CTA Butonu */}
        <div className={`mt-10 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <button className="bg-black hover:bg-neutral-950 text-white text-sm font-medium px-8 py-4 rounded-full flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group">
            Get a free consultation
            <svg 
              className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transform transition-transform group-hover:translate-x-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}