"use client";

import React, { useEffect, useState, useRef } from 'react';

export default function About() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false); // Yukarı/aşağı kaydırmada animasyonun tazelenmesi için
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
    <section ref={sectionRef} className="w-full bg-white pt-24 pb-28 px-6 md:px-12 overflow-hidden relative">
      
      {/* Sol Alt Köşede Hafif Apple Glow Efekti */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 relative z-10 items-start">
        
        {/* SOL ALAN: Başlık ve İkonik Çizgi */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          
          {/* Üst Küçük Künye */}
          <span className={`text-xs font-bold tracking-[0.2em] text-red-600 uppercase mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            About Us
          </span>

          {/* Büyük Özgün Başlık */}
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-normal font-sans text-black tracking-tight leading-[1.1] transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Crafting the future of
            weaving technology<span className="text-red-600">.</span>
          </h2>

          {/* Apple Tarzı Kademeli Uzayan Yatay Kırmızı Aksan Çizgisi */}
          <div className={`h-[2px] bg-red-600 mt-8 transition-all duration-1000 delay-300 origin-left ${isInView ? 'w-24 opacity-100' : 'w-0 opacity-0'}`} />
        </div>

        {/* SAĞ ALAN: Premium Hikaye Metinleri */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-6 pt-2 lg:pt-8">
          
          <p className={`text-base md:text-lg text-neutral-800 font-normal leading-relaxed transition-all duration-1000 delay-250 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Perfect Carbon Rapier olarak, endüstriyel halı dokuma sektöründe yüksek performans ve mikrometre düzeyinde hassasiyeti yeniden tanımlıyoruz. Van de Wiele, Dornier ve Schönherr gibi dünya devi dokuma sistemlerinin sınırlarını zorlamak için en üst segment karbon kompozit teknolojilerini kullanıyoruz.
          </p>

          <p className={`text-sm md:text-base text-gray-400 font-normal leading-relaxed transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Ürettiğimiz hafifletilmiş karbon mekikler, kancalı şeritler ve yüksek devirli mekanik bileşenler, tezgah duruş sürelerinizi minimuma indirirken üretim hatlarınızın maksimum RPM kapasitesine pürüzsüzce ulaşmasını sağlar. Mühendislikten teslimata kadar geçen her adımda, geleceğin dokuma teknolojisini bugünün fabrikalarına entegre ediyoruz.
          </p>

        </div>

      </div>
    </section>
  );
}