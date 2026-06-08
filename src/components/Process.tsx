"use client";

import React, { useState, useEffect, useRef } from 'react';

const processSteps = [
  {
    id: '01',
    tabName: 'Engineering',
    title: 'Custom CAD Modeling',
    description: 'Tezgah tipinize ve hız gereksinimlerinize özel mikrometre hassasiyetinde CAD modelleme ve simülasyon süreçleri.',
  },
  {
    id: '02',
    tabName: 'Production',
    title: 'Advanced Carbon Layup',
    description: 'Yüksek mukavemetli T800 karbon prepreg katmanların kontrollü basınç altında, otoklavda kusursuz kürlenmesi.',
  },
  {
    id: '03',
    tabName: 'Quality',
    title: 'Rigid Stress Testing',
    description: 'Üretilen her bir yedek parçanın çekme, esneme ve yüksek RPM yorulma testlerinden başarıyla geçmesi.',
  },
  {
    id: '04',
    tabName: 'Delivery',
    title: 'Global Fast Shipping',
    description: 'Vakumlanmış özel koruyucu paketleme ve tezgah duruş sürelerinizi minimuma indiren küresel ekspres teslimat.',
  },
];

export default function Process() {
  const [activeTab, setActiveTab] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Sayfa görünür olduğunda sekmeler arası otomatik döngü (Kullanıcı tıklamadığı sürece)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % processSteps.length);
    }, 4000); // Her 4 saniyede bir sonraki adıma geçer

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="w-full bg-[#0a0a0a] pt-20 pb-24 px-6 md:px-12 text-white overflow-hidden">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* ÜST ALAN: Başlık ve Süreç İsmi (Yan yana çok kompakt yerleşim) */}
        <div className={`w-full flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-left">
            <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase block mb-2">Process</span>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight font-sans">From design to delivery<span className="text-red-600">.</span></h2>
          </div>
          <p className="text-xs text-neutral-500 max-w-xs text-left md:text-right font-normal leading-relaxed">
            Ham karbondan yüksek performanslı yedek parçaya dönüşümün kompakt dikey adımları.
          </p>
        </div>

        {/* ORTA ALAN: Apple Tarzı Segmented Kontrol (Sekmeler) */}
        <div className={`w-full flex border-b border-neutral-900 overflow-x-auto no-scrollbar mb-10 transition-all duration-1000 delay-100 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {processSteps.map((step, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={step.id}
                onClick={() => setActiveTab(index)}
                className="flex-1 min-w-[120px] pb-4 text-left relative transition-all duration-300 group"
              >
                {/* Adım Numarası */}
                <span className={`text-[10px] font-mono font-bold block mb-1 transition-colors duration-300
                  ${isActive ? 'text-red-500' : 'text-neutral-600 group-hover:text-neutral-400'}`}>
                  {step.id}
                </span>
                {/* Sekme Adı */}
                <span className={`text-sm font-medium tracking-tight transition-colors duration-300
                  ${isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'}`}>
                  {step.tabName}
                </span>
                
                {/* Aktif Çizgi Efekti */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-500 origin-left
                  ${isActive ? 'bg-red-600 scale-x-100' : 'bg-transparent scale-x-0 group-hover:bg-neutral-800 group-hover:scale-x-100'}`} 
                />
              </button>
            );
          })}
        </div>

        {/* ALT ALAN: İçerik Paneli (Sadece aktif olan adım görünür, pürüzsüz geçişli) */}
        <div className={`w-full bg-[#111111] border border-neutral-900/60 rounded-[24px] p-8 md:p-10 text-left relative min-h-[180px] flex items-center transition-all duration-1000 delay-200
          ${isInView ? 'opacity-100 scale-100 translate-y-0 shadow-[0_25px_50px_rgba(0,0,0,0.3)]' : 'opacity-0 scale-[0.99] translate-y-6'}`}
        >
          {processSteps.map((step, index) => {
            const isActive = activeTab === index;
            if (!isActive) return null;

            return (
              <div 
                key={step.id}
                className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center animate-fade-in-up"
              >
                {/* Büyük Sayı İllüzyonu (Sol Arka Plan) */}
                <div className="md:col-span-2 hidden md:flex justify-start select-none">
                  <span className="text-6xl font-sans font-light text-neutral-800/40 tracking-tighter">
                    {step.id}
                  </span>
                </div>

                {/* Başlık ve Açıklama Metni */}
                <div className="md:col-span-10 flex flex-col items-start">
                  <h3 className="text-xl md:text-2xl font-normal text-white tracking-tight mb-2 font-sans">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed max-w-3xl">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}